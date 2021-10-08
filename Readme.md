# Quiz-a-mania

## Code Institute: Milestone Project 2

### HTML/CSS/Javascript Essentials: Interactive front-end website

![Responsive]()

[Click here to view the live project.](https://pratimagurav.github.io/quiz-a-mania/)

[Click here to view the repository.](https://github.com/PratimaGurav/quiz-a-mania)

## Table of Contents:
- [User Experience (UX)]()  

- [Features]()

- [Technologies Used]()
  
- [Testing]()

- [Deployment]()

- [Credits]()

- [Acknowledgements]()
    

## User Experience (UX)

-   ### Site Goals
     Quiz-a-mania is a interactive website which enables users to play quiz by answering a fixed set of questions. The quiz is set to test General Knowledge of users with multiple choice questions. Questions are readout if you click the audio/play button. You score for every correct answer and get prompted if your answer is correct or incorrect. You have an option to submit your score and rank yourself on the high scores by providing your username.

-   ### Target Audience    
      The site is targetted to everyone who loves to play online quiz with an aim to score high. 
      People of all ages from different background can play this fun and interactive quiz.
   

-   ### User stories

    -   #### First Time Visitor
    1. I would like to play a fun quiz that would test my knowledge.
    2. I would like to know how I rank on the High Scores.
    3. I want a quiz that is easy to play.
       

    -   #### Returning Visitor
    1. I would like to play a fun quiz that would test my knowledge with few new set of questions.
    2. I would like to access the application easily.
    3. I would like to know the High scores quickly.
         

    -   #### Frequent User 
    1. I would like to have sufficient questions to kep me interested.
    2. I would like to increase my knowledge while playing the quiz.
    3. I would like to give feedback if needed. 
        

-   ### Design
    -   #### Colour Scheme
        The main colours used are Electric Lavender, Cookie Brown, Purple Flower, Daisy Bush, Medium Green, Jasper. These colours complement eachother and maintain good contrast levels.
          
    
    -   #### Typography 
        Gluten font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Architects+Daughter is used for headings with Sans Serif as the fallback.    
        

    -   #### Imagery
        Background image is used to strike and catch users attentions.
         

*   ### Wireframes

    -   Balsamiq Wireframes - [Wireframes](assets/documents/Quiz-a-mania.pdf)


## Features

 ### Existing Features

   - __The Scope__ 
      The scope of Quiz-a-mania has been created with the following features :
      - Interactive Quiz Application.
      - Sound button to read out the current questions.
      - Ability to submit scores to High-Scores.
      - Fully responsive design.
      - Easy navigation bar which is completely responsive.
      - Help page with instructions on how to play.
      - Simplified feedback form.
  
    
   - __Navigation Bar__

      Navigation menu with links to different pages within the application. It is same on all pages for simplicity and easy navigation.
      - Play button to start the quiz.
      - High scores to see the saved high scores.
      - Help to know the instructions of the game.

   - __Home Page__

      A logo mentioning the application name and navigation bar.
   
   - __Quiz__
      
      - The counter mentioning which question you are at currently.
      - Sound button to be clicked to read out the current questions.
      - Your current score.
      - The question which has to be answered.
      - Audio for correct or incorrect answer.
      - 4 options to select from, out of which one is correct.
     
   - __Game Over__ 
      - Your score at the end of the game.
      - Text field to enter your username.
      - Save button to save your High scores.
      - Play again button to start the quiz again
     
   - __High Scores__ 
     - Displays list of top 10 high scores in descending order of ranking.
     - Play button to start the quiz.
     - Clear Scores to clear the high scores.

   - __Help__ 
     - Instructions on how to play the quiz.
     - Feedback form to provide the feedback.


## Technologies Used

- ### Languages Used

  -   [HTML5](https://en.wikipedia.org/wiki/HTML5)
  -   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  -   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  -   [JSON](https://en.wikipedia.org/wiki/JSON)
  -   [MARKDOWN](https://en.wikipedia.org/wiki/Markdown)

- ### Frameworks, Libraries & Other Technologies used

  - [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the font into the style.css file which is used on all pages throughout the project.
  - [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
  - [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
  - [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.   
  - [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process. 
    
## Testing

  The [W3C Markup Validator](https://validator.w3.org/nu/) and [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) were used to validate every page of the project to ensure there were no syntax errors in the project.

   - Following errors were found and fixed while validation:-  
    - (Index.html) No space between aria label attributes.   
      - [Error](assets/documents/w3-validator-index-error.jpg) 
      - [Results](assets/documents/w3-validator-index-error-fix.jpg)
    
    - (Highscore.html) No space between aria label attributes.   
      - [Error](assets/documents/w3-validator-highscore-error.jpg) 
      - [Results](assets/documents/w3-validator-highscore-error-fix.jpg)  
    
    - (Help.html) Element br not allowed as child element ol. No space between aria label attributes. 
      (Fixes) Element br was removed and added margin between each ol  
      - [Error](assets/documents/w3-validator-help-error1.jpg) 
      - [Error](assets/documents/w3-validator-help-error2.jpg) 
      - [Results](assets/documents/w3-validator-help-error-fix.jpg)
    
    - (Game-over.html) Empty heading. No space between aria label attributes.   
      - [Error](assets/documents/w3-validator-game-over-error.jpg) 
      - [Results](assets/documents/w3-validator-game-over-error-fix.jpg)  

    - (Formatting error) Questions and options containers formatting was done together.
      (Fixes) Questions container was given different id and formatting.         
       - [Error](assets/documents/option-width-formatting-error.jpg) 
       - [Results](assets/documents/option-width-formatting-error-fix.jpg)  
       Help page was not formatted correctly.
       (Fixes) Width of the ol/list was adjusted accordingly. 
       - [Error](assets/documents/help-page-formatting-error.jpg) 
       - [Results](assets/documents/help-page-formatting-error-fix.jpg)  
 

  - ### Lighthouse Results

    -

  - ### Further Testing

   - 

  - ### Known Bugs

    -  

## Deployment

 - ### GitHub Pages 

  The project was deployed to GitHub Pages using the following steps...

   1. Log in to GitHub and locate the [GitHub Repository](https://github.com/PratimaGurav/quiz-a-mania)
   2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
   4. Under "Source", click the dropdown called "None" and select "Main Branch".
   5. Click "Save".
   6. The page will automatically refresh and provide you with a link to the Live GitHub Page for the repository.

  The Page can sometimes take longer to load and go live which is an expected behaviour. 

 - ### Making a Local Clone
 
    1. Log in to GitHub and navigate to the [GitHub Repository](https://github.com/PratimaGurav/quiz-a-mania)
    2. To clone the repository using HTTPS, click Code and copy the address. 


## Credits

  - ### Code
    - [James Q Quick](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx) was used as inspiration and referred to build this quiz. 
    - [SpeechSynthesis](https://codingislove.com/speech-with-javascript/) was used to implement speech synthesis to read out questions and to prompt correct or incorrect answers.
    - [W3 Schools](https://www.w3schools.com/) was used throughout the project majorly for styling and alignment purpose.

  - ### Content
    The following websites were referred to gather quiz question for the project.  
    [BBC Food Good](https://www.bbcgoodfood.com/howto/guide/food-quiz)
    [GK Today](https://www.gktoday.in/)
    [Quiz Wine](https://www.quizwine.com/)
     

  - ### Media
    Background image used within this site is free and do not incur any copyright issues. This image has been provided by following website:
  
    - [Pixabay](https://pixabay.com/illustrations/purple-abstract-background-1780371/)
        
   

## Acknowledgements

  -   My Mentor for continuous helpful feedback and advises.
  -   Slack community, Tutors and my fellow slackers for being available at any given time of the day.


## [BACK TO TOP]