import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🎉 Ana e Gerson 🎉</h1>
      <p className="mb-8 text-lg">Lista de Casamento 💍</p>

      <ul className="bg-white shadow-md rounded-xl p-6 space-y-4 w-80">
        <li className="border-b pb-2">🍽️ Conjunto de pratos</li>
        <li className="border-b pb-2">🛏️ Jogo de cama</li>
        <li className="border-b pb-2">🍷 Conjunto de taças</li>
        <li className="border-b pb-2">🍳 Frigideira antiaderente</li>
        <li>🪞 Espelho decorativo</li>
      </ul>

      <footer className="mt-10 text-sm text-gray-500">
        Com amor, Ana & Gerson 💕
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
