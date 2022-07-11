function loadXMLDoc(filename) {
    //Abrimos una conexión con el servidor
    xhttp = new XMLHttpRequest();
    //Pedimos un fichero
    xhttp.open("GET", filename, false);
    try { xhttp.responseType = "msxml-document" } catch (err) { alert("Hay error"); } // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}

function displayResult() {
    //Queremos cargar los ficheros XML y XSLT
    xml = loadXMLDoc("recetas.xml");
    xsl = loadXMLDoc("recetas.xsl");
    if (document.implementation && document.implementation.createDocument) {
        //Lanzamos el xsltproc que tiene el navegador
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        //El resultado de la transformación los ponemos dentro del elemento
        //section con identificador CONTENT-RECETAS
        document.getElementById("content-recetas").appendChild(resultDocument);
    }
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    /*searchForm.classList.remove('active');
    cartItem.classList.remove('active');*/
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    /*searchForm.classList.remove('active');
    cartItem.classList.remove('active');*/
}