// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  # ${data.title}

  ## Description
  ${data.description}
##Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributors](#contributors)

  ## Installation 
  How does the user install the project?
  ${data.install}
  ## Usage 
  How do the user actually use the generator?
  ${data.usage}
  ## Licenses
  ${data.licenses}
  ## Feedback
  If you want to contribut
  ${data.contribute}
  ## General Questions
  https://github.com/${data.questions}   
`;
}

module.exports = generateMarkdown;
