
const marvel_heroes=["spiderman","drstrange","antman"]
const dc_heroes=["sdc","hbgj","fblewbfw"]
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)///insteda of using concat better to use this method here we can add as many number of arrays we want
const another_array=[1,2,3,4,[5,6,7,[8,9,10,11]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.isArray("subhaditya"))
console.log(Array.from("subhaditya"))
console.log(Array.from({name:"subhaditya"}))//intresting


////isArray,of and from....check more details

