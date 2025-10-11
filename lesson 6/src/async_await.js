// Сформувати файл async-await.js, що робитиме те саме, що 
// і в promises.js, але цього разу — через підхід async/await.

// Підготувати файл promises.js, у якому написати функцію, 
// що відсилатиме за допомогою функції fetch запит на ресурс, 
// який повертає JSON. Через ланцюжок then() обробити цей запит 
// і перевикористати цей JSON у іншій функції.

// "https://jsonplaceholder.typicode.com/todos/1"

async function getObjectByUrl(url) {
    console.log('Starting operation...');

    try {
        console.log('Fetching from resource...')
        
        const response = await fetch(url);

        if(response.ok) {

            console.log('Verifying received data...')
            const data = await response.json();

            countUsers(data);
        } else {
            throw new Error('Received data is not applicable')
        }

    } catch(error) {

        error.message = `Error while fetching object from ${url}`;
        error.name = 'FetchError'

        console.log(`${error.name}: ${error.message}`)
    } finally {
        console.log('Operation finished!')
    }

    
}

function countUsers(users) {

    if(typeof(users) === "object" && !Array.isArray(users)) {
        console.log('Counting Users...')
        console.log("Number of users:", 1)
    } else {
        console.log(users.length)
    }
}

getObjectByUrl('https://jsonplaceholder.typicode.com/todos/1')