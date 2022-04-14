// neseted Destructuring

const users = [
  {userId : 1,firstName: 'harshit',gender: 'male'},
  {userId : 2,firstName: 'mohit',gender: 'male'},
  {userId : 3,firstName: 'nitesh',gender: 'male'},
]

const [{firstName,userId}, , {gender}] = users;
console.log(firstName);
console.log(userId);
console.log(gender);