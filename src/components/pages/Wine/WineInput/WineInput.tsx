import React from 'react';

interface IProps {
  onChangeRangeWine: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeValueNameWine: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueNameWine: string;
  scoreWine: number;
}

const WineInput = ({
  onChangeRangeWine,
  onChangeValueNameWine,
  valueNameWine,
  scoreWine,
}: IProps) => {
  return (
    <div className="wine-background">
      <div className="wine-container">
        <h1 className="wine-title">Вино</h1>
        <div className="wine-inner-container">
          <input
            type="text"
            placeholder="Введите тип вина"
            className="wine-input"
            value={valueNameWine}
            onChange={onChangeValueNameWine}
          />
          <div className="wine-range-container">
            <label htmlFor="volume" className="wine-label">
              Оценка вина: {scoreWine}
            </label>
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.1"
              value={scoreWine}
              onChange={onChangeRangeWine}
              className="wine-range"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineInput;
