//Q1

var studentData = {
    name :'ABS Student',
    age : 20,
    student_Id : 420,
   
}
const myJSON = JSON.stringify(studentData);
alert(myJSON)

//Q2

var age = prompt('what your age')
var bioData = {
     
     Student_Name :  'Shami payan',

     Student_Age : 20,

}

if (age > bioData.Student_Age){

alert('You are aloud to A classes')

} else {

alert('You are aloud to b classes')
}

//Q3

 

var student1 = {

    Student_Name : 'Zia Khan',
    
    Student_ID : 'J30052425300',
    
    Subject_HTML : 80,
    
    Student_CSS : 90,
    
    Student_JAVASCRIPT : 90,
    
    Student_BOOTSTRAP :  70,
    
    obtained_Marks : 330, 
    
    Total_Marks : 400,
    
    student_Percentage :  82,   
    
     }
    
    
    
    
    
    
    
    
    var student2 = {
    
    Student_Name : 'Zia Khan',
    
    Student_ID : 'J30052425300',
    
    Subject_HTML : 60,
    
    Student_CSS : 70,
    
    Student_JAVASCRIPT : 65,
    
    Student_BOOTSTRAP :  85,
    
    obtained_Marks : 280, 
    Total_Marks : 400,
    
    student_Percentage :  70, 
    
     }
    
    if (student1.student_Percentage > student2.student_Percentage){
    
     alert('student 1 jit gya ny')
    
    } else  {
    
        alert('student 2 jit gya ny')
    
    }
    

    //Q4
(A)
    var arr = [
        {name: 'Asher', age: 22},
        {name: 'Zubair', age: 20},
        {name: 'Kashif', age: 23},
        {name: 'Wasif', age: 17},
        {name: 'Hanzala', age: 28}
        ]
        
        arr[2].name = "Siddiq"
        arr[2].age = 23
        console.log(arr)

  (b,c) 
  
//   arr{name: 'Zubair', age: 20}
// 1
// : 
// {name: 'Siddiq', age: 23}
// 2
// : 
// {name: 'Wasif', age: 17}
// 3
// : 
// {name: 'Hanzala', age: 28}
// 4
// : 
// {name: 'Umair', age: '23'}
// length
// : 
// 5
// [[Prototype]]
// : 
// Array(0)
// arr.push( {name: 'Umair', age: '23'})
// 6
// arr
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {name: 'Asher', age: 22}
// 1
// : 
// {name: 'Zubair', age: 20}
// 2
// : 
// {name: 'Siddiq', age: 23}
// 3
// : 
// {name: 'Wasif', age: 17}
// 4
// : 
// {name: 'Hanzala', age: 28}
// 5
// : 
// {name: 'Umair', age: '23'}
// length
// : 
// 6
// [[Prototype]]
// : 
// Array(0)
// arr.shift()
// {name: 'Asher', age: 22}
// age
// : 
// 22
// name
// : 
// "Asher"
// [[Prototype]]
// : 
// Object
// arr
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {name: 'Zubair', age: 20}
// 1
// : 
// {name: 'Siddiq', age: 23}
// 2
// : 
// {name: 'Wasif', age: 17}
// 3
// : 
// {name: 'Hanzala', age: 28}
// 4
// : 
// {name: 'Umair', age: '23'}
// length
// : 
// 5
// [[Prototype]]
// : 
// Array(0)

// (d)

// for (var i = 0; i < arr.length; i++) {

//     arr[i].createdAt = new Date()
//     }
//     Sun Sep 24 2023 12:33:13 GMT+0500 (Pakistan Standard Time)
//     arr
//     (5) [{…}, {…}, {…}, {…}, {…}]
//     0
//     : 
//     {name: 'Zubair', age: 20, createdAt: Sun Sep 24 2023 12:33:13 GMT+0500 (Pakistan Standard Time)}
//     1
//     : 
//     {name: 'Siddiq', age: 23, createdAt: Sun Sep 24 2023 12:33:13 GMT+0500 (Pakistan Standard Time)}
//     2
//     : 
//     {name: 'Wasif', age: 17, createdAt: Sun Sep 24 2023 12:33:13 GMT+0500 (Pakistan Standard Time)}
//     3
//     : 
//     {name: 'Hanzala', age: 28, createdAt: Sun Sep 24 2023 12:33:13 GMT+0500 (Pakistan Standard Time)}
//     4
//     : 
//     {name: 'Umair', age: '23', createdAt: Sun Sep 24 2023 12:33:13 GMT+0500 (Pakistan Standard Time)}
//     length
//     : 
//     5
//     [[Prototype]]
//     : 
//     Array(0)

//Q5

var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubaif', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzfla', age: 27}
    ]
    
    var result = []
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].age > 18 && arr[i].age < 28) {
        if (arr[i].name.includes('f') ) {
          result.push(arr[i].name)
    
        }
    
       
      }
      
    }
    
    console.log(result)


    //Q6


    var students = [
        {
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
        },
        {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
        },
        {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
        }];
        
        var courses  = [
        {
        name: 'Maths',
        std_id: ['std3', 'std1']
        },
        {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
        },
        {
        name: 'Commerce',
        std_id: ['std1']
        },
        ]
        var result = []
        
        for (var i = 0; i < students.length; i++) {
          for (var j = 0; j < courses.length; j++) {
            if(courses[j].std_id.includes(students[i]._id)){
                result.push({
                    name :students[i].name ,
                    _id :students[i]._id ,
                    courses :courses[j].name 
                })
            }
        
          }
        
        }
