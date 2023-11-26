import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import JobListingsPage from "./Pages/JobListingsPage/JobListingsPage";
import PostJobsPage from "./Pages/PostJobsPage/PostJobsPage";
import SingleJob from "./Components/SingleJob/SingleJob";
import "./styles/presets.scss";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<JobListingsPage />} />
          <Route path="/PostJob" element={<PostJobsPage />} />
          <Route path="/jobs/:id" element={<SingleJob />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
