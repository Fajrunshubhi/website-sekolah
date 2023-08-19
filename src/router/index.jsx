import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Berita from "../pages/Berita";
import ErrorPage from "../pages/Error404";
import Agenda from "../pages/Agenda";
import Kontak from "../pages/kontak";
import Guru from "../pages/Guru";
import VisiMisi from "../pages/Visimisi";
import Prestasi from "../pages/Prestasi";
import Ekstrakurikuler from "../pages/Ekstrakurikuler";

import Foto from "../pages/galeri/Foto";
import Video from "../pages/Galeri/Video";
import Tentang from "../pages/Tentang";
import BeritaDetail from "../pages/BeritaDetail";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "guru",
                    element: <Guru />,
                },
                {
                    path: "visi-misi",
                    element: <VisiMisi />,
                },

                {
                    path: "prestasi",
                    element: <Prestasi />,
                },
                {
                    path: "ekstrakurikuler",
                    element: <Ekstrakurikuler />,
                },

                {
                    path: "tentang",
                    element: <Tentang />,
                },
                {
                    path: "berita-artikel",
                    element: <Berita />,
                },
                {
                    path: "berita/:beritaId",
                    element: <BeritaDetail />,
                },
                {
                    path: "agenda",
                    element: <Agenda />,
                },
                {
                    path: "foto",
                    element: <Foto />,
                },
                {
                    path: "video",
                    element: <Video />,
                },

                {
                    path: "kontak",
                    element: <Kontak />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
