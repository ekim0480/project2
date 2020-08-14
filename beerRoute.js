$("#searchBtn").on("click", function(event) {
    event.preventDefault();

   // these are our search criteria.

    var searchTerm = $("#search-term").val();
    console.log(searchTerm);
    var beginDate = $("#start-year").val() + "0101";
    console.log(beginDate);
    var endDate = $("#end-year").val() + "1231";
    console.log(endDate);
    var numRecords = $("#records").val();

    // this would be the api key

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=MNbJlZSrmfo8n7sYefdYulu2plB8kTUa&facet=true&begin_date=" + beginDate + "&end_date=" + endDate;

   // this is the ajax call with the queryURL and results which would occur on Rocio's list.

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then (function(result) {
        console.log(result);
        var list = $("<ol>");

        for (var i = 0; i < numRecords; i++) {
            var headline = result.response.docs[i].headline.main;
            var author = result.response.docs[i].byline.original;
            var newItem = $("<li>").text(headline);
            var authorP = $("<p>").text(author);
            newItem.append(authorP);
            list.append(newItem);
            $(".results").append(list);
        }
    })
})


</script>
