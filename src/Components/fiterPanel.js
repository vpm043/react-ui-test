import { useState } from 'react';
import { COffcanvas } from '@coreui/react'
import { COffcanvasBody } from '@coreui/react'
import { COffcanvasHeader } from '@coreui/react'
import { COffcanvasTitle } from '@coreui/react'
import { CButton } from '@coreui/react'
import { CCloseButton } from '@coreui/react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Button,Nav,Tab, FormGroup} from "react-bootstrap";
function Filter() {
const [visible, setVisible] = useState(false)
return (
<div className='filter-btn'>
   <div className='d-flex align-items-center'>
      <span className='clear'>Clear all</span>
      <CButton onClick={() => setVisible(true)} className='filter-box'>Filters</CButton>
   </div>
   <COffcanvas className='d-md-block d-none d-sm-none' placement="end" visible={visible} onHide={() =>
      setVisible(false)}>
      <div className='filter-wrap'>
         <COffcanvasHeader className='p-0'>
            <COffcanvasTitle>Filters</COffcanvasTitle>
            <div className='close-btn'>
               <CCloseButton className="text-reset m-0 p-0" onClick={() =>
               setVisible(false)} />
            </div>
         </COffcanvasHeader>
         <COffcanvasBody className='p-0'>
            <FormGroup>
               <div className='filter-flex'>
                  <ul className='p-0'>
                     <li>
                        <FormControlLabel control={
                        <Checkbox />
                        } label="Men" />
                     </li>
                     <li>
                        <FormControlLabel control={
                        <Checkbox />
                        } label="Boys" />
                     </li>
                  </ul>
                  <ul className='p-0'>
                     <li>
                        <FormControlLabel control={
                        <Checkbox />
                        } label="Women" />
                     </li>
                     <li>
                        <FormControlLabel control={
                        <Checkbox />
                        } label="Girls" />
                     </li>
                  </ul>
               </div>
               <h6>Price</h6>
               <div className='filter-flex'>
                  <ul>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Rs. 1997 to Rs. 6172" />
                           <small>(106)</small>
                        </span>
                     </li>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Rs. 6172 to Rs. 10347" />
                           <small>(16)</small>
                        </span>
                     </li>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Rs. 10347 to Rs. 14522" />
                           <small>(14)</small>
                        </span>
                     </li>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Rs. 14522 to Rs. 18697" />
                           <small>(5)</small>
                        </span>
                     </li>
                  </ul>
                  <ul>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Rs. 10347 to Rs. 14522" />
                           <small>(14)</small>
                        </span>
                     </li>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Rs. 14522 to Rs. 18697" />
                           <small>(5)</small>
                        </span>
                     </li>
                  </ul>
               </div>
               <h6>Categories</h6>
               <div className='filter-flex'>
                  <ul>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Tshirts" />
                           <small>(106)</small>
                        </span>
                     </li>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Sports Shoes" />
                           <small>(156)</small>
                        </span>
                     </li>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Casual Shoes" />
                           <small>(174)</small>
                        </span>
                     </li>
                     <li>
                        <span>
                           <FormControlLabel control={
                           <Checkbox />
                           } label="Shorts" />
                           <small>(5)</small>
                        </span>
                     </li>
                  </ul>
               </div>
               <a href='#'>+ 18 more</a>
               <h6>Color</h6>
               <div className='filter-flex'>
                  <div className='clr-ccode'>
                     <ul className='w-100'>
                        <li>
                           <span className='clr-black clr'></span>
                           <span>
                              <FormControlLabel control={
                              <Checkbox />
                              } label="Black" />
                              <small>(106)</small>
                           </span>
                        </li>
                        <li>
                           <span className='clr-white clr'></span>
                           <span>
                              <FormControlLabel control={
                              <Checkbox />
                              } label="White" />
                              <small>(156)</small>
                           </span>
                        </li>
                        <li>
                           <span className='clr-blue clr'></span>
                           <span>
                              <FormControlLabel control={
                              <Checkbox />
                              } label="Blue" />
                              <small>(174)</small>
                           </span>
                        </li>
                        <li>
                           <span className='clr-pink clr'></span>
                           <span>
                              <FormControlLabel control={
                              <Checkbox />
                              } label="Pink" />
                              <small>(5)</small>
                           </span>
                        </li>
                     </ul>
                  </div>
               </div>
            </FormGroup>
         </COffcanvasBody>
      </div>
      <div className='d-flex btn-field'>
         <Button variant="-Cart">Clear all</Button>
         <Button variant="-Cart text-white">Apply</Button>
      </div>
   </COffcanvas>
   <Tab.Container id="canvaas" defaultActiveKey="price">
      <COffcanvas className='d-md-none d-block d-sm-flex' placement="bottom" visible={visible} onHide={() =>
         setVisible(false)}>
         <div className='filter-wrap p-0'>
            <COffcanvasHeader className='p-0'>
               <COffcanvasTitle>Filters</COffcanvasTitle>
               <div className='close-btn'>
                  <CCloseButton className="text-reset m-0 p-0" onClick={() =>
                  setVisible(false)} />
               </div>
            </COffcanvasHeader>
            <COffcanvasBody className='p-0'>
               <Nav variant="pills" className="flex-column d-sm-block d-block d-md-none">
                  <Nav.Item>
                     <Nav.Link eventKey="price">Price</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="gender">Gender</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="category">Categories</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey="color">Color</Nav.Link>
                  </Nav.Item>
               </Nav>
               <FormGroup>
                  <Tab.Content className='bg-white'>
                     <Tab.Pane eventKey="price">
                        <div className='filter-flex'>
                           <ul>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Rs. 1997 to Rs. 6172" />
                                    <small>(106)</small>
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Rs. 6172 to Rs. 10347" />
                                    <small>(16)</small>
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Rs. 10347 to Rs. 14522" />
                                    <small>(14)</small>
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Rs. 14522 to Rs. 18697" />
                                    <small>(5)</small>
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Rs. 10347 to Rs. 14522" />
                                    <small>(14)</small>
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Rs. 14522 to Rs. 18697" />
                                    <small>(5)</small>
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </Tab.Pane>
                     <Tab.Pane eventKey="gender">
                        <div className='filter-flex'>
                           <ul className='p-0'>
                              <li>
                                 <FormControlLabel control={
                                 <Checkbox />
                                 } label="Men" />
                              </li>
                              <li>
                                 <FormControlLabel control={
                                 <Checkbox />
                                 } label="Boys" />
                              </li>
                              <li>
                                 <FormControlLabel control={
                                 <Checkbox />
                                 } label="Women" />
                              </li>
                              <li>
                                 <FormControlLabel control={
                                 <Checkbox />
                                 } label="Girls" />
                              </li>
                           </ul>
                        </div>
                     </Tab.Pane>
                     <Tab.Pane eventKey="category">
                        <div className='filter-flex'>
                           <ul>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Tshirts" />
                                    <small>(106)</small>
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Sports Shoes" />
                                    <small>(156)</small>
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Casual Shoes" />
                                    <small>(174)</small>
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    <FormControlLabel control={
                                    <Checkbox />
                                    } label="Shorts" />
                                    <small>(5)</small>
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </Tab.Pane>
                     <Tab.Pane eventKey="color">
                        <div className='filter-flex'>
                           <div className='clr-ccode'>
                              <ul className='w-100'>
                                 <li>
                                    <span className='clr-black clr'></span>
                                    <span>
                                       <FormControlLabel control={
                                       <Checkbox />
                                       } label="Black" />
                                       <small>(106)</small>
                                    </span>
                                 </li>
                                 <li>
                                    <span className='clr-white clr'></span>
                                    <span>
                                       <FormControlLabel control={
                                       <Checkbox />
                                       } label="White" />
                                       <small>(156)</small>
                                    </span>
                                 </li>
                                 <li>
                                    <span className='clr-blue clr'></span>
                                    <span>
                                       <FormControlLabel control={
                                       <Checkbox />
                                       } label="Blue" />
                                       <small>(174)</small>
                                    </span>
                                 </li>
                                 <li>
                                    <span className='clr-pink clr'></span>
                                    <span>
                                       <FormControlLabel control={
                                       <Checkbox />
                                       } label="Pink" />
                                       <small>(5)</small>
                                    </span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </Tab.Pane>
                  </Tab.Content>
               </FormGroup>
            </COffcanvasBody>
         </div>
         <div className='d-flex btn-field'>
            <Button variant="-Cart">Clear all</Button>
            <Button variant="-Cart text-white">Apply</Button>
         </div>
      </COffcanvas>
   </Tab.Container>
</div>
);
}
export default Filter;