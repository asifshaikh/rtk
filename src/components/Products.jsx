import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUS } from '../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUS.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUS.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className='productsWrapper'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <button className='btn' onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
