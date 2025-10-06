# Components Documentation

이 문서는 `components/` 디렉토리에 구현된 모든 컴포넌트에 대한 상세 설명을 제공합니다.

## 디렉토리 구조

```
components/
├── ui/                    # 범용 UI 컴포넌트 (Shadcn/ui 포함)
├── blog/                  # 블로그 핵심 컴포넌트
├── content/               # 콘텐츠 렌더링 컴포넌트
├── shared/                # 작은 재사용 컴포넌트
├── providers/             # 프로바이더
└── demo/                  # 데모 컴포넌트
```

---

## UI 컴포넌트 (`components/ui/`)

### 레이아웃 컴포넌트

#### `container.tsx`
페이지 컨텐츠를 중앙 정렬하고 최대 너비를 제한하는 레이아웃 컨테이너.

**Props:**
- `size`: 컨테이너 크기 ("sm" | "md" | "lg" | "xl" | "full") - 기본값: "lg"
- `className`: 추가 CSS 클래스

**크기 옵션:**
- sm: max-w-3xl
- md: max-w-5xl
- lg: max-w-7xl
- xl: max-w-[1536px]
- full: max-w-full

#### `header.tsx`
상단 고정 네비게이션 헤더. 반응형 디자인으로 모바일에서는 Sheet 메뉴 사용.

**기능:**
- Sticky 헤더 (스크롤 시 상단 고정)
- 반응형 네비게이션 (데스크탑: 링크, 모바일: 햄버거 메뉴)
- 테마 토글 버튼 내장
- 네비게이션 항목: Home, Blog, About

**사용 컴포넌트:**
- Container, Button, ThemeToggle, Sheet

#### `footer.tsx`
페이지 하단 푸터. 소셜 링크와 저작권 정보 표시.

**기능:**
- 소셜 미디어 링크 (GitHub, Twitter, LinkedIn)
- 동적 연도 표시
- 반응형 레이아웃 (모바일: 세로, 데스크탑: 가로)

**사용 컴포넌트:**
- Container

### 홈페이지 섹션 컴포넌트

#### `hero-section.tsx`
홈페이지 상단의 히어로 섹션. 제목, 설명, CTA 버튼 표시.

**Props:**
- `title`: 메인 제목
- `description`: 설명 텍스트
- `primaryCta`: 메인 CTA 버튼 (text, href)
- `secondaryCta`: 보조 CTA 버튼 (text, href)
- `className`: 추가 CSS 클래스

**특징:**
- 중앙 정렬 레이아웃
- 반응형 텍스트 크기
- 최대 2개의 CTA 버튼 지원

#### `cta-section.tsx`
Call-to-Action 섹션. 소셜 링크와 함께 강조된 메시지 표시.

**Props:**
- `title`: 섹션 제목
- `description`: 설명 텍스트
- `socialLinks`: 소셜 링크 배열 (platform, url, icon)
- `className`: 추가 CSS 클래스

**특징:**
- Card 컴포넌트 기반 강조 디자인
- 소셜 링크 아이콘 표시
- 호버 효과

### 기능 컴포넌트

#### `search-bar.tsx`
실시간 검색 기능을 제공하는 검색바 컴포넌트 (Client Component).

**Props:**
- `placeholder`: 입력 필드 placeholder - 기본값: "Search posts..."
- `onSearch`: 검색 쿼리 변경 시 호출되는 콜백
- `results`: 검색 결과 배열
- `isLoading`: 로딩 상태
- `className`: 추가 CSS 클래스

**기능:**
- 300ms debounce 적용
- 키보드 네비게이션 (화살표, Enter, Escape)
- 외부 클릭 감지로 자동 닫기
- 검색 결과 드롭다운
- 입력 클리어 버튼

**사용 Hook:**
- `useDebounce`: 검색어 입력 디바운싱

#### `pagination.tsx`
페이지네이션 컴포넌트. URL 쿼리 파라미터 기반 (Server Component).

