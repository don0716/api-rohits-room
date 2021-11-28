var input = document.querySelector("#input")
var msg = document.querySelectorAll(".msg")
// var humidity = document.querySelector("#msg-hum")
// var light = document.querySelector("#msg-light")
var btn = document.querySelector("#btn")
var btn2 = document.querySelector("#btn2")

var serverUrl = "https://api.thingspeak.com/channels/966231/feeds.json?api_key=ERWGXVTZZX4ZU1M1&results=2"

function errorHandler(error){
  console.log("error occured", error)
  msg[4].innerText = "error occured" + error
  // alert("Something went WRONG in Rohit's SERVER!! Please Try Again Later!")
}

btn.addEventListener("click", checkBtn => {
 fetch(serverUrl)
 .then(res => res.json())
 .then(json => {
    console.log(json)
    console.log(json.feeds[0].field1)

     msg[0].innerText = "Created at: " + json.feeds[0].created_at
     msg[1].innerText = "Temp: " + json.feeds[0].field1
     msg[2].innerText = "Humidity: " + json.feeds[0].field2
     msg[3].innerText = "Light: " + json.feeds[0].field3
 })
  .catch(errorHandler)
})

// btn2.addEventListener("click", checkBtn2 => {
//  fetch(serverUrl)
//  .then(res => res.json())
//  .then(json => {
//      msg[0].innerText = "Created at: " + json.feeds[1].created_at
//      msg[1].innerText = "Temp: " + json.feeds[1].field1
//      msg[2].innerText = "Humidity: " + json.feeds[1].field2
//      msg[3].innerText = "Light: " + json.feeds[1].field3
//  })
//  .catch(errorHandler)
// })