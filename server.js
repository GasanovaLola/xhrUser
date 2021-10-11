var url  = "https://jsonplaceholder.typicode.com/users";
var xhr  = new XMLHttpRequest();

function getUsers(url, xhr) {
    xhr.open('GET', url, true);

    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
        return;
        }
    
        if (xhr.readyState == 4 && xhr.status === 200) {
        console.log('result', JSON.parse(xhr.responseText));
        } else {
        console.log('err', xhr.responseText);
        }
    }
}

function getUser(url, xhr) {
    xhr.open('GET', url+'/1', true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
        return;
        }
    
        if (xhr.readyState == 4 && xhr.status === 200) {
        console.log('result', JSON.parse(xhr.responseText));
        } else {
        console.log('err', xhr.responseText);
        }
    }
}

function addUser(url, xhr) {
    var user = {};
    user.name = "Lola";
    user.lastname  = "Gasanova";
    user.email = "lolagasanova@gmail.com";

    var body = "name=" + encodeURIComponent(user.name) + "&username=" + encodeURIComponent(user.username) + "&email=" + encodeURIComponent(user.email);
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);

    xhr.onreadystatechange = function() {
        console.log(xhr.responseText);
    }
}

function updateUser(url, xhr) {
    var user = {};
    user.name = "Eva";
    user.lastname  = "Gasanova";
    user.email = "evagasanova@gmail.com";
    var json = JSON.stringify(user);

    xhr.open("PUT", url+'/3', true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
        return;
        }
    
        if (xhr.readyState == 4 && xhr.status === 200) {
        console.log('result', JSON.parse(xhr.responseText));
        } else {
        console.log('err', xhr.responseText);
        }
    }
    xhr.send(json);
}

function deleteUser(url, xhr) {
    xhr.open("DELETE", url+'/3', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
        return;
        }
    
        if (xhr.readyState == 4 && xhr.status === 200) {
        console.log('result', JSON.parse(xhr.responseText));
        } else {
        console.log('err', xhr.responseText);
        }
    }
    xhr.send(null);
}

getUsers(url, xhr);