import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CreditCard from "./CreditCard";

describe("CreditCard Component", () => {
  it("calls onSubmit with correct data when the form is valid", async () => {
    const onSubmit = vi.fn();
    render(<CreditCard onSubmit={onSubmit} error="" successMessage="" />);
    fireEvent.change(screen.getByLabelText("Card Number"), {
      target: { value: "1234 5678 9012 3456" },
    });
    fireEvent.change(screen.getByLabelText("Card Name"), {
      target: { value: "Alexander The Great" },
    });
    fireEvent.change(screen.getByLabelText("CVV"), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        cardNumber: "1234 5678 9012 3456",
        cardHolder: "Alexander The Great",
        month: "1",
        year: new Date().getFullYear().toString(),
        cvv: "123",
      });
    });
  });
});
