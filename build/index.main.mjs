// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc2
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3],
      3: [ctc0, ctc1, ctc2, ctc3, ctc2],
      6: [ctc0, ctc1, ctc2, ctc2, ctc2],
      7: [ctc0, ctc1, ctc2, ctc3, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    nftId: ctc3,
    numberOfBobs: ctc1,
    numberOfTickets: ctc1
    });
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v260 = stdlib.protect(ctc4, await interact.startRaffleDraw(), {
    at: './index.rsh:46:89:application',
    fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'startRaffleDraw',
    who: 'Alice'
    });
  const v261 = v260.nftId;
  const v262 = v260.numberOfBobs;
  const v263 = v260.numberOfTickets;
  const v267 = stdlib.protect(ctc1, await interact.getRandomNumber(v263), {
    at: './index.rsh:47:52:application',
    fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'getRandomNumber',
    who: 'Alice'
    });
  const v268 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:48:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v269 = stdlib.digest(ctc5, [v268, v267]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v261, v263, v262, v269],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v272, v273, v274, v275], secs: v277, time: v276, didSend: v42, from: v271 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v272
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v272, v273, v274, v275], secs: v277, time: v276, didSend: v42, from: v271 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.displayHashValue(v275), {
    at: './index.rsh:52:30:application',
    fs: ['at ./index.rsh:52:30:application call to [unknown function] (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:52:30:application call to "liftedInteract" (defined at: ./index.rsh:52:30:application)'],
    msg: 'displayHashValue',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v271, v272, v273, v275],
    evt_cnt: 0,
    funcNum: 1,
    lct: v276,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:4:13:decimal', stdlib.UInt_max, '1'), v272]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v288, time: v287, didSend: v53, from: v286 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:4:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v272
        });
      
      const v304 = v287;
      const v311 = stdlib.checkedBigNumberify('./index.rsh:43:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v288, time: v287, didSend: v53, from: v286 } = txn2;
  ;
  ;
  const v298 = stdlib.addressEq(v271, v286);
  stdlib.assert(v298, {
    at: './index.rsh:54:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.getUsers(), {
    at: './index.rsh:56:22:application',
    fs: ['at ./index.rsh:56:22:application call to [unknown function] (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:56:22:application call to "liftedInteract" (defined at: ./index.rsh:56:22:application)'],
    msg: 'getUsers',
    who: 'Alice'
    });
  
  let v304 = v287;
  let v311 = stdlib.checkedBigNumberify('./index.rsh:43:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc7],
      timeoutAt: ['time', stdlib.checkedBigNumberify('./index.rsh:78:27:decimal', stdlib.UInt_max, '10')],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v271, v272, v273, v275, v311],
        evt_cnt: 0,
        funcNum: 7,
        lct: v304,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:79:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v347, time: v346, didSend: v129, from: v345 } = txn4;
          
          ;
          const cv304 = v346;
          const cv311 = v311;
          
          await (async () => {
            const v304 = cv304;
            const v311 = cv311;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc9, ctc3, ctc1, ctc6, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v347, time: v346, didSend: v129, from: v345 } = txn4;
      ;
      const v348 = stdlib.addressEq(v271, v345);
      stdlib.assert(v348, {
        at: './index.rsh:79:15:dot',
        fs: ['at ./index.rsh:78:35:application call to [unknown function] (defined at: ./index.rsh:78:35:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv304 = v346;
      const cv311 = v311;
      
      v304 = cv304;
      v311 = cv311;
      
      continue;
      }
    else {
      const {data: [v329], secs: v331, time: v330, didSend: v100, from: v328 } = txn3;
      undefined /* setApiDetails */;
      const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
      ;
      const v336 = true;
      await txn3.getOutput('Bob_join', 'v336', ctc8, v336);
      await stdlib.mapSet(map0, v328, v333);
      const cv304 = v330;
      const cv311 = v311;
      
      v304 = cv304;
      v311 = cv311;
      
      continue;}
    
    }
  stdlib.protect(ctc0, await interact.displayWinningNumber(v267), {
    at: './index.rsh:88:34:application',
    fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:13:function exp)'],
    msg: 'displayWinningNumber',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v271, v272, v273, v275, v311, v268, v267],
    evt_cnt: 2,
    funcNum: 3,
    lct: v304,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:91:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v355, v356], secs: v358, time: v357, didSend: v141, from: v354 } = txn3;
      
      ;
      const v362 = stdlib.checkedBigNumberify('./index.rsh:96:61:decimal', stdlib.UInt_max, '0');
      const v363 = v271;
      const v364 = v357;
      const v371 = v311;
      
      if (await (async () => {
        const v375 = stdlib.lt(v362, v273);
        
        return v375;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v363,
          tok: v272
          });
        sim_r.txns.push({
          kind: 'from',
          to: v271,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v272
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc3, ctc1, ctc6, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v355, v356], secs: v358, time: v357, didSend: v141, from: v354 } = txn3;
  ;
  const v359 = stdlib.addressEq(v271, v354);
  stdlib.assert(v359, {
    at: './index.rsh:91:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v360 = stdlib.digest(ctc5, [v355, v356]);
  const v361 = stdlib.digestEq(v275, v360);
  stdlib.assert(v361, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:92:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v362 = stdlib.checkedBigNumberify('./index.rsh:96:61:decimal', stdlib.UInt_max, '0');
  let v363 = v271;
  let v364 = v357;
  let v371 = v311;
  
  while (await (async () => {
    const v375 = stdlib.lt(v362, v273);
    
    return v375;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v382], secs: v384, time: v383, didSend: v179, from: v381 } = txn4;
    undefined /* setApiDetails */;
    ;
    const v386 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v381), null);
    await txn4.getOutput('Bob_getReward', 'v386', ctc2, v386);
    const v394 = stdlib.add(v362, stdlib.checkedBigNumberify('./index.rsh:104:42:decimal', stdlib.UInt_max, '1'));
    const cv362 = v394;
    const cv363 = v271;
    const cv364 = v383;
    const cv371 = v371;
    
    v362 = cv362;
    v363 = cv363;
    v364 = cv364;
    v371 = cv371;
    
    continue;
    
    }
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function _Bob_getReward6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_getReward6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_getReward6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v271, v272, v273, v362, v371] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc4, ctc1, ctc1, ctc1]);
  const v378 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:99:27:application call to [unknown function] (defined at: ./index.rsh:99:27:function exp)', 'at ./index.rsh:99:27:application call to [unknown function] (defined at: ./index.rsh:99:27:function exp)'],
    msg: 'in',
    who: 'Bob_getReward'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v271, v272, v273, v362, v371, v378],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:100:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v382], secs: v384, time: v383, didSend: v179, from: v381 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_getReward"
        });
      ;
      const v386 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v381), null);
      const v387 = await txn1.getOutput('Bob_getReward', 'v386', ctc2, v386);
      
      const v394 = stdlib.add(v362, stdlib.checkedBigNumberify('./index.rsh:104:42:decimal', stdlib.UInt_max, '1'));
      const v591 = v394;
      const v594 = v371;
      const v595 = stdlib.lt(v394, v273);
      if (v595) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v271,
          tok: v272
          });
        sim_r.txns.push({
          kind: 'from',
          to: v271,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v272
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v382], secs: v384, time: v383, didSend: v179, from: v381 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v386 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v381), null);
  const v387 = await txn1.getOutput('Bob_getReward', 'v386', ctc2, v386);
  if (v179) {
    stdlib.protect(ctc0, await interact.out(v382, v387), {
      at: './index.rsh:99:11:application',
      fs: ['at ./index.rsh:99:11:application call to [unknown function] (defined at: ./index.rsh:99:11:function exp)', 'at ./index.rsh:103:15:application call to "notify" (defined at: ./index.rsh:100:27:function exp)', 'at ./index.rsh:100:27:application call to [unknown function] (defined at: ./index.rsh:100:27:function exp)'],
      msg: 'out',
      who: 'Bob_getReward'
      });
    }
  else {
    }
  
  const v394 = stdlib.add(v362, stdlib.checkedBigNumberify('./index.rsh:104:42:decimal', stdlib.UInt_max, '1'));
  const v591 = v394;
  const v594 = v371;
  const v595 = stdlib.lt(v394, v273);
  if (v595) {
    return;
    }
  else {
    ;
    ;
    return;
    }
  
  
  };
