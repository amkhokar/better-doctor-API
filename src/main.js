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
      
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request : ${error.message}`);
    });


  });

});
