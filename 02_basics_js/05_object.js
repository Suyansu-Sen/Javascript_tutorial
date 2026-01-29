//Destructuring  of Object

const course = {
    coursename: "JavaScript tutorial",
    price: "3999",
    courseInstructor: "Hitesh Choudhury"
}
//console.log(course.courseInstructor);// Hitesh Choudhury


// destructuring 

//++++++++ 1 +++++++++

// const{courseInstructor} = course
// console.log(courseInstructor); // Hitesh Choudhury

const {courseInstructor : Instructor} = course

console.log(Instructor);// Hitesh Choudhury

// React const navbar = () => {

// }

// navbar(company = "Suyansu")

// json -: Javascript Object Notation

// {
//     "name": "Suyansu",
//     "price": "free",
//     "coursename": "JavaScript Mystery"
// }

// json formatter -> u can format api data which r in object form 
[
    {},
    {},
    {}
]