
window.onload = function (){
    var http = new XMLHttpRequest();

    http.onreadystatechange = function (){
        if(http.readyState == 4 && http.status == 200){
            var parsedJSON = JSON.parse(http.response);

            document.getElementById("title").innerHTML = parsedJSON.title;
            document.getElementById("season_no").innerHTML = parsedJSON.no_season;
            document.getElementById("plot").innerHTML = parsedJSON.plot;
            document.getElementById("written_by").innerHTML = parsedJSON.written_by;
            document.getElementById("directed_by").innerHTML = parsedJSON.directed_by;
            document.getElementById("air_date").innerHTML = parsedJSON.air_date;

        }
    }
    http.open("GET","https://mr-robot-express-api.herokuapp.com/episodes/3/5",true);
    http.send();


}