function set_avatar() {
    const avatar = document.getElementById('avatar_generate')
    const username = localStorage.getItem('username') || sessionStorage.getItem('username');
    const prompt = document.getElementById('promptInput').value
    var data = {
        username: username,
        prompt : prompt
    }
    fetch('https://b6a62881-28fe-479b-b45b-27ced866329b-00-3ayo8cow7loyp.pike.replit.dev/api/generate_avatar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            if (jsonData.success === true) {
                avatar.src = jsonData.avatar_url;
                localStorage.setItem('avatar', jsonData.avatar_url)
                window.location.href = 'sign_in.html'
            }
            else {
                console.log("Error: ", jsonData.error)
            }
        })
        .catch(err => console.error("Fetch error: ", err));
}
function acceptAvatar() {
     
}
