import Sidebar from "./Sidebar"
import { CreditCard, ShieldCheck, Sparkles, BadgeCheck } from "lucide-react"
import { useState } from "react"

function CardScore() {
  const [open, setOpen] = useState(false)
  const usuario = JSON.parse(localStorage.getItem("usuario"))
  const score = usuario?.score || 0

  let perfil = "E"
  let tarjeta = {}

  if (score >= 900) {
    perfil = "AAA"
    tarjeta = { banco: "Promerica", nombre: "Black Infinite", color: "from-black to-gray-800", beneficio: "Millas VIP, acceso lounges y cashback premium.", aprobacion: "98%" }
  } else if (score >= 750) {
    perfil = "AA"
    tarjeta = { banco: "BAC", nombre: "American Express Blue", color: "from-blue-700 to-cyan-500", beneficio: "Cashback, promociones y acumulación de puntos.", aprobacion: "91%" }
  } else if (score >= 600) {
    perfil = "A"
    tarjeta = { banco: "BI", nombre: "Clásica Oro", color: "from-yellow-600 to-yellow-400", beneficio: "Compras en cuotas y tasa preferencial.", aprobacion: "83%" }
  } else if (score >= 400) {
    perfil = "B"
    tarjeta = { banco: "Banrural", nombre: "Tarjeta Fácil", color: "from-green-700 to-green-400", beneficio: "Aprobación rápida y requisitos bajos.", aprobacion: "70%" }
  } else {
    perfil = "E"
    tarjeta = { banco: "Micoope", nombre: "Inicial", color: "from-gray-700 to-gray-500", beneficio: "Construcción de historial crediticio.", aprobacion: "52%" }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Sidebar open={open} setOpen={setOpen} />

      <div className={`pt-[90px] md:pt-[120px] p-4 md:p-10 transition-all duration-300 ${open ? "md:ml-[300px]" : "ml-0"}`}>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-14">
          <div>
            <h1 className="text-3xl md:text-6xl font-black">CardScore AI</h1>
            <p className="text-gray-500 text-lg md:text-2xl mt-2 md:mt-4">Evaluación financiera inteligente.</p>
          </div>
          <div className="bg-yellow-500 text-black px-6 py-4 md:px-10 md:py-6 rounded-3xl self-start sm:self-auto">
            <p className="font-bold text-sm md:text-lg">Perfil Financiero</p>
            <h1 className="text-3xl md:text-5xl font-black">{perfil}</h1>
          </div>
        </div>

        {/* Stats — 1 col móvil, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-10">
          <div className="bg-[#111111] border border-[#222] rounded-[25px] md:rounded-[35px] p-6 md:p-10">
            <ShieldCheck size={32} className="text-yellow-500 mb-4 md:mb-6" />
            <p className="text-gray-500 text-base md:text-xl mb-3 md:mb-4">Score Crediticio</p>
            <h1 className="text-5xl md:text-7xl font-black text-yellow-500">{score}</h1>
          </div>

          <div className="bg-[#111111] border border-[#222] rounded-[25px] md:rounded-[35px] p-6 md:p-10">
            <BadgeCheck size={32} className="text-green-400 mb-4 md:mb-6" />
            <p className="text-gray-500 text-base md:text-xl mb-3 md:mb-4">Probabilidad de aprobación</p>
            <h1 className="text-5xl md:text-7xl font-black text-green-400">{tarjeta.aprobacion}</h1>
          </div>

          <div className="bg-[#111111] border border-[#222] rounded-[25px] md:rounded-[35px] p-6 md:p-10">
            <Sparkles size={32} className="text-cyan-400 mb-4 md:mb-6" />
            <p className="text-gray-500 text-base md:text-xl mb-3 md:mb-4">Banco recomendado</p>
            <h1 className="text-3xl md:text-5xl font-black text-cyan-400 break-words">{tarjeta.banco}</h1>
          </div>
        </div>

        {/* Tarjeta recomendada */}
        <div className={`bg-gradient-to-br ${tarjeta.color} rounded-[30px] md:rounded-[45px] p-8 md:p-14 shadow-2xl relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <CreditCard size={32} />
              <h1 className="text-3xl md:text-5xl font-black">Tarjeta Recomendada</h1>
            </div>

            <div className="max-w-full md:max-w-[700px]">
              <p className="text-lg md:text-2xl opacity-80 mb-2 md:mb-4">Banco</p>
              <h1 className="text-4xl md:text-7xl font-black mb-6 md:mb-10 break-words">{tarjeta.banco}</h1>

              <p className="text-lg md:text-2xl opacity-80 mb-2 md:mb-4">Producto</p>
              <h2 className="text-2xl md:text-5xl font-black mb-6 md:mb-10">{tarjeta.nombre}</h2>

              <p className="text-lg md:text-2xl opacity-80 mb-2 md:mb-4">Beneficios principales</p>
              <p className="text-xl md:text-3xl leading-relaxed">{tarjeta.beneficio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardScore