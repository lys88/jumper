//���������λ�ýű�
function changeCamera()
{
    //�����λ����Ҫ�ı�
    if(cameraState)
    {
        console.log("TTYYYYYY�ƶ������");
        // x���ƶ�
        if(dx>0)
        {
            if((cameraPosition_x-signcameraPosition_x)<=dx)
            {
                console.log("TTYYYYYY�ƶ�X���������  dx: "+dx);
                cameraPosition_x +=0.02*dx;
                cameraLookAt_x += 0.02*dx;
                spotLight_x+=0.02*dx;
                spotLight.position.set(spotLight_x,spotLight_y,spotLight_z);
                camera.position.set(cameraPosition_x,cameraPosition_y,cameraPosition_z);
                camera.lookAt(new THREE.Vector3(cameraLookAt_x,cameraLookAt_y,cameraLookAt_z));
            }
            else
            {
                console.log("TTYYYYYYX���������ֹͣ�ƶ�");
                cameraState = false;
                //��¼��ǰ�����λ�� �����´��ƶ����������
                signcameraPosition_x = cameraPosition_x;
                signcameraPosition_z = cameraPosition_z;
                //�����Ŀ���λ��
                signcameraLookAt_x = cameraLookAt_x;
                signcameraLookAt_z = cameraLookAt_z;
            }
        }
        //z���ƶ�
        else
        {
            if((cameraPosition_z-signcameraPosition_z)<=dz)
            {
                console.log("TTYYYYYY�ƶ�Z���������  dz: " + dz);
                cameraPosition_z +=0.02*dz;
                cameraLookAt_z += 0.02*dz;
                spotLight_z+=0.02*dz;
                spotLight.position.set(spotLight_x,spotLight_y,spotLight_z);
                camera.position.set(cameraPosition_x,cameraPosition_y,cameraPosition_z);
                camera.lookAt(new THREE.Vector3(cameraLookAt_x,cameraLookAt_y,cameraLookAt_z));
            }
            else
            {
                console.log("TTYYYYYYZ���������ֹͣ�ƶ�");
                cameraState = false;
                //��¼��ǰ�����λ�� �����´��ƶ����������
                signcameraPosition_x = cameraPosition_x;
                signcameraPosition_z = cameraPosition_z;
                //�����Ŀ���λ��
                signcameraLookAt_x = cameraLookAt_x;
                signcameraLookAt_z = cameraLookAt_z;
            }
        }
    }
}
//��ȡ����ľ��֮��������
function getmkzbc() {
    dx = ObjArray[objCount-1].position.x - lastmkx;
    dz = ObjArray[objCount-1].position.z - lastmkz;
    lastmkx = ObjArray[objCount-1].position.x;
    lastmkz = ObjArray[objCount-1].position.z;
    lastScale = currScale;
    console.log("����dx: "+dx+"--dz: "+dz);
    console.log("����lastmkx: "+lastmkx+"--lastmkz "+lastmkz);
}
