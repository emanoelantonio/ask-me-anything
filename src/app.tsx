import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { CreateRoom } from "./pages/CreateRoom";
import { Room } from "./pages/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateRoom />,
  },
  {
    path: "/room/:roomId",
    element: <Room />,
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster invert richColors />
    </>
  );
}
