var searchBigBox = document.getElementById('searchBigBox');
var searchBox = document.getElementById('searchBox');
var background = document.getElementById('background');
var searchBig = document.getElementById('searchBig');
var searchBigBox = document.getElementById('searchBigBox');

searchBox.onclick = function () {
    searchBox.style.display = 'none';
    searchBigBox.style.display = 'block';
    background.style = 'transform:scale(1.1);filter:blur(10px)';
    // 使搜索框获得焦点
    searchBig.focus()
}

searchBig.onblur = function () {
    background.style = 'transform:scale(1)';
    searchBigBox.style.display = 'none';
    searchBox.style.display = 'block';
}

var text = document.getElementById('text');
var textName = document.querySelector('.text-name');
var textP = document.querySelector('.text-p');

text.onclick = function () {
    textName.style.display = 'block';
}

text.onmouseout = function () {
    textName.style.display = 'none';
}

setInterval("showTime()", 1);

showTime = function () {
    var date = new Date();
    var h = date.getHours();
    var mm = date.getMinutes();
    var objDate = document.getElementById("date");
    var objTime = document.getElementById("time");

    if (h < 10) {
        h = "0" + h;
    }

    if (mm < 10) {
        mm = "0" + mm;
    }
    objTime.innerHTML = h + ":" + mm;
}

function getKey() {
    // input 回车跳转
    if (event.keyCode == 13) {
        console.log(searchBig.value);
        console.log('https://www.baidu.com/s?tn=68018901_39_oem_dg&ie=utf-8&word=' + searchBig.value)
        window.location.href = 'https://www.baidu.com/s?tn=68018901_39_oem_dg&ie=utf-8&word=' + searchBig.value;
        searchBig.value = '';
    }
}