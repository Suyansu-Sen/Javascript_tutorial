// map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);


// inside scope -: u need to explictly return
// const newNums = myNums.map( (num) => {
//     return num + 10})
// console.log(newNums);

// Chaining

//1.
// const newNums = myNums
//            .map( (num) => num * 10)
//            .map( (num) => num + 1)
// console.log(newNums);

//2.
const newNums = myNums
           .map( (num) => num * 10)
           .map( (num) => num + 1)
           .filter( (num) => num > 40)
console.log(newNums);

// Anything inside backticks is a STRING unless it is inside ${ } as a real JS expression.
// Use of filter and map and acessing the properties


//map() always returns a NEW array
//Length of output array = length of input array
//Used for value transformation

//+++++++++++++++++++++++++++++++++++++++++++Filter++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//filter() always returns an ARRAY.
//Array contain elements where ondition is true
// does not modify original Array

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => {
    return bk.genre === 'History'
  })
  console.log(userBooks);// This can filter books having genere History

  //way-1
   let book_publish_after_1987 = books.filter( (bk)=> bk.publish >= 1987);
   console.log(`book_publish_after_1987 -: `,book_publish_after_1987);// This can filter book data which are published after 1987

  //Notes-: 
  // if i do like this, as filter -> return Array , Due to using backtick it stringfy, as a result i can't get desired result, ${book_publish_after_1987} forces implicit string conversion
  //console.log(object) → shows structured data
	//Template literals → convert everything to STRING

  //  console.log(`book_publish_after_1987 -: ${book_publish_after_1987}`);// book_publish_after_1987 -: [object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

  // way -2
  console.log("Book Name which are published aftetr 1989 -:",book_publish_after_1987.map( (bk)=> bk.title).join(" ,"));

  // way -3

  console.log(books.filter( (bk) => bk.publish >= 1989)
                   .map( (bk)=> bk.title + " -> "+bk.genre)
                   .join(" ,"));
  
  