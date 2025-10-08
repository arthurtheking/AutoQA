// Підготувати файл promises.js, у якому написати функцію, 
// що відсилатиме за допомогою функції fetch запит на ресурс, 
// який повертає JSON. Через ланцюжок then() обробити цей запит 
// і перевикористати цей JSON у іншій функції.

// "https://jsonplaceholder.typicode.com/todos/1"



function countUsers(users) {

    if(typeof(users) === "object" && !Array.isArray(users)) {
        console.log("Number of users:", 1)
    }
}

function sendRequest(url) {

    console.log("\n⚠️ Sending request to the database...")
    return fetch(url)
        .then(response => response.json())
}

function getRandomBool() {
    return Math.random() > 0.5;
}


sendRequest("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {

        if(response && getRandomBool() === true) {
            console.log('\n✅ Users received')
                countUsers(response);
        } else {
            throw new Error('NO USERS RECEIVED')
        }
    })
    .catch((error) => {
        console.log(`\n❌ ${error.name}: ${error.message}`)
    })
    .finally(() => {
        console.log(`\n<---- Test Finished ---->`);
    })