import Filter from "../components/Filter";
import Nav from "../components/Nav";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import Search from "../components/Search";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <Search />
        <div className="main__content">
          <div className="container">
            <div className="row">
              <Filter />
              <div className="col-9 content__col">
                <Products />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