**Props:**
- `currentPage`: 현재 페이지 번호
- `totalPages`: 전체 페이지 수
- `baseUrl`: 기본 URL - 기본값: ""
- `showPrevNext`: 이전/다음 버튼 표시 - 기본값: true
- `maxVisiblePages`: 표시할 최대 페이지 버튼 수 - 기본값: 5
- `className`: 추가 CSS 클래스

**기능:**
- 이전/다음 페이지 버튼
- 생략 기호(...) 표시
- 현재 페이지 강조
- 접근성 속성 (aria-label, aria-current)

#### `pagination-client.tsx`
클라이언트 사이드 상태 기반 페이지네이션 컴포넌트 (Client Component).

**Props:**
- `currentPage`: 현재 페이지 번호
- `totalPages`: 전체 페이지 수
- `onPageChange`: 페이지 변경 콜백
- `showPrevNext`: 이전/다음 버튼 표시
- `maxVisiblePages`: 표시할 최대 페이지 버튼 수
- `className`: 추가 CSS 클래스

**차이점:**
- URL 기반이 아닌 상태 기반
- onPageChange 콜백으로 페이지 변경 처리

### Shadcn/ui 컴포넌트

다음은 Shadcn/ui에서 제공하는 기본 UI 컴포넌트들입니다:

