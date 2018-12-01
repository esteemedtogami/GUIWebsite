/*
  Copyright (C) 2018 Sam Pickell samuel_pickell@student.uml.edu
  UMass Lowell CS Student, COMP 4610 GUI I
  November 29, 2018
  Assignment 8: Update AS7 to have sliders and tabs
*/
var h_start, h_end, v_start, v_end;
var my_table, num_tabs;

//check form validity even when button is "button" and not "submit"
//Source: https://stackoverflow.com/questions/13671710/jquery-form-validation-on-button-click
$('#my_button').on('click', function() {
    $("#input_form").valid();
});

//Dynamic tabs found at: https://stackoverflow.com/questions/14702631/in-jquery-ui-1-9-how-do-you-create-new-tabs-dynamically
$(function(){
    $("#my_tabs").tabs();
    $("#my_button").click(function() {
            if($("#my_tabs ul li").length <= 5)
            {
            num_tabs = $("#my_tabs ul li").length + 1;

            $("#my_tabs ul").append(
                "<li id='tab_head" + num_tabs + "'><a href='#tab" + num_tabs + "'>" + h_start + "-" + h_end + " x " + v_start + "-" + v_end + "</a></li>"
            );
            $("#my_tabs").append(
                "<div id='tab" + num_tabs + "'>" + my_table + "</div>"
            );
            $("#my_tabs").tabs("refresh");
        }
        else {

        }
    });
 });

 //Delete a tab
 $(function(){
     $('#delete_one').click(function(){
         $('#tab_head'+num_tabs).remove();
         $('#tab'+num_tabs).remove();
         num_tabs = num_tabs - 1;
         $("#my_tabs").tabs("refresh");
     });
 });


 //Delete all
 $(function(){
     $('#delete_all').click(function(){
         var i = parseInt(num_tabs, 10);
         for(i; i > 0; i--)
         {
             $('#tab_head'+num_tabs).remove();
             $('#tab'+num_tabs).remove();
             num_tabs = num_tabs - 1;
         }
         $("#my_tabs").tabs("refresh");
     });
 });

//Function to allow text boxes to have sliders. Dynamically updates table.
//Learned how to do this from the jquery ui website: http://jqueryui.com/slider/#range
$(function() {
    $('#Slider1').slider({
        min: 1,
        max: 15,
        step: 1,
        animate: true,
        values: [1],
        slide: function(event, ui){
            $('#horizontal_start').val(ui.values[0]);
            get_numbers();
        }
    });
    $('#horizontal_start').val($('#Slider1').slider('values', 0));

    $('#Slider2').slider({
        min: 1,
        max: 15,
        step: 1,
        animate: true,
        values: [1],
        slide: function(event, ui){
            $('#horizontal_end').val(ui.values[0]);
            get_numbers();
        }
    });
    $('#horizontal_end').val($('#Slider2').slider('values', 0));

    $('#Slider3').slider({
        min: 1,
        max: 15,
        step: 1,
        animate: true,
        values: [1],
        slide: function(event, ui){
            $('#vertical_start').val(ui.values[0]);
            get_numbers();
        }
    });
    $('#vertical_start').val($('#Slider3').slider('values', 0));

    $('#Slider4').slider({
        min: 1,
        max: 15,
        step: 1,
        animate: true,
        values: [1],
        slide: function(event, ui){
            $('#vertical_end').val(ui.values[0]);
            get_numbers();
        }
    });
    $('#vertical_end').val($('#Slider4').slider('values', 0));

    //Update the slider if the user enters a number manually. Dynamically updates table.
    //Based on code from user "Scott":
    //https://stackoverflow.com/questions/13058330/how-can-i-set-the-value-of-a-jquery-slider-based-on-a-form-submitted-input-field
    $('#horizontal_start').on('keyup', function(){
        $('#Slider1').slider('values', 0, ($('#horizontal_start').val()));
        get_numbers();
    }).trigger('keyup');

    $('#horizontal_end').on('keyup', function(){
        $('#Slider2').slider('values', 0, ($('#horizontal_end').val()));
        get_numbers();
    }).trigger('keyup');

    $('#vertical_start').on('keyup', function(){
        $('#Slider3').slider('values', 0, ($('#vertical_start').val()));
        get_numbers();
    }).trigger('keyup');

    $('#vertical_end').on('keyup', function(){
        $('#Slider4').slider('values', 0, ($('#vertical_end').val()));
        get_numbers();
    }).trigger('keyup');

});

