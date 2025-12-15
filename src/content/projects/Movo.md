---
title: Movo - Car Share Cost Calculator
description: A web app that compares Evo, Modo, and personal vehicle costs for trips in Vancouver using real-time routing and zone detection
date: 2025-12-15
tags: [svelte, typescript, mapkit, web-app]
featured: true
thumbnail: movo-map-dark.png
images:
  - movo-map-dark.png
  - movo-mobile-dark.jpeg
  - movo-mobile-web-light.jpeg
link: https://movo-blush.vercel.app
github: https://github.com/AsarMichil/movo
published: true
---
## Overview

Movo helps Vancouver residents decide between car-share services and personal vehicles by calculating real trip costs. Built with SvelteKit and Apple MapKit JS, it factors in driving time, distance, parking, and service-specific rules like home zone requirements.

## Technical Implementation

The app performs client-side route calculations using Apple's directions API, then compares costs across Evo Car Share, Modo Co-op, and personal vehicle ownership. It detects whether destinations fall within Evo's home zones by checking coordinates against GeoJSON boundaries, adjusting one-way vs round-trip availability accordingly.

State management uses Svelte 5's runes system with URL parameters for shareable trip links. The responsive design includes a fixed sidebar on desktop and a snap-drawer on mobile that expands to show calculation results.

## Current Status

This is an active side project I work on intermittently. Current features include BCAA membership discounts, EV vs gas vehicle selection, and customizable parking walking distances. Future improvements planned include transit cost comparisons and more granular vehicle type pricing.