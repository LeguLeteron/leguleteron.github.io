/* header */
window.onscroll = function(){headerScrollFunction()};
var header = document.getElementById("siteHeader");
var titleLink = document.getElementsByClassName("title-link")[0];
var navLink = document.getElementsByClassName("nav-link");
var formLink = document.getElementsByClassName("form-link")[0];

function headerWhite() {
  var headerStyle = header.style;
  headerStyle.backgroundColor = "#ffffff";
  headerStyle.borderBottom = "1px solid #e8e8e8";
  titleLink.style.color = "#1e1e1e";
  for(let i = 0; i < navLink.length; i++) navLink[i].style.color = "#1e1e1e";
  formLink.style.color = "#1e1e1e";
}

function headerTransparent() {
  var onMideum = 600;
  var headerStyle = header.style;
  var documentBody = document.body;
  var documentDocumentElement = document.documentElement;

  if(documentBody.scrollTop > 20 || documentDocumentElement.scrollTop > 20){
  }else{
    if(window.innerWidth < onMideum){
      headerWhite();
    }else {
      headerStyle.borderBottom = "1px solid rgba(0,0,0,0)";
      headerStyle.backgroundColor = "transparent";

      titleLink.style.color = "#fff";
      for(let i = 0; i < navLink.length; i++) navLink[i].style.color = "#fff";
      formLink.style.color = "#fff";
    }
  }
}

function headerScrollFunction(){
  var documentBody = document.body;
  var documentDocumentElement = document.documentElement;

  if(documentBody.scrollTop > 20 || documentDocumentElement.scrollTop > 20){
    headerWhite();
  }else{
    headerTransparent();
  }
}