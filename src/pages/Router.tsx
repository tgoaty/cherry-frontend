import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ConnectChatPage from "./ConnectChat/ConnectChatPage.tsx";
import ChatPage from "./Chat/ChatPage.tsx";
import {Suspense} from "react";
import Loader from "../shared/ui/Loader.tsx";
import NotFoundPage from "./NotFound/NotFoundPage.tsx";

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