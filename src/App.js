import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const router = useRoutes(routes);
  return <>{router}</>;
}
