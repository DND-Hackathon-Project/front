import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 홈 경로 */}
        <Route path="/" element={<Home />} />

        {/* 상세 페이지 */}
        <Route path="/about" element={<Detail />} />

        {/* 404 페이지
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
