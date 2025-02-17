import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Nav from './components/Nav.jsx';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
