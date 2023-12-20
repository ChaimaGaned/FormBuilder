import React from 'react'

const Contact = () => {
return (
    <div>
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
            <h2>Contact</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div>
        </div>
            <div className="row mt-5">
            <div className="col-lg-4">
                <div className="info">
                <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                </div>
                <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                </div>
                </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
                <form>
                <div className="row gy-2 gx-md-3">
                    <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group col-12">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group col-12">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="btn-get-started scrollto"><button type="submit" >Send Message</button></div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>
        {/* End Contact Section */}
    </div>
)
}

export default Contact
