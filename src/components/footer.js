function Footer(){
    return (

        <footer className="footer-section">

        <div className="copyright-reserved">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            All rights reserved | C202
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    );
}

export default Footer;