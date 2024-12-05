import React from 'react';
import './SortingParameters.css';
import './SortingParametersMobileVersion/SortingParametersMobileVersion.css';
import { TCheckboxSort } from '../../../../types/TCheckboxSort';

interface IProps {
  onCheckboxDiets: (sortType: TCheckboxSort) => void;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isKeto: boolean;
}

const SortingParameters = ({
  isGlutenFree,
  isVegan,
  isVegetarian,
  onCheckboxDiets,
  isKeto,
}: IProps) => {
  return (
    <div className="container-inputs">
      <label className="container-inputs__label-vegan">
        <input
          type="checkbox"
          className="container-inputs__input"
          onChange={() => onCheckboxDiets('vegan')}
          checked={isVegan}
        />
        Блюда для веганов
      </label>
      <label className="container-inputs__label-vegetarian">
        <input
          type="checkbox"
          className="container-inputs__input"
          onChange={() => onCheckboxDiets('vegetarian')}
          checked={isVegetarian}
        />
        Блюда для вегетерианцев
      </label>
      <label className="container-inputs__label-ketogenic">
        <input
          type="checkbox"
          className="container-inputs__input"
          onChange={() => onCheckboxDiets('ketogenic')}
          checked={isKeto}
        />
        Keto-диета
      </label>
      <label className="container-inputs__label-gluten">
        <input
          type="checkbox"
          className="container-inputs__input"
          onChange={() => onCheckboxDiets('glutenFree')}
          checked={isGlutenFree}
        />
        Без глютена
      </label>
    </div>
  );
};

export default SortingParameters;