- `button.tsx`: 버튼 컴포넌트 (variants: default, destructive, outline, secondary, ghost, link)
- `card.tsx`: 카드 컴포넌트 (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- `badge.tsx`: 뱃지 컴포넌트 (variants: default, secondary, destructive, outline)
- `input.tsx`: 입력 필드 컴포넌트
- `select.tsx`: 선택 드롭다운 컴포넌트
- `sheet.tsx`: 사이드 시트/드로어 컴포넌트
- `dialog.tsx`: 다이얼로그/모달 컴포넌트
- `popover.tsx`: 팝오버 컴포넌트
- `command.tsx`: 커맨드 팔레트 컴포넌트
- `avatar.tsx`: 아바타 이미지 컴포넌트
- `separator.tsx`: 구분선 컴포넌트

---

## 블로그 컴포넌트 (`components/blog/`)

### `blog-post-card.tsx`
블로그 포스트 카드 컴포넌트. 목록 뷰에서 개별 포스트 표시 (Server Component).

**Props:**
- `title`: 포스트 제목
- `excerpt`: 포스트 요약 (최대 3줄 표시)
- `date`: 작성 날짜
- `tags`: 태그 배열
- `slug`: 포스트 슬러그 (URL)
- `thumbnail`: 썸네일 이미지 URL (선택)
- `readingTime`: 읽기 소요 시간 (분)
- `className`: 추가 CSS 클래스

**기능:**
- 썸네일 이미지 지원 (aspect-video)
- 호버 효과 (그림자, 이동, 이미지 확대)
- 날짜, 읽기 시간 표시
- 태그 뱃지
- Next.js Link 연동

**사용 컴포넌트:**
- Card, Badge, Calendar/Clock 아이콘

### `blog-post-list.tsx`
블로그 포스트 목록 컴포넌트. 그리드 레이아웃으로 포스트 카드 렌더링 (Client Component).

**Props:**
- `posts`: 블로그 포스트 배열
- `sortBy`: 정렬 방식 ("latest" | "popular") - 기본값: "latest"
- `onSortChange`: 정렬 변경 콜백
- `className`: 추가 CSS 클래스

**기능:**
- 반응형 그리드 레이아웃 (모바일: 1열, 태블릿: 2열, 데스크탑: 3열)
- 정렬 옵션 선택 (Latest/Popular)
- 포스트 개수 표시
- 빈 상태 처리 ("No posts found")

**타입:**
- `BlogPost`: title, excerpt, date, tags, slug, thumbnail?, readingTime

**사용 컴포넌트:**
- BlogPostCard, Select

### `blog-post.tsx`
개별 블로그 포스트 전체 렌더링 컴포넌트 (Server Component).

**Props:**
- `title`: 포스트 제목
- `date`: 작성 날짜
- `tags`: 태그 배열
- `readingTime`: 읽기 소요 시간
- `content`: 마크다운 컨텐츠
- `author`: 작성자 정보 (name, avatar?) (선택)
- `thumbnail`: 썸네일 이미지 URL (선택)
- `previousPost`: 이전 포스트 (title, slug) (선택)
- `nextPost`: 다음 포스트 (title, slug) (선택)
- `className`: 추가 CSS 클래스

**구조:**
- 메인 콘텐츠:
  - 헤더: 제목, 메타데이터 (날짜, 읽기 시간, 작성자), 태그
  - 썸네일 이미지 (있는 경우)
  - 소셜 공유 버튼
  - 마크다운 본문
  - 포스트 네비게이션 (이전/다음)
- 사이드바 (데스크탑, lg 이상): 목차 (sticky)
- 반응형: lg 미만에서는 사이드바 숨김

**사용 컴포넌트:**
- MarkdownRenderer, TableOfContents, SocialShare, PostNavigation, Badge, Avatar, Calendar/Clock/User 아이콘

### `post-navigation.tsx`
이전/다음 포스트 네비게이션 컴포넌트 (Server Component).

**Props:**
- `previousPost`: 이전 포스트 (title, slug)
- `nextPost`: 다음 포스트 (title, slug)
- `className`: 추가 CSS 클래스

**기능:**
- 양방향 네비게이션
- 포스트 제목 표시
- 화살표 아이콘
- 반응형 레이아웃

---

## 콘텐츠 렌더링 컴포넌트 (`components/content/`)

### `markdown-renderer.tsx`
마크다운 콘텐츠를 HTML로 렌더링하는 컴포넌트 (Server Component).

**Props:**
- `content`: 마크다운 문자열
- `className`: 추가 CSS 클래스

**기능:**
- react-markdown 사용
- GitHub Flavored Markdown (GFM) 지원
- 커스텀 컴포넌트 스타일링:
  - 헤딩 (h1-h6): ID 자동 생성, scroll-mt-20
  - 링크: 외부 링크 새 탭 열기
  - 코드: 인라인/블록 구분
  - 테이블: 반응형 스크롤
  - 이미지: 반응형, 라운드 코너
  - 인용구: 좌측 보더, 이탤릭
- Prose 스타일 적용 (dark mode 지원)

**의존성:**
- react-markdown, remark-gfm

### `code-block.tsx`
코드 블록 컴포넌트. 구문 강조와 복사 기능 제공 (Server Component).

**Props:**
- `code`: 코드 문자열
- `language`: 프로그래밍 언어 - 기본값: "text"
- `filename`: 파일명 (선택)
- `showLineNumbers`: 줄 번호 표시 - 기본값: false
- `className`: 추가 CSS 클래스

**기능:**
- PrismJS 구문 강조
- 지원 언어: TypeScript, JavaScript, JSX, TSX, Python, Bash, JSON, CSS, Markdown
- 파일명 표시
- 언어 라벨 표시
- 복사 버튼
- 가로 스크롤

**사용 컴포넌트:**
- CopyButton

**의존성:**
- prismjs

### `copy-button.tsx`
클립보드 복사 버튼 컴포넌트 (Client Component).

**Props:**
- `code`: 복사할 코드 문자열
- `className`: 추가 CSS 클래스

**기능:**
- 클립보드 API 사용
- 복사 성공 시 체크 아이콘 표시 (2초)
- 호버 효과
- 접근성 라벨

**사용 컴포넌트:**
- Button

### `table-of-contents.tsx`
목차 컴포넌트 (Server Component). 마크다운에서 헤딩 추출.

**Props:**
- `content`: 마크다운 문자열
- `className`: 추가 CSS 클래스

**기능:**
- H2, H3 헤딩 자동 추출
- 헤딩 ID 자동 생성
- 클라이언트 컴포넌트로 위임 (TableOfContentsClient)

**타입:**
- `Heading`: id, text, level (2 | 3)

### `table-of-contents-client.tsx`
목차 클라이언트 컴포넌트 (Client Component). 스크롤 추적 및 클릭 네비게이션.

**Props:**
- `headings`: 헤딩 배열
- `className`: 추가 CSS 클래스

**기능:**
- 현재 섹션 하이라이트 (Intersection Observer)
- 부드러운 스크롤
- 계층 구조 표시 (H2/H3 들여쓰기)
- Sticky 포지션

**사용 Hook:**
- useState, useEffect (Intersection Observer)

---

## 공유 컴포넌트 (`components/shared/`)

### `theme-toggle.tsx`
다크 모드 토글 버튼 (Client Component).

**Props:** 없음

**기능:**
- 라이트/다크 모드 전환
- next-themes 연동
- Sun/Moon 아이콘 전환
- 하이드레이션 불일치 방지 (mounted 상태)

**의존성:**
- next-themes

**사용 컴포넌트:**
- Button

### `social-share.tsx`
소셜 미디어 공유 버튼 컴포넌트 (Client Component).

**Props:**
- `title`: 공유할 콘텐츠 제목
- `className`: 추가 CSS 클래스

**기능:**
- Twitter, Facebook, LinkedIn 공유
- 링크 복사 (클립보드)
- 복사 성공 시 체크 아이콘 표시 (2초)
- 새 창으로 공유 대화상자 열기

**사용 컴포넌트:**
- Button, Lucide 아이콘 (Facebook, Twitter, Linkedin, Link2, Check)

---

## 프로바이더 (`components/providers/`)

### `theme-provider.tsx`
테마 프로바이더 컴포넌트. next-themes ThemeProvider 래핑.

**Props:**
- `children`: React 노드
- `...props`: ThemeProvider props

**기능:**
- 다크 모드 전역 상태 관리
- 시스템 테마 감지
- localStorage 저장

**의존성:**
- next-themes

---

## 데모 컴포넌트 (`components/demo/`)

### `search-bar-demo.tsx`
SearchBar 컴포넌트 사용 예제 (Client Component).

**기능:**
- SearchBar 컴포넌트 데모
- 목 데이터 검색 시뮬레이션
- 로딩 상태 시뮬레이션 (1초)

---

## 컴포넌트 사용 가이드

### 페이지 레이아웃 구성

```
<Header />
<main>
  <Container>
    {/* 페이지 컨텐츠 */}
  </Container>
</main>
<Footer />
```

### 홈페이지 구성

1. Header
2. HeroSection
3. BlogPostList (최신 포스트 6-9개, showControls: false)
4. CTASection
5. Footer

### 블로그 목록 페이지 구성

1. Header
2. SearchBar
3. BlogPostList (전체 포스트, showControls: true)
4. Pagination
5. Footer

### 블로그 포스트 페이지 구성

1. Header
2. BlogPost
3. PostNavigation
4. Footer

---

## 타입 정의

### BlogPost (blog-post-list.tsx)
```typescript
interface BlogPost {
  title: string
  excerpt: string
  date: string
  tags: string[]
  slug: string
  thumbnail?: string
  readingTime: number
}
```

### SearchResult (search-bar.tsx)
```typescript
interface SearchResult {
  id: string
  title: string
  excerpt?: string
  url: string
}
```

### Heading (table-of-contents.tsx)
```typescript
interface Heading {
  id: string
  text: string
  level: 2 | 3
}
```

---

## 의존성

### 외부 라이브러리
- **react-markdown**: 마크다운 렌더링
- **remark-gfm**: GitHub Flavored Markdown 지원
- **prismjs**: 코드 구문 강조
- **next-themes**: 다크 모드 관리
- **lucide-react**: 아이콘 라이브러리

### 내부 유틸리티
- **@/lib/utils**: `cn` (className 병합), `generateSlug` (URL 슬러그 생성)
- **@/lib/hooks/use-debounce**: 디바운스 훅
