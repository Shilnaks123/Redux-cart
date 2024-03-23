import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
       


          <div style={{color:'white'}} className='bg-primary'>
                  <div style={{height:'300px'}} className='container mt-5 w-100 p-5'>
                   <div className="footer-content d-flex justify-content-between">
                 <div style={{width:'400px'}} className="media">
                    <h5 className='d-flex'><i style={{height:'30px'}} className="fa-solid fa-truck-fast"></i>E Cart</h5>
                    <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Bootsrap team with the help of our contributions</p>
                    <span>Code licenced MIT, docs cc by 3.0</span>
                    <span>Currently v5.3.2</span>
                 </div>
                 <div className="links d-flex flex-column">
                    <h5 className='d-flex' style={{height:'30px'}} >Links</h5>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                    <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
                    <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
      
                 </div>
                 <div className="guides d-flex flex-column">
                  <h5 style={{height:'30px'}} >Guides</h5>
                  <a href="https://react.dev/"  target='_blank' style={{textDecoration:'none',color:'white'}}>React js</a>
                  <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
                  <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none',color:'white'}}>Routing</a>
      
      
      
                 </div>
                 <div className="contact">
                  <h5 style={{height:'30px'}} >Contact Us</h5>
                  <div className="d-flex">
                     <input type="text" className="form-control me-1" placeholder='Email Id Please' />
                     <button className='btn btn-info'><i style={{height:'30px'}}  class="fa-solid fa-arrow-right"></i></button>
      
                  </div>
                  <div className="icons d-flex justify-content-between mt-3">
                  <a href="https://react.dev/"  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-1x"></i></a>  
                  <a href="https://react.dev/"  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-1x"></i></a>  
                  <a href="https://react.dev/"  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-1x"></i></a>  
                  <a href="https://react.dev/"  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-1x"></i></a>  
                  <a href="https://react.dev/"  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github fa-1x"></i></a>  
                  <a href="https://react.dev/"  target='_blank' style={{textDecoration:'none',color:'white'}}><i style={{height:'30px'}} class="fa-solid fa-phone fa-1x"></i></a>  
                  </div>
                 </div>
              </div>
              <p className='text-center mt-5'>Copyright &copy; 2024 E Cart. Built with React.</p>
          </div>
          </div>
   
  )
}

export default Footer