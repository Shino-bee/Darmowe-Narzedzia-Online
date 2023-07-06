// Load header navbar template from html file (template_header.html)
const xhrHeader = new XMLHttpRequest();
xhrHeader.onload = function () {
  document.getElementById("header").innerHTML = this.response;
};
xhrHeader.open("GET", "../../pages/_templates/template_header.html", false);
xhrHeader.send();

// Load footer template from html file (template_footer.html)
const xhrFooter = new XMLHttpRequest();
xhrFooter.onload = function () {
  document.getElementById("footer").innerHTML = this.response;
};
xhrFooter.open("GET", "../../pages/_templates/template_footer.html", false);
xhrFooter.send();
