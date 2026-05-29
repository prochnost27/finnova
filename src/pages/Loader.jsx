function Loader() {

  return (

    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">

      <div className="text-center">

        <div className="w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />

        <h1 className="text-cyan-400 text-4xl font-extrabold mt-10">
          FinNova
        </h1>

        <p className="text-gray-400 mt-4 text-xl">
          Inicializando sistema financiero...
        </p>

      </div>

    </div>

  )

}

export default Loader