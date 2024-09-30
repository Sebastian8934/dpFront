import { Routes, Route } from "react-router-dom";

// vistas
import Page from '../views/page/Page';
import ListUser from '../views/user/list/ListUser';
import PageNotFound from '../views/page-not-found/PageNotFound';
import PageTwo from "../views/page-two/PageTwo";

export const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} exact />
        <Route path="/pageTwo" element={<PageTwo />} exact />
        <Route path="/listUser" element={<ListUser />} exact />
        <Route path="*" element={<PageNotFound />} exact />
      </Routes>
    </>
  );
}