/* Load async <header> navbar template from file (template_header.html) */
async function getHeader() {
  const headerUrl = "../../pages/_templates/template_header.html";
  const response = await fetch(headerUrl);
  const html = await response.text();
  document.getElementById("header").innerHTML = html;

  // Append <script> tag with header.js file to the <head>
  const script = document.createElement("script");
  script.defer = true;
  script.type = "text/javascript";
  script.src = "../../js/header.js";
  document.head.appendChild(script);
}
getHeader();

/* Load async <footer> template from file (template_footer.html) */
async function getFooter() {
  const footerUrl = "../../pages/_templates/template_footer.html";
  const response = await fetch(footerUrl);
  const html = await response.text();
  document.getElementById("footer").innerHTML = html;
}
getFooter();