//Learned how to set up rules and messages from Prof. Jessie Heines' website:
//https://jesseheines.com/~heines/91.461/91.461-2012-13f/461-lecs/code/jmh-table-v5.html?xBegin=2&xEnd=5&yBegin=5&yEnd=7
$().ready(function(){
    $('#input_form').validate({
        //The rules tell the validator what to look out for
        rules: {
            horizontal_start:{
                //e.g. the field is required, only accepts digits, and only
                // accepts numbers within a certain range
                    required: true,
                    digits: true,
                    range:[1,15]
            },
            horizontal_end:{
                    required: true,
                    digits: true,
                    range:[1,15]
            },
            vertical_start:{
                    required: true,
                    digits: true,
                    range:[1,15]
            },
            vertical_end:{
                    required: true,
                    digits: true,
                    range:[1,15]
            }
        },

        //customized messages depending on the type of error
        messages: {
            horizontal_start:{
                    required: function(){
                        return "<em>You MUST indicate a horizontal start!</em><br></br>";
                    },
                    digits: function(){
                        return "<em>Digits are the only valid input.</em><br></br>";
                    },
                    range: function(){
                        return "<em>Must be a number in range 1-15.</em><br></br>";
                    }
            },
            horizontal_end:{
                    required: function(){
                        return "<em>You MUST indicate a horizontal end!</em><br></br>";
                    },
                    digits: function(){
                        return "<em>Digits are the only valid input.</em><br></br>";
                    },
                    range: function(){
                        return "<em>Must be a number in range 1-15.</em><br></br>";
                    }
            },
            vertical_start:{
                    required: function(){
                        return "<em>You MUST indicate a vertical start!</em><br></br>";
                    },
                    digits: function(){
                        return "<em>Digits are the only valid input.</em><br></br>";
                    },
                    range: function(){
                        return "<em>Must be a number in range 1-15.</em><br></br>";
                    }
            },
            vertical_end:{
                    required: function(){
                        return "<em>You MUST indicate a vertical end!</em><br></br>";
                    },
                    digits: function(){
                        return "<em>Digits are the only valid input.</em><br></br>";
                    },
                    range: function(){
                        return "<em>Must be a number in range 1-15.</em>";
                    }
            }
        }
    });
});

function get_numbers(){

    //Get the values from the forms, and check their validity
    h_start = parseInt(document.getElementById('horizontal_start').value, 10);
    h_end = parseInt(document.getElementById('horizontal_end').value, 10);
    v_start = parseInt(document.getElementById('vertical_start').value, 10);
    v_end = parseInt(document.getElementById('vertical_end').value, 10);


    generate_table();

}

function generate_table(){
    //create a variable that will hold the table information
    my_table = "<table>";

    //Swap the vars if the user made the start smaller than the end
    if(h_start > h_end)
    {
        var temp;

        temp = parseInt(h_start, 10);
        h_start = parseInt(h_end, 10);
        h_end = parseInt(temp, 10);
    }

    if(v_start > v_end)
    {
        var temp2;

        temp2 = parseInt(v_start, 10);
        v_start = parseInt(v_end, 10);
        v_end = parseInt(temp2, 10);
    }

    //Actually enforce the range rules
    if(h_start < 1 || h_end < 1 || v_start < 1 || v_end < 1 ||
        h_start > 15 || h_end > 15 || v_start > 15 || v_end > 15)
    {
        return;
    }

    //double for loop to track the vertical and horizontal coordinates
    //   of the table
    for(var i = v_start - 1; i <= v_end; i++)
    {
        //create a new row
        my_table+="<tr>";
        for(var j = h_start - 1; j <= h_end; j++)
        {
            //leave top left element blank
            if(j == h_start-1 && i == v_start-1)
            {
                my_table+="<td></td>";
            }
            //populate the top row with the horizontal range
            else if(i == v_start-1 && (j >= v_start-1 || j <= v_end))
            {
                my_table+="<td id=\"my_heading\">" + j + "</td>";
            }
            //populate the leftmost column with the vertical range
            else if(j == h_start-1 && (i >= h_start-1 || i <= h_end))
            {
                my_table+="<td id=\"my_heading\">" + i + "</td>";
            }
            //fill an element with the appropriate multiplication
            else
            {
                    my_table+="<td>" + i*j + "</td>";
            }
        }
        my_table+="</tr>";
    }
    my_table+="</table>";
    //send the table data to the div in the HTML doc
    document.getElementById('mult_tab').innerHTML = my_table;
}

//This saves a table to the tab;
function write_to_tab()
{

}
