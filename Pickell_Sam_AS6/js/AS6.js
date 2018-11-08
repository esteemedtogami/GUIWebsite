/*
  Sam Pickell
  samuel_pickell@student.uml.edu
  UMass Lowell CS Student, COMP 4610 GUI I
  November 1, 2018
  Assignment 6: First JavaScript Program
  Using JavaScript to make a multiplication table.
  This is the JavaScript file.
*/
var h_start, h_end, v_start, v_end;

function get_numbers(){
    //Get the values from the forms
    h_start = parseInt(document.getElementById('horizontal_start').value, 10);
    h_end = parseInt(document.getElementById('horizontal_end').value, 10);
    v_start = parseInt(document.getElementById('vertical_start').value, 10);
    v_end = parseInt(document.getElementById('vertical_end').value, 10);

    console.log(h_start);
    console.log(h_end);
    console.log(v_start);
    console.log(v_end);

    //Call the function that will build the table
    generate_table();
}

function generate_table(){
    
}
