import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/Error-page";
import Contact from "../pages/Contact";
import { getContact, getContacts } from '../data/dataContacts';

export const loader: LoaderFunction = async ({ params }) => {
    if (params.contactId) {
        const contact = await getContact(params.contactId);
        const contacts = await getContacts();
        return { contact, contacts };
    } else {
        const contacts = await getContacts();
        return { contacts };
    }
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: loader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: loader
      },
    ]
  },
]);

export default router;
