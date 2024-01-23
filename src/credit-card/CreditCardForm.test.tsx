import { render, screen, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import CreditCardForm from "./CreaditCardForm";

describe("CreditCardForm Component", () => {
  it("do not show validationmessages when the form is valid", async () => {
    const onSubmit = vi.fn();
    let mockFormData = {
      cardNumber: "",
      cardHolder: "",
      month: "1",
      year: "2022",
      cvv: "",
    };
    const setCreditCardFormData = vi.fn((newData) => {
      mockFormData = { ...mockFormData, ...newData };
    });

    render(
      <CreditCardForm
        creditCardFormData={mockFormData}
        setCreditCardFormData={setCreditCardFormData}
        onSubmit={onSubmit}
        monthsSelectOptions={[1, 2, 3, 4]}
        yearsSelectOptions={[2022, 2023, 2024, 2025]}
        error=""
        successMessage=""
      />
    );
    const cardNumberInput = screen.getByLabelText("Card Number");
    fireEvent.type(cardNumberInput, "1234 5678 9012 3456");
    const cardHolderInput = screen.getByLabelText("Card Name");
    fireEvent.type(cardHolderInput, "Alexander The Great");
    const cvvInput = screen.getByLabelText("CVV");
    fireEvent.type(cvvInput, "123");
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(submitButton);

    const cardNumberError = screen.queryByText(
      "Card number must be in the format 'XXXX XXXX XXXX XXXX' (16 digits)."
    );
    await waitFor(() => {
      expect(cardNumberError).not.toBeTruthy();
    });
  });
});
