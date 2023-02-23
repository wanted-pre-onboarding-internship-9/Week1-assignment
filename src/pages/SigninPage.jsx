import AuthForm from "../components/AuthForm";

export default function SigninPage() {
    return (
        <>
            <h1>로그인</h1>
            <AuthForm type="signin" />
        </>
    );
}