const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '9963f7f3',
            s: searchTerm
        }
    });

    console.log(response.data);
};

const input = document.querySelector('input');

let timeoutId;
const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 500)
};

input.addEventListener('input', onInput);