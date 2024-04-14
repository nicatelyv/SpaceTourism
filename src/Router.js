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
import TechnologyLaunchVehicle from "./components/Technology/TechnologyLaunchVehicle";
import TechnologySpaceport from "./components/Technology/TechnologySpaceport";
import TechnologySpaceCapsule from "./components/Technology/TechnologySpaceCapsule";

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
        children: [
            {
                path: '/destination',
                element: <DestinationMoon />
            },
            {
                path: '/destination/mars',
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
        ]
    },
    {
        path: "/crew",
        children: [
            {
                path: '/crew',
                element: <CrewCommander />
            },
            {
                path: '/crew/mission-specialist',
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
        ]
    },
    {
        path: "/technology",
        children: [
            {
                path: '/technology',
                element: <TechnologyLaunchVehicle />
            },
            {
                path: '/technology/spaceport',
                element: <TechnologySpaceport />
            },
            {
                path: "/technology/space-capsule",
                element: <TechnologySpaceCapsule />
            }
        ]
    }
])