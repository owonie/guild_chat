import { useState } from 'react';

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
const phoneRegEx = /^[0-9\b -]{3,13}$/;

// type TabState = 'email' | 'phone';

const LoginForm = () => {
  const [emailError, setEmailError] = useState<boolean>(true);
  const [phoneError, setPhoneError] = useState<boolean>(true);

  // have to make an effect for rerendering -> useState
  const [emailIsAbled, setEmailIsAbled] = useState<boolean>(true);
  const [phoneIsAbled, setPhoneIsAbled] = useState<boolean>(true);

  const validateInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.currentTarget;

    if (target.id === 'inputEmail') {
      if (target.value.length === 0) {
        setEmailIsAbled(true);
        setEmailError(true);
      }
      if (target.value.length > 0) {
        if (emailRegEx.test(target.value)) {
          setEmailError(false);
        } else {
          setEmailError(true);
        }
      }
    }

    if (target.id === 'inputPhone') {
      if (target.value.length === 0) {
        setPhoneIsAbled(true);
        setPhoneError(true);
      }
      if (target.value.length > 0) {
        if (phoneRegEx.test(target.value)) {
          setPhoneError(false);
        } else {
          setPhoneError(true);
        }
      }
    }
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.currentTarget;
    if (target.id === 'inputEmail') {
      if (target.value.length === 0) {
        setEmailIsAbled(true);
      } else {
        setEmailIsAbled(!emailError);
      }
    }
    if (target.id === 'inputPhone') {
      if (target.value.length === 0) {
        setPhoneIsAbled(true);
      } else {
        setPhoneIsAbled(!phoneError);
      }
    }
  };

  return (
    <>
      <div>
        LoginForm
        <div>
          tab
          <button>이메일 주소</button>
          <button>전화번호</button>
        </div>
        <div>
          EmailLogin
          <input
            id='inputEmail'
            type='text'
            onFocus={() => setEmailIsAbled(true)}
            onChange={(e) => validateInputValue(e)}
            onBlur={(e) => handleOnBlur(e)}
          />
          {!emailIsAbled && <div>error!!!!</div>}
        </div>
        <div>
          PhoneLogin
          <input
            id='inputPhone'
            type='text'
            onFocus={() => setPhoneIsAbled(true)}
            onChange={(e) => validateInputValue(e)}
            onBlur={(e) => handleOnBlur(e)}
          />
          {!phoneIsAbled && <div>error!!!!</div>}
        </div>
        <button
          type='submit'
          onClick={() => console.log('login')}
          disabled={emailError}
        >
          다음(이메일)
        </button>
        <button
          type='submit'
          onClick={() => console.log('login')}
          disabled={phoneError}
        >
          다음(폰)
        </button>
        <button>Google</button>
      </div>
    </>
  );
};

export default LoginForm;
