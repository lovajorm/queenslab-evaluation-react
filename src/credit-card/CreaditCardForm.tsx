import { ChangeEvent, useState } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { CreditCardFormData } from "./CreditCard"
import InputField from "./InputField"

type CreditCardProps = {
  creditCardFormData: CreditCardFormData
  setCreditCardFormData: React.Dispatch<
    React.SetStateAction<CreditCardFormData>
  >
  onSubmit: (data: CreditCardFormData) => void
  monthsSelectOptions: number[]
  yearsSelectOptions: number[]
  error: string
  successMessage: string
}

const CreditCardForm = ({
  creditCardFormData,
  setCreditCardFormData,
  onSubmit,
  monthsSelectOptions,
  yearsSelectOptions,
  error,
  successMessage,
}: CreditCardProps) => {
  const [validationError, setValidationError] = useState({
    cardNumber: "",
    cardHolder: "",
    cvv: "",
  })

  const validate = async (formData: CreditCardFormData) => {
    let errors: { [key: string]: string } = {}
    const fieldsToCheck = ["cardNumber", "cardHolder", "cvv"]
    fieldsToCheck.forEach((field) => {
      if (!formData[field as keyof CreditCardFormData].trim()) {
        errors[field] = "This field can not be empty"
      }
    })
    const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/
    if (!cardNumberPattern.test(formData.cardNumber.trim())) {
      errors["cardNumber"] =
        "Card number must be in the format 'XXXX XXXX XXXX XXXX' (16 digits)."
    }
    const cvvPattern = /^\d{3}$/
    if (!cvvPattern.test(formData.cvv.trim())) {
      errors["cvv"] = "CVV must be exactly 3 digits"
    }
    if (Object.keys(errors).length > 0) {
      setValidationError({
        ...validationError,
        ...errors,
      })
      return false
    }
    console.log(formData)
    return true
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isValid = await validate(creditCardFormData)
    if (isValid) {
      onSubmit(creditCardFormData)
    }
  }

  const handleChange = async (
    event: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setValidationError({
      ...validationError,
      [key]: "",
    })
    setCreditCardFormData({
      ...creditCardFormData,
      [key]: event.target.value,
    })
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <InputField
        label="Card Number"
        name="cardNumber"
        type="text"
        value={creditCardFormData.cardNumber}
        pattern="\d{4} \d{4} \d{4} \d{4}"
        maxlength="19"
        onChange={(e) => handleChange(e, "cardNumber")}
        error={validationError.cardNumber}
      />
      <InputField
        label="Card Name"
        name="cardHolder"
        type="text"
        maxlength="70"
        value={creditCardFormData.cardHolder}
        onChange={(e) => handleChange(e, "cardHolder")}
        error={validationError.cardHolder}
      />
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <Label for="month">Expiration Date</Label>
          <FormGroup className="d-flex">
            <Input
              name="month"
              type="select"
              className="month"
              value={creditCardFormData.month}
              onChange={(e) =>
                setCreditCardFormData({
                  ...creditCardFormData,
                  month: e.target.value,
                })
              }
            >
              {monthsSelectOptions.map((month, key) => (
                <option key={key}>{month}</option>
              ))}
            </Input>
            <Input
              className="ms-2 me-3 year"
              name="year"
              type="select"
              value={creditCardFormData.year}
              onChange={(e) =>
                setCreditCardFormData({
                  ...creditCardFormData,
                  year: e.target.value,
                })
              }
            >
              {yearsSelectOptions.map((year, key) => (
                <option key={key}>{year}</option>
              ))}
            </Input>
          </FormGroup>
        </div>
        <InputField
          label="CVV"
          name="cvv"
          type="text"
          pattern="\d*"
          maxlength="3"
          value={creditCardFormData.cvv}
          onChange={(e) => handleChange(e, "cvv")}
          error={validationError.cvv}
        />
      </div>
      <Button color="primary">Submit</Button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </Form>
  )
}

export default CreditCardForm
