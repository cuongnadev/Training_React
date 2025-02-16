import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter Component", () => {
    test("Render Counter component with incorrect expectation", () => {
        render(<Counter/>);

        expect(screen.getByTestId("counter-value")).toHaveTextContent("Current Counter: 0"); // Error because correct is Current Count: 0
    });

    test("Render three Button (wrong expectation)", () => {
        render(<Counter/>);

        expect(screen.getByRole("button")).toHaveLength(3); // Error because lenght is 2
    });

    test("Incorrect count Increment", () => {
        render(<Counter/>);

        const button = screen.getByText("Increase");
        fireEvent.click(button);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("Current Count: 2"); // Error because 1
    })
})