import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { WalletProvider } from "./WalletContext";

// Pages
import Landing from "./pages/Landing";
import Error404 from "./pages/Error404";
function App() {
  return (
    // <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    // </WalletProvider>
  );
}

export default App;
