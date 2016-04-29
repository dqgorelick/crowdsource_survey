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
        $.get("http://ec2-52-37-252-133.us-west-2.compute.amazonaws.com/api/tests/" +  query.test, function(data) {
            data = data[0];
            $(".test_name").html(data.Test);
            $(".disease_name").html(data.Disease);
            $(".sens_val").html(data.Sensitivity);
            $(".spec_val").html(data.Specificity);
            $(".notes_text").html(data.Notes);
            $(".source_name").html(data.Source);
            $(".source_link").html(data.Link);
            $(".1-sens_val").html((100-data.Sensitivity).toFixed(1));
            $(".1-spec_val").html((100-data.Specificity).toFixed(1));
            document.getElementById("sourcelink").href=data.Link
            console.log(data.Disease);
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
