import Phone from "./Phone"
import Detail from "./Detail";
import Practice from "./Practice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Phone />} />
                <Route path="/:product" element={<Practice />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;