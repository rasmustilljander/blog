---
title: "Hello, World"
description: "The first post on this blog — a quick introduction and a test of all the formatting features."
pubDate: 2026-04-20
heroImage: /images/hello-world.jpg
tags: [meta, welcome]
draft: false
---

Welcome to my blog. This is the first post.

## What this blog is about

I'll be writing about software development, technology, and whatever else interests me. Posts will be infrequent but hopefully worth reading.

## Code example

Here's a quick TypeScript snippet to test syntax highlighting:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

## Images

Hero images go in `public/images/` and are referenced by `/images/filename.jpg` in the `heroImage` frontmatter field. Images inside the post body work the same way:

```markdown
![Alt text](/images/my-image.jpg)
```

## Tags

Posts can be tagged with one or more topics. Tags link to a filtered list of posts with the same tag — useful for finding related content.

## Blockquote

> The best time to plant a tree was 20 years ago. The second best time is now.

---

That's it for the first post. More to come.
