function createUser(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let newUser =  {id: users.length + 1, names: "User" + (users.length + 1)}
    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));
    console.log("User Created:" , newUser);
}

function getUser(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("All Users", users);
}

function updateUser(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length > 0){
        users[0].name = "updated User";
        localStorage.setItem("users",JSON.stringify(users));
        console.log("first user updated", users[0]);
    }else{
        console.log("no user to update.");
    }
}

function deleteUser(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length > 0){
        let removeUser = users.pop();
        localStorage.setItem("users",JSON.stringify(users));
        console.log("User Deleted", removeUser);
    }else{
        console.log("no user to delete.");
    }
}
