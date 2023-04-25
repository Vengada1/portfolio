import { GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import '../Styles/Footer.css';


function Footer () {
    return(
        <>
            <footer className="text-center " >
                <div className="container pt-4">
                    <section className="mb-4 ">
                        <a className="icon btn-link btn-floating btn-lg text-white m-1"
                            href="https://github.com/Vengada1"
                            role="button"
                            target="_blank"
                            rel="noreferrer"
                        ><GitHub/></a>

                        <a className="icon btn-link btn-floating btn-lg text-white m-1"
                            href="https://www.linkedin.com/in/vengadanathan-v/"
                            role="button"
                            target="_blank"
                            rel="noreferrer"
                        ><LinkedIn/></a>

                        {/*<a className="icon btn-link btn-floating btn-lg text-white m-1"
                            
                            href="https://stackoverflow.com/users/21606462/haridass-n-m"
                            role="button"
                            target="_blank"
                            rel="noreferrer"
                        >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path></svg>
                        </a>*/}

                        {/* <a className="icon btn-link btn-floating btn-lg text-white m-1"
                            href="#."
                            role="button"
                        ><Instagram/></a> */}

                    </section>
                </div>
                <div className="build text-center p-3" >
                Design & Built by Vengadanathan &copy; 2023 
                </div>

            </footer>
        </>
    );
};

export default Footer;



                    