import KulhadTVApp from "./components/KulhadTv"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className='bg-[#0a1929] text-white relative min-h-screen'>
      <KulhadTVApp />
      <AppRoutes />
    </div>
  )
}

export default App
