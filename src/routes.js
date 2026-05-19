import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Imovel from "./pages/Imovel";
import Footer from "./components/Footer"

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imovel/:id" element={<Imovel />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}