---
title: Auto DJ
description: Automatic song mixing for Spotify playlists, with a React DJ deck and a Python analysis backend
date: 2025-03-01
tags: [react, python, fastapi, music, spotify api]
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

## Overview

Auto DJ mixes the songs in a Spotify playlist for you. You connect Spotify, pick a playlist, and a Python FastAPI backend analyzes each track for BPM, energy, key and possible mix points. The React frontend is a DJ deck with EQ controls, BPM sliders and a crossfader.

## Where It Stands

This is an older project. The analysis is static: it matches tempo and suggests a transition between two songs, with no trained model behind it. Reading the research on cue point detection showed me that real mixing needs beat tracking and harmonic analysis, which I'd have to learn audio signal processing and some music theory to do properly.
