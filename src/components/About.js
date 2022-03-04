import React from 'react';
import './about.css';
import prof from '../images/profilepic.jpg'

const About = () => {
  const myStyle= {
    width:'30%',
    marginLeft:'auto',
    marginRight:'auto',
    alignText: 'center' ,
    borderRadius:'50%',
    borderStyle: 'none',
    padding:'auto'
  };
  const img_style={
    margin:'auto',
    width:'40%'
  }
  return (
    <>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">About Me</h3>
                <h6 className="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Birthday</label>
                      <p>4th april 1998</p>
                    </div>
                    <div className="media">
                      <label>Age</label>
                      <p>22 Yr</p>
                    </div>
                    <div className="media">
                      <label>Residence</label>
                      <p>Canada</p>
                    </div>
                    <div className="media">
                      <label>Address</label>
                      <p>California, USA</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>info@domain.com</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>820-885-3321</p>
                    </div>
                    <div className="media">
                      <label>Skype</label>
                      <p>skype.0404</p>
                    </div>
                    <div className="media">
                      <label>Freelance</label>
                      <p>Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" style={img_style}>
              <div className="about-avatar">
                <input type='submit' value='editprofile' style={myStyle}/>
                <img src={prof} title="profilepic" alt="profile pciture" />

              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default About