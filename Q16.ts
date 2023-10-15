// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

console.log("orignal Guest Invitations")
let guest_list: string[] = ['Ali','Bilal','Usman'];

for (var i = 0;i<guest_list.length;i++)
{
console.log(guest_list[i],'i would like to invite you to dinner');
}

console.log(`${guest_list[1]} can't make it becuase he is busy`);

guest_list.splice(1,1,'Waqar')

console.log("Updated Guest list Invitations")

for (let i=0;i<guest_list.length;i++)
{
console.log(`${guest_list[i]} are you ready for dinner tommorrow`);
}

console.log("Dinner Party is going to be big more are welcome to join");

 guest_list.unshift("Saleem");
 guest_list.splice(2,0,"Ahsan");
 guest_list.push("Mohsin")

console.log("Big dinner Table Invitations");

for (let i=0;i<guest_list.length;i++)
{
    console.log(`${guest_list[i]} you are invited for Dinner at 8pm at Monal Resturant`);
}












export {};