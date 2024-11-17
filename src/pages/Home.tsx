import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-4xl space-y-4">
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
  )
}

export default Home;
