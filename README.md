# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Kevin Ramos

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/childlike-purple-larch

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/js/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I encountered during this project was creating the timer for the game. I started by creating a timer function but then I realized that I will be needing more functions to make the timer function properly. I concluded that I will need to use three sepereate functions for the timer. One function to start the timer, one to stop the timer, and one to decrement the time until it reaches zero. The timer starts when the startGame function is called. The startGame function uses the setInterval function that calls the countdown function, the countdown function is the function I am using the decrement the count until zero. The interval is set to 1000ms. Whenever the user wins a round or the loseGame function is called, the clearTimer function will be used. clearTimer resets the variables relating to the timer back to what they orignially were. For intance I used timeLeft to store the amount of seconds left in the round. Whenever the clearTimer function is called, timeLeft is reset back to 3. The last challenge I had was having the timer start after the clue sequence. Since every round the clue sequence is a different length, the timer needs to start at a different place every round. to solve this I used the setTimeout function. I had to try lots of different values for the delay.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

A question I have about web development is how a website is able to use cookies to store the data of users and use it for their future visits to the website. Where do they store and access the data that they have for the users? Is it on the users computers or does the site save is on the server? For instance in this game if I wanted to have a counter that displayed how many times the user has won the game on all their visits. How would I be able to do that in code?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project I would start by formatting the buttons of the game to look better for the player. I would tinker with the timer and have it start exactly when the code sequence stops playing instead of having a quarter second delay. I would choose better colors for the website to make it more appealing to the eye. I would add different sounds because the ones used for the game can be annoying after repeated play.
I would add a function that keeps track of how many times you’ve won and lost in a given session, and everytime a new game is started, the pattern is different without reloading the window.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
