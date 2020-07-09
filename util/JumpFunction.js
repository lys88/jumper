
//棋子跳落动画与碰撞检测
function jump()
{
    if(jumpState==true)
    {
        //上升到最高点 改变状态位
        if(jumper.position.y>=11.5 )
        {
            upAndDown=2;
        }
        //物体落在方块
        //在其中判断碰撞
        if(jumper.position.y<5.4)
        {
            upAndDown=0;
            if(currXORZ<5)
            {
                //x轴方向跳过头
                if(jumper.position.x>nextObjPosition[0]+5*currScale)
                {
                    jumpFailId=0;
                    downState = true;
                    objCount=objCount-1;
                    sorce = sorce-1;
                }
                //x轴方向跳近了
                else if(jumper.position.x<nextObjPosition[0]-5*currScale&&jumper.position.x>lastmkx+5*lastScale)
                {
                    jumpFailId=1;
                    downState = true;
                    objCount=objCount-1;
                    sorce = sorce-1;
                }
                else if(jumper.position.x>lastmkx-5*lastScale&&jumper.position.x<lastmkx+5*lastScale)
                {
                    console.log("棋子还在改木块上");
                    jumpState=false;
                }
                //正常
                else
                {
                    if(Math.abs(jumper.position.x-nextObjPosition[0])<0.8)
                    {
                        BuildCircle(jumper.position.x,jumper.position.z);
                        sorce--;
                        perfectCount++;
                        sorce = sorce+perfectCount*2;
                        console.log("x方向物体完美落地 分数加2");
                    }
                    else
                    {
                        perfectCount=0;
                    }
                    jumpFailId=-1;
                    //增加分数
                    document.getElementById("sorce2").innerHTML=sorce;
                    //调用方法 添加下一个方块
                    console.log("Add3DObj       方块跳落成功");
                    cameraState = true;
                    jumpState=false;
                    getmkzbc();
                    Add3DObj();
                }
            }
            else
            {
                //z轴方向跳过头
                if(jumper.position.z>nextObjPosition[2]+5*currScale)
                {
                    jumpFailId=2;
                    downState = true;
                    objCount=objCount-1;
                    sorce = sorce-1;
                }
                //z轴方向跳近了
                else if(jumper.position.z<nextObjPosition[2]-5*currScale&&jumper.position.z>lastmkz+5*lastScale)
                {
                    jumpFailId=3;
                    downState = true;
                    objCount=objCount-1;
                    sorce = sorce-1;
                }
                else if(jumper.position.z>lastmkz-5*lastScale&&jumper.position.z<lastmkz+5*lastScale)
                {
                    console.log("棋子还在改木块上");
                    jumpState=false;
                }
                //正常
                else
                {
                    if(Math.abs(jumper.position.z-nextObjPosition[2])<0.8)
                    {
                        BuildCircle(jumper.position.x,jumper.position.z);
                        sorce--;
                        perfectCount++;
                        sorce = sorce+perfectCount*2;
                        console.log("z方向物体完美落地 分数加2");
                    }
                    else
                    {
                        perfectCount=0;
                    }
                    jumpFailId=-1;
                    //增加分数
                    document.getElementById("sorce2").innerHTML=sorce;
                    //调用方法 添加下一个方块
                    console.log("Add3DObj       方块跳落成功");
                    cameraState = true;
                    jumpState=false;
                    getmkzbc();
                    Add3DObj();
                }
            }
        }
        //x方向增加
        if(currXORZ<5)
        {
            switch (upAndDown)
            {
                case 1:
                    jumper.position.y+=0.2;
                    jumper.rotation.z-=Math.PI/30;
                    jumper.position.x+=10/50*goSpeed/30;
                    jumper.position.z+=(nextObjPosition[2]-jumper.position.z)/30;
                    break;
                case 2:
                    jumper.position.y-=0.2;
                    jumper.rotation.z-=Math.PI/30;
                    jumper.position.x+=10/50*goSpeed/30;
                    jumper.position.z+=(nextObjPosition[2]-jumper.position.z)/30;
                    break;
                default:
                    jumper.position.y=5.5;
                    jumper.rotation.z=0;
                    jumper.rotation.x=0;
            }
        }
        //z方向增加
        else
        {
            switch (upAndDown)
            {
                case 1:
                    jumper.position.y+=0.2;
                    jumper.rotation.x+=Math.PI/30;
                    jumper.position.z+=10/50*goSpeed/30;
                    jumper.position.x+=(nextObjPosition[0]-jumper.position.x)/30;
                    break;
                case 2:
                    jumper.position.y-=0.2;
                    jumper.rotation.x+=Math.PI/30;
                    jumper.position.z+=10/50*goSpeed/30;
                    jumper.position.x+=(nextObjPosition[0]-jumper.position.x)/30;
                    break;
                default:
                    jumper.position.y=5.5;
                    jumper.rotation.z=0;
                    jumper.rotation.x=0;
            }
        }
    }
}
//改变棋子速度脚本
function changeSpeed()
{
    if(speedState==true)
    {
        goSpeed+=1.15;
        if(jumper.scale.y>=0.1)
        {
            jumper.scale.y-=0.004;
            jumper.position.y-=0.01;
        }
    }
}
