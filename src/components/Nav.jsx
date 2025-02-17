import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const Nav = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <span className='logo'>REDUX STORE</span>
      <div>
        <Link to='/' className='navLink'>
          Home
        </Link>
        <Link to='/cart' className='navLink'>
          Cart
        </Link>
        <span className='cartCount'> Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Nav;
