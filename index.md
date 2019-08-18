---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: homepage
description: Web home of James Vanderburg.
---
{% assign posts_total = site.posts | size %}

# My Work

[Gaslight Team App](/projects/#gaslight-team-app)  
[eCampus Redesign](/projects/#ecampus-redesign)  
[Dungeons & Dragons](/projects/#dungeons-dragons)  
[Fish Camp Online](/projects/#fish-camp-online)


{% if site.skills %}
  {% include skills.html %}
{% endif %}

{% if site.interests %}
  {% include interests.html %}
{% endif %}

{% unless posts_total == 0 %}
  {% include thoughts.html %}
{% endunless %}
