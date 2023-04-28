![header](https://capsule-render.vercel.app/api?type=Rounded&color=auto&height=150&section=header&text=wanted-pre-onboarding-frontend&fontSize=40)

## 과제 설명

```
원티드 프리온보딩 프론트엔드 인턴십 Week 1. 멘토 과제
원티드 프리온보딩 프론트엔드 인턴십 선발 과제에서 문제 해결이나 기술을 논의 후
동료학습을 통해 Best Pratice을 만들어 제출.
```

## 사용 라이브러리

- React Router
- Axios
- Styled Components

## 파일 구조

```bash
📦src
 ┣ 📂api
 ┃ ┣ 📜AuthApi.ts
 ┃ ┗ 📜TodoApi.ts
 ┣ 📂components
 ┃ ┣ 📂HOC
 ┃ ┃ ┗ 📜AuthHOC.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┃ ┗ 📜button.style.ts
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┣ 📜SignForm.tsx
 ┃ ┃ ┃ ┗ 📜signForm.style.ts
 ┃ ┃ ┗ 📂input
 ┃ ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┃ ┗ 📜input.style.ts
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┣ 📜TodoForm.tsx
 ┃ ┃ ┃ ┗ 📜todoForm.style.ts
 ┃ ┃ ┣ 📂item
 ┃ ┃ ┃ ┣ 📜TodoItem.tsx
 ┃ ┃ ┃ ┗ 📜todoItem.style.ts
 ┃ ┃ ┗ 📜TodoList.tsx
 ┣ 📂constant
 ┃ ┗ 📜constant.ts
 ┣ 📂globalstyle
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜useAuth.ts
 ┃ ┣ 📂form
 ┃ ┃ ┗ 📜useForm.ts
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📜useTodoForm.ts
 ┃ ┃ ┣ 📜useTodoItem.ts
 ┃ ┃ ┗ 📜useTodoList.ts
 ┣ 📂lib
 ┃ ┗ 📜customAxios.ts
 ┣ 📂pages
 ┃ ┣ 📜404Page.tsx
 ┃ ┣ 📜PageStyles.tsx
 ┃ ┣ 📜SignInPage.tsx
 ┃ ┣ 📜SignUpPage.tsx
 ┃ ┣ 📜TodoPage.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂router
 ┃ ┗ 📜index.tsx
 ┣ 📂types
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📂todo
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂button
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂form
 ┃ ┃ ┗ 📜formData.type.ts
 ┃ ┣ 📂input
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂todo
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜token.ts
 ┃ ┗ 📜validation.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```

## ⭐️ Best Practice 선정 과정

**💡 TODO API 관련 논의**

- TODO List에서 TODO를 추가, 업데이트, 삭제할 때 매번 다시 패치할 것인지, state를 변화시켜 API 요청을 줄일 것인지 논의
  - 추가, 텍스트 업데이트는 새로 API 요청으로 정확성 유지
  - 체크박스 업데이트, 삭제는 state 관리로 API 요청 줄이기
- TODO 추가에서 256자 이상의 긴 문자열을 보냈을 때 잘리는 현상이 발견
  - Client 단에서 input 시 글자수를 255자 이하로 제한하기로 결정

**💡 TypeScript 논의**

- 이번 과제에 TypeScript를 도입할지에 대해 논의
  - 이번 과제를 통해 TypeScript를 한 번도 사용해보지 않았던 팀원이 이를 알아가는 좋은 계기가 될 수 있겠다 생각
  - 추후 진행할 기업 과제나 앞으로의 확장된 프로젝트를 위해 유익한 TypeScript를 도입하기로 결정

**💡 스타일 관련 논의**

- styled-component를 사용하며 추후 ( ~ ) 를 사용해보자는 의견이 도출됨
- CSS 코드를 컴포넌트와 함께 작성할 것인지, 따로 style 폴더에 분리할 것인지 논의
  - 각자 스타일이 있겠지만 가독성과 다수의 팀원의 선호도에 따라 CSS 파일을 따로 분리하기로 결정

**💡 리다이렉트(Redirect)**

- 각 페이지 컴포넌트마다 useEffect를 사용한 팀원이 많았으며, 이를 전역적으로 관리하는 팀원도 있었음.
- 추가로 Redirect 시 HOC를 사용해보자는 의견이 제출됨.
  - HOC를 사용했을 때의 코드 복잡성과 코드관리 용이성에 대해 논의.
- 코드관리가 용이하도록 HOC를 사용하기로 결정

**💡 추상화**

- API 요청 시 URL을 추상화하여 관리하는 방법에 대해 논의
  - API 관련 변경사항이 생겨도 해당 파일만 변경하면 가져다 사용하는 다른 코드는 지장이 없도록 분리 목적

**💡 디바운싱(Debouncing)**

- input 시 디바운싱을 사용하자는 의견이 제출됨.
  - TODO input의 경우 디바운싱을 통해 이벤트를 지연시키는 것보다 useRef hook을 사용하여 해결하는 것이 더 효율적
  - 그러나 로그인/회원가입 유효성 검사의 경우 유효성 검사 통과 후 버튼이 활성화되는 요구사항을 지키기 위해 state로 관리
  - 사용자를 위한 에러 메시지를 띄울 때도 실시간으로 변화하는 이메일, 비밀번호에 맞춰 변경되는 것이 아닌, 디바운싱을 사용해 일정 시간 이후 에러 메시지를 표시하는 것이 효율적이라고 판단

**💡 로그인, 회원가입 페이지 재사용성**

- 로그인, 회원가입 페이지의 코드가 상당 부분 비슷한 것에 대해 논의
  - UI가 중복되는 부분은 별도의 컴포넌트로 제작해 재사용하기로 결정
  - But, 페이지는 직관성을 위해 Signup, Signin로 분리.

**💡 함수 선언문과 화살표 함수**

- 모든 팀원의 코드를 비교해보니 함수 선언문를 쓰는 팀원과 화살표 함수를 쓰는 팀원이 나뉘었음.
- ES6에서 권장하며, 확장성이 높은 화살표 함수를 사용하기로 결정.
  - export의 경우 파일 하단에 export default로 작성

**💡 axios와 fetch**

- fetch에 비해 axios가 작성하기 간단하며, 코드 양이 줄어 가독성을 높일 수 있다는 장점
- axios instance를 사용하면 반복을 줄일 수 있으며, interceptor를 통해 요청 헤더에 token을 부여할 수 있다는 점에서 유용하다고 판단

**💡 Context 관련 논의**

- Context를 사용할지에 대한 논의
- TODO와 같이 상태가 많이 변하는 페이지에는 리렌더링 이슈로 Context가 적합하지 않다고 판단.
- 로컬 스토리지를 통해 Auth 관련 token을 관리하므로, Auth에 Context를 적용하지 않아도 될 것.
- 추후 확장성을 고려하자는 의견과 현재 과제에서 사용하는 이유에 집중하자는 의견이 제출.
  - 현재 과제에서는 props drilling이 심각하지 않으므로, 코드 복잡성을 낮추기 위해 Context 없이 진행.

**💡 이 외 유익한 의견**

- React Developer Tools를 사용하여 컴포넌트 렌더링을 크롬에서 확인할 수 있음.
- React Lazy를 통해 컴포넌트가 필요한 페이지에 입장했을 때 불러와 성능 최적화 가능.

## 협업 방식

### 소통 및 회의

- Slack
- Notion
- Google Meet

### 커밋 컨벤션

```
init : 초기화
feat : 새로운 기능 추가
update: 기능 수정
fix : 버그 수정
docs : 문서 수정
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
design: 레이아웃 수정, UX 또는 UI에 대한 커밋
refactor : 코드 리팩터링
test : 테스트 코드, 리팩터링 테스트 코드 추가
chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
```

### 역할 분담

- 컴포넌트(투두, 로그인/회원가입): 강세민, 신수현, 류현, 이승재
- 훅: 한소정, 송지수
- API: 황예진, 황성재
- 리다이렉트: 정우재, 최현민

- README: 황예진, ~
- 배포: ~

## 실행 방법

```shell
git clone https://github.com/PreOnboarding-2/pre-onboarding-10th-1-2.git
cd pre-onboarding-10th-1-2
npm install
npm start
```
