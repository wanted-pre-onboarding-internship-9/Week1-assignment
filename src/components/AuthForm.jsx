import { useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { userApis } from "../apis/user";
import { FormReducer, initialStateForm } from "../reducers/formReducer";



export default function AuthForm({ type }) {
    const navigate = useNavigate();
    const [formState, dispatch] = useReducer(FormReducer, initialStateForm);

    //submit
    const onSubmit = async (e) => {
        e.preventDefault();
        userApis.authAX(type, {
            email: formState.email,
            password: formState.password,
        }).then(() => {
            if (type === "signin") navigate("/todo");
            else {
                alert("회원가입 완료!");
                navigate("/signin");
            }
            dispatch({ type: "reset" });
        }).catch(() => {
            dispatch({ type: "reset" });
        });
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type="email"
                data-testid="email-input"
                placeholder="이메일을 입력해주세요."
                onChange={(e) => dispatch({ type: "email", value: e.target.value })}
                value={formState.email}
            />
            <StValitext textColor={"#f96854"}>{!formState.isEmail && formState.email !== "" && "Email 형식이 아니에요."}</StValitext>
            <input
                type="password"
                data-testid="password-input"
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => dispatch({ type: "password", value: e.target.value })}
                value={formState.password}
                autoComplete="off"
            />
            <StValitext textColor={"#f96854"}>{!formState.isPassword && formState.password !== "" && "비밀번호를 8자 이상 입력해주세요."}</StValitext>
            {type === "signin" ? (
                <>
                    <button
                        type="submit"
                        data-testid="signin-button"
                        disabled={!(formState.isEmail && formState.isPassword)}
                    >
                        로그인
                    </button>
                    <Link to="/signup"> 회원가입 </Link>
                </>
            ) : (
                <>
                    <button
                        type="submit"
                        data-testid="signup-button"
                        disabled={!(formState.isEmail && formState.isPassword)}
                    >
                        회원가입
                    </button>
                    <Link to="/signin"> 이미 계정이 있으신가요? 로그인 </Link>
                </>
            )}
        </form>
    );
}

const StValitext = styled.div`
  font-size: 0.7rem;
  color: ${(props) => props.textColor};
`
