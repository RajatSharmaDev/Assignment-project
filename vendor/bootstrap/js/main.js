

$(window).scroll(function () {
  $(".navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
});
// custom word count
$.validator.addMethod("wordCount", function(value, element, wordCount) {
  return value.split(' ').length <= wordCount;
}, 'Exceeded word count');


$(function () {
  let $query = $("#queryForm");
  
    $query.validate({
      rules: {
        mail: {
          required: true,
          email:true
        },
        subject: {
          required: true,
        },
        description: {
          required: true,
          wordCount:50,
        },
      },
      messages: {
        mail: {
          required: "Email is mandatory ",
          email:"Plz Enter Email"
        },
        subject: {
          required: "Subject is mandatory",
        },
        description: {
          required: "Description is mandatory",
          wordCount:"No More Thna 50 Words",
        },
      },
      errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
          $(placement).append(error)
        } else {
          error.insertAfter(element);
        }
      }
     
    });
  
});



$(function () {
  let $contact = $("#contactForm");
  
    $contact.validate({
      rules: {
        email: {
          required: true,
          email:true
        },
        Fname: {
          required: true,
        },
        message: {
          required: true,
          wordCount:50,
          
        },
      },
      messages: {
        email: {
          required: "Email is mandatory ",
          email:"Plz Enter Email"
        },
        Fname: {
          required: "Name is mandatory",
        },
        message: {
          required:"Message is mandatory",
          wordCount:"No More Thna 50 Words",
        
        },
      },
      errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
          $(placement).append(error)
        } else {
          error.insertAfter(element);
        }
      }
    });
  
});
