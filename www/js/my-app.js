// Let's register Template7 helper so we can pass json string in links
Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context);
});

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
});

//$(document).ready(function(){
//	document.getElementById("drtitle").innerText = "title here";
//});

$(document).ready(function(){

    var output = $('#drtitle');

    $.ajax({
        url: 'http://192.168.1.200/app/index.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){

            $.each(data, function(i,item){
                var landmark = item.name;

                output.append(landmark);

            });
        },

        error: function(){
            output.text('Error loading data.');
        }
    });
});