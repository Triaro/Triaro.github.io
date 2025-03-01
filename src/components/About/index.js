import { useEffect, useState } from 'react';
import './styles.css';
import { BoltLoader } from "react-awesome-loaders";

const About = () => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);
    return <div className="about" id="about">
        <div className="header">
            <div className='heading white title'>
                <h2>Software Engineer @Wells Fargo</h2>
            </div>
            {loader
                ? <div className='loader'>
                    <BoltLoader
                        className={"loaderbolt"}
                        boltColor={"#6366F1"}
                        backgroundBlurColor={"#E0E7FF"}
                    />
                 </div>
                : <img src={require('../../resources/images/img.jpg')} className="my-img"/>}
        </div>
        <div className="content">
            <div className="contentBx w100">
                <h1>Education</h1>
                <div className="education-container">
                    <div className="education">
                        <div className="title">
                            <p>National Institute of Technology, Uttarakhand</p>
                            <p>2022</p>
                        </div>
                        <p>Bachelor of Technology in Electronics and Communication Engineering</p>
                    </div>
                    <div className="education">
                        <div className="title">
                            <p>Kendriya Vidyalaya Ranikhet </p>
                            <p>2017</p>
                        </div>
                        <p>CBSE XII - 88%</p>
                    </div>
                    <div className="education">
                        <div className="title">
                            <p>Kendriya Vidyalaya Ranikhet </p>
                            <p>2015</p>
                        </div>
                        <p>CBSE X- 10 CGPA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default About;