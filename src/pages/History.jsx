import { useEffect, useState } from "react"

import Sidebar from "./Sidebar"

import axios from "axios"

import {

  History as HistoryIcon,
  Landmark,
  Wallet

} from "lucide-react"

function History() {

  const [open, setOpen] = useState(false)

  const [historial, setHistorial] = useState([])

  const usuario =
    JSON.parse(localStorage.getItem("usuario"))

  useEffect(() => {

    obtenerHistorial()

  }, [])

  const obtenerHistorial = async () => {

    try {

      const response =
        await axios.get(

          `https://finnova-backend-io2w.onrender.com/historial/${usuario.id}`

        )

      setHistorial(response.data)

    }

    catch {

      alert("Error cargando historial")

    }

  }

  return (

    <div className="min-h-screen bg-[#050505] text-white">

      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      <div className={`pt-[120px] p-10 transition-all duration-300

      ${open ? "ml-[300px]" : "ml-0"}`}>

        <div className="flex items-center gap-5 mb-12">

          <HistoryIcon
            size={45}
            className="text-yellow-500"
          />

          <div>

            <h1 className="text-6xl font-black">

              Historial Financiero

            </h1>

            <p className="text-gray-500 text-2xl mt-3">

              Registro completo
              de simulaciones realizadas.

            </p>

          </div>

        </div>

        {

          historial.length === 0

          ?

          (

            <div className="bg-[#111111] border border-[#222] rounded-[40px] p-20 text-center">

              <h1 className="text-5xl font-black mb-6">

                Sin simulaciones

              </h1>

              <p className="text-gray-500 text-2xl">

                Aún no has realizado
                simulaciones financieras.

              </p>

            </div>

          )

          :

          (

            <div className="grid grid-cols-2 gap-8">

              {

                historial.map((item) => (

                  <div
                    key={item.id}
                    className="bg-[#111111] border border-[#222] rounded-[35px] p-8"
                  >

                    <div className="flex items-center justify-between mb-8">

                      <div className="flex items-center gap-4">

                        <Landmark
                          className="text-yellow-500"
                          size={30}
                        />

                        <h1 className="text-3xl font-black">

                          {item.banco}

                        </h1>

                      </div>

                      <span className="text-gray-500">

                        {

                          new Date(item.fecha)

                          .toLocaleDateString()

                        }

                      </span>

                    </div>

                    <div className="space-y-6">

                      <div className="flex justify-between border-b border-[#222] pb-4">

                        <span className="text-gray-500 text-xl">

                          Monto

                        </span>

                        <span className="text-2xl font-black text-green-400">

                          Q{item.monto}

                        </span>

                      </div>

                      <div className="flex justify-between border-b border-[#222] pb-4">

                        <span className="text-gray-500 text-xl">

                          Plazo

                        </span>

                        <span className="text-2xl font-black">

                          {item.plazo} meses

                        </span>

                      </div>

                      <div className="flex justify-between border-b border-[#222] pb-4">

                        <span className="text-gray-500 text-xl">

                          Cuota

                        </span>

                        <span className="text-2xl font-black text-yellow-500">

                          Q{item.cuota}

                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-gray-500 text-xl">

                          Total

                        </span>

                        <span className="text-2xl font-black text-red-400">

                          Q{item.total}

                        </span>

                      </div>

                    </div>

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

export default History