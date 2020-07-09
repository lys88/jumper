//方块跳落失败后的动画
function jumpFail()
{
    switch (jumpFailId)
    {
        //x轴跳过了
        case 0:
            //alert("游戏失败   X轴方向跳过头");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //x轴跳近了
        case 1:
            //alert("游戏失败   X轴方向跳近了");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //z轴跳远了
        case 2:
            //alert("游戏失败   Z轴方向跳过头");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //z轴跳近了
        case 3:
            //alert("游戏失败   Z轴方向跳近了");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        default:
            break;
    }
}
//生成圆环
function BuildCircle(circile_x,circile_z)
{
    circleGeometry = new THREE.PlaneGeometry(10,10,1,1);
    circleMaterial = new THREE.MeshBasicMaterial({map:circletex,transparent:true});
    circle = new THREE.Mesh(circleGeometry,circleMaterial);
    circle.rotation.x = -0.5*Math.PI;
    circle.position.set(circile_x,4.5,circile_z);
    circle.scale.set(0.6,0.6,0.6);
    scene.add(circle);
    circle2 = new THREE.Mesh(circleGeometry,circleMaterial);
    circle2.rotation.x = -0.5*Math.PI;
    circle2.position.set(circile_x,4.5,circile_z);
    circle2.scale.set(0.2,0.2,0.2);
    scene.add(circle2);
    circleState = true;
}
//棋子正落在中心的动画
function CenterAnimotion()
{
    if(circle2&&circleState)
    {
        circle.scale.x+=0.04;
        circle.scale.y+=0.04;
        circle.scale.z+=0.04;
        circle2.scale.x+=0.03;
        circle2.scale.y+=0.03;
        circle2.scale.z+=0.03;
        if(circle.scale.x>2.0)
        {
            circle.scale.set(0,0,0);
            circle2.scale.set(0,0,0);
            circleState=false;
        }
    }
}