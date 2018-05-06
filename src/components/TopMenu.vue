<template>
<!-- masthead -->
        <header id="masthead" class="site-header clearfix">
            <div class="header-main clearfix">
                <div class="site-contact">
                    <div class="container mobile_relative">
                        <div class="site-logo">
                            <a href="index-2.html" class="logo">
                                <img src="static/images/orange-black_light.png" alt="CargoHub" class="logo-light hide-logo">
                                <img src="static/images/orange-black_dark.png" alt="CargoHub" class="logo-dark  show-logo">
                            </a>
                            <p class="site-title"><a href="#">CargoHub</a></p>
                            <h2 class="site-description">Just another Steel Themes Sites site</h2>
                        </div>

                        <div class="site-header-widget">
                            <div id="custom_html-2" class="widget_text widget">
                                <div class="textwidget custom-html-widget">
                                    <div class="header-contact"><span><i class="flaticon-clock-1 "> </i></span>
                                        <p>Opening Hours :</p>
                                        <h4>MON - FRi: 8AM - 5PM</h4></div>
                                </div>
                            </div>
                            <div id="custom_html-3" class="widget_text widget">
                                <div class="textwidget custom-html-widget">
                                    <div class="header-contact"><span><i class="flaticon-phone-call "> </i></span>
                                        <p>Troll Free Number :</p>
                                        <h4>+44 567 890123 - 30</h4></div>
                                </div>
                            </div>
                            <div id="custom_html-4" class="widget_text widget">
                                <div class="textwidget custom-html-widget">
                                    <div class="header-contact"><span><i class="flaticon-signs "> </i></span>
                                        <p>Address : Cargo Hub,</p>
                                        <h4>NEWYORK 10012, USA</h4></div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="navbar-toggle">
                            <span class="navbar-icon">
								<span class="navbars-line"></span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="site-menu">
                    <div class="container">
                        <div class="row">
                            <div class="site-nav col-sm-12 col-xs-12">

                                <nav id="site-navigation" class="main-nav primary-nav nav">
                                    <ul class="menu">
                                       <li><router-link to="/">Home</router-link></li>
                                        <li><router-link to="/about">About</router-link></li>
                                          <li><router-link to="/contact">Contact</router-link></li>
                                        <li class="extra-menu-item menu-item-button-link">
                                            <router-link to="/quote" class="fh-btn btn">Get A Quote</router-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- masthead end -->
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
