import { useState } from "react";
import CreditCardForm from "./CreaditCardForm";
import CreditCardImage from "./CreditCardImage";

export type CreditCardFormData = {
  cardNumber: string;
  cardHolder: string;
  month: string;
  year: string;
  cvv: string;
};

type Props = {
  onSubmit: (data: CreditCardFormData) => void;
};

const CreditCard = ({ onSubmit }: Props) => {
  const [creditCardFormData, setCreditCardFormData] =
    useState<CreditCardFormData>({
      cardNumber: "",
      cardHolder: "",
      month: "",
      year: "",
      cvv: "",
    });

  return (
    <div className="creadit-card-component d-flex flex-column align-items-center">
      <CreditCardImage
        creditCardFormData={creditCardFormData}
        setCreditCardFormData={setCreditCardFormData}
      />
      <div className="credit-card-form">
        <CreditCardForm
          onSubmit={onSubmit}
          creditCardFormData={creditCardFormData}
          setCreditCardFormData={setCreditCardFormData}
        />
      </div>
    </div>
  );
};

export default CreditCard;
