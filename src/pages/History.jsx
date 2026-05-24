import { useEffect, useState } from "react"
import axios from "axios"
import Sidebar from "./Sidebar"

function History() {

  const [simulaciones, setSimulaciones] = useState([])

  useEffect(() => {

    obtenerSimulaciones()

  }, [])

  const obtenerSimulaciones = async () => {

    try {

      const response = await axios.get(
        "http://localhost:3000/simulaciones"
      )

      setSimulaciones(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 p-10">

        <h1 className="text-4xl font-bold mb-8">
          Historial de Simulaciones
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Monto
                </th>

                <th className="p-3 text-left">
                  Interés
                </th>

                <th className="p-3 text-left">
                  Plazo
                </th>

                <th className="p-3 text-left">
                  Cuota
                </th>

              </tr>

            </thead>

            <tbody>

              {simulaciones.map((sim) => (

                <tr key={sim.id} className="border-b">

                  <td className="p-3">
                    Q{sim.monto}
                  </td>

                  <td className="p-3">
                    {sim.interes}%
                  </td>

                  <td className="p-3">
                    {sim.plazo} meses
                  </td>

                  <td className="p-3">
                    Q{Number(sim.cuota).toFixed(2)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )

}

export default History