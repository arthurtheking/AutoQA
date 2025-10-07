// function fetchUser() {
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())  
// }

// function receiveUserNotification(user) {
//     console.log(`User Received!`)
//     return user
// }

// receiveUserNotification(
//     fetchUser()
//         .then((result) => {
//             console.log('Adding new field to the User object - "modified: true"')
//             result.modified = true;
//             console.log(result)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//         .finally(() => {
//             console.log('Finished')
//         })
//     )





















function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
}


function displayUserInfo() {
    console.log("Receiving new user...")

    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.3
        
        if(!success) {
            return reject("Critical Error. User was not received.")
        }
            console.log(`User found! Displaying...`)
            resolve(fetchUser())
    })
}


displayUserInfo()
    .then((result) => {
        return result
    })
    .then((user) => {
        console.log("👤 User data received from API:");
        console.log(user);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Test finished!")
    })