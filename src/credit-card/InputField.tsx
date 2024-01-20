import { FormGroup, Input, Label } from "reactstrap"

type InputProps = {
  label: string
  name: string
  type: "text" | "number"
  value: string
  error: string
  pattern?: string
  maxlength?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const InputField = ({
  label,
  name,
  type,
  pattern,
  value,
  onChange,
  error,
}: InputProps) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        pattern={pattern}
        value={value}
        onChange={onChange}
        className={error && "validation-error"}
      />
      {error && <div className="validation-error">{error}</div>}
    </FormGroup>
  )
}
export default InputField
