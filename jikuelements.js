

class JikuFooterMinimal extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <!-- Contact -->
                            <section class="contact">
                                <br>
                                <footer>
                                    <a href="mailto:admin@jiku.pro" class="button">Email us</a>
                                </footer>
                                <br>
                                <br>
                                <!-- <p>Our Academic Profile</p> -->
                                <ul class="icons">
                                    <!-- <li><a class="ai ai-academia ai-2x" href="https://nanyang.academia.edu/CyrilDonnelly" target="_blank"></a></li> -->
                                    <li><a class="fab fa-github fa-2x" href="https://github.com/jiku-pro" target="_blank"></a></li>
                                    <li><a class="ai ai-google-scholar-square ai-2x" href="https://scholar.google.com/citations?user=QxNCBYoAAAAJ&hl=en&oi=sra" target="_blank"></a></li>
                                    <li><a class="ai ai-researchgate ai-2x" href="https://www.researchgate.net/profile/Todd-Pataky" target="_blank"></a></li>
                                    <li><a class="ai ai-orcid ai-2x" href="https://orcid.org/0000-0002-8292-7189" target="_blank"></a></li>
                                    <li><a class="ai ai-osf ai-2x" href="https://osf.io/9vgcr/" target="_blank"></a></li>
                                </ul>
                            </section>

                        <!-- Copyright -->
                            <div class="copyright">
                                <ul class="menu">
                                    <li>&copy; Jiku Pro Pty Ltd 2025, All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                                </ul>
                            </div>

                    </div>

                </div>
            </div>
        </div>
        `
    }
}

customElements.define('jiku-footermin', JikuFooterMinimal)


// class JikuNav extends HTMLElement{
//     connectedCallback(){
//         this.innerHTML = `
//         <nav id="nav">
//             <ul>
//                 <li><a href="index.html">Home</a></li>
//                 <li>
//                     <a href="index.html#banner">About</a>
//                     <ul>
//                         <li><a href="index.html#banner" class="scrolly">Company</a></li>
//                         <li><a href="index.html#technical" class="scrolly">Technical Team</a></li>
//                         <li><a href="index.html#corporate" class="scrolly">Corporate Team</a></li>
//                         <li><a href="https://www.spm1d.org/References.html" target="_blank"  class="scrolly">References</a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="products.html">Products</a>
//                     <ul>
//                         <li><a href="jikucore.html">Jiku Core</a></li>
//                         <li><a href="products.html#products-jiku-paid">Jiku UI</a></li>
//                         <li><a href="power1d.html">Jiku Power1D</a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="tutorials.html">Tutorials</a>
//                     <ul>
//                         <li><a href="tutorials.html#tutorials-power1d">Jiku Power1D</a></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="support.html">Support</a>
//                     <ul>
//                         <li><a href="support.html#support-free">Free Support</a></li>
//                         <li><a href="support.html#support-consulting">Consulting</a></li>
//                         <li><a href="support.html#support-workshops">Workshops</a></li>
//                     </ul>
//                 </li>
//                 <li><a href="contact.html">Contact</a></li>
//             </ul>
//         </nav>
//         `
//     }
// }


// customElements.define('jiku-nav', JNav)



