<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>curso de JS | Numero Analize</title>
    <link rel="stylesheet" href="style.css">
</head>
<body">
    <header>
        <h1>Analizador de Numeros</h1>
    </header>
    <section>
        <div>
           <p>Numero (entre 1 e 100): <input type="number" name="num" id="addnun">
        <input type="button" value="Adicionar" onclick="analizar()"></p>
        </div>
        <div>
            <select id="res" size="10">
                <option value="">Digite um numero a cima</option>
            </select><br>
            <input type="button" value="Finalizar" onclick="finalizar()">
            <p id="final"></p>
        </div>
    </section>
    <footer>
    &copy;ishiiKehh
    </footer>
    <script src="script.js"></script>
</body>
</html>