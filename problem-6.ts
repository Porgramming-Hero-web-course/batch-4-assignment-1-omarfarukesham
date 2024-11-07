/**
 * Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts 
 * an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
 */


//interface  part ....
interface Profile {
    name: string,
    age: number,
    email: string
}

//function part ...
function updateProfile(obj: Profile,  updated: Partial<Profile>):Profile{
    return {...obj, ...updated}
}

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }