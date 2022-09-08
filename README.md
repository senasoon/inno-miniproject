# PICAIVE 📷
<img src="https://i.ibb.co/gW6WCjP/bannner.png" width="400px">

## 서비스 소개
PICAIVE는 사진으로 **일상을 공유하는 서비스** 입니다.  
다른 사람의 일상을 구경할 수 있고, 댓글을 달 수도 있습니다.   
여러분의 일상을 자유롭게 올려보세요!  
**[PICAIVE 서비스 구경하러 가기](http://)**

## 서비스 구성도
- (메인) 등록된 게시글 불러오기
  - 등록된 모든 게시글을 확인할 수 있습니다.
  - 게시글 클릭시 게시글의 상세 페이지로 이동합니다.
  
- 회원가입
  - 아이디 유효성 검사 후 사용자에게 알려줍니다.
  - 비밀번호 유효성 검사 후 사용자에게 알려줍니다.
  - 회원가입 오류시 에러메세지를 사용자에게 알려줍니다.
  
- 로그인
  - 로그인 오류시 에러메세지를 사용자에게 알려줍니다.
  - 로그인 성공시 사용자 Local Storage에 토큰을 저장합니다.

- 게시글 등록
  - 로그인한 사용자만 게시글을 등록할 수 있습니다.
  - 유효성 검사 후 사용자에게 알려줍니다.
  - 이미지 등록시 이미지 미리보기가 가능합니다.

- 게시글 상세 페이지
  - 게시글의 상세 정보를 확인할 수 있습니다.
  - 게시글을 등록한 사용자만 게시글 수정, 삭제가 가능합니다.
  - 게시글 수정 이미지 등록시 이미지 미리보기가 가능합니다.


- 댓글
  - 상세게시글의 댓글을 확인할 수 있습니다.
  - 로그인한 사용자만 댓글을 등록할 수 있습니다.
  - 댓글을 등록한 사용자만 댓글 수정, 삭제가 가능합니다.

## 프로젝트 팀원 역할 분담
| 이름 | 역할 | 기능 상세 |
| ----- | ----- | ---- |
| 김도현 | BE | 전체 게시글 조회, 상세 게시글 조회 / 수정 / 삭제, 댓글 등록 / 조회 / 수정 / 삭제  |
| 김성준 | BE | 회원가입 / 로그인 / 게시글 등록, 배포|
| 박세은 | FE | 전체 게시글 조회, 게시글 등록, 메인페이지 헤더 |
| 임연주 | FE | 상세 게시글 조회 / 수정 / 삭제, 댓글 등록 / 조회 / 수정 / 삭제 |
| 전혜림 | FE, 팀장 | 회원가입, 로그인 / 로그아웃, 프로젝트 로고 제작|

