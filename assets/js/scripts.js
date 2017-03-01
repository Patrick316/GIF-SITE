     


      var foods = ["Pizza", "Eggplant", "Brownies", "Tomato Soup" , "Grilled Cheese", "Hotdog", "Chocolate", "Cookie", "Toast", "Carrots", 
      "Salmon", "Cereal", "Cake", "Pasta", "Ice Cream", "Apples", "Cottage Cheese", "Salad", "Shrimp", "Tacos", "Clams", ];     
           


      function renderButtons() {  

        for (var i = 0; i < foods.length; i++) {

        var a = $("<button>").addClass("foods").attr("value", foods[i]).text(foods[i]);

        $("#food-view").append(a);
        }
        }
       $("#add-food").on('click', function(event) {    

        event.preventDefault();

        var food = $("#food-input").val().trim();

        var a = $("<button>").addClass("foods").attr("value",food).text(food);

        $("#food-view").append(a);

        foodClick();  
      });
        renderButtons();

        function foodClick(){

        $(".foods").on('click', function(){

        var value = $(this).val(); 

        runAjax(value);   
         });
         }

        foodClick();

        function runAjax(value){

        $(".gif-list").empty();

        $.ajax({  
        url: "https://api.giphy.com/v1/gifs/search?q="+value+"&api_key=dc6zaTOxFJmzC" ,
        method: "GET"
        }).done(function(response) {

        for(i=0; i<response.data.length; i++){

        console.log(response.data[i].images.original.url)

        $(".gif-list").append([" <img  src='"+response.data[i].images.original.url+"'/> "])   
              }
                  
           });
}