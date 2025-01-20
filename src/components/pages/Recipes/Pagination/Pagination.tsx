import './Pagination.css';
import { paginationResponse } from '../../../../types/IRecipeApiResponse';
import { switchPage } from '../../../../utils/switchPage';

interface IProps {
  dataPagination: paginationResponse;
  onChangeInfoForPagination: (button: number) => void;
  currentPage: number;
}

const Pagination = ({ dataPagination, onChangeInfoForPagination, currentPage }: IProps) => {
  const { totalResults, number } = dataPagination;
  const switchPages = switchPage(Math.ceil(totalResults / number), currentPage);

  return (
    <ul className="container__pagination">
      {switchPages.map((numberPage: number | string, index: number) => {
        return typeof numberPage === 'number' ? (
          <li
            className={
              currentPage === numberPage
                ? 'pagination__button-active'
                : 'container__pagination-button'
            }
            key={index}
            onClick={() => {
              onChangeInfoForPagination(numberPage);
            }}
          >
            {numberPage}
          </li>
        ) : (
          <li key={index} className="container__pagination-dots">
            {numberPage}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
