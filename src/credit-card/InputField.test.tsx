import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import InputField from "./InputField"

describe("InputField Component", () => {
  it("renders InputField component with label", () => {
    render(
      <InputField
        label="Test Label"
        name="test"
        type="text"
        value=""
        error=""
        onChange={() => {}}
      />
    )
    const labelElement = screen.getByText("Test Label")
    expect(labelElement).toBeInTheDocument()
  })

  it("displays validation error message when there is an error", () => {
    render(
      <InputField
        label="Test Label"
        name="test"
        type="text"
        value=""
        error="Error message"
        onChange={() => {}}
      />
    )
    const errorElement = screen.getByText("Error message")
    expect(errorElement).toBeInTheDocument()
  })

  it("calls onChange when input value is changed", () => {
    const handleChange = vi.fn()
    render(
      <InputField
        label="Test Label"
        name="test"
        type="text"
        value=""
        error=""
        onChange={handleChange}
      />
    )
    const inputElement = screen.getByRole("textbox")
    fireEvent.change(inputElement, { target: { value: "new value" } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
