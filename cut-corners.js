const round = (num) =>{
  let sign = num >= 0 ? 1 : -1 
  let res = 0
  let n = finder(Math.abs(num))
  let rem = Math.abs(num)- n
  if(rem >= 0.5){
      res = n + 1
  }else{
      res = n
  }
  return res *sign
}
const ceil = (num) => {
  let sign = num >= 0 ? 1 : -1
  let res = 0
  let n = finder(Math.abs(num))
  let rem = num - n
  if (rem > 0){
      res = n + 1
  }else{
      res = n
  }
  return res * sign
}
function floor(num){
  const whole = finder(num);
    return num < whole ? whole - 1 : whole;
}
function trunc(num){
  return num >= 0 ? finder(num) : -finder(-num)
}

function finder(num){
  let sign = num >= 0 ? 1 : -1 
  let res = 0
  let i = 0
  let numStr = Math.abs(num) + ''
  while (numStr.length > i){
      if (num[i] !== '.'){
          res = res *10 + (numStr[i] - '0')
          break
      }
  }
  // console.log(res * sign )
  return res * sign
  
}

// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))//[ 4, -4, 3, -3 ]
// console.log(nums.map(ceil))//[ 4, -3, 4, -3 ]
// console.log(nums.map(floor))//[ 3, -4, 3, -4 ]
// console.log(nums.map(trunc))//[ 3, -3, 3, -3 ]