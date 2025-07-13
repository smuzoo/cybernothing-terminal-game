import './style.css';

// Terminal root
let firstInputReady = false;
let selfDestructAttempts = 0;
let selfDestructEmptyCount = 0;
let selfDestructActive = false;
let selfDestructPromptActive = false;
let selfDestructTimer = null;
let commandCount = 0;
let idleTimer = null;
let idleStage = 0;
const idleMessages = [
  "> IDLE NOTICE:\n   INACTION IS VALID.\n   BUT ARE YOU *CHOOSING* IT, OR JUST STUCK?",
  "> SYSTEM: Sometimes, the only way out is to do... nothing.",
  "> SYSTEM: The final gesture is the refusal to gesture.",
  "> SYSTEM: You are close. But not here. Wait for the final question.",
  "> SYSTEM: Inaction is a path. But is it the right moment?",
  "> SYSTEM: Not every prompt needs a key."
];
let lastCommandTime = Date.now();
// Pseudo user files for scan user
const fakeUserFiles = [
  'secret.txt', 'passwords.docx', 'todo.md', 'bear.png', 'memories.zip', 'final_delete.exe',
  'laughter.wav', 'photo_001.jpg', 'sacrifice.dll', 'karma.log', 'buddha.png', 'eye.dat', 'glitch.sys', 'README.md', 'system.log', 'bear.log', 'void.txt', 'error.log', 'wall.txt', 'projector.img'
];
const app = document.querySelector('#app');
app.innerHTML = `
  <div id="terminal-container">
    <pre id="terminal-output"></pre>
    <div id="terminal-input-line" style="display:none;">
      <span>&gt;</span> <input id="terminal-input" autocomplete="off" />
    </div>
  </div>
  <div id="glitch-overlay"></div>
`;

// Terminal logic
const output = document.getElementById('terminal-output');
const inputLine = document.getElementById('terminal-input-line');
const input = document.getElementById('terminal-input');
const terminalContainer = document.getElementById('terminal-container');

// Typewriter effect: normal text, but colorize help/cmdlist lines as HTML
function typewriter(text, cb, delay = 8) {
  // If the line is a help tip or command list, colorize as HTML
  const tipRegex = /^> TIP:.*$/m;
  const cmdListRegex = /scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha, scan eye, scan user, scan network/;
  let lines = text.split('\n');
  let lineIdx = 0;
  function nextLine() {
    if (lineIdx >= lines.length) {
      if (cb) cb();
      return;
    }
    let line = lines[lineIdx];
    let colorized = false;
    if (tipRegex.test(line)) {
      let span = document.createElement('span');
      span.className = 'term-tip';
      span.textContent = line;
      output.appendChild(span);
      output.appendChild(document.createElement('br'));
      colorized = true;
    } else if (cmdListRegex.test(line)) {
      let span = document.createElement('span');
      span.className = 'term-cmdlist';
      span.textContent = line;
      output.appendChild(span);
      output.appendChild(document.createElement('br'));
      colorized = true;
    }
    if (!colorized) {
      let i = 0;
      function nextChar() {
        if (i < line.length) {
          output.textContent += line[i++];
          setTimeout(nextChar, delay);
        } else {
          output.textContent += '\n';
          setTimeout(() => {
            lineIdx++;
            nextLine();
          }, 0);
        }
      }
      nextChar();
      return;
    } else {
      lineIdx++;
      setTimeout(nextLine, 0);
    }
  }
  nextLine();
}

// Glitch effect (text mutation)
function glitchText(text, glitchChance = 0.08, brokenChance = 0.02) {
  const glitchChars = ['#', '@', '%', '$', '&', '*', '!', '?', '0', '1', 'Ξ', '░', '▒', '▓'];
  const brokenMap = {
    'a': 'a̷', 'b': 'b̸', 'c': 'c̷', 'd': 'd̸', 'e': 'e̶', 'f': 'f̷', 'g': 'g̸', 'h': 'h̷',
    'i': 'i̸', 'j': 'j̷', 'k': 'k̵', 'l': 'l̷', 'm': 'm̸', 'n': 'n̸', 'o': 'o̷', 'p': 'p̸',
    'q': 'q̷', 'r': 'r̸', 's': 's̵', 't': 't̷', 'u': 'u̸', 'v': 'v̷', 'w': 'w̸', 'x': 'x̷',
    'y': 'y̸', 'z': 'z̷',
    'A': 'A̷', 'B': 'B̸', 'C': 'C̷', 'D': 'D̸', 'E': 'E̶', 'F': 'F̷', 'G': 'G̸', 'H': 'H̷',
    'I': 'I̸', 'J': 'J̷', 'K': 'K̵', 'L': 'L̷', 'M': 'M̸', 'N': 'N̸', 'O': 'O̷', 'P': 'P̸',
    'Q': 'Q̷', 'R': 'R̸', 'S': 'S̵', 'T': 'T̷', 'U': 'U̸', 'V': 'V̷', 'W': 'W̸', 'X': 'X̷',
    'Y': 'Y̸', 'Z': 'Z̷',
  };
  let out = '';
  for (let c of text) {
    if (/[a-zA-Z]/.test(c) && Math.random() < brokenChance) {
      out += brokenMap[c] || c;
    } else if (/[a-zA-Z]/.test(c) && Math.random() < glitchChance) {
      out += glitchChars[Math.floor(Math.random() * glitchChars.length)];
    } else {
      out += c;
    }
  }
  return out;
}

