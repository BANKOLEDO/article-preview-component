const nameDate = document.getElementById("first-content")
const secondContent = document.getElementById("second-content")
const cardFooter = document.getElementById("card-footer")
const firstButton = document.getElementById("first-button")
const clickedSecondShare = () => {
    cardFooter.style.backgroundColor = "white";
    secondContent.innerHTML = '';
    nameDate.style.display ="";
}
const clickedFirstShare = () => {
    nameDate.style.display = "none";
    cardFooter.style.backgroundColor = "hsl(217, 19%, 35%)";
secondContent.innerHTML = `
        <h2 class="share">SHARE</h2>
        <a href="#"> <img src="./images/icon-facebook.svg" alt="facebook-icon" id="facebook-icon" ></a>
        <a href="#"><img src="./images/icon-twitter.svg" alt="twitter-icon" id="twitter-icon"></a>
        <a href="#"><img src="./images/icon-pinterest.svg" alt="pinterest-icon" id="pinterest-icon"></a>
        <button id="second-button"><img src="./images/icon-share.svg" alt="" class="share-icon-white"></button>
`;
    const secondButton = document.getElementById("second-button");
    secondButton.addEventListener("click", clickedSecondShare);
}
firstButton.addEventListener("click", clickedFirstShare);