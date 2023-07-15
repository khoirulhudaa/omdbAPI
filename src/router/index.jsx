import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Homepage from '../App';
import DetailPage from '../pages/detailpage';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/detailPage',
        element: <DetailPage />
    }
])

export default Router;