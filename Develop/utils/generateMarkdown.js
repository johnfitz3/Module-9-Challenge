// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
switch (license) {
  case "MIT":
    return "https://opensource.org/license/mit/"
    case "Apache-2.0":
      return "https://opensource.org/licenses/Apache-2.0";
      case "GLP-3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
      
}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  }

} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}


# Table of Content
-[Description](#projectDescription)
-[Usage](#projectUsage)
-[Installation](#projectInstallation)
-[License](#licenseOptions)
-[Contribution](#projectContribution)
-[Questions](#username)



## Description
${data.projectDescription}

## Usage
 ${data.projectUsage}

## Installation
${data.projectInstallation}

## License
${data.licenseOptions}

## Contribution
 ${data.projectContribution}

## Questions
Username: ${data.username}
Email: ${data.emailAddress}

`;
}

module.exports = generateMarkdown;
