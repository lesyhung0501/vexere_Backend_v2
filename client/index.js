axios({
    method: 'get',
    url: 'http://localhost:3000/api/v1/fingerprint'
}).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
})