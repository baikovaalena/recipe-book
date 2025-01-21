import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(value);
    }, 400);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
