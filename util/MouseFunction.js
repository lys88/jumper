//��д������
function onMouseDown()
{
    console.log("����"+mouseState+"--"+jumpState);
    //�����һ��tween����
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
//������
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