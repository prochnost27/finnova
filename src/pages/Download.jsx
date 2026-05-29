import { useState } from "react"

import Sidebar from "./Sidebar"

import {

  Download as DownloadIcon,
  Smartphone,
  QrCode as QrIcon,
  ShieldCheck,
  CheckCircle2

} from "lucide-react"

function Download() {

  const [open, setOpen] = useState(false)

  const descargarAPK = () => {

    window.open(

      "https://finnova-haln-k7uj5prat-fin-nova.vercel.app/",

      "_blank"

    )

  }

  return (

    <div className="min-h-screen bg-[#050505] text-white">

      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      <div className={`pt-[120px] p-10 transition-all duration-300

      ${open ? "ml-[300px]" : "ml-0"}`}>

        <div className="flex items-center gap-5 mb-14">

          <DownloadIcon
            size={50}
            className="text-yellow-500"
          />

          <div>

            <h1 className="text-6xl font-black">

              Descargar FinNova

            </h1>

            <p className="text-gray-500 text-2xl mt-3">

              Instala la plataforma financiera
              inteligente en cualquier dispositivo.

            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-10">

          <div className="bg-[#111111] border border-[#222] rounded-[40px] p-10 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">

              <div className="flex items-center gap-4 mb-10">

                <Smartphone
                  className="text-yellow-500"
                  size={38}
                />

                <h1 className="text-4xl font-black">

                  Aplicación Android

                </h1>

              </div>

              <p className="text-gray-400 text-2xl leading-relaxed mb-10">

                Descarga FinNova APK
                para acceder al simulador financiero,
                comparador bancario y análisis crediticio.

              </p>

              <div className="space-y-5 mb-12">

                <div className="flex items-center gap-4 text-xl">

                  <CheckCircle2 className="text-green-400" />

                  Simulador inteligente

                </div>

                <div className="flex items-center gap-4 text-xl">

                  <CheckCircle2 className="text-green-400" />

                  Score financiero dinámico

                </div>

                <div className="flex items-center gap-4 text-xl">

                  <CheckCircle2 className="text-green-400" />

                  Comparación entre bancos

                </div>

                <div className="flex items-center gap-4 text-xl">

                  <CheckCircle2 className="text-green-400" />

                  Descarga segura

                </div>

              </div>

              <button

                onClick={descargarAPK}

                className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black text-2xl font-black px-10 py-5 rounded-3xl shadow-[0_0_40px_rgba(255,215,0,0.15)]"

              >

                Descargar APK

              </button>

            </div>

          </div>

          <div className="bg-[#111111] border border-[#222] rounded-[40px] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">

            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">

              <QrIcon
                size={45}
                className="text-yellow-500 mx-auto mb-8"
              />

              <h1 className="text-5xl font-black mb-6">

                Código QR

              </h1>

              <p className="text-gray-400 text-2xl leading-relaxed mb-10">

                Escanea este código
                desde tu teléfono
                para acceder a FinNova.

              </p>

              <div className="bg-white p-6 rounded-[35px] inline-block mb-10">

                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://finnova-haln-k7uj5prat-fin-nova.vercel.app/"
                  alt="QR FinNova"
                  className="rounded-2xl"
                />

              </div>

              <div className="flex items-center justify-center gap-4 text-green-400 text-xl">

                <ShieldCheck />

                Acceso seguro y rápido

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Download