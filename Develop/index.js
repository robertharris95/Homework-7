var util = require('util')
var generateMarkdown = require('./utils/generateMarkdown.js');
var generateMarkdownPromise = util.promisify(generateMarkdown)
 generateMarkdownPromise();