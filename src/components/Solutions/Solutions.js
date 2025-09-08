import { Route, Routes } from "react-router";
import "./Solutions.scss";
import ApplicationsCard from "../ApplicationsCard/ApplicationsCard";
import IndustriesCard from "../IndustriesCard/IndustriesCard";

const Solutions = () => (
  <div className="solutions">
    <Routes>
      <Route path="/" element={<ApplicationsCard />} />
      <Route path="/industries" element={<IndustriesCard />} />
    </Routes>
  </div>
);

export default Solutions;
