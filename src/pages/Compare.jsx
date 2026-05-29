import { useState } from "react"
import Sidebar from "./Sidebar"
import axios from "axios"
import { Landmark, Award, Wallet, Save } from "lucide-react"

function Compare() {
  const [open, setOpen] = useState(false)
  const usuario = JSON.parse(localStorage.getItem("usuario"))
  const [monto, setMonto] = useState("")
  const [plazo, setPlazo] = useState("")
  const [guardando, setGuardando] = useState(false)

  const bancos = [
    { banco: "BAC", tasa: usuario?.bac },
    { banco: "BI", tasa: usuario?.bi },
    { banco: "Banrural", tasa: usuario?.banrural },
    { banco: "Promerica", tasa: usuario?.promerica },
    { banco: "Bam", tasa: usuario?.bam },
    { banco: "Bantrab", tasa: usuario?.bantrab },
    { banco: "Micoope", tasa: usuario?.micoope },
    { banco: "Banco Antigua", tasa: usuario?.antigua },
    { banco: "Interbanco", tasa: usuario?.interbanco },
    { banco: "GyT Continental", tasa: usuario?.gyt },
    { banco: "CHN", tasa: usuario?.chn },
  ]

  const resultados = bancos.map((item) => {
    if (!monto || !plazo) return { ...item, cuota: 0, total: 0 }
    const tasaMensual = item.tasa / 100 / 12
    const cuota =
      (monto * (tasaMensual * Math.pow(1 + tasaMensual, plazo))) /
      (Math.pow(1 + tasaMensual, plazo) - 1)
    const total = cuota * plazo
    return { ...item, cuota: cuota.toFixed(2), total: total.toFixed(2) }
  })

  const mejor = resultados.reduce((a, b) =>
    parseFloat(a.total || 999999999) < parseFloat(b.total || 999999999) ? a : b
  )

  const guardarSimulacion = async () => {
    if (!monto || !plazo) return alert("Completa monto y plazo")
    try {
      setGuardando(true)
      await axios.post("https://finnova-backend-io2w.onrender.com/guardar-simulacion", {
        usuario_id: usuario.id,
        banco: mejor.banco,
        monto,
        plazo,
        cuota: mejor.cuota,
        total: mejor.total,
      })
      alert("Simulación guardada")
    } catch {
      alert("Error guardando")
    } finally {
      setGuardando(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Sidebar open={open} setOpen={setOpen} />

      <div className={`pt-[90px] md:pt-[120px] p-4 md:p-10 transition-all duration-300 ${open ? "md:ml-[300px]" : "ml-0"}`}>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <h1 className="text-3xl md:text-6xl font-black">Comparador Inteligente</h1>
            <p className="text-gray-500 text-lg md:text-2xl mt-2 md:mt-4">Análisis financiero personalizado.</p>
          </div>
          <div className="bg-yellow-500 text-black px-6 py-4 md:px-8 md:py-5 rounded-3xl self-start sm:self-auto">
            <p className="font-bold text-sm md:text-lg">Mejor Banco</p>
            <h1 className="text-2xl md:text-4xl font-black">{mejor?.banco || "..."}</h1>
          </div>
        </div>

        {/* Formulario + Resultado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-10">
          <div className="bg-[#111111] border border-[#222] rounded-[30px] md:rounded-[40px] p-6 md:p-10">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <Wallet className="text-yellow-500 shrink-0" size={28} />
              <h1 className="text-2xl md:text-4xl font-black">Datos</h1>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-gray-500 text-sm md:text-lg mb-3 md:mb-4">Monto</p>
                <input
                  type="number"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  placeholder="Ejemplo: 50000"
                  className="w-full bg-black border border-[#222] rounded-2xl p-4 md:p-5 text-xl md:text-2xl outline-none"
                />
              </div>
              <div>
                <p className="text-gray-500 text-sm md:text-lg mb-3 md:mb-4">Plazo en meses</p>
                <input
                  type="number"
                  value={plazo}
                  onChange={(e) => setPlazo(e.target.value)}
                  placeholder="Ejemplo: 48"
                  className="w-full bg-black border border-[#222] rounded-2xl p-4 md:p-5 text-xl md:text-2xl outline-none"
                />
              </div>
              <button
                onClick={guardarSimulacion}
                disabled={guardando}
                className="w-full bg-yellow-500 hover:bg-yellow-400 transition text-black text-xl md:text-2xl font-black py-4 md:py-5 rounded-3xl flex items-center justify-center gap-3"
              >
                <Save size={20} />
                {guardando ? "Guardando..." : "Guardar Simulación"}
              </button>
            </div>
          </div>

          <div className="bg-[#111111] border border-[#222] rounded-[30px] md:rounded-[40px] p-6 md:p-10">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <Award className="text-yellow-500 shrink-0" size={28} />
              <h1 className="text-2xl md:text-4xl font-black">Resultado</h1>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-black rounded-[20px] md:rounded-[30px] p-6 md:p-8 border border-[#222]">
                <p className="text-gray-500 text-sm md:text-lg mb-3 md:mb-4">Banco recomendado</p>
                <h1 className="text-3xl md:text-5xl font-black text-yellow-500 break-words">
                  {mejor?.banco || "..."}
                </h1>
              </div>
              <div className="bg-black rounded-[20px] md:rounded-[30px] p-6 md:p-8 border border-[#222]">
                <p className="text-gray-500 text-sm md:text-lg mb-3 md:mb-4">Mejor tasa</p>
                <h1 className="text-3xl md:text-5xl font-black text-green-400">
                  {mejor?.tasa || "..."}%
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla comparativa */}
        <div className="bg-[#111111] border border-[#222] rounded-[30px] md:rounded-[40px] p-6 md:p-10">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <Landmark className="text-yellow-500 shrink-0" size={28} />
            <h1 className="text-2xl md:text-4xl font-black">Comparativa Bancaria</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="border-b border-[#222] text-left">
                  <th className="pb-4 md:pb-6 text-base md:text-2xl">Banco</th>
                  <th className="pb-4 md:pb-6 text-base md:text-2xl">Tasa</th>
                  <th className="pb-4 md:pb-6 text-base md:text-2xl">Cuota</th>
                  <th className="pb-4 md:pb-6 text-base md:text-2xl">Total</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#1a1a1a] ${item.banco === mejor?.banco ? "bg-yellow-500/10" : ""}`}
                  >
                    <td className="py-3 md:py-6 text-base md:text-2xl font-bold">{item.banco}</td>
                    <td className="py-3 md:py-6 text-base md:text-2xl text-yellow-500 font-black">{item.tasa}%</td>
                    <td className="py-3 md:py-6 text-base md:text-2xl text-green-400 font-black">Q{item.cuota}</td>
                    <td className="py-3 md:py-6 text-base md:text-2xl text-red-400 font-black">Q{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compare