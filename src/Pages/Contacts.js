import React, {useState} from "react";
import '../Styles/Contacts.css';

function Contacts () {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="contact" id="contact1">
            <div className="title">Get in Touch</div>
            <p>My inbox is always open,  get back Touch with you!</p>
            <div className="row">
              <div className="contact-col">
                <div>
                  <i className="fa fa-home"></i>
                  <span>
                    <h3>64 Sannathi street</h3>
                    <h5>CHEYYAR, TIRUVANNAMALAI - TN, IN</h5>
                  </span>
                </div>
                <div>
                  <i className="fa fa-phone"></i>
                  <span>
                    <h3>+91 7825082608</h3>
                  </span>
                </div>
                <div>
                  <i className="fa-solid fa-envelope"></i>
                  <span>
                    <h4>venkatnathan@gmail.com</h4>
                    <h6>Mail me to get in touch With me!!!</h6>
                  </span>
                </div>
              </div>

              <div className="contact-col2">
                <form action="/">
                  <input type="text" name="Name" placeholder="Enter Your Name" required />
                  <input type="text" name="Email" placeholder="Enter your Email Adderss" required />
                  <textarea rows="3" name="Message" placeholder="Message"></textarea>
                  
                  {
                    showMessage?<p style={{paddingLeft:"20px",color:"whitesmoke"}}>Message sent</p>:""
                  }
                  <div className="arrange"><button className="contact-btn" type="submit" onClick={()=>{
                      setShowMessage(true);
                      setTimeout(() => {
                        setShowMessage(false);
                      }, 3000);
                  }}>Send Message</button></div>
                </form>
              </div>
            </div>
        </div>
    );
};

export default Contacts;