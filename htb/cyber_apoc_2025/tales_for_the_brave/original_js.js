var _$_8b18 = function (k, j) {
  var y = k.length;
  var o = [];
  for (var m = 0; m < y; m++) {
    o[m] = k.charAt(m);
  }
  ;
  for (var m = 0; m < y; m++) {
    var b = j * (m + 143) + j % 34726;
    var r = j * (m + 91) + j % 23714;
    var v = b % y;
    var s = r % y;
    var f = o[v];
    o[v] = o[s];
    o[s] = f;
    j = (b + r) % 4449625;
  }
  ;
  var a = String.fromCharCode(127);
  return o.join('').split("%").join(a).split("#1").join("%").split("#0").join("#").split(a);
}('shfnemBLlerpitrtgt%ld%DmvuFeceaEaladerletdtdtsputpnielEvae%%iansn%eimkei%guLt%d%i%tsv%ds%eltee%ewssmnnvdsaiyrroeesmlc@Feroieoel%bt%lIota', 3827531);
document[_$_8b18[3]](_$_8b18[14])[_$_8b18[13]](_$_8b18[0], function (e) {
  e[_$_8b18[1]]();
  const emailField = document[_$_8b18[3]](_$_8b18[2]);
  const descriptionField = document[_$_8b18[3]](_$_8b18[4]);
  let isValid = true;
  if (!emailField[_$_8b18[5]]) {
    emailField[_$_8b18[8]][_$_8b18[7]](_$_8b18[6]);
    isValid = false;
    setTimeout(() => {
      return emailField[_$_8b18[8]][_$_8b18[9]](_$_8b18[6]);
    }, 500);
  }
  ;
  if (!isValid) {
    return;
  }
  ;
  const emailValue = emailField[_$_8b18[5]];
  const specialKey = emailValue[_$_8b18[11]](_$_8b18[10])[0];
  const desc = parseInt(descriptionField[_$_8b18[5]], 10);
  f(specialKey, desc);
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
var _$_5975 = function (o, u) {
  var g = o.length;
  var t = [];
  for (var w = 0; w < g; w++) {
    t[w] = o.charAt(w);
  }
  ;
  for (var w = 0; w < g; w++) {
    var z = u * (w + 340) + u % 19375;
    var a = u * (w + 556) + u % 18726;
    var h = z % g;
    var q = a % g;
    var b = t[h];
    t[h] = t[q];
    t[q] = b;
    u = (z + a) % 5939310;
  }
  ;
  var k = String.fromCharCode(127);
  return t.join('').split("%").join(k).split("#1").join("%").split("#0").join("#").split(k);
}('%dimfT%mVlzx%degpatf5bfnrG%6tSiqth5at%easpi0emILmcim%e%/!=eZtnHf%e7cf+3rstO%%.D0i8p3t/Sphryoa%IL0rin%rcAeF6%nsenoYaLeQ5Natp4CrSrCGttUtZrdG%rlxe2poa2rdg=9fQs%&j_of0ButCO tb=r35DyCee8tgaCf=I=%rAQa4fe%ar0aonsGT_v/NgoPouP2%eoe%ue3tl&enTceynCtt4FBs%s/rBsAUEhradnkrstfgd?%t%xeyhcedeTo%olghXMsaocrB3aaDBr5rRa16Cjuct%cOee5lWE_ooo+Ka4%d3TysnehshstepId%%Ieoaycug:i_m=%%mjp0tgaiidoei.prn%sw1d', 4129280);
function f(oferkfer, icd) {
  const channel_id = -1002496072246;
  var enc_token = _$_5975[0];
  if (oferkfer === G(_$_5975[1]) && CryptoJS[_$_5975[7]](sequence[_$_5975[6]](_$_5975[5]))[_$_5975[4]](CryptoJS[_$_5975[3]][_$_5975[2]]) === _$_5975[8]) {
    var decrypted = CryptoJS[_$_5975[12]][_$_5975[11]](enc_token, CryptoJS[_$_5975[3]][_$_5975[9]][_$_5975[10]](oferkfer), {
      drop: 192
    })[_$_5975[4]](CryptoJS[_$_5975[3]][_$_5975[9]]);
    var HOST = _$_5975[13] + String[_$_5975[14]](0x2f) + String[_$_5975[14]](0x62) + String[_$_5975[14]](0x6f) + String[_$_5975[14]](0x74) + decrypted;
    var xhr = new XMLHttpRequest();
    xhr[_$_5975[15]] = function () {
      if (xhr[_$_5975[16]] == XMLHttpRequest[_$_5975[17]]) {
        const resp = JSON[_$_5975[10]](xhr[_$_5975[18]]);
        try {
          const link = resp[_$_5975[20]][_$_5975[19]];
          window[_$_5975[23]][_$_5975[22]](link);
        } catch (error) {
          alert(_$_5975[24]);
        }
      }
    };
    xhr[_$_5975[29]](_$_5975[25], HOST + String[_$_5975[14]](0x2f) + _$_5975[26] + icd + _$_5975[27] + channel_id + _$_5975[28]);
    xhr[_$_5975[30]](null);
  } else {
    alert(_$_5975[24]);
  }
}
;
;
var sequence = [];
;
function l() {
  sequence.push(this.id);
}
;
;
var _$_ead6 = ["input[class=cb]", "querySelectorAll", "length", "change", "addEventListener"];
var checkboxes = document[_$_ead6[1]](_$_ead6[0]);
for (var i = 0; i < checkboxes[_$_ead6[2]]; i++) {
  checkboxes[i][_$_ead6[4]](_$_ead6[3], l);
}