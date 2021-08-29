import React from 'react'
import logout from '../src/images/log-out.png';
import './App.css';
import men1 from '../src/images/dummymen1.png';
import company1 from '../src/images/company1.jpg';
import service1 from '../src/images/service1.jpg';
import { NavLink } from 'react-router-dom'


function Home1() {
    return (
        <>

            <div className="container-fluid" style={{ backgroundColor: "#E5E7EB" }}>


                {/* full body main div starts */}
                <div className="row">


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 float-end">
                                {/* navigation bar */}
                                <ul className="menu-bar mx-5 float-end my-4">
                                    {/* <NavLink to="/home" activeStyle={{color:"red"}}><li>
                                            HOME
                                         </li></NavLink>  */}
                                    <li>HOME</li>
                                    <li>
                                        SUPPORT
                                    </li>
                                    <li>
                                        ACCOUNT
                                    </li>

                                    <botton className="logout p-1" data-toggle="modal" data-target="#myModal">

                                        <img src={logout} style={{ marginTop: "-4px" }} />SIGNUP

                                    </botton>

                                </ul>

                            </div>
                        </div>

                    </div>
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">

                                <div className="float-end mx-5 my-4"> <img src={men1} style={{ width: "80px", height: "80px", borderRadius: "5px" }} /></div>

                            </div>

                        </div>

                    </div>

                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12" >
                                <div className="mx-5"><h1 style={{ color:"#1F2937", fontSize: "20px", fontWeight: "bold" }}>Used By</h1></div>

                                <div className="container-fluid" >
                                    <div className="row">


                                        {/* body company name starts from here */}

                                        <div className="container-fluid" >
                                            <div className="row" style={{ backgroundColor: "#9CA3AF", borderRadius: "15px" }}>
                                                <div className="col-lg-2 " >

                                                    <div className="my-5 mx-5"><img src={company1} style={{ width: "80px", height: "80px", borderRadius: "5px" }} /></div>
                                                    <div>Company Name 1</div>
                                                </div>

                                                <div className="col-lg-2 " >

                                                    <div className="my-5 mx-2"><img src={company1} style={{ width: "80px", height: "80px", borderRadius: "5px" }} /></div>
                                                    <div>Company Name 2</div>
                                                </div>
                                                <div className="col-lg-2 " >

                                                    <div className="my-5 mx-2"><img src={company1} style={{ width: "80px", height: "80px", borderRadius: "5px" }} /></div>
                                                    <div>Company Name 3</div>
                                                </div>
                                                <div className="col-lg-2 " >

                                                    <div className="my-5 mx-2"><img src={company1} style={{ width: "80px", height: "80px", borderRadius: "5px" }} /></div>
                                                    <div>Company Name 4</div>
                                                </div>
                                                <div className="col-lg-2 " >

                                                    <div className="my-5 mx-4"><img src={company1} style={{ width: "80px", height: "80px", borderRadius: "5px" }} /></div>
                                                    <div>Company Name 5</div>
                                                </div>
                                                <div className="col-lg-2 " >

                                                    <div className="my-5 mx-4"><img src={company1} style={{ width: "80px", height: "80px", borderRadius: "5px" }} /></div>
                                                    <div className="my-3">Company Name 6</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                </div>



                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">

                                        <div style={{ color: "black", fontSize: "20px", fontWeight: "bold" }} className="mx-3">Servicess</div>

                                    </div>

                                </div>

                            </div>

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-2">

                                        <div className="my-5"><img src={service1} style={{ width: "100px", height: "80px", borderRadius: "5px" }} /> </div>

                                    </div>

                                    <div className="col-lg-4 float-start">

                                        <div className="my-5"><img src={service1} style={{ width: "100px", height: "80px", borderRadius: "5px" }} /> </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                {/* footer starts from here */}

                <div className="container-fluid">
                    <div className="row">
                        <div clasName="container">
                            <div clasName="row ">


                                <div className="col-sm-3 col-lg-3 f-menu ">
                                    <h3 >Company </h3>


                                    <p> About Us</p>

                                    <p>Contact Us</p>




                                </div>
                                <div className="col-sm-3  col-md-3 col-lg-3 f-menu">
                                    <h3 >Product</h3>


                                    <p> Features</p>

                                    <p>Pricing</p>



                                </div>
                                <div className="col-sm-3 col-lg-3 f-menu">
                                    <h3 >Services</h3>

                                    <p> Support</p>




                                </div>
                                <div className="col-sm-3 col-lg-3 f-menu">
                                    <h3 >Company Name</h3>

                                    <p> Privacy Policy</p>

                                    <p>Privacy Policy</p>

                                    <p>Terms And Conditions</p>

                                </div>
                            </div>
                        </div>



                        {/* modal starts from here */}

                        <div class="container">
                            {/* <h2>Modal Example</h2> */}
                            {/* <!-- Button to Open the Modal --> */}
                            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                Open modal
                            </button> */}

                            {/* <!-- The Modal --> */}
                            <div class="modal fade" id="myModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        {/* <!-- Modal Header --> */}
                                        <div class="modal-header">
                                            <h4 class="modal-title">SIGN UP</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        {/* <!-- Modal body --> */}
                                        <div class="modal-body">

                                            <form action="/action_page.php">
                                                <div class="form-group">
                                                    <label for="email">Email address:</label>
                                                    <input type="email" class="form-control" placeholder="Enter email" id="email" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="pwd">Password:</label>
                                                    <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                                                </div>
                                                <div class="form-group form-check">
                                                    <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox" /> Remember me
                                                    </label>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </form>
                                        </div>

                                        {/* <!-- Modal footer --> */}
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>



        </>
    )
}

export default Home1;
