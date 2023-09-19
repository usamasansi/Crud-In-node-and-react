import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./Users";
import Createuser from "./Createuser";
import UpdateUser from "./UpdateUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<Createuser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
