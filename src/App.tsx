import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';

import { AdminAuthProvider } from './context/AdminAuthContext';
import { ProductProvider } from './context/ProductContext';
import { OrderProvider } from './context/OrderContext';

import AdminAppLayout from './Admin/AdminComponent/Layout/AdminAppLayout';
import AdminDashboard from './Admin/AdminPages/AdminDashboard';
import OrderSection from './Admin/AdminPages/OrderSection';
import AddProduct from './Admin/AdminPages/AddProduct';
import ManageInventory from './Admin/AdminPages/ManageInventory';
import SalesAnalytics from './Admin/AdminPages/SalesAnalytics';
import SellerApplications from './Admin/AdminPages/SellerApplications';
import ReviewModeration from './Admin/AdminPages/ReviewModeration';
import SiteContentManager from './Admin/AdminPages/SiteContentManager';
import AdminSecuritySettings from './Admin/AdminPages/AdminSecuritySettings';
import AdminAuthPage from './Admin/AdminPages/AdminAuthPage';
import ProtectedAdminRoute from './Admin/AdminComponent/ProtectedAdminRoute';
import NotFound from './Client/ClientsComponent/NotFound';

const router = createBrowserRouter([
  {
    path: "/admin/auth",
    element: <AdminAuthPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedAdminRoute>
        <AdminAppLayout />
      </ProtectedAdminRoute>
    ),
    children: [
      { path: "/", element: <Navigate to="/admin/dashboard" replace /> },
      { path: "/admin", element: <Navigate to="/admin/dashboard" replace /> },
      { path: "/admin/dashboard", element: <AdminDashboard /> },
      { path: "/admin/orders", element: <OrderSection /> },
      { path: "/admin/add-product", element: <AddProduct /> },
      { path: "/admin/inventory", element: <ManageInventory /> },
      { path: "/admin/analytics", element: <SalesAnalytics /> },
      { path: "/admin/seller-applications", element: <SellerApplications /> },
      { path: "/admin/reported-reviews", element: <ReviewModeration /> },
      { path: "/admin/site-content", element: <SiteContentManager /> },
      { path: "/admin/security", element: <AdminSecuritySettings /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <AdminAuthProvider>
      <ProductProvider>
        <OrderProvider>
          <RouterProvider router={router} />
        </OrderProvider>
      </ProductProvider>
    </AdminAuthProvider>
  );
}

export default App;