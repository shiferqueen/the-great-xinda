
var person = { name: 'muxiaoxin', age: 18,say: function(){
    // console.log(this.name);
    let sayAge = ()=>{console.log(this.age);}
    sayAge();
}};
// person.say();
var s = '你好'+person.name+';今天你吃饭了吗？你的年龄多大，她说'+person.age+"121221";
var s1 = `你好${person.name};
            今天你吃饭了吗？
            你的年龄多大，她说${person.age}121221
        `;
// console.log(s1);
let promise = new Promise(function(resolve,reject){
    let a = 0;
    setTimeout(function() {
        a++;
        resolve(a);
    }, 2000);
    // reject(a);
});
promise.then(function(data){
    console.log('run in success ',data);
},function(error){
    console.log('run in error ',error);
})