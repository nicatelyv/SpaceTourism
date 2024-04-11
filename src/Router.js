import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import DestinationMars from "./components/Destination/DestinationMars"
import DestinationMoon from "./components/Destination/DestinationMoon";
import DestinationEuropa from "./components/Destination/DestinationEuropa";
import DestinationTitan from "./components/Destination/DestinationTitan";
import CrewCommander from "./components/Crew/CrewCommander";
import CrewMissionSpecialist from "./components/Crew/CrewMissionSpecialist";
import CrewPilot from "./components/Crew/CrewPilot";
import CrewFlightEngineer from "./components/Crew/CrewFlightEngineer";


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
        path: "/destination/moon",
        element: <DestinationMoon />
    },
    {
        path: "/destination/mars",
        element: <DestinationMars />
    },
    {
        path: "/destination/europa",
        element: <DestinationEuropa />
    },
    {
        path: "/destination/titan",
        element: <DestinationTitan />
    },
    {
        path: "/crew/commander",
        element: <CrewCommander />
    },
    {
        path: "/crew/mission-specialist",
        element: <CrewMissionSpecialist />
    },
    {
        path: "/crew/pilot",
        element: <CrewPilot />
    },
    {
        path: "/crew/flight-engineer",
        element: <CrewFlightEngineer />
    },
])