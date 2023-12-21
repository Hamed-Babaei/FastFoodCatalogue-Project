import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FoodItem from "./pages/FoodItem";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/food-item", element: <FoodItem /> },
  { path: "/cart", element: <Cart /> },
];

export default routes;
