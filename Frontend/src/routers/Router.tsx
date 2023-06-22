import Home from "./Home";
import Practice from "./Main";
import Detail from "./Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:product" element={<Practice />} />
                <Route path="/:product/detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;