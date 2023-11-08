import AllPost from '../component/AllPost';
import BgBlog from '../component/BgBlog';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Blog = () => {
    return (
        <div>
             <Navbar/> 
             <BgBlog/>
             <AllPost />
             <Footer/> 
        </div>
    );
};

export default Blog;