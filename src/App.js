import React from 'react';
 import Header from './Header';
import Menu from './Menu';
import Cards from './Cards';
import './index.css';
import Foot from './Foot'
import End from './End';
import News from './Grid';
 import { BrowserRouter , Routes,Route, Form,} from 'react-router-dom';
 import Unstiched from './components/Unstiched';
 import Bottom from './components/Bottom'
 import Dupattas from './components/Dupattas'
 import Shawls from './components/Shawls'
 import Ready from './components/Ready'
 import Para from './Para';
import Brand from './Brand';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



  function App(props) {
   const cartItems = props.cartItems;

 return(
  <>
  <CartProvider>

 <BrowserRouter>
 <Header />
 <Menu />
 <Routes>
 
 <Route path='/' element={<><Para /><Cards /><News /></>} />
 <Route path='shawls' element={<Shawls />} />
 <Route path='unstiched' element={<Unstiched/>} />
 <Route path='readytowear' element= {<Ready />} />
 <Route path='dupattas' element={<Dupattas />} />
  <Route path='bottoms' element={<Bottom />} />
 <Route path='page3' element={<Brand />} />
  {/* <Route path='page5' element={<Cart  items={cartItems}/>} /> */}
  <Route path='page5' element={<Cart cart={cartItems} />} />

 </Routes >
 <Foot />
 <End />
 </BrowserRouter>  
 </CartProvider>
 <ToastContainer position="bottom-right" />
</>

  )
}

export default App;

