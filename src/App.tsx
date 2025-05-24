import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VoteAndJoin from "./pages/VoteAndJoin";
import Detail from "./pages/Detail";
import VoteResult from "./pages/VoteResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 홈 경로 */}
        <Route path="/" element={<Home />} />

        {/* 상세 페이지 */}
        <Route path="/vote/:id" element={<VoteAndJoin />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/voteResult" element={<VoteResult />} />

        {/* 404 페이지
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
