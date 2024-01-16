import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import CreditCardForm from "./CreaditCardForm";
import CreditCardImage from "./CreditCardImage";

type CreditCardProps = {
  cardNumber: string;
  cardHolder: string;
};

const CreditCard = ({ cardNumber, cardHolder }: CreditCardProps) => {
  return (
    <div className="creadit-card-component">
      <CreditCardImage />
      <div className="credit-card-form">
        <CreditCardForm />
      </div>
    </div>
  );
};

export default CreditCard;
