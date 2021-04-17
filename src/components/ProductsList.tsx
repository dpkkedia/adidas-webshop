import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ProductTile from "./ProductTile";
import Search from "./Search";

const ProductsList: React.FC = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const { data, error, loading } = useTypedSelector((state) => state.products);

  const handleCallback = (searchTxt: any) => {
    setSearchedTerm(searchTxt);
  };

  const filterResult = (result: any) => {
    return result.id.indexOf(searchedTerm) > -1;
  };

  return (
    <div>
      <Search searchedData={handleCallback} />
      {error && <h3>{error}</h3>}
      {loading && (
        <div className="spinner-grow m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <div className="container">
        <div className="row">
          {!error && !loading && data
            ? [
                data
                  .filter(filterResult)
                  .map((result: any) => (
                    <ProductTile key={result.id} tileData={result} />
                  )),
              ]
            : [
                !error && !loading && data.filter(filterResult).length === 0 && (
                  <div className="alert alert-info col-md-12" role="alert">
                    No Data found. Please check the Search Term
                  </div>
                ),
              ]}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
