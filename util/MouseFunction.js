//重写鼠标监听
function onMouseDown()
{
    console.log("按下"+mouseState+"--"+jumpState);
    //清除上一次tween动画
    TWEEN.removeAll();
    scene.remove(centersprites);
    if(mouseState&&!jumpState)
    {
        upAndDown=1;
        goSpeed=0;
        speedState =true;
        addsprite();
    }
}
//鼠标监听
function onMouseUp()
{
    if(mouseState&&!jumpState)
    {
        speedState =false;
        jumpState=true;
        jumper.scale.y=0.3;
        jumper.position.y=5.5;
        removesprite();
    }
}