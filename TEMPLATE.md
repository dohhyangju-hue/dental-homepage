# 틀 1 · 차분한 병원형 (코치용 안내)

## 이 틀
흰 바탕에 포인트 색 하나(주황 갈색), 둥근 카드(반지름 20px)와 8px 둥근 버튼, 장식 없는 차분한 병원 홈페이지. 이 틀을 이 틀답게 만드는 것: (1) 색은 `--accent` 하나뿐이고 진료 시간 띠(`.visit__hours`) 전체가 그 색이다, (2) 그림자·그라데이션 없이 흰색·`--t6`·`--g1` 배경을 번갈아 쓴다.
글꼴은 Pretendard Variable 하나(head의 `<link>`로 CDN에서 불러옴). 색 토큰은 `style.css` 맨 위 `:root`에 있다: `--ink` `--muted` `--accent` `--accent-dk` `--t6` `--t12` `--g1` `--foot` `--line`. 사진은 필수는 아니나 첫 화면 배경(`.hero__img`)과 카드 사진이 분위기의 절반이다. 사진이 없으면 해당 `<figure>`를 지운다.

## 바꿀 예시 값
방법: 아래 표를 위에서 아래 순서대로, 행마다 `index.html`에 Edit 도구의 replace-all(전체 바꾸기)을 한 번씩 한다. 이 틀의 파일에는 이 문자열들이 글자 그대로 들어 있어 검색해서 바꾸기만 하면 된다. 변환·인코딩·계산은 필요 없다(전화 링크 `tel:02-000-0000`과 지도 주소도 화면 글자와 같은 문자열이다). sed·perl은 쓰지 않는다. 사용자에게서 받지 못한 항목은 번호·주소·시간을 지어내지 말고 셋째 열의 마커를 그대로 넣는다. 파일에 없는 문자열(0건)은 건너뛴다. 끝나면 `grep -n "예시\|샘플\|02-000\|세종대로\|시청역\|000-00-00000\|Pexels\|시안" index.html` 결과가 비어야 하고, `{확인 필요` 검색으로 남은 마커를 사용자에게 알린다.

| 바꿀 문자열 | 무엇 | 못 받았을 때 넣을 마커 |
|---|---|---|
| `예시치과의원` | 병원 이름 전체. 로고·제목·alt·지도 제목·푸터 등 파일 안 모든 곳 | `{확인 필요: 병원 이름}` |
| `예시치과` | 병원 이름 짧은 형. 위 행을 먼저 바꾼 뒤에 바꾼다(없는 틀도 있다) | `{확인 필요: 병원 짧은 이름}` |
| `김예시` | 대표원장 이름. 대표자 표기도 같은 이름 | `{확인 필요: 대표원장 이름}` |
| `이예시` | 두 번째 원장 이름 | `{확인 필요: 두 번째 원장 이름}` |
| `보존과 · 임플란트` | 대표원장 전문 분야 | `{확인 필요: 전문 분야}` |
| `치의학 학사·석사` | 약력 1 | `{확인 필요: 약력 1}` |
| `보존과 수련` | 약력 2 | `{확인 필요: 약력 2}` |
| `진료 경력 15년` | 약력 3 | `{확인 필요: 약력 3}` |
| `대한치과의사협회 정회원` | 약력 4 | `{확인 필요: 약력 4}` |
| `02-000-0000` | 전화번호. 화면 글자와 `tel:` 링크가 같은 문자열 | `{확인 필요: 전화번호}` |
| `서울특별시 중구 세종대로 110` | 도로명주소. 화면 글자, 지도 iframe, 구글·네이버 지도 링크 모두 글자 그대로 | `{확인 필요: 도로명주소}` |
| `2층` | 층 표기 | `{확인 필요: 층}` |
| `지하철 1·2호선 시청역 5번 출구에서 걸어서 3분` | 대중교통 안내 | `{확인 필요: 대중교통}` |
| `건물 지하 주차장 1시간 무료` | 주차 안내 | `{확인 필요: 주차}` |
| `09:30–18:30` | 월·화·목·금 진료 시간 | `{평일 시간}` |
| `09:30–20:30` | 수요일 야간진료 시간 | `{야간 시간}` |
| `09:30–14:00` | 토요일 진료 시간 | `{토요일 시간}` |
| `13:00–14:00` | 점심시간 | `{점심 시간}` |
| `000-00-00000` | 사업자등록번호 | `{확인 필요: 사업자등록번호}` |

