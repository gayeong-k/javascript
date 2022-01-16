function newRegister(){
    var newP=document.childElement("P");
    var serachText=document.querySelector("#searchList");
    var newtext=document.createTextNode(serachText.value);
    newP.appendChild(newtext);

    var searchList=document.querySelector("#searchList");
    searchList.insertBefore(newP,searchList.childNodes[0]);
    userName.value="";

_}