import BgContact from '../component/BgContact';
import ContactForm from '../component/ContactForm';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Contact = () => {
    return (
        <div>
          <Navbar/>
          <BgContact/> 
          <ContactForm />
          <Footer/> 
        </div>
    );
};

export default Contact;