import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TeamProvider } from "./store/teamStore";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import CharacterListPage from "./pages/CharacterListPage";
import NotFoundPage from "./pages/NotFoundPage";
import TeamPage from "./pages/TeamPage";
import RootLayout from "./layouts/RootLayout";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <CharacterListPage /> },
      { path: "character/:id", element: <CharacterDetailPage /> },
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