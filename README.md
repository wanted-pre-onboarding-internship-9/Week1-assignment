# 1주차 과제
> 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의
Best Pratice를 도출하고, 그것들을 연결해서 합치면 결국 팀원 모두가 가장 좋다고 생각하는 방식으로 이루어진 하나의 결과물을 만들어주세요

<br/>

## [🔗 배포 URL](https://week1-assignment-bice.vercel.app/)

<br/>

## 📚 팀원들과 고민한 사항 

 <details>
    <summary>1. 로그인 여부에 따른 리다이렉트 처리</summary>
    <h3 style="background-color:#fff5b1"><b>❓팀원들과 고민한 방법</b></h3>
    <div>1. react router dom의 loader를 사용한 redirect 처리.</div>
    <div>2. Context API의 전역 상태를 통한 redirect 처리.</div>
    <div>3. 각 page component에서 storage token 확인 후 redirect 처리.</div>
    <hr/>
    <h3 style="background-color:#fff5b1"><b>👍🏻 Best Practice</b><h3>
	<h4>
	react router dom의 loader를 통한 redirect 처리 방법  
	<a href="https://github.com/wanted-pre-onboarding-internship-9/week1-assignment/blob/main/src/shared/Router.jsx">
	[redirect 코드 보러가기]
	</a> 
	</h4>
    <p>
	router dom의 loader에서 데이터를 반환하는 것 외에도, 각 경로를 렌더링하기 전에 사용자를 다른 경로로 redirection할 수 있어 컴포넌트의 불필요한 렌더링을 줄일 수 있었습니다. 또한 각 컴포넌트에 별도의 토큰 정보를 확인할 필요가 없으며, router에서 경로 처리를 한번에 관리할 수 있어서 선택하게 되었습니다.
	</p>
    <p>참고 : https://reactrouter.com/en/main/start/overview#redirects </p>   
</details>

 <details>
    <summary>2. 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사</summary>
    <h3 style="background-color:#fff5b1"><b>❓팀원들과 고민한 방법</b></h3>
    <div>1. 각 input의 useState를 통해 value의 유효성 검사를 진행.</div>
    <div>2. useReducer hook을 통해 input value의 유효성 검사를 진행.</div>
    <div>3. custom hook을 통해 input value의 유효성 검사를 진행.</div>
    <hr/>
    <h3 style="background-color:#fff5b1"><b>👍🏻 Best Practice</b><h3>
	<h4>
	useReducer를 통해 input value의 유효성 검사를 진행  
	<a href="https://github.com/wanted-pre-onboarding-internship-9/week1-assignment/blob/main/src/reducers/formReducer.js"> 
	[useReducer 코드 보러가기]
	</a>
	<a href="https://github.com/wanted-pre-onboarding-internship-9/week1-assignment/blob/main/src/components/sign/AuthForm.jsx">  
	[AuthForm 코드 보러가기]
	</a>
	</h4>
    <p>
useReducer와 custom hook 두 가지 모두 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있었습니다. 다만 컴포넌트에서 관리하는 값이 여러 개가 되어 상태의 구조가 복잡해진다면 useReducer를 사용하여 조금 더 직관적인 state 관리를 할 수 있으며, 로그인과 회원가입을 하나의 AuthForm으로 관리하기 때문에 custom hook 보다는 useReducer를 사용하여 input의 유효성 검사를 진행하게 되었습니다.
	</p>
    	<p> 참고 : https://ko.reactjs.org/docs/hooks-reference.html#usereducer</p>
   	<p> 참고 : https://www.zigae.com/state-vs-reducer/</p>
