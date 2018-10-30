# Word Counter

#### Ahmed Khokar

## Description

A program in which the user can search for doctors in Seattle, WA based on a condition or doctor name. The result will list the doctor name, address, phone number, website, and whether or not the doctor is accepting new patients.

### Specs

1. A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
2. A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
3. If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
4. If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
5. If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Setup/Installation Requirements
1. Clone this repository.
2. Open your terminal (or powershell) and type 'npm install' from the root directory of the cloned repository.
3. Once dependencies are installed, type 'npm start' to run the application or 'npm test' to see the tests (for grading purposes).

## Known Bugs
No known bugs at this time. 
## Technologies Used
1. Node Package Manager
2. Jasmine (testing)
3. Karma (testing)
4. Bootstrap
5. Jquery
6. Webpack
7. TypeScript
8. ESLint

## Support and contact details

Email amkhokar@gmail.com for questions and concerns.
Find more from me at https://github.com/amkhokar/

### License

*This software is licensed under the MIT license*

Copyright (c) 2018 **_Ahmed Khokar_**


Setup Instructions
Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable exports.apiKey in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)
Include .env in .gitignore.
Use at least two JavaScript files: One to receive form input and another to make an API request and display results.
This example assumes your API Key is stored in an apiKey variable, as described in this lesson. In order to make your applications quick to grade, please follow the example exactly and do not rename your apiKey variable to something different.
Additional Resources
Consult the BetterDoctor API documentation for further information. The documentation is extensive and allows you to experiment with different queries for your API calls before putting together your code!

