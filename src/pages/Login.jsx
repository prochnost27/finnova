import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ShieldCheck, Mail, Lock, User } from "lucide-react"
import Loader from "./Loader"

function Login() {
  const navigate = useNavigate()
  const [registro, setRegistro] = useState(false)
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const validarCorreo = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const registrar = async () => {
    if (!nombre) return alert("Ingresa tu nombre")
    if (!validarCorreo(correo)) return alert("Correo inválido")
    if (password.length < 4) return alert("Contraseña muy corta")
    try {
      setLoading(true)
      await axios.post("https://finnova-backend-io2w.onrender.com/registro", { nombre, correo, password })
      setLoading(false)
      alert("Cuenta creada correctamente")
      setRegistro(false)
    } catch (error) {
      setLoading(false)
      alert(error.response?.data?.mensaje || "Error servidor")
    }
  }

  const login = async () => {
    if (!validarCorreo(correo)) return alert("Correo inválido")
    if (!password) return alert("Ingresa contraseña")
    try {
      setLoading(true)
      const response = await axios.post("https://finnova-backend-io2w.onrender.com/login", { correo, password })
      localStorage.setItem("usuario", JSON.stringify(response.data))
      setLoading(false)
      window.location.href = response.data.score > 0 ? "/dashboard" : "/onboarding"
    } catch (error) {
      setLoading(false)
      alert(error.response?.data?.mensaje || "Credenciales incorrectas")
    }
  }

  if (loading) return <Loader />

  return (
    <div className="min-h-screen bg-[#050505] flex overflow-hidden">
      {/* Panel izquierdo — solo en pantallas grandes */}
      <div className="w-1/2 relative hidden lg:flex items-center justify-center">
        <div className="absolute w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 px-20">
          <h1 className="text-7xl xl:text-8xl font-black text-white leading-tight">
            Fin<span className="text-yellow-500">Nova</span>
          </h1>
          <p className="text-gray-400 text-xl xl:text-2xl mt-8 leading-relaxed">
            Plataforma financiera inteligente diseñada para análisis crediticio,
            simulaciones bancarias y evaluación financiera avanzada.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="bg-[#111111] border border-[#222] p-6 rounded-3xl">
              <ShieldCheck size={36} className="text-yellow-500 mb-4" />
              <h2 className="text-white text-xl font-bold">Seguridad</h2>
              <p className="text-gray-500 mt-3 text-sm">Protección avanzada y autenticación segura.</p>
            </div>
            <div className="bg-[#111111] border border-[#222] p-6 rounded-3xl">
              <ShieldCheck size={36} className="text-yellow-500 mb-4" />
              <h2 className="text-white text-xl font-bold">Inteligencia</h2>
              <p className="text-gray-500 mt-3 text-sm">Análisis financiero basado en perfiles.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Panel derecho — formulario */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-10">
        {/* Logo visible solo en móvil */}
        <div className="w-full max-w-[550px]">
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-black text-white">
              Fin<span className="text-yellow-500">Nova</span>
            </h1>
          </div>

          <div className="bg-[#111111] border border-[#222] rounded-[30px] md:rounded-[40px] p-8 md:p-14 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-3 md:mb-4">
              {registro ? "Crear Cuenta" : "Bienvenido"}
            </h1>
            <p className="text-gray-500 text-lg md:text-xl mb-8 md:mb-12">
              Accede a tu plataforma financiera.
            </p>

            {registro && (
              <div className="flex items-center bg-black border border-[#222] rounded-2xl px-5 mb-6">
                <User size={20} className="text-yellow-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-transparent p-4 md:p-5 outline-none text-white"
                />
              </div>
            )}

            <div className="flex items-center bg-black border border-[#222] rounded-2xl px-5 mb-6">
              <Mail size={20} className="text-yellow-500 shrink-0" />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="w-full bg-transparent p-4 md:p-5 outline-none text-white"
              />
            </div>

            <div className="flex items-center bg-black border border-[#222] rounded-2xl px-5 mb-8 md:mb-10">
              <Lock size={20} className="text-yellow-500 shrink-0" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent p-4 md:p-5 outline-none text-white"
              />
            </div>

            <button
              onClick={registro ? registrar : login}
              className="w-full bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black text-xl md:text-2xl font-black p-4 md:p-5 rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.15)]"
            >
              {registro ? "Crear Cuenta" : "Iniciar Sesión"}
            </button>

            <button
              onClick={() => setRegistro(!registro)}
              className="w-full mt-6 md:mt-8 text-gray-400 hover:text-white transition text-base md:text-lg"
            >
              {registro ? "Ya tengo cuenta" : "Crear una cuenta"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login