class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<section class="footer-section">
        <footer>
            <div class="footer-div">
                <div class="px-4">
                    <div class="row pt-3">
                        <div class="col-12 col-md-6 col-lg-6">
                            <div class="py-4">
                                <h2 class="text-light">CONTACT</h2>
                                <div class="pt-4">
                                    <figure class="d-flex">
                                        <a class="text-light pe-3" href=""><i class="fa-solid fa-house"></i></a>
                                        <figcaption>
                                            <address class="text-light">Treasure Trail Capital,Nucleus Mall, Camp, Pune,
                                                Maharashtra 411001
                                            </address>
                                        </figcaption>
                                    </figure>

                                    <figure class="d-flex">
                                        <a class="text-light pe-3" href=""><i class="fa-solid fa-message"></i></a>
                                        <figcaption>
                                            <p class="text-light">contact@treasuretrailcapital.in</p>
                                        </figcaption>
                                    </figure>

                                    <figure class="d-flex">
                                        <a class="text-light pe-3" href=""><i class="fa-solid fa-phone-flip"></i></a>
                                        <figcaption>
                                            <p class="text-light">+ 91 82372 46954</p>
                                            <p class="text-light">+ 91 95116 67398</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="copyright-sec">
                <div class="text-center pt-2">
                    <p class="text-light"><i class="fa-regular fa-copyright"></i> 2024 Treasure Trail Capital, Pune</p>
                </div>
            </section>
        </footer>
    </section>`
    }
}

customElements.define('custom-footer', CustomFooter);