진료 시간 4행(`09:30–18:30` `09:30–20:30` `09:30–14:00` `13:00–14:00`)은 첫 요청에서 원장에게 묻지 않고 받지 않는다. 받지 못한 상태면 이 4행을 위 셋째 열의 마커 `{평일 시간}` `{야간 시간}` `{토요일 시간}` `{점심 시간}`으로 바꾼다(정확히 이 글자, 시간을 지어내지 않는다). 마커가 화면에 남아 있어도 화면은 깨지지 않고, 점 시간표(틀 3)·요일 칩(틀 5)처럼 시간에서 만들어지는 시각물은 오류 없이 비어 있다. 나중에 원장이 시간을 알려 주면 마커를 `10:00–19:00` 형식의 실제 값(24시간제 `HH:MM–HH:MM`, 가운데 줄은 `–`, 쉬는 날은 `휴진`)으로 Edit replace-all 한다. 마커 하나당 한 번이고, 그러면 파생 시각물도 값에 맞게 그려진다. 시간 설명 문장이 마커와 같이 어색해 보이면 그 문장도 고쳐 쓴다.

### 고쳐 써도 되는 문구 (선택, 사진·표의 자료가 아니라 병원이 원할 때만)
- 제목·설명: `<title>`의 `설명을 먼저 드리고 치료를 시작합니다`와 meta description의 `설명을 먼저 드리고 필요한 치료만 권하며, 같은 원장이 처음부터 끝까지 봅니다.`는 병원 소개로 고쳐 쓴다(병원 이름은 위 표로 이미 바뀌어 있다).
- 첫 화면: `설명을 먼저 드리고<br>치료를 시작합니다`
- 소제목: `치료 전에 진단 결과와 방법을 설명드리고, 필요한 진료만 권해 드립니다.` / `설명을 먼저 드리고, 필요한 치료만 권하는 것을 진료의 기본으로 삼고 있습니다.`
- 진료 약속 3개(`.promise`): `설명을 먼저 드립니다` `진단 결과와 치료 방법, 순서를 진료 전에 말씀드립니다.` / `필요한 치료만 권합니다` `지금 필요하지 않은 치료는 권하지 않습니다.` / `같은 원장이 끝까지 봅니다` `처음 상담한 원장이 치료가 끝날 때까지 맡습니다.`
- 진료 원칙 3줄(`.career__list` 두 번째): `치료 전에 충분히 설명합니다.` `필요한 치료만 권합니다.` `같은 원장이 처음부터 끝까지 봅니다.`
- 시설 사진 설명(`<figcaption>`): `진료실` `개인 진료실` `진료 공간` `진료 기구`
- 진료 과목 6개(이름 → 한 줄 설명, 병원 진료 과목에 맞게 고쳐 쓴다):
  - `임플란트` → `빠진 치아 자리에 인공 치근을 심어 씹는 기능을 회복하는 치료입니다.`
  - `치아교정` → `고르지 않은 치열을 단계별 계획에 따라 천천히 맞춥니다.`
  - `충치·신경치료` → `충치의 깊이를 확인하고 치아를 가능한 한 보존하는 방향으로 치료합니다.`
  - `스케일링·잇몸치료` → `치석과 잇몸 염증을 관리해 잇몸 건강을 유지하도록 돕습니다.`
  - `심미·미백` → `치아 색과 모양을 자연스럽게 다듬는 치료를 상담 후 진행합니다.`
  - `소아치과` → `아이가 낯선 진료실에 익숙해질 수 있도록 설명하며 진료합니다.`

