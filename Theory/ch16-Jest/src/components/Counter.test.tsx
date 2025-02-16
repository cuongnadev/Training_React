import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Counter from './Counter';
describe("Counter Component", () => {
    test("Render Counter Component", () => {
        render(<Counter />);
        expect(screen.getByText("Counter")).toBeInTheDocument();
        expect(screen.getByTestId("counter-value")).toHaveTextContent("Current Count: 0")
    });

    test("Increment count when clicked Increase Button", () => {
        render(<Counter />);
        const button = screen.getByText("Increase");

        fireEvent.click(button);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("Current Count: 1");
    })

    test("Decrement count when clicked Decrease Button", () => {
        render(<Counter />);
        const button = screen.getByText("Decrease");

        fireEvent.click(button);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("Current Count: -1");
    });

    test("Render buttons correctly", () => {
        render(<Counter />);
        expect(screen.getByRole("button", {name: "Increase"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Decrease"})).toBeInTheDocument();
    })
})