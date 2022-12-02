import Movie from "./Movie";
import Search from "./Search";
import Pagination from "./Pagination";

const Home = () => {

  

  return (
    <>
      <div className="container">
        
        <Search />
        <Movie />
        
        
      </div>
      <Pagination/>
    </>
  );
};

export default Home;