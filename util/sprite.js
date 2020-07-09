
//创建粒子
function createSprites()
{
      for (var y = 0; y < 20; y++){
        //材质
        var material;
        //创建粒子材质
        if(Math.round(Math.random()*10)<5){
            //材质颜色为绿色
            material = new THREE.SpriteMaterial({color:0x47FF47});
        }else{
            //材质颜色为白色
            material = new THREE.SpriteMaterial({color:0xFFFFFF});
        }
        //创建粒子
        var sprite = new THREE.Sprite(material);
        //设置粒子缩放
        sprite.scale.set(0.15,0.15,0.15);
        //将粒子粒子Group
        sprites.add(sprite);
    }
}
//添加粒子(聚合)
function addsprite() {
    //每次添加进场景的位置
    sprites.position.set(jumper.position.x,jumper.position.y,jumper.position.z);
    scene.add(sprites);
    offsetsprite();
}
//移动粒子
function offsetsprite() {

    for(var i=0;i<sprites.children.length;i++) {
        pointmove(0,0,0,sprites.children[i]);
    }
}
//移除粒子
function removesprite() {
    //移除tween动画
    TWEEN.removeAll();
    scene.remove(sprites);
}
//平滑移动，粒子收缩
function pointmove( mx, my, mz, point) {
    //计算粒子位置
    let ad = Math.PI / 180 * (360 * Math.random());
    let bd = Math.PI / 180 * (360 * Math.random());
    point.position.set(7* Math.cos(ad)*Math.cos(bd),5, 7* Math.sin(ad));
    var tween = new TWEEN.Tween( point.position ).to( {
        x: mx,
        y: -3,
        z: mz }, 1000 )
        .easing( TWEEN.Easing.Linear.None).start();
    tween.repeat(Infinity); // repeats forever
};