## 섹션
| id | 무엇 | 필수/선택 | 내용이 없으면 |
|---|---|---|---|
| (id 없음) `.hero` | 첫 화면 사진+`<h1>` | 필수 | 사진이 없으면 `<img class="hero__img">`와 `.hero__shade`를 지운다(배경은 `--ink` 단색) |
| `#care` | 진료 과목 카드 | 필수 | 섹션 전체 삭제 + 헤더 `<a href="#care">진료 과목</a>` 삭제 |
| `#promise` | 진료 약속 3개 | 선택 | 섹션 삭제 + `<a href="#promise">진료 약속</a>` 삭제 |
| `#doctor` | 의료진·약력 | 필수 | 약력만 없으면 `.career` 블록 삭제, 섹션 전체 삭제 시 `<a href="#doctor">의료진</a>`도 삭제 |
| `#space` | 시설 사진 띠 | 선택 | 섹션 삭제 + `<a href="#space">시설 안내</a>` 삭제 (script.js는 `#strip`이 없어도 오류 없음) |
| `#visit` | 진료 시간·지도·연락처(3칸) | 필수 | 지도만 없으면 `.map` 삭제 후 `.visit`의 `grid-template-columns: 1fr 1fr 1fr`을 `1fr 1fr`로 |

## 사진 자리
이 틀의 이미지는 모두 번호가 있다. 번호는 화면 순서대로 1부터이고, 번호 하나가 파일 하나·문자열 하나다. 원장·의료진 소개용 인물 사진 자리만 자리 표시 그림(`images/slot-N.svg`)이고 나머지는 예시 사진(`images/photo-N.jpg`)이다.
| 번호 | 파일 | 종류 | 어디에 있는 사진인지 |
|---|---|---|---|
| 1 | `images/photo-1.jpg` | 예시 사진 | 첫 화면 배경 `.hero__img`(가로, 위에 어두운 막) |
| 2 | `images/photo-2.jpg` | 예시 사진 | `#care` 진료 과목 카드 1번 `임플란트`의 사진 `.card__ph`(가로 3:2) |
| 3 | `images/photo-3.jpg` | 예시 사진 | `#care` 진료 과목 카드 2번 `치아교정`의 사진 `.card__ph`(가로 3:2) |
| 4 | `images/photo-4.jpg` | 예시 사진 | `#care` 진료 과목 카드 3번 `충치·신경치료`의 사진 `.card__ph`(가로 3:2) |
| 5 | `images/photo-5.jpg` | 예시 사진 | `#care` 진료 과목 카드 4번 `스케일링·잇몸치료`의 사진 `.card__ph`(가로 3:2) |
| 6 | `images/photo-6.jpg` | 예시 사진 | `#care` 진료 과목 카드 5번 `심미·미백`의 사진 `.card__ph`(가로 3:2) |
| 7 | `images/photo-7.jpg` | 예시 사진 | `#care` 진료 과목 카드 6번 `소아치과`의 사진 `.card__ph`(가로 3:2) |
| 8 | `images/slot-8.svg` | 자리 표시 | `#doctor` 김예시 대표원장 프로필 `.person__ph`(세로 3:4) |
| 9 | `images/slot-9.svg` | 자리 표시 | `#doctor` 이예시 원장 프로필 `.person__ph`(세로 3:4) |
| 10 | `images/photo-10.jpg` | 예시 사진 | `#space` 시설 띠 `.strip` 1번째(세로 사진도 가로로 잘림) |
| 11 | `images/photo-11.jpg` | 예시 사진 | `#space` 시설 띠 2번째 |
| 12 | `images/photo-12.jpg` | 예시 사진 | `#space` 시설 띠 3번째 |
| 13 | `images/photo-13.jpg` | 예시 사진 | `#space` 시설 띠 4번째 |

