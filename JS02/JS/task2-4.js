/**
 * Created by Administrator on 2017/7/12.
 */

str1=sessionStorage.playernum;
str2=sessionStorage.acnum;
str3=sessionStorage.ad;

playernum=JSON.parse(str1);//玩家数
acnum=JSON.parse(str2);/*杀手*/
ad=JSON.parse(str3);/*water*/


var list = new Array(playernum, acnum, ad);
console.log(list);

var kill = [];
for(var i=0;i<acnum;i++){
    kill[i]="杀手"
}
console.log(kill);

var water = [];
for(var i=0;i<ad;i++){
    water[i]="平民"
}
console.log(water);

var people = kill.concat(water);
console.log(people);
var newPeople = [];
for(var i=0,n=people.length; i<n;i++){
    var j = Math.floor(Math.random() * people.length);
    newPeople[i] = people[j];
    people.splice(j,1);
}
console.log(newPeople)


for (i=0;i<playernum;i++){
    var content = document.getElementById("content");
    var node=document.createElement("div");
    node.className = "big";
    content.appendChild(node);

    var node1 = document.createElement("p");
    node1.className = "people";
    node.appendChild(node1);
    node1.innerHTML = newPeople[i];

    var node2 = document.createElement("p");
    node2.className="number";
    node.appendChild(node2);
    node2.innerHTML=i+1+ "号";
}

function ab(){
    window.location.href="task2-5.html";
}






