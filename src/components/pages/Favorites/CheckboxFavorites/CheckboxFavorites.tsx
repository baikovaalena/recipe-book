import './CheckboxFavorites.css';
import { TSaveRecipe } from '../../../../types/TSaveRecipe';

interface IProps {
  favoritesOnChange: (saveRecipe: TSaveRecipe) => void;
  id: number;
  isChecked: boolean;
  saveRecipe: TSaveRecipe;
}

const CheckBoxFavorites = ({ favoritesOnChange, id, isChecked, saveRecipe }: IProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className="checkbox"
        onChange={() => favoritesOnChange(saveRecipe)}
        checked={isChecked}
      />
      <label htmlFor={`checkbox-${id}`} className="checkbox-label"></label>
    </>
  );
};

export default CheckBoxFavorites;
