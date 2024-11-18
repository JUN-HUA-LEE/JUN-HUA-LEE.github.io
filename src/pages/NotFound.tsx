import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen text-4xl bg-black text-white">
        404 - Page Not Found
      </div>
      <Footer />
    </>
    
  );
};

export default NotFound;