사진 자리 규칙:
- 원장이 "N번 자리에 이미지 넣어줘"(또는 "N번 사진")라고 하면, 위 표에서 그 번호의 파일 경로(예: `images/photo-5.jpg`, `images/slot-8.svg`)를 찾는다. 받은 사진 파일을 `images/` 안에 두고, `index.html`에서 그 경로 문자열을 새 파일 경로(예: `images/director.jpg`)로 Edit replace-all 한 번에 바꾼다. 이 문자열은 파일 안에 그 번호 한 곳뿐이다.
- `images/slot-N.svg`·`images/photo-N.jpg` 파일은 지우지 않는다(다른 작업과 나중에 다시 바꿀 때 쓴다).
- 사진을 아직 받지 못했으면 그 번호는 바꾸지 말고 원장에게 사진을 달라고 한다. 그대로 두어도 화면이 깨지지 않는다.
- 번호는 이 틀에서 화면 순서대로 1부터 한 줄로 매긴 것이다. 번호가 곧 표의 한 줄이다.
- 자리 표시 그림에는 글자 `이 자리에 사진을 배치해주세요`와 `(자리 N번)`이 들어 있다. 아주 작은 원형 자리(약 40~85px)에는 번호만 보인다. 원장·의료진 소개용 인물 사진은 병원과 무관한 모델 사진으로 채우지 않고 자리 표시로 둔다.
- 예시 사진(`photo-N.jpg`)은 병원과 무관한 샘플이다(진료 장면의 인물은 모델). 게시 전에 실제 병원 사진으로 바꾸거나 그 블록을 지운다.

## 고칠 때
- 강조색: `:root`의 `--accent`를 바꾼다. 파생 값을 같이 맞춘다: `--accent-dk`(버튼 hover, 더 어둡게), `--t6`(약 6% 연한 틴트), `--t12`(약 12%). 흰 글자가 얹히므로(`.btn--accent`, `.chip`, `.visit__hours` 띠) 충분히 어두운 색만 쓴다. `rgba(36,24,17,...)`는 `--ink` 파생이라 `--ink`를 바꿀 때만 같이 바꾼다.
- 진료 시간: 표의 시간 4개를 replace-all(시간을 받지 못했으면 표 셋째 열의 `{평일 시간}` `{야간 시간}` `{토요일 시간}` `{점심 시간}`을 그대로 넣고, 나중에 `10:00–19:00` 형식의 실제 값을 받으면 이 마커를 하나씩 replace-all 한다)하면 끝이다. 요일 구성이 다를 때만 `.hours`의 `<div><dt>요일</dt><dd>시간</dd></div>` 줄을 고친다. `<dd>`에는 네 문자열 중 하나 또는 `휴진`만 쓴다. 요일 줄 추가는 한 줄 복사, 삭제는 한 줄 삭제(예: 토요일을 쉬면 토요일 줄을 지우고 일·공휴일 줄 글자를 토·일·공휴일로). 다른 곳에는 시간이 없다.
- 진료 과목 추가: `<ul class="cards">` 안 `<li class="card fade">` 한 개를 복사하고 `.tag`의 숫자(`01`…)와 `.card__t`·`.card__d`·사진을 바꾼다. 번호는 손으로 이어서 매긴다. 열은 3열(1100px 이하 2열, 640px 이하 1열)이라 6·9개가 가장 맞는다. 삭제는 `<li>` 통째로, 이후 `.tag` 번호를 다시 매긴다. script.js는 개수에 의존하지 않는다.
- 원장 추가: `.docs` 안에 `<article class="person fade">`를 복사(`<figure class="person__ph">`·`.person__tag`·`.person__name`·`.arrow`)한다. 3명이면 `.docs`의 `grid-template-columns: repeat(4, 1fr)`을 `repeat(3, 1fr)`로, 기본 `.career { grid-column: span 2; }`를 `.career { grid-column: 1 / -1; }`로 바꾼다(1100px 이하 규칙은 그대로).
- 사진 교체: `src`와 `alt`만 바꾼다. `width`·`height` 속성은 가로세로 비율 힌트일 뿐이며 `object-fit: cover`로 잘리므로 새 사진 크기로 고쳐 두면 좋다.

