import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TravelPage from "./components/TravelPage/TravelPage";
import TravelInfo from "./components/TravelInfo/TravelInfo";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Routes>
        <Route path="/" element={<TravelPage />} />
        <Route path="viagem/:id" element={<TravelInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
