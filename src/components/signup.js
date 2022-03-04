import React from 'react'
import '../components/colorlib-regform-7/css/style.css';
import signup_img from "./colorlib-regform-7/images/signup-image.jpg";
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import './colorlib-regform-7/css/style.css';
import { NavLink } from 'react-router-dom';
import './home.css';

const Signup = () => {
  // const myStyle={
  //   marginTop:'-1%',
  //   width:'90%'
  // };
  return (

    <div >

      <div className="container">
        <div className="signup-content"  >
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label for="name"><PersonIcon></PersonIcon></label>
                <input type="text" name="name" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label for="email"><MailIcon /></label>
                <input type="email" name="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label for="phone"><PhoneAndroidIcon /></label>
                <input type="number" name="phone" id="phone" placeholder="Your Phone number" />
              </div>
              <div className="form-group">
                <label for="pass"><LockIcon /></label>
                <input type="password" name="pass" id="pass" placeholder="Password" />
              </div>
              <div className="form-group">
                <label for="re-pass"><LockOpenIcon /></label>
                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
              </div>
              <div className="form-group">
                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
              </div>
              <div class="form-group form-button">
                <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure><img src={signup_img} alt="sing up image" /></figure>
            <NavLink className='signup-image-link' to='/login' >I am already member</NavLink>
            {/* <NavBar to='/login' >I am already member</Navbar> */}
            {/* <a href="#" class="signup-image-link">I am already member</a> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup