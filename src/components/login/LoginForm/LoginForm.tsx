import { useState, useRef } from 'react';
import PasswordInputForm from './PasswordInputForm';
import InputFormComponent from './InputFormComponent';
import TabComponent from '../../common/Tab/TabComponent';
import {
  InputErrorsState,
  InputValueObject,
  LoginRegEx,
} from './LoginForm.type';

const loginRegEx: LoginRegEx = {
  email:
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
  phone: /^[0-9\b -]{3,13}$/,
};

const LoginForm = () => {
  const [tabState, setTabState] = useState<string>('emailLogin');
  const [inputErrors, setInputErrors] = useState<InputErrorsState>({
    email: true,
    phone: true,
  });
  const inputValueRef = useRef<InputValueObject>({});

  const validateInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.currentTarget;
    const hasError = inputErrors[target.id];
    const regEx = loginRegEx[target.id];
    if (
      (regEx.test(target.value) && hasError) ||
      (!regEx.test(target.value) && !hasError)
    ) {
      setInputErrors((prevState) => {
        return { ...prevState, [target.id]: !hasError };
      });
      return;
    }

    inputValueRef.current[target.id] = target.value;
    console.log(inputValueRef.current);
  };

  return (
    <>
      <PasswordInputForm />
      {tabState}
      <TabComponent
        menuList={['emailLogin', 'phoneLogin']}
        setTabState={setTabState}
      />
      {tabState === 'emailLogin' ? (
        <InputFormComponent
          label={'EmailLogin'}
          inputId={'email'}
          validateInputValue={validateInputValue}
          validated={inputErrors['email']}
        />
      ) : (
        <InputFormComponent
          label={'PhoneLogin'}
          inputId={'phone'}
          validateInputValue={validateInputValue}
          validated={inputErrors['phone']}
        />
      )}
    </>
  );
};

export default LoginForm;
