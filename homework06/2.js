function vdot(a,b){
    let r = 0
    for (let i=0; i<a.length; i++){
        r += a[i]*b[i]
    }
    return r
}

let v1 = [1,2], v2=[1,1]
console.log('vdot(v1,v2)=',vdot(v1,v2))