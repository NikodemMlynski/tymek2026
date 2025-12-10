import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import HomePage from "./pages/HomePage"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ToastContainer } from "react-toastify";
import AboutPage from "./pages/AboutPage";
import DemandsPage from "./pages/DemandsPage";
import TeamPage from "./pages/TeamPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/demands",
        element: <DemandsPage/>
      },
      {
        path: "/team",
        element: <TeamPage/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      }
    ]
  }
])

function App() {

  return (
    <QueryClientProvider client={queryClient} >
      <ToastContainer autoClose={1500}/>
    <RouterProvider router={router} />
    </QueryClientProvider>

  )
}

export default App
