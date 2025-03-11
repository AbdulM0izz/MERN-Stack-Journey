//insert all code init first load all the dom content
document.addEventListener('DOMContentLoaded', () => {

    const userinput = document.getElementById('user-input');
    const searchbtn = document.getElementById('search-btn');
    const easyProgressCricle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".Medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("Medium-label");
    const hardLabel = document.getElementById("hard-label");
    const statscont = document.querySelector(".stats-container");




    function validateUsername(username) {
        if (username.trim() === "") {
            alert("User name should not be empty");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]{1,20}$/;
        const isMatching = regex.test(username);

        if (!isMatching) {
            alert("Invalid username");
        }
        return isMatching;

    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try {
            searchbtn.textContent = "Searching";
            searchbtn.disabled = true;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Unable to fetch user details");
            }

            const parseddata = response.json();

            console.log(parseddata);
            displayUserdata(parseddata);

        } catch (error) {
            statscont.innerHTML = '<p>No Data Found</p>';
        } finally {
            searchbtn.textContent = "Search";
            searchbtn.disabled = false;

        }

    }

    function updatedata(solved, total, label, circle) {
        const progressdegree = (solved / total) * 100;
        circle.style.setProperty("--progress", `${progressdegree}%`);
        label.textContent = `${solved} / ${total}`;

    }

    function displayUserdata(parseddata) {
        const totalEasy = parseddata.totalEasy;
        const totalMedium = parseddata.totalMedium;
        const totalHard = parseddata.totalHard;

        // // solved
        const totalEasyQues = parseddata.totalEasy;
        const totalMediumQues = parseddata.mediumSolved;
        const totalHardQues = parseddata.hardSolved;

        updatedata(totalEasyQues, totalEasy, easyLabel, easyProgressCricle);
        updatedata(totalMediumQues, totalMedium, mediumProgressCircle, mediumLabel);
        updatedata(totalHardQues, totalHard, hardProgressCircle, hardLabel);


    }

    searchbtn.addEventListener('click', () => {
        const username = userinput.value;
        console.log("logging username", username);

        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });





})