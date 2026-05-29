import {

  BrowserRouter,
  Routes,
  Route,
  Navigate

} from "react-router-dom"

import Login from "./pages/Login"

import Dashboard from "./pages/Dashboard"

import Compare from "./pages/Compare"

import History from "./pages/History"

import Download from "./pages/Download"

import Simulator from "./pages/Simulator"

import Onboarding from "./pages/Onboarding"

import CardScore from "./pages/CardScore"

function App() {

  const usuario =
    JSON.parse(localStorage.getItem("usuario"))

  return (

    <BrowserRouter>

      <Routes>

        <Route
  path="/cardscore"
  element={

    usuario

    ?

    <CardScore />

    :

    <Navigate to="/" />

  }
/>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/onboarding"
          element={

            usuario

            ?

            <Onboarding />

            :

            <Navigate to="/" />

          }
        />

        <Route
          path="/dashboard"
          element={

            usuario

            ?

            <Dashboard />

            :

            <Navigate to="/" />

          }
        />

        <Route
          path="/compare"
          element={

            usuario

            ?

            <Compare />

            :

            <Navigate to="/" />

          }
        />

        <Route
          path="/history"
          element={

            usuario

            ?

            <History />

            :

            <Navigate to="/" />

          }
        />

        <Route
          path="/download"
          element={

            usuario

            ?

            <Download />

            :

            <Navigate to="/" />

          }
        />

        <Route
          path="/simulator"
          element={

            usuario

            ?

            <Simulator />

            :

            <Navigate to="/" />

          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App