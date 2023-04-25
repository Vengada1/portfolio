import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { School, Work } from '@mui/icons-material';

function Experience () {
    return (
        <div className="experience" style={{ backgroundColor: "#182a40", fontSize: "10px"}}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#8E8F9D', color: '#fff'}}
                    date="2015-2019"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<School />}
                >
                    <h4 className='vertical-timeline-element-title'>Arulmigu Meenakshi Amman College Of Engineering,</h4>
                    <p style={{ color: "black" }}>Kanchipuram — BE CIVIL —<span style={{ color: "#3e497a" }}> 1st CLass</span></p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2020-2021"
                    contentStyle={{ background: '#8E8F9D', color: '#fff'}}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<Work />}
                >
                    <h4 className='vertical-timeline-element-title'>MST Rebar services,</h4>
                    <p style={{ color: "black" }}>Cheyyar — Rebar Detailer —<span style={{ color: "#3e497a" }}> Design Engineer</span></p>
                </VerticalTimelineElement>

                {/*<VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2020-2022"
                    contentStyle={{ background: '#8E8F9D', color: '#fff'}}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<Work />}
                >
                    <h4 className='vertical-timeline-element-title'>R Stahl Private Limited-MNC,</h4>
                    <p style={{ color: "black" }}>Chennai — ELECTRICAL —<span style={{ color: "#3e497a" }}> Design Engineer-Associate</span></p>
    </VerticalTimelineElement>*/}

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022-2023"
                    contentStyle={{ background: '#8E8F9D', color: '#fff'}}
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<School />}
                >
                    <h4 className='vertical-timeline-element-title'>GUVI Zen Class</h4>
                    <p style={{ color: "black" }}>MERN - STACK <span style={{ color: "#3e497a" }}> Full Stack Developer (IIT Madras Incubated)</span></p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Experience;