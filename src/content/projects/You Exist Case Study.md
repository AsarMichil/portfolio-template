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

## Overview

You Exist is a full-stack social web app built with SvelteKit. It's where I learned Svelte, UI and UX, and I started it long before AI was any good at development or design, so I worked all of it out by hand.

## The Signup Flow

I wanted signup to feel as smooth as [Typeform](https://www.typeform.com/), but as a multi-step flow where each step is its own page. I prototyped the options first. The View Transitions API gave too little control, plain CSS animations were too rigid for reordering steps, and Svelte's transitions alone struggled with routing. I ended up building a layout on top of Svelte's transitions that animates between routed pages and lets steps be reordered, added or removed.
