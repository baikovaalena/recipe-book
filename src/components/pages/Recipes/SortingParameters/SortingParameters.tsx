import React from 'react';
import './SortingParameters.css';
import { TCheckboxSort } from '../../../../types/TCheckboxSort';
import { ISortPrams } from '../Recipes';

interface IProps {
  onCheckboxDiets: (sortType: TCheckboxSort) => void;
  parameters: ISortPrams;
  onChangeNumberOfCards: (value: number) => void;
}

const SortingParameters = ({ parameters, onCheckboxDiets, onChangeNumberOfCards }: IProps) => {
  const sortInputs = [
    {
      id: '1',
      type: 'checkbox',
      label: 'Блюда для веганов',
      onChange: () => onCheckboxDiets('vegan'),
      checked: parameters.isVegan,
    },
    {
      id: '2',
      type: 'checkbox',
      label: 'Блюда для вегетерианцев',
      onChange: () => onCheckboxDiets('vegetarian'),
      checked: parameters.isVegetarian,
    },
    {
      id: '3',
      type: 'checkbox',
      label: 'Блюда для кето-диеты',
      onChange: () => onCheckboxDiets('ketogenic'),
      checked: parameters.isKeto,
    },
    {
      id: '4',
      type: 'checkbox',
      label: 'Блюда без глютена',
      onChange: () => onCheckboxDiets('glutenFree'),
      checked: parameters.isGlutenFree,
    },
  ];
  const numbers = [
    {
      value: 10,
      label: 'Количество карточек на странице?',
    },
    {
      value: 15,
      label: 'Количество карточек на странице?',
    },
    {
      value: 20,
      label: 'Количество карточек на странице?',
    },
  ];

  return (
    <div className="container-inputs">
      <div className="container-inputs-checkbox">
        <p className="container-inputs-checkbox-title">Тип блюда?</p>
        {sortInputs.map((itemInput) => {
          return (
            <label key={itemInput.id}>
              <input
                type={itemInput.type}
                onChange={itemInput.onChange}
                checked={itemInput.checked}
              />
              {itemInput.label}
            </label>
          );
        })}
      </div>
      <div className="container-inputs-radio">
        <label htmlFor="numberInput" className="container-inputs-drop-title">
          Количество карточек на странице?
        </label>
        <select
          name="numberInput"
          id="numberInput"
          onChange={(e) => onChangeNumberOfCards(Number(e.target.value))}
        >
          {numbers.map((numberInput) => {
            const { value } = numberInput;
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SortingParameters;
