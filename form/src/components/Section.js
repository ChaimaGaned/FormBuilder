import React from 'react'
import { Link } from 'react-router-dom'

const Section = () => {
return (
    <div>
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative" data-aos="fade-up" data-aos-delay={100}>
                <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-9 text-center">
                    <h1>The refreshingly different form builder</h1>
                    <h2>Make forms designed to get you more and better data.</h2>
                </div>
                </div>
                <div className="text-center">
                    <Link to="/form"><a href className="btn-get-started scrollto">Get Started</a></Link>
                </div>
            </div>
        </section>
    </div>
)
}

export default Section
