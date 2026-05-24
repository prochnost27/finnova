import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Simulator from "./pages/Simulator"
import History from "./pages/History"
import Compare from "./pages/Compare"
import Download from "./pages/Download"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/simulator" element={<Simulator />} />

        <Route path="/history" element={<History />} />

        <Route path="/compare" element={<Compare />} />

        <Route path="/download" element={<Download />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App