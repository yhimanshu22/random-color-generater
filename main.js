const getColor = () => {
    //hexcode
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById ("hex-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);

}

document.getElementById("btn").addEventListener("click", getColor);
getColor();

