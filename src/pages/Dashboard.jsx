import Sidebar from "./Sidebar"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { motion } from "framer-motion"

function Dashboard() {

  const data = [
    { mes: "Ene", prestamos: 4 },
    { mes: "Feb", prestamos: 7 },
    { mes: "Mar", prestamos: 12 },
    { mes: "Abr", prestamos: 9 },
    { mes: "May", prestamos: 16 }
  ]

  return (

    <div className="flex bg-gradient-to-br from-gray-950 via-black to-cyan-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-6xl font-extrabold mb-10 text-cyan-400">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-8">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-700 p-8 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold">
              Simulaciones
            </h2>

            <p className="text-6xl mt-5 font-extrabold">
              41
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold">
              Banco Ideal
            </h2>

            <p className="text-4xl mt-5 font-extrabold">
              Banrural
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-green-500 to-emerald-700 p-8 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold">
              Promedio
            </h2>

            <p className="text-5xl mt-5 font-extrabold">
              Q25K
            </p>
          </motion.div>

        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 mt-12 p-10 rounded-3xl shadow-2xl">

          <h2 className="text-4xl font-bold mb-8">
            Actividad Financiera
          </h2>

          <div style={{ width: "100%", height: 400 }}>

            <ResponsiveContainer>

              <BarChart data={data}>

                <XAxis dataKey="mes" stroke="#ffffff" />

                <YAxis stroke="#ffffff" />

                <Tooltip />

                <Bar
                  dataKey="prestamos"
                  fill="#06b6d4"
                  radius={[15, 15, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Dashboard