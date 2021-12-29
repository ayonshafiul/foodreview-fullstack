import {Routes, Route} from "react-router-dom"
import Home from "./routes/Home"
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import Register from "./routes/Register";
import NoMatch from "./routes/NoMatch";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}

export default App;
