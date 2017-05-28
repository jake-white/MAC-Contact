var output = function(e){
    e.preventDefault();
    if($('#commentform').valid()){
        $('#nameOutput').text("Name: " + $('#fname').val());
        $('#emailOutput').text("Email: " + $('#femail').val());
        $('#phoneOutput').text("Phone: " + $('#fphone').val());
        $('#messageOutput').text("Message: " + $('#fmessage').val());
    }
}

$( document ).ready(function() {
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $('#commentform').validate({
        onkeyup: function( element, event ) {
    if ( event.which === 9 && this.elementValue(element) === "" ) {
        return;
    } else if ( element.name in this.submitted || element === this.lastElement ) {
        this.element(element);
    }
},
        rules: {
            fname: {
                required: true
            },
            femail: {
                required: true,
                email: true
            },
            fphone: {
                phoneUS: true
            },     
            fmessage: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "Please specify your full name.<br>",
            },
            femail: {
                required: "Please specify your email address.<br>",
                email: "Your email address must be in the format of name@domain.com.<br>"
            },
            fphone: {
                phoneUS: "Your phone number must be in the the US phone format (ie xxx-xxx-xxxx).<br>"
            },
            fmessage: {
                required: "Please leave us a message.<br>"
            }        
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        }
    });

    $("#commentform").submit(function(e) {
        output(e);
    });
});
