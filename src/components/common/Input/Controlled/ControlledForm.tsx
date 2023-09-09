import { useEffect, useState } from 'react';

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

// 제어 컴포넌트로 만들기
const ControlledLoginForm = () => {
  useEffect(() => {
    console.log('re-render!');
  });
  const [inputValueState, setInputValueState] = useState<string>('');
  const [errorState, setErrorState] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueState(e.target.value);
    if (!validate(e.target.value) && !errorState) {
      setErrorState(true);
      return;
    }
    if (validate(e.target.value) && errorState) {
      setErrorState(false);
      return;
    }
  };

  const handleButtonClick = () => {
    console.log(`Submit ${inputValueState}`);
  };

  // if? 실시간 유효성 검사를 해야한다.
  const validate = (value: string): boolean => {
    return emailRegEx.test(value);
  };

  return (
    <>
      ControlledForm
      <div>
        <input
          id='inputEmail'
          type='text'
          value={inputValueState}
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={() => handleButtonClick()} disabled={errorState}>
          다음(제어)
        </button>
      </div>
    </>
  );
};

export default ControlledLoginForm;
