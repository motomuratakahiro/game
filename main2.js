enchant();

window.onload = function() {

	var core = new Core(320,320);
	core.preload(`chara1.png`);
	core.onload = function() {

		function jump(chara){
			// くまをジャンプさせる
                chara.tl.moveBy(0, -120, 12, enchant.Easing.CUBIC_EASEOUT) // 12フレームかけて現在の位置から上に120px移動
                       .moveBy(0, 120, 35, enchant.Easing.CUBIC_EASEIN); // 12フレームかけて現在の位置から下に120px移動
		}
		var bear = new Sprite(32,32);
		bear.image = core.assets[`chara1.png`];
		bear.x = 150;
		bear.y = 150;

        bear.addEventListener(`enterframe`,function(){
        	if (core.input.left) this.x -=5;
        	if (core.input.right) this.x +=5;
        	if (core.input.up) {
        	jump(this);
        	console.log("キーを押しました");
        } 
        	if (core.input.down) this.y +=5;
        });
bear.addEventListener(Event.TOUCH_START, function(e){
                jump(bear);
                console.log("タッチしました");
            });
		
		core.rootScene.addChild(bear);
	}
	core.start();
}