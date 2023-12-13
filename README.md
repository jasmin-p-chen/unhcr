# Final Project: UN Population Data App

Final project for the GA 12-week part-time JavaScript Course

This App is the final project of a 12-week part-time JavaScript Course run by General Assembly, demonstrating some of the content covered, including:

- writing JavaScript
- API requests
- using React
- Routing

## About the Pop Data App
## App Features

## The UNHCR API
UNHCR’s Refugee Data Finder App is freely available and provides data on the world’s forcibly displaced and stateless populations.
They have also made an API available, which doesn't require any API key or authorisation to access.

- [An overview of API provided by UNHCR](https://www.unhcr.org/refugee-statistics/insights/explainers/forcibly-displaced-api.html)
- [The API documentation](https://api.unhcr.org/docs/refugee-statistics.html)

## Technologies used

JavaScript, React, CSS

## Project Planning and Implementation

The main requirement of the final project was that it needed to load data from an API that supported CORS (for AJAX requests) and did not require OAuth and had not been used in previous classwork.

I found the UNHCR API while I was searching for data about refugees, for my own interest. I've worked broadly in the areas of social justice, gender, health and migration for many years, and we have often struggled to find data, so the UNHCR data finder app was a revelation!

I had quite a few concerns about how much I would be able to achieve with that was different from the UNHCR data finder, but even recreating a portion of it would be flexing all the learning of the past 12 weeks, so I decided to dive in.

## Wireframe and Design
- I wanted to include some global stats on the front page and then link people to a list of countries, so they could search for more detailed Country statistics.
- I wanted the look to be as clean and accessible as possible. 
- The main design challenge is to try and add charts to visually represent the data.

## Technical Hurdles
There is so much data available through the API, that I decided I need to start small and hope to scale up later. So first I opted to limit my dataset for Country Details to 2022, because that is the most recent, full year data available.

### Using Github
I have had a Github account for a long time, but have never quite understood what I was doing. Which became very clear in this project because I nested my folder twice. It was a complete mess.

It was such a mess I felt like the best thing to do was to start a new repo, but instead I summoned the wisdom of the internet and found some great online resources, none more so than `git help` on the terminal. These two videos in particular demystified my issue in the best ways:

- ["Git remove Nested Repo"](https://www.youtube.com/watch?v=BEE66nNi-3c) video from Charlie Calvert
- ["Removing folders within directories in git"](https://www.youtube.com/watch?v=BEE66nNi-3c) video from Alanna Risse

## Next Steps
