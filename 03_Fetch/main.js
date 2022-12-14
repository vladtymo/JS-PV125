// API 
const gitHubUsersApi = 'https://api.github.com/users';
const privateExchangeApi = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
const monoKurs = 'https://api.monobank.ua/bank/currency'
const gismeteoApi = 'https://api.gismeteo.net/v2/weather/current/4398/';

async function showApiResult(api) {
    const response = await fetch(api);
    console.log("Response Status: " + response.status);

    const result = await response.json();

    console.log(result);
}
async function showGitHubUserAvatar(login) {
    const response = await fetch(gitHubUsersApi + '/' + login);
    const result = await response.json();

    const avatarImg = document.getElementById('avatar-img');
    avatarImg.src = result.avatar_url;
}

showApiResult(gitHubUsersApi);
//showApiResult(monoKurs);
//showApiResult(gismeteoApi);

showGitHubUserAvatar('vladtymo');
