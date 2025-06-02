import OpeningSoonTag from "./tag/OpeningSoon"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={"/banner.png"} alt='Logo' width={100} height={100}/>
                    <h1>The Himalayan Moose</h1>
                    <OpeningSoonTag/>
                </div>
                {/* <div className="social-icons">
                    <a href="#">Facebook<i className="fab fa-facebook-f"></i></a>
                    <a href="#">insta<i className="fab fa-instagram"></i></a>
                    <a href="#">twit<i className="fab fa-twitter"></i></a>
                    <a href="#">trp<i className="fab fa-tripadvisor"></i></a>
                </div> */}
            </div>
            <div className="copyright">
                <p>&copy; 2025 The Himalayan Moose Restaurant. All Rights Reserved.</p>
            </div>
        </footer>)
}

export default Footer