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

const user ={
    firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}
console.log(team.work.skill)
console.log(team.friends.pop());
console.log(team.friends);
console.log(team.hobbies());
console.log(user.fullName());

