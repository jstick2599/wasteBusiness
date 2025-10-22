import React, { useState, useEffect } from "react";
import logoWhite from "../images/logoWhite.jpeg";
import trashCloseup from "../images/trashCloseup.jpg";
import trashPorch from "../images/trashPorch.jpg";
import trashBackyard from "../images/trashBackyard.jpg";
import truckPickupFarShot from "../images/trashPickupFarShot.jpg";
import truckPickupMediumShot from "../images/truckPickupMediumShot.jpg";
import truckPickupCloseShot from "../images/truckPickupCloseShot.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./LandingPage.css";


const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  //next function goes to the next image in the array, if at the end of the array, goes back to the beginning
  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

//prev function goes to the prev image in the array, if at the end of the array, goes back to the beginning
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
        <button onClick={next}> <FaArrowLeft /></button>    
        <img className="mainImg" src={imgs[index]} />
        <button onClick={prev}>  <FaArrowRight /> </button>
    </div>
  )
}
const LandingPage = () => {


  return (
    <div className="landingPageWrapper">
        <div className="firstViewablePage">        
            <h2 className="companyName">Hands 4 Hope LLC</h2>
            <img src={logoWhite} id="logoWhite" alt="white logo" />
            <h2>“Hands That Help. Service You Can Trust"</h2>
        </div>
        <div className="servicesDivWrapper">
            <div className="leftServicesDiv">
                Our Services:
                <ul>
                    <li>Construction Debris Removal</li>
                    <li>🪑 Furniture & Junk Removal</li>
                    <li>🔌 Appliance & E-Waste Disposal</li>
                    <li>🧹 House, Garage & Storage Cleanouts</li>
                    <li>🌿 Yard Waste & Hot Tub Removal</li>
                    <li>🚛 Furniture Delivery & Equipment Hauling</li>
                </ul> 
            </div>
            <div className="rightServicesDiv">
                <li>✅ Junk, Furniture & Appliance Removal</li>
                <li>✅ Electronic Waste Disposal</li>
                <li>✅ Construction Debris & Yard Cleanup</li>
                <li>✅ Hot Tub & Large Item Removal</li>
                <li>✅ House, Garage & Storage Unit Cleanouts</li>
                <li>✅ Furniture Delivery & Equipment Hauling</li>
            </div>

        </div>
       <Slideshow
        imgs={[
          trashCloseup,
          trashPorch,
          trashBackyard,
          truckPickupFarShot,
          truckPickupCloseShot,
          truckPickupMediumShot
        ]}
      />
      <div>
        <h1>The input element</h1>

        <form action="/" className="userForm">
            <div className="namePhoneDiv">
                <input type="text" id="userInputBox" name="fname" placeholder="Name" className="name"/> 
                <input type="text" id="userInputBox" name="lname" placeholder="Phone Number"/>
            </div>
            <div className="emailZipDiv">
                <input type="text" id="userInputBox" name="lname"  placeholder="E-mail" className="email"/>
                <input type="text" id="userInputBox" name="lname" placeholder="Zip Code"/>                 
            </div>
            <div className="trashDescriptionAndSubmit">
                <textarea type="text" id="userInputBox" name="fname" placeholder="What do you need to have removed? How quickly does it need to be removed? "/>
                <input type="submit" value="Submit"/>
            </div>

        </form>


<p>Click the "Submit" button and the form-data will be sent to a page on the 
server called "action_page.php".</p> 
      </div>
    </div>
  );
};

export default LandingPage; 