//splice method
// start , delete , insert

const array = ['item1','item2','item3'];

//delete 
array.splice(1, 1);
console.log(array);

//insert
array.splice(1,0,'item4');
console.log(array);

//isert and delete

const deletedItem = array.splice(1,2,"inserted item1", "inserted item2");
console.log(array);
console.log('deletedItem', deletedItem);