#goIndiegogo

######What is it
Ever wandered what makes a successful campaign?  Want to make your campaign successful?  

goIndiegogo analyzes your campaign and tells you how it stacks up against other successful campaigns on a few key metrics.

[Check it out here](http://goindiegogo.herokuapp.com)

######Key Metrics (possible)
- How many perks does the campaign have - not enough or too many to make it confusing?
- How much money are they trying to raise?
- Does the compaign have more the one team member - how many?
- How much comment attention has the campaign been receiving?
--
- What kind of social impact does the campaign currently have?
- Does the campaign contain a video?
- What does the social impact of the team members look like?
- What kind of funding model are you using?

######Design & Workflow
- User enters url (analysis request via ajax)
- Let user know analysis algo is running
- Parses doc (@url)
- Runs through all parse strategies 
- Generate chart data
- Render output to user (Rendered as d3 visualization)

######Schema
![Schema](http://i.imgur.com/zA56Yr3.png)

######Todo
- Implement metric selectors
- Hightlight current campaign in chart
- Fix repsonsiveness on chart
- Finish Logo
- Add about popup



