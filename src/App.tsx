import { Route, Routes } from "react-router-dom";

import CreatePlaylistpage from "./pages/CreatePlaylistpage";
import Loginpage from "./pages/Loginpage";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import PlaylistDetailpage from "./pages/PlaylistDetailpage";
import Searchuserpage from "./pages/Searchuserpage";


function App() {
  return (
    <Routes>
    <Route path="/mypage:id" element={<Mypage />} />
    <Route path="/" element={<Mainpage />} />
    <Route path="/auth" element={<Loginpage />} />
    <Route path="/detail:id" element={<PlaylistDetailpage />} />
    <Route path="/create" element={<CreatePlaylistpage />} />
    <Route path="/searchuser" element={<Searchuserpage />} />
  </Routes>
  );
}

export default App;
