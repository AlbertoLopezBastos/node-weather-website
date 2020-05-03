const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

const fetchData = (address) => {
    fetch(`/weather?address=${address}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.error);
            if (data.error) {
                return messageOne.textContent = data.error;
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        });
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = "Loading..."
    messageTwo.textContent = "";

    fetchData(location);
});
