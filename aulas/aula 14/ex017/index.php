<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>curso de JS | Tabuada</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Tabuada</h1>
    </header>
    <section>
        <div>
            <p>Numero:
                <input type="number" name="nun" id="num">
                <input type="button" value="Gerar Tabuada" onclick="tabuada()" id="but">
            </p>
        </div>
        <div>
            <select name="tabuada" id="tabuadas" size="10">
                <option value="">Digite um numero a cima</option>
        </select>
        </div>
    </section>
    <footer>
    &copy;ishiiKehh
    </footer>
    <script src="script.js"></script>
</body>
</html>