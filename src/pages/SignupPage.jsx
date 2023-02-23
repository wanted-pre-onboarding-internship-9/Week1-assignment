import styled from "styled-components";
import AuthForm from "../components/AuthForm";


export default function SignupPage() {
    return (
        <>
            <h1>회원가입</h1>
            <AuthForm type="signup" />
        </>
    );
}