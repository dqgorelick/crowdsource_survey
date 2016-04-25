$(document).ready(function() {
    function load_items() {
        $.get("http://155.41.65.224:8080/api/browse", function(data) {
            data.forEach(function(test) {
                var html_string = "<a href='../test_page?test="+test.rowid +"'class='list-group-item'>" + test.Test + "</a>";
                $(".all-tests").append(html_string);
            });
        });
    }
    load_items();
});
