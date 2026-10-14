---
title: How to write a post here
description: tldr; create a folder in content/posts, add index.md, and you're done
date: 2026-10-13
tags: [meta, tutorial]
draft: false
---

This is a short tutorial on how this blog works, so future-me doesn't have to remember.

## Create a post

1. Make a new folder under `content/posts/`, named after the URL you want — for example `my-new-post/`.
2. Add an `index.md` inside it.
3. Put any images for the post in the same folder; they're bundled automatically.

## Frontmatter

Every post starts with a small block of settings:

```md
---
title: My post title
description: tldr; one-line summary shown in the post list
date: 2026-10-13
tags: [notes]
draft: false
---
```

Set `draft: true` while you're still writing — draft posts won't be published.

## Writing the body

Sections use `##`, since the page title is already the top heading. Separate paragraphs, lists and headings with a blank line. That's it — write the markdown, and the site does the rest.
