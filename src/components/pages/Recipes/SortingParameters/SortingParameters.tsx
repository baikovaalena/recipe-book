import React from 'react';
import './SortingParameters.css';
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
  const sortInputs = [
    {
      id: '1',
      type: 'checkbox',
      label: 'Блюда для веганов',
      onChange: () => onCheckboxDiets('vegan'),
      checked: isVegan,
    },
    {
      id: '2',
      type: 'checkbox',
      label: 'Блюда для вегетерианцев',
      onChange: () => onCheckboxDiets('vegetarian'),
      checked: isVegetarian,
    },
    {
      id: '3',
      type: 'checkbox',
      label: 'Блюда для кето-диеты',
      onChange: () => onCheckboxDiets('ketogenic'),
      checked: isKeto,
    },
    {
      id: '4',
      type: 'checkbox',
      label: 'Блюда без глютена',
      onChange: () => onCheckboxDiets('glutenFree'),
      checked: isGlutenFree,
    },
  ];

  return (
    <div className="container-inputs">
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
  );
};

export default SortingParameters;
