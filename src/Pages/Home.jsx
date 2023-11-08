import BgHome from '../component/BgHome';
import Footer from '../component/Footer';
import ImageGame from '../component/ImageGame';
import Navbar from '../component/Navbar';

const Home = () => {
    return (
        <div>
         <Navbar /> 
         <BgHome/>
         <ImageGame />  
         <Footer/>
        </div>
    );
};

export default Home;