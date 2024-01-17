import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"

const CreditCardForm = () => {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  let years = [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034]
  return (
    <Form>
      <FormGroup>
        <Label for="cardNumber">Card Number</Label>
        <Input id="cardNumber" name="cardNumber" type="number" />
      </FormGroup>
      <FormGroup>
        <Label for="cardName">Card Name</Label>
        <Input id="cardName" name="cardName" type="text" />
      </FormGroup>
      <div className="d-flex">
        <Label for="month">Expiration Date</Label>
        <FormGroup className="month d-flex">
          <Input id="month" name="month" type="select">
            {months.map((month) => (
              <option>{month}</option>
            ))}
          </Input>
          {/* </FormGroup>
        <FormGroup className="year"> */}
          {/* <Label for="year">hej</Label> */}
          <Input id="year" name="year" type="select">
            {years.map((year) => (
              <option>{year}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup className="form-group-cvv">
          <Label for="cvv">CVV</Label>
          <Input id="cvv" name="cvv" type="text" />
        </FormGroup>
      </div>
      <Button color="primary">Submit</Button>
    </Form>
  )
}

export default CreditCardForm
