import React, { useEffect, useState } from 'react';
import { getRecommendationWine } from '../../../api';
import { Wine } from '../../../types/IWine';
import './RecommendationWine.css';
import useDebounce from '../../../hooks/useDebounce';
import Loader from '../../shared/Loader/Loader';
import WineInput from './WineInput/WineInput';
import WineCard from './WineCard/WineCard';

const RecommendationWine = () => {
  const [recommendationWine, setRecommendationWine] = useState<Wine[]>([]);
  const [valueNameWine, setValueNameWine] = useState<string>('');
  const [scoreWine, setScoreWine] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

        setRecommendationWine(dataWine.recommendedWines);
      } catch (err) {
        setError('Ошибка загрузки рекомендованных вин. Попробуйте снова.');
      } finally {
        setIsLoading(false);
      }
    };

    if (debounceNameWine.length > 0) {
      fetchWine();
    } else {
      setRecommendationWine([]);
    }
  }, [debounceNameWine, debounceScoreWine]);

  return (
    <>
      <WineInput
        onChangeRangeWine={handleRangeWine}
        onChangeValueNameWine={handleValueNameWine}
        valueNameWine={valueNameWine}
        scoreWine={scoreWine}
      />

      {error && <h2 className="title-example">{error}</h2>}

      {valueNameWine === '' && (
        <div>
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

      {recommendationWine && (
        <div className="wine-container-card">
          {recommendationWine.map((wine) => {
            return <WineCard wine={wine} key={wine.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default RecommendationWine;
