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

import {

  Link,
  useNavigate

} from "react-router-dom"

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

      <div className="fixed top-0 left-0 right-0 h-[90px] bg-[#0b0b0b] border-b border-[#1f1f1f] flex items-center justify-between px-8 z-50">

        <div className="flex items-center gap-6">

          <button
            onClick={() => setOpen(!open)}
            className="bg-[#151515] hover:bg-[#1f1f1f] transition p-4 rounded-2xl"
          >

            <Menu size={28} />

          </button>











          <h1 className="text-4xl font-black text-white">

            Fin<span className="text-yellow-500">Nova</span>

          </h1>

        </div>











        <div className="flex items-center gap-4">

          <div className="bg-green-500 w-4 h-4 rounded-full animate-pulse" />







          <p className="text-gray-400 text-lg">

            Sistema Activo

          </p>

        </div>

      </div>









      <div className={`fixed top-[90px] left-0 h-[calc(100vh-90px)] bg-[#0a0a0a] border-r border-[#1f1f1f] transition-all duration-300 z-40

      ${open ? "w-[300px]" : "w-0 overflow-hidden"}`}>









        <div className="p-6 flex flex-col justify-between h-full">

          <div className="space-y-4">

            <Link
              to="/dashboard"
              onClick={cerrarSidebar}
              className="flex items-center gap-5 p-5 rounded-2xl hover:bg-[#151515] transition text-xl"
            >

              <LayoutDashboard
                className="text-yellow-500"
              />

              Dashboard

            </Link>











            <Link
              to="/simulator"
              onClick={cerrarSidebar}
              className="flex items-center gap-5 p-5 rounded-2xl hover:bg-[#151515] transition text-xl"
            >

              <Calculator
                className="text-yellow-500"
              />

              Simulador

            </Link>











            <Link
              to="/compare"
              onClick={cerrarSidebar}
              className="flex items-center gap-5 p-5 rounded-2xl hover:bg-[#151515] transition text-xl"
            >

              <BarChart3
                className="text-yellow-500"
              />

              Comparador

            </Link>











            <Link
              to="/history"
              onClick={cerrarSidebar}
              className="flex items-center gap-5 p-5 rounded-2xl hover:bg-[#151515] transition text-xl"
            >

              <History
                className="text-yellow-500"
              />

              Historial

            </Link>











            <Link
              to="/cardscore"
              onClick={cerrarSidebar}
              className="flex items-center gap-5 p-5 rounded-2xl hover:bg-[#151515] transition text-xl"
            >

              <CreditCard
                className="text-yellow-500"
              />

              Tarjetas

            </Link>











            <Link
              to="/download"
              onClick={cerrarSidebar}
              className="flex items-center gap-5 p-5 rounded-2xl hover:bg-[#151515] transition text-xl"
            >

              <Download
                className="text-yellow-500"
              />

              Descargar

            </Link>

          </div>









          <button
            onClick={logout}
            className="flex items-center gap-5 p-5 rounded-2xl hover:bg-red-500/10 text-red-400 transition text-xl"
          >

            <LogOut />

            Cerrar Sesión

          </button>

        </div>

      </div>

    </>

  )

}

export default Sidebar