$("#searchBtn").on("click", function(event) {
    event.preventDefault();


 
    const searchTerm = $("#search-term").val("Chicago");
    
    // this would be the api key

    const queryURL = 'https://api.openbrewerydb.org/breweries?by_city=' + searchTerm + "'";

   // this is the ajax call with the queryURL and results which would occur on Rocio's list.

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then (function(result) {
        console.log(result);
        var list = $("<ol>");
             result.id;
             result.name;
             result.brewery_type;
             result.street;
             result.city;
             result.state;
             result.postal_code;
             result.phone;
             result.website_url

        // for (var i = 0; i < numRecords; i++) {
        //     var headline = result.response.docs[i].headline.main;
        //     var author = result.response.docs[i].byline.original;
        //     var newItem = $("<li>").text(headline);
        //     var authorP = $("<p>").text(author);
        //     newItem.append(authorP);
        //     list.append(newItem);
        //     $(".results").append(list);
        // }
    })
});


