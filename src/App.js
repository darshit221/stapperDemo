import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import Home from "./components/Home";
import MultipleSelectChip from "./components/MultipleSelectChip";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
