<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/cssindex.css">
    <title>JS | Mario - Start</title>
</head>
<body>
    <header>

    </header>
    <main>
    <?php
    $page = $_REQUEST['game'] ?? 0;
    ?>
        <img src="img/nuvem.png" class="nuvem">
        <img src="img/mario.gif" class="mario">
        <img src="img/goomba.gif" class="goomba">
        <section>
            <?php if ($page != 'over'){
                 echo '<img src="img/moeda.gif" width="80px"><br>';
                echo '<h1>Start Game</h1>';
                echo '<nav><a href="jogo.php">PLAY</a><br>';
                
            } else {
                    echo '<img src="img/game-over.png" width="80px"><br>';
                    echo '<h1 id="fim">Game Over</h1>';
                    echo '<nav><a href="jogo.php">TENTAR NOVAMENTE</a><br>';
                    echo '<script>document.body.style.backgroundColor = "gray";</script>';
                    echo '<a href="index.php">EXIT</a> </nav>';
                }?>
           
            
        </section>
        <img src="img/floor.jpg" class="chao">
    </main>
</body>
</html>