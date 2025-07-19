import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Homes from './pages/Homes'
import Community from './pages/Community'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-center py-8 text-black">
        Choice Valley Homes - Test
      </h1>
      <p className="text-center text-gray-600">
        If you can see this, React is working
      </p>
    </div>
  )
}

export default App