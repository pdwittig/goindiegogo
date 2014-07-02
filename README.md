#goIndiegogo

######What is it
Ever wandered what makes a successful campaign?  Want to make your campaign successful?  

goIndiegogo analyzes your campaign and tells you how it stacks up against other successful campaigns on a few key metrics.

[Check it out here](http://goindiegogo.herokuapp.com)

######Key Metrics (possible)
- What kind of social impact does the campaign currently have?
- Does the compaign have more the one team member - how many?
- How many perks does the campaign have - not enough or too many to make it confusing?
- Does the campaign contain a video?
- What does the social impact of the team members look like?
- How much money are they trying to raise?
- What kind of funding model are you using?
- How much comment attention has the campaign been receiving?

######Design & Workflow
- User enters url (analysis request via ajax)
- Let user know analysis algo is running
- High level alg class (Campaign analysis class) (Ran as background job **Stretch**)
  - parses doc (@url)
  - runs through all analysis strategies (seperate classes)
  - runs through all comparative strategies to produce meaninful output (seperate classes)
- Render output to user (Rendered as d3 visualization **Stretch**)

######Schema
![Schema](http://i.imgur.com/zA56Yr3.png)



