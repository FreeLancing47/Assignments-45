/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */


console.log("orignal Guest Invitations")
let guest_list: string[] = ['Ali','Bilal','Usman','Javid','Theo'];

for (var i = 0;i<guest_list.length;i++)
{
console.log(guest_list[i],'i would like to invite you to dinner');
}

console.log(`${guest_list[2]} can't make it becuase he is busy`);

guest_list.splice(2,1,'Waqar')

console.log("Updated Guest list Invitations")

for (let i=0;i<guest_list.length;i++)
{
console.log(`${guest_list[i]} are you ready for dinner tommorrow`);
}

export {};