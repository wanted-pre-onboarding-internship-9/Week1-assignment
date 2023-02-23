import AuthForm from "../components/sign/AuthForm";


export default function SignupPage() {
    return (
        <>
            <h1>회원가입</h1>
            <AuthForm type="signup" />
        </>
    );
}