var urlGit = "https://api.github.com/search/users?q=";


$('#btn').click(event => {

    $('#result').empty();
   
    event.preventDefault();

    fetch(urlGit + $('#git').val())
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            createList(data);
        })
        .catch(function (error) {
            sendErrorMessage(error);
        });
});


function createList(users) {
    
     
    users.items.forEach(user => {
        
        var list = $("<li></li>");
        $('<a>', {text: user.login, href: user.html_url}).appendTo(list);

        $('#result').append(list);
       
    });
    
};
var resultDiv = $('#result');

function sendErrorMessage(error){
    resultDiv.innerHTML = '<p style=color: red>TypeError: Failed to fetch</p>';

}