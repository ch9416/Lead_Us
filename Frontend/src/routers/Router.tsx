import Home from "./HomePage/Home";
import Detail from "./ItemDetailPage/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Itemlist from "./ItemlistPage/Itemlist";



function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:product" element={<Itemlist />} />
                <Route path="/:product/detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;