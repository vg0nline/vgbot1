/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
Welcome to Axie.DBG

👍 You can /register now
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var tgID=data.user.telegramid;
var firstName = data.user.first_name;
var lastName = data.user.last_name;
var userName = data.user.username;
var greetings = "Hello, " + firstName + " " + lastName + "(" + userName + ") ! \nTelegramID: " + tgID;

Bot.sendMessage(greetings);
