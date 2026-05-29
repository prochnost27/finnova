import { useState } from "react"
import Sidebar from "./Sidebar"

function Simulator() {
  const [open, setOpen] = useState(false)
  const usuario = JSON.parse(localStorage.getItem("usuario"))
  const [monto, setMonto] = useState("")
  const [plazo, setPlazo] = useState("")
  const [resultado, setResultado] = useState(null)

  const simular = () => {
    if (!monto || !plazo) return alert("Completa los campos")

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
      const tasaMensual = item.tasa / 100 / 12
      const cuota =
        (monto * (tasaMensual * Math.pow(1 + tasaMensual, plazo))) /
        (Math.pow(1 + tasaMensual, plazo) - 1)
      return { ...item, cuota: cuota.toFixed(2) }
    })

    setResultado(resultados)
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Sidebar open={open} setOpen={setOpen} />

      <div className={`pt-[90px] md:pt-[120px] p-4 md:p-10 transition-all duration-300 ${open ? "md:ml-[300px]" : "ml-0"}`}>

        <h1 className="text-3xl md:text-6xl font-black mb-8 md:mb-10">
          Simulador Financiero
        </h1>

        <div className="bg-[#111111] border border-[#222] rounded-[30px] md:rounded-[40px] p-6 md:p-10 mb-8 md:mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <input
              type="number"
              placeholder="Monto"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="bg-black border border-[#222] rounded-2xl p-4 md:p-5 text-xl md:text-2xl outline-none w-full"
            />
            <input
              type="number"
              placeholder="Meses"
              value={plazo}
              onChange={(e) => setPlazo(e.target.value)}
              className="bg-black border border-[#222] rounded-2xl p-4 md:p-5 text-xl md:text-2xl outline-none w-full"
            />
          </div>

          <button
            onClick={simular}
            className="w-full mt-6 md:mt-8 bg-yellow-500 text-black text-xl md:text-2xl font-black py-4 md:py-5 rounded-3xl"
          >
            Simular
          </button>
        </div>

        {resultado && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
            {resultado.map((item, index) => (
              <div key={index} className="bg-[#111111] border border-[#222] rounded-[25px] md:rounded-[35px] p-6 md:p-8">
                <h1 className="text-2xl md:text-4xl font-black mb-4 md:mb-6">{item.banco}</h1>
                <p className="text-yellow-500 text-xl md:text-3xl font-black mb-3 md:mb-4">{item.tasa}%</p>
                <p className="text-green-400 text-xl md:text-3xl font-black">Q{item.cuota}/mes</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Simulator