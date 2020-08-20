


$(document).ready(function () {
   const user_id =  $("#user_id").text()
  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var searchTerm = $("#search-term").val();
    var queryURL =
      "https://api.openbrewerydb.org/breweries?by_city=" + searchTerm;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (result) {
      // console.log(result);
      const list = $("<ol>");
      for (let i = 0; i < result.length; i++) {
        var id = result[i].id;
        var name = result[i].name;
        var phone = result[i].phone;
        var website = result[i].website_url;
        var newItem = $("<li>").text(name);
        var phoneP = $("<p>").text(phone);
        var webP = $("<p>").text(website);
        var button = $('<button class="btn btn-success">Save</button>')
        // button.attr("data-index",id)
       
        // console.log(i);
        newItem.append(phoneP);
        newItem.append(webP);
        // button.attr('data',i)
        newItem.append(button);
        
        list.append(newItem);
        
        $(".results").append(list);
         button.on("click", function (event) {
        
          // console.log($(this.name));
          event.preventDefault();
          console.log(i,result[i].name);
          // console.log(login);
          console.log(user_id);
        
          // console.log("kurt")
          // console.log(button.attr('data-index',id));
          // console.log(result);
         
        //  console.log(button.attr('data',i));
        //  console.log(result[i].attributes.nodeValue)
        })
      }
     
    });
   
  });
 
   
    
  })
