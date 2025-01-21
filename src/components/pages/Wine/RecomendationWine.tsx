import React, { useEffect, useState } from 'react';
import { getRecommendationWine } from '../../../api';
import { RecommendedWinesResponse } from '../../../types/IWine';
import './RecommendationWine.css';
import useDebounce from '../../../hooks/useDebounce';
import Loader from '../../shared/Loader/Loader';
import WineInput from './WineInput/WineInput';

const RecommendationWine = () => {
  const [recommendationWine, setRecommendationWine] = useState<RecommendedWinesResponse>();
  const [valueNameWine, setValueNameWine] = useState<string>('');
  const [scoreWine, setScoreWine] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const debounceNameWine = useDebounce(valueNameWine);
  const debounceScoreWine = useDebounce(scoreWine);

  const handleRangeWine = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScoreWine(Number(event.target.value));
  };

  const handleValueNameWine = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueNameWine(event.target.value);
  };

  useEffect(() => {
    const fetchWine = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const dataWine = await getRecommendationWine({
          valueNameWine: debounceNameWine,
          scoreWine: debounceScoreWine,
        });

        setRecommendationWine(dataWine);
      } catch (err) {
        setError('Ошибка загрузки рекомендованных вин. Попробуйте снова.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWine();
  }, [debounceNameWine, debounceScoreWine]);

  return (
    <>
      <WineInput
        onChangeRangeWine={handleRangeWine}
        onChangeValueNameWine={handleValueNameWine}
        valueNameWine={valueNameWine}
        scoreWine={scoreWine}
      />

      {error && (
        <div>
          <h2 className="title-example">{error}</h2>
          <h2 className="title-example">Введите название вина, например:</h2>
          <div className="wine-list">
            <h3>Красные вина</h3>
            <ul>
              <li>Merlot (Мерло)</li>
              <li>Cabernet Sauvignon (Каберне Совиньон)</li>
              <li>Pinot Noir (Пино Нуар)</li>
              <li>Syrah/Shiraz (Сира/Шираз)</li>
              <li>Malbec (Мальбек)</li>
              <li>Zinfandel (Зинфандель)</li>
              <li>Sangiovese (Санджовезе)</li>
              <li>Tempranillo (Темпранильо)</li>
              <li>Grenache/Garnacha (Гренаш/Гарнача)</li>
            </ul>
          </div>
        </div>
      )}

      {isLoading && <Loader />}

      {recommendationWine && scoreWine && (
        <div className="wine-container-card">
          {recommendationWine.recommendedWines.map((wine) => {
            return (
              <div
                key={wine.id}
                onMouseEnter={() => setHoveredId(wine.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {hoveredId === wine.id ? (
                  <div className="wine-description">
                    <p className="description">{wine.description}</p>
                  </div>
                ) : (
                  <div className="wine-cards" key={wine.id}>
                    <h2 className="wine-title">{wine.title}</h2>
                    <img src={wine.imageUrl} alt="image-wine" className="wine-img" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default RecommendationWine;
