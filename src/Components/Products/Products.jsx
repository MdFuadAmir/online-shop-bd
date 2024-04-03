import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Products = () => {
    const {products} = useLoaderData();
    return (
        <div>
            <h2 className="text-4xl font-bold w-fit mx-auto border-b-2 px-4 border-green-400">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 p-2 my-12">
            {
                products?.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;