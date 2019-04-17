---
layout: post
title: Projects
permalink: /projects/
description: Projects I have completed
---
# Projects

{::comment}
### Capstone Project
- Spring 2019

At Texas A&M, all computer science students are required to take a
[capstone course]({{ site.baseurl }}/coursework#senior-capstone-design-csce-482){:target="_ blank"}.
For my project, I worked with my team to build an application to harness the
power of large touchscreen displays to enhance the tabletop roleplaying game
experience. We used Unity and a Perceptive Pixel display from Microsoft to build
our application.
{:/comment}


### Gaslight Team App
- Summer 2018  

[Gaslight](https://teamgaslight.com){:target="_ blank"} is a software consultancy
in Cincinnati, Ohio. During my internship with them over the summer of 2018, I
helped update their internal team app, which is a Rails application with a React
frontend. I helped build a scheduler for the application, which is a responsive
calendar to give employees greater visibility into Gaslight’s ongoing projects
and employee assignments. I participated in user story mapping, learned React on
the job, wrote RESTful APIs, and built ActiveRecord and ActiveModel objects to
create the scheduler. I also performed ActiveRecord query optimization,
collaborated with a designer, and pair programmed with other interns daily.

The scheduler shows engagements and assignments on a four- or twelve-week basis (in addition to showing one week in the past). Assignments are shown/hidden underneath each project by clicking on the engagement's bar. Previous and future engagements can also be shown by using the weekly navigation buttons in the top right corner. Below is a screenshot of the scheduler showing the "Bench" engagement expanded (assignments here represent a lack of assignment elsewhere for a given week). Employees can be added to an engagement using the **+** button, and the engagement itself can be edited with the notepad button.

![teamapp]({{ site.baseurl }}/assets/images/team_app_bench_expanded.png)

### Fish Camp Online
- Spring 2018  

[Fish Camp](https://www.tamu.edu/traditions/orientation/fish-camp/){:target="_ blank"}
is Texas A&M's four-day extended orientation program that serves over 6,000 incoming
freshmen each year. This past year, over 2,500 students submitted counselor
applications. Previously, directors would spend several hours _each day_
manually preparing applications during the three week review period. They would
create PDFs every day by consolidating application and interview data into an
Access database, and they had to manually perform data validation. Fish Camp
needed a better way to review these applications.

Our solution, Fish Camp Online, is a Rails application with a lightweight HTML
and CSS frontend on top of a Postgres database. Our goal was to create a site
where the ~100 staff members can write interview transcripts, review
applications, and keep track of their preferred applicants with a rating system.

The source code for this project is publicly available
[here](https://github.com/bradenbird/fish-camp-project){:target="_ blank"}.
