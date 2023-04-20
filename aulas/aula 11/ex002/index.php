<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>curso de JS | Hora do dia</title>
    <link rel="stylesheet" href="style.css">
</head>
<body onload="carregar()">
    <header>
        <h1>Verificador de Idade</h1>
    </header>
    <section>
        <div>
            <p>Ano de Nascimento:
                <input type="number" name="txtano" id="txtano" min="0">
            </p>
            <p>Sexo:
                <input type="radio" name="radsex" id="masc" checked>
                <label for="masc">Masculino</label>
                <input type="radio" name="radsex" id="femi">
                <label for="masc">Feminino</label>
            </p>
            <p>
                <input type="button" value="Verificar" onclick="verificar()" id="but">
            </p>
        </div>
        <div id="res">
        
        </div>
    </section>
    <footer>
    &copy;ishiiKehh
    </footer>
    <script src="script.js"></script>
</body>
</html>