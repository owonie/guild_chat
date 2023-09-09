type ValidateInputValueType = {
  label: string;
  inputId: string;
  validated: boolean;
  validateInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFormComponent = (props: ValidateInputValueType) => {
  return (
    <div>
      {props.label}
      <input
        id={props.inputId}
        key={`${props.inputId}+UniqueKey`}
        type='text'
        onChange={(e) => props.validateInputValue(e)}
      />
      <button disabled={props.validated}>확인</button>
    </div>
  );
};

export default InputFormComponent;
