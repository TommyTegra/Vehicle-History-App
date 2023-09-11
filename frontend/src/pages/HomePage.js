import React from "react";

function HomePage() {
    return (
        <>
            <h2>Tommy Nguyen's Portfolio</h2>

            <article>
                <p>Currently, my career goals are to become and work as a software engineer. However, this was  
                    not always the case. My first bachelor's degree was in Biology with a minor in Psychology. 
                    Initially, my plans were to do eventually pursue a career in the medical field. Unfortunately,
                    I realized that it was something I no longer desired towards the end of my undergraduate. 
                    I graduated and worked in a non-related field for a few years to save money to eventually 
                    pursue something that I was passionate about. Following some colleagues' recommendation of
                    programming, I began to self-teach myself and found myself wanting to pursue this path.
                    This led to my attendance in OSU's Post-Baccalaureate Comp Sci program, which brings us to now.
                </p>

                <p>Webpage Technologies Utilized:
                    <ul>
                        <li>
                            HTML and CSS. HTML allows for the webpage to have a structure which can be organized and
                            sectioned. This is achieved by page layout tags, which provides each section their own style
                            and characteristics. CSS allows for further styling that cannot be achieved by HTML alone.
                            This boosts readability, usability, and legibility throughout the webpage's contents. 
                        </li>
                        <li>
                            JavaScript, Node.js/NPM, and Express. JavaScript allows for web applications to be incorporated 
                            into webpages with both client-side and server-side programming. Node is a runtime environment 
                            based in JavaScript that allows for efficient development of server-side web applications. Node 
                            Package Manager, or NPM, allows for packages to be installed in our projects for use instead of 
                            attempting to “recreate the wheel”. Express allows for the usage of Application Programming 
                            Interface, or API, which allows for various data manipulation in the web application. 
                        </li>
                        <li>
                            MongoDB, Mongoose, and REST. MongoDB is a document-oriented database management system that 
                            allows data to be stored as documents. A JavaScript library, Mongoose, is utilized to interact
                            with MongoDB and its contents/functionality, by mapping JavaScript objects and classes to the 
                            documents in MongoDB. Giving our API its style and guidelines are the architectural styles of
                            REST. The guidelines that are implemented by REST allows for fast and light web applications.
                        </li>
                        <li>
                            React and MERN. React is used for the frontend of web applications as a framework based in 
                            JavaScript. It is used to build and develop user interfaces with component-based architecture 
                            and can achieve efficient rendering. Utilizing the technologies mentioned together can create 
                            or implement a full-stack MERN app, with MERN combining the technologies of MongoDB, Express.js,
                            React, and Node.js. Through the utilization of the four technologies provides an efficient foundation 
                            and platform for building scalable and dynamic full-stack web applications. 
                        </li>
                    </ul>
                </p>
            </article>

        
        </>

    );
}

export default HomePage;