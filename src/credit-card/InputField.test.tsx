import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import InputField from "./InputField";

describe("InputField Component", () => {
  it("renders InputField component with label", () => {
    render(
      <InputField
        inputProps={{
          label: "Test Label",
          name: "test",
          type: "text",
          value: "",
          onChange: () => {},
        }}
        error=""
      />
    );
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeTruthy();
  });
  it("displays validation error message when there is an error", () => {
    render(
      <InputField
        inputProps={{
          label: "Test Label",
          name: "test",
          type: "text",
          value: "",
          onChange: () => {},
        }}
        error="Error message"
      />
    );
    const errorElement = screen.getByText("Error message");
    expect(errorElement).toBeTruthy();
  });
  it("calls onChange when input changes", () => {
    const handleChange = vi.fn();
    render(
      <InputField
        inputProps={{
          label: "CVV",
          name: "cvv",
          type: "text",
          value: "",
          onChange: (e) => handleChange(e, "cvv"),
        }}
        error=""
      />
    );
    const inputElement = screen.getByLabelText("CVV");
    fireEvent.change(inputElement, { target: { value: "123" } });
    expect(handleChange).toHaveBeenNthCalledWith(1, expect.anything(), "cvv");
  });
});
