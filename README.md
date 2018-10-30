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
3. Create a file in the root directory called '.env'
4. Go to https://developer.betterdoctor.com/ and sign up to receive an api key.
5. Once you receive the api key, open your '.env' file and insert the following:<br>
exports.apikey = your_api_key_value_goes_here
6. type 'npm start' in your terminal from the root directory of the cloned respository to run the application.
7. Type in a condition or doctor name to receive a list of doctors.

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
9. Better Doctor API

## Support and contact details

Email amkhokar@gmail.com for questions and concerns.
Find more from me at https://github.com/amkhokar/

### License

*This software is licensed under the MIT license*

Copyright (c) 2018 **_Ahmed Khokar_**