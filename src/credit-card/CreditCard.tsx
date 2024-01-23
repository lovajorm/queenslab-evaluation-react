import { useState } from "react";
import CreditCardForm from "./CreaditCardForm";
import CreditCardImage from "./CreditCardImage";
import "./creditCard.css";
import "../fonts/fonts.css";

export type CreditCardFormData = {
  cardNumber: string;
  cardHolder: string;
  month: string;
  year: string;
  cvv: string;
};

type Props = {
  onSubmit: (data: CreditCardFormData) => void;
  error: string;
  successMessage: string;
};

const CreditCard = ({ onSubmit, error, successMessage }: Props) => {
  const [creditCardFormData, setCreditCardFormData] =
    useState<CreditCardFormData>({
      cardNumber: "",
      cardHolder: "",
      month: "1",
      year: new Date().getFullYear().toString(),
      cvv: "",
    });

  const monthsSelectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let yearsSelectOptions = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i <= 10; i++) {
    yearsSelectOptions.push(currentYear + i);
  }

  return (
    <div className="creadit-card-component d-flex flex-column align-items-center">
      <CreditCardImage
        creditCardFormData={creditCardFormData}
        setCreditCardFormData={setCreditCardFormData}
      />
      <div className="credit-card-form mt-3">
        <CreditCardForm
          onSubmit={onSubmit}
          creditCardFormData={creditCardFormData}
          setCreditCardFormData={setCreditCardFormData}
          monthsSelectOptions={monthsSelectOptions}
          yearsSelectOptions={yearsSelectOptions}
          error={error}
          successMessage={successMessage}
        />
      </div>
    </div>
  );
};

export default CreditCard;
