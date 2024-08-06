
window.addEventListener('load', function () {

var template = `<!DOCTYPE html>
<html lang="en" style="background-color: rgb(72,72,72);">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .body {
  --navbarw: 130px;
  background-color: rgb(72,72,72);
}

.sidenav {
    height: 100%;
    width: 10%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #323232;
    overflow-x: hidden;
    padding-top: 20px;
  }
  
  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 15px;
    color: #818181;
    display: block;
  }
  
  .sidenav a:hover {
    color: #f1f1f1;
  }
  
  #__main__ {
    margin-left: 10% !important;
    background-color: rgb(72,72,72);
    padding-left: 1%;
    width: 78%;
  }

  #__right__ {
    margin-left: 90%;
    height: 100%;
    width: 10%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #323232;
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
    </style>

    <style>
        body {
    font-family: 'Lato';
    font-weight: normal;
    font-style: normal;
    color: rgb(255, 255, 255);
}

h1, h2, h3 {
    font-family: "Roboto Slab", serif !important;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;

}

a {
    color: rgb(184, 244, 255);
    text-decoration: none;
}

code {
    color: rgb(186, 242, 255);
    background-color: rgb(91, 91, 91);
}

pre>code, pre {
    background-color: rgb(106, 106, 106);
    color: rgb(255, 255, 255);
    border-radius: 10px;
}

pre {
    padding: 10px;
    width: 98%;
}
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap">
</head>
<body style="background-color: rgb(72,72,72);">
    <div class="sidenav">
        <a href="/website/index.html">Home</a>
        <!-- !IN_NAV -->
    </div>
      
    <div id="__main__"></div>

    <div id="__right__"></div>

      
</body>
</html>`
var oldBody = document.body.innerHTML
document.write(template)
document.getElementById("__main__").innerHTML = oldBody

})
