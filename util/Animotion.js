//��������ʧ�ܺ�Ķ���
function jumpFail()
{
    switch (jumpFailId)
    {
        //x��������
        case 0:
            //alert("��Ϸʧ��   X�᷽������ͷ");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //x��������
        case 1:
            //alert("��Ϸʧ��   X�᷽��������");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //z����Զ��
        case 2:
            //alert("��Ϸʧ��   Z�᷽������ͷ");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        //z��������
        case 3:
            //alert("��Ϸʧ��   Z�᷽��������");
            document.getElementById("result").style.display = "block";
            document.getElementById("mask").style.display = "block";
            document.getElementById("result_sorce").innerHTML=sorce;
            mouseState =false;
            break;
        default:
            break;
    }
}
//����Բ��
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
//�������������ĵĶ���
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