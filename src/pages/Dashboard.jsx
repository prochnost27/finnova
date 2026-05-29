import { useState } from "react"

import Sidebar from "./Sidebar"

import {

  TrendingUp,
  Landmark,
  ShieldCheck,
  Wallet,
  BadgeDollarSign,
  Activity

} from "lucide-react"

function Dashboard() {

  const [open, setOpen] = useState(false)







  const usuario =
    JSON.parse(localStorage.getItem("usuario"))


const bancos = [

  {
    nombre: "BAC",
    tasa: usuario?.bac
  },

  {
    nombre: "BI",
    tasa: usuario?.bi
  },

  {
    nombre: "Banrural",
    tasa: usuario?.banrural
  },

  {
    nombre: "Promerica",
    tasa: usuario?.promerica
  },

  {
    nombre: "Bam",
    tasa: usuario?.bam
  },

  {
    nombre: "Bantrab",
    tasa: usuario?.bantrab
  },

  {
    nombre: "Micoope",
    tasa: usuario?.micoope
  },

  {
    nombre: "Banco Antigua",
    tasa: usuario?.antigua
  },

  {
    nombre: "Interbanco",
    tasa: usuario?.interbanco
  },

  {
    nombre: "GyT Continental",
    tasa: usuario?.gyt
  },

  {
    nombre: "CHN",
    tasa: usuario?.chn
  }

]

const mejorBanco =

  bancos.reduce(

    (a, b) =>

      a.tasa < b.tasa

        ? a

        : b

  )





  const riesgo =

    usuario?.score >= 850

      ? "Riesgo Muy Bajo"

      :

      usuario?.score >= 700

        ? "Riesgo Bajo"

        :

        usuario?.score >= 550

          ? "Riesgo Medio"

          :

          "Riesgo Alto"







  return (

    <div className="min-h-screen bg-[#050505] text-white">

      <Sidebar
        open={open}
        setOpen={setOpen}
      />







      <div className={`pt-[120px] p-10 transition-all duration-300

      ${open ? "ml-[300px]" : "ml-0"}`}>









        <div className="flex items-center justify-between mb-12">

          <div>

            <h1 className="text-6xl font-black">

              Panel Financiero

            </h1>





            <p className="text-gray-500 text-2xl mt-3">

              Bienvenido,
              {usuario?.nombre}

            </p>

          </div>











          <div className="bg-yellow-500 text-black px-8 py-5 rounded-3xl">

            <p className="font-bold text-lg">

              Score Financiero

            </p>





            <h1 className="text-5xl font-black">

              {usuario?.score}

            </h1>

          </div>

        </div>









        <div className="grid grid-cols-4 gap-8 mb-10">

          <div className="bg-[#111111] border border-[#222] rounded-[30px] p-8">

            <div className="flex items-center justify-between">

              <p className="text-gray-500 text-lg">

                Perfil

              </p>





              <ShieldCheck
                className="text-yellow-500"
              />

            </div>





            <h1 className="text-5xl font-black mt-8 text-yellow-500">

              {usuario?.perfil}

            </h1>

          </div>











          <div className="bg-[#111111] border border-[#222] rounded-[30px] p-8">

            <div className="flex items-center justify-between">

              <p className="text-gray-500 text-lg">

                Banco Ideal

              </p>





              <Landmark
                className="text-yellow-500"
              />

            </div>





            <h1 className="text-4xl font-black mt-8 break-words text-white">

              {mejorBanco.nombre}

            </h1>

          </div>











          <div className="bg-[#111111] border border-[#222] rounded-[30px] p-8">

            <div className="flex items-center justify-between">

              <p className="text-gray-500 text-lg">

                Riesgo

              </p>





              <Activity
                className="text-yellow-500"
              />

            </div>





            <h1 className="text-3xl font-black mt-8 text-red-400">

              {riesgo}

            </h1>

          </div>











          <div className="bg-[#111111] border border-[#222] rounded-[30px] p-8">

            <div className="flex items-center justify-between">

              <p className="text-gray-500 text-lg">

                Ingresos

              </p>





              <Wallet
                className="text-yellow-500"
              />

            </div>





            <h1 className="text-4xl font-black mt-8 text-green-400">

              Q{usuario?.ingresos}

            </h1>

          </div>

        </div>









        <div className="grid grid-cols-2 gap-10">

          <div className="bg-[#111111] border border-[#222] rounded-[40px] p-10">

            <div className="flex items-center gap-4 mb-10">

              <TrendingUp
                className="text-yellow-500"
                size={35}
              />





              <h1 className="text-4xl font-black">

                Tasas Bancarias

              </h1>

            </div>











            <div className="space-y-8">

              {

                bancos.map((item, index) => (

                  <div key={index}>

                    <div className="flex justify-between mb-3">

                      <span className="text-xl">

                        {item.nombre}

                      </span>





                      <span className="text-yellow-500 text-xl font-black">

                        {item.tasa}%

                      </span>

                    </div>





                    <div className="w-full h-4 bg-black rounded-full overflow-hidden">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                        style={{
                          width: `${100 - item.tasa * 4}%`
                        }}
                      />

                    </div>

                  </div>

                ))

              }

            </div>

          </div>









          <div className="bg-[#111111] border border-[#222] rounded-[40px] p-10 flex flex-col justify-between">

            <div>

              <div className="flex items-center gap-4 mb-10">

                <BadgeDollarSign
                  className="text-yellow-500"
                  size={35}
                />





                <h1 className="text-4xl font-black">

                  Resumen Financiero

                </h1>

              </div>











              <div className="space-y-8 text-xl">

                <div className="flex justify-between border-b border-[#222] pb-4">

                  <span className="text-gray-500">

                    Tipo de ingreso

                  </span>





                  <span className="font-bold">

                    {usuario?.tipo_ingreso}

                  </span>

                </div>











                <div className="flex justify-between border-b border-[#222] pb-4">

                  <span className="text-gray-500">

                    Antigüedad

                  </span>





                  <span className="font-bold">

                    {usuario?.antiguedad} años

                  </span>

                </div>











                <div className="flex justify-between border-b border-[#222] pb-4">

                  <span className="text-gray-500">

                    Clasificación

                  </span>





                  <span className="font-bold text-yellow-500">

                    Cliente {usuario?.perfil}

                  </span>

                </div>











                <div className="flex justify-between border-b border-[#222] pb-4">

                  <span className="text-gray-500">

                    Mejor tasa

                  </span>





                  <span className="font-bold text-green-400">

                    {mejorBanco.tasa}%

                  </span>

                </div>

              </div>

            </div>











            <div className="mt-12 bg-black rounded-[30px] p-8 border border-[#222]">

              <p className="text-gray-500 text-lg mb-4">

                Recomendación Inteligente

              </p>





              <h1 className="text-3xl font-black leading-relaxed">

                Tu mejor opción financiera
                actualmente es

                <span className="text-yellow-500">

                  {" "}
                  {mejorBanco.nombre}

                </span>

              </h1>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Dashboard