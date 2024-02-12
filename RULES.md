# 🧙‍♂️ React Assessment Practice

(This is a markdown .MD file, if you are reading this in VSCode, right click the file and select `Open Preview`)

#### Rules for the real assessment

- You are allowed to consult Kyna, previous exercises and search on the internet
- You are not allowed to ask your colleagues for help
- You are not allowed to make this challenge public in any ways
- If you do use a tool like ChatGPT and copy code from it, you must include a `Sources.md` file in your repo that explains why you used ChatGPT, what prompts you used, and what code you copied

#### Duration

- This assessment ends at 4:00pm

#### Passing grade

This challenge is graded in red, yellow or green. Meaning of each grade:

- 📕 Red: you haven't completed the mandatory sections. `Fail grade`.

- 📒 Yellow: you've completed all mandatory sections + one bonus. `Pass grade`.

- 📗 Green: you've completed all mandatory sections + 2 bonus. `Pass with honor grade`.

🚨 **If you've completed both mandatory sections, but it's not fully functional, you might still downgrade to a red.**

#### Results feedback

Correcting these assessments takes time. Please be patient with regards to getting the results of your assessments

#### How to submit your practice assessment

- You will use this GitHub Classroom assignment link for this entire assessment
- When you're finished with your assessment, fill in the [FEEDBACK.md file](/FEEDBACK.md) in this repo with your student feedback
- Once you make a commit to the main branch, your assignment will appear as "submitted" to your teachers. You can optionally use other branches if you want and only merge your branch into main when you're finished
- Don't forget to fill out the student [FEEDBACK.md](/FEEDBACK.md) file when you're finished
- The last commit before the assessment end time will be used to assess you
- Feedback from your teachers will appear in a special "Feedback" pull request in your assignment repo. You should get a GitHub notification when new teacher feedback is added

## Learning goals & some tips

For transparency and clarity, these are the main learning goals we will be testing:

- Creating components
- Nesting components and passing them data via props
- Using event listeners and event handlers, like onClick
- Designing and managing component local state with useState hook
- Using the useEffect hook to fetch data from an API using Axios
- Using react-router-dom to make static and dynamic routes
- Using npm to install packages

Additional learning goals include:

- Creating input forms and console logging the results
- Mapping, filtering, finding & sorting arrays of objects
- CSS styling
- Basic git and GitHub usage: making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things. See the rules above for resources you are allowed to use

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

**TIP: Focus on the required features first!** Before moving to the bonus sections of this assessment, focus on implementing the madatory parts, then move on to the next ones.

## What are we building?

We are building a webapp for a Harry Potter fanclub. We want the following features:

#### Required Features

- HomePage that says "Welcome to the Harry Potter site!"

  - On homepage we have a button that says "View character list" that navigates to the character list page

- Character List page

  - Use API /characters
  - Each character is separate component, and should show only their name and image
  - Each character can be liked and favorited
    - When character is liked, a counter of likes increase
    - When character is favorited, a star appears. If they are unfavorited, the star disappears
  - The total number of likes is at the top of the character list page
  - Each characters has a "see details" button that takes them to their detail page

- Character Detail page
  - List all the details for each character (quote, birthday, etc.)
  - Uses /characters/:id API

#### Bonus Features

- Bonus things you can try:
  - Add filter to character list page, like filter by name or patronus, or birthday month
  - Add a button that can also decrease the amount of likes for each character
  - Add ability to sort character list by different things, like alphabetical order
  - Add a new page from home page to "add new student"
    - This new page should have an input form to enter info about the new student
    - Console log this info

## API

The data for this app is already available through an API. This way you can build your entire app without having to create a working API yourself.

Endpoints:

GET /characters

`https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters`

GET /characters/:id

`https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters/:id`
