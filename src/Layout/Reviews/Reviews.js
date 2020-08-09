import React, { Component } from 'react';
import './Reviews.css';

import testimonialOne from "../../img/testimonialOne.jpg";

export class Reviews extends Component {
    render() {
        return (
            <section className="Section__Reviews">
                    <h2>Our testimonials</h2>
                <div className="Reviews__Container">
                    <div className="Testimonial TestimonialOne">
                        <p><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque.</q></p>
                        <div className="UserReview">
                            <img src={testimonialOne}></img>
                            <p>Alessandra Wolf</p>
                        </div>
                        
                    </div>

                    <div className="Testimonial TestimonialTwo">

                    </div>

                    <div className="Testimonial TestimonialThree">

                    </div>
                </div>
            </section>
        )
    }
}

export default Reviews;
