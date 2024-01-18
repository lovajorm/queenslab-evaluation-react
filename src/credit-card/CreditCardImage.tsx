import { useEffect } from "react";
import { CreditCardFormData } from "./CreditCard";

type CreditCardProps = {
  creditCardFormData: CreditCardFormData;
  setCreditCardFormData: React.Dispatch<
    React.SetStateAction<CreditCardFormData>
  >;
};
const CreditCardImage = ({
  creditCardFormData,
  setCreditCardFormData,
}: CreditCardProps) => {
  useEffect(() => {
    setCreditCardFormData(creditCardFormData);
  }, [creditCardFormData]);

  return (
    <div className="credit-card-card m-3 d-flex flex-column justify-content-between">
      <div className="credit-card-card-logo d-flex justify-content-between">
        <div>Debit</div>
        <img src="/assets/visa.png" alt="Visa logo" />
      </div>

      <div className="credit-card-card-chip">
        <img src="/assets/chip.png" alt="Visa logo" />
      </div>

      <div className="credit-card-card-number animated-text">
        {creditCardFormData.cardNumber}
      </div>

      <div className="credit-card-card-details d-flex justify-content-between">
        <div className="d-flex flex-column">
          <div className="credit-card-holder">Card Holder</div>
          <div className="credit-card-name">
            {creditCardFormData.cardHolder}
          </div>
        </div>
        <div className="credit-card-card-expiry">
          <span className="expires">Expires</span>
          <span className="date">12/34</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardImage;
