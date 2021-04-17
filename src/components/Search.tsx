import { useState } from "react";

const Search: React.FC<any> = ({searchedData}) => {

  const [searchText, setSearchText] = useState('');
  
  const getProductListEventhandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
    searchedData(event.target.value);
  };

  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <img
            className="d-block mx-auto mb-4"
            src="/adidas-logo.png"
            alt="Adidas Logo"
            width="220"
            height="160"
          />
        </h5>
        <nav className="my-2 my-md-0 mr-md-3"></nav>
        <form>
          <input
            type="search"
            className="form-control ds-input"
            id="search-input"
            placeholder="Search..."
            aria-label="Search for..."
            autoComplete="off"
            data-docs-version="4.3"
            aria-autocomplete="list"
            aria-owns="algolia-autocomplete-listbox-0"
            dir="auto"
            value={searchText}
            onChange={getProductListEventhandler}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
