import './SearchRecipe.css';

interface SearchRecipeProps {
  handleOnChange: (value: string) => void;
  searchValue: string;
  handleClick: () => void;
}

const SearchRecipe = ({ searchValue, handleOnChange, handleClick }: SearchRecipeProps) => {
  return (
    <div className="search__container">
      <h1 className="search__container_input-title">Найди вдохновение для вкусных блюд</h1>
      <div className="search__container_input-btn">
        <input
          type="text"
          placeholder="Найти свой рецепт"
          className="search-input-recipe"
          value={searchValue}
          onChange={(e) => handleOnChange(e.target.value)}
        />
        <button onClick={handleClick} className="search-button-recipe">
          Найти
        </button>
      </div>
    </div>
  );
};

export default SearchRecipe;
