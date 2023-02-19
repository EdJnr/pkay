import { Home } from "../pages/home/home";
import { pageTypes } from "../types/types";

export const pages:pageTypes[] = [
    {
        path :  '/',
        component : Home,
        exact : true
    }
]