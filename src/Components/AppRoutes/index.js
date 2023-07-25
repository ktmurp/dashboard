import { Route, Routes } from "react-router-dom";
import Dashboards from "../../Pages/Dashboards";
import Students from "../../Pages/Students";
import Class from "../../Pages/Class";
import Quadrilaterals from "../../Pages/Dashboards/Quadrilaterals";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Quadrilaterals />}></Route>
            <Route path="/students" element={<Students />}></Route>
            <Route path="/class" element={<Class />}></Route>
            <Route path="/quadrilaterals" element={<Dashboards />}></Route>
        </Routes>
    );
}

export default AppRoutes;