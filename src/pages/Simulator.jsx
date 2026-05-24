import { useState } from "react"
import axios from "axios"
import Sidebar from "./Sidebar"

function Simulator() {

  const [monto, setMonto] = useState("")
  const [interes, setInteres] = useState("")
  const [plazo, setPlazo] = useState("")
  const [cuota, setCuota] = useState(null)
  const [mensaje, setMensaje] = useState("")

  const calcularPrestamo = async () => {

    const interesMensual = interes / 100 / 12

    const cuotaCalculada =
      monto *
      (interesMensual * Math.pow(1 + interesMensual, plazo)) /
      (Math.pow(1 + interesMensual, plazo) - 1)

    setCuota(cuotaCalculada.toFixed(2))

    try {

      await axios.post("http://localhost:3000/simulacion", {
        monto,
        interes,
        plazo,
        cuota: cuotaCalculada
      })

      setMensaje("Simulación guardada correctamente")

    } catch (error) {

      console.log(error)
      setMensaje("Error al guardar")

    }

  }

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Simulador de Préstamos
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-lg w-[500px]">

          <input
            type="number"
            placeholder="Monto"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) => setMonto(e.target.value)}
          />

          <input
            type="number"
            placeholder="Interés anual"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) => setInteres(e.target.value)}
          />

          <input
            type="number"
            placeholder="Plazo en meses"
            className="w-full border p-3 rounded-lg mb-4"
            onChange={(e) => setPlazo(e.target.value)}
          />

          <button
            onClick={calcularPrestamo}
            className="bg-black text-white p-3 rounded-lg w-full"
          >
            Calcular
          </button>

          {cuota && (

            <div className="mt-6">

              <h2 className="text-2xl font-bold">
                Cuota mensual: Q{cuota}
              </h2>

              <p className="mt-3 text-green-600">
                {mensaje}
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  )

}

export default Simulator