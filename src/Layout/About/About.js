import React, { Component } from 'react';
import './About.css';

import aboutImage from '../../img/aboutImage.jpg';

export class About extends Component {
    render() {
        return (
            <section className="Section Section__About">
            <div className="About__Container">
            <div className="About">
                <img className='About__Image' src={aboutImage} />
                <div className='About__Text'>
                <h2>Our concept</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio. Eget magna fermentum iaculis eu non. Molestie at elementum eu facilisis sed odio morbi. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sagittis purus sit amet volutpat. Nullam vehicula ipsum a arcu. Sed faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames. Dignissim suspendisse in est ante. Id velit ut tortor pretium viverra suspendisse potenti nullam. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Donec ac odio tempor orci. Nisi porta lorem mollis aliquam ut porttitor leo a diam.
                </p>
                </div>
            </div>
            </div>
        </section>
        )
    }
}

export default About
