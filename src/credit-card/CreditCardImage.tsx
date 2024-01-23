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
      <div className="card-logo d-flex justify-content-between">
        <div>Debit</div>
        <img src="/assets/visa.png" alt="Visa logo" />
      </div>
      <div className="card-chip">
        <img src="/assets/chip.png" alt="Chip Image" />
      </div>
      <div className="card-number animated-text">
        {creditCardFormData.cardNumber}
      </div>
      <div className="card-details d-flex justify-content-between">
        <div className="d-flex flex-column">
          <div className="card-holder">Card Holder</div>
          <div>{creditCardFormData.cardHolder}</div>
        </div>
        <div className="card-expiry">
          <span className="expires">Expires</span>
          <span className="date">12/34</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardImage;