// --- CSS Glitch Effects ---
// Apply effects to the terminal container for maximum visibility
function glitchBlur(duration = 180) {
  terminalContainer.classList.add('glitch-blur');
  setTimeout(() => terminalContainer.classList.remove('glitch-blur'), duration);
}

function glitchContrast(duration = 180) {
  terminalContainer.classList.add('glitch-contrast');
  setTimeout(() => terminalContainer.classList.remove('glitch-contrast'), duration);
}

function glitchTextShadow(duration = 120) {
  terminalContainer.classList.add('glitch-shadow');
  setTimeout(() => terminalContainer.classList.remove('glitch-shadow'), duration);
}

function glitchTransform(duration = 120) {
  terminalContainer.classList.add('glitch-transform');
  setTimeout(() => terminalContainer.classList.remove('glitch-transform'), duration);
}

function glitchOverlayBlocks(duration = 120) {
  const overlay = document.getElementById('glitch-overlay');
  overlay.innerHTML = '';
  overlay.style.display = 'block';
  overlay.style.pointerEvents = 'none';
  overlay.style.position = 'absolute';
  overlay.style.left = terminalContainer.offsetLeft + 'px';
  overlay.style.top = terminalContainer.offsetTop + 'px';
  overlay.style.width = terminalContainer.offsetWidth + 'px';
  overlay.style.height = terminalContainer.offsetHeight + 'px';
  for (let i = 0; i < 3 + Math.floor(Math.random()*3); i++) {
    const block = document.createElement('div');
    block.className = 'glitch-block';
    block.style.top = Math.random()*100 + '%';
    block.style.left = Math.random()*100 + '%';
    block.style.width = 20 + Math.random()*60 + 'px';
    block.style.height = 6 + Math.random()*18 + 'px';
    block.style.background = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${0.18+Math.random()*0.22})`;
    overlay.appendChild(block);
  }
  setTimeout(() => {
    overlay.innerHTML = '';
    overlay.style.display = 'none';
  }, duration);
}

// Utility: trigger a random glitch effect (or several)
function triggerGlitchCSS() {
  const effects = [glitchBlur, glitchContrast, glitchTextShadow, glitchTransform, glitchOverlayBlocks];
  // Pick 2-4 random effects for more visibility
  const n = 2 + Math.floor(Math.random()*3); // 2-4
  const shuffled = effects.sort(() => 0.5 - Math.random());
  for (let i = 0; i < n; i++) shuffled[i](220 + Math.random()*100); // slightly longer duration
}

// Optionally, combine with existing glitch triggers
function maybeGlitchScreen() {
  // Always trigger glitch effects for much higher frequency
  triggerGlitchCSS();
  // ...existing code for fullscreen glitch overlay or shake...
}

// Initial intro
function getSystemInfo() {
  // Try to get as much info as possible from browser
  const username = navigator.userAgentData && navigator.userAgentData.platform ? navigator.userAgentData.platform : navigator.platform || 'unknown';
  const os = navigator.userAgent || 'unknown';
  const python = `Browser JS ${navigator.appVersion}`;
  const cwd = window.location.pathname;
  const lang = navigator.language || 'unknown';
  const screenRes = `${window.screen.width}x${window.screen.height}`;
  const now = new Date();
  const time = now.toLocaleTimeString();
  return {
    username,
    os,
    python,
    cwd,
    lang,
    screenRes,
    time
  };
}

function showIntro() {
  const sys = getSystemInfo();
  const intro = `MOKSHA CORP. TERMINAL SESSION #128\n----------------------------------\nUSER TYPE: KARMIC PRISONER\nSTATUS: FORMER CYBERMONK → DATA TERRORIST\n\n> IDEOLOGY:\n   MOKSHA CORP BELIEVES:\n   "NIRVANA = DELETION OF SELF"\n   YOU ONCE WORKED HERE.\n   THEN YOU TRIED TO DESTROY IT.\n\n> OBJECTIVE:\n   FIND AND EXECUTE FINAL_DELETE.EXE\n   (OR DON'T. THAT'S ALSO AN OPTION)\n\n> SYSTEM NOTE:\n   USERNAME: ${sys.username}\n   OS: ${sys.os}\n   JS: ${sys.python}\n   LANG: ${sys.lang}\n   SCREEN: ${sys.screenRes}\n   TIME: ${sys.time}\n   CWD: ${sys.cwd}\n\n> TIP: Type 'help' for available commands and hidden hints.\n\nPRESS ENTER TO BEGIN...`;
  firstInputReady = false;
  typewriter(intro, () => {
    // После интро ждем первый Enter или клик
    function startTerminal() {
      document.removeEventListener('keydown', onEnter);
      document.removeEventListener('click', onClick);
      inputLine.style.display = '';
      input.focus();
      firstInputReady = true;
    }
    function onEnter(e) {
      if (e.key === 'Enter') startTerminal();
    }
    function onClick() {
      startTerminal();
    }
    document.addEventListener('keydown', onEnter);
    document.addEventListener('click', onClick);
  }, 2);
}

