const accessKey = '9hSpuTzbS234HVuwd3rdPWuJnvMo7RoOSPmG-eNs3Oc';
const searchinput = document.querySelector('.search-input');
const imagesContainer = document.querySelector('.images-conatiner');
const searchForm = document.querySelector('form');



const fetchImages = async(query) => {

    const url = 'https://api.unsplash.com/photos/?query=&{query}&client_id=DxWKJzOE9ny3fvLko1a-xgTLT_atcTIBT5srg9pAQSw&per_page=28';

    const response = await fetch(url);
    const data = response.json();
    console.log(data);
}
searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop auto submit
    const inputtext = searchinput.value.trim();

    if (inputtext !== '') {
        fetchImages(inputtext);
    } else {
        imagesContainer.innerHTML = '<h3>Enter query to search</h3>';
    }
});