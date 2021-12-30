import "./Search.css";
import logoSearch from "./../assets/img/search.png";

const Search = () => {
  return (
    <div className="search od-1">
      <div className="container">
        <div className="row">
          <div className="col-9 search__input__col">
            {/* search input */}
            <div className="d-flex align-items-center search__input">
              <div className="pr-4 search__input__icon">
                <img src={logoSearch} />
              </div>
              <div className="search__input__input">
                <input
                  className="form-control search__input__text"
                  type="text"
                  placeholder="living room"
                />
              </div>
            </div>
            {/* end search input */}
          </div>
          <div className="col-3 search__filter__col">
            {/* search filter */}
            <div className="search__filter">
              <select className="form-control" defaultValue="">
                <option selected>Best match</option>
                <option>a</option>
                <option>b</option>
              </select>
            </div>
            {/* end search filter */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
