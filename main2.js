enchant();

window.onload = function() {

	var core = new Core(320,320);
	core.fps = 30;
	core.preload(`pug1.png`);
	core.preload(`chara1.png`);
	core.preload(`pug2.png`);
	core.preload(`dots.png`);
	core.preload(`dots2.png`);
	core.preload(`無題9.png`);
	core.preload(`背景1.png`)
	core.preload(`背景2.png`)
	core.preload(`背景4.png`)
	core.preload(`sprites.png`)
	core.preload(`deka.png`)
	//var BGM1 = Sound.load("./music/Lobotomy corp OST - 2nd warning.mp3");
	var BGM1 = Sound.load("./music/14.wav");
	

	core.onload = function() {

		var bg = new Sprite(960,320);
		bg.image = core.assets[`背景4.png`];
		core.rootScene.addChild(bg);

		/*var bg2 = new Sprite(320,320);
		bg.image = core.assets[`背景2.png`];
		bg2.x =321;
		bg2.y =321;
		core.rootScene.addChild(bg2);
		*/

		function jump(chara,SE){
				core.se = Sound.load(SE);

				core.se.play();

			// くまをジャンプさせる
                chara.tl.moveBy(0, -120, 12, enchant.Easing.CUBIC_EASEOUT) // 12フレームかけて現在の位置から上に120px移動
                       .moveBy(0, 120, 35, enchant.Easing.CUBIC_EASEIN); // 12フレームかけて現在の位置から下に120px移動
		}
		var label = new Label();
		label.x = 300;
		label.y = 5;
		label.color = `red` ;
		label.font = `14px "Arial"`;
		label.text = `0`;
		label.on(`enterframe`,function(){
			
		});	
		// var bear = new Sprite(700,700);
		// bear.image = core.assets[`pug4.png`];
		// bear.x = 150;
		// bear.y = 150;
		// bear.frame = 4;

		//bearを生成
			var bear = new Bear(32,250,'./SE/boyon1.mp3');
			console.log(bear.se);
			console.log(bear.inu);
        bear.addEventListener(`enterframe`,function(){
        	if (core.input.left) 	{
        		if(this.x<=30){
        		bg.x+=5	
        		}
        		
        	 this.x -=5;
        	}
        	if (core.input.right)
        	{
        		
        		if(this.x>=30){
        		bg.x-=5	
        		}
        		
        	 this.x +=2;
        	}

        	if (core.input.up) {
        	jump(this,'./SE/boyon1.mp3');
        	console.log("キーを押しました");
        } 	
        	if (core.input.up) this.y -=5;
        	if (core.input.down) this.y +=5;
        	//ここから衝突判定
        	if (this.intersect(enemy)){
        		label.text = 'hit!';
        	}
        });
//--------------------------------------------------------------------------------
// タッチしたときジャンプする
//--------------------------------------------------------------------------------
bear.addEventListener(Event.TOUCH_START, function(e){
                jump(bear,bear.se);
                console.log("キーを押しました");
            });
//enemyを作る
	var enemy = new Sprite(32,32);
		enemy.image = core.assets[`dots2.png`];
		enemy.x = 150;
		enemy.y = 250;
		enemy.frame = 0;

		enemy.addEventListener(`enterframe`,function(){
			this.x +=3;
			this.frame = this.age % 3;
			if (this.x > 320) this.x = 0;
		});
		//でかい犬増やす
	var enemy2 = new Sprite(320,320);
		enemy2.image = core.assets[`deka.png`];
		enemy2.x = 150;
		enemy2.y = 300;
		enemy2.frame = 0;

		enemy2.addEventListener(`enterframe`,function(){
			this.x +=3;
			

			if (this.x > 320) this.x = 0;
		});
	
//--------------------------------------------------------------------------------
// タッチしたときジャンプするエネミー
//--------------------------------------------------------------------------------
enemy.addEventListener(Event.TOUCH_START, function(e){
                jump(enemy,'./SE/scream-woman1.mp3');
                console.log("キーを押しました");
            });
		
		core.rootScene.addChild(label);
		core.rootScene.addChild(bear);
		core.rootScene.addChild(enemy);
		core.rootScene.addChild(enemy2);

	}
	
// ゲーム中に繰り返しBGMを演奏する
	core.rootScene.addEventListener(Event.ENTER_FRAME, function(){

	BGM1.play();
	});
	//===================================================
	// bearの定義しています
	//===================================================
	var Bear = Class.create(Sprite,{
		initialize: function(x,y,SE) {
			Sprite.call(this,32,32);
			this.x = x;
			this.y = y;
			this.image = core.assets[`sprites.png`];
			this.frame = 0;
			//アニメ作りたい
			this.animeWaitMax = 7000;		// アニメーションのWait値
        this.animeWaitCount = 0;	// アニメーションのWait値のカウント
        this.addEventListener('enterframe', function() {
            
            this.frame = this.age % 3;
            if (this.animeWaitCount >= this.animeWaitMax) {
            	this.animeWaitCount = 0;
            	this.frame++;
            } else {
            	this.animeWaitCount++;
            }
        });
			this.se = SE;	
			this.inu = "INU";
			core.rootScene.addChild(this);
		}
	})
	core.start();
}