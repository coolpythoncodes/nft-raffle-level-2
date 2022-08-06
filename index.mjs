import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

// constants
const numberOfTickets = 10;
const numberOfBobs = 10;

// helper functions
const getRandomNumber = (num) => {
  const randomNumber = Math.floor((Math.random() * num) + 1);
  return randomNumber;
}

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const ctcAlice = accAlice.contract(backend)

console.log("Creating NFT")
const raffleNFT = await stdlib.launchToken(accAlice, "Goodness Baby", "GNB", { supply: 1 })
const raffleParameters = {
  nftId: raffleNFT.id,
  numberOfTickets,
  numberOfBobs,
}

const users = [];
const createUsers = async () => {
  console.log(`\nCreating 10 users\n`)
  const newAccBob = async (who) => {
    const acc = await stdlib.newTestAccount(startingBalance);
    // accept token Id
    acc.tokenAccept(raffleParameters.nftId)
    users.push([who, acc])
    const ctc = acc.contract(backend, ctcAlice.getInfo());
    // const [bobRaffleNumber] = await ctc.apis.B.getRandomNumber(numberOfTickets)
    //   console.log(`${who} raffle's number is ${bobRaffleNumber}`)
    try {
      const [bobRaffleNumber] = await ctc.apis.B.getRandomNumber(numberOfTickets)
      console.log(`${who} raffle's number is ${bobRaffleNumber}`)
    } catch (error) {
      // console.log(`${who} did not get a raffle number`)
      console.log(error)
    }
  }

  await newAccBob("Bob")
  // await newAccBob("Thomas")
  // await newAccBob("Nick")
  // await newAccBob("Jack")
  // await newAccBob("Candance")
  // await newAccBob("Jay")
  // await newAccBob("Bobby")
  // await newAccBob("John")
  // await newAccBob("Doe")
  // await newAccBob("Peter")

    console.log(`\n Users has been created: \n`)
}
// const users = await stdlib.newTestAccounts(numberOfTickets, startingBalance);
// const usersCtcs = users.map((user) => user.contract(backend, ctcAlice.getInfo()));
// console.log(users)

// console.log(`\n Users has been created\n`)

// // users accepts the token id
// users.forEach(user => {
//   await user.tokenAccept(raffleParameters.nftId)
// });
// await accBob.tokenAccept(raffleParameters.nftId)




// const [ accAlice, accBob ] =
//   await stdlib.newTestAccounts(2, startingBalance);
// console.log('Hello, Alice and Bob!');

const commonInteract = {
  getRandomNumber:(num) => {
    const randomNumber = Math.floor((Math.random() * num) + 1);
    return randomNumber;
  },
}

const AliceInteract = {
  ...commonInteract,
  ...stdlib.hasConsoleLogger ,
  ...stdlib.hasRandom,
  getUsers:()=>{
    createUsers()
  },
  startRaffleDraw: async () => {
    console.log("Starting raffle draw - raffle parameters has been sent to the backend");
    return raffleParameters
  },
  displayHashValue: (hash) => {
    console.log(`Winning hash value is ${hash}`)
  },
  displayWinningNumber: (winningNumber) => {
    console.log(`Winning raffle number is ${winningNumber}`)
  },
} 

const BobsInteract = {
  ...commonInteract,
}

console.log('Starting backends...');
// await backend.Alice(ctcAlice, AliceInteract)
await Promise.all([
  backend.Alice(ctcAlice, AliceInteract),
  // backend.Bob(ctcBob, {
  //   ...stdlib.hasRandom,
  //   // implement Bob's interact object here
  // }),
]);

console.log('Goodbye, Alice and Bob!');
