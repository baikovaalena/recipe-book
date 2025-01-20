import './CheckboxFavorites.css';
import { IFavoriteRecipe } from '../../../../types/IFavoriteRecipe';
interface IProps {
  onChangeFavorites: (saveRecipe: IFavoriteRecipe) => void;
  id: number;
  isChecked: boolean;
  favoriteRecipe: IFavoriteRecipe;
}

const CheckBoxFavorites = ({ onChangeFavorites, id, isChecked, favoriteRecipe }: IProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className="checkbox"
        onChange={() => onChangeFavorites(favoriteRecipe)}
        checked={isChecked}
      />
      <label htmlFor={`checkbox-${id}`} className="checkbox-label"></label>
    </>
  );
};

export default CheckBoxFavorites;
