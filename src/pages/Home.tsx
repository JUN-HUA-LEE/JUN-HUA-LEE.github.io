import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-4xl">
      <div className="flex flex-col justify-center items-center h-screen space-y-4 bg-blue-100">
        <div>Home</div>
        <div className="space-x-4">
          <Link to="/about" className="text-blue-500 hover:underline">
            About
          </Link>
          <Link to="/projects" className="text-blue-500 hover:underline">
            Projects
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-blue-200">
        <div>Section 1</div>
      </div>
      <div className="flex justify-center items-center h-screen bg-blue-300">
        <div>Section 2</div>
      </div>
      <div className="flex justify-center items-center h-screen bg-blue-400">
        <div>Section 3</div>
      </div>
    </div>
  );
};

export default Home;
