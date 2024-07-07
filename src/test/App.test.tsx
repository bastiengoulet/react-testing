import { render, screen } from "@testing-library/react";
import App from "../App";

test("if app contains p", () => {
    render(<App />);
    const pElement = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(pElement).toBeInTheDocument();
})