import Head from "next/head";
import Header from "../component/Header";
import About from "../component/About";
import Projects from "../component/ Projects";
import Contact from "@/component/Contact";
// import App from "../component/App";
import Footer from "@/component/Footer";
import Skill from "../component/Skill";

import "./style.css"

const Home =()=>{
    return(
        // <div>
        <div>
            <Head>
                <title className="text-blue-500">Phorn Sreyphea | Portfoilo</title>
            </Head>
            <Header/>
            <About/>
            <Projects/>
            <Skill/>
            <Contact/>
            <Footer/>
        </div>
        // </div>
    );
};
export default Home;






