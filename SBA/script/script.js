var listOfSites = [];

var links = document.getElementsByClassName("storeLink");

for (var x = 0; x < links.length; x++) {
    listOfSites[x] = links[x].href;
    console.log(links[x].href)
}

function openRandomSite() {
    var rndNum = Math.floor(Math.random() * 5);
    window.location.href = listOfSites[rndNum];
}