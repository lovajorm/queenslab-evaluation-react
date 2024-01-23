import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CreditCardImage from "./CreditCardImage";

describe("CreditCardImage Component", () => {
  it("renders the credit card information and images correctly", () => {
    const mockFormData = {
      cardNumber: "1234 5678 9012 3456",
      cardHolder: "Alexander The Great",
      month: "12",
      year: "34",
      cvv: "123",
    };

    render(
      <CreditCardImage
        creditCardFormData={mockFormData}
        setCreditCardFormData={() => {}}
      />
    );

    expect(screen.getByText(mockFormData.cardNumber)).toBeTruthy();
    expect(screen.getByText(mockFormData.cardHolder)).toBeTruthy();
    expect(screen.getByText("12/34")).toBeTruthy();

    const visaLogo = screen.getByAltText("Visa logo") as HTMLImageElement;
    expect(visaLogo.src).toContain("/assets/visa.png");

    const chipImage = screen.getByAltText("Chip Image") as HTMLImageElement;
    expect(chipImage.src).toContain("/assets/chip.png");
  });
});
