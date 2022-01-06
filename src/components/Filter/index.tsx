import { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [priceInput, setPriceInput] = useState(0);
  // console.log(priceInput);
  return (
    <div className="col-3 filter__col">
      <div className="filter">
        <div className="filter__name">Filter by</div>
        <div className="filter__select">
          <select className="form-control filter__select__item" defaultValue="">
            <option selected>Collection</option>
            <option>a</option>
            <option>b</option>
          </select>
          <select className="form-control filter__select__item" defaultValue="">
            <option selected>Color</option>
            <option>a</option>
            <option>b</option>
          </select>
          <select
            className="form-control filter__select__item"
            defaultValue="0"
          >
            <option value="0">Category</option>
            <option>a</option>
            <option>b</option>
          </select>
        </div>
        <div className="filter__range">
          <div className="filter__range__name">Price Range: ${priceInput}</div>
          <div className="filter__range__input">
            <input
              type="range"
              className="form-control-range"
              min="0"
              max="10000"
              value={priceInput}
              onChange={(e) => setPriceInput(+e.target.value)}
            />
            <div className="d-flex justify-content-between range__value">
              <span>$0</span>
              <span>$10,000+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
