import Head from "next/head";
import Header from "../component/Header";
import About from "../component/About";
import Projects from "../component/ Projects";
import Contact from "@/component/Contact";
import App from "../component/App";
import Footer from "@/component/Footer";

import "./style.css"
const Home =()=>{
    return(
        <div>
         <App/>
        <div>
            <Head>
                <title className="text-blue-500">Phorn Sreyphea | Portfoilo</title>
            </Head>

            <Header/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
        </div>
    );
};
export default Home;






