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
      2: [ctc0, ctc1, ctc2, ctc3],
      5: [ctc0, ctc1, ctc2, ctc2, ctc2]
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
  const ctc8 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v184 = stdlib.protect(ctc4, await interact.startRaffleDraw(), {
    at: './index.rsh:43:89:application',
    fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:13:function exp)'],
    msg: 'startRaffleDraw',
    who: 'Alice'
    });
  const v185 = v184.nftId;
  const v186 = v184.numberOfBobs;
  const v187 = v184.numberOfTickets;
  const v191 = stdlib.protect(ctc1, await interact.getRandomNumber(v187), {
    at: './index.rsh:44:52:application',
    fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:13:function exp)'],
    msg: 'getRandomNumber',
    who: 'Alice'
    });
  const v192 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:45:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v193 = stdlib.digest(ctc5, [v192, v191]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v185, v187, v186, v193],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v196, v197, v198, v199], secs: v201, time: v200, didSend: v41, from: v195 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v196
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
  const {data: [v196, v197, v198, v199], secs: v201, time: v200, didSend: v41, from: v195 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.displayHashValue(v199), {
    at: './index.rsh:49:30:application',
    fs: ['at ./index.rsh:49:30:application call to [unknown function] (defined at: ./index.rsh:49:30:function exp)', 'at ./index.rsh:49:30:application call to "liftedInteract" (defined at: ./index.rsh:49:30:application)'],
    msg: 'displayHashValue',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v195, v196, v197, v199],
    evt_cnt: 0,
    funcNum: 1,
    lct: v200,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:4:13:decimal', stdlib.UInt_max, '1'), v196]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v212, time: v211, didSend: v52, from: v210 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:4:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v196
        });
      
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v212, time: v211, didSend: v52, from: v210 } = txn2;
  ;
  ;
  const v222 = stdlib.addressEq(v195, v210);
  stdlib.assert(v222, {
    at: './index.rsh:51:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.getUsers(), {
    at: './index.rsh:53:22:application',
    fs: ['at ./index.rsh:53:22:application call to [unknown function] (defined at: ./index.rsh:53:22:function exp)', 'at ./index.rsh:53:22:application call to "liftedInteract" (defined at: ./index.rsh:53:22:application)'],
    msg: 'getUsers',
    who: 'Alice'
    });
  
  stdlib.protect(ctc0, await interact.displayWinningNumber(v191), {
    at: './index.rsh:58:34:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'displayWinningNumber',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v195, v196, v197, v199, v192, v191],
    evt_cnt: 2,
    funcNum: 2,
    lct: v211,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v230, v231], secs: v233, time: v232, didSend: v68, from: v229 } = txn3;
      
      ;
      const v238 = stdlib.checkedBigNumberify('./index.rsh:71:63:decimal', stdlib.UInt_max, '0');
      const v239 = v232;
      const v246 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v250 = stdlib.lt(v238, v197);
        
        return v250;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v195,
          tok: v196
          });
        sim_r.txns.push({
          kind: 'from',
          to: v195,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v196
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
    tys: [ctc8, ctc3, ctc1, ctc6, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v230, v231], secs: v233, time: v232, didSend: v68, from: v229 } = txn3;
  ;
  const v234 = stdlib.addressEq(v195, v229);
  stdlib.assert(v234, {
    at: './index.rsh:61:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v235 = stdlib.digest(ctc5, [v230, v231]);
  const v236 = stdlib.digestEq(v199, v235);
  stdlib.assert(v236, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:62:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v238 = stdlib.checkedBigNumberify('./index.rsh:71:63:decimal', stdlib.UInt_max, '0');
  let v239 = v232;
  let v246 = stdlib.checkedBigNumberify('./index.rsh:40:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v250 = stdlib.lt(v238, v197);
    
    return v250;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v261], secs: v263, time: v262, didSend: v114, from: v260 } = txn4;
    undefined /* setApiDetails */;
    const v265 = v261[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
    ;
    await txn4.getOutput('Bob_getRandomNumber', 'v265', ctc1, v265);
    await stdlib.mapSet(map0, v260, v265);
    const v274 = stdlib.add(v238, stdlib.checkedBigNumberify('./index.rsh:86:41:decimal', stdlib.UInt_max, '1'));
    const cv238 = v274;
    const cv239 = v262;
    const cv246 = v246;
    
    v238 = cv238;
    v239 = cv239;
    v246 = cv246;
    
    continue;
    
    }
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function _Bob_getRandomNumber5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_getRandomNumber5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_getRandomNumber5 expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v195, v196, v197, v238, v246] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc1]);
  const v253 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:74:39:application call to [unknown function] (defined at: ./index.rsh:74:39:function exp)', 'at ./index.rsh:74:39:application call to [unknown function] (defined at: ./index.rsh:74:39:function exp)'],
    msg: 'in',
    who: 'Bob_getRandomNumber'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v195, v196, v197, v238, v246, v253],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:75:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v261], secs: v263, time: v262, didSend: v114, from: v260 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_getRandomNumber"
        });
      const v265 = v261[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
      ;
      const v268 = await txn1.getOutput('Bob_getRandomNumber', 'v265', ctc1, v265);
      
      await stdlib.simMapSet(sim_r, 0, v260, v265);
      const v274 = stdlib.add(v238, stdlib.checkedBigNumberify('./index.rsh:86:41:decimal', stdlib.UInt_max, '1'));
      const v383 = v274;
      const v385 = v246;
      const v386 = stdlib.lt(v274, v197);
      if (v386) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v195,
          tok: v196
          });
        sim_r.txns.push({
          kind: 'from',
          to: v195,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v196
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
  const {data: [v261], secs: v263, time: v262, didSend: v114, from: v260 } = txn1;
  undefined /* setApiDetails */;
  const v265 = v261[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
  ;
  const v268 = await txn1.getOutput('Bob_getRandomNumber', 'v265', ctc1, v265);
  if (v114) {
    stdlib.protect(ctc0, await interact.out(v261, v268), {
      at: './index.rsh:74:11:application',
      fs: ['at ./index.rsh:74:11:application call to [unknown function] (defined at: ./index.rsh:74:11:function exp)', 'at ./index.rsh:76:15:application call to "notify" (defined at: ./index.rsh:75:27:function exp)', 'at ./index.rsh:75:27:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)'],
      msg: 'out',
      who: 'Bob_getRandomNumber'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v260, v265);
  const v274 = stdlib.add(v238, stdlib.checkedBigNumberify('./index.rsh:86:41:decimal', stdlib.UInt_max, '1'));
  const v383 = v274;
  const v385 = v246;
  const v386 = stdlib.lt(v274, v197);
  if (v386) {
    return;
    }
  else {
    ;
    ;
    return;
    }
  
  
  };
export async function Bob_getRandomNumber(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_getRandomNumber expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_getRandomNumber expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bob_getRandomNumber5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_getRandomNumber(uint64)uint64`],
    pure: [],
    sigs: [`Bob_getRandomNumber(uint64)uint64`]
    },
  appApproval: `BiAJAAEEAggFICigjQYmAgEAACI1ADEYQQLDKWRJIls1ASEEWzUCMRkjEkEACjEAKIEJr2ZCAo82GgAXSUEAFCI1BCM1BoH3j62VDhJENhoBQgAcNhoCFzUENhoDNhoBF0klDEAA0kkkDEAAayQSRCEFNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gATOPHBmNP9QsDT/FzX+gAgAAAAAAAABCTT+FlCwNP4WNQcxACiAAQE0/hZQZjQDVwAgNAMhBls0AyEHWzQDgTBbIwgyBjQDgThbQgFAJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJIls1/iEEWzX9gATzLQoMNP4WUDT9FlCwNP8xABJENANXMCA0/hY0/RZQARJENP80AyEGWzQDIQdbIjIGIkIA30kjDEAAXkgjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQZbNf4hB1s1/VcwIDX8gASai5F0sCM0/ogBmzT/MQASRDT/NP4WUDT9FlA0/FAoSwFXAFBnSCU1ATIGNQJCAQ1IIQiIAVgiNAESRDQESSISTDQCEhFESTUFSUoiWzX/IQRbNf6BEFs1/VcYIDX8gASjiaHBNP8WUDT+FlA0/RZQNPxQsCEIiAEVsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/FAoSwFXAFBnSCM1ATIGNQJCAJI1/zX+Nf01/DX7Nfo0/TT8DEEAJTT6NPsWUDT8FlA0/RZQNP8WUChLAVcAQGdIIQU1ATIGNQJCAFmxIrIBI7ISJLIQNPqyFDT7shGzsSKyATT/sggjshA0+rIHs7EisgEishIkshAyCbIVMgqyFDT7shGzQgAAMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 80,
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
                "name": "v196",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
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
                "name": "v196",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
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
        "internalType": "struct T5",
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
                "name": "v230",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v231",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "internalType": "struct T12",
                "name": "v261",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v265",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_getRandomNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
        "internalType": "struct T5",
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
                "name": "v230",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v231",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
                "internalType": "struct T12",
                "name": "v261",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200164d3803806200164d833981016040819052620000269162000252565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b03168385015290810151606080840191909152818401516080840152015160a082015290517f112545cf4cc4ef4cc46259a35cf4621d5a4b14828a08081bb8649d32a39f1bd99181900360c00190a1620000aa341560076200014b565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518401518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000142926002929091019062000175565b50505062000349565b81620001715760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000183906200030c565b90600052602060002090601f016020900481019282620001a75760008555620001f2565b82601f10620001c257805160ff1916838001178555620001f2565b82800160010185558215620001f2579182015b82811115620001f2578251825591602001919060010190620001d5565b506200020092915062000204565b5090565b5b8082111562000200576000815560010162000205565b604051608081016001600160401b03811182821017156200024c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156200026657600080fd5b604080519081016001600160401b03811182821017156200029757634e487b7160e01b600052604160045260246000fd5b604052835181526080601f1983011215620002b157600080fd5b620002bb6200021b565b60208501519092506001600160a01b0381168114620002d957600080fd5b80835250604084015160208301526060840151604083015260808401516060830152816020820152809250505092915050565b600181811c908216806200032157607f821691505b602082108114156200034357634e487b7160e01b600052602260045260246000fd5b50919050565b6112f480620003596000396000f3fe6080604052600436106100795760003560e01c806362d9e3e71161004b57806362d9e3e7146100f9578063832307571461010c5780639014596a14610121578063ab53f2c61461013457005b80630cf4bd23146100825780631e93b0f1146100955780632c10a159146100b95780633bc5b7bf146100cc57005b3661008057005b005b610080610090366004610e7e565b610157565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100c7366004610e7e565b610182565b3480156100d857600080fd5b506100ec6100e7366004610eaf565b6101a9565b6040516100b09190610ee2565b6100a6610107366004610f27565b6101d5565b34801561011857600080fd5b506001546100a6565b61008061012f366004610f40565b610208565b34801561014057600080fd5b5061014961022f565b6040516100b0929190610f7e565b60408051602081019091526000815261017e61017836849003840184611020565b826102cc565b5050565b60408051602081019091526000815261017e6101a336849003840184611085565b826104c7565b60408051606081018252600080825260208201819052918101919091526101cf826106b5565b92915050565b60006101df610d18565b602080820151518490526040805191820190526000815261020082826102cc565b519392505050565b60408051602081019091526000815261017e610229368490038401846110bd565b82610787565b60006060600054600280805461024490611117565b80601f016020809104026020016040519081016040528092919081815260200182805461027090611117565b80156102bd5780601f10610292576101008083540402835291602001916102bd565b820191906000526020600020905b8154815290600101906020018083116102a057829003601f168201915b50505050509050915091509091565b6102dc600560005414601361096f565b81516102f79015806102f057508251600154145b601461096f565b60008080556002805461030990611117565b80601f016020809104026020016040519081016040528092919081815260200182805461033590611117565b80156103825780601f1061035757610100808354040283529160200191610382565b820191906000526020600020905b81548152906001019060200180831161036557829003601f168201915b505050505080602001905181019061039a919061114c565b60408051338152855160208083019190915286015151518183015290519192507f20e0220c6adfa181ccdf66a11a035e7ee7bc6900d5aa40894042309f10f8f0f9919081900360600190a16103f13415601261096f565b60208381015151516040519081527ff17b4f11cf420caed94c8b7d635eb79751b0a9b2dad0fdc310214d6ab169b56a910160405180910390a1602083810180515151845233600090815260049092526040909120805460ff19166001908117825591515151910155610461610d4a565b815181516001600160a01b03918216905260208084015183519216910152604080830151825190910152606082015161049c906001906111dc565b602080830180519290925281514391015260808301519051604001526104c181610995565b50505050565b6104d7600160005414600b61096f565b81516104f29015806104eb57508251600154145b600c61096f565b60008080556002805461050490611117565b80601f016020809104026020016040519081016040528092919081815260200182805461053090611117565b801561057d5780601f106105525761010080835404028352916020019161057d565b820191906000526020600020905b81548152906001019060200180831161056057829003601f168201915b50505050508060200190518101906105959190611202565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16105ec3415600861096f565b6106066105ff3383602001516001610b06565b600961096f565b805161061e906001600160a01b03163314600a61096f565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b870151821686528b8b015185528b8401518352600297889055436001558a5180880191909152945116848a015291519083015251818501528551808203909401845260a001909452815192936106ae9391920190610d97565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561070157610701610ecc565b1415610778576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561074257610742610ecc565b600181111561075357610753610ecc565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610797600260005414601061096f565b81516107b29015806107ab57508251600154145b601161096f565b6000808055600280546107c490611117565b80601f01602080910402602001604051908101604052809291908181526020018280546107f090611117565b801561083d5780601f106108125761010080835404028352916020019161083d565b820191906000526020600020905b81548152906001019060200180831161082057829003601f168201915b50505050508060200190518101906108559190611202565b604080513381528551602080830191909152808701518051838501520151606082015290519192507feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e1969919081900360800190a16108b43415600d61096f565b80516108cc906001600160a01b03163314600e61096f565b60208084015180519082015160405161091a936108f493929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826060015114600f61096f565b610922610d4a565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015281830180516000908190528151439401939093525101526104c181610995565b8161017e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b8051604001516020820151511015610a94576109eb6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151831681850190815285516040908101518187019081528388018051516060808a0191825291518401516080808b019182526005600055436001558551978801989098529451909716928501929092525190830152925191810191909152905160a082015260c00160405160208183030381529060405260029080519060200190610a8f929190610d97565b505050565b805160208101519051610aa991906001610b1e565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610aec573d6000803e3d6000fd5b5060008080556001819055610b0390600290610e1b565b50565b6000610b1483853085610b32565b90505b9392505050565b610b29838383610c0c565b610a8f57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610b9991611285565b60006040518083038185875af1925050503d8060008114610bd6576040519150601f19603f3d011682016040523d82523d6000602084013e610bdb565b606091505b5091509150610bec82826001610cdd565b5080806020019051810190610c0191906112a1565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610c6b91611285565b60006040518083038185875af1925050503d8060008114610ca8576040519150601f19603f3d011682016040523d82523d6000602084013e610cad565b606091505b5091509150610cbe82826002610cdd565b5080806020019051810190610cd391906112a1565b9695505050505050565b60608315610cec575081610b17565b825115610cfc5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161098c565b604051806040016040528060008152602001610d4560408051808201909152600060208201908152815290565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610d4560405180606001604052806000815260200160008152602001600081525090565b828054610da390611117565b90600052602060002090601f016020900481019282610dc55760008555610e0b565b82601f10610dde57805160ff1916838001178555610e0b565b82800160010185558215610e0b579182015b82811115610e0b578251825591602001919060010190610df0565b50610e17929150610e51565b5090565b508054610e2790611117565b6000825580601f10610e37575050565b601f016020900490600052602060002090810190610b0391905b5b80821115610e175760008155600101610e52565b600060408284031215610e7857600080fd5b50919050565b600060408284031215610e9057600080fd5b610b178383610e66565b6001600160a01b0381168114610b0357600080fd5b600060208284031215610ec157600080fd5b8135610b1781610e9a565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610f0757634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b600060208284031215610f3957600080fd5b5035919050565b600060608284031215610e7857600080fd5b60005b83811015610f6d578181015183820152602001610f55565b838111156104c15750506000910152565b8281526040602082015260008251806040840152610fa3816060850160208701610f52565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff81118282101715610fe957634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610fe957634e487b7160e01b600052604160045260246000fd5b6000818303604081121561103357600080fd5b61103b610fb8565b833581526020601f198301121561105157600080fd5b611059610fef565b9150611063610fef565b602094850135815282529283015250919050565b8015158114610b0357600080fd5b60006040828403121561109757600080fd5b61109f610fb8565b8235815260208301356110b181611077565b60208201529392505050565b600081830360608112156110d057600080fd5b6110d8610fb8565b833581526040601f19830112156110ee57600080fd5b6110f6610fb8565b60208581013582526040909501358582015293810193909352509092915050565b600181811c9082168061112b57607f821691505b60208210811415610e7857634e487b7160e01b600052602260045260246000fd5b600060a0828403121561115e57600080fd5b60405160a0810181811067ffffffffffffffff8211171561118f57634e487b7160e01b600052604160045260246000fd5b604052825161119d81610e9a565b815260208301516111ad81610e9a565b806020830152506040830151604082015260608301516060820152608083015160808201528091505092915050565b600082198211156111fd57634e487b7160e01b600052601160045260246000fd5b500190565b60006080828403121561121457600080fd5b6040516080810181811067ffffffffffffffff8211171561124557634e487b7160e01b600052604160045260246000fd5b604052825161125381610e9a565b8152602083015161126381610e9a565b6020820152604083810151908201526060928301519281019290925250919050565b60008251611297818460208701610f52565b9190910192915050565b6000602082840312156112b357600080fd5b8151610b178161107756fea2646970667358221220397e30d01d3ffd06312157adb9c8b62d3be5bd7064c173ff5f807aed300ce7c564736f6c634300080c0033`,
  BytecodeLen: 5709,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:60:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:94:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:71:58:after expr stmt semicolon',
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
  "Bob_getRandomNumber": Bob_getRandomNumber
  };
export const _APIs = {
  Bob: {
    getRandomNumber: Bob_getRandomNumber
    }
  };
