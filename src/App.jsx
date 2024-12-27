import "./App.css";
import Banner from "./components/homeComponents/Banner";
import CourseCard from "./components/homeComponents/CourseCard";
import Navbar from "./components/homeComponents/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <CourseCard/>
    </>
  );
}

export default App;
