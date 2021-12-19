/*CMD
  command: /register
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter your scholar ID
  keyboard: 
  aliases: /change
CMD*/

User.setProperty("scholar_id", data.message, "string"); 
Bot.runCommand('/set_ronin_adress');
