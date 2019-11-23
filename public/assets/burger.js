const devourBurger = $("li.list-group-item")
devourBurger.each(function () {
    
    const element = $(this)
    const btn = element.find(".btn-devour")
    const name = element.find(".burger_name").text()
    btn.click(function (event) {
        event.preventDefault();
        let spacefix = name.trim();
       


        $.ajax("/" + spacefix, {
            type: "PUT",
            
        })
            .then(function (resp) {
                location.reload()
            })
            .catch(function (err) {
                console.log(err)
            })
    })
})