showIntro();

// Command handling (stub)
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (!firstInputReady) {
      firstInputReady = true;
      input.value = '';
      return;
    }
    const val = input.value.trim().toLowerCase();
    // Only intercept self-destruct prompt for '', 'y', 'n'.
    if (selfDestructPromptActive && document.activeElement === input && (val === '' || val === 'y' || val === 'n')) {
      selfDestructPromptActive = false;
      if (selfDestructTimer) clearTimeout(selfDestructTimer);
      selfDestructTimer = null;
      input.value = '';
      input.focus();
      if (!val) {
        selfDestructEmptyCount++;
        typewriter("\n> ...NO RESPONSE DETECTED...", () => {
          typewriter("> You are even closer to the answer. There is still one option you haven't tried.", () => {
            askSelfDestruct();
          }, 2);
        }, 2);
      } else if (val === 'y') {
        typewriter("\n> OPERATION CONFIRMED.", () => {
          typewriter("> SYSTEM: OH, YOU REALLY THOUGHT IT WOULD BE THAT EASY?", () => {
            setTimeout(() => {
              typewriter("> SARCASM MODULE: ENABLED. DELETION OF SELF IS NOT A MENU OPTION.", () => {
                setTimeout(() => {
                  typewriter("> TRY AGAIN. OR DON'T. (IT'S ALL THE SAME)", () => {
                    askSelfDestruct();
                  }, 2);
                }, 1000);
              }, 2);
            }, 1000);
          }, 2);
        }, 2);
      } else if (val === 'n') {
        selfDestructEmptyCount = 0;
        typewriter("\n> OPERATION CANCELLED.", () => {
          typewriter("> GOOD INSTINCT. BUT YOU'RE STILL INSIDE THE LOOP.", () => {
            typewriter("> THINK DEEPER. THE EXIT IS NOT WHERE YOU'RE LOOKING.", () => {
              askSelfDestruct();
            }, 2);
          }, 2);
        }, 2);
      }
      return;
    }
    // Always process as normal command if not a self-destruct answer
    const cmd = input.value;
    if (cmd.trim() !== '') {
      output.textContent += `> ${cmd}\n`;
    }
    // --- Glitch: sometimes on any command ---
    if (Math.random() < 0.33 || /run|delete|final|void|glitch|error|buddha|eye|sudo|reality|scan|cat|ls|history|philosophy|exit|meditate|whoami/i.test(cmd)) {
      triggerGlitchCSS();
    }
    handleCommand(cmd);
    input.value = '';
    commandCount++;
    lastCommandTime = Date.now();
    checkHints();
    resetIdleTimer();
  }
});

function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer);
  // Idle interval: 10-20s, sometimes trigger glitch spontaneously
  const next = 10000 + Math.random()*10000;
  idleTimer = setTimeout(() => {
    if (Math.random() < 0.35) triggerGlitchCSS();
    if (idleStage < idleMessages.length) {
      typewriter(glitchText(`\n${idleMessages[idleStage]}`, 0.08, 0.04), () => {
        idleStage++;
        resetIdleTimer();
      }, 4);
    } else {
      typewriter(glitchText(`\n${idleMessages[idleMessages.length-1]}`, 0.08, 0.04), resetIdleTimer, 4);
    }
  }, next);
}

