// 這個範例來自「小恐龍」的樂透開獎程式，不是毛豆自己寫的
var loto = new Array();
var sel = new Array();
var s_msg = "";
var m_msg = "";

function chk_select() {
  chk = 0;
  s_msg = "自選：";
  for (i = 0; i <= 41; i++) {
    if (document.LOTO.SN[i].checked == true) {
      sel[chk] = i + 1;
      s_msg += sel[chk] + " ";
      chk++;
    }
  }
  if (chk != 6) return false;
  return true;
}

function chk_match() {
  chk = 0;
  m_msg = "對中：";
  for (i = 0; i <= 5; i++) {
    for (j = 0; j <= 5; j++) {
      if (loto[i] == sel[j]) {
        m_msg += loto[i] + " ";
        chk++;
      }
    }
  }
  msg = s_msg + "\n\n" + m_msg;
  if (chk == 6) { msg += "\n\n恭喜你中了頭獎"; }
  else if (chk == 5) {
    ok = 0;
    for (i = 0; i <= 5; i++) {
      if (loto[6] == sel[i]) ok = 1;
    }
    if (ok == 1) { msg += loto[6] + "\n\n恭喜你中了二獎"; }
    else { msg += "\n恭喜你中了三獎"; }
  }
  else if (chk == 4) { msg += "\n\n恭喜你中了四獎"; }
  else if (chk == 3) { msg += "\n\n恭喜你中了普獎 200 元"; }
  else if (chk == 2) { msg += "\n\n可惜只中了二個數字"; }
  else if (chk == 1) { msg += "\n\n可惜只中了一個數字"; }
  else { msg += "\n\n怎麼連個數字都沒中..唉...."; }
  alert(msg);
}

function lotogo() {
  if (!chk_select()) {
    alert("你的選號不對哦!");
    return false;
  }
  init();
  loto_rnd();
  chk_match();
}

function loto_rnd() {
  chk = 0;
  while (chk < 7) {
    delay();
    loto[chk] = 1 + Math.floor(42 * Math.random());
    document.LOTO.N[chk].value = loto[chk];
    ok = 0;
    for (i = 0; i <= 6; i++) {
      if (loto[chk] == loto[i] && chk != i) ok = 1;
    }
    if (ok == 0) chk++;
  }
}

function init() {
  for (i = 0; i <= 6; i++) {
    document.LOTO.N[i].value = "@";
    loto[i] = 0;
  }
}

function reset() {
  init();
  for (i = 0; i <= 41; i++) document.LOTO.SN[i].checked = false;
}

function delay() { for (i = 0; i <= 8000; i++); }

function lotochk() {
  if (!chk_select()) {
    alert("你的選號不對哦!");
    return false;
  }
  for (i = 0; i <= 6; i++) {
    loto[i] = document.LOTO.N[i].value * 1;
    if (loto[i] < 1 || loto[i] > 42) {
      alert("要對獎的數字不對哦!");
      return false;
    }
  }
  chk_match();
}