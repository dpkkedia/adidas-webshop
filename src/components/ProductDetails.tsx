import { useEffect, useState } from "react";
import Modal from "react-modal";
import { RouteComponentProps } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface RouteParams {
  id: string;
}

const ProductDetails: React.FC<RouteComponentProps<RouteParams>> = ({
  match,
}) => {
  const { id } = match.params;
  const { data, error, loading } = useTypedSelector((state) => state.products);
  const [product, setProduct] = useState<any>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [reviewAdded, setReviewAdded] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  let history = useHistory();

  useEffect(() => {
    const product = data.filter((result: any) => {
      return result.id === id;
    });
    setProduct(product[0]);
  }, [data, id]);

  const addReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReviewAdded(true);
    product.reviews = [...product.reviews, { rating: rating, text: review }];
    setModalIsOpenToFalse();
    setTimeout(function () {
      setReviewAdded(false);
    }, 2000);
  };

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#F0AA89",
    },
  };

  return (
    <div>
      {error && <h3>{error}</h3>}
      {loading && (
        <div className="spinner-grow m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!error && !loading && product && (
        <div>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 ml-3 mr-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
              <Link to={"/"}>
                <img
                  className="d-block mx-auto mb-4"
                  src="/adidas-logo.png"
                  alt="Adidas Logo"
                  width="220"
                  height="160"
                />
              </Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3"></nav>
            <button
              onClick={() => history.goBack()}
              type="button"
              className="btn btn-outline-dark"
            >
              Back
            </button>
          </div>
          <div className="row mt-4 ml-3">
            <div className="col-md-3">
              <img
                src={product.imgUrl}
                width="350"
                className="img-fluid"
                alt="Adidas"
              />
              <p>
                <button
                  onClick={setModalIsOpenToTrue}
                  type="button"
                  className="mt-2 btn btn-primary"
                >
                  Add a Review
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  style={modalStyles}
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="reviewModal">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          onClick={setModalIsOpenToFalse}
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={addReview}>
                          <div className="form-group">
                            <label htmlFor="reviewForm">Rating</label>
                            <input
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                              type="number"
                              className="form-control"
                              id="reviewForm"
                              placeholder="Enter Rating"
                              min="1"
                              max="5"
                              required
                            />
                            <small
                              id="ratingHelp"
                              className="form-text text-muted"
                            >
                              Adidas cares about rating and user feel
                            </small>
                          </div>
                          <div className="form-group">
                            <label htmlFor="review">Review</label>
                            <input
                              value={review}
                              onChange={(e) => setReview(e.target.value)}
                              type="textarea"
                              className="form-control"
                              id="review"
                              placeholder="Review"
                              required
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary ml-2"
                            onClick={setModalIsOpenToFalse}
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </Modal>
              </p>
            </div>
            <div className="col-md-8">
              <h3 className="mb-3 mt-4">
                {product.id}-{product.name}
              </h3>
              <h4 className="mb-3 text-muted">€{product.price}</h4>
              <p className="card-text mb-auto">
                {product.description}
                This is a wider dewscription with supporting text below as a
                natural lead-in to additional content.
              </p>
            </div>
          </div>
          {reviewAdded && (
            <div className="row mt-1 ml-3 mr-3">
              <div className="col-md-12 ml-3 mr-3">
                <div className="alert alert-success" role="alert">
                  Thank you for your review
                </div>
              </div>
            </div>
          )}
          <div className="row mt-4 ml-3 mr-3">
            {product.reviews.map((review: any, index: number) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="bd-callout p-3 mt-2 border border-dark">
                    <h5 id="flexbug-12-inline-elements-arent-treated-as-flex-items">
                      Review Rating #{index + 1}
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${review.rating * 20}%` }}
                      >
                        {review.rating}
                      </div>
                    </div>
                    <p className="mt-2">{review.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row mr-3 ml-3 mt-3">
            <div className="col-md-12 px-0">
              <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <h1 className="display-4 font-italic">
                  Impossible is nothing.
                </h1>
                <h2>Adidas is all in</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Modal.setAppElement("#root");

export default ProductDetails;
