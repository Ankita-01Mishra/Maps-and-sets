let set=new Set();
let str="abcadeecfb"
for(let i=0;i<str.length;i++){
    set.add(str[i])
}
console.log(set);

let map=new Map();
// let s=new Set();
let s="abcadeecfb"
for(let i=0;i<s.length;i++){
    if(map.has(s[i])){
       let value= map.get(s[i]) 
       map.set(s[i],value+1)
    }
    else{
        map.set(s[i],1)
    }
}

for(let [k,v] of map){
    console.log(k+"="+v);
}