import { FormGroup, Input, Label } from "reactstrap";

type InputProps = {
  inputProps: {
    label: string;
    name: string;
    type: "text" | "number";
    value: string;
    pattern?: string;
    maxlength?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };
  error: string;
};

const InputField = ({ inputProps, error }: InputProps) => {
  return (
    <FormGroup>
      <Label for={inputProps.name}>{inputProps.label}</Label>
      <Input
        id={inputProps.name}
        name={inputProps.name}
        type={inputProps.type}
        pattern={inputProps.pattern}
        value={inputProps.value}
        onChange={inputProps.onChange}
        className={error && "validation-error"}
      />
      {error && <div className="validation-error">{error}</div>}
    </FormGroup>
  );
};
export default InputField;
