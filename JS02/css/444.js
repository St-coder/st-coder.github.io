/**
 * Created by Administrator on 2017/7/10.
 */
/**
 * Created by Administrator on 2017/7/8.
 */

/*var player=document.getElementById("number").value;
 var playernum=parseInt(player);*/

function getNumberFunction(){
    var player=document.getElementById("number").value;
    var playernum=parseInt(player);//总人数

    var ac=Math.floor(playernum/3);
    var acnum=parseInt(ac);//杀手

    var ae=playernum-acnum;
    var ad=parseInt(ae);//平民



    var list=new Array(playernum,acnum,ad);


    var hh=document.getElementById("killer").innerText;
    var gg=document.getElementById("killer").innerHTML;
    for (i=0;i<box.length;i++) {
        var b = Math.floor(Math.random() * acnum);//杀手
        var a = Math.floor(Math.random() * ad);//平民
        var z = Math.floor(Math.random() * playernum);//总人数
    }
    var dada=hh[b];
    var dadb=vv[a];
    var all=hh[b].concat(vv[a]);

    for (var i=0,len=all.length;i<len;i++){
        var rand=parseInt(Math.random()*len);
        var temp=all[rand];
        all[rand]=all[i];
        all[i]=temp;
    }

/*
三

    acnum(i);//杀手
    ad(j);//平民

    playernum[k];



b[i]
b[j]


    if (playernum<4||playernum>18){
        document.getElementById("kill").innerHTML="";
        document.getElementById("water").innerHTML="";
    }
    else {

        if(isNaN(acnum)){
            return;
        }
        else {
            document.getElementById("killer").innerText=acnum;
            document.getElementById("water").innerHTML=ad;
        }
    }
    return list;
}

function testNumberFunction(){
    var player=document.getElementById("number").value;
    var playernum=parseInt(player);
    if(playernum>=4&&playernum<=18){
        window.location.href="task2-3.html";
    }
    else{
        alert("请输入正确的人数")
    }

*/
}