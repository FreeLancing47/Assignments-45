// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

console.log('Sorry everyone due to some uncertain event, only two people can attend dinner')

guest_list.pop(); console.log('Mohsin sorry dinner plans have been canceled');

guest_list.pop(); console.log('Usman sorry dinner plans have been canceled');

guest_list.pop(); console.log('Waqar sorry dinner plans have been canceled');

guest_list.pop(); console.log('Ahsan sorry dinner plans have been canceled');

for (i=0;i<guest_list.length;i++) {

console.log(`${guest_list[i]} dinner plans are still on`);

}

guest_list.pop();
guest_list.pop();

console.log(guest_list);

export {};