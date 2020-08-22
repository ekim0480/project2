


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
       var phone = "Phone:  " + result[i].phone.substring(0,3) + "-" + result[i].phone.substring(3,6) + "-"+ result[i].phone.substring(6,10);
       var website = result[i].website_url;
       var newItem = $('<li class="breweryName">').text(name);
       var phoneP = $('<p class="phoneNum">').text(phone);
       var webP = $('<a>').text(website);
       webP.attr("href", result[i].website_url);
       var button = $('<button class="btn btn-success float-right">Save</button>')
       // button.attr("data-index",id)
      
       // console.log(i);
       newItem.append(button);
       newItem.append(phoneP);
       newItem.append(webP);
       // button.attr('data',i)

       
       list.append(newItem);
       
       $(".results").append(list);
        button.on("click", function (event) {
       
         // console.log($(this.name));
         event.preventDefault();
         $(this).prop("disabled", true);
         console.log(i,result[i].name);
         // console.log(login);
         console.log(user_id);

         var addBrewery = {
           name: result[i].name,
           phone: result[i].phone,
           website: result[i].website_url
         }

        $.ajax({
          type: "POST",
          url: "api/breweries",
          data: addBrewery
        })
       
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
