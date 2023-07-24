

function findneddle(arr){

    // return "find the neddle at position"+ " "+arr.indexOf("neddle")

    let num=0
for(var i=0;i<arr.length;i++){
if(arr[i]=="neddle"){
num+=i
}
}
return "we find the neddle at position "+ num
}

console.log(findneddle(["ahmad","moad","khaled","neddle","mom"]));


