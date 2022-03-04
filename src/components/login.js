import React from 'react'
import { NavLink } from 'react-router-dom';
import login_img from '../components/colorlib-regform-7/images/signin-image.jpg';
import './colorlib-regform-7/css/style.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import './home.css';

const Login = () => {
    const myStyle = {
        marginTop:'10%'
    };
  return (
    <div className='login'>
      <section className="sign-in" >
            <div className="container" >
                <div className="signin-content" >
                    <div className="signin-image">
                        <figure><img src={login_img} alt="sing up image" /></figure>
                        <NavLink className ="signup-image-link" to='/signup'>Create an account</NavLink>
                        {/* <a href="#" className="signup-image-link">Create an account</a> */}
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><PersonIcon /></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><LockIcon /></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        {/* <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Login