import React, { Component } from 'react';
import './Reviews.css';

import { BrowserRouter as Router } from 'react-router-dom';

import testimonialOne from "../../img/testimonialOne.jpg";
import testimonialTwo from "../../img/testimonialTwo.jpg";
import testimonialThree from "../../img/testimonialThree.jpg";

export class Reviews extends Component {
    render() {
        return (
            <Router>
                <section className="Section__Reviews" id="reviews">
                    <h2>Our testimonials</h2>
                    <div className="Reviews__Container">
                        <div className="Testimonial TestimonialOne">
                            <p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque.</q></p>
                            <div className="UserInfo">
                                <img src={testimonialOne}></img>
                                <p>Alessandra Wolf</p>
                            </div>
                        </div>

                        <div className="Testimonial TestimonialTwo">
                            <p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque.</q></p>
                            <div className="UserInfo">
                                <img src={testimonialTwo}></img>
                                <p>Paula Nielsen</p>
                            </div>

                        </div>

                        <div className="Testimonial TestimonialThree">
                            <p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque.</q></p>
                            <div className="UserInfo">
                                <img src={testimonialThree}></img>
                                <p>Antoine Richard</p>
                            </div>

                        </div>
                    </div>
                </section>
            </Router >
        )
    }
}

export default Reviews;
