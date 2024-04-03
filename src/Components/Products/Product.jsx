import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {id,title,price,stock,images} = product
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-full h-60" src={images[0]} alt="Shoes" /></figure>
  <div className="card-body mt-3">
    <h2 className="card-title">{title}</h2>
    <p className="text-lg">Stock: {stock}</p>
    <h2 className="text-lg">Price: {price}$</h2>
    <div className="">
        <Link to={`/productDetails/${id}`}>
         <button className="btn btn-outline btn-info w-full">View Details</button>
        </Link>
    </div>
  </div>
</div>
    );
};

export default Product;

Product.propTypes ={
    product: PropTypes.object.isRequired
}