const prompt = require('prompt-sync')();
var nextSteps = 1;
const activeRaffles = [];
var numberTickets = 0;
var ticketCount = ['0'];
var winCount = [];
for(let z = 0; z<=ticketCount.length;z++ ){
  winCount.push(0);
};
var totalTickets = 0;
 //ticket buffer helps the user add the tickets owned by other players but only upto the max number of tickets
var ticketBuffer;


do {
    var action = prompt("What do you want to do? 1.Create New Raffle 2.See current prizes 3.Bid on a raffle");
    
    switch (action) {
    case "1":
     action = "Create Raffle";
     var NFTprize = function(name,ticketCost,floorPrice,dustPrice,ticketNo,ticketValue){
        this.name = name;
        this.ticketCost = ticketCost;
        this.floorPrice = floorPrice;
        this.dustPrice = dustPrice;
        this.totalTickets = ticketNo;
        this.ticketValue = ticketValue;
      };
      
      var prizeOne = new NFTprize(prompt("NFT name: "),prompt("NFT ticket cost($Dust): "),
      prompt("NFT floor(sol): "),prompt("Dust price in sol: "),prompt("No of tickets: "));
      

      prizeOne.ticketValue = (prizeOne.ticketCost * prizeOne.totalTickets) * prizeOne.dustPrice;
      console.log(prizeOne);
      ticketBuffer = prizeOne.totalTickets - totalTickets;
      activeRaffles.push(prizeOne);
      var continueUser = prompt("Enter how many tickets the others own 1.yes 2.No");
      
      if(continueUser = 1){
            for(let a=0; a<=ticketBuffer; a++){
                
                otherPlayerTickets = prompt("Enter player's tickets");
                ticketCount.push(otherPlayerTickets);
                let continueUser = 1;
                continueUser = prompt("Do you want to add more? 1.yes 2.No");
                if(continueUser == 2){
                    break;
                }
                };
                break;
      }
      else if(continueUser = 2){
        
                action = prompt("Do you want to go back to menu 1.yes 2.No");
      };
      case "2":
    action = "View Existing raffles";
    console.log("Currently active raffles");
    console.table(activeRaffles);        
    action = prompt("What do you want to do? 1.Create New Raffle 2.See current prizes 3.Bid on a raffle");
    nextSteps = prompt("Do you want to go back to menu 1.yes 2.No");  
      break;

    case "3":
      action = "Bid on raffles";
      console.table(activeRaffles);
      selectRaffle = prompt("Which raffle do you want to bid on?(input index number)");
      console.log(`You are bidding on the ${activeRaffles[selectRaffle].name}`);
      var userTickets = prompt("How many tickets do you want to buy?");
      ticketCount.push(userTickets);
      console.log(`You are user number ${ticketCount.length}`);
      totalTickets = ticketCount.reduce((a,b) => (a+b));
         numberTickets = totalTickets;
         var winner = Math.random() * numberTickets;
         winner = Math.floor(winner);
         let i = 0; var w = 0; 
         while (i < ticketCount.length)
         {
          w = w + ticketCount[i];
          
          if (w>=winner) {
            console.log(`The winner is user number ${i}, who wins with ${ticketCount[i-1]} tickets`);
           winCount[i]=winCount[i]+1;
           break;
          };
          i++;
         
         }
        
    default:
        break;
    }}
while (nextSteps == 1)