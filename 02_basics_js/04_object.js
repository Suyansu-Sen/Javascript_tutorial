// const tinderUser = new Object().   Singleton Object.   vvimp(Interview)

const tinderUser = {} // non-singleton Object

console.log(tinderUser);// output : {}, as it is empty

tinderUser.id = "123abc"
tinderUser.name = "Samuel"
tinderUser.isLoggedIn = false
console.log(tinderUser); // output : { id: '123abc', name: 'Samuel', isLoggedIn: false }


// declaing Object inside Object {Nested Object}
const regularUser = {
    email: "sonamraghu@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Suyansu",
            lastname: "Sen"
        }
    }
}

console.log(regularUser.fullname);//{ userfullname: { firstname: 'Suyansu', lastname: 'Sen' } }
console.log(regularUser.fullname.userfullname.firstname);// Suyansu ; Acessing more specific firstname

//Merging two Object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }, can't be merged

//use Objecct.assign(Target, source)
// Object.assign({},sources......)

const obj3 = Object.assign(obj1, obj2);// Now, Two  Object merged Completely; 

console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj4 = {1: "a", 2: "b"}
const obj5 = {3: "a", 4: "b"}
const obj6 = {5: "a", 6: "b"}

// const obj7 = Object.assign({},obj4, obj5,obj6);
// console.log(obj7)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


//Use Spred operator insted of Object.assign() to merge

const obj7 = {...obj4, ...obj5,...obj6};
console.log(obj7)// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Real useCases

const users =[
    {
        id: "1",
        email:"raghu@gmail.com"
    },
    {
        id: "2",
        email:"sanu@gmail.com"
    },
    {
        id: "3",
        email:"drupyy@gmail.com"
    }
]

console.log(users[1].email);//

console.log(tinderUser)

console.log(Object.keys(tinderUser));// Object.keys(object) : Can retrive all keys avail inside Object and return in the form of Array
console.log(Object.values(tinderUser));// Object.values(object) : Can retrive all values and form Array , later u can loop through
console.log(Object.entries(tinderUser)) // Object.entries(object) : Can retrive all Key: value, Key2 : valu2 and make array [Key : value pairs]

//objectname.hasownProperty("property Name") ; return type  -> Boolean
// wheather this property inside object exist or not u can check via this method

console.log(tinderUser.hasOwnProperty("isLoggedIn"));// true
console.log(tinderUser.hasOwnProperty("name"));// true







