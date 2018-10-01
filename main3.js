enchant();
window.onload = function() {
    var game_ = new Game(320, 320); // 表示領域の大きさを設定
    game_.fps = 24;                 // ゲームの進行スピードを設定
    game_.preload('chara1.png'); // ゲームに使う素材をあらかじめ読み込み
    game_.onload = function() { // ゲームの準備が整ったらメインの処理を実行します
        var kuma = new Sprite(32, 32);
        kuma.image = game_.assets['chara1.png'];
        kuma.frame = 4; // スケボーに乗ったくまを表示させる
        kuma.x = 300; //くまの初期位置設定
        kuma.y = 0; // くまの初期位置設定
        game_.rootScene.backgroundColor = '#ffffff'; // 背景色
        game_.rootScene.addChild(kuma); // シーンにくまを追加
        // くまがジグザグに移動するアニメーションを登録する
        kuma.tl.moveTo(174, 30, 30);     // ?x=174, y=30の地点まで30フレームかけて移動させる
        kuma.tl.moveTo(114, 90, 60);     // ?x=114, y=90の地点まで60フレームかけて移動させる
        kuma.tl.moveTo(174, 150, 60);     // ?x=174, y=150の地点まで60フレームかけて移動させる
        kuma.tl.moveTo(114, 210, 60);     // ?x=114, y=210の地点まで60フレームかけて移動させる
        kuma.tl.moveTo(144, 240, 30);     // ?x=144, y=240の地点まで30フレームかけて移動させる
        kuma.tl.moveTo(144, 0, 24);      // ?x=144, y=0の地点まで24フレームかけて移動させる
        kuma.tl.loop();                 // 全て終わったら初めから繰り返す
        
    }
    var createGameScene = function() {
    //…省略…
        // シーンにタッチイベントを追加
        scene.addEventListener(Event.TOUCH_START, function(e){
        // くまをジャンプさせる
        kuma.moveBy(0, -120, 12, enchant.Easing.CUBIC_EASEOUT); // 12フレームかけて現在の位置から上に120px移動
        kuma.moveBy(0, 120, 12, enchant.Easing.CUBIC_EASEIN);   // 12フレームかけて現在の位置から下に120px移動
       
        // 以下はコメントアウトまたは削除
       // タッチでゲームオーバーシーンに遷移（仮）
        // game_.pushScene(createGameoverScene());// ゲームオーバーシーンをゲームシーンに重ねる(push)
    });
}
    game_.start(); // ゲームをスタートさせます
};