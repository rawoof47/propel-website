import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// 🔍 DEBUG: Router module load (should run ONCE only)
console.log("🧭 [ROUTER] module loaded");

// SINGLETON QueryClient
export const queryClient = new QueryClient();

// 🔍 DEBUG: QueryClient created (should run ONCE only)
console.log("🧠 [ROUTER] QueryClient initialized");

// SINGLETON Router
export const router = createRouter({
  routeTree,
  context: { queryClient },

  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

// 🔍 DEBUG: Router instance created (should run ONCE only)
console.log("🚀 [ROUTER] router instance created");