
# Project Title
ByteBack

## Overview
![](ByteBack-logo.png)

We all know that interviews bite, now is your change to ByteBack with the next generation interview prep
tool. This interactive web app is designed to help tech graduates prepare for those daunting technical interviews with tailored flash cards, algorithm prompts, and bytes of advice for interview success. 

### Problem Space

Interviews are stressful enough as they are, this tool is designed to help candidates prepare for those 
difficult technical interviews based on the specific job title and/or skill set defined in the job description. The app features two main sections, a flashcard based game which tests the user on multiple choice, and true/false questions, and an algorithm challenge. The flashcards can be randomized based on the job title (ie. Jr. Software Engineer), or filtered based on the specific skill sets (ie. React, mySQL, HTML, CSS) required for the role. The algorithm question challenges the user to test their coding skills in a functional code editor that allows them to run their code, or receive a clean solution if they get stuck. 

### User Profile

- Candidates for roles in the tech field:
    - New graduates looking for their first role
    - Candidates who are moving into a new field
    - Those that struggle with interview anxiety
    - Overacheivers looking to absolutely kill an interview
    - Myself and my brainstation cohort 

### Features

(General)
- As a user, I want to be able to select from a series of job titles that matches my own
- As a user, I want to be able to define the experience level or seniority of the role I'm prepping for
- As a user, I want to be able to select specific skills or competencies to be tested on

(Flashcards)
- As a user, I want to be able to define the length of the test (10, 15, 25, 30 questions)
- As a user, I want to be given the correct answer if I get a question wrong
- As a user, I want to be able to see my test results broken down into topics (HTML, React, Node.js)
    HTML 5/5    React 4/5   Node.js 2/5
- As a user, I want to be given the chance to retest myself on the areas I am struggling with
- As a user, I want to be give links to the applicable MDN pages to help study certain topics

(Algorithm)
- As a user, I want to be provided with a relavent algorithm challenge
- As a user, I want to be able to input my code into a frontend editor and run it
- As a user, I want to have the option to view an acceptable solution to the challenge
    (Future Implementation: As a user, I want to be able to get feedback or decoding on my code)

## Implementation


### Tech Stack

-React
-JS or Typescript (will attempt typescript as this is used frequently in industry)
-Express
-MySql2
-Client Libraries:
    -react
    -react-router
    -axios
    -Materials3
Server Libraries:
    -express
    -knex

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

### APIs

MVP approach will use a static database of questions organized by job title/skill category/difficulty

Future implementation would include the use of Google Gemini to create a dynamic link to the AI chatbot
where the user would be able to input their specific job title, and get feedback on their algorithm. 
List any external sources of data that will be used in your app.

### Sitemap

- Landing Page (Select job title and skills)
- Flashcard page (select number of flashcards and take quiz)
- Results page (provides breakdown of score for each section)

Future Implementation
- Debugger (Contains code editor with present debugging code)
- Algorithm Challenge (Contains code editor and a set coding challenge)


### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

![](SQL-database-diagram.png)
Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.
