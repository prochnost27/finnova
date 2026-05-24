import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-cyan-950 flex items-center justify-center">

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl w-[450px]">

        <h1 className="text-6xl font-extrabold text-cyan-400 text-center mb-10">
          FinNova
        </h1>

        <input
          type="text"
          placeholder="Correo electrónico"
          className="w-full p-4 rounded-2xl bg-black/50 border border-gray-700 text-white mb-5"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-4 rounded-2xl bg-black/50 border border-gray-700 text-white mb-8"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-4 rounded-2xl text-2xl font-bold"
        >
          Ingresar
        </button>

      </div>

    </div>

  )

}

export default Login