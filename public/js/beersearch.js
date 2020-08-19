$(document).ready(function() {
    
        
        $("#searchBtn").on("click", function(event) {
            event.preventDefault();
            var searchTerm = $("#search-term").val();
            var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + searchTerm;
            $.ajax({
                url: queryURL,
                method: 'GET'
            }).then (function(result) {
                console.log(result);
                  const list = $("<ol>");
                  for (let i = 0; i < result.length; i++) {
                       var id = result[i].id;
                       var name = result[i].name;
                       var button = $('<button class="btn btn-success">Save</button>')                
                       var phone = result[i].phone; 
                       var website = result[i].website_url;
                       var newItem = $("<li>").text(name);
                       var phoneP = $("<p>").text(phone);
                       var webP = $("<p>").text(website);
                       newItem.append(phoneP);
                       newItem.append(webP);
                       newItem.append(button);
                       list.append(newItem);
                       $(".results").append(list);
                     }
             })
    })
    })

})