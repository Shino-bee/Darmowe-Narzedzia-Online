// Load <header> navbar template from file (template_header.shtml)
const xhrHeader = new XMLHttpRequest();
xhrHeader.onload = function () {
  document.getElementById("header").innerHTML = this.response;
};
xhrHeader.open("GET", "../../pages/_templates/template_header.shtml", false);
xhrHeader.send();

// Load <footer> template from file (template_footer.shtml)
const xhrFooter = new XMLHttpRequest();
xhrFooter.onload = function () {
  document.getElementById("footer").innerHTML = this.response;
};
xhrFooter.open("GET", "../../pages/_templates/template_footer.shtml", false);
xhrFooter.send();
