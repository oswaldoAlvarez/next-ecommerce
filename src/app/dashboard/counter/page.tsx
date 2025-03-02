import { Metadata } from "next";
import { CounterScreen } from "./counter.screen";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Un simple contador",
};

export default function CounterPage() {
  return <CounterScreen />;
}
