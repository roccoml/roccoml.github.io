let body = document.querySelector('div');
body.addEventListener('click', giveAlert);

function giveAlert(){
    alert('this is an alert')
}

const hover = document.getElementById("hover");

hover.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
    
    setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    }, false);

const input = document.querySelector('input');
const log = document.getElementById('log');
    input.addEventListener('keydown', logKey);
    function logKey(e) {
      log.textContent += ` ${e.code}`;
    }

    function onHover()
{
    $("#menuImg").attr('src', 'https://hotemoji.com/images/emoji/e/chemy11ox0qqe.png');
}

function offHover()
{
    $("#menuImg").attr('src', '"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/33/smiling-face-with-smiling-eyes_1f60a.png');
}