import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutAdmin from "../layout/Admin";
import LayoutWebsite from "../layout/Website";
import AddProductForm from "../pages/Admin/ModalProduct";
import AdminCategories from "../pages/Admin/AdminCategories";
import AdminProducts from "../pages/Admin/AdminProducts";
import HomePage from "../pages/HomePage";
import EditProductModal from "../pages/Admin/EditProductModal";

const Routes = (props: any) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin/:path?">
            <LayoutAdmin>
              <Route exact path="/admin/products">
                <AdminProducts {...props} />
              </Route>
              <Route exact path="/admin/categories">
                <AdminCategories {...props} />
              </Route>

              <Route exact path="/admin/products/add">
                <AddProductForm />
              </Route>

              <Route exact path="/admin/products/edit/:id">
                <EditProductModal />
              </Route>
              {/*
              <Route exact path="/admin/category">
                <AdminCategory />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategory />
              </Route>
              <Route exact path="/admin/category/edit/:id">
                <EditCategory />
              </Route> */}
            </LayoutAdmin>
          </Route>
          <Route>
            <LayoutWebsite>
              <Switch>
                <Route exact path="/">
                  <HomePage {...props} />
                </Route>
                {/* <Route path="*">
                  <Error404 />
                </Route> */}
              </Switch>
            </LayoutWebsite>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
