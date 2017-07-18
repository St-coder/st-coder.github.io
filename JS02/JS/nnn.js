/**
 * Created by Administrator on 2017/7/13.
 */

        sessionStorage.setItem("number1",a);
        sessionStorage.setItem("number2",b);
        sessionStorage.setItem("number3",c);

        var a=sessionStorage.getItem("number1");//总人数
        var b=sessionStorage.getItem("number2");//杀手人数
        var c=sessionStorage.getItem("number3");//平民人数
        var bArr=JSON.parse(sessionStorage.getItem("list"));//顺序
        var deadArr=[];
        sessionStorage.setItem("deadlist",JSON.stringify(deadArr))