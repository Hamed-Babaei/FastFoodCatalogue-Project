import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useSelector } from "react-redux";

export default function App() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const router = useRoutes(routes);
  return <>{router}</>;
}
