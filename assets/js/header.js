/* header */
window.onscroll = function(){headerScrollFunction()};
var header = document.getElementById("siteHeader");

function headerWhite() {
  var headerStyle = header.style;

  headerStyle.backgroundColor = "#ffffff";
  headerStyle.borderBottom = "1px solid #e8e8e8";
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
      headerStyle.border = "none";
      headerStyle.backgroundColor = "transparent";
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