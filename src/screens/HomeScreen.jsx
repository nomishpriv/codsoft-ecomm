import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
import products from "../products.js";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/codsoft-ecomm/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}

      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        
      </>
    </>
  );
};

export default HomeScreen;
