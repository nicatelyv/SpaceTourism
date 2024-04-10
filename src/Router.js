import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <Home />
    },
    {
        path: "/destination",
        element: <Destination />
    }
])