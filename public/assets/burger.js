const devourBurger = document.querySelectorAll(".btn-devour")
devourBurger.forEach(function(element){
   element.addEventListener("click",function(event){
       event.preventDefault();
       let submitDevour = {burger_name: $(".burger_name").text()};
       console.log(submitDevour);

$.ajax("/api/devour", {
    type: "PUT",
    data: submitDevour
})
.then(function(resp){
  console.log(resp)
  location.reload()
})
.catch(function(err){
  console.log(err)
});
