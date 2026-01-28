import { createRouter } from "@tanstack/react-router";
import NotFound from "./components/NotFound";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
export const getRouter = () => {
    const router = createRouter({
        context: {},
        defaultNotFoundComponent: () => <NotFound />,
        defaultPreloadStaleTime: 0,
        routeTree,

        scrollRestoration: true,
    });

    return router;
};
