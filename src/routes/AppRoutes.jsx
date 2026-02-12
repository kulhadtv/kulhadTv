import { Routes, Route } from "react-router-dom";
import KulhadHome from "../features/kulhadtv/pages/KulhadHome";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<KulhadHome />} />
      {/* <Route path="/chaichart" element={<ChaiHome />} /> */}
    </Routes>
  )
}

export default AppRoutes
