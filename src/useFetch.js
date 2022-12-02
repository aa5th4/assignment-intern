import { useState, useEffect } from "react";

// setting the api link
export const API_URL = `https://www.omdbapi.com/?apikey=31d45f51`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);
  const [pageCount,setpageCount] = useState(10);
  const [ page,setPage] = useState(1);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
        setpageCount(~~(data.totalResults/10));
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getNextPage = () => {
      setPage(page+1 > pageCount ? 1  : page+1);
  };
  const getPrevPage = () => {
    setPage(page-1 <= 0 ? 1  : page-1);
  };



  // debouncing in react js
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${apiParams}&page=${page}`);
    }, 1000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams,page]);

  return { isLoading, isError, movie ,page, pageCount,getNextPage ,getPrevPage};
};

export default useFetch;