import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./Pages/EditEventPage";
import ErrorPage from "./Pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./Pages/EventDetailPage";
import EventsPage, { loader as eventsLoader } from "./Pages/EventsPage";
import EventRoot from "./Pages/EventRoot";
import HomePage from './Pages/HomePage'
import NewEventPage from "./Pages/NewEventPage";
import RootLayout from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
