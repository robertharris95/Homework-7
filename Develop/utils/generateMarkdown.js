var inquirer = require('inquirer');
var fs = require('fs');
var api= require('./api.js');
function generateMarkdown() {
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Give a short description of your project",
      name: "description"
    },
    {
      type: "input",
      message: "What are the steps to install your project?",
      name: "install"
    },
    {
      type: "input",
      message: "What is your project used for?",
      name: "usage"
    },
    {
      type: "input",
      message: "What credits would you like to give?",
      name: "credits"
    },
    {
      type: "input",
      message: "Indicate any licenses",
      name: "license"
    },
    {
      type: "input",
      message: "What guidelines are there for contributing to your project?",
      name: "contributing"
    },
    {
      type: "input",
      message: "Are there any examples for how to run your application?(If not,enter N/A)",
      name: "tests"
    },
    {
      type: "input",
      message: "Will you assign any badges to your project? (If not,enter N/A)",
      name: "badges"
    },
    

  ]).then(function(response){
     var data= `
# ${response.title}
     
## ##Description
${response.description}
     
## ##Installation
${response.install}

## ##Usage
${response.usage}
     
## ##Credits
${response.credits}
     
## ##Licenses
${response.license}
     
## ##Guide to Contributing
${response.contributing}
     
## ##Tests
${response.tests}
     
## ##Badges
${response.badges}
     
## ##Questions
     
### If you have questions, please contact the creator at:
     
`
  fs.appendFile("GeneratedREADME.md",data,function(err){

  if(err){
    throw err
}
})
//run function to get api info and display it
}).then(function(){
  api.getUser();
});
};
module.exports = generateMarkdown
