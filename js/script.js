/*var button = document.getElementById("button-text");
button.addEventListener("click", function() {
    var jsonHttp = new XMLHttpRequest();
    jsonHttp.onreadystatechange = function() {
        if (jsonHttp.readyState === 4 && jsonHttp.status === 200)
            userEntry(jsonHttp);
    };
    jsonHttp.open("GET", "./json/data.json");
    jsonHttp.send();
});

function userEntry(jsonHttp) {
    var username = document.getElementById("name-text").value;
    var email = document.getElementById("email-text").value;
    var password = document.getElementById("pass-text").value;
    var file = jsonHttp.responseText;
    file = JSON.parse(file);
    var i = 0;
    for (i in file) {
        if (i === "username") {
            var listOfUsernames = file[i];
            listOfUsernames.push(username);
            file[i] = JSON.stringify(listOfUsernames);
            console.log(file[i]);
        } else if (i === "email") {
            file[i].push(JSON.stringify(email));
        } else if (i === "password") {
            file[i].push(JSON.stringify(password));
        }
    }
    console.log("Done.");
}*/

// window.open("http://127.0.0.1:5501/E-Diary/snippets/user-space.html", "_self");