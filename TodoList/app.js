//Scope:
//function: const, var and let are all local variables
//outside a function(entire document): const, var and let are all global variables
//while/for/if/else: const and var -> global / let: local

const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()
//EJS: Embedded JavaScript templating.
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

let items = ["Study"]
let workItems = []

app.get("/", function(req, res){
    const nameOfTheDay = date.getDate()    

    //This is going to search for a template called "list" inside the folder "views"
    //and render it according to the value we pass(nameOfTheDay) to the variable "day"
    res.render("list", {listTitle: nameOfTheDay, items: items})
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", items: workItems})
})

app.get("/about", function(req, res){
    res.render("about")
})

app.post("/", function(req, res){
    let item = req.body.newItem

    if (req.body.list == "Work List"){
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/")
    }
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})