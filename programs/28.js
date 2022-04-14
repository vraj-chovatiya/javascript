// object inside array 
// very useful in real world applications

const users = [
  {userid: 1, firstname:'vraj', gender:'male'},
  {userid: 1, firstname:'parth', gender:'male'},
  {userid: 1, firstname:'meet', gender:'male'},
]
console.log(users);

for(let user of users){
  console.log(user);
}