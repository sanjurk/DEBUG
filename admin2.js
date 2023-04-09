(function($) {
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', "#472E32", "#FF4136", "#39CCCC", "#BDBB99", "#77B1A9", "#73A857"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string: ("Which of the following is the correct way to read a file in PHP?"),
        choices: {
            correct: "$content = fopen('filename.txt','r');",
            wrong: ["$content = file_open('filename.txt','r');", "$content = file('filename.txt','r');", "$content = readfile('filename.txt','r');"]
        }
    }, {
        question_string: ("what is the output of the following PHP code?-------------------<?php-------------------------------------------------------------------------_$str = 'Hello World!';----------------------------------------------------echo str_replace('World','PHP',$str); ?>"),
        choices: {
            correct: "Hello PHP!",
            wrong: ["World PHP!", "PHP World!", "Error"]
        }
    }, {
        question_string: ("What does AJAX stands for?"),
        choices: {
            correct: "Asynchronous JavaScript and XML",
            wrong: ["Advanced JavaScript and XHTML", "Asynchronous JavaScript and XHTML", "Advanced JavaScript and XML"]
        }
    }, {
        question_string: ("What is the output of the following PHP code?------------------<?php--------------------------------------------------------------------_$num = 1;--------------------------------------------------------------while ($num <= 5) {--------------------------------------------------------echo $num;-------------------------------------------------------_$num++; } ?>"),
        choices: {
            correct: "1 2 3 4 5 ",
            wrong: ["12345", "An infinity loop", "None of the above"]
        }
    }, {
        question_string: ("Which of the following SQL functions is used to return the current date and time?"),
        choices: {
            correct: "ALL THE ABOVE",
            wrong: ["NOW()", "CURRENT_DATE()", "CURRENT_TIME()"]
        }
    }, {
        question_string: ("Which of the following SQL commands is used to retrieve a distinct set of values from a table?"),
        choices: {
            correct: "SELECT DISTINCT",
            wrong: ["SELECT UNIQUE", "SELECT DIFFERENT", "SELECT UNIQUE VALUES"]
        }
    }, {
        question_string: ("Which SQL statement is used to modify existing data in a table?"),
        choices: {
            correct: "UPDATE",
            wrong: ["ALTER", "MODIFY", "CHANGE"]
        }
    }, {
        question_string: ("What is a foreign key in SQL?"),
        choices: {
            correct: "A key that links two tables together",
            wrong: ["A key that is used to encrypt sensitive data", "A key that allows for efficient searching of data", "A key is used for authentication purposes"]
        }
    }, {
        question_string: ("Exception thrown in a try-with-resources block, after an exception has already been thrown in the try block, are accessible as:"),
        choices: {
            correct: "SuppressedExceptions",
            wrong: ["ResourceExceptions", "HiddenExceptions", "ClosableExceptions"]
        }
    }, {
        question_string:("What will be the output of the following java program?-------public class leftshift_operator {-------------------------------------public static void main(String[] args) {---------------------------------byte x = 64;-------------------------------------------------------------------int i;----------------------------------------------------------------------------byte y;-------------------------------------------------------------------------i = x << 2;-------------------------------------------------------System.out.println(i + ' ' + y); } }"),
        choices: {
            correct: "256 0",
            wrong: ["0 256", "0 64", "64 0"]
        }
    }, {
        question_string: ("Identify what can directly access and change the value of the variable res.------------------------------------------------------------------package com.mypackage;------------------------------------------public class Solution {--------------------------------------------------private int res = 100; }"),
        choices: {
            correct: "Only solution class",
            wrong: ["Any class", "Any class that extends solution", "None"]
        }
    }, {
        question_string: ("When an array is passes to a method in java, what does the receive?"),
        choices: {
            correct: "The reference of the array",
            wrong: ["A copy of the array", "Length of the array", "Copy of first element"]
        }
    }, {
        question_string: ("What is the Elvis operator in Kotlin?"),
        choices: {
            correct: ["An operator used to check for null values"],
            wrong: ["A binary operator used to perform mathematical operations", "An operator used to compare two values", "An operator used to perform type conversion"]
        }
    }, {
        question_string: ("fun main() {----------------------------------------------------------------val myString: String ?= 'length';----------------------------------------val length = myString.length }"),
        choices: {
            correct: "shows error",
            wrong: ["4", "6", "compile with out error"]
        }
    }, {
        question_string: ("fun main() {-------------------------------------------------------------val myString = 'Hello'----------------------------------------------------val result = myString.take(2).map {it.uppercase()}------------------println(result) }"),
        choices: {
            correct: "['H', 'E']",
            wrong: ["['H', 'e']", "['H', 'E', 'L', 'L', 'O']", "None of the above"]
        }
    }, {
        question_string: ("fun main() {--------------------------------------------------------------val num = 15--------------------------------------------------------------when (num) {--------------------------------------------------------------_10 -> println('Ten')-----------------------------------------------------_15 -> println('Twenty')--------------------------------------------------_20 -> println('Fifteen')--------------------------------------------------else -> println('Other') } }"),
        choices: {
            correct: "Twenty",
            wrong: ["Ten", "Fifteen", "Other"]
        }
    }, {
        question_string: ("What is the output of the following code?--------------------------a = [1, 2, 3, 4, 5]-------------------------------------------------------------b = a[::-1]---------------------------------------------------------------------c = [a[i] + b[i] for i in range(len(a))]-------------------------------------print(c)"),
        choices: {
            correct: "[6, 6, 6, 6, 6]",
            wrong: ["[5, 5, 5, 5, 5]", "[1, 3, 5, 7, 9]", "9, 7, 5, 3, 1"]
        }
    }, {
        question_string: ("What is a generation in Python?"),
        choices: {
            correct: "A function that returns an iterable sequence of results",
            wrong: ["A built-in Python class for creating generators", "A module for generating ranfom numbers", "A data type for storing large amounts of data"]
        }
    }, {
        question_string: ("What is the diference between a shallow copy and a deep copy in Python?"),
        choices: {
            correct: "A shallow copy creates a new object with a reference to the original object, while a deep copy creates a new object with a copy of the original object's data",
            wrong: ["A shallow copy creates a new object with a copy of the original object's while a deep copy creates a new object with a reference to the original object", "A shallow copy only copies the first level of the original object, while a deep copy copies all levels of the original object", "A shallow copy only copies the last level of the original object, while a deep copy copiesall levels of the original object"]
        }
    }, {
        question_string:("What is the output of the following code?--------------------------x = 5----------------------------------------------------------------------------if x > 2:----------------------------------------------------------------------print('Hello')-----------------------------------------------------------else:-----------------------------------------------------------print('Goodbye')"),
        choices: {
            correct: "None of the above",
            wrong: ["Goodbye", "lo", "Hello"]
        }
    }];

    function changeColor() {
        myColor = colors[Math.floor(Math.random() * colors.length)];
        $('body').css('background-color', myColor);
        $('.quiz-box').css('color', '#fff');
        //$('.option-input:checked::after').css('background', myColor);
    };

    // An object for a Quiz, which will contain Question objects.
    var Quiz = function(quiz_name) {
            // Private fields for an instance of a Quiz object.
            this.quiz_name = quiz_name;

            // This one will contain an array of Question objects in the order that the questions will be presented.
            this.questions = [];
        }
        // A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
    Quiz.prototype.add_question = function(question) {
        // Randomly choose where to add question
        //var index_to_add_question = Math.floor(Math.random() * this.questions.length);
        var index_to_add_question = this.questions.length;
        this.questions.splice(index_to_add_question--, 0, question);
    }
    Quiz.prototype.render = function(container) {

        changeColor();

        // For when we're out of scope
        var self = this;

        // Hide the quiz results modal
        //$('#quiz-results').hide();

        // Write the name of the quiz
        //$('#quiz-name').text(this.quiz_name);

        // Create a container for questions
        var question_container = $('<div>').attr('id', 'question').appendTo(container);

        // Helper function for changing the question and updating the buttons
        function change_question() {

            self.questions[current_question_index].render(question_container);
            $('#prevButton').prop('disabled', current_question_index === 0);
            $('#nextButton').prop('disabled', current_question_index === self.questions.length - 1);

            // Determine if all questions have been answered
            var all_questions_answered = true;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === null) {
                    all_questions_answered = false;
                    break;
                }
            }
            $('#submit-button').prop('disabled', !all_questions_answered);
        }

        // Render the first question
        var current_question_index = 0;
        change_question();

        // Add listener for the previous question button
        $('#prevButton').click(function() {
            if (current_question_index > 0) {
                current_question_index--;
                change_question();
            }
        });

        // Add listener for the next question button
        $('#nextButton').click(function() {
            if (current_question_index < self.questions.length - 1) {
                current_question_index++;
                change_question();
                changeColor();
            }
        });

        // Add listener for the submit answers button
        $('#submitButton').click(function() {
            changeColor();
            // Determine how many questions the user got right
            var score = 0;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
                    score++;
                }
            }

            // Display the score with the appropriate message
            var percentage = (score / self.questions.length);

            var scoremessage = " You have answered " + score + " Out of " + self.questions.length + " Questions...!";
            var icon = '';
            var chartcolor = '';
            console.log(percentage);

            $('.percentage').data('percent', percentage * 100);
            $('.percentage span').text(percentage);

            var message;
            if (percentage === 1) {
                icon = "fa fa-smile-o";
                message = 'Great job!';
                chartcolor = "green";
            } else if (percentage >= .75) {
                icon = "fa fa-smile-o";
                message = 'You did alright.';
                chartcolor = "green";
            } else if (percentage >= .5) {
                icon = "fa fa-meh-o";
                message = 'Better luck next time.';
                chartcolor = "orange";
            } else {
                icon = "fa fa-meh-o";
                message = 'Maybe you should try a little harder.';
                chartcolor = "red";
            }
            $('.score-label h1').html('<small> </small>' + username + ', ' + 'You have Secured<i class="smiley"></i>');
            $('.message').text(message);
            $('.score-detail h3').text(scoremessage);
            $('.smiley').addClass(icon);
            $('#question-box').hide();
            $('#result').show();
            $('.percentage').easyPieChart({
                animate: 1000,
                lineWidth: 4,
                onStep: function(value) {
                    this.$el.find('span').text(Math.round(value));
                },
                onStop: function(value, to) {
                    this.$el.find('span').text(Math.round(to));
                },
                barColor: chartcolor
            });
            $('#prevButton, #nextButton, #submitButton').hide();
            $('.navigation-buttons #resultButton').show();
        });
        $('#resultButton').click(function() {
            changeColor();
            $('#result').hide();
            var table = $('#result-stats table').find('tbody');
            var tr;
            for (var i = 0; i < self.questions.length; i++) {
                tr = $('<tr>');
                if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
                    tr.append('<td><i class="fa fa-check-circle"></i>' + self.questions[i].question_string + '</td>');
                } else {
                    tr.append('<td><i class="fa fa-times-circle"></i>' + self.questions[i].question_string + '</td>');
                }
                if (self.questions[i].choices[self.questions[i].user_choice_index] !== undefined) {
                    tr.append('<td>' + self.questions[i].choices[self.questions[i].user_choice_index] + '</td>');
                } else {
                    tr.append('<td>' + '<span class="grey">No Attempt</span>' + '</td>');
                }
                tr.append('<td>' + self.questions[i].choices[self.questions[i].correct_choice_index] + '</td>');
                tr.appendTo(table);
            }
            $('#result-stats').show();
            $('#resultButton').hide()
        });
        // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
        question_container.bind('user-select-change', function() {
            var all_questions_answered = true;
            for (var i = 0; i < self.questions.length; i++) {
                if (self.questions[i].user_choice_index === null) {
                    all_questions_answered = false;
                    break;
                }
            }
            $('#submit-button').prop('disabled', !all_questions_answered);
        });
    }
    var Question = function(count, question_string, correct_choice, wrong_choices) {
            this.question_string = count + ". " + question_string;
            this.choices = [];
            this.user_choice_index = null; // Index of the user's choice selection

            // Random assign the correct choice an index
            this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
            var number_of_choices = wrong_choices.length + 1;
            for (var i = 0; i < number_of_choices; i++) {
                if (i === this.correct_choice_index)
                    this.choices[i] = correct_choice;
                else {
                    var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
                    this.choices[i] = wrong_choices[wrong_choice_index];

                    // Remove the wrong choice from the wrong choice array so that we don't pick it again
                    wrong_choices.splice(wrong_choice_index, 1);
                }
            }
        }
        // A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
    Question.prototype.render = function(container) {
        // For when we're out of scope
        var self = this;

        // Fill out the question label
        var question_string_h2;
        if (container.children('h2').length === 0) {
            question_string_h2 = $('<h2>').appendTo(container);
        } else {
            question_string_h2 = container.children('h2').first();
        }
        question_string_h2.text(this.question_string);

        // Clear any radio buttons and create new ones
        if (container.children('label').length > 0) {
            container.children('label').each(function() {
                var radio_button_id = $(this).attr('id');
                $(this).remove();
                container.children('label[for=' + radio_button_id + ']').remove();
            });
        }

        for (var i = 0; i < this.choices.length; i++) {

            // Create the label
            var choice_label = $('<label>')
                .attr('for', 'choices-' + i)
                .appendTo(container);

            // Create the radio button
            var choice_radio_button = $('<input>')
                .attr('id', 'choices-' + i)
                .attr('type', 'radio')
                .attr('name', 'choices')
                .attr('value', 'choices-' + i)
                .attr('class', 'option-input radio')
                .attr('checked', i === this.user_choice_index)
                .appendTo(choice_label);

            choice_label.append(this.choices[i]);

        }
        // Add a listener for the radio button to change which one the user has clicked on
        $('input[name=choices]').change(function(index) {
            var selected_radio_button_value = $('input[name=choices]:checked').val();

            // Change the user choice index
            self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));

            // Trigger a user-select-change
            container.trigger('user-select-change');
        });
    }
    $(document).ready(function() {
        changeColor();
        $('#name-input-box').css('border-bottom', 'solid thin ' + myColor);
        var quiz = new Quiz('My Quiz');
        for (var i = 0; i < all_questions.length; i++) {
            var question = new Question((i + 1), all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);

            // Add the question to the instance of the Quiz object that we created previously
            quiz.add_question(question);
        }
        // Render the quiz
        var quiz_container = $('#question-box');
        $('.navigation-buttons').hide();
        $('#result').hide();
        $('#result-stats').hide();
        $('#name-form').on('submit', function(event) {
            event.preventDefault();
            username = $('#name-input-box').val();
            if (username !== '' && username !== undefined) {
                $('.name-box').hide();
                quiz.render(quiz_container);
                $('.navigation-buttons').show();
                $('#resultButton').hide();
            }
        });
    });

})(jQuery);

timeLeft = 1815;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);

