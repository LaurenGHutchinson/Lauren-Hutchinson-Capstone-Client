
# Project Title
ByteBack

## Overview
![](./assets/ByteBack-logo.png)

We all know that interviews bite, now is your change to ByteBack with the next generation interview prep
tool. This interactive web app is designed to help tech graduates prepare for those daunting technical interviews with tailored flash cards, algorithm prompts, and bytes of advice for interview success. 

### Problem Space

Interviews are stressful enough as they are, this tool is designed to help candidates prepare for those 
difficult technical interviews based on the specific job title and/or skill set defined in the job description. The app features three main sections, a flashcard based game which tests the user on multiple choice, and true/false questions, a debugger, and a coding challenge. The flashcards can be randomized based on the job title (ie. Jr. Software Engineer), or filtered based on the specific skill sets (ie. React, mySQL, HTML, CSS) required for the role. The debugger gets the users brain focusing on syntax and flow as they need to correct the issues hiddne throughout the provided code. Lastly the algorithm question challenges the user to test their coding skills in a functional code editor that allows them to run their code, or receive a clean solution if they get stuck. 

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

(Debugger)
-As a user, I want to have the chance solve simple debugging issues in a code editor

(Coding Challenge)
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

Potentials:
    -Monaco (for live code editors)


### APIs

MVP approach will use a static database of questions organized by job title/skill category/difficulty

Future implementation would include the use of Google Gemini/OpenAi, or other AI models to create a dynamic link to an AI chatbot
where the user would be able to input their specific job title, and or job description, and get feedback on their algorithm. 


### Sitemap

- Landing Page (Select job title and skills)
- Flashcard page (select number of flashcards and take quiz)
- Results page (provides breakdown of score for each section)

Future Implementation
- Debugger (Contains code editor with present debugging code)
- Algorithm Challenge (Contains code editor and a set coding challenge)


### Mockups

![](./assets/byteback-landing-page.png)
![](./assets/byteback-flash-cards.png)

### Data


The data is separated into five different tables: jobs-titles, skills, job-skills, questions, and answers. Each table is connected through the use of foreign keys. An example of the data flow and an example of populated tables has been included below.  
![](./assets/SQL-database-diagram.png)
![](./assets/dataflow-example.jpg)


### Endpoints

The following endpoints represent the MVP approach where the initial seed data is pre-populated for a select number of job titles. Future addition of a prompt based AI model will be researched and implemented once the basic functionality of the front end and back end are complete. 

GET / jobTitles
- Will populate the drop down menu for the user to select from the list of predefined jobs

Response:
[
    {
        "id": 1,
        "title": "Back-end Web Developer"
    },
    ...
]

GET / jobSkills/:id
- Will create an array of buttons representing the skills commonly related to that job description (user can select up to 5)

Response:
[
    {
        "id": 1,
        "job_id": 1,
        "skill": "JavaScript (Node.js)",
        "category": "Programming Languages"
    },
    ...
]

GET / relatedQuestions/:skillId
- Will return an array of evenly distritbuted questions dependent on the number of flashcards specified
 ie. if 10 questions are selected, there will be two from each skill selected.
- Will return a joined array 

 Response:
[
    {
        "id": 1,
        "skill_id": 1,
        "question": "What is the purpose of a web server?",
        "category": "Back-end development"
    },
        {
        "id": 2,
        "skill_id": 6,
        "question": "Which HTTP method is used to create a new resource?",
        "category": "Web Development"
    },
    ...
]

GET / answers/:questionId
- For each question, the answers will populate and will be displayed as clickable links. For each answer, an attached boolean expression will indicate the correct answer.

 Response:
[
    {
        "id": 1,
        "question_id": 1,
        "answer-text": "To handle client requests and serve files",
        "is-correct": "TRUE"
    },
        {
        "id": 2,
        "question_id": 1,
        "answer-text": "To design user interfaces",
        "is-correct": "FALSE"
    },
    ...
]

useStates in the front end will keep track of the number of correct and incorrect answers for each 
category. Once the quiz is finished, an overview of the results will be given showing users where
they need to improve. 

## Roadmap

Timeline below is subject to changes. Time estimates given will most likley be for the initial setup. 
Testing, iterating, and cleaning up time may exceed the given times. 

- (1 hour) Set up front end repo and react app
    - Add all dependencies, connect to remote git repo
    - Add all necessary pages/components

- (1.5 hours) Create site styling, organize all necessary assets, create partials (varibles, global, mixins)

- (1 hour) Set up back end repo and express server
    - Define folder structure, create all empty controllers/index/routes that will be required

- (2-3 hours) Compile all static seed data starting small (two job titles) and ensure formatting is compatible with 
sql databases

- (2-3 hours) Set up my database, create the migration folders which will join the necessary tables for my get requests

- (2-3 hours) Create back end api calls and test functionality using thunderclient

- (3 hours) Build landing page design (client side)

- (3 hours) Build flashcard page design (client side)

- (3 hours) Connect landing page to server

- (3 hours) Connect flash cards to server

- (2 hours) Test functionality (does not include fixes)

- (5 hours) Fix bugs

- (1.5 hours) Get site deployed on heroku and netlify for demo

---

## Future Implementations

The MVP approach will be to create a server side database using mySql which will house all of the seed data populated through chatgpt text prompts. Throughout the week following up to the acceptance of the proposal, research will be conducted to see the potential for adding in a 
direct ai prompt model. If feasible, the inputs defined above would be adjusted to:
    - containing a search bar to input the exact job title,
    - text box for inputting job description to extract job requirements

Future Features:
- Debugging section built with a live code editor. The code editor is populated with a buggy piece of code, the user must identify the issues
  and run the code. 
- Code Challenge section built with a live code editor. The user is given a prompt similar to the daily challenges in which they will need to 
  create a snippet of code to complete a function. 
    - With the integration of text prompt ai integration, the ai could provide feedback or support (hints) if the user is stuck. 
