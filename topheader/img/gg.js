const request=fetch('https://dummyjson.com/users');
console.log(request);
 
 
let a=[];
 
 
request
.then(res => res.json())
.then((data)=>{
    console.log(data)
    data.users.forEach((user,index)=>{
        if(index<4)
        {
        console.log(user.firstName);
        a.push(user);
        console.log(a[index].firstName)
        }
    })
   
 
    document.getElementById("dimagespec").src=`${a[0].image}`;
    document.getElementById("dimagespec2").src=`${a[1].image}`;
    document.getElementById("dimagespec3").src=`${a[2].image}`;
    document.getElementById("dimagespec4").src=`${a[3].image}`;
})