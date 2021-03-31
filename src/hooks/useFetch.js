import { useEffect, useState } from "react";

export const useFetch = (url = `https://rickandmortyapi.com/api/character`) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setstate({
          loading: false,
          error: null,
          data: data,
        });
      });
  }, [url]);
  return state;
};
