import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutAdmin from "../layout/Admin";
import LayoutWebsite from "../layout/Website";
import AddProductForm from "../pages/Admin/product/AddProductForm";
import AdminCategory from "../pages/Admin/category/AdminCategory";
import AdminProduct from "../pages/Admin/product/AdminProduct";
import HomePage from "../pages/HomePage";
import EditProductForm from "../pages/Admin/product/EditProductForm";
import AddCategoryForm from "../pages/Admin/category/AddCategoryForm";
import EditCategoryForm from "../pages/Admin/category/EditCategoryForm";
import Nav from "../components/Nav";
import ProductItemDetail from "../pages/ProductItemDetail";
import Error404 from "../pages/Error404";

const Routes = (props: any) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin/:path?">
            <LayoutAdmin>
              <Route exact path="/admin/product">
                <AdminProduct {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProductForm />
              </Route>
              <Route exact path="/admin/product/edit/:id">
                <EditProductForm />
              </Route>

              <Route exact path="/admin/category">
                <AdminCategory {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategoryForm />
              </Route>
              <Route exact path="/admin/category/edit/:id">
                <EditCategoryForm />
              </Route>
            </LayoutAdmin>
          </Route>
          <Route>
            <LayoutWebsite>
              <Nav />
              <Switch>
                <Route exact path="/">
                  <HomePage {...props} />
                </Route>
                <Route exact path="/:slug.:id">
                  <ProductItemDetail />
                </Route>
                <Route path="*">
                  <Error404 />
                </Route>
              </Switch>
            </LayoutWebsite>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
