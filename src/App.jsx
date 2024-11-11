import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import { HymnProvider } from "./hymnContext";
import Hymns from "./pages/Hymns";
import SearchHymn from "./pages/SearchHymn";
import Favourites from "./pages/Favourites";
import Hymn from "./pages/Hymn";
import Category from "./pages/Categories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Nopage />,
    },
    {
      path: "/categories",
      element: <Category />,
    },
    {
      path:'hymns',
      element:<Hymns/>
    },
    {
      path:'search-hymns',
      element:<SearchHymn/>,
      
    },
    {
      path:"search-hymns/:id",
      element:<Hymn/>
    },
    {
      path:'favourites',
      element:<Favourites/>
    }
  
  ]);

  return (
    <>
      <HymnProvider>
        <RouterProvider router={router} />
      </HymnProvider>
    </>
  );
}

export default App;
