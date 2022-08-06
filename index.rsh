'reach 0.1';

// constants
const amt = 1
// const [ isOutcome, RAFFLE_HAS_WINNER, NO_RAFFLE_WINNER ] = makeEnum(2);

// const winner = (bobsNumbers, winningNumber) => {
//   return bobsNumbers === winningNumber ? isOutcome(RAFFLE_HAS_WINNER) : isOutcome(NO_RAFFLE_WINNER);
// }

const commonInteract = {
  getRandomNumber: Fun([UInt], UInt),
}

const AInteract = {
  ...commonInteract,
  ...hasRandom,
    ...hasConsoleLogger,

  getUsers: Fun([], Null),
  startRaffleDraw: Fun([], Object({
    nftId: Token,
    numberOfTickets: UInt,
    numberOfBobs: UInt,
  })),
  displayHashValue: Fun([Digest], Null),
  displayWinningNumber: Fun([UInt], Null),
}

const BInteract = {
  ...commonInteract,
  // ...hasRandom,
  // showRaffleNumber: Fun([UInt], UInt),
}

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true })
  const A = Participant('Alice', AInteract);
  const B = API('Bob', BInteract);
  init();
  // The first one to publish deploys the contract
  A.only(() => {
    const { nftId, numberOfTickets, numberOfBobs } = declassify(interact.startRaffleDraw());
    const _winningNumber = interact.getRandomNumber(numberOfTickets)
    const [_commitAlice, _saltAlice] = makeCommitment(interact, _winningNumber)
    const commitAlice = declassify(_commitAlice)
  });
  A.publish(nftId, numberOfTickets, numberOfBobs, commitAlice);
  A.interact.displayHashValue(commitAlice);
  commit()
  A.pay([[amt, nftId]])
  assert(balance(nftId) == amt, "balance of NFT is wrong");
  A.interact.getUsers();

  A.only(() => {
    const saltAlice = declassify(_saltAlice)
    const winningNumber = declassify(_winningNumber)
    interact.displayWinningNumber(winningNumber);
  });
  commit()
  A.publish(saltAlice, winningNumber);
  checkCommitment(commitAlice, saltAlice, winningNumber);

  // commit()
  // commit()


  const bobsMap = new Map(Address, UInt);

  // Give each user a random number between 1 and numberOfTickets
  const [bobRaffleNumber, numberOfDraws] = parallelReduce([0, 0])
    .invariant(balance(nftId) == amt)
    .while(numberOfDraws < numberOfTickets)
    .api_(B.getRandomNumber, (number) => {
      return [0, (notify) => {
        notify(number)
        bobsMap[this] = number



        // if (number == winningNumber) {
        //   transfer(amt, nftId).to(this)
        // }else{
        //   transfer(amt, nftId).to(A)
        // }
        return [number, numberOfDraws + 1]
      }]
    })

  transfer(amt, nftId).to(A)
  transfer(balance()).to(A)


  commit()
  exit();
});
