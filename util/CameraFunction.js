//更新摄像机位置脚本
function changeCamera()
{
    //摄像机位置需要改变
    if(cameraState)
    {
        console.log("TTYYYYYY移动摄像机");
        // x轴移动
        if(dx>0)
        {
            if((cameraPosition_x-signcameraPosition_x)<=dx)
            {
                console.log("TTYYYYYY移动X方向摄像机  dx: "+dx);
                cameraPosition_x +=0.02*dx;
                cameraLookAt_x += 0.02*dx;
                spotLight_x+=0.02*dx;
                spotLight.position.set(spotLight_x,spotLight_y,spotLight_z);
                camera.position.set(cameraPosition_x,cameraPosition_y,cameraPosition_z);
                camera.lookAt(new THREE.Vector3(cameraLookAt_x,cameraLookAt_y,cameraLookAt_z));
            }
            else
            {
                console.log("TTYYYYYYX方向摄像机停止移动");
                cameraState = false;
                //记录当前摄像机位置 用于下次移动摄像机计算
                signcameraPosition_x = cameraPosition_x;
                signcameraPosition_z = cameraPosition_z;
                //摄像机目标点位置
                signcameraLookAt_x = cameraLookAt_x;
                signcameraLookAt_z = cameraLookAt_z;
            }
        }
        //z轴移动
        else
        {
            if((cameraPosition_z-signcameraPosition_z)<=dz)
            {
                console.log("TTYYYYYY移动Z方向摄像机  dz: " + dz);
                cameraPosition_z +=0.02*dz;
                cameraLookAt_z += 0.02*dz;
                spotLight_z+=0.02*dz;
                spotLight.position.set(spotLight_x,spotLight_y,spotLight_z);
                camera.position.set(cameraPosition_x,cameraPosition_y,cameraPosition_z);
                camera.lookAt(new THREE.Vector3(cameraLookAt_x,cameraLookAt_y,cameraLookAt_z));
            }
            else
            {
                console.log("TTYYYYYYZ方向摄像机停止移动");
                cameraState = false;
                //记录当前摄像机位置 用于下次移动摄像机计算
                signcameraPosition_x = cameraPosition_x;
                signcameraPosition_z = cameraPosition_z;
                //摄像机目标点位置
                signcameraLookAt_x = cameraLookAt_x;
                signcameraLookAt_z = cameraLookAt_z;
            }
        }
    }
}
//获取两个木块之间的坐标差
function getmkzbc() {
    dx = ObjArray[objCount-1].position.x - lastmkx;
    dz = ObjArray[objCount-1].position.z - lastmkz;
    lastmkx = ObjArray[objCount-1].position.x;
    lastmkz = ObjArray[objCount-1].position.z;
    lastScale = currScale;
    console.log("方块dx: "+dx+"--dz: "+dz);
    console.log("方块lastmkx: "+lastmkx+"--lastmkz "+lastmkz);
}
