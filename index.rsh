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
  getUsers: Fun([], Null),
  startRaffleDraw: Fun([], Object({
    nftId: Token,
    numberOfTickets: UInt,
    numberOfBobs: UInt,
  })),
  displayHashValue: Fun([Digest], Null),
  displayWinningNumber: Fun([UInt], Null),
  deadline: UInt,
}

// const BInteract = {
//   ...commonInteract,
//   // ...hasRandom,
//   // showRaffleNumber: Fun([UInt], UInt),
// }

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true })
  const A = Participant('Alice', AInteract);
  const B = API('Bob', {
    // getRandomNumber: Fun([UInt], UInt),
    join: Fun([UInt], Bool),
    getReward: Fun([], Data({"None": Null, "Some": UInt})),
  });
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



  // commit()
  // commit()


  const bobsMap = new Map(Address, UInt);
  const [bobAdded] = parallelReduce([0])
    .invariant(balance(nftId) == amt)
    .while(true)
    .api_(B.join, (num) => {
      // check(num == UInt, "number of Bobs is wrong");
      return [0, (k) => {
        k(true)
        bobsMap[this] = num
        return [bobAdded + 1]
      }

      ]
    })
    .timeout(absoluteTime(10), () => {
      Anybody.publish()
      return [
        bobAdded + 1
      ]
    })

  A.only(() => {
    const saltAlice = declassify(_saltAlice)
    const winningNumber = declassify(_winningNumber)
    interact.displayWinningNumber(winningNumber);
  });
  commit()
  A.publish(saltAlice, winningNumber);
  checkCommitment(commitAlice, saltAlice, winningNumber);


  // Give each user a random number between 1 and numberOfTickets
  const [winnerAddress, numberOfDraws] = parallelReduce([A, 0])
    .invariant(balance(nftId) == amt)
    .while(numberOfDraws < numberOfTickets)
    .api_(B.getReward, () => {
      return [0, (notify) => {
        const number = bobsMap[this]
        const address = number == winningNumber ? this : A
        notify(number)
        return [address, numberOfDraws + 1]
      }]
    })

  if (winnerAddress) {
    transfer(amt, nftId).to(winnerAddress)
  } else {
    transfer(amt, nftId).to(A)
  }
  transfer(balance()).to(A)


  // const bobsMap = new Map(Address, UInt);
  // const [bobRaffleNumber, numberOfDraws] = parallelReduce([0, 0])
  //     .invariant(balance(nftId) == amt)
  //     .while(numberOfDraws < numberOfTickets)
  //     .api_(B.getRandomNumber, (number) => {
  //       return [0, (notify) => {
  //         notify(number)
  //         bobsMap[this] = number



  //         // if (number == winningNumber) {
  //         //   transfer(amt, nftId).to(this)
  //         // }else{
  //         //   transfer(amt, nftId).to(A)
  //         // }
  //         return [number, numberOfDraws + 1]
  //       }]
  //     })

  //     transfer(amt, nftId).to(A)
  //     transfer(balance()).to(A)

  commit()
  exit();
});
