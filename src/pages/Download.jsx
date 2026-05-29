import { useState } from "react"
import Sidebar from "./Sidebar"
import { Download as DownloadIcon, Smartphone, QrCode as QrIcon, ShieldCheck, CheckCircle2 } from "lucide-react"

function Download() {
  const [open, setOpen] = useState(false)

  const descargarAPK = () => {
    window.open("https://finnova-haln-k7uj5prat-fin-nova.vercel.app/", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Sidebar open={open} setOpen={setOpen} />

      <div className={`pt-[90px] md:pt-[120px] p-4 md:p-10 transition-all duration-300 ${open ? "md:ml-[300px]" : "ml-0"}`}>

        <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-14">
          <DownloadIcon size={36} className="text-yellow-500 shrink-0" />
          <div>
            <h1 className="text-3xl md:text-6xl font-black">Descargar FinNova</h1>
            <p className="text-gray-500 text-base md:text-2xl mt-1 md:mt-3">
              Instala la plataforma financiera inteligente en cualquier dispositivo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* APK */}
          <div className="bg-[#111111] border border-[#222] rounded-[30px] md:rounded-[40px] p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 md:mb-10">
                <Smartphone className="text-yellow-500 shrink-0" size={30} />
                <h1 className="text-2xl md:text-4xl font-black">Acceso Directo Movil</h1>
              </div>

              <p className="text-gray-400 text-base md:text-2xl leading-relaxed mb-6 md:mb-10">
                Descarga FinNova para acceder al simulador financiero,
                comparador bancario y análisis crediticio.
              </p>

              <div className="space-y-3 md:space-y-5 mb-8 md:mb-12">
                {["Simulador inteligente", "Score financiero dinámico", "Comparación entre bancos", "Descarga segura"].map((item) => (
                  <div key={item} className="flex items-center gap-3 md:gap-4 text-base md:text-xl">
                    <CheckCircle2 className="text-green-400 shrink-0" size={18} />
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={descargarAPK}
                className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black text-lg md:text-2xl font-black px-8 py-4 md:px-10 md:py-5 rounded-3xl shadow-[0_0_40px_rgba(255,215,0,0.15)]"
              >
                Descargar FinNova
              </button>
            </div>
          </div>

          {/* QR */}
          <div className="bg-[#111111] border border-[#222] rounded-[30px] md:rounded-[40px] p-6 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <QrIcon size={36} className="text-yellow-500 mx-auto mb-6 md:mb-8" />
              <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">Código QR</h1>
              <p className="text-gray-400 text-base md:text-2xl leading-relaxed mb-6 md:mb-10">
                Escanea este código desde tu teléfono para acceder a FinNova.
              </p>
              <div className="bg-white p-4 md:p-6 rounded-[25px] md:rounded-[35px] inline-block mb-6 md:mb-10">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://finnova-haln-k7uj5prat-fin-nova.vercel.app/"
                  alt="QR FinNova"
                  className="rounded-xl w-[150px] h-[150px] md:w-[220px] md:h-[220px]"
                />
              </div>
              <div className="flex items-center justify-center gap-3 text-green-400 text-base md:text-xl">
                <ShieldCheck size={18} />
                Acceso seguro y rápido
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download