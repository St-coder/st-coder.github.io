








function ab() {
    var ia= end1();
    var box=document.getElementsByClassName('sqare');
    for (i=0;i<box.length;i++) {
        var b = Math.floor(Math.random() * 9);
        var a = Math.floor(Math.random() * 9);
        var z = Math.floor(Math.random() * 9);
        if (b != a && a != z && z != b) {
            break;
        }
    }
        box[b].style.backgroundColor =bg1();
        box[a].style.backgroundColor =bg1();
        box[z].style.backgroundColor =bg1();
}

function bg1() {
    return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
}

var b=1;
function start() {
    if(b==1){
        int=self.setInterval("ab()",1000);
         b=2;
    }
}

function end() {
    b=1;
    self.clearInterval(int);
    end1();
}

function end1() {
    var x = document.getElementsByClassName('sqare');
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "orange";
    }
}