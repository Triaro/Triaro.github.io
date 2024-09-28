const ContactMe = () => {
    return <section className="contact" id="contact">
        <div className="heading white">
            <h2>Contact Me</h2>
        </div>
        <div className="content">
            <div className="contactInfo">
                <h3>Contact Info</h3>
                <div className="contactInfoBx">
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Bengaluru, Karnataka <br/>560100</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+91 9897368561</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>abhimehra2762@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="formBx">
                <form>
                    <h3>Message Me</h3>
                    <input type="text" name="" placeholder="Full Name"/>
                    <input type="email" name="" placeholder="Email"/>
                    <textarea placeholder="Your Message"></textarea>
                    <input type="submit" value="Send"/>
                    
                </form>
            </div>
        </div>
    </section>
};

export default ContactMe;