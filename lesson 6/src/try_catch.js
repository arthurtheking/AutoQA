// Зробити файл try-catch.js, у якому надсилатиметься запит на 
// сервіс, якого не існує, і внаслідок помилки запит направлятиметься 
// на той, що існує. Якщо і на іншому ресурсі з якихось причин буде 
// хибна відповідь від сервера — згенерувати власну помилку. 

// https://ExistingResource
// https://DefinitelyExistingresource

function sendRequest(url) {
      console.log(`Request was sent to the ${url}`)
      const response = receiveResponse();

      if(response) {
            console.log(`✅ Response from ${url} received Successfully!`);
      }

      return response;
}

function receiveResponse() {
      return Math.random() > 0.5
}


try {
      
      try {
      console.log(`⚠️ Sending API request...`)
      const firstResult = sendRequest("https://ExistingResource");
      if (!firstResult) {
            const error = new Error("UnavailableResource");
            error.name = "❌ AccessError";
            error.message = "No response from the first resource";

            throw error;
            
      }
      } catch(error) {
            console.log(`${error.name}: ${error.message}`);
            const secondResult = sendRequest("https://DefinitelyExistingResource");

            if (!secondResult) {

                  const fatalError = new Error("Both resources are unavailable at the moment");
                  fatalError.name = "❌ CriticalError";
                  throw fatalError;
            }
      }
} catch(error) {
      console.log(`${error.name}: ${error.message}`);


}
finally {
      console.log("Task Completed")
}