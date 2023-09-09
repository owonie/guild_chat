type ValidateInputValueType = {
  label: string;
  inputId: string;
  validated: boolean;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  validateInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFormComponent = (props: ValidateInputValueType) => {
  return (
    <div>
      {props.label}
      <input
        id={props.inputId}
        key={`${props.inputId}InputUniqueKey`}
        type='text'
        onChange={(e) => props.validateInputValue(e)}
      />
      <button
        id={props.inputId}
        disabled={props.validated}
        onClick={(e) => props.handleSubmit(e)}
      >
        확인
      </button>
    </div>
  );
};

export default InputFormComponent;
