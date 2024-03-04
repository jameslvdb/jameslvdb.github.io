---
layout: layouts/markdown.njk
---
# Golf at The Swing

Working at the [PGA of America](https://www.pga.com) has its perks. Part of the
PGA Frisco campus is The Swing, a 10-hole, par-30 short course designed by Gil
Hanse and Beau Welling. The longest hole on the course is about 100 yards. It's
a great place to work on your short game. 

This March, we're doing a fitness challenge. Everyone who signs up gets sorted
into teams with the goal of seeing which team can log the most steps during the
month. My goal is to knock out two birds with one stone: get my steps in, and
get better at the worst part of my golf game. Walking to the course, playing,
and walking back is about 4,500 steps. Not too bad!

I'll be updating this page with my stats as I play the swing this month. I'll be
keeping track of things like putts and greens in regulation on top of my score.

{% for round in collections.the-swing %}
  {{ round.content }}
{% endfor %}
