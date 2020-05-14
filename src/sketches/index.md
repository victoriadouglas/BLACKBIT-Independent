---
layout: layouts/page.njk
title: Sketches
description: Oodles of noodles.
logo: emojipencils
backgroundcolor: e8ff00
eleventyNavigation:
  key: Sketches
  order: 2
sketches:
  - 1
  - 2
  - 3
  - 4
---

{% for item in sketches %}

<p>poopy{{ item }}</p>
{% endfor %}
