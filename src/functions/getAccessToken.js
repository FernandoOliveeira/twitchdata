const hash = new URLSearchParams(document.location.hash.slice(1));


const getAccessToken = () => {
    localStorage.accessToken = hash.get('access_token');

}

export default getAccessToken;