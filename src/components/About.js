const About = () => {
    return <div className="about" id="about">
        <div className="heading white">
            <h2>About Me</h2>
        </div>
        <div className="content">
            <div className="contentBx w50">
                <h3>Android and Web Developer</h3>
                <p>I am pursuing my BTech degree in <b>Electronics and Communication Engineering </b> 
                    from <b>NIT Uttarakhand</b>. <br/>
                    I have been working on various projects related to web and android app development.<br/>
                    I started with Android Studio and made some app 
                    I am currently in search of a place where I can actually implement my skills and learn more.
                    <br/><br/><br/><br/><b>"Success is a pyramid made up of struggles and hard work"</b>

                </p>
            </div>
            <div className="w50">
                    <img src={require('../resources/images/img.jpg')} className="my-img"/>
            </div>
        </div>
    </div>
};

export default About;