const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);

});


const getWordInfo = async(word) => {

    try {

        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        const data = await response.json();

        let definitions = data[0].meanings[0].definitions[0];

        resultDiv.innerHTML = `
                <h2><strong>Word: </strong>${data[0].word}</h2>
                <p class="partofspeech">${data[0].meanings[0].partOfSpeech}</p>
                <p><strong>Meaning: </strong>${definitions.definition}</p>
                <p><strong>Example: </strong>${definitions.example === undefined ? "Not Found" : definitions.example}</p>
                <p><strong>Antonyms: </strong></p>
            `
        if (definitions.antonyms.length === 0) {
            resultDiv.innerHTML += `<p>Not Found</p>`;
        } else {
            for (let i = 0; i < definitions.antonyms.length; i++) {
                resultDiv.innerHTML += `<li>${definitions.antonyms[i]}</li>`
            }
        }

        resultDiv.innerHTML += `
       <p><strong>Synonyms: </strong></p>
     `

        if (definitions.synonyms.length === 0) {
            resultDiv.innerHTML += `<p>Not Found</p>`;
        } else {
            for (let i = 0; i < definitions.synonyms.length; i++) {
                resultDiv.innerHTML += `
            <li> ${definitions.synonyms[i]} </li>
            `
            }
        }

        //adding reading button
        resultDiv.innerHTML += ` <a href="${data[0].sourceUrls}" target = "_blank">Read More</a>`;
        console.log(data);
    } catch (error) {
        resultDiv.innerHTML = `<p>Sorry, the word could not be found</p>`

    }


}