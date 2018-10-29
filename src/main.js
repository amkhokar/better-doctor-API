import { getDoctor } from './doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#condition-form').submit(function (event) {
    event.preventDefault();
    $('#result').text("");
    let promise = getDoctor();

    promise.then(function (response) {
      let body = JSON.parse(response);
      $('#result').append(body.data[0].name);
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request : ${error.message}`);
    });


  });

});
