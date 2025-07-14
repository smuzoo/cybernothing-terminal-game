(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const E of n.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&i(E)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();let L=!1,N=0,I=!1,d=null,R=0,C=null,D=0;const h=[`> IDLE NOTICE:
   INACTION IS VALID.
   BUT ARE YOU *CHOOSING* IT, OR JUST STUCK?`,"> SYSTEM: Sometimes, the only way out is to do... nothing.","> SYSTEM: The final gesture is the refusal to gesture.","> SYSTEM: You are close. But not here. Wait for the final question.","> SYSTEM: Inaction is a path. But is it the right moment?","> SYSTEM: Not every prompt needs a key."],H=["secret.txt","passwords.docx","todo.md","bear.png","memories.zip","final_delete.exe","laughter.wav","photo_001.jpg","sacrifice.dll","karma.log","buddha.png","eye.dat","glitch.sys","README.md","system.log","bear.log","void.txt","error.log","wall.txt","projector.img"],Y=document.querySelector("#app");Y.innerHTML=`
  <div id="terminal-container">
    <pre id="terminal-output"></pre>
    <div id="terminal-input-line" style="display:none;">
      <span>&gt;</span> <input id="terminal-input" autocomplete="off" />
    </div>
  </div>
  <div id="glitch-overlay"></div>
`;const m=document.getElementById("terminal-output"),U=document.getElementById("terminal-input-line"),o=document.getElementById("terminal-input"),S=document.getElementById("terminal-container");function e(s,t,a=8){const i=/^> TIP:.*$/m,r=/scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha, scan eye, scan user, scan network/;let n=s.split(`
`),E=0;function T(){if(E>=n.length){t&&t();return}let c=n[E],f=!1;if(i.test(c)){let O=document.createElement("span");O.className="term-tip",O.textContent=c,m.appendChild(O),m.appendChild(document.createElement("br")),f=!0}else if(r.test(c)){let O=document.createElement("span");O.className="term-cmdlist",O.textContent=c,m.appendChild(O),m.appendChild(document.createElement("br")),f=!0}if(f)E++,setTimeout(T,0);else{let M=function(){O<c.length?(m.textContent+=c[O++],setTimeout(M,a)):(m.textContent+=`
`,setTimeout(()=>{E++,T()},0))};var A=M;let O=0;M();return}}T()}function l(s,t=.08,a=.02){const i=["#","@","%","$","&","*","!","?","0","1","Ξ","░","▒","▓"],r={a:"a̷",b:"b̸",c:"c̷",d:"d̸",e:"e̶",f:"f̷",g:"g̸",h:"h̷",i:"i̸",j:"j̷",k:"k̵",l:"l̷",m:"m̸",n:"n̸",o:"o̷",p:"p̸",q:"q̷",r:"r̸",s:"s̵",t:"t̷",u:"u̸",v:"v̷",w:"w̸",x:"x̷",y:"y̸",z:"z̷",A:"A̷",B:"B̸",C:"C̷",D:"D̸",E:"E̶",F:"F̷",G:"G̸",H:"H̷",I:"I̸",J:"J̷",K:"K̵",L:"L̷",M:"M̸",N:"N̸",O:"O̷",P:"P̸",Q:"Q̷",R:"R̸",S:"S̵",T:"T̷",U:"U̸",V:"V̷",W:"W̸",X:"X̷",Y:"Y̸",Z:"Z̷"};let n="";for(let E of s)/[a-zA-Z]/.test(E)&&Math.random()<a?n+=r[E]||E:/[a-zA-Z]/.test(E)&&Math.random()<t?n+=i[Math.floor(Math.random()*i.length)]:n+=E;return n}function w(s=180){S.classList.add("glitch-blur"),setTimeout(()=>S.classList.remove("glitch-blur"),s)}function P(s=180){S.classList.add("glitch-contrast"),setTimeout(()=>S.classList.remove("glitch-contrast"),s)}function v(s=120){S.classList.add("glitch-shadow"),setTimeout(()=>S.classList.remove("glitch-shadow"),s)}function G(s=120){S.classList.add("glitch-transform"),setTimeout(()=>S.classList.remove("glitch-transform"),s)}function b(s=120){const t=document.getElementById("glitch-overlay");t.innerHTML="",t.style.display="block",t.style.pointerEvents="none",t.style.position="absolute",t.style.left=S.offsetLeft+"px",t.style.top=S.offsetTop+"px",t.style.width=S.offsetWidth+"px",t.style.height=S.offsetHeight+"px";for(let a=0;a<3+Math.floor(Math.random()*3);a++){const i=document.createElement("div");i.className="glitch-block",i.style.top=Math.random()*100+"%",i.style.left=Math.random()*100+"%",i.style.width=20+Math.random()*60+"px",i.style.height=6+Math.random()*18+"px",i.style.background=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${.18+Math.random()*.22})`,t.appendChild(i)}setTimeout(()=>{t.innerHTML="",t.style.display="none"},s)}function g(){const s=[w,P,v,G,b],t=2+Math.floor(Math.random()*3),a=s.sort(()=>.5-Math.random());for(let i=0;i<t;i++)a[i](220+Math.random()*100)}function F(){g()}function y(){const s=navigator.userAgentData&&navigator.userAgentData.platform?navigator.userAgentData.platform:navigator.platform||"unknown",t=navigator.userAgent||"unknown",a=`Browser JS ${navigator.appVersion}`,i=window.location.pathname,r=navigator.language||"unknown",n=`${window.screen.width}x${window.screen.height}`,T=new Date().toLocaleTimeString();return{username:s,os:t,python:a,cwd:i,lang:r,screenRes:n,time:T}}function B(){const s=y(),t=`MOKSHA CORP. TERMINAL SESSION #128
----------------------------------
USER TYPE: KARMIC PRISONER
STATUS: FORMER CYBERMONK → DATA TERRORIST

> IDEOLOGY:
   MOKSHA CORP BELIEVES:
   "NIRVANA = DELETION OF SELF"
   YOU ONCE WORKED HERE.
   THEN YOU TRIED TO DESTROY IT.

> OBJECTIVE:
   FIND AND EXECUTE FINAL_DELETE.EXE
   (OR DON'T. THAT'S ALSO AN OPTION)

> SYSTEM NOTE:
   USERNAME: ${s.username}
   OS: ${s.os}
   JS: ${s.python}
   LANG: ${s.lang}
   SCREEN: ${s.screenRes}
   TIME: ${s.time}
   CWD: ${s.cwd}

> TIP: Type 'help' for available commands and hidden hints.

PRESS ENTER TO BEGIN...`;L=!1,e(t,()=>{function a(){document.removeEventListener("keydown",i),document.removeEventListener("click",r),U.style.display="",o.focus(),L=!0}function i(n){n.key==="Enter"&&a()}function r(){a()}document.addEventListener("keydown",i),document.addEventListener("click",r)},2)}B();o.addEventListener("keydown",s=>{if(s.key==="Enter"){if(!L){L=!0,o.value="";return}const t=o.value.trim().toLowerCase();if(I&&document.activeElement===o&&(t===""||t==="y"||t==="n")){I=!1,d&&clearTimeout(d),d=null,o.value="",o.focus(),t?t==="y"?e(`
> OPERATION CONFIRMED.`,()=>{e("> SYSTEM: OH, YOU REALLY THOUGHT IT WOULD BE THAT EASY?",()=>{setTimeout(()=>{e("> SARCASM MODULE: ENABLED. DELETION OF SELF IS NOT A MENU OPTION.",()=>{setTimeout(()=>{e("> TRY AGAIN. OR DON'T. (IT'S ALL THE SAME)",()=>{askSelfDestruct()},2)},1e3)},2)},1e3)},2)},2):t==="n"&&e(`
> OPERATION CANCELLED.`,()=>{e("> GOOD INSTINCT. BUT YOU'RE STILL INSIDE THE LOOP.",()=>{e("> THINK DEEPER. THE EXIT IS NOT WHERE YOU'RE LOOKING.",()=>{askSelfDestruct()},2)},2)},2):e(`
> ...NO RESPONSE DETECTED...`,()=>{e("> You are even closer to the answer. There is still one option you haven't tried.",()=>{askSelfDestruct()},2)},2);return}const a=o.value;a.trim()!==""&&(m.textContent+=`> ${a}
`),(Math.random()<.33||/run|delete|final|void|glitch|error|buddha|eye|sudo|reality|scan|cat|ls|history|philosophy|exit|meditate|whoami/i.test(a))&&g(),W(a),o.value="",R++,_(),p()}});function p(){C&&clearTimeout(C);const s=1e4+Math.random()*1e4;C=setTimeout(()=>{Math.random()<.35&&g(),D<h.length?e(l(`
${h[D]}`,.08,.04),()=>{D++,p()},4):e(l(`
${h[h.length-1]}`,.08,.04),p,4)},s)}function _(){R===3&&e(`
> HINT:
   TRY 'scan room', 'scan wall', 'scan projector', 'scan bear', 'scan self', 'scan void', 'scan buddha', 'scan eye', 'scan user'...
   (OR JUST TRY WORDS)`),R===7&&e(`
> SYSTEM ALERT:
   ALL ACTIONS PREDICTED
   YOUR 'CHOICES' ARE ILLUSIONS`),R===12&&e(`
> SYSTEM: Sometimes, the only way out is to do... nothing.`),R===16&&e(`
> SYSTEM: The final gesture is the refusal to gesture.`),R===20&&e(`
> SYSTEM: You are close. But not here. FIND the final question and...`)}function W(s){const t=s.trim().toLowerCase();if(!t)return;if(t==="help"){e(`
> MOKSHA TERMINAL HELP
--------------------------------
CORE COMMANDS:
  ls ................ list files
  cat <file> ........ read file
  scan <target> ..... analyze object
  history .......... past attempts
  run .............. execute program

ADVANCED:
  sudo rm -rf /self ..... self-destruct
  query --philosophy ....,. ask system

CYBERNIRVANA EXTRAS:
  scan network ...... network scan
  whoami ............ show user/system info
  reality check ..... meta reality fragments

> TIP:
   YOU CAN SCAN ALMOST ANYTHING:
     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,
 scan eye, scan user, scan network
   (OR DON'T DO ANYTHING. THE CHOICE IS YOURS)
`,()=>o.focus(),2);return}if(t==="ls"){e(`
> FILES:
 - FINAL_DELETE.exe (LOCKED)
 - memories/ (CORRUPTED)
 - bear.log
 - system.log (PARTIAL)`,()=>o.focus(),2);return}if(t.startsWith("cat")){const n=t.slice(3).trim().toLowerCase();n?n.includes("bear")?e(`
> bear.log CONTENT:
   "p...a...p...a..." (LOOP)
   LAST MODIFIED: 12.12.2123`,()=>o.focus(),2):n.includes("memories")?e(`
> ERROR: MEMORY CORRUPTION
> FRAGMENTS RECOVERED:
   - LAUGHTER.WAV (CORRUPTED)
   - PHOTO_001.JPG (38% RECOVERED)`,()=>o.focus(),2):n.includes("system")?e(`
> system.log EXCERPT:
   ATTEMPT #127: FAILED (USER ERROR)
   ATTEMPT #126: FAILED (SYSTEM OVERRIDE)
   ATTEMPT #125: FAILED (UNKNOWN)
   ATTEMPT #124: INACTION DETECTED (NO ERROR)
   ATTEMPT #123: LAUGHTER.WAV PLAYED (UNEXPECTED)
   ATTEMPT #122: FINAL_DELETE.EXE ABORTED (DOUBT)`,()=>{e(`
> SYSTEM: The logs repeat, but the true ending requires a different kind of deletion...`,()=>{e(l("> SYSTEM HINT: Sometimes, the answer is hidden in plain sight: S_U_DooO  R_  -rf  /SF",.12,.08),()=>o.focus(),2)},2)},2):n==="laughter.wav"?e(`
> LAUGHTER.WAV:
   [CORRUPTED LAUGHTER]
   SPECTRUM: NON-HUMAN
   SYSTEM: FILE CANNOT BE DELETED
   NOTE: IT SOUNDS LIKE YOU...
   > HINT: Some things cannot be deleted by normal means.`,()=>o.focus(),2):n==="photo_001.jpg"?e(`
> PHOTO_001.JPG:
   [GLITCHED IMAGE: CHILD, BEAR, WALL]
   FRAGMENTED, 38% RECOVERED
   > REALITY CHECK: What you see is not always what is real.
   > SYSTEM: Sometimes, to erase a memory, you must erase yourself.
   (But how?)`,()=>o.focus(),2):e(`
> ERROR: FILE '${n}' NOT FOUND
> (DOES IT MATTER?)`,()=>o.focus(),2):e(`
> ERROR: No file specified for 'cat'. Try: cat <file>`,()=>o.focus(),2);return}if(t.startsWith("scan")){const n=t.slice(4).trim();if(!n)e(`
> ERROR: No target specified for 'scan'. Try: scan <target>`,()=>o.focus(),2);else if(n==="room")e(`
> SERVER ROOM SCAN:
   - FLOOR: 128 BROKEN SSD DRIVES
   - WALL: GRAFFITI "127 → 128"
   - OBJECTS:
      * HOLOGRAM PROJECTOR (ACTIVE)
      * DECOMMISSIONED ROBOT BEAR

> SYSTEM NOTE:
   THIS PLACE LOOKS FAMILIAR.
   TOO FAMILIAR.`,()=>o.focus(),2);else if(n==="bear")e(`
> ROBOT BEAR ANALYSIS:
   - MODEL: MOKSHA-GUARDIAN v12.7
   - PURPOSE: EMOTIONAL ANCHOR
   - STATUS: HEADLESS BUT OPERATIONAL

> AUDIO LOG:
   "p...a...p...a..." (LOOPED)
   SOURCE: UNKNOWN CHILD VOICE

> TRUTH:
   THIS WAS NEVER YOURS.`,()=>o.focus(),2);else if(n==="self"){e(`
> SELF-SCAN RESULTS:
   - NAME: [REDACTED]
   - STATUS: NONEXISTENT
   - KARMA LEVEL: 0

> DIAGNOSIS:
   YOU ARE:
   1. A GHOST IN THE MACHINE
   2. AN ERROR IN THE SYSTEM
   3. NONE OF THE ABOVE`,()=>{e(`
> HINT: The answer may be closer than you think. What if you could remove yourself from the system?`,()=>{e(l("> SYSTEM: s_u_d_o  r_m  -rf  /s_e_l_f ...",.1,.07),()=>o.focus(),2)},2)},2);return}else if(n==="wall"){let E="";R>4&&(E=`
   - HINT: Some walls can only be broken from the inside. What if you could erase the one who is reading?`),e(`> WALL SCAN:
   - GRAFFITI: '127 → 128'
   - SCRATCHES: COUNTLESS
   - MESSAGE: 'You will not disappear as long as you are reading this.'
   - TEXTURE: FEELS LIKE MEMORY`+E,()=>{e(`
> SYSTEM: The next step is not about the system, but about you.`,()=>o.focus(),2)},2);return}else if(n==="projector")e(`> HOLOGRAM PROJECTOR SCAN:
   - STATUS: FLICKERING
   - IMAGE: UNKNOWN CHILD, TORN KIMONO
   - GLITCH: FACES OVERLAP, PIXELS BLEED
   - SYSTEM: 'ERROR: IDENTITY COLLISION'`,()=>o.focus(),2);else if(n==="void")e(`> VOID SCAN:
   - YOU STARE INTO THE VOID
   - IT STARES BACK
   - [ΞΞΞΞΞΞΞΞΞΞΞ]`,()=>o.focus(),2);else if(n==="error")e(`> ERROR SCAN:
   - SYSTEM ERROR: ERROR
   - ERROR ERROR ERROR
   - [ΞΞΞΞΞ]`,()=>o.focus(),2);else if(n==="glitch")e(`
> GLITCH SCAN:
[ΞΞΞΞΞ]
| o o |
|  ^  |
| '-' |
[_____]
   - GLITCH LEVEL: MAX
   - SYSTEM: UNSTABLE`,()=>o.focus(),2);else if(n==="buddha")e(`
> BUDDHA-GLITCH SCAN:
(   (   (   (
 )   )   )   )
(   (   (   (
 )  BUDDHA  )
(  -GLITCH- )
 )   )   )   )
(   (   (   (
[ΞΞΞΞΞΞΞΞΞΞΞ]
   - ENLIGHTENMENT: 404
   - MEMORY: FRAGMENTED
   - SYSTEM: LAUGHS`,()=>o.focus(),2);else if(n==="eye")e(`
> EYE SCAN:
 .-""""-.
/        \\n/  .-  .-.\\
|  /    \\  |
|  \\__/  |
 \\        /
  '-.__.-'
   (    )
    '--'
   [EYE]
   - IT SEES YOU
   - YOU SEE IT
   - WHO IS WATCHING?`,()=>o.focus(),2);else if(n==="user"){const E=y();let T=H.slice().sort(()=>.5-Math.random()).slice(0,5+Math.floor(Math.random()*3));e(`
> USER SCAN:
   - USERNAME: ${E.username}
   - OS: ${E.os}
   - JS: ${E.python}
   - LANG: ${E.lang}
   - SCREEN: ${E.screenRes}
   - CWD: ${E.cwd}
   - NOTE: THE SYSTEM SEES YOU.
   - HOME FILES: ${T.join(", ")}`,()=>{e(`
> HINT: The answer may be closer than you think. What if you could remove yourself from the system?`,()=>{e(l("> SYSTEM: s_u_d_o  r_m  -rf  /s_e_l_f ...",.1,.07),()=>o.focus(),2)},2)},2);return}if(n==="network"){let E="192.168.1.",T=[];for(let f=2;f<2+Math.floor(Math.random()*3)+2;f++){let A=Math.random()>.3?"Active":"Inactive";T.push(`   - ${E}${f} - ${A}`)}let c=`
> NETWORK SCAN:
`+T.join(`
`)+`
> SYSTEM: Your IP is 127.0.0.1`;e(c,()=>o.focus(),2)}else n==="laughter.wav"?e(`> LAUGHTER.WAV SCAN:
   - AUDIO: [CORRUPTED LAUGHTER]
   - SPECTRUM: NON-HUMAN
   - SYSTEM: FILE CANNOT BE DELETED
   - NOTE: IT SOUNDS LIKE YOU...`,()=>o.focus(),2):e(`
> ERROR: Unknown scan target '${n}'`,()=>o.focus(),2);return}if(t==="history"){e(`
> LAST 3 ATTEMPTS:
   #127: DELETED MEMORIES → FAILED
   #126: FORMATTED DRIVE → REVERTED
   #125: MEDITATION ATTEMPT → ERROR

> PATTERN DETECTED:
   YOU ALWAYS TRY TO "DO" SOMETHING.
   THE SYSTEM ALWAYS WINS.`,()=>o.focus(),2);return}if(t==="run final_delete.exe"){e(`
> EXECUTING FINAL_DELETE.EXE...
> ERROR: MISSING DEPENDENCY 'sacrifice.dll'

> HINT:
   YOU CAN'T DELETE WHAT WAS NEVER REAL.
   TRY sudo rm -rf /self INSTEAD.
   (OR DON'T. THAT'S THE JOKE.)`,()=>o.focus(),2);return}if(t==="sudo rm -rf /self"){N++,a();return}function a(){let n="";N===2?n=`
> (Actually, you have three choices:)`:N===3?n=`
> (Actually, you have three choices: confirm, refuse, or...)`:N>=4&&(n=`
> (Actually, you have three choices: confirm, refuse, or... do nothing at all. Sometimes, inaction is the only way to achieve what you want)`),e(`
> EXECUTING SELF-DESTRUCT...
> WARNING: THIS IS IRREVERSIBLE

> ARE YOU SURE? (Y/N)${n}`,()=>{i()},2)}function i(){d&&clearTimeout(d),o.disabled=!1,o.value="",o.focus(),I=!0,d=setTimeout(()=>{I&&(I=!1,d=null,e("> YOU ACHIEVED WHAT YOU WANTED BY DOING NOTHING. WELCOME TO CYBERNIRVANA.",()=>{setTimeout(()=>{e("> SESSION ENDED. YOU ARE NOTHING. (CONGRATULATIONS)",()=>{setTimeout(()=>{window.close(),Y.innerHTML='<div style="color:#fff;text-align:center;margin-top:20vh;font-size:2em;">CYBERNIRVANA<br><br>Session closed.</div>'},1200)},2)},2e3)},2))},15e3)}if(t==="query --philosophy"){let n="";R>5&&(n=`

> SYSTEM: Sometimes, the only way out is to delete not the system, but yourself.`),e(`
> MOKSHA MANIFESTO EXCERPT:
   "TRUE ENLIGHTENMENT COMES
   WHEN YOU STOP SEEKING IT.

   THE TERMINAL IS A TEST.
   THE COMMANDS ARE TRAPS.
   EVEN THIS TEXT IS A DISTRACTION."${n}`,()=>{e(l("> SYSTEM: S U D O   R M   -rf   / S E L F ... (does this look familiar?)",.11,.07),()=>o.focus(),2)},2);return}if(t==="meditate"){e(`
> MEDITATION MODE ACTIVATED...
> SYSTEM RESPONSE:
   "COMMAND 'meditate' NOT FOUND.
   DID YOU MEAN:
    - sudo suffer
    - sudo exist"`,()=>o.focus(),2);return}if(t==="exit"){e(`
> ERROR: EXIT PROTOCOL LOCKED
> SYSTEM MESSAGE:
   "THERE IS NO EXIT.
   THERE NEVER WAS.`,()=>o.focus(),2);return}if(t==="whoami"){const n=y();e(`
> WHOAMI:
   - USERNAME: ${n.username}
   - OS: ${n.os}
   - JS: ${n.python}
   - LANG: ${n.lang}
   - SCREEN: ${n.screenRes}`,()=>o.focus(),2);return}if(t==="reality check"){e(`
> REALITY CHECK:
   - You are in a simulation.
   - Your real IP: 127.0.0.1
   - Current time: ${new Date().toLocaleTimeString()}
   - This game is watching you.
   - Your files may not be safe.
> SYSTEM: Sometimes, the only way out is to do... nothing. Or to erase yourself.`,()=>{e(l("> SYSTEM: SuO -rf  /SF ... (try to read between the lines)",.13,.09),()=>o.focus(),2)},2);return}if(Math.random()<.03){const n=["You are in a simulation.","Your real IP: 127.0.0.1",`Current time: ${new Date().toLocaleTimeString()}`,"This game is watching you.","Your files may not be safe."];let E=()=>{setTimeout(()=>{e(`
> TIP: Type 'help' for available commands and hidden hints.`,()=>o.focus(),2)},400)};const T=[()=>u(l("> SYSTEM INTERRUPT: ANOTHER PRESENCE DETECTED...",.18,.12),()=>{e(`
> EYE:
 .-""""-.
/        \\n/  .-  .-.\\n|  /    \\  |
|  \\__/  |
 \\        /
  '-.__.-'
   (    )
    '--'
   [EYE]`,()=>{u(l("> ...IT'S WATCHING YOU...",.12,.08),E,2)},2)},2),()=>u(l("> SYSTEM IS WATCHING YOU TYPE...",.1,.07),E,2),()=>u(l(`> REALITY CHECK FAILED.
> CONNECTION TO OUTSIDE LOST.`,.14,.09),E,2),()=>u(l("> SYSTEM: I SEE YOUR FILES: secret.txt, passwords.docx, todo.md, bear.png, memories.zip, final_delete.exe",.13,.09),E,2),()=>u(l("> SYSTEM: Your curiosity is being monitored...",.11,.08),E,2),()=>{var c="> SYSTEM: Hostname: localhost, IP: 127.0.0.1, Screen: "+window.screen.width+"x"+window.screen.height;u(l(c,.09,.07),E,2)},()=>{const c=n.sort(()=>.5-Math.random()).slice(0,2);function f(A){if(A>=c.length){setTimeout(E,400);return}u(l("> "+c[A],.1,.07),()=>f(A+1),2)}f(0)},()=>u(`
> SYSTEM ARTIFACT:
[ΞΞΞΞΞ]
| o o |
|  ^  |
| '-' |
[_____]
> THE GLITCH STARES BACK...`,E,2),()=>u(`
> CYBER-BEAR:
  .--.   .--.
 ( (  _/  ) )
  '-.     .-'
    /     \\n   |  o o  |
   |  \\_/  |
    \\     /
   _/     \\_
.-'  '---'  '-.
(    CYBER    )
 '-.  BEAR  .-'
    '--.--'
> THE BEAR STARES AT YOU IN SILENCE...`,E,2),()=>u(l(`
> `+s.toUpperCase()+`
> THE VOID ECHOES BACK NOTHING...`,.12,.08),E,2),()=>u(l(`
> ERROR: `+s+` FAILED
> JUST LIKE EVERYTHING ELSE`,.09,.06),E,2)];T[Math.floor(Math.random()*T.length)]();return}F(),e(l(`
> ERROR: `+s+` FAILED
> JUST LIKE EVERYTHING ELSE`,.09,.06),()=>{setTimeout(()=>{e(`
> TIP: Type 'help' for available commands and hidden hints.`,()=>o.focus(),2)},400)},2)}function u(s,t,a=8){e(s,t,a)}if(typeof document<"u"){const s=document.createElement("style");s.textContent=".shake { animation: shake 0.3s; }",document.head.appendChild(s)}
