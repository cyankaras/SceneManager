class SceneManager extends egret.DisplayObjectContainer{
	//游戏开始场景的实例
	public gameBegin: GameBegin;
	//游戏场景01的实例
	public gamePlay: GamePlay;
	public constructor() {
		super();
		this.gameBegin = new GameBegin();
		this.gamePlay = new GamePlay();
		//默认显示开始场景
		this.addChild(this.gameBegin);
	}
	private static shared: SceneManager;
	public static Shared(): SceneManager{
		if(SceneManager.shared == null){
			SceneManager.shared = new SceneManager();
		}
		return SceneManager.shared;
	}
	public chage(scene){
		this.removeChildren();
		//点击开始按钮scene是'begin'.
		//返回按钮，scene是'back'.
		if(scene == 'begin'){
			this.addChild(this.gamePlay);
		}
		else if(scene = 'back'){
			this.addChild(this.gameBegin);
		}
	}
}