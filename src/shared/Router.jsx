import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    redirect,
} from "react-router-dom";
//layout and pages
import TodoPage from "../pages/TodoPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import App from "../App";

const isCheckAuth = () =>
    localStorage.getItem("accessToken") ? true : false;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Navigate replace to="/signin" />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route
                path="todo"
                element={<TodoPage />}
                loader={async () => {
                    const isToken = isCheckAuth();
                    if (!isToken) throw redirect("/signin");
                    return { isToken };
                }}
            />
            <Route
                path="signin" element={<SigninPage />}
                loader={async () => {
                    const isToken = isCheckAuth();
                    if (isToken) throw redirect("/todo");
                    return { isToken };
                }}
            />
            <Route
                path="signup" element={<SignupPage />}
                loader={async () => {
                    const isToken = isCheckAuth();
                    if (isToken) throw redirect("/todo");
                    return { isToken };
                }}
            />
        </Route>
    )
);
export default router;