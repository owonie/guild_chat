import { useState } from 'react';

const PasswordInputForm = () => {
  const [passwordIsVisiable, setPasswordIsVisiable] = useState<boolean>(false);

  return (
    <div>
      <input id='password' type={passwordIsVisiable ? 'text' : 'password'} />
      <button onClick={() => setPasswordIsVisiable(!passwordIsVisiable)}>
        {passwordIsVisiable ? <div>On</div> : <div>Off</div>}
      </button>
      <button>다음(패스워드)</button>
    </div>
  );
};

export default PasswordInputForm;
