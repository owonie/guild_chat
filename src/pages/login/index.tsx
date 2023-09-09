import PageLayout from '../../components/common/Layout/Layout';
import LoginForm from '../../components/login/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <PageLayout>
        <div>slider section</div>
        <div>
          <LoginForm />
        </div>
      </PageLayout>
    </>
  );
};

export default LoginPage;
