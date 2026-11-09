import { Route, Routes } from "react-router"
import ObjectsDashboard from "./components/ObjectsDashboard"

function App() {
return(
  <Routes>
    <Route path="" element={<ObjectsDashboard />}/>
  </Routes>
)

}

export default App
