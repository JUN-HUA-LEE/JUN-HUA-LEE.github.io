import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Exp from "@/components/Exp";
import Edu from "@/components/Edu.tsx";

const Home = () => {
  return (
    <>
        <div id="home">
          <Navbar />
        </div>
        <Hero />
        <Exp />
        <Edu />
        <Footer />
    </>
  )
}

export default Home