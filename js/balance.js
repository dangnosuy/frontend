document.addEventListener('DOMContentLoaded', function () {
    const balance = document.getElementById('user-balance');
    const username = localStorage.getItem('username') || sessionStorage.getItem('username');
    console.log(username)

    fetch(`https://68cfba9e-fe18-4301-8a54-7a4bfc790350-00-26ktjx6yhw4zw.pike.replit.dev//api/get_balance?username=${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            if (jsonData.success === true) {
                const rawBalance = jsonData.balance.balance;

                // Nếu muốn convert thành Number để format:
                const num = parseFloat(rawBalance);

                balance.textContent = num.toLocaleString() + ' VND'
            }
            else {
                console.log("Error: ", jsonData.error)
            }
        })
        .catch(err => console.error("Fetch error: ", err));
})
