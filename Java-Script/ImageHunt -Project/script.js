const accessKey = '9hSpuTzbS234HVuwd3rdPWuJnvMo7RoOSPmG-eNs3Oc';
const searchInput = document.querySelector('.search-input');
const imagesContainer = document.querySelector('.images-container');
const searchForm = document.querySelector('form');

const fetchImages = async(query) => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=28`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    data.results.forEach(photo => {
        const imageElement = document.createElement('div');
        imageElement.innerHTML = `<img src="${photo.urls.regular}" alt="Unsplash Image"/>`;
        imagesContainer.appendChild(imageElement);
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop auto submit
    const inputText = searchInput.value.trim();

    if (inputText !== '') {
        imagesContainer.innerHTML = ''; // Clear previous results
        fetchImages(inputText);
    } else {
        imagesContainer.innerHTML = '<h3>Enter query to search</h3>';
    }
});