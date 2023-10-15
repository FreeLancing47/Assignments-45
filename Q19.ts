// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guest_list: string[] = ['Ali','Bilal','Usman','Javid','Theo'];

for (var i = 0;i<guest_list.length;i++)
{
console.log(guest_list[i],'i would like to invite you to dinner');
}

console.log('\n Total number of guests invited')
console.log(`Today's guest list consist of ${guest_list.length} guests`)


export{};