class Hierarchia {
    static entityList;

    static createHierarchia() {
        var ball = new Ball('Ball', 400, 300, 4, 5, 10, 'white');
        var playerPaddle = new Paddle('Paddle', 50, 300, 10, 80, 10, 'white', true);
        var playerScore = new Score('Player Score', 200, 75, 32, 'white');
        var bricks = new Bricks('Bricks', 80,60,2,10,3);
        var gameManager = new GameManager();

        // Game entities list
        Hierarchy.entityList = [ball, playerPaddle, playerScore, bricks, gameManager];
    }
}