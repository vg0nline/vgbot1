/*CMD
  command: /slptoday
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please Type Today's SLP
  keyboard: 
  aliases: 
CMD*/

User.setProperty("slp_today",data.message, "integer");

Bot.runCommand('/confirm');
