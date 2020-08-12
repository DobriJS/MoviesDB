const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '9963f7f3',
            s: 'avengers'
        }
    });

    console.log(response.data);
};