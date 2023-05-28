import Phone from "./Phone"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Phone />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;