import { Routes, Route } from "react-router-dom";
import Miscellaneous from "./Menu-Components/Miscellaneous";
import HireMe from "./Menu-Components/Hire-Me";
import Message from "./Menu-Components/Message";
import Index from "./Index";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Miscellaneous" element={<Miscellaneous />} />
      <Route path="/Hire-Me" element={<HireMe />} />
      <Route path="/Message" element={<Message />} />
    </Routes>
  );
}

export default App;
