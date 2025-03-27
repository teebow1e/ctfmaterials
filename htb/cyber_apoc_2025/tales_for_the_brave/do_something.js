var _$_8b18 = ['submit', 'preventDefault', 'email', 'getElementById', 'descriptionField', 'value', 'shake', 'add', 'classList', 'remove', '@', 'split', 'log', 'addEventListener', 'newsletterForm'];


// document[_$_8b18[3]](_$_8b18[14])[_$_8b18[13]](_$_8b18[0], function (e) {
//   e[_$_8b18[1]]();
//   const emailField = document[_$_8b18[3]](_$_8b18[2]);
//   const descriptionField = document[_$_8b18[3]](_$_8b18[4]);
//   let isValid = true;
//   if (!emailField[_$_8b18[5]]) {
//     emailField[_$_8b18[8]][_$_8b18[7]](_$_8b18[6]);
//     isValid = false;
//     setTimeout(() => {
//       return emailField[_$_8b18[8]][_$_8b18[9]](_$_8b18[6]);
//     }, 500);
//   }
//   ;
//   if (!isValid) {
//     return;
//   }
//   ;
//   const emailValue = emailField[_$_8b18[5]];
//   const specialKey = emailValue[_$_8b18[11]](_$_8b18[10])[0];
//   const desc = parseInt(descriptionField[_$_8b18[5]], 10);
//   f(specialKey, desc);
// });
// ;

document['getElementById']('newsletterForm')['addEventListener']('submit', function (e) {
  e['preventDefault']();
  const emailField = document['getElementById']('email');
  const descriptionField = document['getElementById']('descriptionField');
  let isValid = true;
  if (!emailField['value']) {
    emailField['classList']['add']('shake');
    isValid = false;
    setTimeout(() => {
      return emailField['classList']['remove']('shake');
    }, 500);
  }
  ;
  if (!isValid) {
    return;
  }
  ;
  const emailValue = emailField['value'];
  const specialKey = emailValue['split']('@')[0];
  const desc = parseInt(descriptionField['value'], 10);
  doSomethingTelegram(specialKey, desc);
});
;

function G(r) {
  return function () {
    var r = Array.prototype.slice.call(arguments);
    var o = r.shift();
    return r.reverse().map(function (r, t) {
      return String.fromCharCode(r - o - 7 - t);
    }).join('');
  }(43, 106, 167, 103, 163, 98) + 1354343..toString(36).toLowerCase() + 21..toString(36).toLowerCase().split('').map(function (r) {
    return String.fromCharCode(r.charCodeAt() + -13);
  }).join('') + 4..toString(36).toLowerCase() + 32..toString(36).toLowerCase().split('').map(function (r) {
    return String.fromCharCode(r.charCodeAt() + -39);
  }).join('') + 381..toString(36).toLowerCase().split('').map(function (r) {
    return String.fromCharCode(r.charCodeAt() + -13);
  }).join('') + function () {
    var r = Array.prototype.slice.call(arguments);
    var o = r.shift();
    return r.reverse().map(function (r, t) {
      return String.fromCharCode(r - o - 60 - t);
    }).join('');
  }(42, 216, 153, 153, 213, 187);
}

;
var _$_5975 = ['nZiIjaXAVuzO4aBCf5eQ5ifQI7rUBI3qy/5t0Djf0pG+tCL3Y2bKBCFIf3TZ0Q==', 's3cur3k3y', 'Base64', 'enc', 'toString', '', 'join', 'SHA256', '18m0oThLAr5NfLP4hTycCGf0BIu0dG+P/1xvnW6O29g=', 'Utf8', 'parse', 'decrypt', 'RC4Drop', 'https://api.telegram.org', 'fromCharCode', 'onreadystatechange', 'readyState', 'DONE', 'responseText', 'text', 'result', 'log', 'replace', 'location', 'Form submitted!', 'GET', 'forwardMessage?chat_id=', '&from_chat_id=', '&message_id=5', 'open', 'send'];

