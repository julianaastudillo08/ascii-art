const FONTS={
block:{A:[" ██ ","█  █","████","█  █","█  █"],B:["███ ","█  █","███ ","█  █","███ "],C:[" ███","█   ","█   ","█   "," ███"],D:["███ ","█  █","█  █","█  █","███ "],E:["████","█   ","███ ","█   ","████"],F:["████","█   ","███ ","█   ","█   "],G:[" ███","█   ","█ ██","█  █"," ███"],H:["█  █","█  █","████","█  █","█  █"],I:["███"," █ "," █ "," █ ","███"],J:["████","  █ ","  █ ","█ █ "," ██ "],K:["█  █","█ █ ","██  ","█ █ ","█  █"],L:["█   ","█   ","█   ","█   ","████"],M:["█   █","██ ██","█ █ █","█   █","█   █"],N:["█  █","██ █","█ ██","█  █","█  █"],O:[" ██ ","█  █","█  █","█  █"," ██ "],P:["███ ","█  █","███ ","█   ","█   "],Q:[" ██ ","█  █","█  █","█ █ "," █ █"],R:["███ ","█  █","███ ","█ █ ","█  █"],S:[" ███","█   "," ██ ","   █","███ "],T:["███"," █ "," █ "," █ "," █ "],U:["█  █","█  █","█  █","█  █"," ██ "],V:["█  █","█  █","█  █"," █ █","  █ "],W:["█   █","█   █","█ █ █","██ ██","█   █"],X:["█  █"," █ █","  █ "," █ █","█  █"],Y:["█  █"," █ █","  █ ","  █ ","  █ "],Z:["████","  █ "," █  ","█   ","████"]," ":["  ","  ","  ","  ","  "]},
slim:{A:["▄▀█","█▀█","█ █"],B:["█▄▄","█▄█","█▄▄"],C:["▄▀█","█▄▄","▀▄█"],D:["█▀▄","█ █","█▄▀"],E:["█▀▀","██ ","█▄▄"]," ":[" "," "," "]},
dots:{A:["·█·","█·█","███","█·█","█·█"],B:["██·","█·█","██·","█·█","██·"]," ":["··","··","··","··","··"]}
};
function render(){
  const raw=document.getElementById("text").value.toUpperCase().replace(/[^A-Z ]/g,"");
  const style=document.getElementById("style").value;
  const font=FONTS[style];
  const rows=font.A.length;
  const lines=Array.from({length:rows},()=>[]);
  for(const ch of raw){
    const glyph=font[ch]||font[" "]||Array(rows).fill("?");
    glyph.forEach((row,i)=>lines[i].push(row));
  }
  document.getElementById("out").textContent=lines.map(r=>r.join("  ")).join("\n")||"(empty)";
}
document.getElementById("go").onclick=render;
document.getElementById("text").oninput=render;
document.getElementById("style").onchange=render;
document.getElementById("copy").onclick=()=>navigator.clipboard.writeText(document.getElementById("out").textContent);
render();
