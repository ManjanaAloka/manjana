$(document).ready(function () {
    // $("#contact-form-id").submit(function (e) {
    //     e.preventDefault();
    //     var formData = $(this).serialize();
    //     $.post("https://thecbiglobal.com/_manjana.php", { mail: true, formData: formData },
    //         function (data, textStatus) {
    //             var result = JSON.parse(data);
    //             alert(result['res']);
    //         }
    //     );
    // });


    $('#contact-form-id').submit(function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        formData.append('sendMail', true);
        $.ajax({
            url: 'https://thecbiglobal.com/_manjana.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                // var response = JSON.parse(response);
                swal("Success!", "Your message has been sent successfully.", "success");
                // if(response['sendMail'] == 'ok') {
                //     // alert(response['email']);
                //     console.log(response);
                $('#contact-form-id')[0].reset();
                // } else {
                //     console.log(response);
                //     // swal("Error!", "There was an error sending your message. Please try again later.", "error");
                // }
            }
        });
    });
});