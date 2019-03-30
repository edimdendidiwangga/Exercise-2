const insert = num => {
  document.form.textview.value += num;
}
  
const clean = function(){
  document.form.textview.value="";
}

function equal(){
  let str = document.form.textview.value;
  str = str.replace(/x/g,'*');
  str = str.replace(/÷/g,'/');
  
  let result = eval(str);
  document.form.textview.value = result;
  const expresion = `${str}=${result}`;
  document.getElementById("expresion").textContent = expresion;
}

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  let reg = /^[\d-+*/()%]+$/;
  if (keyName == 'Enter' || keyName == '=') {
    equal();
  }
  if (reg.test(keyName)) {
    insert(keyName);
  }
  if (keyName == 'Backspace') {
    let val = document.form.textview.value;
    document.form.textview.value = val.slice(0, -1);
  }
  if (keyName == '.'){
    let val = document.form.textview.value;
    if (val.charAt(val.length-1) != '.')
      insert(keyName);
  }
});