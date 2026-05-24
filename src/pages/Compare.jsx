import { useState } from "react"
import Sidebar from "./Sidebar"

function Compare() {

  const [monto, setMonto] = useState("")
  const [plazo, setPlazo] = useState("")

  const bancos = [
    {
      nombre: "Banco Industrial",
      interes: 12
    },
    {
      nombre: "Banrural",
      interes: 10
    },
    {
      nombre: "BAC",
      interes: 14
    }
  ]

  const calcularCuota = (interesAnual) => {

    if (!monto || !plazo) return null

    const interesMensual = interesAnual / 100 / 12

    const cuota =
      monto *
      (interesMensual * Math.pow(1 + interesMensual, plazo)) /
      (Math.pow(1 + interesMensual, plazo) - 1)

    return cuota.toFixed(2)

  }

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Comparador de Bancos
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px] mb-8">

          <input
            type="number"
            placeholder="Monto"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) => setMonto(e.target.value)}
          />

          <input
            type="number"
            placeholder="Plazo en meses"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) => setPlazo(e.target.value)}
          />

        </div>

        <div className="grid grid-cols-3 gap-6">

          {bancos.map((banco, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >

              <h2 className="text-2xl font-bold mb-4">
                {banco.nombre}
              </h2>

              <p className="mb-3">
                Interés anual: {banco.interes}%
              </p>

              {monto && plazo && (

                <div>

                  <h3 className="font-bold">
                    Cuota mensual
                  </h3>

                  <p className="text-3xl text-green-600 mt-2">
                    Q{calcularCuota(banco.interes)}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </div>

  )

}

export default Compare