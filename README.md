# 1주차 과제
> 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의
Best Pratice를 도출하고, 그것들을 연결해서 합치면 결국 팀원 모두가 가장 좋다고 생각하는 방식으로 이루어진 하나의 결과물을 만들어주세요

<br/>

## ⚙️ 프로젝트의 실행 방법

> 💡주의 : 해당 프로젝트의 API URL .env에서 REACT_APP_BASE_URL로 설정되어 로컬에서 정상 동작되지 않을 수 있습니다.

**Install**
```bash
npm install
or
yarn install
```

**Build**
```bash
npm run Build
or
yarn Build
```

**Start**
```bash
npm start
or
yarn start
```
<br/>

## 📚 팀원들과 고민한 사항 
1. 로그인 여부에 따른 리다이렉트 처리
    <details>
    <summary>팀원들과 고민한 방법</summary>
    <div>1. react router dom의 loader를 사용한 redirect 처리.</div>
    <div>2. Context API의 전역 상태를 통한 redirect 처리.</div>
    <div>3. 각 page component에서 storage token 확인 후 redirect 처리.</div>
    <br/>
    💡`Best Practice` react router dom의 loader를 통한 redirect 처리 방법

        router dom의 loader에서 데이터를 반환하는 것 외에도, 각 경로를 렌더링하기 전에 사용자를 다른 경로로 redirection할 수 있어 컴포넌트의 불필요한 렌더링을 줄일 수 있었습니다.
        또한 각 컴포넌트에 별도의 토큰 정보를 확인할 필요가 없으며, router에서 경로 처리를 한번에 관리할 수 있어서 선택하게 되었습니다.

    참고 : https://reactrouter.com/en/main/start/overview#redirects
    
</details>

2. 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사 기능을 구현합니다.
    <details>
    <summary>팀원들과 고민한 방법</summary>
    <div>1. 각 input의 useState를 통해 value의 유효성 검사를 진행.</div>
    <div>2. useReducer hook을 통해 input value의 유효성 검사를 진행.</div>
    <div>3. custom hook을 통해 input value의 유효성 검사를 진행.</div>
    <br/>
    💡`Best Practice` useReducer를 통해 input value의 유효성 검사를 진행합니다.

        useReducer와 custom hook 두 가지 모두 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있었습니다. 다만 컴포넌트에서 관리하는 값이 여러 개가 되어 상태의 구조가 복잡해진다면 useReducer를 사용하여 조금 더 직관적인 state 관리를 할 수 있으며, 로그인과 회원가입을 하나의 AuthForm으로 관리하기 때문에 custom hook 보다는 useReducer를 사용하여 input의 유효성 검사를 진행하게 되었습니다.

    참고 :https://ko.reactjs.org/docs/hooks-reference.html#usereducer
    <br/>참고 :https://www.zigae.com/state-vs-reducer/
    
</details>

3. todo data 상태관리
    <details>
    <summary>팀원들과 고민한 방법</summary>
    <div>1. useReducer에서 API 요청 함수를 묶어서 사용해 볼까요?</div>
    <div>2. context hook을 사용해 todo data의 상태관리를 하는건 어떤가요?</div>
    <br/>
    💡`Best Practice` context hook + useReducer를 통한 상태를 관리합니다.
      
        CRUD 요청의 res data를 활용하여 불필요한 API 요청을 줄이고, todo 데이터의 상태관리를 위해 useReducer를 사용했습니다. useReducer에서 API 요청을 한 번에 처리하려고 시도했지만, useReducer는 순수 함수로만 작동해야 하므로 별도의 API 요청 함수를 구현했습니다. 또한, useContext에 useReducer를 접목하여 불필요한 props를 줄이고 상태관리를 할 수 있는 방법을 생각했습니다.
</details>
    
<br/>

## 📖 라이브러리
- axios
- react-router-dom
- styled-components

<br/>

## 폴더구조
![image](https://user-images.githubusercontent.com/90454621/220914729-b57cd8d7-b9b8-4483-bac2-4eb144748cff.png)