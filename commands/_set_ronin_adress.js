/*CMD
  command: /set_ronin_adress
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Type your scholar account ronin address
  keyboard: 
  aliases: 
CMD*/

User.setProperty("scholar_ronin_adress", data.message, "text");
Bot.runCommand('/slptoday');

