import React from "react";
import { CartCounter } from "./components/CartCounter/CartCounter.component";

export const CounterScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el Carrito</span>
      <CartCounter />
    </div>
  );
};
