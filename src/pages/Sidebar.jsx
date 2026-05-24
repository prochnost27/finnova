import { useNavigate } from "react-router-dom"
import {
  FaChartPie,
  FaHistory,
  FaBalanceScale,
  FaDownload,
  FaCalculator
} from "react-icons/fa"

function Sidebar() {

  const navigate = useNavigate()

  return (

    <div className="w-72 bg-gradient-to-b from-black via-gray-900 to-cyan-950 text-white min-h-screen p-8 shadow-2xl">

      <h1 className="text-5xl font-extrabold mb-14 tracking-wide text-cyan-400">
        FinNova
      </h1>

      <div className="flex flex-col gap-6 text-lg">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-4 bg-white/5 hover:bg-cyan-500 transition p-4 rounded-2xl"
        >
          <FaChartPie />
          Dashboard
        </button>

        <button
          onClick={() => navigate("/simulator")}
          className="flex items-center gap-4 bg-white/5 hover:bg-cyan-500 transition p-4 rounded-2xl"
        >
          <FaCalculator />
          Simulador
        </button>

        <button
          onClick={() => navigate("/history")}
          className="flex items-center gap-4 bg-white/5 hover:bg-cyan-500 transition p-4 rounded-2xl"
        >
          <FaHistory />
          Historial
        </button>

        <button
          onClick={() => navigate("/compare")}
          className="flex items-center gap-4 bg-white/5 hover:bg-cyan-500 transition p-4 rounded-2xl"
        >
          <FaBalanceScale />
          Comparador
        </button>

        <button
          onClick={() => navigate("/download")}
          className="flex items-center gap-4 bg-white/5 hover:bg-cyan-500 transition p-4 rounded-2xl"
        >
          <FaDownload />
          Descargar App
        </button>

      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-20 w-full bg-red-500 hover:bg-red-600 transition p-4 rounded-2xl font-bold"
      >
        Cerrar Sesión
      </button>

    </div>

  )

}

export default Sidebar