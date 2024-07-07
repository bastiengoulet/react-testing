import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";

test("if greet renders correctly", () => {
    render(<Greet />);
    const divElement = screen.getByText(/hello/i);
    expect(divElement).toBeInTheDocument();
});