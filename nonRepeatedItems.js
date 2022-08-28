const sampleArray = [1,2,3,7,2,1,3,8];
const getNonDuplicatedValues = (arr) => 
    arr.filter((item,index) => {
      arr.splice(index,1)
      const unique = !arr.includes(item)
      arr.splice(index,0,item)
      return unique
  })

console.log("Non duplicated values: " , ...getNonDuplicatedValues(sampleArray))