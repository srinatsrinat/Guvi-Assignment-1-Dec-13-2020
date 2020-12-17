//1. create a request variable from XMLhttpRequest object.
var request = new XMLHttpRequest()

//2. create a new connection 1. method 2. endpoint URL.
request.open('GET','https://restcountries.eu/rest/v2/all', true)

//3. send the request.
request.send()

//4. load the response.
request.onload=function(){
    var data = JSON.parse(this.response)

    for(i=0;i<data.length;i++)
    {
        console.log(data[i].name)
    }
  
}