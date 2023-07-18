import Home from "./Home";
import Practice from "./Main";
import Detail from "./Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Phone from "./Phone";


function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:product" element={<Practice />} />
                <Route path="/:product/detail" element={<Detail />} />
                <Route path="/search" element={<Phone />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;