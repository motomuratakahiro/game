enchant(); // おまじない
 
window.onload = function() {
 
    // 行の終わりには、;（セミコロン）を付けます。
 
    var game = new Game(320, 320); // ゲーム本体を準備すると同時に、表示される領域の大きさを設定しています。
    game.fps = 24; // frames（フレーム）per（毎）second（秒）：ゲームの進行スピードを設定しています。
    game.preload('chara1.png'); // pre（前）-load（読み込み）：ゲームに使う素材をあらかじめ読み込んでおきます。
 
    game.onload = function() { // ゲームの準備が整ったらメインの処理を実行します。
 
        var kuma = new Sprite(32, 32);  // くまというスプライト(操作可能な画像)を準備すると同時に、スプライトの表示される領域の大きさを設定しています。
        kuma.image = game.assets['chara1.png']; // くまにあらかじめロードしておいた画像を適用します。
        kuma.x = 100; // くまの横位置を設定します。
        kuma.y = 120; // くまの縦位置を設定します。
        game.rootScene.addChild(kuma); // ゲームのシーンにくまを表示させます。
        game.rootScene.backgroundColor  = '#7ecef4'; // ゲームの動作部分の背景色を設定しています。
        var speed = 2;// くまのスピードを表す変数（箱）を用意しておきます。
        // シーンに「毎フレーム実行イベント」を追加します。
        game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
            kuma.x += speed; // 毎フレーム、くまの座標をspeed分ずらす
        });
        // シーンに「タッチイベント」を追加します。
        game.rootScene.addEventListener(Event.TOUCH_START, function(e) {
 
            // タッチイベントは、タッチした座標をe.x , e.y として取ることができます。
            // なお、eという変数の名前は自由に変更できます。 例：function(好きな名前) { ?
 
            if (e.x > kuma.x) { // if (もしも) タッチした横位置が、くまの横位置よりも右側（座標の値として大きい）だったら
                speed = 2; // くまのスピードを1にする
            } else { // それ以外のときは
                speed = -2; // くまのスピードを-1にする
            }
        });
    }
    game.start(); // ゲームをスタートさせます
 
    // このようにスラッシュ2つで書き始めた行は「コメント」扱いとなります。
    // プログラム中のメモとして活用しましょう。
    /* また、このようにスラッシュと米印を使うと、
        複数行に渡ってコメントを書くことができます。 */
};