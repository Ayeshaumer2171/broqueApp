import {  Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function News() {
    return (
      <Container className='mt-2 mb-2 w-full mt-5 '>
        <Row  >
         
          <Col xs={12} sm={12} md={6} lg={6} className=' p-0 '>
          <img className=' w-full h-60' src="https://cdn.shopify.com/s/files/1/2277/5269/files/Untitled-1_8b66fd6f-2d54-425e-95a4-c32c8a10b191_750x.jpg?v=1684312263"></img>
          </Col>
          <Col  xs={12} sm={12} md={6} lg={6} className='bg-[#f6f6f6] flex flex-col justify-center place-items-center h-66'> 
            <p className='h6'>GET 5% OFF!</p>
            <p>SIGN UP NOW TO OUR NEWSLETTER</p>
            <div className='flex flex-row '>
            <input type='text' className='w-52 h-8 pl-2 '></input>
            <button  className='w-30 rounder-none bg-black text-white pt-1 pb-1 pl-2 pr-2 hover:font-bold'>SIGN ME UP</button>
            </div>
          </Col>
      </Row>
      </Container>
    );
  }
  
  export default News;