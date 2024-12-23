import './SearchRecipe.css';

interface SearchRecipeProps {
  onChange: (value: string) => void;
  searchValue: string;
  onSearch: () => void;
}

const SearchRecipe = ({ searchValue, onChange, onSearch }: SearchRecipeProps) => {
  return (
    <div className="search-container">
      <h1 className="search-container__input-title">Найди вдохновение для вкусных блюд</h1>
      <div className="search-container__input-btn">
        <input
          type="text"
          placeholder="Найти свой рецепт"
          className="search-container__input-recipe"
          value={searchValue}
          onChange={(e) => onChange(e.target.value)}
        />
        <button onClick={onSearch} className="search-container__button-recipe">
          Найти
        </button>
      </div>
    </div>
  );
};

export default SearchRecipe;
