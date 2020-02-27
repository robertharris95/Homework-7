var api= require('./utils/api.js');
var generateMarkdown = require('./utils/generateMarkdown.js');

function writeToFile() {
api.getUser();

}

function init() {
 generateMarkdown();

writeToFile();
};

init();


    

  