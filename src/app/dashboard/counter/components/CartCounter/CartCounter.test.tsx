import { render, screen } from "@testing-library/react";
import { CartCounter } from "./CartCounter.component";

describe("<CardCounter/>", () => {
  test("Se reenderean correctamente los botones incrementar y decrementar de la pantalla", () => {
    render(<CartCounter />);

    const incrementElement = screen.getByText("+1");
    const decrementElement = screen.getByText("-1");

    expect(incrementElement).toBeInTheDocument();
    expect(decrementElement).toBeInTheDocument();
  });
});
