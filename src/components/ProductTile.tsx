import { Link } from "react-router-dom";

const ProductTile: React.FC<any> = ({ tileData }) => {
  return (
    <div>
      <Link to={`/product/${tileData.id}`}>
        <div className="card text-center m-4" style={{ width: "18rem" }}>
          <img
            src={tileData.imgUrl}
            className="card-img-top"
            alt={tileData.id}
          />
          <div className="card-body">
            <h5 className="card-title">
              {tileData.id} : {tileData.name}
            </h5>
            <p className="card-text">
              {tileData.description} : This is what is coming From API response
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductTile;
