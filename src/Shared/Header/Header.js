import React from "react";
// import '../../assets/css/nisoz-custom-rtl.css'
// import '../../assets/css/nisoz-dark.css'
// import './nisoz-rtl.css'
// import './nisoz.css'
import sliderShape1 from '../../assets/images/shapes/slider-3-bg-1.png'
import sliderShape2 from '../../assets/images/shapes/slider-3-bg-1.png'
// import sliderShape3 from '../../assets/images/shapes/slider-3-bg-3.png'

// import logoLight from  '../../assets/images/logo-light.png'
const Header = () => {
    const divStyle1 = {
        backgroundImage: `url(${sliderShape1})`,
        backgroundSize: 'cover', // Image size set korte chaile
        backgroundRepeat: 'no-repeat', // Image repeat korte chaile
        width: '100px', // Width set korte chaile
        height: '100px', // Height set korte chaile
      };

      const divStyle2 = {
        backgroundImage: `url(${sliderShape2})`,
        backgroundSize: 'cover', // Image size set korte chaile
        backgroundRepeat: 'no-repeat', // Image repeat korte chaile
        width: '100px', // Width set korte chaile
        height: '100px', // Height set korte chaile
      };

    //   const divStyle3 = {
    //     backgroundImage: `url(${sliderShape3})`,
    //     backgroundSize: 'cover', // Image size set korte chaile
    //     backgroundRepeat: 'no-repeat', // Image repeat korte chaile
    //     width: '100px', // Width set korte chaile
    //     height: '100px', // Height set korte chaile
    //   };

    
  return (
    <div className="page-wrapper">
            <header className="main-header">
                <nav className="main-menu main-menu-no-top">
                    <div className="container-fluid">
                        <div className="main-menu__logo">
                            <a href="index.html">
                                <img
                                    src="assets/images/logo-light.png"
                                    width="96"
                                    height="34"
                                    alt="nisoz"
                                />
                            </a>
                        </div>
                        {/*<!-- /.main-menu__logo --> */}
                        <div className="main-menu__nav">
                            <ul className="main-menu__list">
                                <li className="current megamenu megamenu-clickable megamenu-clickable--toggler">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">About</a>
                                    <ul>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="team.html">Our Team</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#">Services</a>
                                    <ul>
                                        <li>
                                            <a href="website-designing.html">Website Designing</a>
                                        </li>
                                        <li>
                                            <a href="website-development.html">Website Development</a>
                                        </li>
                                        <li>
                                            <a href="mobile-application.html">Mobile Application</a>
                                        </li>
                                        <li>
                                            <a href="digital-marketing.html">Digital Marketing</a>
                                        </li>
                                        <li>
                                            <a href="social-marketing.html">Social Marketing</a>
                                        </li>
                                        <li>
                                            <a href="seo-content.html">SEO & Content Writing</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="portfolio.html">Portfolio</a>
                                </li>
                                <li className="dropdown">
                                    <a href="career.html">Career</a>
                                </li>
                                <li className="dropdown">
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/*<!-- /.main-menu__nav --> */}
                        <div className="main-menu__right">
                            <a href="#" className="main-menu__toggler mobile-nav__toggler">
                                <i className="fa fa-bars"></i>
                            </a>
                            {/*<!-- /.mobile menu btn --> */}
                            <a href="tel:+9236809850" className="main-menu__phone">
                                <i className="icon-telephone"></i>
                                +92 (3680) - 9850
                            </a>
                            {/*<!-- /.phone-number --> */}
                            <a href="#" className="main-menu__search search-toggler">
                                <i className="icon-magnifying-glass"></i>
                            </a>
                            {/*<!-- /.search btn --> */}
                            <a href="cart.html" className="main-menu__cart cart-toggler">
                                <i className="icon-shopping-cart"></i>
                                <span className="main-menu__cart__count">0</span>
                            </a>
                            {/*<!-- /.cart btn --> */}
                        </div>
                        {/*<!-- /.main-menu__right --> */}
                    </div>
                    {/*<!-- /.container --> */}
                </nav>
                {/*<!-- /.main-menu --> */}
            </header>
            {/*<!-- /.main-header --> */}
            <div className="stricky-header stricked-menu main-menu main-menu-no-top">
                <div className="sticky-header__content"></div>
                {/*<!-- /.sticky-header__content --> */}
            </div>
            {/*<!-- /.stricky-header --> */}
            {/*<!--Main Slider Start--> */}
            <section className="main-slider-three">
                <div className="main-slider-three__carousel nisoz-owl__carousel owl-carousel" data-owl-options='{
		"loop": true,
		"animateOut": "slideOutDown",
		"animateIn": "fadeIn",
		"items": 1,
		"smartSpeed": 1000,
        "autoplay": true,
        "autoplayTimeout": 6000,
		"autoplayHoverPause": true,
		"nav": true,
        "navText": ["<span className=\"icon-up-arrow\"></span>","<span className=\"icon-down-arrow\"></span>"],
		"dots": false,
		"margin": 0
	    }'>
                    <div className="item">
                        {/*<!-- slider item start --> */}
                        <div className="main-slider-three__item">
                            {/*<!-- bg image start --> */}
                            <div className="main-slider-three__bg" style={divStyle1}></div>
                            {/*<!-- bg image end --> */}
                            <div className="main-slider-three__shape-1">
                                <img src="assets/images/shapes/slider-3-shape-1.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-2">
                                <img src="assets/images/shapes/slider-3-shape-2.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-3">
                                <img src="assets/images/shapes/slider-3-shape-3.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-bg">
                                <img src="assets/images/backgrounds/slider-3-shape-1.jpg" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-backgorund --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="main-slider-three__content">
                                            <h5 className="main-slider-three__sub-title">Welcome to creative agency</h5>
                                            {/*<!-- slider-title --> */}
                                            <h2 className="main-slider-three__title">
                                                <span className="main-slider-three__title-anim">We’re Digital</span>
                                                <span className="main-slider-three__title-anim">Marketing</span>
                                                <span className="main-slider-three__title-anim">Agency</span>
                                            </h2>
                                            {/*<!-- slider-title --> */}
                                            <div className="main-slider-three__btn">
                                                <a href="about.html" className="nisoz-btn">
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__text">Discover More</span>
                                                </a>
                                                {/*<!-- /.btn --> */}
                                            </div>
                                            <div className="main-slider-three__arrow">
                                                <img src="assets/images/shapes/slider-3-border.png" alt="nisoz"/>
                                            </div>
                                            {/*<!-- /.arrow --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- slider item end --> */}
                    <div className="item">
                        {/*<!-- slider item start --> */}
                        <div className="main-slider-three__item">
                            {/*<!-- bg image start --> */}
                            <div className="main-slider-three__bg" style={divStyle2}>

                            </div>
                            {/*<!-- bg image end --> */}
                            <div className="main-slider-three__shape-1">
                                <img src="assets/images/shapes/slider-3-shape-1.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-2">
                                <img src="assets/images/shapes/slider-3-shape-2.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-3">
                                <img src="assets/images/shapes/slider-3-shape-3.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-bg">
                                <img src="assets/images/backgrounds/slider-3-shape-2.jpg" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-backgorund --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="main-slider-three__content">
                                            <h5 className="main-slider-three__sub-title">Welcome to creative agency</h5>
                                            {/*<!-- slider-title --> */}
                                            <h2 className="main-slider-three__title">
                                                <span className="main-slider-three__title-anim">We’re Digital</span>
                                                <span className="main-slider-three__title-anim">Marketing</span>
                                                <span className="main-slider-three__title-anim">Agency</span>
                                            </h2>
                                            {/*<!-- slider-title --> */}
                                            <div className="main-slider-three__btn">
                                                <a href="about.html" className="nisoz-btn">
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__text">Discover More</span>
                                                </a>
                                                {/*<!-- /.btn --> */}
                                            </div>
                                            <div className="main-slider-three__arrow">
                                                <img src="assets/images/shapes/slider-3-border.png" alt="nisoz"/>
                                            </div>
                                            {/*<!-- /.arrow --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- slider item end --> */}
                    <div className="item">
                        {/*<!-- slider item start --> */}
                        <div className="main-slider-three__item">
                            {/*<!-- bg image start --> */}
                            <div className="main-slider-three__bg" style={divStyle1}></div>
                            {/*<!-- bg image end --> */}
                            <div className="main-slider-three__shape-1">
                                <img src="assets/images/shapes/slider-3-shape-1.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-2">
                                <img src="assets/images/shapes/slider-3-shape-2.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-3">
                                <img src="assets/images/shapes/slider-3-shape-3.png" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-one --> */}
                            <div className="main-slider-three__shape-bg">
                                <img src="assets/images/backgrounds/slider-3-shape-3.jpg" alt="nisoz"/>
                            </div>
                            {/*<!-- shape-backgorund --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="main-slider-three__content">
                                            <h5 className="main-slider-three__sub-title">Welcome to creative agency</h5>
                                            {/*<!-- slider-title --> */}
                                            <h2 className="main-slider-three__title">
                                                <span className="main-slider-three__title-anim">We’re Digital</span>
                                                <span className="main-slider-three__title-anim">Marketing</span>
                                                <span className="main-slider-three__title-anim">Agency</span>
                                            </h2>
                                            {/*<!-- slider-title --> */}
                                            <div className="main-slider-three__btn">
                                                <a href="about.html" className="nisoz-btn">
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__text">Discover More</span>
                                                </a>
                                                {/*<!-- /.btn --> */}
                                            </div>
                                            <div className="main-slider-three__arrow">
                                                <img src="assets/images/shapes/slider-3-border.png" alt="nisoz"/>
                                            </div>
                                            {/*<!-- /.arrow --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- slider item end --> */}
                </div>
            </section>
            {/*<!--Main Slider End--> */}
            {/*<!-- Service Start --> */}
            
            {/*<!-- Service Start --> */}
           
         
            {/*<!-- /.client-carousel --> */}
            {/*<!-- Feature Start --> */}
           
            {/*<!-- Feature End --> */}
            {/*<!-- Call To Action Start --> */}
       
          
        </div>
  );
};

export default Header;
