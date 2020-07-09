//添加下一个几何体的方法
function Add3DObj()
{
    lastXORZ = currXORZ;
    currScale = 0.4+Math.round(Math.random()*4)/10;
    console.log("currScale"+currScale);
    downTween=null;
    currObjId = Math.round(Math.random()*10);
    if(currObjId==10)
    {
        currObjId=9;
    }
    //初始化下一个方块的方向
    currXORZ = Math.round(Math.random()*10);
    if(currXORZ<5)
    {
        nextObjPosition[0]=nextObjPosition[0] + 10*(1+currScale);
        console.log("xxxxx方向增加一个几何体");
    }
    else
    {
        nextObjPosition[2]=nextObjPosition[2] + 10*(1+currScale);
        console.log("zzzz方向增加一个几何体");
    }
    console.log(currObjId);
    ObjArray[objCount] = basicObjArray[currObjId].clone();
    ObjArray[objCount].scale.set(currScale,0.4,currScale);
    ObjArray[objCount].position.set(nextObjPosition[0],2.0,nextObjPosition[2]);
    ObjArray[objCount].castShadow = true;
    scene.add(ObjArray[objCount]);
    console.log("objCount"+objCount);
    objCount++;
    sorce++;

    if(objCount>6)
    {
        var childrenOFscene = scene.children;
        var removeOBJ = childrenOFscene[objCount-4];
        if(removeOBJ instanceof THREE.Mesh)
        {
            scene.remove(removeOBJ);
        }
    }
    console.log("场景中的物体个数"+scene.children.length);
}
