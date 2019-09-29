# CPE 1040 - Introduction to Computer Engineering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

### 1. Summary

This assignment asks you to go through a [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, and write parallel programs using the JavaScript equivalent of the code in the course modules. This assignment is submitted through Github.

### 2. Requirements

#### 2.1 Section programs

1. The CS course is broken down into thematic sections. There are 5 sections + 1 midterm project + 5 sections + final project. Each section has 4 parts. You want the _Activity_ part, which contains the section's CS material and Blocks.

2. You need to write a _working_ JavaScript (JS) program for the micro:bit for each of these sections/projects, for a total of 12.  

3. For the non-project sections, you are required to use the JS equivalent of the material from the section. _**Note:** For these programs, you are allowed to look at the JS translation of Blocks programs._

4. For the midterm project, you are required to use the JS equivalent of the material from all 5 preceding sections.  _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._ (An aside: if you don't know how to read a statement like "you are not allowed to", the intended and preferred interpretation is "you can do whatever you want and won't be penalized by me, but, if you want to learn most effectively, I suggest that you do not resort to...".)

5. For the final project, you are required to use the JS equivalent of the material from all 10 preceding non-project sections. _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._

#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags

_**Note:** Add your program descriptions below._

### v0.1

**Makes a smiley face then changes to a frowny face.** 

[Activity 1](v0.1.js)

### v0.2

**Makes an X when A is pressed, and a dot when B is pressed. When A+B are pressed simultaneously, it clears screen.**

[Activity 2](v0.2.js)

### v0.3 

**Is a scorekeeper program, it keeps track of how many times you press the A button, the B button, and A+B Combined.
When shook, the program will display the A presses, then the B presses, then the A+B presses in order.**

[Activity 3](v0.3.js)

### v0.4

**This program is just a simple rock-paper-scissors program, with a immediately giving feedback to which one is chosen. 
Probably a bit better when it is played vs another player. When Pin P0 is pressed, it gives the score for Rock, Paper, and then
Scissors, in that relative order.**

[Activity 4](v0.4.js)

### v0.5

**This is a simple program that creates a dot at point 0,0 and makes it move from left to right, while blinking fast. Not a whole lot more to this program unfortuately, just a good introduction to loops and plotting points.***

[Activity 5](v0.5.js)

### v0.6 Mini Project

**Read Design of Mini Project below**

[Mini Project](v0.6.js)

### v0.7 

**This is just the LED plotting, animations, and the random pattern generator. On start, it creates a face which alternates from :) to :O, on button A press, it makes a random pattern.**

[Activity 7](v0.7.js)

### v0.8

**This is the Boolean operation tutorial activity, where a double coin-flip game is created and then executed. On button A press, the game is initiated and the winner is displayed. On button B, the score for Player A is shown, and then the score for Player B is shown.

[Activity 8](v0.8.js)

### v0.9

**This is the Binary translator from the assignment page, on button A press it adds a 1, and button B press it adds a 0. It then adds these together to a decimal number. On buttons AB, it shows the number.**

[Activity 9](v0.9.js)

### v0.10

**This is the basic Morse Code program, on A press, it sends a Dot, on B Press, it sends a dash, and on AB press it sends a break, or pause. it's instantanious with another microbit, where it shows up.**

[Activity 10](v0.10.js)

### v0.11

**This is the basic Charades program, on screen up, it displays a word to act out. on shake, it changes the value so that the word wont come up again**

[Activity 11](v0.11.js)

### v0.12

**See Final Project Design at bottom of page**


## Designs

v0.1 Design 

Just basically looked at the JS code and edited it to make it something that was *my own* but it was super simple.

v0.2 Design 

I decided to go essentially from the ground up on this one, but due to it being such a simple program again, it was relatively easy.

v0.3 Design

I decided to attempt to code 100% from my knowledge of the Blocks to JS, and this one wasn't exactly hard, but it was a bit time consuming, because I *smartly* decided to use the JS editor to manually input the LED commands. I had to look up how to do variables,
but it's starting to come together.

v0.4 Design

I successfully wrote this program from scratch, I got a bit stuck on the if else statements but after a little bit of experimenting, I got it all to work. Definitely was a bit faster than even v0.3.

v0.5 Design

I couldn't figure out how to write a repeat command in JS, so I had to find it in blocks to figure out how to do it. After finding how to complete it, I figured out the plot and unplot functionality based on the blocks but without placing them. Hooray! The index changing by 1 just by having it be a different variable is very unintuitive.

v0.6 Design

See Mini-Project Below

v0.7 Design

I was luckily able to figure out all the LED plot commands and I remembered both of the math functions properly so everything worked. Woo!

v0.8 Design

This is just the basic Boolean tutorial activity. I didn't know what the boolean operator was to have a random one be picked,
but after that it went well.

v0.9 Design

This is the basic program from the activity for translating Binary to Decimal numbers. The math expressions are way easier to type in JS than they are to place in blocks. I thankfully was able to figure out all the variables and how to express them by myself.

v0.10 Design

This is the basic Morse Code program, I had to look up in blocks how to do the recievedNumber variable, because you can't "set" it to a value. Apparently, the recievedNumber variable is built into the "radio" commands.

v0.11 Design

This is the basic "charades" program, but with my own custom variables which make it kind of impossible. I wasnt sure of the Gesture command, but since the first thing we did in class, I was playing with arrays, so I was relatively up to speed on this.

v0.12 Design

See Final project below


### Midterm project

**Note:**
I guess I just wanted to mash everything together from the previous activities and projects. I thought long and hard about what I was supposed to do or what I was going to do but I could only draw blanks. I guess my creativity meter is running on empty because I have 7 classes lol. 

#### Goal

**To show that I have learned and applied the previous activities code. My goal was to build this project without looking at the blocks part at all, which was successful.**

#### Design process

I essentially had a rough draft that ended up being a final draft. 

#### JS Constructs & objects

**Random rolls, LED Index changing to make an animation, if else tree, showstrings, shownumber, and input**

### Final project

**Note:** 
I ran out of creative juices for the final project, probably due to me having a bunch of classes like whew. I decided to make a program where you can move something around pretty fluidly, without any real issues, and perhaps convert it to like a D-Pad, Joystick, etc. I ended up just plotting an LED and moving it around with the different inputs of the micro:bit, and the biggest thing that I set for myself was that I wasn't going to even look at the blocks part, until it was completely over, and I could essentially make sure that the editor could still recognize everything. Needless to say, everything went pretty well.

### Goal

**The end goal that I had for myself was creating something that I could use in the future, when we start adding things to the Micro:Bit for our Class final project. I feel like having knowledge of integrated input devices or how to implement them would be valuable, so I decided to go with something where I could input different directions.**

### Design Process

The left movement is done with A, because it is on the left side of the Micro:Bit, and likewise for button B. I decided on Shake for moving up, because its relatively simple, and down is done with AB. I'm assuming that either when you have an external input device it can send inputs directly to it, or that it will remap functions of the Micro:Bit.

### JS Constructs & objects

**LED plotting, LED movement, multiple input methods, updating screen, if then trees**
