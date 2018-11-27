const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.4ef43884abcd35a9";
const client_secret = "34979db0810d3be33c9b4e1a03505d82540b9e71";

// make an API call
// use async await
const fetchUsers = async (user) => {
    // use fetch API
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret${client_secret}`);
    // convert the call into JSON
    const data = await api_call.json();
    // return an object with the key called data & setting its value to const data
    // if key & value pairs are the same, simply call data once
    return { data }
};

// calls fetchUsers function
const showData = () => {
    fetchUsers(inputValue.value).then((response) => {
        nameContainer.innerHTML = `Name: <span class="main__profile-value">${response.data.name}</span>`
        unContainer.innerHTML = `Username: <span class="main__profile-value">${response.data.login}</span>`
        reposContainer.innerHTML = `Repos: <span class="main__profile-value">${response.data.public_repos}</span>`
        urlContainer.innerHTML = `URL: <span class="main__profile-value">${response.data.html_url}</span>`
    })
};

searchButton.addEventListener("click", () => {
    showData();
})