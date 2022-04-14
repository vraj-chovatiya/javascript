// object destructuring 

const band = {
  bandname: "led zeppelin",
  famoussong: "stairway to heaven",
  year: 2003,
  anotherfamoussong: "kashmir"
};

// const bandname = band.bandname;
// const famoussong = band.famoussong;

// console.log(bandname, famoussong);

// const {bandname,  famoussong} = band;
const {bandname:var1,  famoussong:var2} = band; // value store in var1 or var2 variable 
console.log(var1);  

const {bandname,  famoussong, ...restprops} = band;
console.log(restprops);
// restprops ma jetli pn properties vadhi hoy ae store thai jay
