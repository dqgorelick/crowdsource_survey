$(document).ready(function() {
    function parseQuery(qstr) {
        var query = {};
        var a = qstr.substr(1).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
    }
    function load_test_page() {
        var query = parseQuery(location.search);
        $.get("http://155.41.65.224:8080/api/tests/" +  query.test, function(data) {
            data = data[0];
            for (var param in data) {
                $("#test_page").append("<p class='test_text'>"+ data[param] + "</p>");
            }
            $("#test_page").append("<img src='http://puppytoob.com/wp-content/uploads/sites/3/2011/10/dog-in-plane.jpg'>");
            console.log(data.Disease);
            $("#test_page").append("<p>" + data.Notes + "</p>");
            console.log(data.Link);
            console.log(data.Notes);
            console.log(data.Sensitivity);
            console.log(data.Source);
            console.log(data.Specificity);
            console.log(data.Test);
        })
    }
    load_test_page();

});
