import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "./components/accueil/Accueil";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fonts/ProductSans-Regular.ttf"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import Contact from "./components/contact/Contact";
import FAQ from "./components/faq/FAQ";
import CCM from "./components/ccm/CCM";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import './App.css'
import { NewAccessCode } from "./components/maDemande/newAccessCode/NewAccessCode";
import { Login } from "./components/maDemande/login/Login";
import { Register } from "./components/maDemande/register/Register";
import Home from "./components/home/Home";
import RequireAuth from "./features/auth/RequireAuth";
import StudentPack from "./components/packs/studentPack/StudentPack";
import MarocainResidentPack from "./components/packs/marocainResidentPack/MarocainResidentPack";
import AccountCreation from "./components/accountCreation/AccountCreation";
import Bienvenu from "./components/bienvenu/Bienvenu";

function App() {
  return (
    <div className="App-Bar">
        <div className="sticky-top">
          <NavBar/>
        </div>
        <Routes>
          <Route>
            {/* Public Routes */}
            <Route index element={<Accueil/>}/>
            <Route path="accueil" element={<Accueil />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="faq" element={<FAQ />}/>
            <Route path="comment-ca-marche" element={<CCM />}/>
            <Route path="new-access-code" element={<NewAccessCode/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="studentPack" element={<StudentPack/>}/>
            <Route path="marocainResidentPack" element={<MarocainResidentPack/>}/>
            <Route path="creation-compte" element={<AccountCreation/>}/>
            <Route path="bienvenu" element={<Bienvenu/>}/>
            {/* Protected Routes */}
            <Route element={<RequireAuth/>}>
              <Route path="home" element={<Home/>} />
            </Route>
          </Route>
        </Routes>
        <div className="app-footer">
          <Footer/>
        </div>
    </div>
  );
}

export default App;
