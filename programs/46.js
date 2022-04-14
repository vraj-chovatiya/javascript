//find method

const myarray = ["hello","cat","dog","lion"];
function islength(string){
  return string.length===3;
}

const ans = myarray.find(islength);
console.log(ans);

const users = [
  {userid: 1, username: "vraj"},
  {userid: 2, username: "parth"},
  {userid: 3, username: "viraj"},
  {userid: 4, username: "fenil"},
  {userid: 5, username: "sahil"},
];

const myuser = users.find((user)=>user.userid===3);
console.log(myuser);