## 덧붙일 때
새 구역은 색 배경을 흰색(`sec--white`) → `sec--t6` → `sec--grey` 순으로 번갈아 쓴다. 이웃한 구역과 같은 배경이면 안 되고, `#visit` 바로 앞 구역은 `sec--t6`나 `sec--grey`로 한다.
```html
<section class="sec sec--grey" id="notice-info" aria-labelledby="ni-title">
  <div class="wrap">
    <div class="sec__head fade">
      <h2 class="title" id="ni-title">제목 <mark>핵심어</mark></h2>
      <p class="lead">한두 문장 설명.</p>
    </div>
    <ul class="career__list fade"><li>목록 한 줄</li><li>목록 한 줄</li></ul>
  </div>
</section>
```
헤더 `<nav class="gnb">`에 `<a href="#notice-info">이름</a>`도 추가한다. 공지·휴진 팝업: `</footer>` 바로 뒤, 끝의 `<script …>` 줄들 위에 `<dialog>`를 넣는다(팝업 스크립트가 실행될 때 `#notice`가 이미 있어야 한다. `</body>` 바로 앞이라도 `<script>` 줄보다 위여야 한다). `data-until`은 팝업을 보여 주는 마지막 날(`YYYY-MM-DD`)이며 원장에게 받아야 한다. 열기·닫기·오늘 하루 보지 않기 동작은 `dental-design` 스킬의 팝업 스크립트를 `script.js` 맨 끝에 한 번만 덧붙여 쓴다(이 안내문에는 스크립트를 넣지 않는다, `<form method="dialog">`와 인라인 `<script>`도 쓰지 않는다). 아래 CSS는 `style.css` 맨 끝에 덧붙인다.
```html
<dialog class="notice" id="notice" data-until="YYYY-MM-DD">
  <h2 class="title title--sm">공지 제목</h2>
  <p class="lead">공지 내용 한두 문장.</p>
  <div class="notice__btns">
    <button type="button" class="btn btn--line" data-notice="today">오늘 하루 보지 않기</button>
    <button type="button" class="btn btn--accent" data-notice="close" autofocus>닫기</button>
  </div>
</dialog>
```
```css
.notice { border: 0; padding: 40px 36px; border-radius: var(--r); width: calc(100% - 48px); max-width: 420px; text-align: center; color: var(--ink); }
.notice::backdrop { background: rgba(36,24,17,.55); }
.notice__btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 24px; }
```
- 새 쪽(하위 페이지): 아래는 진료 과목 안내 쪽(`implant.html`) 한 장의 전체다. 새 파일을 `index.html`과 같은 폴더에 만들고(같은 `style.css`·`script.js`를 쓴다), 제목·소개 문장·진료 순서 목록만 바꾼다(순서 목록이 필요 없으면 해당 `<section>`을 지운다). 표의 문자열(병원 이름·전화번호·주소 등)은 `index.html`에서 바꾼 값과 똑같이 바꾼다. 헤더의 `<nav>` 링크는 `index.html`의 것과 같게 두고 앞에 `index.html`만 붙인다(`index.html`에서 지운 구역의 링크는 여기서도 지운다). 아래 CSS를 `style.css` 맨 끝에 덧붙인다(이미 있으면 다시 넣지 않는다).
```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>임플란트 | 예시치과의원</title>
<meta name="description" content="예시치과의원의 임플란트 안내입니다. 빠진 치아 자리에 인공 치근을 심어 씹는 기능을 회복하는 치료입니다.">
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<link rel="stylesheet" href="style.css">
<script>
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("js");
</script>
</head>
<body class="subpage">
<header class="site-header">
  <div class="wrap site-header__in">
    <a class="logo" href="index.html" aria-label="예시치과의원 처음으로"><span class="logo__dot" aria-hidden="true"></span>예시치과의원</a>
    <nav class="gnb" aria-label="주요 메뉴">
      <a href="index.html#care">진료 과목</a>
      <a href="index.html#promise">진료 약속</a>
      <a href="index.html#doctor">의료진</a>
      <a href="index.html#space">시설 안내</a>
      <a href="index.html#visit">진료시간 &amp; 오시는 길</a>
    </nav>
    <a class="btn btn--accent" href="tel:02-000-0000">전화 예약 02-000-0000</a>
  </div>
</header>
<main>
  <section class="sec sec--white" aria-labelledby="page-title">
    <div class="wrap">
      <div class="sec__head fade">
        <h1 class="title" id="page-title">임플란트</h1>
        <p class="lead">빠진 치아 자리에 인공 치근을 심어 씹는 기능을 회복하는 치료입니다.</p>
      </div>
      <a class="btn btn--accent fade" href="tel:02-000-0000">전화 예약 02-000-0000</a>
    </div>
  </section>
  <section class="sec sec--t6" aria-labelledby="steps-title">
    <div class="wrap">
      <h2 class="title title--center fade" id="steps-title">진료 순서</h2>
      <ol class="promise">
        <li class="fade"><span class="promise__n" aria-hidden="true">1</span><h3>상담</h3><p>불편한 점과 궁금한 점을 먼저 듣습니다.</p></li>
        <li class="fade"><span class="promise__n" aria-hidden="true">2</span><h3>검사</h3><p>검사 결과를 화면으로 함께 보며 설명드립니다.</p></li>
        <li class="fade"><span class="promise__n" aria-hidden="true">3</span><h3>치료</h3><p>동의하신 치료만 같은 원장이 진행합니다.</p></li>
      </ol>
    </div>
  </section>
</main>
<footer class="foot">
  <div class="wrap foot__in">
    <p class="foot__name">예시치과의원</p>
    <ul>
      <li>대표자 김예시</li>
      <li>주소 서울특별시 중구 세종대로 110, 2층</li>
      <li>전화 02-000-0000</li>
      <li>사업자등록번호 000-00-00000</li>
    </ul>
  </div>
</footer>
<script src="script.js"></script>
</body>
</html>
```
```css
.subpage .site-header { position: relative; background: var(--ink); }
```
- `index.html`에서 연결하기: `index.html`의 `#care`에서 임플란트 카드 `<h3 class="card__t">임플란트</h3>`를 `<h3 class="card__t"><a href="implant.html">임플란트</a></h3>`로 바꾼다.
- 버튼: 채움 `btn btn--accent`, 윤곽선 `btn btn--line`, 포인트색 윤곽선 `btn btn--line btn--accentline`. 목록은 `.career__list`(박스 `.career` 안)나 `.route`(왼쪽 라벨 `<span>` + 내용) 모양을 복사한다.
- 넣지 말 것: 새 색(`:root` 변수만 쓴다), 두 번째 글꼴, 그라데이션(첫 화면 `.hero__shade` 외 없음), 그림자(`.logo__dot` 링 외 없음), 알약형 버튼(8px 둥근 사각), 이모지 아이콘, 굵기 400·600 외.
- 등장 애니메이션: 요소에 `fade` 클래스를 붙이면 된다(화면에 들어올 때 아래서 18px 올라오며 나타남). 필요 없으면 붙이지 않는다. 동적으로 나중에 추가한 요소는 관찰되지 않는다.

## 움직임
`script.js`: (1) `.fade`가 화면에 들어오면 `is-in` 클래스를 붙여 살짝 올라오며 나타난다(형제끼리 80ms씩 시차, 6초 뒤에는 무조건 다 보이게 하는 안전장치). (2) `#strip`의 `.strip__ctl [data-dir]` 이전/다음 버튼이 사진 한 장 너비만큼 스크롤한다. 마크업 의존: `<html class="js">`(head 인라인 스크립트가 붙임, 움직임 줄이기 설정이면 안 붙음), `.fade`, `#strip`, `[data-dir]`. JS가 꺼져 있어도 `.js .fade`의 숨김 규칙이 적용되지 않아 모든 내용이 보이고, 사진 띠는 손가락·마우스 스크롤로 넘긴다.