// function f(oferkfer, icd) {
//     const channel_id = -1002496072246;
//     var enc_token = _$_5975[0];
//     if (oferkfer === G(_$_5975[1]) && CryptoJS[_$_5975[7]](sequence[_$_5975[6]](_$_5975[5]))[_$_5975[4]](CryptoJS[_$_5975[3]][_$_5975[2]]) === _$_5975[8]) {
//       var decrypted = CryptoJS[_$_5975[12]][_$_5975[11]](enc_token, CryptoJS[_$_5975[3]][_$_5975[9]][_$_5975[10]](oferkfer), {
//         drop: 192
//       })[_$_5975[4]](CryptoJS[_$_5975[3]][_$_5975[9]]);
//       var HOST = _$_5975[13] + String[_$_5975[14]](0x2f) + String[_$_5975[14]](0x62) + String[_$_5975[14]](0x6f) + String[_$_5975[14]](0x74) + decrypted;
//       var xhr = new XMLHttpRequest();
//       xhr[_$_5975[15]] = function () {
//         if (xhr[_$_5975[16]] == XMLHttpRequest[_$_5975[17]]) {
//           const resp = JSON[_$_5975[10]](xhr[_$_5975[18]]);
//           try {
//             const link = resp[_$_5975[20]][_$_5975[19]];
//             window[_$_5975[23]][_$_5975[22]](link);
//           } catch (error) {
//             alert(_$_5975[24]);
//           }
//         }
//       };
//       xhr[_$_5975[29]](_$_5975[25], HOST + String[_$_5975[14]](0x2f) + _$_5975[26] + icd + _$_5975[27] + channel_id + _$_5975[28]);
//       xhr[_$_5975[30]](null);
//     } else {
//       alert(_$_5975[24]);
//     }
//   }

function doSomethingTelegram(encKey, chatID) {
  const channel_id = -1002496072246;
  var enc_token = 'nZiIjaXAVuzO4aBCf5eQ5ifQI7rUBI3qy/5t0Djf0pG+tCL3Y2bKBCFIf3TZ0Q==';

  if (encKey === '0p3r4t10n_4PT_Un10n' && CryptoJS['SHA256'](sequence['join'](''))['toString'](CryptoJS['enc']['Base64']) === '18m0oThLAr5NfLP4hTycCGf0BIu0dG+P/1xvnW6O29g=') {


    var decrypted = CryptoJS['RC4Drop']['decrypt'](enc_token, CryptoJS['enc']['Utf8']['parse'](encKey), {
      drop: 192
    })['toString'](CryptoJS['enc']['Utf8']);

    // decrypted = '7767830636:AAF5Fej3DZ44ZZQbMrkn8gf7dQdYb3eNxbc'

    var HOST = 'https://api.telegram.org' + '/bot' + decrypted;
    // HOST = https://api.telegram.org/bot7767830636:AAF5Fej3DZ44ZZQbMrkn8gf7dQdYb3eNxbc

    var xhr = new XMLHttpRequest();


    xhr['onreadystatechange'] = function () {
      if (xhr['readyState'] == XMLHttpRequest['DONE']) {
        const resp = JSON['parse'](xhr['responseText']);
        try {
          const link = resp['result']['text'];
          window['location']['replace'](link);
        } catch (error) {
          alert('Form submitted!');
        }
      }
    };
    xhr['open']('GET', HOST + '/' + 'forwardMessage?chat_id=' + chatID + '&from_chat_id=' + channel_id + '&message_id=5');
    xhr['send'](null);
  } else {
    alert('Form submitted!');
  }
}

var sequence = [];

function pushToSequence() {
  sequence.push(this.id);
}

var _$_ead6 = ["input[class=cb]", "querySelectorAll", "length", "change", "addEventListener"];
// var checkboxes = document[_$_ead6[1]](_$_ead6[0]);
// for (var i = 0; i < checkboxes[_$_ead6[2]]; i++) {
//   checkboxes[i][_$_ead6[4]](_$_ead6[3], l);
// }

// the data we use will determine the decrypted data?
var checkboxes = document['querySelectorAll']('input[class=cb]');
for (var i = 0; i < checkboxes['length']; i++) {
  checkboxes[i]['addEventListener']('change', pushToSequence);
}
