import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import NotFoundPage from "./pages/NotFoundPage";
import TeamPage from "./pages/TeamPage";
import RootLayout from "./layouts/RootLayout";
import { TeamProvider } from "./providers/TeamProvider";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <ListPage /> },
      { path: "character/:id", element: <DetailPage /> },
      { path: "team", element: <TeamPage /> },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TeamProvider>
        <RouterProvider router={router} />
      </TeamProvider>
    </QueryClientProvider>
  );
}
