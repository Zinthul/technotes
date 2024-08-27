import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Public, Layout, DashLayout } from "./components";
import Login from "./features/auth/Login";
import "./App.css";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />}/>

          <Route path="dash" element={<DashLayout/>}>
          
            <Route index element={<Welcome/>}/>

            <Route path="notes">
              <Route index element={<NotesList />} />
            </Route>

            <Route path="users">
              <Route index element={<UsersList />} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
