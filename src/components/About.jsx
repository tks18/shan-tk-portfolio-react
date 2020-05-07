 import React from "react";
 import {AboutAuthor} from "../constants"
  /***********************
    About Component
   ***********************/
  
function About(props) {
    return (
        <section id="about">
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>Who's this guy?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc full">
                        <h4 className="subtitle">About Me.</h4>
                        <p className="shortdesc">{AboutAuthor.shortdesc}</p>
                        <p>{AboutAuthor.longdesc}</p>
                    </div>
                    <div className="title">
                        <h3>Known Technologies</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc">
                        <h4 className="subtitle-inside">Front-end Development</h4>
                        <p>
                            {AboutAuthor.fronttechnologies.map((item) => {
                                return <li>{item}</li>
                            })}
                        </p>
                        <h4 className="subtitle-inside">Back-end Development</h4>
                        <p>
                            {AboutAuthor.backendtechnologies.map((item) => {
                                return <li>{item}</li>
                            })}
                        </p>
                    </div>
                    <div className="desc">
                        <h4 className="subtitle-inside">Mobile Development</h4>
                        <p>
                            {AboutAuthor.mobiletechnologies.map((item) => {
                                return <li>{item}</li>
                            })}
                        </p>
                        <h4 className="subtitle-inside">Data Analytics</h4>
                        <p>
                            {AboutAuthor.datarelatedtechnologies.map((item) => {
                                return <li>{item}</li>
                            })}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

  export default About;