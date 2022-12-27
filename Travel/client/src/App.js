import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TravelPage from "./components/TravelPage/TravelPage";
import TravelInfo from "./components/TravelInfo/TravelInfo";
import { useState } from "react";

function App() {
  const [getTravelById, setGetTravelById] = useState(null);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Routes>
        <Route
          path="/"
          element={<TravelPage setGetTravelById={setGetTravelById} />}
        />
        <Route
          path="viagem/:id"
          element={<TravelInfo getTravelById={getTravelById} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
