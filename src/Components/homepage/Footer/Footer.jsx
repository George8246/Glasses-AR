import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="inner-footer big-margin">
                    <div className="footer-links-div">
                        <h5>Shop</h5>
                        <a href="">Men</a>
                        <a href="">Women</a>
                        <a href="">Accessories</a>
                        <a href="">Oakley</a>
                        <a href="">Ray-Ban</a>
                    </div>
                    <div className="footer-links-div">
                        <h5>Help</h5>
                        <a href="">FAQ</a>
                        <a href="">Contact Us</a>
                        <a href="">Order Status</a>
                        <a href="">Return Policy</a>
                        <a href="">Warranty</a>
                    </div>
                    <div className="footer-links-div">
                        <h5 className="headers-ref">About Us</h5>
                        <h5 className="headers-ref">Payment Methods</h5>
                        <h5 className="headers-ref">Blog</h5>
                    </div>
                    <div className="right-footer">
                        <div className="footer-logo">
                            <img src={require("../../../Images/glasses-logo.png")} alt="logo" />
                            <h1>GAR</h1>
                        </div>
                        <div className="social">
                            <h4>Get Social</h4>
                            <div>
                                <FontAwesomeIcon icon={faTwitter} className="font-upload" />
                                <FontAwesomeIcon icon={faFacebook} className="font-upload" />
                                <FontAwesomeIcon icon={faPinterest} className="font-upload" />
                                <FontAwesomeIcon icon={faInstagram} className="font-upload" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>Copyright &copy; George 2022</p>
            </footer>
        </div>
    );
}

export default Footer;
