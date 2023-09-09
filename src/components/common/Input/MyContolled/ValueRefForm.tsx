import { useEffect, useRef, useState } from 'react';

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

// 내 제어 컴포넌트로 만들기
const MycontrolledLoginForm = () => {
  useEffect(() => {
    console.log('re-render!');
  });

  const inputValueRef = useRef<string>('');
  const [errorState, setErrorState] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValueRef.current = e.target.value;
    setErrorState(!validate(inputValueRef.current));
  };

  const handleButtonClick = () => {
    console.log(`Submit ${inputValueRef.current}`);
  };

  const validate = (value: string): boolean => {
    return emailRegEx.test(value);
  };

  return (
    <>
      MyControlledForm
      <div>
        <input
          id='inputEmail'
          type='text'
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={() => handleButtonClick()} disabled={errorState}>
          다음(내제어)
        </button>
      </div>
    </>
  );
};

export default MycontrolledLoginForm;
