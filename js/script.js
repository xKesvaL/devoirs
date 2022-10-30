function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}

let lf26 = loadFile("devoirs/10-2022/26.md");

let test = document.querySelector(".test");
test.innerText = lf26;
