const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);

});

const getWordInfo = async(word) => {
    // alert("Hello" + word);

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    let data = response.json();
    console.log(data);


}