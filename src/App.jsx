import ComingSoonOverlay from "./components/ComingSoonOverlay"
import Header from "./components/Header"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className='bg-[#0a1929] text-white relative min-h-screen'>
      <Header />
      <ComingSoonOverlay/>
      <AppRoutes />
    </div>
  )
}

export default App
