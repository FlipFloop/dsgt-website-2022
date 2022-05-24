import { render, screen } from "@testing-library/react";
import Footer from "./index.js";

test("test1", () => {
    render(<Footer />);
    const name = screen.getByText(/Data Science @ GT/i);
    expect(name).toBeInTheDocument();
})