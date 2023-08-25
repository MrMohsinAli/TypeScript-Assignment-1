var current_users = ['Eric', 'Antony', 'Harold', 'Root', 'Bobby'];
var new_users = ['paul', 'Antony', 'miller', 'smith', 'Eric'];
for (var i = 0; i < new_users.length; i++) {
    var username_taken = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            username_taken = true;
            break;
        }
    }
    if (username_taken) {
        console.log("Sorry, ".concat(new_users[i], " is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations, ".concat(new_users[i], " is available."));
    }
}
