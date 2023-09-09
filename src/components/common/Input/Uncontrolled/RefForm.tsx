import { useEffect, useRef, useState } from 'react';

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

// 비제어 컴포넌트로 만들기
const UncontrolledLoginForm = () => {
  useEffect(() => {
    console.log('re-render!');
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorState, setErrorState] = useState<boolean>(true);

  const handleInputChange = (): void => {
    if (inputRef.current) {
      setErrorState(!validate(inputRef.current.value));
    }
  };

  const handleButtonClick = (): void => {
    if (inputRef.current) {
      console.log(`Submit ${inputRef.current.value}`);
    }
  };

  const validate = (value: string): boolean => {
    return emailRegEx.test(value);
  };

  return (
    <>
      UncontrolledForm
      <div>
        <input
          id='inputEmail'
          type='text'
          onChange={() => handleInputChange()}
          ref={inputRef}
        />
        <button onClick={() => handleButtonClick()} disabled={errorState}>
          다음(비제어)
        </button>
      </div>
    </>
  );
};

export default UncontrolledLoginForm;
