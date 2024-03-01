document.addEventListener('DOMContentLoaded',function(){
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const reposit = document.querySelector('#reposit');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');
    const api = `https://api.github.com/users/feliperdgz7`;

    fetch(api)
        .then(function(resposta){
            return resposta.json();
        }) 
        .then(function(json){
            name.innerText = json.name;
            username.innetText = json.login;
            avatar.src = json.avatar_url;
            following.innerText = json.following;
            followers.innerText = json.followers;
            reposit.innerText = json.public_repos;
            link.href = json.html_url;
        })
        .catch(function(error){
            alert("Ocorreu um erro!")
        })
})