# Blog Posting Feature Implementation Task List

## Phase 1: Basic Components (Independent)

### Task 1.1: draft-indicator.tsx
- [ ] Create `components/blog/draft-indicator.tsx`
- [ ] Props: `status: 'draft' | 'published'`, `className?`
- [ ] Use Badge component
- [ ] draft: secondary variant, published: default variant
- [ ] Server Component

### Task 1.2: tag-input.tsx
- [ ] Create `components/shared/tag-input.tsx`
- [ ] Props: `value: string[]`, `onChange: (tags: string[]) => void`, `placeholder?`, `maxTags?`
- [ ] Input + Badge combination
- [ ] Add tag on Enter/comma press
- [ ] X button to remove tags
- [ ] Prevent duplicates, trim values
- [ ] Client Component

### Task 1.3: markdown-toolbar.tsx
- [ ] Create `components/content/markdown-toolbar.tsx`
- [ ] Props: `onAction: (action: MarkdownAction) => void`, `disabled?`
- [ ] Buttons: Bold, Italic, Strikethrough, Code, Link, H1-H3, List, Codeblock, Quote
- [ ] Button variant="ghost" + lucide-react icons
- [ ] Add Tooltip to each button (show keyboard shortcuts)
- [ ] Client Component

---

## Phase 2: Editor Component

### Task 2.1: post-editor.tsx
- [ ] Create `components/blog/post-editor.tsx`
- [ ] Props: `value: string`, `onChange: (value: string) => void`, `className?`
- [ ] Layout:
  - Top: markdown-toolbar
  - Left 50%: textarea (markdown input)
  - Right 50%: markdown-renderer (preview)
- [ ] Responsive: tab switch (edit/preview) below md breakpoint
- [ ] Tab key support in textarea (indentation)
- [ ] Handle toolbar actions (insert markdown syntax at cursor position)
- [ ] Client Component

---

## Phase 3: Admin Components

### Task 3.1: post-actions.tsx
- [ ] Create `components/blog/post-actions.tsx`
- [ ] Props: `post: { slug, status }`, `onEdit`, `onDelete`, `onToggleStatus`
- [ ] Use DropdownMenu (3-dot menu)
- [ ] Menu items: Edit, Delete, Toggle Status
- [ ] AlertDialog confirmation on delete
- [ ] Client Component

### Task 3.2: post-list-admin.tsx
- [ ] Create `components/blog/post-list-admin.tsx`
- [ ] Props: `posts: AdminPost[]`, `onEdit`, `onDelete`, `onStatusChange`
- [ ] Table layout (title, status, date, tags, actions)
- [ ] Use draft-indicator, post-actions
- [ ] Sort functionality (default: date)
- [ ] Client Component

---

## Phase 4: Form Component

### Task 4.1: post-form.tsx
- [ ] Create `components/blog/post-form.tsx`
- [ ] Props: `initialData?`, `onSubmit`, `isLoading?`
- [ ] Fields:
  - Title (Input, required)
  - Slug (Input, auto-generate button)
  - Tags (tag-input)
  - Date (Input type="date")
  - Status (Select: draft/published)
  - Content (post-editor)
- [ ] Auto-generate slug when title changes (use generateSlug)
- [ ] Form validation (title, content required)
- [ ] Save/Publish buttons
- [ ] Client Component

---

## Phase 5: API & Pages

### Task 5.1: API Routes
- [ ] Create `app/api/posts/route.ts`
  - GET: List posts (admin, support filter/sort)
  - POST: Create post
- [ ] Create `app/api/posts/[slug]/route.ts`
  - GET: Get post detail
  - PUT: Update post
  - DELETE: Delete post

### Task 5.2: Admin Pages
- [ ] Create `app/admin/posts/page.tsx`
  - Use post-list-admin
  - Add pagination
- [ ] Create `app/admin/posts/new/page.tsx`
  - Use post-form
  - Call create API
- [ ] Create `app/admin/posts/[slug]/edit/page.tsx`
  - Use post-form (pass initialData)
  - Call update API

---

## Implementation Order

1. Phase 1 (Basic Components) ’ Independent, can work in parallel
2. Phase 2 (Editor) ’ After Phase 1.3 complete
3. Phase 3 (Admin) ’ After Phase 1.1 complete
4. Phase 4 (Form) ’ After Phase 1.2, 2.1 complete
5. Phase 5 (API & Pages) ’ After all components complete

---

## Type Definitions (lib/types/post.ts)

```typescript
export interface AdminPost {
  slug: string
  title: string
  content: string
  excerpt?: string
  tags: string[]
  date: string
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

export interface PostFormData {
  title: string
  slug: string
  content: string
  excerpt?: string
  tags: string[]
  date: string
  status: 'draft' | 'published'
}

export type MarkdownAction =
  | { type: 'bold' | 'italic' | 'strikethrough' | 'code' | 'quote' }
  | { type: 'heading'; level: 1 | 2 | 3 }
  | { type: 'link'; text?: string; url?: string }
  | { type: 'list'; ordered: boolean }
  | { type: 'codeblock'; language?: string }
```

---

## Data Storage (Initial)

- JSON file based (`data/posts/*.json`)
- Each post is individual file
- Use slug as filename
- Can migrate to DB later

---

## Optional Features (Add Later)

- [ ] auto-save-indicator.tsx (auto-save)
- [ ] Search functionality (add to post-list-admin)
- [ ] Image upload (image-uploader.tsx)
- [ ] Category feature
