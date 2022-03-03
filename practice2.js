const team ={
    name: 'Munna',
    age: '24',
    friends:['shajid', 'lisa', 'Mim', 'Any', 'Dina', 'Arina'],
    work:{
        webDevloper:'front-end',
        skill:'2 years',
    },
    hobbies:function () {
        return this.age;
    }
    
}
const user =`This is ${team.name}. His age is ${team.age}.`
console.log(user)


//3.1 task
const number = () =>{
    return 89;
}
console.log(number());
//3.2 task

const number1 = (num) =>{
    return num / 7;
}

const result = number1(35)
console.log(result);

//3.3 task
const number2 = (num1, num2) =>{
    const result1 =(num1+num2) / 2 ;
    return result1 ;
}

const totalResult = number2(20, 10);
console.log(totalResult);


//3.4 task
const DoubleParameter = (a, b) =>{
    const sum = (a+7) + (b+7);
    return sum ;

}
const totalResult2 =DoubleParameter(10, 30)
console.log(totalResult2);



