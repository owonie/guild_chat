import { useState, useRef } from 'react';
import { handlers } from '../../../mocks/handlers';

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
const phoneRegEx = /^[0-9\b -]{3,13}$/;

type TabState = 'tabEmail' | 'tabPhone';
type IdValueObject = {
  [key: string]: string;
  inputEmail: string;
  inputPhone: string;
};

const LoginForm = () => {
  const apis = handlers;

  const [emailError, setEmailError] = useState<boolean>(true);
  const [phoneError, setPhoneError] = useState<boolean>(true);
  const [tabState, setTabState] = useState<TabState>('tabEmail');
  const [passwordIsVisiable, setPasswordIsVisiable] = useState<boolean>(false);

  // have to make an effect for rerendering -> useState
  const [emailIsAbled, setEmailIsAbled] = useState<boolean>(true);
  const [phoneIsAbled, setPhoneIsAbled] = useState<boolean>(true);

  const idValueRef = useRef<IdValueObject>({ inputEmail: '', inputPhone: '' });

  const verifyEmail = () => {
    const res = apis[0];
    console.log(idValueRef.current['inputEmail']);
    console.log(res);
  };

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
    idValueRef.current[target.id] = target.value;
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
          {tabState}
          <button
            id='tabEmail'
            onClick={() => {
              setTabState('tabEmail');
              console.log(idValueRef.current);
            }}
          >
            이메일 주소
          </button>
          <button
            id='tabPhone'
            onClick={() => {
              setTabState('tabPhone');
              console.log(idValueRef.current);
            }}
          >
            전화번호
          </button>
        </div>
        {tabState === 'tabEmail' ? (
          <div>
            EmailLogin
            <input
              id='inputEmail'
              type='text'
              onFocus={() => setEmailIsAbled(true)}
              onChange={(e) => validateInputValue(e)}
              onBlur={(e) => handleOnBlur(e)}
              defaultValue={idValueRef.current['inputEmail']}
              key={'inputEmailKeyValue'}
            />
            {!emailIsAbled && <div>유효한 이메일 주소를 입력하세요.</div>}
            <button
              type='submit'
              onClick={() => verifyEmail()}
              disabled={emailError}
            >
              다음(이메일)
            </button>
          </div>
        ) : (
          <div>
            PhoneLogin
            <input
              id='inputPhone'
              type='text'
              onFocus={() => setPhoneIsAbled(true)}
              onChange={(e) => validateInputValue(e)}
              onBlur={(e) => handleOnBlur(e)}
              defaultValue={idValueRef.current['inputPhone']}
              key={'inputPhoneKeyValue'}
            />
            {!phoneIsAbled && <div>유효한 전화번호를 입력하세요.</div>}
            <button
              type='submit'
              onClick={() => console.log('login')}
              disabled={phoneError}
            >
              다음(폰)
            </button>
          </div>
        )}
        <button>Google</button>
      </div>
      <div>
        <input id='password' type={passwordIsVisiable ? 'text' : 'password'} />
        <button onClick={() => setPasswordIsVisiable(!passwordIsVisiable)}>
          {passwordIsVisiable ? <div>On</div> : <div>Off</div>}
        </button>
        <button>다음(패스워드)</button>
      </div>
    </>
  );
};

export default LoginForm;
