import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import '../Styles/Home.css';
import Typewriter from 'typewriter-effect';

function Home () {
    return (
        <div className="home">
            <div className="about">
                <div className="aboutLeft col-md-4">
                    <img
                        className="img-fluid"
                        src="/Images/vengadanathan_img.jpg"
                        alt="Profile_Picture"
                    />
                </div>
                
                <div className="profile-info aboutRight col-md-8" id="home">
                    <h3>Hi, Welcome!</h3>
                    <h1><strong>VENGADANATHAN V</strong></h1>
                    <div className="role">
                        <Typewriter
                            options={{
                                strings: ['MERN-STACK', 'Front-End Developer', 'Back-End Developer'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                    <div className="para">
                    <h4>I have completed my MERN stack development course, and have hands-on experience with web applications for creating a full-stack projects. I am currently looking for a job that will provide me with training in technologies such as React JS, Node JS, Express JS and MongoDB.</h4></div>
                    <br/>
                    <div className="button">
                        <a
                            href="https://drive.google.com/file/d/1BJMqEuZ0q_hdDJwcR3qozENzIY-MbdVh/view?usp=share_link"
                            download="resume"
                            target="_blank"
                            rel="noreferrer" 
                            className="resume btn btn-primary text-center"
                        >Get Resume<DownloadIcon/></a>
                    </div>
                </div>
                

                
            </div>

        </div>
    );
};

export default Home;