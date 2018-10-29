import { getDoctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#condition-form').submit(function (event) {
    event.preventDefault();
    $('#result').text("");
    let queryString = $("#condition").val();
    let promise = getDoctor(queryString);
    promise.then(function (response) {
      let body = JSON.parse(response);
      if (body.data.length > 0) {
        for (let i = 0; i < body.data.length; i++) {
          let phoneString = "(   )-   -    ".split('');
          phoneString[1] = body.data[i].practices[0].phones[0].number[0];
          phoneString[2] = body.data[i].practices[0].phones[0].number[1];
          phoneString[3] = body.data[i].practices[0].phones[0].number[2];
          phoneString[6] = body.data[i].practices[0].phones[0].number[3];
          phoneString[7] = body.data[i].practices[0].phones[0].number[4];
          phoneString[8] = body.data[i].practices[0].phones[0].number[5];
          phoneString[10] = body.data[i].practices[0].phones[0].number[6];
          phoneString[11] = body.data[i].practices[0].phones[0].number[7];
          phoneString[12] = body.data[i].practices[0].phones[0].number[8];
          phoneString[13] = body.data[i].practices[0].phones[0].number[9];
          $("#result").append(`<h1>${body.data[i].practices[0].name}</h1>
            <h3 style='color: blue'>Address:</h3>
            <h7>${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.zip},</h7>
            <h7>${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state}</h7>
            <h3 style='color:purple'>Phone Number:</h3>
            <h7>${phoneString.join('')}</h7>
            <h3 style='color:teal'>Website</h3>
            <h7>${body.data[i].practices[0].website ? body.data[i].practices[0].website: "no website"}</h7>
            <h3 style='color: orange'>Accepting new patients?</h3>
            <h7>${body.data[i].practices[0].accepts_new_patients ? "yes": "no"}</h7><hr>`
          );
        }
      } else {
        $("#result").append("There are no doctors matching your criteria, try again!");
      }
    });


  });

});
