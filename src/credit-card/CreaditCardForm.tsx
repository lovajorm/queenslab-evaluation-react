import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { CreditCardFormData } from "./CreditCard";

type CreditCardProps = {
  creditCardFormData: CreditCardFormData;
  setCreditCardFormData: React.Dispatch<
    React.SetStateAction<CreditCardFormData>
  >;
  onSubmit: (data: CreditCardFormData) => void;
};

const CreditCardForm = ({
  creditCardFormData,
  setCreditCardFormData,
  onSubmit,
}: CreditCardProps) => {
  const [validationError, setValidationError] = useState({
    cardNumber: "",
    cardHolder: "",
    cvv: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let years = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034,
  ];

  // också utanför?
  const validate = async (formData: CreditCardFormData) => {
    if (formData.cardNumber.trim() === "") {
      setValidationError({
        ...validationError,
        cardNumber: "This field can not be empty",
      });
      return;
    }
    if (formData.cardHolder.trim() === "") {
      setValidationError({
        ...validationError,
        cardNumber: "This field can not be empty",
      });
      return;
    }
    if (formData.cvv.trim() === "") {
      setValidationError({
        ...validationError,
        cvv: "This field can not be empty",
      });
      return;
    }
    setValidationError({
      cardNumber: "",
      cardHolder: "",
      cvv: "",
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validate(creditCardFormData);
    onSubmit(creditCardFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="cardNumber">Card Number</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          type="text"
          className={validationError.cardNumber && "validation-error"}
          value={creditCardFormData.cardNumber}
          pattern="\d{4} \d{4} \d{4} \d{4}"
          maxlength="19"
          onChange={(e) => {
            setValidationError({
              ...validationError,
              cardNumber: "",
            });
            setCreditCardFormData({
              ...creditCardFormData,
              cardNumber: e.target.value,
            });
          }}
        />
        {validationError.cardNumber && (
          <div className="validation-error">{validationError.cardNumber}</div>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="cardName">Card Name</Label>
        <Input
          id="cardName"
          name="cardName"
          type="text"
          value={creditCardFormData.cardHolder}
          maxlength="70"
          onChange={(e) => {
            setValidationError({
              ...validationError,
              cardHolder: "",
            });
            setCreditCardFormData({
              ...creditCardFormData,
              cardHolder: e.target.value,
            });
          }}
        />
        {validationError.cardHolder && (
          <div className="validation-error">{validationError.cardHolder}</div>
        )}
      </FormGroup>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <Label for="month">Expiration Date</Label>
          <FormGroup className="d-flex">
            <Input id="month" name="month" type="select" className="month">
              {months.map((month) => (
                <option>{month}</option>
              ))}
            </Input>
            <Input
              className="ms-2 me-3 year"
              id="year"
              name="year"
              type="select"
            >
              {years.map((year) => (
                <option>{year}</option>
              ))}
            </Input>
          </FormGroup>
        </div>
        <FormGroup className="form-group-cvv">
          <Label for="cvv">CVV</Label>
          <Input id="cvv" name="cvv" type="text" pattern="\d*" maxlength="3" />
          {validationError.cvv && (
            <div className="validation-error">{validationError.cvv}</div>
          )}
        </FormGroup>
      </div>
      <Button color="primary">Submit</Button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </Form>
  );
};

export default CreditCardForm;
