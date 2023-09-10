import PageLayout from '../../components/common/Layout/Layout';
import SigninForm from '../../components/signin/SigninForm/SigninForm';

const SigninPage = () => {
  return (
    <>
      <PageLayout>
        <div>slider section</div>
        <div>
          <SigninForm />
        </div>
      </PageLayout>
    </>
  );
};

export default SigninPage;
