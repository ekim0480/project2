$(document).ready(function () {

  new Sortable(savedBreweries, {
      animation: 150,
      ghostClass: 'sortable-ghost'
    });

  $("#deleteBtn").on("click", function (event) {
    event.preventDefault();
    alert("Brewery removed!");
    let id = $(this).data("id")

  $.ajax({
    method: "DELETE",
    url: "api/breweries" + id
  })
  
    // console.log("kurt")
    // console.log(button.attr('data-index',id));
    // console.log(result);
  
  //  console.log(button.attr('data',i));
  //  console.log(result[i].attributes.nodeValue)
  })
})