---
title: Auto DJ
description: AI-powered music mixing application analyzing Spotify playlists with React frontend and Python ML backend
date: 2025-03-01
tags: [react, python, fastapi, machine learning, music, spotify api]
featured: true
thumbnail: auto-dj-hero.jpg
images:
  - auto-dj-mixer.jpg
  - auto-dj.gif
  - auto-dj-home.jpg
link: https://jockee-landing.vercel.app/
github: https://github.com/asarmichil/jockee
published: true
---

# Auto DJ: Building at the Edge of My Knowledge

Auto DJ started as a simple idea: what if you could automatically mix songs from your Spotify playlists? It's become a fascinating journey into music analysis, machine learning, and the humbling realization of how much I don't know.

## The Technical Stack

The app uses React for the frontend with a full DJ interface - EQ controls, BPM sliders, crossfader, and smooth animations. Users connect their Spotify account, select a playlist, and the Python FastAPI backend analyzes each track for musical properties like BPM, energy, key, and potential mix points.

Right now, it performs static analysis and suggests transitions between songs, but the goal is to eventually train a model that can make more sophisticated mixing decisions.

## Diving into Research

Reading papers like "Automatic Detection of Cue Points for the Emulation of DJ Mixing" and "Automatic music mixing with deep learning and out-of-domain data" opened my eyes to how complex this problem really is. There's an entire field of music information retrieval that I knew nothing about.

The papers revealed sophisticated techniques for beat tracking, harmonic analysis, and transition detection that made my static BPM matching feel elementary. But they also showed me a path forward - this is a real research area with concrete techniques I can learn and apply.

## The Knowledge Gap

Here's what's humbling: I don't really know how music is made, how synthesizers work, music theory, or how to DJ properly. I just love music in all its forms. Building this project means constantly confronting the gaps in my knowledge.

Do I need to understand harmonic mixing? Probably. Should I learn about audio signal processing? Definitely. Can I build something useful while learning these fundamentals? That's what I'm testing.

## Growth Mindset in Action

This project embodies forward-thinking problem solving. Instead of waiting until I "know enough," I'm building with what I have and expanding my knowledge as I hit limitations. The static analysis works but feels limited - so the next step is gathering real DJ sets and training data.

Each limitation becomes a learning opportunity. The current two-transition system is basic, but it's a foundation I can build on. The real value isn't in the current feature set - it's in the understanding I'm developing about music, machine learning, and the intersection of the two.

Auto DJ represents everything I love about software engineering: starting with curiosity, building something tangible, and using that process to guide deeper learning. It's messy, incomplete, and exactly where I want to be.
