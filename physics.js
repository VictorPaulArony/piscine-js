
function getAcceleration(s){
   
    if (s.d !== undefined && s.t !== undefined){
        
       return (2*s.d)/(s.t*s.t)
   }else if (s.f !== undefined && s.m !== undefined){
       return s.f/s.m
    }else if (s.Δv !== undefined && s.Δt != undefined){
       return s.Δv/s.Δt
    }else {
       return "impossible"
    }
}
// console.log(getAcceleration({
//     // f: 10,
//     // m: 5,
//     // // Δv: 100,
//     // Δt: 50,
//     // t:1,
//     d: 10
//   }))