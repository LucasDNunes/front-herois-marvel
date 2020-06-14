import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Loader from 'react-loader-spinner';

import api from '../../../services/api';

import { Container, Image, Name, NoSeries, PageHandler } from './styles';

export default function Series({ id }) {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 24;

  useEffect(() => {
    async function loadSeries() {
      setLoading(true);
      const response = await api.get(`v1/public/characters/${id}/series`,{
          params: {
            limit,
            offset,
          },
        }
      );

      const { total, count, results } = response.data.data;

      setLoading(false);
      setSeries(results);
      if (pageCount === 0) {
        setPageCount(Math.ceil(total / count));
      }
    }
    loadSeries();
  }, [id, offset]);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    setOffset(limit * currentPage);
  }

  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
    setOffset(limit * currentPage);
  }

  function renderLoading() {
    return (
      <Loader
        data-testid="loader"
        type="TailSpin"
        color="#fff"
        width={32}
        height={32}
      />
    );
  }

  return (
    <Container>
      {loading ? (
        renderLoading()
      ) : (
        <div className="series" data-testid="series">
          {series.map(serie => {
            const { id, title, thumbnail } = serie;
            const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;
            return (
              <div className="serie" data-testid="serie" key={id}>
                <Image src={imageSrc} alt={title} />
                <Name>{title}</Name>
              </div>
            );
          })}
          <NoSeries data-testid="noserie" hide={series.length > 0}>
            <p>Este personagem não tem series.</p>
          </NoSeries>
        </div>
      )}

      <PageHandler hide={series.length > 0}>
        <button
          type="button"
          disabled={currentPage === 1 || loading}
          onClick={handlePreviousPage}
        >
          <MdChevronLeft size={24} color="#fff" />
        </button>
        <span>{`${currentPage} of ${pageCount}`}</span>
        <button
          type="button"
          disabled={currentPage === pageCount || loading}
          onClick={handleNextPage}
        >
          <MdChevronRight size={24} color="#fff" />
        </button>
      </PageHandler>
    </Container>
  );
}
