import About from "./About/About";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Service from "./Services/Service";
import TimeLocation from "./TimeLocation/TimeLocation";
const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            <About></About>  
            <Service></Service>
            <TimeLocation></TimeLocation>
            <Products></Products>
        </div>
    )
}
export default Home;