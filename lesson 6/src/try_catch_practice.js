// function parseUserData(data) {
//   // Тут може статися помилка, якщо JSON некоректний
//   const user = JSON.parse(data);
//   return `User: ${user.name}, age: ${user.age}`;
// }

// function runTests() {
//   const testCases = [
//     '{"name": "Olga", "age": 28}', // ✅ правильний JSON
//     '{name: "Petro", "age": 30}',  // ❌ некоректний JSON
//     '{"name": "Ivan"}',            // ✅ але без віку
//   ];

  
//     testCases.forEach((item, index) => {
//         try {
//             console.log(`\nTest case ${index + 1}:`);
//             const result = parseUserData(item);
//             console.log(result);
//         } catch(error) {
//             console.log(`${error.name} : ${error.message}`);
//         }
//     });

//     console.log('\n✅ Тести завершені');
// }

// runTests();

function parseUserData(data) {
  try {
    const user = JSON.parse(data);

    // Перевірка: чи є вік
    if (!user.age) {
        const error = new Error("Missing age");
        error.name = "ValidationError";
        throw error;
    } else if (!user.name) {
        const error = new Error("Missing name");
        error.name = "ValidationError";
        throw error;
    }

    return `User: ${user.name}, age: ${user.age}`;
  } catch (error) {
    // Обробка різних типів помилок
    if (error.name === "ValidationError") {
      return `Validation error: ${error.message}`;
    } else if (error.name === "SyntaxError") {
      return `❌ Invalid JSON`;
    } else {
      return `${error.name}: ${error.message}`;
    }
  }
}

function runTests() {
    const testCases = [
        '{"name": "Olga", "age": 28}',
        '{name: "Petro", "age": 30}',
        '{"name": "Ivan"}',
        '{"age": 22}'
    ];

  testCases.forEach((item, index) => {
    console.log(`\nTest case ${index + 1}:`);
    const result = parseUserData(item);
    console.log(result);
  });

  console.log('\n✅ Тести завершені');
}

runTests();
