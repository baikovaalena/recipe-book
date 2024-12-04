import React from 'react';
import './SortingParameters.css';

interface IProps {
  onCheckboxVegan: () => void;
  onCheckboxVegetarian: () => void;
  onCheckboxKeto: () => void;
  onCheckboxGlutenFree: () => void;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isKeto: boolean;
}

const SortingParameters = ({
  onCheckboxVegan,
  onCheckboxVegetarian,
  onCheckboxKeto,
  onCheckboxGlutenFree,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isKeto,
}: IProps) => {
  return (
    <div className="sorting-parameters">
      <label className="label-vegan">
        <input
          type="checkbox"
          className="input-vegeterian"
          onChange={onCheckboxVegan}
          checked={isVegan}
        />
        Блюда для веганов
      </label>
      <label className="label-vegeterian">
        <input
          type="checkbox"
          className="input-vegeterian"
          onChange={onCheckboxVegetarian}
          checked={isVegetarian}
        />
        Блюда для вегетерианцев
      </label>
      <label className="label-keta">
        <input
          type="checkbox"
          className="input-vegeterian"
          onChange={onCheckboxKeto}
          checked={isKeto}
        />
        Keto-диета
      </label>
      <label className="label-gluten">
        <input
          type="checkbox"
          className="input-vegeterian"
          onChange={onCheckboxGlutenFree}
          checked={isGlutenFree}
        />
        Без глютена
      </label>
    </div>
  );
};

export default SortingParameters;
