import React, { useState } from 'react';
import './App.css';
import logo from '../src/images/Ellipse 3.png';
import save from '../src/images/save.png';
import logout from '../src/images/log-out.png';
import service1 from '../src/images/service1.jpg';
import { NavLink } from 'react-router-dom'
// import {Button} from "@material-ui/core";
// import {Button} from "@material-ui/icons"
import AddBoxIcon from '@material-ui/icons/AddBox';
import GetAppIcon from '@material-ui/icons/GetApp';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';


function Dashboardcsvcontacts() {
    const [state, setState] = useState("2");

    const [show1, setShow1] = useState("block");

    const [show2, setShow2] = useState("none");

    const [sidemenu1, setSidemenu1] = useState("block");
    const [sidemenu2, setSidemenu2] = useState("none");
    const [logosmall, setLogosmall] = useState("logo");
    const [logosmall1, setLogosmall1] = useState("")
    const [small1, setSmall1] = useState('77px');
    const [small2, SetSmall2] = useState("");
    const[marL,setMarL]=useState("")
    const[marR,setMarR]=useState("43px");

    const[subm,setSubm]=useState("")


// add items in table
const[contact,setContact]=useState([
    {Name:" Nizam",
    Email:"nizam@gmail.com",
    Addveryfied:<div class="form-check">
    <label class="form-check-label" for="check2">
        <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
    </label>
</div>
    }
]);


const Additem=()=>{
    let nObj={Name:"md Nizam", Email:"mdnizam@gmail.com" , Addveryfied:<div class="form-check">
    <label class="form-check-label" for="check2">
        <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
    </label>
</div>};
    let arr=contact.concat(nObj);
    setContact(arr);
}





    const toggleOpen = () => {
        setState("1")
        setState12("11")
        setShow1("none")
        setShow2("block")
        setSidemenu1("none")
        setSidemenu2("block")
        setLogosmall("logo1")
        setLogosmall1("logo")
        setSmall1('40px')
        setMarL("30px");
        setMarR("")



    };

    const [state2, setState2] = useState("1");
    const [state12, setState12] = useState("10");


    const toggleOpen2 = () => {
        setState2("2");
        setState("2");
        setState12("10");
        setShow1("block")
        setShow2("none")
        setSidemenu2("block")
        setSidemenu1("block")
        setLogosmall1('logo2')
        setLogosmall("logo")
        SetSmall2("77px")
        setSmall1("77px")
        setMarR("43px")
        setMarL("30px");
    }


    const submitHandle=()=>{
        setSubm(alert("Submitted succesfully"))
    }


    return (


        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className={`col-sm-12 col-md-12 p-0 m-0 col-lg-${state}`} style={{ backgroundColor: "#1D2A48" }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-12">

                            </div>

                            <div className="col-lg-6 d-flex-end">
                                <button type="button" className="navbar-toggle" onClick={toggleOpen} style={{ display: `${show1}` }}>
                                    <span className="float-end px-3 my-3">
                                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 3V0H0V3H20ZM20 9V6H0V9H20ZM20 15V12H0V15H20Z" fill="white" />
                                        </svg>
                                    </span>
                                </button>

                                <button type="button" className={`navbar-toggle ${show2}`} onClick={toggleOpen2} style={{ display: `${show2}` }}>
                                    <span className="float-end px-3 my-3" style={{marginRight:"12px"}}>
                                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 3V0H0V3H20ZM20 9V6H0V9H20ZM20 15V12H0V15H20Z" fill="white" />
                                        </svg>
                                    </span>
                                </button>

                            </div>
                        </div>

                        <div className="container-fluid ">
                            <div className="row ">
                                <div></div>

                                <div className="mt-5  justify-content-center ">

                                    {/* <div className={`${logosmall}`} ><img className="ms-3" src={logo} />
                                    </div> */}
                                    <div className="container">
                                        <img className="" src={logo} style={{ width: `${small1}`, marginLeft:`${marL}`, marginLeft:`${marR}`  }} />
                                    </div>

                                </div>
                                {/* 
                        Company logo Starts from here */}


                                {/* <div className="textmenu1" style={{ display: `${sidemenu1}` }}>
                                    <p className="text-white text-center mait my-2 ">MAITRETECH</p>
                                    <p className="text-center text-white">maitretechsolution@gmail.com</p>

                                </div> */}
                                <div className="container">
                                    <div className="textmenu1" style={{ display: `${sidemenu1}` }}>
                                        <p className="text-white text-center mait my-2 ">MAITRETECH</p>
                                        <p className="text-center text-white">maitretechsolution@gmail.com</p>

                                    </div>
                                </div>

                                {/* side menu icon bar starts from here */}

                                <div className="col-lg-2 " >
                                    <div className="d-flex justify-content-center my-5 float-start textmenu">
                                        <ul ><li><span> <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 5V3.33333H13.5V1.66667C13.5 0.75 12.825 0 12 0H1.5C0.675 0 0 0.75 0 1.66667V13.3333C0 14.25 0.675 15 1.5 15H12C12.825 15 13.5 14.25 13.5 13.3333V11.6667H15V10H13.5V8.33333H15V6.66667H13.5V5H15ZM12 13.3333H1.5V1.66667H12V13.3333ZM3 8.33333H6.75V11.6667H3V8.33333ZM7.5 3.33333H10.5V5.83333H7.5V3.33333ZM3 3.33333H6.75V7.5H3V3.33333ZM7.5 6.66667H10.5V11.6667H7.5V6.66667Z" fill="white" />
                                        </svg>
                                        </span></li><br></br>

                                            <li><span> <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.88889V15.1111C0 15.6121 0.187301 16.0925 0.520699 16.4468C0.854097 16.801 1.30628 17 1.77778 17H14.2222C15.2 17 16 16.15 16 15.1111V1.88889C16 0.85 15.2 0 14.2222 0H1.77778C1.30628 0 0.854097 0.199007 0.520699 0.553243C0.187301 0.907478 0 1.38792 0 1.88889V1.88889ZM10.6667 5.66667C10.6667 7.23444 9.47556 8.5 8 8.5C6.52444 8.5 5.33333 7.23444 5.33333 5.66667C5.33333 4.09889 6.52444 2.83333 8 2.83333C9.47556 2.83333 10.6667 4.09889 10.6667 5.66667ZM2.66667 13.2222C2.66667 11.3333 6.22222 10.2944 8 10.2944C9.77778 10.2944 13.3333 11.3333 13.3333 13.2222V14.1667H2.66667V13.2222Z" fill="#BCC4C8" />
                                            </svg>

                                            </span></li><br></br>


                                            <li><span>  <li><span>
                                                <svg width="22" height="22" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.33333 2.57895H2.66667C2.22464 2.57895 1.80072 2.7453 1.48816 3.04141C1.17559 3.33752 1 3.73913 1 4.1579V13.6316C1 14.0503 1.17559 14.452 1.48816 14.7481C1.80072 15.0442 2.22464 15.2105 2.66667 15.2105H7.41417" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.6667 9.6842V12.8421H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.6666 7.31579V4.1579C12.6666 3.73913 12.4911 3.33752 12.1785 3.04141C11.8659 2.7453 11.442 2.57895 11 2.57895H9.33331" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M7.66665 1H5.99998C5.07951 1 4.33331 1.70692 4.33331 2.57895C4.33331 3.45098 5.07951 4.15789 5.99998 4.15789H7.66665C8.58712 4.15789 9.33331 3.45098 9.33331 2.57895C9.33331 1.70692 8.58712 1 7.66665 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.6666 16C14.5076 16 16 14.5862 16 12.8421C16 11.098 14.5076 9.6842 12.6666 9.6842C10.8257 9.6842 9.33331 11.098 9.33331 12.8421C9.33331 14.5862 10.8257 16 12.6666 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M4.33331 7.3158H7.66665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M4.33331 10.4737H6.83331" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span></li>

                                            </span></li> <br></br>
                                            <li>
                                                <span><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM6.58448 2.7008H8.41553V4.80376H9.48395L7.5 7.78015L5.51605 4.80378H6.58448V2.7008ZM2.99378 7.37H5.95459C5.95459 8.22332 6.64668 8.91633 7.5 8.91633C8.35333 8.91633 9.04541 8.22332 9.04541 7.37H12.0062V11.7133H2.99378V7.37Z" fill="#BCC4C8" />
                                                </svg>

                                                </span></li><br></br>

                                            <li><span><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 12L8 16L1 12L0 3L8 0L16 3L15 12ZM8 3L4 5L4.5 9L8 11L11.5 9L12 5L8 3Z" fill="#BCC4C8" />
                                            </svg>

                                            </span></li><br></br>

                                        </ul>
                                    </div>

                                </div>

                                {/* side text menu bar starts from here */}
                                <div className="col-lg-10" style={{ display: `${sidemenu1}` }}>

                                    <div className=" my-5  textmenu ">
                                        <ul>
                                            <NavLink to="/dashboardcsvcontacts" activeStyle={{ color: "red" }}><li><span >Dashboard</span></li></NavLink><br></br>
                                            <NavLink to="/account" activeStyle={{ color: "red" }}><li><span >Account</span></li></NavLink><br></br>


                                            <NavLink to="/reportsettingcopy" activeStyle={{ color: "red" }}><li><span >Report Setting</span></li></NavLink> <br></br>
                                            <NavLink to="/inbox" activeStyle={{ color: "red" }}><li><span >Inbox</span></li></NavLink> <br></br>
                                            <NavLink exact to="/" activeStyle={{ color: "red" }}><li><span >Billing</span></li></NavLink>
                                        </ul>
                                    </div>
                                </div>




                            </div>

                        </div>

                    </div>


                    {/* main  dashboard starts from here */}

                    <div className={`col-lg-${state12}`} style={{ backgroundColor: "#E5E7EB" }}>


                        <div className=" float-end mx-5">
                            <ul className="menu-bar my-5 mx-5">
                                {/* <li><NavLink to="/home1">
                                    HOME
                                </NavLink>
                                </li> */}
                                <li>HOME</li>

                                <li>
                                    SUPPORT
                                </li>
                                <li>
                                    ACCOUNT
                                </li>


                                <botton className="logout p-1" >

                                    <img src={logout} style={{ marginTop: "-4px" }} />LOGOUT

                                </botton>

                            </ul>
                        </div>
                        <div className='container-fluid'>
                            <div className="row">
                                <div className="col-lg-4">

                                </div>

                            </div>
                        </div>
                        <h1 className="bill">Dashboard</h1>
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-2 float-end mx-5">

                                            <div className="my-5"><img src={service1} style={{ width: "100px", height: "80px", borderRadius: "5px" }} /> </div>

                                            <NavLink to="/dashboardcsvcontacts" activeStyle={{ color: "red" }}><span><p className="display-5" style={{fontSize:"20px"}}>Service Csv</p></span></NavLink>
                                        </div>

                                    </div>

                                </div>


                            </div>
                            <div className="col-lg-2">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-2 float-end mx-5">

                                            <div className="my-5"><img src={service1} style={{ width: "100px", height: "80px", borderRadius: "5px" }} /> </div>

                                            <NavLink to="/dashboardreports" activeStyle={{ color: "red" }}><p className="display-5" style={{fontSize:"20px"}}>Reports</p></NavLink>


                                        </div>

                                    </div>

                                </div>




                            </div>

                            <div className="col-lg-2">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-2 float-end mx-5">

                                            <div className="my-5"><img src={service1} style={{ width: "100px", height: "80px", borderRadius: "5px" }} /> </div>


                                            <NavLink to="/dashboardinvoices" activeStyle={{ color: "red" }}><p className="display-5" style={{fontSize:"20px"}}>Invoices</p></NavLink>
                                        </div>

                                    </div>

                                </div>




                            </div>

                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-lg-8">
                                        {/* main Box */}

                                        {/* card body */}


                                        <div class="container">
                                            {/* <h2> <div className="my-5"><img src={service1} style={{ width: "100px", height: "80px", borderRadius: "5px" }} /> </div></h2> */}
                                            <h2>Contacts</h2>
                                            <table className="table table-light table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Name <br />(job title)</th>
                                                        <th>Email Address</th>
                                                        <th>Address Verified</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                            contact.map((cont)=>(
                                                    <tr>
                                                       
                                                                
                                                                <td>{cont.Name} </td>
                                                                <td>{cont.Email}</td>
                                                                <td>{cont.Addveryfied}</td>
                                                               
                                                                
                                                                
                                                           
                                                    </tr>

                                                    )
                                                           
                                                           )
                                                           
                                                       }



                                                    <tr>
                                                        <td>John</td>
                                                        <td>john@example.com</td>
                                                        <td><div class="form-check">
                                                            <label class="form-check-label" for="check2">
                                                                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
                                                            </label>
                                                        </div></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Mary</td>
                                                        <td>mary@example.com</td>
                                                        <td><div class="form-check">
                                                            <label class="form-check-label" for="check2">
                                                                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
                                                            </label>
                                                        </div></td>

                                                    </tr>
                                                    <tr>
                                                        <td>July</td>
                                                        <td>july@example.com</td>
                                                        <td><div class="form-check">
                                                            <label class="form-check-label" for="check2">
                                                                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
                                                            </label>
                                                        </div></td>

                                                    </tr>

                                                    <tr>
                                                        <td>John</td>
                                                        <td>john@example.com</td>
                                                        <td><div class="form-check">
                                                            <label class="form-check-label" for="check2">
                                                                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
                                                            </label>
                                                        </div></td>

                                                    </tr>

                                                    <tr>
                                                        <td>John</td>
                                                        <td>john@example.com</td>
                                                        <td><div class="form-check">
                                                            <label class="form-check-label" for="check2">
                                                                <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something" />
                                                            </label>
                                                        </div></td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* down Main feilds Box */}
                            <div className="container-fluid my-4">
                                <div className="row">
                                    <div className="col-lg-8">
                                        {/* dom buttons  */}
                                        <div className="container-fluid ">
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-4">
                                                    <button className="btn btn-success" onClick={Additem} > <AddBoxIcon></AddBoxIcon> Add Mannually</button>

                                                </div>

                                                <div className="col-lg-4">
                                                    <button className="btn btn-success"><GetAppIcon></GetAppIcon> Download Template </button>
                                                </div>
                                                <div className="col-lg-4">
                                                
                                                   

                                                    <button className="btn btn-success" ><CloudUploadOutlinedIcon></CloudUploadOutlinedIcon>  File Upload </button>
                                                   
                                                </div>


                                                <div className="container my-3">
                                                    <p>Click on the "Choose File" button to upload a file:</p>

                                                    <form action="">
                                                        <input type="file" id="myFile" name="filename" />
                                                        <input type="submit" className="my-3 btn btn-success" onClick={submitHandle} />
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>



                        {/* billing */}

                        <div className="row">


                        </div>
                        <div className="container-fluid my-3 ">
                            <div className="row">
                                <div className="col-lg-2">

                                </div>

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

                            </div>






                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default Dashboardcsvcontacts;

