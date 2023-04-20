<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>curso de JS | Contador</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Contador</h1>
    </header>
    <section>
        <div>
            <p>Inicio: <input type="number" name="inicio" id="inicio" class="inp"></p>
            <p>Fim: <input type="number" name="fim" id="fim" class="inp"></p>
            <p>Passo: <input type="number" name="passo" id="passo" class="inp"></p>
            <input type="button" value="Contar" onclick="contar()">
        </div>
        <div id="res">
        Contando...
        </div>
    </section>
    <footer>
    &copy;ishiiKehh
    </footer>
    <script src="script.js"></script>
</body>
</html>