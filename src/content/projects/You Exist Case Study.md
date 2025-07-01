---
title: You Exist
description: Full-stack social web application built with SvelteKit focusing on design iteration and user experience
date: 2024-12-01
tags: [sveltekit, full-stack, web design, ui/ux, social media]
featured: true
thumbnail: you-exist-home.png
images:
  - you-exist-signup.gif
  - you-exist-profile.png
  - you-exist-other-profile.png
  - you-exist-small-profile.png
link: https://michils.com
github: https://github.com/asarmichil/you-exist
published: true
---

# You Exist: Learning Through Building

You Exist is my ongoing full-stack social application built with SvelteKit, and it's become my playground for learning through iteration. The project started simple but has evolved into something that taught me more about design and user experience than any tutorial ever could.

## The Form Problem

Early on, I encountered a form company with interfaces that just _felt_ incredible to use [(typeform)](https://www.typeform.com/). I wanted my signup flow to feel that smooth, but I also needed features they didn't offer - specifically, a multi-step routed signup flow where each step was its own page.

I had several options: the new View Transitions API, Svelte's built-in transitions, custom CSS animations, or a motion library. Instead of picking one immediately, I built mini prototypes of each approach.

The View Transitions API looked promising but didn't give me the control I expected. Custom CSS felt too rigid when I wanted to reorder steps. Svelte transitions worked well but had limitations for complex routing scenarios.

## The Solution

I ended up creating a custom component system that leveraged Svelte's transitions in a more flexible way. I built a layout that could dynamically handle step ordering, removal, and addition while maintaining smooth animations between pages.

This taught me that sometimes the best solution isn't choosing between existing tools - it's understanding them well enough to combine them creatively.

## Why I Love SvelteKit

Throughout this project, I keep coming back to how elegant SvelteKit makes complex interactions. The reactivity system just makes sense. State management that would require multiple libraries in React often boils down to simple, readable Svelte stores.

The framework gets out of your way and lets you focus on the actual user experience. Whether it's smooth dark/light mode transitions or complex form validation, SvelteKit provides the primitives to build exactly what you envision.

## Learning Through Iteration

You Exist has taught me that real learning happens when you're solving actual problems, not following tutorials. Each design decision - from navigation patterns to color schemes - forced me to think about user mental models and expectations.

The project is still evolving, and that's the point. It's a living laboratory where I can experiment with new ideas, test different approaches, and build something that genuinely feels good to use.