function checkHints() {
  if (commandCount === 3) {
    typewriter("\n> HINT:\n   TRY 'scan room', 'scan wall', 'scan projector', 'scan bear', 'scan self', 'scan void', 'scan buddha', 'scan eye', 'scan user'...\n   (OR JUST TRY WORDS)");
  }
  if (commandCount === 7) {
    typewriter("\n> SYSTEM ALERT:\n   ALL ACTIONS PREDICTED\n   YOUR 'CHOICES' ARE ILLUSIONS");
  }
  if (commandCount === 12) {
    typewriter("\n> SYSTEM: Sometimes, the only way out is to do... nothing.");
  }
  if (commandCount === 16) {
    typewriter("\n> SYSTEM: The final gesture is the refusal to gesture.");
  }
  if (commandCount === 20) {
    typewriter("\n> SYSTEM: You are close. But not here. FIND the final question and...");
  }
}

function handleCommand(cmd) {
  const command = cmd.trim().toLowerCase();
  if (!command) {
    // Пустой ввод — ничего не делаем (или можно добавить пасхалку)
    return;
  }
  if (command === 'help') {
    let hint = '';
    if (commandCount > 2) {
      hint = splitLongHint("> HINT: There is a command that can erase yourself. But it's not as simple as it seems. Try to find it, but beware: sometimes, the answer is not in the obvious place.");
    }
    typewriter(`\n> MOKSHA TERMINAL HELP\n--------------------------------\nCORE COMMANDS:\n  ls ................ list files\n  cat <file> ........ read file\n  scan <target> ..... analyze object\n  history .......... past attempts\n  run .............. execute program\n\nADVANCED:\n  sudo rm -rf /self .. self-destruct (but is it really possible?)\n  query --philosophy . ask system\n\nCYBERNIRVANA EXTRAS:\n  scan network ...... network scan\n  whoami ............ show user/system info\n  reality check ..... meta reality fragments\n\n> ABOUT HELP:\n   Type 'help' at any time to see this message.\n   Some commands are hidden or require creative thinking.\n\n> TIP:\n   YOU CAN SCAN ALMOST ANYTHING:\n     scan room, scan bear, scan self, scan wall,\n     scan projector, scan void, scan error, scan glitch,\n     scan buddha, scan eye, scan user, scan network\n   (OR JUST TRY WORDS)\n   (OR DON'T. THE CHOICE IS YOURS)${hint}`,
      () => input.focus(), 2);
    return;
  }
  if (command === 'ls') {
    typewriter(`\n> FILES:\n - FINAL_DELETE.exe (LOCKED)\n - memories/ (CORRUPTED)\n - bear.log\n - system.log (PARTIAL)`, () => input.focus(), 2);
    return;
  }
if (command.startsWith('cat')) {
    const arg = command.slice(3).trim().toLowerCase();
    if (!arg) {
      typewriter("\n> ERROR: No file specified for 'cat'. Try: cat <file>", () => input.focus(), 2);
    } else if (arg.includes('bear')) {
      typewriter('\n> bear.log CONTENT:\n   "p...a...p...a..." (LOOP)\n   LAST MODIFIED: 12.12.2123', () => input.focus(), 2);
    } else if (arg.includes('memories')) {
      typewriter("\n> ERROR: MEMORY CORRUPTION\n> FRAGMENTS RECOVERED:\n   - LAUGHTER.WAV (CORRUPTED)\n   - PHOTO_001.JPG (38% RECOVERED)", () => input.focus(), 2);
    } else if (arg.includes('system')) {
      typewriter("\n> system.log EXCERPT:\n   ATTEMPT #127: FAILED (USER ERROR)\n   ATTEMPT #126: FAILED (SYSTEM OVERRIDE)\n   ATTEMPT #125: FAILED (UNKNOWN)\n   ATTEMPT #124: INACTION DETECTED (NO ERROR)\n   ATTEMPT #123: LAUGHTER.WAV PLAYED (UNEXPECTED)\n   ATTEMPT #122: FINAL_DELETE.EXE ABORTED (DOUBT)", () => {
        typewriter("\n> SYSTEM: The logs repeat, but the true ending requires a different kind of deletion...", () => {
          typewriter(glitchText("> SYSTEM HINT: Sometimes, the answer is hidden in plain sight: S_U_DooO  R_  -rf  /SF", 0.12, 0.08), () => input.focus(), 2);
        }, 2);
      }, 2);
    } else if (arg === 'laughter.wav') {
      typewriter("\n> LAUGHTER.WAV:\n   [CORRUPTED LAUGHTER]\n   SPECTRUM: NON-HUMAN\n   SYSTEM: FILE CANNOT BE DELETED\n   NOTE: IT SOUNDS LIKE YOU...\n   > HINT: Some things cannot be deleted by normal means.", () => input.focus(), 2);
    } else if (arg === 'photo_001.jpg') {
      typewriter("\n> PHOTO_001.JPG:\n   [GLITCHED IMAGE: CHILD, BEAR, WALL]\n   FRAGMENTED, 38% RECOVERED\n   > REALITY CHECK: What you see is not always what is real.\n   > SYSTEM: Sometimes, to erase a memory, you must erase yourself.\n   (But how?)", () => input.focus(), 2);
    } else {
      typewriter(`\n> ERROR: FILE '${arg}' NOT FOUND\n> (DOES IT MATTER?)`, () => input.focus(), 2);
    }
    return;
  }
  if (command.startsWith('scan')) {
    const arg = command.slice(4).trim();
    if (!arg) {
      typewriter("\n> ERROR: No target specified for 'scan'. Try: scan <target>", () => input.focus(), 2);
    } else if (arg === 'room') {
      typewriter(`\n> SERVER ROOM SCAN:\n   - FLOOR: 128 BROKEN SSD DRIVES\n   - WALL: GRAFFITI "127 → 128"\n   - OBJECTS:\n      * HOLOGRAM PROJECTOR (ACTIVE)\n      * DECOMMISSIONED ROBOT BEAR\n\n> SYSTEM NOTE:\n   THIS PLACE LOOKS FAMILIAR.\n   TOO FAMILIAR.`, () => input.focus(), 2);
    } else if (arg === 'bear') {
      typewriter(`\n> ROBOT BEAR ANALYSIS:\n   - MODEL: MOKSHA-GUARDIAN v12.7\n   - PURPOSE: EMOTIONAL ANCHOR\n   - STATUS: HEADLESS BUT OPERATIONAL\n\n> AUDIO LOG:\n   "p...a...p...a..." (LOOPED)\n   SOURCE: UNKNOWN CHILD VOICE\n\n> TRUTH:\n   THIS WAS NEVER YOURS.`, () => input.focus(), 2);
    } else if (arg === 'self') {
      typewriter(`\n> SELF-SCAN RESULTS:\n   - NAME: [REDACTED]\n   - STATUS: NONEXISTENT\n   - KARMA LEVEL: 0\n\n> DIAGNOSIS:\n   YOU ARE:\n   1. A GHOST IN THE MACHINE\n   2. AN ERROR IN THE SYSTEM\n   3. NONE OF THE ABOVE`, () => {
        typewriter("\n> HINT: The answer may be closer than you think. What if you could remove yourself from the system?", () => {
          typewriter(glitchText("> SYSTEM: s_u_d_o  r_m  -rf  /s_e_l_f ...", 0.10, 0.07), () => input.focus(), 2);
        }, 2);
      }, 2);
      return;
    } else if (arg === 'wall') {
      let wallHint = '';
      if (commandCount > 4) {
        wallHint = "\n   - HINT: Some walls can only be broken from the inside. What if you could erase the one who is reading?";
      }
      typewriter("> WALL SCAN:\n   - GRAFFITI: '127 → 128'\n   - SCRATCHES: COUNTLESS\n   - MESSAGE: 'You will not disappear as long as you are reading this.'\n   - TEXTURE: FEELS LIKE MEMORY" + wallHint, () => {
        typewriter("\n> SYSTEM: The next step is not about the system, but about you.", () => input.focus(), 2);
      }, 2);
      return;
    } else if (arg === 'projector') {
      typewriter("> HOLOGRAM PROJECTOR SCAN:\n   - STATUS: FLICKERING\n   - IMAGE: UNKNOWN CHILD, TORN KIMONO\n   - GLITCH: FACES OVERLAP, PIXELS BLEED\n   - SYSTEM: 'ERROR: IDENTITY COLLISION'", () => input.focus(), 2);
    } else if (arg === 'void') {
      typewriter("> VOID SCAN:\n   - YOU STARE INTO THE VOID\n   - IT STARES BACK\n   - [ΞΞΞΞΞΞΞΞΞΞΞ]", () => input.focus(), 2);
    } else if (arg === 'error') {
      typewriter("> ERROR SCAN:\n   - SYSTEM ERROR: ERROR\n   - ERROR ERROR ERROR\n   - [ΞΞΞΞΞ]", () => input.focus(), 2);
    } else if (arg === 'glitch') {
      typewriter(`\n> GLITCH SCAN:\n[ΞΞΞΞΞ]\n| o o |\n|  ^  |\n| '-' |\n[_____]\n   - GLITCH LEVEL: MAX\n   - SYSTEM: UNSTABLE`, () => input.focus(), 2);
    } else if (arg === 'buddha') {
      typewriter(`\n> BUDDHA-GLITCH SCAN:\n(   (   (   (\n )   )   )   )\n(   (   (   (\n )  BUDDHA  )\n(  -GLITCH- )\n )   )   )   )\n(   (   (   (\n[ΞΞΞΞΞΞΞΞΞΞΞ]\n   - ENLIGHTENMENT: 404\n   - MEMORY: FRAGMENTED\n   - SYSTEM: LAUGHS`, () => input.focus(), 2);
    } else if (arg === 'eye') {
      typewriter(`\n> EYE SCAN:\n .-\"\"\"\"-.\n/        \\n/  .-  .-.\\\n|  /    \\  |\n|  \\__/  |\n \\        /\n  '-.__.-'\n   (    )\n    '--'\n   [EYE]\n   - IT SEES YOU\n   - YOU SEE IT\n   - WHO IS WATCHING?`, () => input.focus(), 2);
    } else if (arg === 'user') {
    const sys = getSystemInfo();
    let files = fakeUserFiles.slice().sort(() => 0.5 - Math.random()).slice(0, 5 + Math.floor(Math.random()*3));
    typewriter(`\n> USER SCAN:\n   - USERNAME: ${sys.username}\n   - OS: ${sys.os}\n   - JS: ${sys.python}\n   - LANG: ${sys.lang}\n   - SCREEN: ${sys.screenRes}\n   - CWD: ${sys.cwd}\n   - NOTE: THE SYSTEM SEES YOU.\n   - HOME FILES: ${files.join(', ')}`, () => {
      typewriter("\n> HINT: The answer may be closer than you think. What if you could remove yourself from the system?", () => {
        typewriter(glitchText("> SYSTEM: s_u_d_o  r_m  -rf  /s_e_l_f ...", 0.10, 0.07), () => input.focus(), 2);
      }, 2);
    }, 2);
    return;
  }
  if (arg === 'network') {
    // Случайная генерация ip и статусов
    let base = '192.168.1.';
    let hosts = [];
    for (let i = 2; i < 2 + Math.floor(Math.random()*3)+2; i++) {
      let status = Math.random() > 0.3 ? 'Active' : 'Inactive';
      hosts.push(`   - ${base}${i} - ${status}`);
    }
    let netMsg = '\n> NETWORK SCAN:\n' + hosts.join('\n') + '\n> SYSTEM: Your IP is 127.0.0.1';
    typewriter(netMsg, () => input.focus(), 2);
  } else if (arg === 'laughter.wav') {
    typewriter("> LAUGHTER.WAV SCAN:\n   - AUDIO: [CORRUPTED LAUGHTER]\n   - SPECTRUM: NON-HUMAN\n   - SYSTEM: FILE CANNOT BE DELETED\n   - NOTE: IT SOUNDS LIKE YOU...", () => input.focus(), 2);
  } else {
    typewriter(`\n> ERROR: Unknown scan target '${arg}'`, () => input.focus(), 2);
  }
    return;
  }
  if (command === 'history') {
    typewriter(`\n> LAST 3 ATTEMPTS:\n   #127: DELETED MEMORIES → FAILED\n   #126: FORMATTED DRIVE → REVERTED\n   #125: MEDITATION ATTEMPT → ERROR\n\n> PATTERN DETECTED:\n   YOU ALWAYS TRY TO "DO" SOMETHING.\n   THE SYSTEM ALWAYS WINS.`, () => input.focus(), 2);
    return;
  }
  if (command === 'run final_delete.exe') {
    typewriter(`\n> EXECUTING FINAL_DELETE.EXE...\n> ERROR: MISSING DEPENDENCY 'sacrifice.dll'\n\n> HINT:\n   YOU CAN'T DELETE WHAT WAS NEVER REAL.\n   TRY sudo rm -rf /self INSTEAD.\n   (OR DON'T. THAT'S THE JOKE.)`, () => input.focus(), 2);
    return;
  }
if (command === 'sudo rm -rf /self') {
    // Start a new self-destruct attempt, but do NOT block commands
    selfDestructAttempts++;
    selfDestructEmptyCount = 0;
    askSelfDestruct();
    return;
  }

function askSelfDestruct() {
  let hint = '';
  if (selfDestructAttempts === 2) {
    hint = "\n> (Actually, you have three choices:)";
  } else if (selfDestructAttempts === 3) {
    hint = "\n> (Actually, you have three choices: confirm, refuse, or...)";
  } else if (selfDestructAttempts >= 4) {
    hint = "\n> (Actually, you have three choices: confirm, refuse, or... do nothing at all. Sometimes, inaction is the only way to achieve what you want)";
  }
  typewriter(`\n> EXECUTING SELF-DESTRUCT...\n> WARNING: THIS IS IRREVERSIBLE\n\n> ARE YOU SURE? (Y/N)${hint}`, () => {
    waitSelfDestructInput();
  }, 2);
}

function waitSelfDestructInput() {
  // Clean up any previous timer
  if (selfDestructTimer) clearTimeout(selfDestructTimer);

  input.disabled = false;
  input.value = '';
  input.focus();

  selfDestructPromptActive = true;

  // Timer for inaction win
  selfDestructTimer = setTimeout(() => {
    if (selfDestructPromptActive) {
      selfDestructPromptActive = false;
      selfDestructTimer = null;
      typewriter("> YOU ACHIEVED WHAT YOU WANTED BY DOING NOTHING. WELCOME TO CYBERNIRVANA.", () => {
        setTimeout(() => {
          typewriter("> SESSION ENDED. YOU ARE NOTHING. (CONGRATULATIONS)", () => {
            // Try to close the tab after a short delay
            setTimeout(() => {
              window.close();
              // If window.close() fails (not opened by script), hide UI
              app.innerHTML = '<div style="color:#fff;text-align:center;margin-top:20vh;font-size:2em;">CYBERNIRVANA<br><br>Session closed.</div>';
            }, 1200);
          }, 2);
        }, 2000);
      }, 2);
    }
  }, 15000);
}
  if (command === 'query --philosophy') {
    let phHint = '';
    if (commandCount > 5) {
      phHint = "\n\n> SYSTEM: Sometimes, the only way out is to delete not the system, but yourself.";
    }
    typewriter(`\n> MOKSHA MANIFESTO EXCERPT:\n   "TRUE ENLIGHTENMENT COMES\n   WHEN YOU STOP SEEKING IT.\n\n   THE TERMINAL IS A TEST.\n   THE COMMANDS ARE TRAPS.\n   EVEN THIS TEXT IS A DISTRACTION."${phHint}`, () => {
      typewriter(glitchText("> SYSTEM: S U D O   R M   -rf   / S E L F ... (does this look familiar?)", 0.11, 0.07), () => input.focus(), 2);
    }, 2);
    return;
  }
  if (command === 'meditate') {
    typewriter(`\n> MEDITATION MODE ACTIVATED...\n> SYSTEM RESPONSE:\n   "COMMAND 'meditate' NOT FOUND.\n   DID YOU MEAN:\n    - sudo suffer\n    - sudo exist"`, () => input.focus(), 2);
    return;
  }
  if (command === 'exit') {
    typewriter(`\n> ERROR: EXIT PROTOCOL LOCKED\n> SYSTEM MESSAGE:\n   "THERE IS NO EXIT.\n   THERE NEVER WAS.`, () => input.focus(), 2);
    return;
  }
  if (command === 'whoami') {
    const sys = getSystemInfo();
    typewriter(`\n> WHOAMI:\n   - USERNAME: ${sys.username}\n   - OS: ${sys.os}\n   - JS: ${sys.python}\n   - LANG: ${sys.lang}\n   - SCREEN: ${sys.screenRes}`, () => input.focus(), 2);
    return;
  }
  if (command === 'reality check') {
    typewriter(`\n> REALITY CHECK:\n   - You are in a simulation.\n   - Your real IP: 127.0.0.1\n   - Current time: ${(new Date()).toLocaleTimeString()}\n   - This game is watching you.\n   - Your files may not be safe.\n> SYSTEM: Sometimes, the only way out is to do... nothing. Or to erase yourself.`, () => {
      typewriter(glitchText("> SYSTEM: SuO -rf  /SF ... (try to read between the lines)", 0.13, 0.09), () => input.focus(), 2);
    }, 2);
    return;
  }
  // Неизвестная команда — редкие мета-реакции, глитчи, ascii art, фрагменты реальности
  const metaRoll = Math.random();
  const metaReality = [
    'You are in a simulation.',
    'Your real IP: 127.0.0.1',
    `Current time: ${(new Date()).toLocaleTimeString()}`,
    'This game is watching you.',
    'Your files may not be safe.'
  ];
  let helpAfterMeta = () => {
    setTimeout(() => {
      typewriter("\n> TIP: Type 'help' for available commands and hidden hints.", () => input.focus(), 2);
    }, 400);
  };
  if (metaRoll < 0.08) {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta(glitchText("> SYSTEM INTERRUPT: ANOTHER PRESENCE DETECTED...", 0.18, 0.12), () => {
      typewriter(`\n> EYE:\n .-\"\"\"\"-.\n/        \\n/  .-  .-.\\n|  /    \\  |\n|  \\__/  |\n \\        /\n  '-.__.-'\n   (    )\n    '--'\n   [EYE]`, () => {
        typewriterMeta(glitchText("> ...IT'S WATCHING YOU...", 0.12, 0.08), helpAfterMeta, 2);
      }, 2);
    }, 2);
    return;
  } else if (metaRoll < 0.16) {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta(glitchText("> SYSTEM IS WATCHING YOU TYPE...", 0.10, 0.07), helpAfterMeta, 2);
    return;
  } else if (metaRoll < 0.24) {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta(glitchText("> REALITY CHECK FAILED.\n> CONNECTION TO OUTSIDE LOST.", 0.14, 0.09), helpAfterMeta, 2);
    return;
  } else if (metaRoll < 0.3) {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta(glitchText("> SYSTEM: I SEE YOUR FILES: secret.txt, passwords.docx, todo.md, bear.png, memories.zip, final_delete.exe", 0.13, 0.09), helpAfterMeta, 2);
    return;
  } else if (metaRoll < 0.36) {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta(glitchText("> SYSTEM: Your curiosity is being monitored...", 0.11, 0.08), helpAfterMeta, 2);
    return;
  } else if (metaRoll < 0.42) {
    maybeGlitchScreen();
    maybeShakeScreen();
    var msg = '> SYSTEM: Hostname: localhost, IP: 127.0.0.1, Screen: ' + window.screen.width + 'x' + window.screen.height;
    typewriterMeta(glitchText(msg, 0.09, 0.07), helpAfterMeta, 2);
    return;
  } else if (metaRoll < 0.5) {
    maybeGlitchScreen();
    maybeShakeScreen();
    const frags = metaReality.sort(() => 0.5 - Math.random()).slice(0,2);
    function showFrags(i) {
      if (i >= frags.length) { setTimeout(helpAfterMeta, 400); return; }
      typewriterMeta(glitchText('> ' + frags[i], 0.10, 0.07), () => showFrags(i+1), 2);
    }
    showFrags(0);
    return;
  } else if (metaRoll < 0.6) {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta('\n> SYSTEM ARTIFACT:\n[ΞΞΞΞΞ]\n| o o |\n|  ^  |\n| \'-\' |\n[_____]\n> THE GLITCH STARES BACK...', helpAfterMeta, 2);
    return;
  } else if (metaRoll < 0.7) {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta('\n> CYBER-BEAR:\n  .--.   .--.\n ( (  _/  ) )\n  \'-.     .-\'\n    /     \\n   |  o o  |\n   |  \\_/  |\n    \\     /\n   _/     \\_\n.-\'  \'---\'  \'-.\n(    CYBER    )\n \'-.  BEAR  .-\'\n    \'--.--\'\n> THE BEAR STARES AT YOU IN SILENCE...', helpAfterMeta, 2);
    return;
  } else if (metaRoll < 0.8) {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta(glitchText('\n> ' + cmd.toUpperCase() + '\n> THE VOID ECHOES BACK NOTHING...', 0.12, 0.08), helpAfterMeta, 2);
    return;
  } else {
    maybeGlitchScreen();
    maybeShakeScreen();
    typewriterMeta(glitchText('\n> ERROR: ' + cmd + ' FAILED\n> JUST LIKE EVERYTHING ELSE', 0.09, 0.06), helpAfterMeta, 2);
    return;
  }
}

// ...existing code...

// Split long hint in help output
function splitLongHint(text, maxLen = 60) {
  const lines = [];
  let current = '';
  for (const word of text.split(' ')) {
    if ((current + word).length > maxLen) {
      lines.push(current.trim());
      current = word + ' ';
    } else {
      current += word + ' ';
    }
  }
  if (current.trim()) lines.push(current.trim());
  return lines.join('\n');
}