export async function _Bob_join7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_join7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_join7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v271, v272, v273, v275, v311] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc5, ctc1]);
  const v321 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:68:25:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)', 'at ./index.rsh:68:25:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
    msg: 'in',
    who: 'Bob_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v271, v272, v273, v275, v311, v321],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:70:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v329], secs: v331, time: v330, didSend: v100, from: v328 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_join"
        });
      const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
      ;
      const v336 = true;
      const v337 = await txn1.getOutput('Bob_join', 'v336', ctc7, v336);
      
      await stdlib.simMapSet(sim_r, 0, v328, v333);
      const v597 = v311;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v329], secs: v331, time: v330, didSend: v100, from: v328 } = txn1;
  undefined /* setApiDetails */;
  const v333 = v329[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
  ;
  const v336 = true;
  const v337 = await txn1.getOutput('Bob_join', 'v336', ctc7, v336);
  if (v100) {
    stdlib.protect(ctc0, await interact.out(v329, v337), {
      at: './index.rsh:68:11:application',
      fs: ['at ./index.rsh:68:11:application call to [unknown function] (defined at: ./index.rsh:68:11:function exp)', 'at ./index.rsh:71:10:application call to "k" (defined at: ./index.rsh:70:22:function exp)', 'at ./index.rsh:70:22:application call to [unknown function] (defined at: ./index.rsh:70:22:function exp)'],
      msg: 'out',
      who: 'Bob_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v328, v333);
  const v597 = v311;
  return;
  
  
  
  };
export async function Bob_getReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_getReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_getReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bob_getReward6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_join(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_join expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_join expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_join7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_getReward()(byte,byte[8])`, `Bob_join(uint64)byte`],
    pure: [],
    sigs: [`Bob_getReward()(byte,byte[8])`, `Bob_join(uint64)byte`]
    },
  appApproval: `BiAPAAEHICgECAZQAwnHpLT9CwUKoI0GJgMBAAABASI1ADEYQQOkKWRJIls1ASEGWzUCMRkjEkEACjEAKCEKr2ZCA3A2GgAXSUEAIyI1BCM1BkkhCwxAAAghCxJEKUIA2IGVm9TgBRJENhoBQgBsNhoCFzUENhoDNhoBF0khDAxAARZJIQcMQACuSSQMQABKJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABOIbs6mwMgYhDQ9ENP8xABJENP80AyVbNAMhBFs0A1cwIDIGNAMhCFtCAflIJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEdHioJDT/ULAyBiENDESACQAAAAAAAAFQAbAqNQcxACgqNP9QZjQDVwAgNAMlWzQDIQRbNANXMCAyBjQDIQhbQgGbSCEHNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BTX+gARokmRjNP5QsIAIAAAAAAAAAYIxAIgCd1CwMQCIAnA1BzT/NAMlWzQDIQRbNAOBMFsjCDT/MgY0A4E4W0IBaEkjDEAAuEkhCQxAAGghCRJEIQk0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFSSJbNf4hBls1/YAEpKXwiDT+FlA0/RZQsDT/MQASRDQDVzAgNP4WNP0WUAESRDT/NAMlWzQDIQRbIjT/MgY0AyEIW0IA8yMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yVbNf6ABJqLkXSwIzT+iAHTNP8xABJENP80/jQDIQRbNANXMCAyBiJCAHxIIQ6IAZsiNAESRDQESSISTDQCEhFESTUFSUoiWzX/IQZbNf6BEFs1/VcYIDX8gASjiaHBNP8WUDT+FlA0/RZQNPxQsCEOiAFYsSKyASKyEiEFshAyCrIUNP+yEbMxADT/FlA0/hZQNPxQKEsBVwBQZ0gjNQEyBjUCQgDENf81/jX9Nfw1+0k1+jT7FlA0/BZQNP1QNP8WUChLAVcAWGdIJDUBMgY1AkIAljX/Nf41/TX8Nfs1+jX5NPw0+wxBACU0+TT6FlA0+xZQNPwWUDT/FlAoSwFXAEBnSCEHNQEyBjUCQgBbsSKyASOyEiEFshA0/bIUNPqyEbOxIrIBNP+yCCOyEDT5sgezsSKyASKyEiEFshAyCbIVMgqyFDT6shGzQgAAMRkhDBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEKr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEFEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v272",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v273",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v274",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v272",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v273",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v274",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v355",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v356",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v382",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T18",
                "name": "v329",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v336",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T0",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v386",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_getReward",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_join",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v355",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v356",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v382",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T18",
                "name": "v329",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c1238038062001c12833981016040819052620000269162000252565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a1620000aa341560076200014b565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518401518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000142926002929091019062000175565b50505062000349565b81620001715760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000183906200030c565b90600052602060002090601f016020900481019282620001a75760008555620001f2565b82601f10620001c257805160ff1916838001178555620001f2565b82800160010185558215620001f2579182015b82811115620001f2578251825591602001919060010190620001d5565b506200020092915062000204565b5090565b5b8082111562000200576000815560010162000205565b604051608081016001600160401b03811182821017156200024c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200026657600080fd5b604080519081016001600160401b03811182821017156200029757634e487b7160e01b600052604160045260246000fd5b604052835181526080601f1983011215620002b157600080fd5b620002bb6200021b565b60208501519092506001600160a01b0381168114620002d957600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b600181811c908216806200032157607f821691505b602082108114156200034357634e487b7160e01b600052602260045260246000fd5b50919050565b6118b980620003596000396000f3fe60806040526004361061009a5760003560e01c806383230757116100615780638323075714610132578063ab53f2c614610147578063ac3ab7031461016a578063ad2d91d11461017d578063ad9fa3d814610190578063bf2c5b24146101a357005b80631e93b0f1146100a35780632ad04dc3146100c75780632c10a159146100ea5780633bc5b7bf146100fd57806351c56a5f1461012a57005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100da6100d5366004611370565b6101b6565b60405190151581526020016100be565b6100a16100f83660046113a1565b6101e6565b34801561010957600080fd5b5061011d6101183660046113d2565b61020a565b6040516100be9190611405565b61011d610236565b34801561013e57600080fd5b506001546100b4565b34801561015357600080fd5b5061015c61027d565b6040516100be929190611476565b6100a16101783660046113a1565b61031a565b6100a161018b3660046114b0565b61033a565b6100a161019e3660046113a1565b61035a565b6100a16101b13660046113a1565b61037a565b60006101c061116e565b6020810151518390526101d16111a0565b6101db828261039a565b602001519392505050565b6101ee6111a0565b61020661020036849003840184611538565b8261058e565b5050565b60408051606081018252600080825260208201819052918101919091526102308261073e565b92915050565b604080516060810182526000808252602082018190529181019190915261025b6111cd565b60208101516000905261026c6111a0565b6102768282610810565b5192915050565b60006060600054600280805461029290611570565b80601f01602080910402602001604051908101604052809291908181526020018280546102be90611570565b801561030b5780601f106102e05761010080835404028352916020019161030b565b820191906000526020600020905b8154815290600101906020018083116102ee57829003601f168201915b50505050509050915091509091565b6103226111a0565b610206610334368490038401846115a5565b8261039a565b6103426111a0565b610206610354368490038401846115fc565b826109fd565b6103626111a0565b61020661037436849003840184611656565b82610810565b6103826111a0565b61020661039436849003840184611538565b82610bf7565b6103aa6007600054146016610d49565b81516103c59015806103be57508251600154145b6017610d49565b6000808055600280546103d790611570565b80601f016020809104026020016040519081016040528092919081815260200182805461040390611570565b80156104505780601f1061042557610100808354040283529160200191610450565b820191906000526020600020905b81548152906001019060200180831161043357829003601f168201915b50505050508060200190518101906104689190611742565b9050610478600a43106018610d49565b60408051338152845160208083019190915285015151518183015290517f028f10069e3d138251f5b63d2e84687a8240062d4382aa3353ec2f32004dc5519181900360600190a16104cb34156015610d49565b604051600181527faf686feb6236f6c700c0fcb7f01c1132c50520489937505f2b0fc02c0b5871939060200160405180910390a1600160208381018290523360009081526004825260409020805460ff1916831781559085015151519101556105326111f7565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351909101526060808401518351909101528082018051439052608084015190519091015261058881610d6f565b50505050565b61059e600160005414600b610d49565b81516105b99015806105b257508251600154145b600c610d49565b6000808055600280546105cb90611570565b80601f01602080910402602001604051908101604052809291908181526020018280546105f790611570565b80156106445780601f1061061957610100808354040283529160200191610644565b820191906000526020600020905b81548152906001019060200180831161062757829003601f168201915b505050505080602001905181019061065c919061175e565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16106b334156008610d49565b6106cd6106c63383602001516001610e35565b6009610d49565b80516106e5906001600160a01b03163314600a610d49565b6106ed6111f7565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835190910152606080840151835190910152808201805143905251600091015261058881610d6f565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561078a5761078a6113ef565b1415610801576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156107cb576107cb6113ef565b60018111156107dc576107dc6113ef565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b6108206006600054146013610d49565b815161083b90158061083457508251600154145b6014610d49565b60008080556002805461084d90611570565b80601f016020809104026020016040519081016040528092919081815260200182805461087990611570565b80156108c65780601f1061089b576101008083540402835291602001916108c6565b820191906000526020600020905b8154815290600101906020018083116108a957829003601f168201915b50505050508060200190518101906108de9190611742565b6040805133815285516020808301919091528601515115158183015290519192507f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c21365919081900360600190a161093634156012610d49565b7fbfdd6ccd97dad3fc6b1831c605f5cb14ee111152c469fc8e19c36ad38fc718e56109603361073e565b60405161096d9190611405565b60405180910390a161097e3361073e565b8252610988611244565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608201516109c3906001906117e1565b6020808301805192909252835182516001600160a01b03909116910152805143604090910152608083015190516060015261058881610e4d565b610a0d6003600054146010610d49565b8151610a28901580610a2157508251600154145b6011610d49565b600080805560028054610a3a90611570565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6690611570565b8015610ab35780601f10610a8857610100808354040283529160200191610ab3565b820191906000526020600020905b815481529060010190602001808311610a9657829003601f168201915b5050505050806020019051810190610acb9190611742565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a1610b2a3415600d610d49565b8051610b42906001600160a01b03163314600e610d49565b602080840151805190820151604051610b9093610b6a93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826060015114600f610d49565b610b98611244565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201528184018051600090528551815194169390920192909252805143920191909152608083015190516060015261058881610e4d565b610c07600760005414601b610d49565b8151610c22901580610c1b57508251600154145b601c610d49565b600080805560028054610c3490611570565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6090611570565b8015610cad5780601f10610c8257610100808354040283529160200191610cad565b820191906000526020600020905b815481529060010190602001808311610c9057829003601f168201915b5050505050806020019051810190610cc59190611742565b9050610cd6600a431015601d610d49565b60408051338152845160208083019190915285015115158183015290517f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb9181900360600190a1610d2934156019610d49565b8051610d41906001600160a01b03163314601a610d49565b6105326111f7565b816102065760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610db36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015283516060908101519084015281840151820151608084015260076000554360015551610e0c91839101611807565b60405160208183030381529060405260029080519060200190610e309291906112a1565b505050565b6000610e4383853085610f74565b90505b9392505050565b8051604001516020820151511015610efc57610ea36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015281840180515160608086019190915290510151608084015260066000554360015551610e0c91839101611807565b610f18816000015160200151826020015160200151600161104e565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610f5a573d6000803e3d6000fd5b5060008080556001819055610f7190600290611325565b50565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610fdb9161184a565b60006040518083038185875af1925050503d8060008114611018576040519150601f19603f3d011682016040523d82523d6000602084013e61101d565b606091505b509150915061102e82826001611062565b50808060200190518101906110439190611866565b979650505050505050565b61105983838361109d565b610e3057600080fd5b60608315611071575081610e46565b8251156110815782518084602001fd5b60405163100960cb60e01b815260048101839052602401610d66565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916110fc9161184a565b60006040518083038185875af1925050503d8060008114611139576040519150601f19603f3d011682016040523d82523d6000602084013e61113e565b606091505b509150915061114f82826002611062565b50808060200190518101906111649190611866565b9695505050505050565b60405180604001604052806000815260200161119b60408051808201909152600060208201908152815290565b905290565b6040805160a081018252600091810182815260608201839052608082018390528152602081019190915290565b60405180604001604052806000815260200161119b60405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161119b604051806040016040528060008152602001600081525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161119b60405180608001604052806000815260200160006001600160a01b0316815260200160008152602001600081525090565b8280546112ad90611570565b90600052602060002090601f0160209004810192826112cf5760008555611315565b82601f106112e857805160ff1916838001178555611315565b82800160010185558215611315579182015b828111156113155782518255916020019190600101906112fa565b5061132192915061135b565b5090565b50805461133190611570565b6000825580601f10611341575050565b601f016020900490600052602060002090810190610f7191905b5b80821115611321576000815560010161135c565b60006020828403121561138257600080fd5b5035919050565b60006040828403121561139b57600080fd5b50919050565b6000604082840312156113b357600080fd5b610e468383611389565b6001600160a01b0381168114610f7157600080fd5b6000602082840312156113e457600080fd5b8135610e46816113bd565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061142a57634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60005b8381101561146557818101518382015260200161144d565b838111156105885750506000910152565b828152604060208201526000825180604084015261149b81606085016020870161144a565b601f01601f1916919091016060019392505050565b60006060828403121561139b57600080fd5b6040805190810167ffffffffffffffff811182821017156114f357634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156114f357634e487b7160e01b600052604160045260246000fd5b8015158114610f7157600080fd5b60006040828403121561154a57600080fd5b6115526114c2565b8235815260208301356115648161152a565b60208201529392505050565b600181811c9082168061158457607f821691505b6020821081141561139b57634e487b7160e01b600052602260045260246000fd5b600081830360408112156115b857600080fd5b6115c06114c2565b833581526020601f19830112156115d657600080fd5b6115de6114f9565b91506115e86114f9565b602094850135815282529283015250919050565b6000818303606081121561160f57600080fd5b6116176114c2565b833581526040601f198301121561162d57600080fd5b6116356114c2565b60208581013582526040909501358582015293810193909352509092915050565b6000818303604081121561166957600080fd5b6116716114c2565b833581526020601f198301121561168757600080fd5b61168f6114f9565b9150602084013561169f8161152a565b825260208101919091529392505050565b600060a082840312156116c257600080fd5b60405160a0810181811067ffffffffffffffff821117156116f357634e487b7160e01b600052604160045260246000fd5b80604052508091508251611706816113bd565b81526020830151611716816113bd565b806020830152506040830151604082015260608301516060820152608083015160808201525092915050565b600060a0828403121561175457600080fd5b610e4683836116b0565b60006080828403121561177057600080fd5b6040516080810181811067ffffffffffffffff821117156117a157634e487b7160e01b600052604160045260246000fd5b60405282516117af816113bd565b815260208301516117bf816113bd565b6020820152604083810151908201526060928301519281019290925250919050565b6000821982111561180257634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a08101610230565b6000825161185c81846020870161144a565b9190910192915050565b60006020828403121561187857600080fd5b8151610e468161152a56fea26469706673582212205672ee99c0700989576f676e520dc5cd158bb26d18de784cfd5ff0bfe8d1857264736f6c634300080c0033`,
  BytecodeLen: 7186,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:90:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:139:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:96:56:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:65:36:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_getReward": Bob_getReward,
  "Bob_join": Bob_join
  };
export const _APIs = {
  Bob: {
    getReward: Bob_getReward,
    join: Bob_join
    }
  };
