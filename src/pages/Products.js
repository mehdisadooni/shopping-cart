import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../redux/products/axtion";
import addToCart from "../redux/cart/action";

const Products = () => {
    const {products} = useSelector((state => state.product))
    const {cart} = useSelector((state => state.shoppingCart))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    const addToCartHandler = product => {
        dispatch(addToCart(product))
    }

    console.log(cart)

    return (
        <div className="container">
            <div className="row mt-5 g-3">
                {(products && products.length > 0) && products.map(product => (
                    <div className="col-md-3" key={product.id}>
                        <div className="card">
                            <img className="card-img-top" src={product.image} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button
                                    onClick={() => addToCartHandler(product)}
                                    className="btn btn-sm btn-outline-success">
                                    Add to cart
                                </button>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products