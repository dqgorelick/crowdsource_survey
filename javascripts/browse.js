$(document).ready(function() {
    function load_items() {
        $.get("http://ec2-52-37-252-133.us-west-2.compute.amazonaws.com/api/browse", function(data) {
            data.forEach(function(test) {
                var html_string = "<a href='../test_page?test="+test.rowid +"'class='list-group-item'>" + test.Test + "</a>";
                $(".all-tests").append(html_string);
            });
        });
    }
    load_items();
});
