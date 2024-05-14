import { useState, useEffect } from 'react';

const useStringToArray = (string, separator) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (string) {
      const newArray = string.split(separator);
      setArray(newArray);
    } else {
      setArray([]);
    }
  }, [string, separator]);

  return array;
};

export default useStringToArray;
