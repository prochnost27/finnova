import { QRCodeCanvas } from "qrcode.react"
import Sidebar from "./Sidebar"

function Download() {

  return (

    <div className="flex bg-gradient-to-br from-black via-gray-950 to-cyan-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col items-center justify-center">

        <h1 className="text-6xl font-extrabold mb-10 text-cyan-400">
          Descargar FinNova
        </h1>

        <div className="bg-white p-10 rounded-3xl shadow-2xl">

          <QRCodeCanvas
            value="https://finnova-haln.vercel.app"
            size={320}
          />

        </div>

        <p className="mt-10 text-2xl text-gray-300">
          Escanea el código QR para instalar la aplicación
        </p>

      </div>

    </div>

  )

}

export default Download
