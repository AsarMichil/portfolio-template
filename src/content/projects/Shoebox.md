---
title: Shoebox - Photo Library for Many Drives
description: A native macOS app for cataloging and culling photos across many drives, built by directing a team of AI coding agents
date: 2026-10-17
tags: [c++, swift, macos, ai agents]
featured: true
thumbnail: shoebox-fullscreen.jpg
images:
  - shoebox-filmstrip.jpg
  - shoebox-import.jpg
  - shoebox-export.jpg
link: null
github: null
published: true
---
## Overview

Shoebox puts photos from every drive you own into one catalog you can cull from the keyboard, even after the drive is unplugged. It's a C++ core with a Swift and SwiftUI app on top.

I wrote very little of the code by hand. AI agents (Claude) wrote most of it, and my job was product owner and architect. In three weeks that came to about 74,000 lines of product code and 52,000 lines of tests.

## Building With Agents

The hard part isn't getting agents to write code. It's getting code you can trust. What worked:

- **Route by difficulty.** A fast model builds simple changes and a stronger model reviews and fixes them. Concurrency, file operations and format parsing go straight to the stronger model.
- **Design before code.** Risky work starts with a written design and an adversarial review, not a prompt.
- **Prove it on real files.** Every phase ends with a scripted measurement, not "it compiles."
- **Isolate parallel work.** Each agent builds in its own git worktree with its own app data.

The engineering principles in the project instructions are adapted from Lauren Tan's pstack: subtract before adding, settle data structures first, fix root causes, and build a script or lint before doing work by hand.

## Where It Stands

Five of seven roadmap phases are done, including import, culling and export. A beta comes next, once builds are signed.
