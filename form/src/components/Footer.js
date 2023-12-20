import React from 'react'

const Footer = () => {
return (
    <div>
      {/* ======= Footer ======= */}
        <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                        <h3>ArselaForms</h3>
                        <p>
                            Sousse , Tunisia <br />
                            <strong>Phone:</strong> +216 53 548 855<br />
                            <strong>Email:</strong> info@example.com<br />
                        </p>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right" /> <a href>Home</a></li>
                            <li><i className="bx bx-chevron-right" /> <a href>About us</a></li>
                            <li><i className="bx bx-chevron-right" /> <a href>Services</a></li>
                        </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href >Web Design</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href >Web Development</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href>Product Management</a></li>
                        </ul>
                    </div>
                        <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Join Our Newsletter</h4>
                        <p>To keep in touch with us</p>
                        <form action method="post">
                            <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        © Copyright <strong><span>ArselaForms</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href>GachArsela</a>
                    </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href  className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href  className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href  className="instagram"><i className="bx bxl-instagram" /></a>
                    <a href  className="google-plus"><i className="bx bxl-skype" /></a>
                    <a href className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
    </div>
)
}

export default Footer
