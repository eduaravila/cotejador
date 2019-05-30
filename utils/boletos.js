const boleto = (retador, retado) => `

<div class="boleto">
<div class="boleto-header">
  <div class="header-info">
    <h2>Seccion</h2>
    <p>104</p>
  </div>
  <div class="header-info">
    <h2>Seccion</h2>
    <p>104</p>
  </div>
  <div class="header-info">
    <h2>Seccion</h2>
    <p>104</p>
  </div>
</div>
<div class="boleto-info">
  <div class="header-info">
    <h3>Seccion</h3>
    <p>104</p>
  </div>
  <div class="header-info">
    <h2>Seccion</h2>
    <p>104</p>
  </div>
</div>
<div class="boleto-titulo">
  <h3>${retado}</h3>
  <h3>VS</h3>
  <h3>${retador}</h3>
</div>
<div class="boleto-ubicacion">
  <h3>Arena los matadores</h3>
</div>
</div>
`;

const header = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />
    <link href="https://fonts.googleapis.com/css?family=Bree+Serif&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
    body{
        margin:0;
        padding:0;
    }
      .contenido-header {
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .boletos-contenido {
        background: #c5c5c5;
        border-radius: 0.3rem;
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        justify-content: center;
        width: 100%;
      }
      
      .boleto {
          text-align:center;
          width:47%;
          height:380px;
        margin: 0.3rem;
        background: white;
        flex: 1;
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 2px dashed black;
        background: radial-gradient(black 3px, transparent 4px),
          radial-gradient(black 3px, transparent 4px),
          linear-gradient(#fff 4px, transparent 0),
          linear-gradient(
            45deg,
            transparent 74px,
            transparent 75px,
            #a4a4a4 75px,
            #a4a4a4 76px,
            transparent 77px,
            transparent 109px
          ),
          linear-gradient(
            -45deg,
            transparent 75px,
            transparent 76px,
            #a4a4a4 76px,
            #a4a4a4 77px,
            transparent 78px,
            transparent 109px
          ),
          #fff;
        background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
        background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
      }
      .boleto-header {
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        width: 100%;
        justify-content: space-around;
        background: linear-gradient(135deg, #eceddc 25%, transparent 25%) -50px 0,
          linear-gradient(225deg, #eceddc 25%, transparent 25%) -50px 0,
          linear-gradient(315deg, #eceddc 25%, transparent 25%),
          linear-gradient(45deg, #eceddc 25%, transparent 25%);
        background-size: 100px 100px;
        font-family: "Roboto Slab", serif;
        font-weight: bold;
        background-color: #ec173a;
      }
      
      .boleto-info {
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        width: 100%;
        justify-content: space-around;
      }
      .boleto-titulo {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: "Bree Serif", serif;
      }
      
    </style>
    <title>Entradas</title>
  </head>
  <body>
  <div class="boletos-contenido">

`;

const footer = () => `
</div>
</body>
</html>

`;

module.exports = {
  header,
  boleto,
  footer
};
