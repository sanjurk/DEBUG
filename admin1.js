(function($) {
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', "#472E32", "#FF4136", "#39CCCC", "#BDBB99", "#77B1A9", "#73A857"];
    var username = '';
    var myColor;
    var all_questions = [{
        question_string:("Find out the exact output?----------------------------------------mylist=[205,508,2670,120,301]----------------------------------output=[]----------------------------------------------------------------------for num in mylist:-----------------------------------------------------------num=str(num)-----------------------------------------------------------newlist=num.split('0')------------------------------------------------------output.append(int(' ' .join(newlist)))-----------------------------------print(output)"),
        choices: {
            correct: "[25,58,267,12,31]",
            wrong: ["[301,120,2670,508,205]", "[2,5,2,1,3]", "[5,8,0,0,1]"]
        }
    }, {
        question_string: ("Find out the exact output?------------------------------------------mystr= 'a,a,a,a,b,b,c,c,c'--------------------------------------------------mylist=mystr.split(',')-------------------------------------------------------visited=[]----------------------------------------------------------final_list=[]-------------------------------------------------------------------for ch in mylist:--------------------------------------------------------------if ch not in visited:----------------------------------------------------------final_list.append(f'{ch}:{mylist.count(ch)}'}-----visited.apppend(ch)-----------------------------------------------print(final_list)--------------------------------------------------------------print(','.join(final_list))"),
        choices: {
            correct: "a:4,b:2,c:3",
            wrong: ["4,2,3", "[a:4,b:2,c:3]", "a4,b2,c3"]
        }
    }, {
        question_string: ("Find out the exact output?-------------------------------------mylist=[1,2,2,3,3,4,5,5,5,6,6]---------------------------------------new_list=[]--------------------------------------------------------------------for num in mylist:-----------------------------------------------------------if mylist.count(num)==1:-----------------------------------------new_list.append(num)-----------------------------------------print(nwe_list)"),
        choices: {
            correct: "[1,4]",
            wrong: ["[0,0]", "[4,1]", "[1,2,3,4,5,6]"]
        }
    }, {
        question_string: ("Find out the exact output?----------------------------------------str1=:'Sky is blue'------------------------------------------------mylist=str1.split()------------------------------------------mylist=mylist[::-1]----------------------------------------------str2=''.join(mylist)------------------------------------------------print(str2)"),
        choices: {
            correct: "blue is Sky",
            wrong: ["sky is blue", "Sky is blue", "blue is sky"]
        }
    }, {
        question_string: ("Find out the exact output?--------------------------------------------x=['a','b','c','d']--------------------------------------------------------------for x[-1] in x:-----------------------------------------------------------------print(x[-1], end='')"),
        choices: {
            correct: "abcc",
            wrong: ["abcd", "abc", "dcba"]
        }
    }, {
        question_string: ("Find out the exact output?---------------------------------------------def append(ele, to=[]):----------------------------------------------------to.append(ele)-----------------------------------------------------------return to------------------------------------------------------------------list_one = append(56)-------------------------------------------------------print(list_one, end=''-------------------------------------------------------list_two = append(23)----------------------------------------------------print(list_two)"),
        choices: {
            correct: "[56][56,23]",
            wrong: ["[56][23]", "[56][23,56]", "Error"]
        }
    }, {
        question_string: ("Find out the exact output?---------------------------------------------var = {10,20,10,10,30,30,20}-----------------------------------------------print(len(var))"),
        choices: {
            correct: "3",
            wrong: ["2", "10,20,30", "7"]
        }
    }, {
        question_string: ("Find out the exact output?------------------------------------------var = 2e3--------------------------------------------------------print(type(var))"),
        choices: {
            correct: "[class 'float']",
            wrong: ["[class 'exponential']", "[class 'double']", "[class 'long']"]
        }
    }, {
        question_string: ("Find out the exact output?---------------------------------------------list1 = ['xyz', 222]------------------------------------------------------------for i in list1:---------------------------------------------------------list1.append(i)-----------------------------------------------------print(i,end='')"),
        choices: {
            correct: "infinite loop",
            wrong: ["terminate itself", "['xyz']", "['xyz','222']"]
        }
    }, {
        question_string: ("Find out the exact output?-------------------------------------------deffunc(val1,val2=2,val3=7,val4=2):----------------------------------return val1**val2**val3--------------------------------------------------print(func(val2=2,val1=2,val3=4))"),
        choices: {
            correct: "65536",
            wrong: ["65538", "65784", "64536"]
        }
    }, {
        question_string:("Find out the exact output?----------------------------------------public class Main------------------------------------------------------------{---------------------------------------------------------------------------------public static void main(String[] args)-----------------------------------{---------------------------------------------------------------------------------double data = 444.3245-----------------------------------------------------int value = data;-----------------------------------System.out.println(data);------------------------------}-------------}"),
        choices: {
            correct: "Error",
            wrong: ["444", "444.3245", "nothing"]
        }
    }, {
        question_string: ("Find out the exact output?------------------------------------------public class Main'-----------------------------------------------------------{---------------------------------------------------------------------------------public static void main(String args[])-----------------------------------{-------------------------------------------------------------------System.out.println(fun());------------------------------------------------}--------------------------------------------------------------------------------int fun()-----{-----------------------------------------------------------------return 20;----------------------------------------------------------------}"),
        choices: {
            correct: "Error",
            wrong: ["20", "nothing", "runtime error"]
        }
    }, {
        question_string: ("Find out the exact output?----------------------------------------public class A-----------------------------------------------------------------{-----------------------------------------------------------------------------public static void main(String[] args)-----------------------------------{--------------------------------------------------------------------------------if (true)------------------------------------------------------------------------break;-----------------------------}----------------------------}"),
        choices: {
            correct: "Error",
            wrong: ["nothing", "runtime error", "incomplete code"]
        }
    }, {
        question_string: ("Find out the exact output?----------------------------------------public class A---------------------------------------------------------------{----------------------------------------------------------------------------public static void main(string[] args)-----------------------------------{------------------------------------------------System.out.println('j'+'a'+'v'+;a');---------------------}--------}"),
        choices: {
            correct: "418",
            wrong: ["java", "nothing", "j a v a"]
        }
    }, {
        question_string: ("Find out the exact output?--------------------------------------------public class A----------------------------------------------------------------{---------------------------------------------------------------------------------public static void main(String[] args)-----------------------------------{------------------------------------------------------------------------------int $_ = 10;--------------------}---------------------------}"),
        choices: {
            correct: "10",
            wrong: ["error", "nothing", "runtime error"]
        }
    }, {
        question_string: ("Find out the exact output?---------------------------------------------public class A-----------------------------------------------------------------{---------------------------------------------------------------------------------public static void main(String[] args)----------------------------------{------------------------------------}-------------------------------------------public static void main(String[] args)-----------------------------------{------------------------------------}-----------------------------}"),
        choices: {
            correct: "nothing",
            wrong: ["error", "incomplete code", "runtime error"]
        }
    }, {
        question_string: ("Find out the exact output?---------------------------------------------public class A-----------------------------------------------------------------public static void main(String[] args){--------------------------------int i=1, j=0;-------------------------------------------------------------------switch(i)-------------------------------------{----------------------------case2:---------------------------------------j+=6;--------------------------System.out.println('j=' +j);-----------------------------------------------case4:---------------------------------------j+=1;--------------------------System.out.println('j=' +j);-----------------------------------------------default:-------------------------------------j+=2;--------------------------System.out.println('j=' +j);----------------------------------------------case0:---------------------------------------j+=4;--------------------------System.out.println('j=' +j);----------------------------------------------}---------------------------------}"),
        choices: {
            correct: "j=2, j=6",
            wrong: ["j=6, j=1", "j=6,1", "j=6, j=2"]
        }
    }, {
        question_string: ("Find out the exact output?------------------------------------------public class A-----------------------------------------------------------------public static void main(String[] args){----------------------------------Integer num1 = 100;------------------------------------------------Integer num2 = 100;-------------------------------------------------Integer num3 = 500;------------------------------------------------Integer num4 = 500;-------------------------------------------------if(num1==num2){-------------------------------------System.out.println('num1==num2')--------------------}---------------else{------------------------------------------------------------------System.out.println('num1!=num2');---------------------------}--------if(num3==num4){------------------System.out.println('num3==num4');-----------------}-----------------else{-------------------------------------------------------------System.out.println('num3!=num4');-------}------}------------} "),
        choices: {
            correct: "num1==num2, num3!=num4",
            wrong: ["num1==num2, num3==num4", "num1!=num2, num3!=num4", "num1!=num2, num3==num4"]
        }
    }, {
        question_string: ("Find out the exact output?---------------------------------------------class A---------------------------------{---------------------------------------private final void flipper()----------------------------{-------------------System.out.println('Clidder');-------------}---------------}-------------public class B extends A-----------------------{--------------------------public final void flipper()---------------------{----------------------System.out.println('Clident')----------------------}----------------------public static void main(String[] args)------------------------{----------new B().flipper();---------------------}--------------------}"),
        choices: {
            correct: "Clidlet",
            wrong: ["Clidder", "compliation error", "none of these"]
        }
    }, {
        question_string: ("Find out the exact output?-------------------------------------------public class A implements Runnable-------------------------{----------public void run()----------------------------{----------------------System.out.println('GFG');-------------------------------}---------------public static void main(String[] args) throws InterruptedException----------------------{-------------------------Thread thread1 = new Thread(new A());----------------------------thread1.start();-------------------------------------------------thread1.start();-----------------------System.out.println(thread1.getState());--------}----------}"),
        choices: {
            correct: "runtime error",
            wrong: ["GFG GFG TERMINATED", "GFG TERMINATED", "Compilation error"]
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

            var scoremessage = score + " Out of " + self.questions.length + " questions were correct.";
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
            $('.score-label h1').html('<small>Hi </small>' + username + ', ' + 'Your Score<i class="smiley"></i>');
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

