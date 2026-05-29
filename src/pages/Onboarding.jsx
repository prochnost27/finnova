import { useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

function Onboarding() {

  const navigate = useNavigate()

  const usuario =
    JSON.parse(localStorage.getItem("usuario"))

  const [dpi, setDpi] = useState("")

  const [nacimiento, setNacimiento] = useState("")

  const [ingresos, setIngresos] = useState("")

  const [trabajo, setTrabajo] = useState("")

  const [tipoIngreso, setTipoIngreso] = useState("")

  const [antiguedad, setAntiguedad] = useState("")

  const [loading, setLoading] = useState(false)







  const guardar = async () => {

    if (

      !dpi ||
      !nacimiento ||
      !ingresos ||
      !trabajo ||
      !tipoIngreso ||
      !antiguedad

    ) {

      return alert(
        "Completa todos los campos"
      )

    }







    try {

      setLoading(true)







      const response =
        await axios.post(

          "https://finnova-backend-io2w.onrender.com/onboarding",

          {

            id: usuario.id,

            dpi,

            nacimiento,

            ingresos,

            trabajo,

            tipo_ingreso:
              tipoIngreso,

            antiguedad

          }

        )







      localStorage.setItem(

        "usuario",

        JSON.stringify(
          response.data
        )

      )







      navigate("/dashboard")

    }

    catch {

      alert(
        "Error guardando perfil"
      )

    }

    finally {

      setLoading(false)

    }

  }







  return (

    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-10">

      <div className="bg-[#111111] border border-[#222] rounded-[40px] p-14 w-full max-w-[900px]">

        <h1 className="text-6xl font-black mb-4">

          Perfil Financiero

        </h1>







        <p className="text-gray-500 text-2xl mb-12">

          Completa tu información
          para generar un análisis financiero personalizado.

        </p>







        <div className="grid grid-cols-2 gap-8">

          <div>

            <p className="text-gray-500 mb-4">

              DPI

            </p>







            <input
              type="text"
              value={dpi}
              onChange={(e) =>
                setDpi(e.target.value)
              }
              className="w-full bg-black border border-[#222] rounded-2xl p-5 text-2xl outline-none"
            />

          </div>











          <div>

            <p className="text-gray-500 mb-4">

              Fecha nacimiento

            </p>







            <input
              type="date"
              value={nacimiento}
              onChange={(e) =>
                setNacimiento(e.target.value)
              }
              className="w-full bg-black border border-[#222] rounded-2xl p-5 text-2xl outline-none"
            />

          </div>











          <div>

            <p className="text-gray-500 mb-4">

              Ingresos mensuales

            </p>







            <input
              type="number"
              value={ingresos}
              onChange={(e) =>
                setIngresos(e.target.value)
              }
              className="w-full bg-black border border-[#222] rounded-2xl p-5 text-2xl outline-none"
            />

          </div>











          <div>

            <p className="text-gray-500 mb-4">

              Lugar de trabajo

            </p>







            <input
              type="text"
              value={trabajo}
              onChange={(e) =>
                setTrabajo(e.target.value)
              }
              className="w-full bg-black border border-[#222] rounded-2xl p-5 text-2xl outline-none"
            />

          </div>











          <div>

            <p className="text-gray-500 mb-4">

              Tipo de ingresos

            </p>







            <select
              value={tipoIngreso}
              onChange={(e) =>
                setTipoIngreso(e.target.value)
              }
              className="w-full bg-black border border-[#222] rounded-2xl p-5 text-2xl outline-none"
            >

              <option value="">
                Selecciona
              </option>

              <option>
                Asalariado
              </option>

              <option>
                Comerciante
              </option>

            </select>

          </div>











          <div>

            <p className="text-gray-500 mb-4">

              Años de antigüedad

            </p>







            <input
              type="number"
              value={antiguedad}
              onChange={(e) =>
                setAntiguedad(e.target.value)
              }
              className="w-full bg-black border border-[#222] rounded-2xl p-5 text-2xl outline-none"
            />

          </div>

        </div>









        <button
          onClick={guardar}
          disabled={loading}
          className="w-full mt-12 bg-yellow-500 hover:bg-yellow-400 transition text-black text-3xl font-black py-6 rounded-3xl"
        >

          {

            loading

            ?

            "Analizando perfil..."

            :

            "Generar Perfil Financiero"

          }

        </button>

      </div>

    </div>

  )

}

export default Onboarding