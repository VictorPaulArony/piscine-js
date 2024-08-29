
function getAcceleration(s){
    let a = 0
    // let f = 0, t = 0, d = 0, m = 0,  Δv =  0, Δt =  0
    if (s.f !== undefined && s.m !== undefined){
        a = s.f/s.m
    }else if (s.Δv !== undefined % s.Δt != undefined){
         a = s.Δv/s.Δt
    }
    if (s.d !== undefined && s.t !== undefined){
        
         a = (2*s.d)/(s.t*s.t)
    }
   
    return a
}
