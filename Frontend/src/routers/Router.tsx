import Home from "./Home";
import Practice from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:product" element={<Practice />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;