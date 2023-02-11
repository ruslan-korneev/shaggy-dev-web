import React from 'react';

import GithubActivities from "./components/GithubActivities";
import StackTech from "./components/StackTech";
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function Profile() {
    return (
        <div>
            <StackTech />
            <GithubActivities />
        </div>
    )
}

function App() {
  return (
      <BrowserRouter>
          <div className={"w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-cover bg-center bg-no-repeat gap-50"}>
              <NavBar />
              <Routes>
                  <Route path={"/"} element={<Profile />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
