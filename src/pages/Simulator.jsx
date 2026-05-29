import { useState } from "react"

import Sidebar from "./Sidebar"

function Simulator() {

  const [open, setOpen] = useState(false)

  const usuario =
    JSON.parse(localStorage.getItem("usuario"))

  const [monto, setMonto] = useState("")

  const [plazo, setPlazo] = useState("")

  const [resultado, setResultado] = useState(null)







  const simular = () => {

    if (!monto || !plazo) {

      return alert(
        "Completa los campos"
      )

    }







    const bancos = [

  {
    banco: "BAC",
    tasa: usuario?.bac
  },

  {
    banco: "BI",
    tasa: usuario?.bi
  },

  {
    banco: "Banrural",
    tasa: usuario?.banrural
  },

  {
    banco: "Promerica",
    tasa: usuario?.promerica
  },

  {
    banco: "Bam",
    tasa: usuario?.bam
  },

  {
    banco: "Bantrab",
    tasa: usuario?.bantrab
  },

  {
    banco: "Micoope",
    tasa: usuario?.micoope
  },

  {
    banco: "Banco Antigua",
    tasa: usuario?.antigua
  },

  {
    banco: "Interbanco",
    tasa: usuario?.interbanco
  },

  {
    banco: "GyT Continental",
    tasa: usuario?.gyt
  },

  {
    banco: "CHN",
    tasa: usuario?.chn
  }

]






    const resultados = bancos.map((item) => {

      const tasaMensual =
        item.tasa / 100 / 12







      const cuota =

        (

          monto *

          (

            tasaMensual *

            Math.pow(
              1 + tasaMensual,
              plazo
            )

          )

        ) /

        (

          Math.pow(
            1 + tasaMensual,
            plazo
          ) - 1

        )







      return {

        ...item,

        cuota:
          cuota.toFixed(2)

      }

    })







    setResultado(resultados)

  }







  return (

    <div className="min-h-screen bg-[#050505] text-white">

      <Sidebar
        open={open}
        setOpen={setOpen}
      />







      <div className={`pt-[120px] p-10 transition-all duration-300

      ${open ? "ml-[300px]" : "ml-0"}`}>









        <h1 className="text-6xl font-black mb-10">

          Simulador Financiero

        </h1>









        <div className="bg-[#111111] border border-[#222] rounded-[40px] p-10 mb-10">

          <div className="grid grid-cols-2 gap-8">

            <input
              type="number"
              placeholder="Monto"
              value={monto}
              onChange={(e) =>
                setMonto(e.target.value)
              }
              className="bg-black border border-[#222] rounded-2xl p-5 text-2xl outline-none"
            />







            <input
              type="number"
              placeholder="Meses"
              value={plazo}
              onChange={(e) =>
                setPlazo(e.target.value)
              }
              className="bg-black border border-[#222] rounded-2xl p-5 text-2xl outline-none"
            />

          </div>











          <button
            onClick={simular}
            className="w-full mt-8 bg-yellow-500 text-black text-2xl font-black py-5 rounded-3xl"
          >

            Simular

          </button>

        </div>









        {

          resultado && (

            <div className="grid grid-cols-2 gap-8">

              {

                resultado.map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111111] border border-[#222] rounded-[35px] p-8"
                  >

                    <h1 className="text-4xl font-black mb-6">

                      {item.banco}

                    </h1>







                    <p className="text-yellow-500 text-3xl font-black mb-4">

                      {item.tasa}%

                    </p>







                    <p className="text-green-400 text-3xl font-black">

                      Q{item.cuota}/mes

                    </p>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

    </div>

  )

}

export default Simulator