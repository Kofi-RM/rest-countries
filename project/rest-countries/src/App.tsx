
import { Routes, Route } from "react-router-dom";
import './App.css'
import CountryPage from "./CountryPage";
import HomePage from './HomePage';

function App() {
  


 
  return (
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:name" element={<CountryPage />} />
    </Routes>
  )
}

export default App
