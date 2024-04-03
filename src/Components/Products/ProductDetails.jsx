import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const productDetails = useLoaderData();
    const {title,price,discountPercentage,stock,images,brand,rating,} = productDetails;
    
    return (
        <div>
            <h2 className="w-fit mx-auto text-5xl font-bold border-b-4 px-12 py-2 border-green-500 mt-12 mb-4">Product Details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl w-full md:w-3/4 mx-auto mb-12 py-6">
        <figure><img src={images[0]} alt="image"/></figure>
        <div className="card-body space-y-1">
          <h1 className="text-2xl font-bold">Product Name: {title}</h1>
          <h3 className="text-xl font-semibold">Brand: {brand}</h3>
          <h3 className="text-xl font-semibold">Stock: {stock}</h3>
          <h3 className="text-xl font-semibold">Price: <span className=" text-red-600">{price}$</span> </h3>
          <h3 className="text-xl font-semibold">Discount Percentage: <span className="text-green-600">{discountPercentage}$</span></h3>
          <h3 className="text-xl font-semibold">Rating: {rating}</h3>
          <div className="">
          <button className="btn btn-outline btn-info w-full">Add to cart</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ProductDetails;