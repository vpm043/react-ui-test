import search from '../src/images/search.svg';
import logo from '../src/images/Logo.svg';
import logomob from '../src/images/logo-m.svg';
import icon1 from '../src/images/icon-1.svg';
import icon2 from '../src/images/icon-2.svg';
import icon3 from '../src/images/icon-3.svg';
import icon4 from '../src/images/icon-4.svg';
import icon5 from '../src/images/icon-5.svg';
import icon6 from '../src/images/icon-6.svg';
import icon7 from '../src/images/bell.svg';
import user from '../src/images/user.svg';
import product1 from '../src/images/product-1.svg';
import product2 from '../src/images/product-2.svg';
import product3 from '../src/images/product-3.svg';
import product4 from '../src/images/product-4.svg';
import product5 from '../src/images/product-5.svg';
import product6 from '../src/images/product-6.svg';
import product7 from '../src/images/product-7.svg';
import product8 from '../src/images/product-8.svg';
import '../src/css/custom.css';
import '../src/css/font-face.css';
import Masony from "react-masonry-component";
import { Form, Button,NavDropdown,Nav,Container,Navbar,Tabs,Tab,Row,Col,Sonnet, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from '../src/Components/fiterPanel';
const masonryOptions = {
itemSelector: ".product-item",
originLeft: true,
resize: true,
initLayout:true,
};
const Like = () => (
<svg width="18" height="16" stroke='#E5E5EC' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6596 1.67794C17.1408 2.22368 17.5034 2.8674 17.7237 3.56672C17.9614 4.29783 18.0472 5.07162 17.9754 5.83856C17.9037 6.60549 17.6761 7.34867 17.3072 8.02052C16.0193 10.3407 13.4307 12.9341 9.61077 15.7273C9.43638 15.8546 9.22742 15.9231 9.0131 15.9231C8.79879 15.9231 8.58982 15.8546 8.41543 15.7273C4.57748 12.9289 1.98886 10.3354 0.703545 8.01789C0.330704 7.34528 0.0998752 6.60028 0.0259348 5.83091C-0.0480057 5.06154 0.0365832 4.28487 0.27425 3.55095C0.495628 2.85381 0.858826 2.21245 1.33998 1.669C1.82113 1.12556 2.40934 0.692345 3.06595 0.397824C4.57234 -0.280099 6.13271 -0.090911 7.57741 0.960132C8.10919 1.35023 8.58732 1.81155 8.99896 2.33174C9.41061 1.81155 9.88873 1.35023 10.4205 0.960132C11.8678 -0.0856558 13.4256 -0.277472 14.932 0.400451C15.5896 0.696822 16.1784 1.1322 16.6596 1.67794Z" fill="#FBFCFE"/>
</svg>
);
function App() {
return (
<div className="App">
   <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Container fluid className='p-0'>
         <div className='wrap-dashboard'>
            <Nav variant="pills" className="flex-column d-sm-none d-none d-md-block">
               <img src={logo} className='logo' alt=""></img>
               <Nav.Item>
                  <Nav.Link eventKey="second"> <img src={icon1} alt=""></img></Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="first"> <img src={icon2} alt=""></img></Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="third"> <img src={icon3} alt=""></img></Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link eventKey="fourth"> <img src={icon4} alt=""></img></Nav.Link>
               </Nav.Item>
            </Nav>
            <Navbar bg="light" expand="lg" className='d-block w-100 py-0'>
               <Container fluid className='head-wrap bg-white'>
                  <Navbar.Brand className='p-0 m-0' href="#"><span className='d-sm-none d-none d-md-block'>Hi John!</span><span className='d-md-none d-block d-sm-block'><img src={logomob} alt=""></img></span></Navbar.Brand>
                  <Nav className='align-items-center flex-row'>
                     <Form className="d-flex search-box d-sm-none d-none d-md-flex">
                        <Button variant="outline-successs p-0"> <img src={search} alt=""></img></Button>
                        <FormControl
                           type="search"
                           placeholder="Search for products, brands and more"
                           className="border-0 p-0"
                           aria-label="Search"
                           />
                     </Form>
                     <div className='whishlist d-sm-none d-none d-md-block'>
                        <img src={icon5} alt=""></img>
                     </div>
                     <div className='cart d-sm-none d-none d-md-block'>
                        <img src={icon6} alt=""></img>
                     </div>
                     <div className='cart d-md-none d-block d-sm-block mx-3'>
                        <img src={icon7} alt=""></img>
                     </div>
                     <hr>
                     </hr>
                     <div className='user-info d-flex align-items-center'>
                        <div className='user'>
                           <img src={user} alt=""></img>
                        </div>
                        <NavDropdown title="John Paul" id="navbarScrollingDropdown">
                           <NavDropdown.Item href="">Profile</NavDropdown.Item>
                           <NavDropdown.Item href="">Inbox</NavDropdown.Item>
                           <NavDropdown.Item href="">Sign out</NavDropdown.Item>
                        </NavDropdown>
                     </div>
                  </Nav>
               </Container>
               <div className='head-wrap bg-white border-0 d-sm-block d-block d-md-none'>
                  <Form className="d-flex search-box w-100">
                     <Button variant="outline-successs p-0"> <img src={search} alt=""></img></Button>
                     <FormControl
                        type="search"
                        placeholder="Search..."
                        className="border-0 p-0 w-100"
                        aria-label="Search"
                        />
                  </Form>
               </div>
               <Tab.Content className='bg-white'>
                  <Tab.Pane eventKey="first">
                     <div className='sort-panel justify-content-between'>
                        <span className='panel-head'>Filters based on your profile</span>
                        <div>
                           <Filter />
                        </div>
                     </div>
                     <div className="sort-wrap d-flex justify-content-between align-items-center">
                        <span className='product-show'>Showing 26 Product</span>
                        <div className='sort-field d-flex align-items-center'>
                           <span className='sort'>Sort by:</span>
                           <Form.Select aria-label="Default select example">
                              <option>newest to oldest</option>
                              <option value="1">Better Discount</option>
                              <option value="2">Popularity</option>
                           </Form.Select>
                        </div>
                     </div>
                     <div>
                        <Masony
                           className={"product-list"}
                           elementType={"ul"}
                           options={masonryOptions}
                           disableImagesLoaded={false}
                           updateOnEachImageLoad={false}
                           >
                           <li className={`product-item`}>
                              <div className='position-relative'>
                                 <img src={product1} alt="" className='w-100'></img>
                                 <Like />
                              </div>
                              <div className='prouct-info'>
                                 <h2 className='m-0'>Bond Street By Red Tape Remixa Sneakers</h2>
                                 <h3 className='m-0'>Men Crater Remixa Sneakers</h3>
                                 <h4 className='m-0'>Rs.5467</h4>
                                 <Button variant="Cart text-white">Add to Cart</Button>
                              </div>
                           </li>
                           <li className={`product-item`}>
                              <div className='position-relative'>
                                 <img src={product2} alt="" className='w-100'></img>
                                 <Like />
                              </div>
                              <div className='prouct-info'>
                                 <h2 className='m-0'>Puma</h2>
                                 <h3 className='m-0'>Men Crater Remixa Sneakers</h3>
                                 <h4 className='m-0'>Rs.6499</h4>
                                 <Button variant="Cart text-white">Add to Cart</Button>
                              </div>
                           </li>
                           <li className={`product-item`}>
                              <div className='position-relative'>
                                 <img src={product3} alt="" className='w-100'></img>
                                 <Like />
                              </div>
                              <div className='prouct-info'>
                                 <h2 className='m-0'>Vero Moda</h2>
                                 <h3 className='m-0'>Women Crater Remixa Sneakers</h3>
                                 <h4 className='m-0'>Rs.2767</h4>
                                 <Button variant="Cart text-white">Add to Cart</Button>
                              </div>
                           </li>
                           <li className={`product-item`}>
                              <div className='position-relative'>
                                 <img src={product4} alt="" className='w-100'></img>
                                 <Like />
                              </div>
                              <div className='prouct-info'>
                                 <h2 className='m-0'>Carnatia W Running Shoes For Women</h2>
                                 <h3 className='m-0'>Men Crater Remixa Sneakers</h3>
                                 <h4 className='m-0'>Rs.3734</h4>
                                 <Button variant="Cart text-white">Add to Cart</Button>
                              </div>
                           </li>
                           <li className={`product-item`}>
                              <div className='position-relative'>
                                 <img src={product8} alt="" className='w-100'></img>
                                 <Like />
                              </div>
                              <div className='prouct-info'>
                                 <h2 className='m-0'>Bond Street By Red Tape Remixa Sneakers</h2>
                                 <h3 className='m-0'>Men Crater Remixa Sneakers</h3>
                                 <h4 className='m-0'>Rs.5467</h4>
                                 <Button variant="Cart text-white">Add to Cart</Button>
                              </div>
                           </li>
                           <li className={`product-item`}>
                              <div className='position-relative'>
                                 <img src={product7} alt="" className='w-100'></img>
                                 <Like />
                              </div>
                              <div className='prouct-info'>
                                 <h2 className='m-0'>Bond Street By Red Tape Remixa Sneakers</h2>
                                 <h3 className='m-0'>Men Crater Remixa Sneakers</h3>
                                 <h4 className='m-0'>Rs.5467</h4>
                                 <Button variant="Cart text-white">Add to Cart</Button>
                              </div>
                           </li>
                           <li className={`product-item`}>
                              <div className='position-relative'>
                                 <img src={product6} alt="" className='w-100'></img>
                                 <Like />
                              </div>
                              <div className='prouct-info'>
                                 <h2 className='m-0'>Bond Street By Red Tape Remixa Sneakers</h2>
                                 <h3 className='m-0'>Men Crater Remixa Sneakers</h3>
                                 <h4 className='m-0'>Rs.5467</h4>
                                 <Button variant="Cart text-white">Add to Cart</Button>
                              </div>
                           </li>
                           <li className={`product-item`}>
                              <div className='position-relative'>
                                 <img src={product5} alt="" className='w-100'></img>
                                 <Like />
                              </div>
                              <div className='prouct-info'>
                                 <h2 className='m-0'>Bond Street By Red Tape Remixa Sneakers</h2>
                                 <h3 className='m-0'>Men Crater Remixa Sneakers</h3>
                                 <h4 className='m-0'>Rs.5467</h4>
                                 <Button variant="Cart text-white">Add to Cart</Button>
                              </div>
                           </li>
                        </Masony>
                     </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                     demo content 2
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                     demo content 3
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                     demo content 4
                  </Tab.Pane>
               </Tab.Content>
            </Navbar>
         </div>
      </Container>
   </Tab.Container>
</div>
);
}
export default App;