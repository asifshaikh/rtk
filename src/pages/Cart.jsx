import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };
  return (
    <div>
      <h3>Cart</h3>
      {items.map((item) => (
        <div className='cartCard' key={item.id}>
          <img src={item.image} alt={item.title} />
          <h5>{item.title}</h5>
          <h5>{item.price}</h5>
          <button className='btn' onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
