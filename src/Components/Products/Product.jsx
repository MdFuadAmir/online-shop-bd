import PropTypes from 'prop-types'; 

const Product = ({product}) => {
    const {title,price,discountPercentage,stock,brand,images,} = product
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-full h-60" src={images[0]} alt="Shoes" /></figure>
  <div className="card-body mt-3">
    <h2 className="card-title">{title}</h2>
    <p className="text-lg">Brand: {brand}</p>
    <p className="text-lg">Stock: {stock}</p>
    <h2 className="text-lg">Price: {price}$</h2>
    <h2 className="text-lg">Discount Percentage: {discountPercentage}$</h2>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;

Product.propTypes ={
    product: PropTypes.object.isRequired
}