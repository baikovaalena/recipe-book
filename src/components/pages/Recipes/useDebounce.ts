import { useEffect, useState } from 'react';

const useDebounce = (value: string) => {
  const [inputDebounce, setInputDebounce] = useState<string>('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setInputDebounce(value);
    }, 400);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);

  return inputDebounce;
};

export default useDebounce;
