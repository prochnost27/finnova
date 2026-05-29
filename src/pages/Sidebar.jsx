import {
  LayoutDashboard,
  Calculator,
  BarChart3,
  History,
  Download,
  CreditCard,
  LogOut,
  Menu
} from "lucide-react"

import { Link, useNavigate } from "react-router-dom"

function Sidebar({ open, setOpen }) {
  const navigate = useNavigate()

  const cerrarSidebar = () => {
    setOpen(false)
  }

  const logout = () => {
    localStorage.removeItem("usuario")
    navigate("/")
  }

  return (
    <>
      {/* Topbar */}
      <div className="fixed top-0 left-0 right-0 h-[70px] md:h-[90px] bg-[#0b0b0b] border-b border-[#1f1f1f] flex items-center justify-between px-4 md:px-8 z-50">
        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#151515] hover:bg-[#1f1f1f] transition p-3 md:p-4 rounded-2xl"
          >
            <Menu size={22} />
          </button>
          <h1 className="text-2xl md:text-4xl font-black text-white">
            Fin<span className="text-yellow-500">Nova</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-green-500 w-3 h-3 md:w-4 md:h-4 rounded-full animate-pulse" />
          <p className="text-gray-400 text-sm md:text-lg hidden sm:block">
            Sistema Activo
          </p>
        </div>
      </div>

      {/* Overlay en móvil */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <div className={`fixed top-[70px] md:top-[90px] left-0 h-[calc(100vh-70px)] md:h-[calc(100vh-90px)] bg-[#0a0a0a] border-r border-[#1f1f1f] transition-all duration-300 z-40
        ${open ? "w-[260px] md:w-[300px]" : "w-0 overflow-hidden"}`}>

        <div className="p-5 md:p-6 flex flex-col justify-between h-full">
          <div className="space-y-2 md:space-y-4">
            <Link
              to="/dashboard"
              onClick={cerrarSidebar}
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-[#151515] transition text-lg md:text-xl"
            >
              <LayoutDashboard className="text-yellow-500 shrink-0" />
              Dashboard
            </Link>

            <Link
              to="/simulator"
              onClick={cerrarSidebar}
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-[#151515] transition text-lg md:text-xl"
            >
              <Calculator className="text-yellow-500 shrink-0" />
              Simulador
            </Link>

            <Link
              to="/compare"
              onClick={cerrarSidebar}
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-[#151515] transition text-lg md:text-xl"
            >
              <BarChart3 className="text-yellow-500 shrink-0" />
              Comparador
            </Link>

            <Link
              to="/history"
              onClick={cerrarSidebar}
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-[#151515] transition text-lg md:text-xl"
            >
              <History className="text-yellow-500 shrink-0" />
              Historial
            </Link>

            <Link
              to="/cardscore"
              onClick={cerrarSidebar}
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-[#151515] transition text-lg md:text-xl"
            >
              <CreditCard className="text-yellow-500 shrink-0" />
              Tarjetas
            </Link>

            <Link
              to="/download"
              onClick={cerrarSidebar}
              className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-[#151515] transition text-lg md:text-xl"
            >
              <Download className="text-yellow-500 shrink-0" />
              Descargar
            </Link>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl hover:bg-red-500/10 text-red-400 transition text-lg md:text-xl"
          >
            <LogOut className="shrink-0" />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar