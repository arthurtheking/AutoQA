// Promises Practice

// function simulateTestStep(step) {

//     setTimeout(() => {
//         console.log(`❗Starting the TEST TASK: ${step}...`)
//     }, 1000)

//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             let i = Math.random() > 0.4;

//             if (i) {
//             resolve(`✅ Test step: "${step}" passed Successfully!`);
//             } else {
//             reject("❌ No answer from the server");
//             }
//         }, 1000);
//     })
// } 

// simulateTestStep("Відкриваємо браузер")
// .then((result) => {
//     console.log(result)

//     return simulateTestStep("Відправляємо реквест API")

//     .catch((e) => {
//             return "⚠️ Пропущено крок 'Відправляємо реквест API'";
//         });
// })

// .then((result) => {
//     console.log(result)

//     return simulateTestStep("Очікуємо відповідь від сервера")

//     .catch((e) => {
//         return "Помилка під час тесту. ⚠️ Пропущено крок 'Очікуємо відповідь від сервера'"
//     })
// })

// .then((result) => {
//     console.log(result)

//     return simulateTestStep("Завершення тесту")

//     .catch((e) => {
//         return "Помилка під час завершення тесту але похуй"
//     })
// })

// .catch((error) => {
//     console.log(`Критична помилка. Зупиняємо тест! ${error}`)
// })
// .finally(() => {
//     console.log("🔹Test completed🔹")
// })



// ----------------------------------------------------------------



const servers = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://wrong-url-test123.com"
];


function checkServer(url) {
        return fetch(url)

            .then((response) => {
                if(!response.ok) {
                    throw new Error('Shit happens')
                }

                return response;
            })

            .catch((error) => {
                return Promise.reject(error)
            })

}


Promise.any(servers.map((server) => checkServer(server)))
    .then((response) => {
        console.log(response.url)
    }) 

    .catch((error) => {
        console.log(error)
    })