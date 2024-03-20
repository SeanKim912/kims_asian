import { createBrowserRouter } from 'react-router-dom';
import ContactUs from '../components/ContactUs/ContactUs';
import AboutUs from '../components/AboutUs';
import Layout from './Layout';
import Products from '../components/Products';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
        {
            path: "/",
            element: <AboutUs />,
        },
        {
            path: "contact",
            element: <ContactUs />
        },
        {
            path: "about",
            element: <AboutUs />
        },
        {
            path: "products",
            element: <Products />
        }
        ],
    },
]);
