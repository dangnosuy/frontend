document.addEventListener('DOMContentLoaded', function () {
    const balance = document.getElementById('user-balance');
    const username = localStorage.getItem('username') || sessionStorage.getItem('username');
    console.log(username)

    fetch(`https://b6a62881-28fe-479b-b45b-27ced866329b-00-3ayo8cow7loyp.pike.replit.dev/api/get_balance?username=${username}`, {
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
