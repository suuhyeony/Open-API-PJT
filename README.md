# FIKA PJT

> 넥슨 Open api를 활용한 FIFA & KART 전적 검색 서비스

<br>

### 사용 기술

- React (CRA)
- 상태관리) hooks
- 스타일링) Styled components

<br>

### 목표

- 공동목표) FIFA/KART 두 개의 서비스를 합쳐 잘 작동되도록 하기
- 박수현) 프로젝트 이끌어가는 경험, 구조/상태관리에 대한 이해
- 김준호) React 구조에 대한 이해

<br>

### 주요 기능

>  TabMenu로 FIFA/KART 서비스 선택 가능

#### -FIFA

- 유저 검색 (미리보기 기능)
- 유저 정보 조회 (Lv/역대최고레벨)
- 유저 최근 경기 기록 조회 (매치 타입별)
- 경기 상세 모달 (경기 분석 항목 포함)
- 사용 선수 정보 및 선수별 경기 성적 (평점 높은순 정렬)

#### -KART

- 유저 검색
- 유저 정보 조회 (최근100경기 1, 2, 3등 횟수, 마지막 사용 캐릭터)
- 유저 최근 경기 기록 조회 (10경기 씩 페이지네이션, 총 10페이지)
- 매치타입 전환 토글 (스피드전↔아이템전)
- 해당 경기 상세내용 토글 (플레이어 카트, 닉네임, 주행시간, 순위)

<br>

### 협업 내용

- **역할**

  - 박수현) FIFA 서비스 보완 및 기능추가, 프로젝트 리드
  - 김준호) KART 서비스 재작업 및 기능추가

- **GitLab**을 통한 코드 관리

  - 커밋 규칙) [add / modify / delete] 세부사항

  - 브랜치 전략) master -> branch: develop 에서 

    ​					feature/fifa와 feature/kart 브랜치를 나누어 작업 수행 후 merge. 

- **Notion**을 통한 일정 관리 및 회의록 작성

- 양쪽 서비스 추가 / 보완 / 스타일링 **idea 제안**

- **이슈 공유 및 해결**

<br>

### 추가/보완 사항

#### -FIFA

: 프로젝트 규모가 작으며 flying props가 존재하지 않아, 상태관리 방법을 context API에서 Hooks로 변경.

- 추가 기능

  - 사용 선수 및 선수별 경기성적 (평점/득점/도움/유효슛/패스 성공률 등)
  - 선수 기본정보 조회 (이미지/클래스/포지션)

- 보완사항

  - 자동완성을 위해 매 keyUp마다 api요청가는 현상

    => setTimeout을 활용한 debouncer 적용

  - 검색 시, key event 적용

  - table 보완 작업

    - 매치 결과가 없을 시, 예외처리
    - 페이지 카운트

  - table & modal 스타일 업그레이드

<br>

#### -KART

- API 랜더링 방식 변경(GraphQL + Apollo → axios)

- 유저 정보 조회수 증가 (10 → 100)

- 매치타입 전환 토글기능 추가

- 해당 경기 상세내용 토글기능 추가

  (함께 플레이한 플레이어 카트, 닉네임, 주행시간, 순위 정보제공)

<br>

### 실행화면

#### -FIFA

|                           메인화면                           |                        검색 미리보기                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![f_main](/uploads/97104b3bb2d21a3e3e551a428e46d98d/f_main.PNG) | ![f_search](/uploads/918a5774729c1cb630faec76d5c9af04/f_search.PNG) |



|                           검색결과                           |                           최근경기                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![f_result](/uploads/cb6ce01c881a2e67e9d0abdc113006f1/f_result.PNG) | ![f_table](/uploads/9a5e73247d727a217e3d18922bf8615d/f_table.PNG) |



|                          경기 상세                           |                          선수 상세                           |                          선수 정보                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![f_matchd](/uploads/9deb61c70b2e47fd7575f0938285ab30/f_matchd.PNG) | ![f_playerd](/uploads/392bc929c43d19a72af9222849da607d/f_playerd.PNG) | ![f_pinfo](/uploads/785249d8033cf25c675c6f451d4d80f8/f_pinfo.PNG) |

<br>

#### -KART

| 메인화면                                                     | 유저정보                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![k_main](/uploads/f7eb99c493311362c98bbdca29c12ad9/k_main.png) | ![k_au1](/uploads/f01d6d5ba0609fff0edb68140c0786ff/k_au1.png) |



| 최근 경기 기록                                               | 경기 상세 토글                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![k_table](/uploads/8862781d1b6881c9182eefcc9f84657c/k_table.PNG) | ![k_au2](/uploads/6b983d96d9f3b0de1349492d0e29d094/k_au2.png) |
