import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeContext";
import Button from "../component/Button";

// Helper function để bọc ThemeProvider khi render component
const renderWithThemeProvider = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

test("Button hiển thị đúng với theme mặc định (light)", () => {
  renderWithThemeProvider(<Button />);

  // Kiểm tra nội dung mặc định
  expect(screen.getByRole("button")).toHaveTextContent("Switch to Dark Mode");
});

test("Click button sẽ đổi theme", () => {
  renderWithThemeProvider(<Button />);

  const button = screen.getByRole("button");

  // Trạng thái ban đầu
  expect(button).toHaveTextContent("Switch to Dark Mode");

  // Click button
  fireEvent.click(button);

  // Sau khi click, theme phải đổi
  expect(button).toHaveTextContent("Switch to Light Mode");
});

test("Click hai lần sẽ quay lại theme ban đầu", () => {
  renderWithThemeProvider(<Button />);

  const button = screen.getByRole("button");

  // Click 2 lần
  fireEvent.click(button);
  fireEvent.click(button);

  // Sau 2 lần click, theme phải trở về trạng thái ban đầu
  expect(button).toHaveTextContent("Switch to Dark Mode");
});
