$(function(){
    let $registerForm = $(".custom-login-validation");
    
    if($registerForm.length)
    {
        $registerForm.validate({
            rules:
            {
                email:
                {
                    required:true,
                    email:true
                },
                password:
                {
                    required:true,
                    password:true
                }
            },
            messages:
            {
               
                email:{
                    required: 'email is mandatory',
                    email:'Please enter valid email'
                },
                password:{
                    required: 'password is mandatory',
                    email:'Please enter valid password'
                }
                
            },
            errorPlacement: function(error, element) {
                var placement = $(element).data('error');
                if (placement) {
                  $(placement).append(error)
                } else {
                  error.insertAfter(element);
                }
            }
        })
    }
})


$(function(){
    let $registerForm = $(".custom-tlogin-validation");
    
    if($registerForm.length)
    {
        $registerForm.validate({
            rules:
            {
                email:
                {
                    required:true,
                    email:true
                },
                password:
                {
                    required:true,
                    password:true
                }
            },
            messages:
            {
               
                email:{
                    required: 'email is mandatory',
                    email:'Please enter valid email'
                },
                password:{
                    required: 'password is mandatory',
                    email:'Please enter valid password'
                }
                
            },
            errorPlacement: function(error, element) {
                var placement = $(element).data('error');
                if (placement) {
                  $(placement).append(error)
                } else {
                  error.insertAfter(element);
                }
            }
        })
    }
})


$(function(){
    let $registerForm = $(".custom-ssignup-validation");
    
  
        $registerForm.validate({
            rules:
            {
                ssignupname:
                {
                    required:true,
                    
                },
                ssignupemail:
                {
                    required:true,
                    email:true
                },
                ssignuppassword:
                {
                    required:true,
                    password:true
                },
                ssignupnumber:
                {
                    number:true,
                    minlength:10,
                    maxlength:10,
                    required:true
                }

            },
            messages:
            {
                ssignupname:
                {
                    required:'Name is mandatory',
                    
                },
                ssignupemail:{
                    required: 'email is mandatory',
                    email:'Please enter valid email'
                },
                ssignuppassword:{
                    required: 'password is mandatory',
                    
                },
                ssignupnumber:
                {
                    required:"Number is Mandatory",
                    number:'Only Digits Allowed',
                    minlength:"Only 10 digits Allowed",
                    maxlength:"Only 10 digits Allowed",
                }
                
            },
            errorPlacement: function(error, element) {
                var placement = $(element).data('error');
                if (placement) {
                  $(placement).append(error)
                } else {
                  error.insertAfter(element);
                }
            }
        })
    
})


$(function(){
    let $registerForm = $("#custom-tsignup-validation");

        $registerForm.validate({
            rules:
            {
                tsignupname:
                {
                    required:true,
                    
                },
                tsignupemail:
                {
                    required:true,
                    email:true
                },
                tsignuppassword:
                {
                    required:true,
                },
                tsignupnumber:
                {
                    required:true,
                    number:true,
                    minlength:10,
                    maxlength:10
                }

            },
            messages:
            {
                tsignupname:
                {
                    required:'Name is mandatory',
                    
                },
                tsignupemail:{
                    required: 'email is mandatory',
                    email:'Please enter valid email'
                },
                tsignuppassword:{
                    required: 'password is mandatory',
                },
                tsignupnumber:
                {
                    required:"Number is Mandatory",
                    number:'Only Digits Allowed',
                    minlength:"Only 10 digits Allowed",
                    maxlength:"Only 10 digits Allowed",
                }
                
            },
            errorPlacement: function(error, element) {
                var placement = $(element).data('error');
                if (placement) {
                  $(placement).append(error)
                } else {
                  error.insertAfter(element);
                }
            }
        })
    
    });

    $(document).ready(function () {
        $(".responsive-calendar").responsiveCalendar({
          time: '2020-11',
          events: {
            "2020-04-30": {"number": 5, "url": "http://w3widgets.com/responsive-slider"},
            "2020-04-26": {"number": 1, "url": "http://w3widgets.com"}, 
            "2020-11-12":{"number": ""}, 
            "2020-06-12": {}}
        });
      });