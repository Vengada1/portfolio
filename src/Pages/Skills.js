import React from "react";
import '../Styles/Skills.css';

function Skills () {
    return (
        <div className="home">
            <div className="skills container-fluid">
                <div className='text-center'>
                    <h1 className='skillHeading display-3'>Skills</h1>
                    <p className="info">Here are a few technologies I’ve been working with recently:</p>
                </div>

                <div className="row skillMention">
                    <div className="frontEnd col-md-4">
                        <div className="pb-3">
                            <h2>Front End</h2>
                        </div>
                        <div className="frontEndBox">
                            <div>
                                <img alt='' src='/Images/React.png'/>
                            </div>
                            <div>
                                <h5>React</h5>
                            </div>
                            <div>
                                <progress max="100" value="75"></progress>
                            </div>
                        </div>
                        <div className="frontEndBox">
                            <div>
                                <img alt='' src='/Images/boostrap.png'/>
                            </div>
                            <div>
                                <h5>Bootstrap</h5>
                            </div>
                            <div>
                                <progress max="100" value="70"></progress>
                            </div>
                        </div>
                        <div className="frontEndBox">
                            <div>
                                <img alt='' src='/Images/Html.png'/>
                            </div>
                            <div>
                                <h5>HTML5</h5>
                            </div>
                            <div>
                                <progress max="100" value="80"></progress>
                            </div>
                        </div>
                        <div className="frontEndBox">
                            <div>
                                <img alt='' src='/Images/Css.png'/>
                            </div>
                            <div>
                                <h5>CSS3</h5>
                            </div>
                            <div>
                                <progress max="100" value="70"></progress>
                            </div>
                        </div>
                    </div>



                    <div className="backEnd col-md-4">
                        <div className="pb-3">
                            <h2>Back End</h2>
                        </div>
                        <div className="backEndBox">
                            <div>
                                <img alt='' src='/Images/node.png' /> 
                            </div>
                            <div>
                                <h5>Node JS</h5>
                            </div>
                            <div>
                                <progress max="100" value="85"></progress>
                            </div>
                        </div>
                        <div className="backEndBox">
                            <div>
                                <img alt='' src='/Images/ex.png' /> 
                            </div>
                            <div>
                                <h5>Express JS</h5>
                            </div>
                            <div>
                                <progress max="100" value="75"></progress>
                            </div>
                        </div>
                        <div className="backEndBox">
                            <div>
                                <img alt='' src='/Images/mongodb.png' /> 
                            </div>
                            <div>
                                <h5>MongoDB</h5>
                            </div>
                            <div>
                                <progress max="100" value="80"></progress>
                            </div>
                        </div>
                        <div className="backEndBox">
                            <div>
                                <img alt='' src='/Images/sql.png' /> 
                            </div>
                            <div>
                                <h5>My SQL</h5>
                            </div>
                            <div>
                                <progress max="100" value="70"></progress>
                            </div>
                        </div>
                    </div>

                    <div className="Additonal col-md-4">
                        <div className="pb-3">
                            <h2>Additonal Known</h2>
                        </div>
                        <div className="AdditonalBox">
                            <div>
                                <img alt='' src='/Images/Js.png' />
                            </div>
                            <div>
                                <h5>JavaScript(ES6+)</h5>
                            </div>
                            <div>
                                <progress max="100" value="70"></progress>
                            </div>

                        </div>
                        <div className="AdditonalBox">
                            <div>
                                <img alt='' src='/Images/AWS.png' />
                            </div>
                            <div>
                                <h5>AWS  </h5>
                            </div>
                            <div>
                                <progress max="100" value="60"></progress>
                            </div>

                        </div>
                        <div className="AdditonalBox">
                            <div>
                                <img alt='' src='/Images/postman.png' />
                            </div>
                            <div>
                                <h5>Postman</h5>
                            </div>
                            <div>
                                <progress max="100" value="90"></progress>
                            </div>

                        </div>
                        <div className="AdditonalBox">
                            <div>
                                <img alt='' src='/Images/render.png' />
                            </div>
                            <div>
                                <h5>Render</h5>
                            </div>
                            <div>
                                <progress max="100" value="75"></progress>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skills;