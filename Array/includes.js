const friends = [ 'Michael', 'Steven', 'Peter', 'Jay', 'Mary' ];
console.log(friends);

console.log(friends.includes('Steven'));
console.log(friends.includes('Iqbal'));

if(friends.includes('Peter')){
    console.log('You have a friend called Peter');
}
else{
    console.log('You have no friend called Peter');
}