</details>

 <details>
    <summary>3.todo data 상태관리</summary>
    <h3 style="background-color:#fff5b1"><b>❓팀원들과 고민한 방법</b></h3>
   <div>1. useReducer에서 API 요청 함수를 묶어서 사용해 볼까요?</div>
    <div>2. context hook을 사용해 todo data의 상태관리를 하는건 어떤가요?</div>
    <hr/>
    <h3 style="background-color:#fff5b1"><b>👍🏻 Best Practice</b><h3>
	<h4>
	context hook + useReducer를 통한 상태를 관리합니다  
	<a href="https://github.com/wanted-pre-onboarding-internship-9/week1-assignment/blob/main/src/pages/TodoPage.jsx"> 
	[useContext 코드 보러가기]  
	</a>
	<a href="https://github.com/wanted-pre-onboarding-internship-9/week1-assignment/blob/main/src/reducers/todoReducer.js">
	[useReducer 코드 보러가기]
	</a>
	</h4>
    <p>
CRUD 요청의 res data를 활용하여 불필요한 API 요청을 줄이고, todo 데이터의 상태관리를 위해 useReducer를 사용했습니다. useReducer에서 API 요청을 한 번에 처리하려고 시도했지만, useReducer는 순수 함수로만 작동해야 하므로 별도의 API 요청 함수를 구현했습니다. 또한, useContext에 useReducer를 접목하여 불필요한 props를 줄이고 상태관리를 할 수 있는 방법을 생각했습니다.
</p>
    <p> 참고 : https://velog.io/@allenk/useReducer%EB%A1%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%A1%9C%EC%A7%81-%EB%8B%A4%EB%A3%A8%EA%B8%B0</p>    
</details>

<br/>

## 🧑🏻‍🏫 협업 방법
>빠른 소통과 업무 협업을 위해 `슬랙` 채널을 사용합니다.
1. 기능별로 팀원 개개인의 `코드 리뷰`를 실시합니다.
2. 토론을 통해 `best practice를 선정`합니다.
3. 화면 공유를 통해 `페어 프로그래밍`을 합니다.

<br/>

## 📖 Commit Message Prefix

- `Feat`: 새로운 기능 추가
- `Fix`: 버그 수정
- `Docs`: 문서 수정
- `Style`: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락 등)
- `Refactor`: 코드 리팩토링
- `Test`: 테스트 코드, 리펙토링 테스트 코드 추가
- `Chore`: 빌드 업무 수정, 패키지 매니저 수정(.gitignore 수정 등)

<br/>

## 📖 Git Convention &  History 관리 
> 1일차~2일차 :  팀원 모두가 함께 작업한 파일은 Commit Message 를 통해 master(main) branch에서 작업합니다.

> 3일차 : 이후 추가적인 코드 변경은 develop에서 신규 feature branch or issues branch 를 만들어 작업 후 PR 합니다 

- 안쓰는 코드들(콘솔, 주석)은 쌓아두지 말고 지워주세요!
- Pull → Commit → Push 순서로 작업해주세요!
- Push 전 코드를 실행하여 에러를 먼저 확인한 후, PR해요!
- PR을 거쳐 모든 팀원들이 승인 및 코드리뷰 후, merge 합니다. conflict 해결은 모든 팀원이 함께 참여해요!
- PR승인 후 squash and merge 를 하여 커밋을 합쳐주세요 > merge 된 branch는 꼭 삭제 해주세요! 
   (*develop branch는 개발 branch입니다. 삭제하지 말아주세요)

<br/>

## 📖 사용 라이브러리
``` axios```
``` react-router-dom```
``` styled-components```

<br/>

## 🗂️ 폴더구조
```bash
ㄴ 📁 apis
   ㄴ 📄 instance.js
   ㄴ 📄 todo.js  
   ㄴ 📄 user.js 
ㄴ 📁 commons
   ㄴ 📄 validation.js
ㄴ 📁 components
   ㄴ 📁 sign
      ㄴ 📄 AuthForm.jsx  
   ㄴ 📁 todo
      ㄴ 📄 Todo.jsx
      ㄴ 📄 TodoCreate.jsx   
      ㄴ 📄 TodoList.jsx   
ㄴ 📁 pages
   ㄴ 📄 SigninPage.jsx
   ㄴ 📄 SignupPage.jsx
   ㄴ 📄 TodoPage.jsx
ㄴ 📁 reducers
   ㄴ 📄 formReducer.js
   ㄴ 📄 todoReducer.js
ㄴ 📁 shared 
   ㄴ 📄 Router.jsx
```

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


