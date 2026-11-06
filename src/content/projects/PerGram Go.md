---
title: PerGram Go - Grocery Price Checker
description: A free iPhone app that reads grocery shelf tags on-device and tells you if the price is good, meh, or bad
date: 2026-09-21
tags: [swift, swiftui, vision, ios]
featured: true
thumbnail: pergram-good.jpg
images:
  - pergram-good.jpg
  - pergram-bad.jpg
  - pergram-items.jpg
link: https://asarmichil.com/pergram
github: https://github.com/AsarMichil/pergram
published: true
---
## Overview

Despite my brief stint as a math major, I do not want to do division in the meat aisle. PerGram Go puts any shelf price into one unit and checks it against the price you decided was good. I built it solo, and it's live on the Canadian App Store.

## How It Works

Apple's Vision reads the tag on the device a few times a second, and a Swift parser handles English and French tag formats. Nothing leaves the phone: no backend, no network requests, no third-party packages.

## What Went Wrong

Version 1.0 passed App Review with the scanner broken, because a layout change kept restarting the camera. I fixed it in 1.0.1, and camera changes now get tested on a real phone first.
