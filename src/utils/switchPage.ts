const MINIMUM_PAGES = 15;

export const switchPage = (lastPage: number, currentPage: number) => {
  const result: (number | string)[] = [1];
  const start = Math.max(currentPage - 2, 2);
  const end = Math.min(currentPage + 2, lastPage - 1);

  if (lastPage <= MINIMUM_PAGES) {
    return new Array({ length: lastPage }).map((_, i) => i + 1);
  }

  if (currentPage > 4) {
    result.push('...');
  }

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  if (currentPage < lastPage - 3) {
    result.push('...');
  }

  result.push(lastPage);

  return result;
};
