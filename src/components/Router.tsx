import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ConnectChatPage from "./ConnectChatPage.tsx";
import ChatPage from "./ChatPage.tsx";
import {Suspense} from "react";
import Loader from "./Loader.tsx";
import NotFoundPage from "./NotFoundPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ConnectChatPage/>
    },
    {
        path: "chat/:chatID",
        element: <ChatPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])

const Router = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <RouterProvider router={router}/>
        </Suspense>
    );
};

export default Router;