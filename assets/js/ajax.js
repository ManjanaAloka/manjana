$(document).ready(function() {
    $("#hi-btn").click(function(e) {
        e.preventDefault();
        // $del = $(this).val();
        $.post("https://thecbiglobal.com/_manjana.php", { 'delete': true },
            function(data, textStatus) {
                var result = JSON.parse(data);
                alert(result['res']);
            }
        );
    });
});