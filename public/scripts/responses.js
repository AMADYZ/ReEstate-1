
// function sendMessage(message) {
//   return $.ajax({
//     url: "https://api.openai.com/v1/chat/completions",
//     type: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     data: JSON.stringify({
//       model: "gpt-3.5-turbo", // or any other model you prefer
//       messages: [
//         { role: "system", content: "You are" },
//         { role: "user", content: message },
//       ],
//     }),
//     dataType: "json",
//   });
// }

// async function getBotResponse(input) {
//   try {
//     console.log(input.trim())
//     const response = await sendMessage(input.trim());
//     const botResponse = response.choices[0].message.content;
//     return botResponse;
//   } catch (error) {
//     console.error(error);
//     return "An error occurred while fetching the response.";
//   }
// }

// async function getHardResponse(userText) {
//   try {
//     const botResponse = await getBotResponse(userText);
//     const botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
//     $("#chatbox").append(botHtml);
//     document.getElementById("chat-bar-bottom").scrollIntoView(true);
//   } catch (error) {
//     console.error(error);
//     // Handle error as needed
//   }
// }
