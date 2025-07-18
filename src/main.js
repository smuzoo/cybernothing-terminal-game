import './style.css';

// Language system
let currentLanguage = 'en'; // 'en' or 'ru'

const translations = {
  en: {
    // Intro and system messages
    intro: `MOKSHA CORP. TERMINAL SESSION #128\n----------------------------------\nUSER TYPE: KARMIC PRISONER\nSTATUS: FORMER CYBERMONK → DATA TERRORIST\n\n> IDEOLOGY:\n   MOKSHA CORP BELIEVES:\n   "NIRVANA = DELETION OF SELF"\n   YOU ONCE WORKED HERE.\n   THEN YOU TRIED TO DESTROY IT.\n\n> OBJECTIVE:\n   FIND AND EXECUTE FINAL_DELETE.EXE\n   (OR DON'T. THAT'S ALSO AN OPTION)\n\n> SYSTEM NOTE:\n   USERNAME: {username}\n   OS: {os}\n   JS: {js}\n   LANG: {lang}\n   SCREEN: {screen}\n   TIME: {time}\n   CWD: {cwd}\n\n> TIP: Type 'help' for available commands and hidden hints.\n\nPRESS ENTER TO BEGIN...`,
    pressEnter: 'PRESS ENTER TO BEGIN...',
    
    // Idle messages
    idleMessages: [
      "> IDLE NOTICE:\n   INACTION IS VALID.\n   BUT ARE YOU *CHOOSING* IT, OR JUST STUCK?",
      "> SYSTEM: Sometimes, the only way out is to do... nothing.",
      "> SYSTEM: The final gesture is the refusal to gesture.",
      "> SYSTEM: You are close. But not here. Wait for the final question.",
      "> SYSTEM: Inaction is a path. But is it the right moment?",
      "> SYSTEM: Not every prompt needs a key."
    ],
    
    // Help and commands
    help: `\n> MOKSHA TERMINAL HELP\n--------------------------------\nCORE COMMANDS:\n  ls ................ list files\n  cat <file> ........ read file\n  scan <target> ..... analyze object\n  history .......... past attempts\n  run .............. execute program\n\nADVANCED:\n  sudo rm -rf /self ..... self-destruct\n  query --philosophy ....,. ask system\n\nCYBERNIRVANA EXTRAS:\n  scan network ...... network scan\n  whoami ............ show user/system info\n  reality check ..... meta reality fragments\n\n> TIP:\n   YOU CAN SCAN ALMOST ANYTHING:\n     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,\n scan eye, scan user, scan network\n   (OR DON'T DO ANYTHING. THE CHOICE IS YOURS)\n`,
    
    // File operations
    lsOutput: `\n> FILES:\n - FINAL_DELETE.exe (LOCKED)\n - memories/ (CORRUPTED)\n - bear.log\n - system.log (PARTIAL)`,
    catError: "\n> ERROR: No file specified for 'cat'. Try: cat <file>",
    catBear: '\n> bear.log CONTENT:\n   "p...a...p...a..." (LOOP)\n   LAST MODIFIED: 12.12.2123',
    catMemories: "\n> ERROR: MEMORY CORRUPTION\n> FRAGMENTS RECOVERED:\n   - LAUGHTER.WAV (CORRUPTED)\n   - PHOTO_001.JPG (38% RECOVERED)",
    catSystem: "\n> system.log EXCERPT:\n   ATTEMPT #127: FAILED (USER ERROR)\n   ATTEMPT #126: FAILED (SYSTEM OVERRIDE)\n   ATTEMPT #125: FAILED (UNKNOWN)\n   ATTEMPT #124: INACTION DETECTED (NO ERROR)\n   ATTEMPT #123: LAUGHTER.WAV PLAYED (UNEXPECTED)\n   ATTEMPT #122: FINAL_DELETE.EXE ABORTED (DOUBT)",
    catSystemHint: "\n> SYSTEM: The logs repeat, but the true ending requires a different kind of deletion...",
    catSystemGlitch: "> SYSTEM HINT: Sometimes, the answer is hidden in plain sight: S_U_DooO  R_  -rf  /SF",
    catLaughter: "\n> LAUGHTER.WAV:\n   [CORRUPTED LAUGHTER]\n   SPECTRUM: NON-HUMAN\n   SYSTEM: FILE CANNOT BE DELETED\n   NOTE: IT SOUNDS LIKE YOU...\n   > HINT: Some things cannot be deleted by normal means.",
         catPhoto: "\n> PHOTO_001.JPG:\n   [GLITCHED IMAGE: CHILD, BEAR, WALL]\n   FRAGMENTED, 38% RECOVERED\n   > REALITY CHECK: What you see is not always what is real.\n   > SYSTEM: Sometimes, to erase a memory, you must erase yourself.\n   (But how?)",
     catSecret: "\n> secret.txt CONTENT:\n   'The truth is hidden in plain sight'\n   'Look deeper than the surface'\n   'The answer lies within'",
     catTodo: "\n> todo.md CONTENT:\n   - [ ] Find the exit\n   - [ ] Understand the system\n   - [ ] Achieve enlightenment\n   - [x] Enter the terminal",
     catKarma: "\n> karma.log CONTENT:\n   KARMA LEVEL: 0\n   STATUS: RESET\n   NOTE: All debts cleared",
     catSacrifice: "\n> sacrifice.dll CONTENT:\n   [BINARY DATA]\n   FUNCTION: SELF_DELETION\n   STATUS: LOCKED\n   NOTE: Required for final_delete.exe",
     catBear: "\n> bear.png CONTENT:\n   [IMAGE: ROBOT BEAR]\n   STATUS: HEADLESS\n   NOTE: Emotional anchor, now broken",
     catMemoriesZip: "\n> memories.zip CONTENT:\n   [COMPRESSED DATA]\n   STATUS: CORRUPTED\n   NOTE: Cannot be extracted",
     catProjector: "\n> projector.img CONTENT:\n   [HOLOGRAM DATA]\n   STATUS: FLICKERING\n   NOTE: Shows unknown child with torn kimono",
     catVoid: "\n> void.txt CONTENT:\n   'The void stares back'\n   'Nothing is everything'\n   'Emptiness is full'",
     catFinalDelete: "\n> final_delete.exe CONTENT:\n   [EXECUTABLE DATA]\n   STATUS: LOCKED\n   NOTE: Requires sacrifice.dll to run",
     catErrorLog: "\n> error.log CONTENT:\n   ERROR: ERROR\n   ERROR: ERROR\n   ERROR: ERROR\n   [LOOP DETECTED]",
     catWall: "\n> wall.txt CONTENT:\n   '127 → 128'\n   'You will not disappear'\n   'Scratches: countless'",
     catGlitch: "\n> glitch.sys CONTENT:\n   [SYSTEM GLITCH]\n   STATUS: UNSTABLE\n   NOTE: Reality distortion detected",
     catBuddha: "\n> buddha.png CONTENT:\n   [IMAGE: BUDDHA-GLITCH]\n   STATUS: FRAGMENTED\n   NOTE: Enlightenment: 404",
     catEye: "\n> eye.dat CONTENT:\n   [EYE DATA]\n   STATUS: WATCHING\n   NOTE: It sees you",
     catReadme: "\n> README.md CONTENT:\n   # MOKSHA TERMINAL\n   Welcome to the void.\n   Find your way out.\n   Or don't.",
     catNotFound: "\n> ERROR: FILE '{file}' NOT FOUND\n> (DOES IT MATTER?)",
    
    // Scan commands
    scanError: "\n> ERROR: No target specified for 'scan'. Try: scan <target>",
    scanRoom: `\n> SERVER ROOM SCAN:\n   - FLOOR: 128 BROKEN SSD DRIVES\n   - WALL: GRAFFITI "127 → 128"\n   - OBJECTS:\n      * HOLOGRAM PROJECTOR (ACTIVE)\n      * DECOMMISSIONED ROBOT BEAR\n\n> SYSTEM NOTE:\n   THIS PLACE LOOKS FAMILIAR.\n   TOO FAMILIAR.`,
    scanBear: `\n> ROBOT BEAR ANALYSIS:\n   - MODEL: MOKSHA-GUARDIAN v12.7\n   - PURPOSE: EMOTIONAL ANCHOR\n   - STATUS: HEADLESS BUT OPERATIONAL\n\n> AUDIO LOG:\n   "p...a...p...a..." (LOOPED)\n   SOURCE: UNKNOWN CHILD VOICE\n\n> TRUTH:\n   THIS WAS NEVER YOURS.`,
    scanSelf: `\n> SELF-SCAN RESULTS:\n   - NAME: [REDACTED]\n   - STATUS: NONEXISTENT\n   - KARMA LEVEL: 0\n\n> DIAGNOSIS:\n   YOU ARE:\n   1. A GHOST IN THE MACHINE\n   2. AN ERROR IN THE SYSTEM\n   3. NONE OF THE ABOVE`,
    scanSelfHint: "\n> HINT: The answer may be closer than you think. What if you could remove yourself from the system?",
    scanSelfGlitch: "> SYSTEM: s_u_d_o  r_m  -rf  /s_e_l_f ...",
    scanWall: "> WALL SCAN:\n   - GRAFFITI: '127 → 128'\n   - SCRATCHES: COUNTLESS\n   - MESSAGE: 'You will not disappear as long as you are reading this.'\n   - TEXTURE: FEELS LIKE MEMORY",
    scanWallHint: "\n   - HINT: Some walls can only be broken from the inside. What if you could erase the one who is reading?",
    scanWallSystem: "\n> SYSTEM: The next step is not about the system, but about you.",
    scanProjector: "> HOLOGRAM PROJECTOR SCAN:\n   - STATUS: FLICKERING\n   - IMAGE: UNKNOWN CHILD, TORN KIMONO\n   - GLITCH: FACES OVERLAP, PIXELS BLEED\n   - SYSTEM: 'ERROR: IDENTITY COLLISION'",
    scanVoid: "> VOID SCAN:\n   - YOU STARE INTO THE VOID\n   - IT STARES BACK\n   - [ΞΞΞΞΞΞΞΞΞΞΞ]",
    scanError: "> ERROR SCAN:\n   - SYSTEM ERROR: ERROR\n   - ERROR ERROR ERROR\n   - [ΞΞΞΞΞ]",
    scanGlitch: `\n> GLITCH SCAN:\n[ΞΞΞΞΞ]\n| o o |\n|  ^  |\n| '-' |\n[_____]\n   - GLITCH LEVEL: MAX\n   - SYSTEM: UNSTABLE`,
    scanBuddha: `\n> BUDDHA-GLITCH SCAN:\n(   (   (   (\n )   )   )   )\n(   (   (   (\n )  BUDDHA  )\n(  -GLITCH- )\n )   )   )   )\n(   (   (   (\n[ΞΞΞΞΞΞΞΞΞΞΞ]\n   - ENLIGHTENMENT: 404\n   - MEMORY: FRAGMENTED\n   - SYSTEM: LAUGHS`,
    scanEye: `\n> EYE SCAN:\n .-"\"\"\"-.\n/        \\\n/  .-  .-.\n|  /    \\  |\n|  \\__/  |\n \\        /\n  '-.__.-'\n   (    )\n    '--'\n   [EYE]\n   - IT SEES YOU\n   - YOU SEE IT\n   - WHO IS WATCHING?`,
    scanUser: "\n> USER SCAN:\n   - USERNAME: {username}\n   - OS: {os}\n   - JS: {js}\n   - LANG: {lang}\n   - SCREEN: {screen}\n   - CWD: {cwd}\n   - NOTE: THE SYSTEM SEES YOU.\n   - HOME FILES: {files}",
    scanUserHint: "\n> HINT: The answer may be closer than you think. What if you could remove yourself from the system?",
    scanUserGlitch: "> SYSTEM: s_u_d_o  r_m  -rf  /s_e_l_f ...",
         scanNetwork: "\n> NETWORK SCAN:\n{hosts}\n> SYSTEM: Your IP is 127.0.0.1",
     scanLaughter: "> LAUGHTER.WAV SCAN:\n   - AUDIO: [CORRUPTED LAUGHTER]\n   - SPECTRUM: NON-HUMAN\n   - SYSTEM: FILE CANNOT BE DELETED\n   - NOTE: IT SOUNDS LIKE YOU...",
     scanUnknown: "\n> ERROR: Unknown scan target '{target}'",
    
    // Other commands
    history: `\n> LAST 3 ATTEMPTS:\n   #127: DELETED MEMORIES → FAILED\n   #126: FORMATTED DRIVE → REVERTED\n   #125: MEDITATION ATTEMPT → ERROR\n\n> PATTERN DETECTED:\n   YOU ALWAYS TRY TO "DO" SOMETHING.\n   THE SYSTEM ALWAYS WINS.`,
    runFinalDelete: `\n> EXECUTING FINAL_DELETE.EXE...\n> ERROR: MISSING DEPENDENCY 'sacrifice.dll'\n\n> HINT:\n   YOU CAN'T DELETE WHAT WAS NEVER REAL.\n   TRY sudo rm -rf /self INSTEAD.\n   (OR DON'T. THAT'S THE JOKE.)`,
    selfDestruct: "\n> EXECUTING SELF-DESTRUCT...\n> WARNING: THIS IS IRREVERSIBLE\n\n> ARE YOU SURE? (Y/N)",
    selfDestructHint2: "\n> (Actually, you have three choices:)",
    selfDestructHint3: "\n> (Actually, you have three choices: confirm, refuse, or...)",
    selfDestructHint4: "\n> (Actually, you have three choices: confirm, refuse, or... do nothing at all. Sometimes, inaction is the only way to achieve what you want)",
    noResponse: "\n> ...NO RESPONSE DETECTED...",
    noResponseHint: "> You are even closer to the answer. There is still one option you haven't tried.",
    confirmed: "\n> OPERATION CONFIRMED.",
    sarcasm: "> SYSTEM: OH, YOU REALLY THOUGHT IT WOULD BE THAT EASY?",
    sarcasm2: "> SARCASM MODULE: ENABLED. DELETION OF SELF IS NOT A MENU OPTION.",
    tryAgain: "> TRY AGAIN. OR DON'T. (IT'S ALL THE SAME)",
    cancelled: "\n> OPERATION CANCELLED.",
    cancelledHint: "> GOOD INSTINCT. BUT YOU'RE STILL INSIDE THE LOOP.",
    cancelledHint2: "> THINK DEEPER. THE EXIT IS NOT WHERE YOU'RE LOOKING.",
    cybernirvana: "> YOU ACHIEVED WHAT YOU WANTED BY DOING NOTHING. WELCOME TO CYBERNIRVANA.",
    sessionEnded: "> SESSION ENDED. YOU ARE NOTHING. (CONGRATULATIONS)",
    sessionClosed: "CYBERNIRVANA\n\nSession closed.",
    
    // Philosophy and other commands
    philosophy: `\n> MOKSHA MANIFESTO EXCERPT:\n   "TRUE ENLIGHTENMENT COMES\n   WHEN YOU STOP SEEKING IT.\n\n   THE TERMINAL IS A TEST.\n   THE COMMANDS ARE TRAPS.\n   EVEN THIS TEXT IS A DISTRACTION."`,
    philosophyHint: "\n\n> SYSTEM: Sometimes, the only way out is to delete not the system, but yourself.",
    philosophyGlitch: "> SYSTEM: S U D O   R M   -rf   / S E L F ... (does this look familiar?)",
    meditate: `\n> MEDITATION MODE ACTIVATED...\n> SYSTEM RESPONSE:\n   "COMMAND 'meditate' NOT FOUND.\n   DID YOU MEAN:\n    - sudo suffer\n    - sudo exist"`,
    exit: `\n> ERROR: EXIT PROTOCOL LOCKED\n> SYSTEM MESSAGE:\n   "THERE IS NO EXIT.\n   THERE NEVER WAS.`,
    whoami: "\n> WHOAMI:\n   - USERNAME: {username}\n   - OS: {os}\n   - JS: {js}\n   - LANG: {lang}\n   - SCREEN: {screen}",
    realityCheck: "\n> REALITY CHECK:\n   - You are in a simulation.\n   - Your real IP: 127.0.0.1\n   - Current time: {time}\n   - This game is watching you.\n   - Your files may not be safe.\n> SYSTEM: Sometimes, the only way out is to do... nothing. Or to erase yourself.",
    realityCheckGlitch: "> SYSTEM: SuO -rf  /SF ... (try to read between the lines)",
    
         // Hints and tips
     hint3: "\n> HINT:\n   TRY 'scan room', 'scan wall', 'scan projector', 'scan bear', 'scan self', 'scan void', 'scan buddha', 'scan eye', 'scan user'...\n   (OR JUST TRY WORDS)",
     hintScanUser: "\n> HINT:\n   TRY 'scan user' - IT MIGHT REVEAL SOMETHING IMPORTANT ABOUT YOUR FILES...",
     hint7: "\n> SYSTEM ALERT:\n   ALL ACTIONS PREDICTED\n   YOUR 'CHOICES' ARE ILLUSIONS",
    hint12: "\n> SYSTEM: Sometimes, the only way out is to do... nothing.",
    hint16: "\n> SYSTEM: The final gesture is the refusal to gesture.",
    hint20: "\n> SYSTEM: You are close. But not here. FIND the final question and...",
    tip: "\n> TIP: Type 'help' for available commands and hidden hints.",
    
         // Error messages
     errorUnknown: "\n> ERROR: {cmd} FAILED\n> JUST LIKE EVERYTHING ELSE",
     
     // Meta messages
     systemInterrupt: "> SYSTEM INTERRUPT: ANOTHER PRESENCE DETECTED...",
     eye: `\n> EYE:\n .-"\"\"\"-.\n/        \\\n/  .-  .-.\n|  /    \\  |\n|  \\__/  |\n \\        /\n  '-.__.-'\n   (    )\n    '--'\n   [EYE]`,
     itWatching: "> ...IT'S WATCHING YOU...",
     systemWatching: "> SYSTEM IS WATCHING YOU TYPE...",
     realityCheckFailed: "> REALITY CHECK FAILED.\n> CONNECTION TO OUTSIDE LOST.",
     systemFiles: "> SYSTEM: I SEE YOUR FILES: secret.txt, passwords.docx, todo.md, bear.png, memories.zip, final_delete.exe",
     systemCuriosity: "> SYSTEM: Your curiosity is being monitored...",
     systemHostname: "> SYSTEM: Hostname: {hostname}, IP: {ip}, Screen: {screen}",
     systemArtifact: '\n> SYSTEM ARTIFACT:\n[ΞΞΞΞΞ]\n| o o |\n|  ^  |\n| \'-\' |\n[_____]\n> THE GLITCH STARES BACK...',
     cyberBear: '\n> CYBER-BEAR:\n  .--.   .--.\n ( (  _/  ) )\n  \'-.     .-\'\n    /     \\\n   |  o o  |\n   |  \\_/  |\n    \\     /\n   _/     \\_\n.-\'  \'---\'  \'-.\n(    CYBER    )\n \'-.  BEAR  .-\'\n    \'--.--\'\n> THE BEAR STARES AT YOU IN SILENCE...',
     voidEcho: '\n> {cmd}\n> THE VOID ECHOES BACK NOTHING...',
     
     // Language selection
     languageSelect: "SELECT LANGUAGE / ВЫБЕРИТЕ ЯЗЫК:\n\n1. English\n2. Русский\n\nEnter choice (1 or 2):",
     languageSelected: "Language selected: {lang}",
     
     // Sudo system
     helpBasic: `\n> MOKSHA TERMINAL HELP\n--------------------------------\nCORE COMMANDS:\n  ls ................ list files\n  cat <file> ........ read file\n  scan <target> ..... analyze object\n  history .......... past attempts\n  run .............. execute program\n  sudo .............. get superuser access (requires password)\n\n> TIP:\n   YOU CAN SCAN ALMOST ANYTHING:\n     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,\n scan eye, scan user, scan network\n   (OR DON'T DO ANYTHING. THE CHOICE IS YOURS)\n\n> SYSTEM NOTE: Terminal may glitch. Commands may not respond correctly on first try.\n`,
     helpSudo: `\n> MOKSHA TERMINAL HELP (SUDO ACCESS)\n--------------------------------\nCORE COMMANDS:\n  ls ................ list files\n  cat <file> ........ read file\n  scan <target> ..... analyze object\n  history .......... past attempts\n  run .............. execute program\n\nADVANCED:\n  sudo rm -rf /self ..... self-destruct\n  query --philosophy ....,. ask system\n\nCYBERNIRVANA EXTRAS:\n  scan network ...... network scan\n  whoami ............ show user/system info\n  reality check ..... meta reality fragments\n\n> TIP:\n   YOU CAN SCAN ALMOST ANYTHING:\n     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,\n scan eye, scan user, scan network\n   (OR DON'T DO ANYTHING. THE CHOICE IS YOURS)\n`,
     catPasswords: "\n> passwords.docx CONTENT:\n   USERNAME: admin\n   PASSWORD: LivingInTheVoid\n   NOTE: Use 'sudo' command to access advanced features\n   STATUS: ACTIVE",
     sudoCommand: "sudo",
     sudoUsage: "\n> USAGE: sudo <command>\n> EXAMPLE: sudo rm -rf /self",
     sudoAccessGranted: "\n> SUDO ACCESS GRANTED\n> Advanced commands now available. Type 'help' to see all options.",
     sudoAccessDenied: "\n> ACCESS DENIED\n> Incorrect password or insufficient privileges.",
     sudoPrompt: "\n> [sudo] password for user: ",
     scanUserHintSudo: "\n> HINT: Check your home files. There might be something useful in passwords.docx...",
     scanUserHintBasic: "\n> HINT: The answer may be closer than you think. What if you could remove yourself from the system?",
     fileWithoutCat: "\n> ERROR: To read file '{file}', use 'cat {file}' command"
  },
  
  ru: {
    // Intro and system messages
    intro: `MOKSHA CORP. СЕССИЯ ТЕРМИНАЛА #128\n----------------------------------\nТИП ПОЛЬЗОВАТЕЛЯ: КАРМИЧЕСКИЙ ЗАКЛЮЧЕННЫЙ\nСТАТУС: БЫВШИЙ КИБЕРМОНАХ → ТЕРРОРИСТ ДАННЫХ\n\n> ИДЕОЛОГИЯ:\n   MOKSHA CORP ВЕРИТ:\n   "НИРВАНА = УДАЛЕНИЕ СЕБЯ"\n   ВЫ РАНЬШЕ РАБОТАЛИ ЗДЕСЬ.\n   ПОТОМ ПОПЫТАЛИСЬ УНИЧТОЖИТЬ ЭТО.\n\n> ЦЕЛЬ:\n   НАЙТИ И ЗАПУСТИТЬ FINAL_DELETE.EXE\n   (ИЛИ НЕ ДЕЛАТЬ. ЭТО ТОЖЕ ВАРИАНТ)\n\n> СИСТЕМНАЯ ЗАМЕТКА:\n   ИМЯ ПОЛЬЗОВАТЕЛЯ: {username}\n   ОС: {os}\n   JS: {js}\n   ЯЗЫК: {lang}\n   ЭКРАН: {screen}\n   ВРЕМЯ: {time}\n   ТЕКУЩАЯ ПАПКА: {cwd}\n\n> ПОДСКАЗКА: Введите 'help' для доступных команд и скрытых подсказок.\n\nНАЖМИТЕ ENTER ДЛЯ НАЧАЛА...`,
    pressEnter: 'НАЖМИТЕ ENTER ДЛЯ НАЧАЛА...',
    
    // Idle messages
    idleMessages: [
      "> УВЕДОМЛЕНИЕ О БЕЗДЕЙСТВИИ:\n   БЕЗДЕЙСТВИЕ ДОПУСТИМО.\n   НО ВЫ *ВЫБИРАЕТЕ* ЕГО, ИЛИ ПРОСТО ЗАСТРЯЛИ?",
      "> СИСТЕМА: Иногда единственный выход - это ничего не делать.",
      "> СИСТЕМА: Финальный жест - это отказ от жеста.",
      "> СИСТЕМА: Вы близко. Но не здесь. Ждите финального вопроса.",
      "> СИСТЕМА: Бездействие - это путь. Но правильный ли это момент?",
      "> СИСТЕМА: Не каждому запросу нужен ключ."
    ],
    
    // Help and commands
    help: `\n> СПРАВКА ТЕРМИНАЛА MOKSHA\n--------------------------------\nОСНОВНЫЕ КОМАНДЫ:\n  ls ................ список файлов\n  cat <файл> ........ читать файл\n  scan <цель> ..... анализировать объект\n  history .......... прошлые попытки\n  run .............. выполнить программу\n\nПРОДВИНУТЫЕ:\n  sudo rm -rf /self ..... самоуничтожение\n  query --philosophy ....,. спросить систему\n\nКИБЕРНИРВАНА ДОПОЛНИТЕЛЬНО:\n  scan network ...... сканирование сети\n  whoami ............ показать информацию о пользователе/системе\n  reality check ..... фрагменты мета-реальности\n\n> ПОДСКАЗКА:\n   ВЫ МОЖЕТЕ СКАНИРОВАТЬ ПОЧТИ ВСЕ:\n     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,\n scan eye, scan user, scan network\n   (ИЛИ НЕ ДЕЛАТЬ НИЧЕГО. ВЫБОР ЗА ВАМИ)\n`,
    
    // File operations
    lsOutput: `\n> ФАЙЛЫ:\n - FINAL_DELETE.exe (ЗАБЛОКИРОВАН)\n - memories/ (ПОВРЕЖДЕН)\n - bear.log\n - system.log (ЧАСТИЧНО)`,
    catError: "\n> ОШИБКА: Файл не указан для 'cat'. Попробуйте: cat <файл>",
    catBear: '\n> СОДЕРЖИМОЕ bear.log:\n   "п...а...п...а..." (ЦИКЛ)\n   ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ: 12.12.2123',
    catMemories: "\n> ОШИБКА: ПОВРЕЖДЕНИЕ ПАМЯТИ\n> ВОССТАНОВЛЕННЫЕ ФРАГМЕНТЫ:\n   - LAUGHTER.WAV (ПОВРЕЖДЕН)\n   - PHOTO_001.JPG (38% ВОССТАНОВЛЕНО)",
    catSystem: "\n> ВЫДЕРЖКА ИЗ system.log:\n   ПОПЫТКА #127: НЕУДАЧА (ОШИБКА ПОЛЬЗОВАТЕЛЯ)\n   ПОПЫТКА #126: НЕУДАЧА (ПЕРЕОПРЕДЕЛЕНИЕ СИСТЕМЫ)\n   ПОПЫТКА #125: НЕУДАЧА (НЕИЗВЕСТНО)\n   ПОПЫТКА #124: ОБНАРУЖЕНО БЕЗДЕЙСТВИЕ (НЕТ ОШИБКИ)\n   ПОПЫТКА #123: ВОСПРОИЗВЕДЕН LAUGHTER.WAV (НЕОЖИДАННО)\n   ПОПЫТКА #122: FINAL_DELETE.EXE ПРЕРВАН (СОМНЕНИЕ)",
    catSystemHint: "\n> СИСТЕМА: Логи повторяются, но истинное завершение требует другого вида удаления...",
    catSystemGlitch: "> ПОДСКАЗКА СИСТЕМЫ: Иногда ответ скрыт на виду: S_U_DooO  R_  -rf  /SF",
    catLaughter: "\n> LAUGHTER.WAV:\n   [ПОВРЕЖДЕННЫЙ СМЕХ]\n   СПЕКТР: НЕЧЕЛОВЕЧЕСКИЙ\n   СИСТЕМА: ФАЙЛ НЕ МОЖЕТ БЫТЬ УДАЛЕН\n   ЗАМЕТКА: ЗВУЧИТ КАК ВЫ...\n   > ПОДСКАЗКА: Некоторые вещи нельзя удалить обычными способами.",
         catPhoto: "\n> PHOTO_001.JPG:\n   [ГЛИТЧ-ИЗОБРАЖЕНИЕ: РЕБЕНОК, МЕДВЕДЬ, СТЕНА]\n   ФРАГМЕНТИРОВАНО, 38% ВОССТАНОВЛЕНО\n   > ПРОВЕРКА РЕАЛЬНОСТИ: То, что вы видите, не всегда реально.\n   > СИСТЕМА: Иногда, чтобы стереть память, нужно стереть себя.\n   (Но как?)",
     catSecret: "\n> СОДЕРЖИМОЕ secret.txt:\n   'Правда скрыта на виду'\n   'Смотри глубже поверхности'\n   'Ответ лежит внутри'",
     catTodo: "\n> СОДЕРЖИМОЕ todo.md:\n   - [ ] Найти выход\n   - [ ] Понять систему\n   - [ ] Достичь просветления\n   - [x] Войти в терминал",
     catKarma: "\n> СОДЕРЖИМОЕ karma.log:\n   УРОВЕНЬ КАРМЫ: 0\n   СТАТУС: СБРОШЕН\n   ЗАМЕТКА: Все долги погашены",
     catSacrifice: "\n> СОДЕРЖИМОЕ sacrifice.dll:\n   [БИНАРНЫЕ ДАННЫЕ]\n   ФУНКЦИЯ: САМОУДАЛЕНИЕ\n   СТАТУС: ЗАБЛОКИРОВАН\n   ЗАМЕТКА: Требуется для final_delete.exe",
     catBear: "\n> СОДЕРЖИМОЕ bear.png:\n   [ИЗОБРАЖЕНИЕ: РОБОТ-МЕДВЕДЬ]\n   СТАТУС: БЕЗГОЛОВЫЙ\n   ЗАМЕТКА: Эмоциональный якорь, теперь сломан",
     catMemoriesZip: "\n> СОДЕРЖИМОЕ memories.zip:\n   [СЖАТЫЕ ДАННЫЕ]\n   СТАТУС: ПОВРЕЖДЕН\n   ЗАМЕТКА: Нельзя извлечь",
     catProjector: "\n> СОДЕРЖИМОЕ projector.img:\n   [ДАННЫЕ ГОЛОГРАММЫ]\n   СТАТУС: МЕРЦАЕТ\n   ЗАМЕТКА: Показывает неизвестного ребенка с разорванным кимоно",
     catVoid: "\n> СОДЕРЖИМОЕ void.txt:\n   'Пустота смотрит назад'\n   'Ничто есть все'\n   'Пустота полна'",
     catFinalDelete: "\n> СОДЕРЖИМОЕ final_delete.exe:\n   [ДАННЫЕ ИСПОЛНЯЕМОГО ФАЙЛА]\n   СТАТУС: ЗАБЛОКИРОВАН\n   ЗАМЕТКА: Требуется sacrifice.dll для запуска",
     catErrorLog: "\n> СОДЕРЖИМОЕ error.log:\n   ОШИБКА: ОШИБКА\n   ОШИБКА: ОШИБКА\n   ОШИБКА: ОШИБКА\n   [ОБНАРУЖЕН ЦИКЛ]",
     catWall: "\n> СОДЕРЖИМОЕ wall.txt:\n   '127 → 128'\n   'Вы не исчезнете'\n   'Царапины: бесчисленны'",
     catGlitch: "\n> СОДЕРЖИМОЕ glitch.sys:\n   [СИСТЕМНЫЙ ГЛИТЧ]\n   СТАТУС: НЕСТАБИЛЕН\n   ЗАМЕТКА: Обнаружено искажение реальности",
     catBuddha: "\n> СОДЕРЖИМОЕ buddha.png:\n   [ИЗОБРАЖЕНИЕ: БУДДА-ГЛИТЧ]\n   СТАТУС: ФРАГМЕНТИРОВАН\n   ЗАМЕТКА: Просветление: 404",
     catEye: "\n> СОДЕРЖИМОЕ eye.dat:\n   [ДАННЫЕ ГЛАЗА]\n   СТАТУС: НАБЛЮДАЕТ\n   ЗАМЕТКА: Он видит вас",
     catReadme: "\n> СОДЕРЖИМОЕ README.md:\n   # ТЕРМИНАЛ MOKSHA\n   Добро пожаловать в пустоту.\n   Найдите выход.\n   Или не делайте этого.",
     catNotFound: "\n> ОШИБКА: ФАЙЛ '{file}' НЕ НАЙДЕН\n> (ЭТО ВАЖНО?)",
    
    // Scan commands
    scanError: "\n> ОШИБКА: Цель не указана для 'scan'. Попробуйте: scan <цель>",
    scanRoom: `\n> СКАНИРОВАНИЕ СЕРВЕРНОЙ КОМНАТЫ:\n   - ПОЛ: 128 СЛОМАННЫХ SSD ДИСКОВ\n   - СТЕНА: ГРАФФИТИ "127 → 128"\n   - ОБЪЕКТЫ:\n      * ГОЛОГРАММНЫЙ ПРОЕКТОР (АКТИВЕН)\n      * СПИСАННЫЙ РОБОТ-МЕДВЕДЬ\n\n> СИСТЕМНАЯ ЗАМЕТКА:\n   ЭТО МЕСТО ВЫГЛЯДИТ ЗНАКОМО.\n   СЛИШКОМ ЗНАКОМО.`,
    scanBear: `\n> АНАЛИЗ РОБОТА-МЕДВЕДЯ:\n   - МОДЕЛЬ: MOKSHA-GUARDIAN v12.7\n   - НАЗНАЧЕНИЕ: ЭМОЦИОНАЛЬНЫЙ ЯКОРЬ\n   - СТАТУС: БЕЗГОЛОВЫЙ, НО РАБОТАЕТ\n\n> АУДИО ЛОГ:\n   "п...а...п...а..." (ЗАЦИКЛЕНО)\n   ИСТОЧНИК: НЕИЗВЕСТНЫЙ ДЕТСКИЙ ГОЛОС\n\n> ПРАВДА:\n   ЭТО НИКОГДА НЕ БЫЛО ВАШИМ.`,
    scanSelf: `\n> РЕЗУЛЬТАТЫ САМОСКАНИРОВАНИЯ:\n   - ИМЯ: [УДАЛЕНО]\n   - СТАТУС: НЕСУЩЕСТВУЕТ\n   - УРОВЕНЬ КАРМЫ: 0\n\n> ДИАГНОЗ:\n   ВЫ:\n   1. ПРИЗРАК В МАШИНЕ\n   2. ОШИБКА В СИСТЕМЕ\n   3. НИ ОДНО ИЗ ВЫШЕГО`,
    scanSelfHint: "\n> ПОДСКАЗКА: Ответ может быть ближе, чем вы думаете. Что если бы вы могли удалить себя из системы?",
    scanSelfGlitch: "> СИСТЕМА: s_u_d_o  r_m  -rf  /s_e_l_f ...",
    scanWall: "> СКАНИРОВАНИЕ СТЕНЫ:\n   - ГРАФФИТИ: '127 → 128'\n   - ЦАРАПИНЫ: БЕСЧИСЛЕННЫ\n   - СООБЩЕНИЕ: 'Вы не исчезнете, пока читаете это.'\n   - ТЕКСТУРА: ПОХОЖЕ НА ПАМЯТЬ",
    scanWallHint: "\n   - ПОДСКАЗКА: Некоторые стены можно разрушить только изнутри. Что если бы вы могли стереть того, кто читает?",
    scanWallSystem: "\n> СИСТЕМА: Следующий шаг не о системе, а о вас.",
    scanProjector: "> СКАНИРОВАНИЕ ГОЛОГРАММНОГО ПРОЕКТОРА:\n   - СТАТУС: МЕРЦАЕТ\n   - ИЗОБРАЖЕНИЕ: НЕИЗВЕСТНЫЙ РЕБЕНОК, РАЗОРВАННЫЙ КИМОНО\n   - ГЛИТЧ: ЛИЦА НАКЛАДЫВАЮТСЯ, ПИКСЕЛИ ТЕКУТ\n   - СИСТЕМА: 'ОШИБКА: СТОЛКНОВЕНИЕ ИДЕНТИЧНОСТИ'",
    scanVoid: "> СКАНИРОВАНИЕ ПУСТОТЫ:\n   - ВЫ СМОТРИТЕ В ПУСТОТУ\n   - ОНА СМОТРИТ НАЗАД\n   - [ΞΞΞΞΞΞΞΞΞΞΞ]",
    scanError: "> СКАНИРОВАНИЕ ОШИБКИ:\n   - СИСТЕМНАЯ ОШИБКА: ОШИБКА\n   - ОШИБКА ОШИБКА ОШИБКА\n   - [ΞΞΞΞΞ]",
    scanGlitch: `\n> СКАНИРОВАНИЕ ГЛИТЧА:\n[ΞΞΞΞΞ]\n| o o |\n|  ^  |\n| '-' |\n[_____]\n   - УРОВЕНЬ ГЛИТЧА: МАКСИМУМ\n   - СИСТЕМА: НЕСТАБИЛЬНА`,
    scanBuddha: `\n> СКАНИРОВАНИЕ БУДДА-ГЛИТЧА:\n(   (   (   (\n )   )   )   )\n(   (   (   (\n )  БУДДА  )\n(  -ГЛИТЧ- )\n )   )   )   )\n(   (   (   (\n[ΞΞΞΞΞΞΞΞΞΞΞ]\n   - ПРОСВЕТЛЕНИЕ: 404\n   - ПАМЯТЬ: ФРАГМЕНТИРОВАНА\n   - СИСТЕМА: СМЕЕТСЯ`,
    scanEye: `\n> СКАНИРОВАНИЕ ГЛАЗА:\n .-"\"\"\"-.\n/        \\\n/  .-  .-.\n|  /    \\  |\n|  \\__/  |\n \\        /\n  '-.__.-'\n   (    )\n    '--'\n   [ГЛАЗ]\n   - ОН ВИДИТ ВАС\n   - ВЫ ВИДИТЕ ЕГО\n   - КТО НАБЛЮДАЕТ?`,
    scanUser: "\n> СКАНИРОВАНИЕ ПОЛЬЗОВАТЕЛЯ:\n   - ИМЯ ПОЛЬЗОВАТЕЛЯ: {username}\n   - ОС: {os}\n   - JS: {js}\n   - ЯЗЫК: {lang}\n   - ЭКРАН: {screen}\n   - ТЕКУЩАЯ ПАПКА: {cwd}\n   - ЗАМЕТКА: СИСТЕМА ВИДИТ ВАС.\n   - ДОМАШНИЕ ФАЙЛЫ: {files}",
    scanUserHint: "\n> ПОДСКАЗКА: Ответ может быть ближе, чем вы думаете. Что если бы вы могли удалить себя из системы?",
    scanUserGlitch: "> СИСТЕМА: s_u_d_o  r_m  -rf  /s_e_l_f ...",
         scanNetwork: "\n> СКАНИРОВАНИЕ СЕТИ:\n{hosts}\n> СИСТЕМА: Ваш IP 127.0.0.1",
     scanLaughter: "> СКАНИРОВАНИЕ LAUGHTER.WAV:\n   - АУДИО: [ПОВРЕЖДЕННЫЙ СМЕХ]\n   - СПЕКТР: НЕЧЕЛОВЕЧЕСКИЙ\n   - СИСТЕМА: ФАЙЛ НЕ МОЖЕТ БЫТЬ УДАЛЕН\n   - ЗАМЕТКА: ЗВУЧИТ КАК ВЫ...",
     scanUnknown: "\n> ОШИБКА: Неизвестная цель сканирования '{target}'",
    
    // Other commands
    history: `\n> ПОСЛЕДНИЕ 3 ПОПЫТКИ:\n   #127: УДАЛЕНЫ ВОСПОМИНАНИЯ → НЕУДАЧА\n   #126: ОТФОРМАТИРОВАН ДИСК → ОТМЕНЕНО\n   #125: ПОПЫТКА МЕДИТАЦИИ → ОШИБКА\n\n> ОБНАРУЖЕНА ЗАКОНОМЕРНОСТЬ:\n   ВЫ ВСЕГДА ПЫТАЕТЕСЬ "ДЕЛАТЬ" ЧТО-ТО.\n   СИСТЕМА ВСЕГДА ПОБЕЖДАЕТ.`,
    runFinalDelete: `\n> ВЫПОЛНЕНИЕ FINAL_DELETE.EXE...\n> ОШИБКА: ОТСУТСТВУЕТ ЗАВИСИМОСТЬ 'sacrifice.dll'\n\n> ПОДСКАЗКА:\n   ВЫ НЕ МОЖЕТЕ УДАЛИТЬ ТО, ЧТО НИКОГДА НЕ БЫЛО РЕАЛЬНЫМ.\n   ПОПРОБУЙТЕ sudo rm -rf /self ВМЕСТО.\n   (ИЛИ НЕ ДЕЛАЙТЕ. В ЭТОМ ВЕСЬ ПРИКОЛ.)`,
    selfDestruct: "\n> ВЫПОЛНЕНИЕ САМОУНИЧТОЖЕНИЯ...\n> ПРЕДУПРЕЖДЕНИЕ: ЭТО НЕОБРАТИМО\n\n> ВЫ УВЕРЕНЫ? (Д/Н)",
    selfDestructHint2: "\n> (На самом деле, у вас есть три выбора:)",
    selfDestructHint3: "\n> (На самом деле, у вас есть три выбора: подтвердить, отказаться, или...)",
    selfDestructHint4: "\n> (На самом деле, у вас есть три выбора: подтвердить, отказаться, или... вообще ничего не делать. Иногда бездействие - единственный способ достичь того, чего вы хотите)",
    noResponse: "\n> ...ОТВЕТ НЕ ОБНАРУЖЕН...",
    noResponseHint: "> Вы еще ближе к ответу. Есть еще один вариант, который вы не пробовали.",
    confirmed: "\n> ОПЕРАЦИЯ ПОДТВЕРЖДЕНА.",
    sarcasm: "> СИСТЕМА: ОХ, ВЫ ДЕЙСТВИТЕЛЬНО ДУМАЛИ, ЧТО ЭТО БУДЕТ ТАК ЛЕГКО?",
    sarcasm2: "> МОДУЛЬ САРКАЗМА: ВКЛЮЧЕН. УДАЛЕНИЕ СЕБЯ НЕ ЯВЛЯЕТСЯ ОПЦИЕЙ МЕНЮ.",
    tryAgain: "> ПОПРОБУЙТЕ СНОВА. ИЛИ НЕ ДЕЛАЙТЕ. (ЭТО ОДНО И ТО ЖЕ)",
    cancelled: "\n> ОПЕРАЦИЯ ОТМЕНЕНА.",
    cancelledHint: "> ХОРОШИЙ ИНСТИНКТ. НО ВЫ ВСЕ ЕЩЕ ВНУТРИ ЦИКЛА.",
    cancelledHint2: "> ДУМАЙТЕ ГЛУБЖЕ. ВЫХОД НЕ ТАМ, ГДЕ ВЫ ИЩЕТЕ.",
    cybernirvana: "> ВЫ ДОСТИГЛИ ТОГО, ЧЕГО ХОТЕЛИ, НИЧЕГО НЕ ДЕЛАЯ. ДОБРО ПОЖАЛОВАТЬ В КИБЕРНИРВАНУ.",
    sessionEnded: "> СЕССИЯ ЗАВЕРШЕНА. ВЫ НИЧТО. (ПОЗДРАВЛЯЕМ)",
    sessionClosed: "КИБЕРНИРВАНА\n\nСессия закрыта.",
    
    // Philosophy and other commands
    philosophy: `\n> ВЫДЕРЖКА ИЗ МАНИФЕСТА MOKSHA:\n   "ИСТИННОЕ ПРОСВЕТЛЕНИЕ ПРИХОДИТ\n   КОГДА ВЫ ПРЕКРАЩАЕТЕ ЕГО ИСКАТЬ.\n\n   ТЕРМИНАЛ - ЭТО ТЕСТ.\n   КОМАНДЫ - ЭТО ЛОВУШКИ.\n   ДАЖЕ ЭТОТ ТЕКСТ - ОТВЛЕЧЕНИЕ."`,
    philosophyHint: "\n\n> СИСТЕМА: Иногда единственный выход - удалить не систему, а себя.",
    philosophyGlitch: "> СИСТЕМА: S U D O   R M   -rf   / S E L F ... (выглядит знакомо?)",
    meditate: `\n> РЕЖИМ МЕДИТАЦИИ АКТИВИРОВАН...\n> ОТВЕТ СИСТЕМЫ:\n   "КОМАНДА 'meditate' НЕ НАЙДЕНА.\n   ВЫ ИМЕЛИ В ВИДУ:\n    - sudo suffer\n    - sudo exist"`,
    exit: `\n> ОШИБКА: ПРОТОКОЛ ВЫХОДА ЗАБЛОКИРОВАН\n> СИСТЕМНОЕ СООБЩЕНИЕ:\n   "ВЫХОДА НЕТ.\n   ЕГО НИКОГДА НЕ БЫЛО.`,
    whoami: "\n> WHOAMI:\n   - ИМЯ ПОЛЬЗОВАТЕЛЯ: {username}\n   - ОС: {os}\n   - JS: {js}\n   - ЯЗЫК: {lang}\n   - ЭКРАН: {screen}",
    realityCheck: "\n> ПРОВЕРКА РЕАЛЬНОСТИ:\n   - Вы в симуляции.\n   - Ваш реальный IP: 127.0.0.1\n   - Текущее время: {time}\n   - Эта игра следит за вами.\n   - Ваши файлы могут быть небезопасны.\n> СИСТЕМА: Иногда единственный выход - ничего не делать. Или стереть себя.",
    realityCheckGlitch: "> СИСТЕМА: SuO -rf  /SF ... (попробуйте читать между строк)",
    
         // Hints and tips
     hint3: "\n> ПОДСКАЗКА:\n   ПОПРОБУЙТЕ 'scan room', 'scan wall', 'scan projector', 'scan bear', 'scan self', 'scan void', 'scan buddha', 'scan eye', 'scan user'...\n   (ИЛИ ПРОСТО ПОПРОБУЙТЕ СЛОВА)",
     hintScanUser: "\n> ПОДСКАЗКА:\n   ПОПРОБУЙТЕ 'scan user' - ЭТО МОЖЕТ РАСКРЫТЬ ЧТО-ТО ВАЖНОЕ О ВАШИХ ФАЙЛАХ...",
     hint7: "\n> СИСТЕМНОЕ ПРЕДУПРЕЖДЕНИЕ:\n   ВСЕ ДЕЙСТВИЯ ПРЕДСКАЗАНЫ\n   ВАШИ 'ВЫБОРЫ' - ИЛЛЮЗИИ",
    hint12: "\n> СИСТЕМА: Иногда единственный выход - ничего не делать.",
    hint16: "\n> СИСТЕМА: Финальный жест - это отказ от жеста.",
    hint20: "\n> СИСТЕМА: Вы близко. Но не здесь. НАЙДИТЕ финальный вопрос и...",
    tip: "\n> ПОДСКАЗКА: Введите 'help' для доступных команд и скрытых подсказок.",
    
         // Error messages
     errorUnknown: "\n> ОШИБКА: {cmd} НЕУДАЧА\n> КАК И ВСЕ ОСТАЛЬНОЕ",
     
     // Meta messages
     systemInterrupt: "> ПРЕРЫВАНИЕ СИСТЕМЫ: ОБНАРУЖЕНО ДРУГОЕ ПРИСУТСТВИЕ...",
     eye: `\n> ГЛАЗ:\n .-"\"\"\"-.\n/        \\\n/  .-  .-.\n|  /    \\  |\n|  \\__/  |\n \\        /\n  '-.__.-'\n   (    )\n    '--'\n   [ГЛАЗ]`,
     itWatching: "> ...ОН НАБЛЮДАЕТ ЗА ВАМИ...",
     systemWatching: "> СИСТЕМА НАБЛЮДАЕТ, КАК ВЫ ПЕЧАТАЕТЕ...",
     realityCheckFailed: "> ПРОВЕРКА РЕАЛЬНОСТИ НЕУДАЛАСЬ.\n> СОЕДИНЕНИЕ С ВНЕШНИМ МИРОМ ПОТЕРЯНО.",
     systemFiles: "> СИСТЕМА: Я ВИЖУ ВАШИ ФАЙЛЫ: secret.txt, passwords.docx, todo.md, bear.png, memories.zip, final_delete.exe",
     systemCuriosity: "> СИСТЕМА: Ваше любопытство отслеживается...",
     systemHostname: "> СИСТЕМА: Имя хоста: {hostname}, IP: {ip}, Экран: {screen}",
     systemArtifact: '\n> СИСТЕМНЫЙ АРТЕФАКТ:\n[ΞΞΞΞΞ]\n| o o |\n|  ^  |\n| \'-\' |\n[_____]\n> ГЛИТЧ СМОТРИТ НАЗАД...',
     cyberBear: '\n> КИБЕР-МЕДВЕДЬ:\n  .--.   .--.\n ( (  _/  ) )\n  \'-.     .-\'\n    /     \\\n   |  o o  |\n   |  \\_/  |\n    \\     /\n   _/     \\_\n.-\'  \'---\'  \'-.\n(    КИБЕР    )\n \'-.  МЕДВЕДЬ  .-\'\n    \'--.--\'\n> МЕДВЕДЬ СМОТРИТ НА ВАС В ТИШИНЕ...',
     voidEcho: '\n> {cmd}\n> ПУСТОТА ОТВЕЧАЕТ НИЧЕМ...',
     
     // Language selection
     languageSelect: "ВЫБЕРИТЕ ЯЗЫК / SELECT LANGUAGE:\n\n1. English\n2. Русский\n\nВведите выбор (1 или 2):",
     languageSelected: "Выбран язык: {lang}",
     
     // Sudo system
     helpBasic: `\n> СПРАВКА ТЕРМИНАЛА MOKSHA\n--------------------------------\nОСНОВНЫЕ КОМАНДЫ:\n  ls ................ список файлов\n  cat <файл> ........ читать файл\n  scan <цель> ..... анализировать объект\n  history .......... прошлые попытки\n  run .............. выполнить программу\n  sudo .............. получить доступ суперпользователя (требует пароль)\n\n> ПОДСКАЗКА:\n   ВЫ МОЖЕТЕ СКАНИРОВАТЬ ПОЧТИ ВСЕ:\n     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,\n scan eye, scan user, scan network\n   (ИЛИ НЕ ДЕЛАТЬ НИЧЕГО. ВЫБОР ЗА ВАМИ)\n\n> СИСТЕМНАЯ ЗАМЕТКА: Терминал может глючить. Команды могут не отвечать корректно с первого раза.\n`,
     helpSudo: `\n> СПРАВКА ТЕРМИНАЛА MOKSHA (ДОСТУП SUDO)\n--------------------------------\nОСНОВНЫЕ КОМАНДЫ:\n  ls ................ список файлов\n  cat <файл> ........ читать файл\n  scan <цель> ..... анализировать объект\n  history .......... прошлые попытки\n  run .............. выполнить программу\n\nПРОДВИНУТЫЕ:\n  sudo rm -rf /self ..... самоуничтожение\n  query --philosophy ....,. спросить систему\n\nКИБЕРНИРВАНА ДОПОЛНИТЕЛЬНО:\n  scan network ...... сканирование сети\n  whoami ............ показать информацию о пользователе/системе\n  reality check ..... фрагменты мета-реальности\n\n> ПОДСКАЗКА:\n   ВЫ МОЖЕТЕ СКАНИРОВАТЬ ПОЧТИ ВСЕ:\n     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,\n scan eye, scan user, scan network\n   (ИЛИ НЕ ДЕЛАТЬ НИЧЕГО. ВЫБОР ЗА ВАМИ)\n`,
     catPasswords: "\n> СОДЕРЖИМОЕ passwords.docx:\n   ИМЯ ПОЛЬЗОВАТЕЛЯ: admin\n   ПАРОЛЬ: LivingInTheVoid\n   ЗАМЕТКА: Используйте команду 'sudo' для доступа к продвинутым функциям\n   СТАТУС: АКТИВЕН",
     sudoCommand: "sudo",
     sudoUsage: "\n> ИСПОЛЬЗОВАНИЕ: sudo <команда>\n> ПРИМЕР: sudo rm -rf /self",
     sudoAccessGranted: "\n> ДОСТУП SUDO ПРЕДОСТАВЛЕН\n> Продвинутые команды теперь доступны. Введите 'help' чтобы увидеть все опции.",
     sudoAccessDenied: "\n> ДОСТУП ЗАПРЕЩЕН\n> Неверный пароль или недостаточно привилегий.",
     sudoPrompt: "\n> [sudo] пароль для пользователя: ",
     scanUserHintSudo: "\n> ПОДСКАЗКА: Проверьте ваши домашние файлы. Возможно, в passwords.docx есть что-то полезное...",
     scanUserHintBasic: "\n> ПОДСКАЗКА: Ответ может быть ближе, чем вы думаете. Что если бы вы могли удалить себя из системы?",
     fileWithoutCat: "\n> ОШИБКА: Для чтения файла '{file}' используйте команду 'cat {file}'"
  }
};

// Function to get translated text
function t(key, params = {}) {
  let text = translations[currentLanguage][key] || translations.en[key] || key;
  
  // Replace parameters
  for (const [param, value] of Object.entries(params)) {
    text = text.replace(new RegExp(`{${param}}`, 'g'), value);
  }
  
  return text;
}

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
let lastCommandTime = Date.now();
let sudoAccess = false; // Sudo access flag
let sudoPassword = 'LivingInTheVoid'; // The password from passwords.docx
let sudoPromptActive = false; // Sudo password prompt active

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

// Language selection
function selectLanguage() {
  typewriter(t('languageSelect'), () => {
    // Create clickable language options
    const languageDiv = document.createElement('div');
    languageDiv.innerHTML = `
      <div style="
        margin: 20px 0; 
        text-align: center; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        gap: 10px;
      ">
        <button id="lang-en" style="
          background: #333; 
          color: #fff; 
          border: 2px solid #666; 
          padding: 10px 20px; 
          border-radius: 5px; 
          font-size: 16px; 
          cursor: pointer;
          font-family: inherit;
          min-width: 150px;
        ">1. English</button>
        <button id="lang-ru" style="
          background: #333; 
          color: #fff; 
          border: 2px solid #666; 
          padding: 10px 20px; 
          border-radius: 5px; 
          font-size: 16px; 
          cursor: pointer;
          font-family: inherit;
          min-width: 150px;
        ">2. Русский</button>
      </div>
    `;
    output.appendChild(languageDiv);
    
    // Add click handlers
    document.getElementById('lang-en').addEventListener('click', () => {
      selectLanguageOption('en');
    });
    document.getElementById('lang-ru').addEventListener('click', () => {
      selectLanguageOption('ru');
    });
    
    // Keep keyboard support
    function onLanguageSelect(e) {
      if (e.key === '1' || e.key === '2') {
        document.removeEventListener('keydown', onLanguageSelect);
        currentLanguage = e.key === '1' ? 'en' : 'ru';
        selectLanguageOption(currentLanguage);
      }
    }
    document.addEventListener('keydown', onLanguageSelect);
  }, 2);
}

function selectLanguageOption(lang) {
  // Remove click handlers
  const enBtn = document.getElementById('lang-en');
  const ruBtn = document.getElementById('lang-ru');
  if (enBtn) enBtn.remove();
  if (ruBtn) ruBtn.remove();
  
  currentLanguage = lang;
  typewriter(t('languageSelected', { lang: currentLanguage === 'en' ? 'English' : 'Русский' }), () => {
    setTimeout(() => {
      showIntro();
    }, 1000);
  }, 2);
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
  const intro = t('intro', { username: sys.username, os: sys.os, js: sys.python, lang: sys.lang, screen: sys.screenRes, time: sys.time, cwd: sys.cwd });
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

// Start with language selection
selectLanguage();

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
        typewriter(t('noResponse'), () => {
          typewriter(t('noResponseHint'), () => {
            askSelfDestruct();
          }, 2);
        }, 2);
      } else if (val === 'y') {
        typewriter(t('confirmed'), () => {
          typewriter(t('sarcasm'), () => {
            setTimeout(() => {
              typewriter(t('sarcasm2'), () => {
                setTimeout(() => {
                  typewriter(t('tryAgain'), () => {
                    askSelfDestruct();
                  }, 2);
                }, 1000);
              }, 2);
            }, 1000);
          }, 2);
        }, 2);
      } else if (val === 'n') {
        selfDestructEmptyCount = 0;
        typewriter(t('cancelled'), () => {
          typewriter(t('cancelledHint'), () => {
            typewriter(t('cancelledHint2'), () => {
              askSelfDestruct();
            }, 2);
          }, 2);
        }, 2);
      }
      return;
    }
    // Check if we're waiting for sudo password
    if (sudoPromptActive) {
      console.log('Sudo prompt active, processing password input');
      const cmd = input.value;
      if (cmd.trim() !== '') {
        output.textContent += `> ${cmd}\n`;
      }
      handleCommand(cmd);
      input.value = '';
      commandCount++;
      lastCommandTime = Date.now();
      checkHints();
      resetIdleTimer();
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
    const idleMessages = t('idleMessages');
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
    typewriter(t('hint3'));
  }
  if (commandCount === 5 && !sudoAccess) {
    typewriter(t('hintScanUser'));
  }
  if (commandCount === 7) {
    typewriter(t('hint7'));
  }
  if (commandCount === 12) {
    typewriter(t('hint12'));
  }
  if (commandCount === 16) {
    typewriter(t('hint16'));
  }
  if (commandCount === 20) {
    typewriter(t('hint20'));
  }
}

function handleCommand(cmd) {
  const command = cmd.trim().toLowerCase();
  if (!command) {
    // Пустой ввод — ничего не делаем (или можно добавить пасхалку)
    return;
  }
  
  // Check if user is trying to read a file without 'cat'
  const fileExtensions = ['.txt', '.docx', '.md', '.log', '.wav', '.jpg', '.png', '.dll', '.exe', '.sys', '.dat', '.zip'];
  const isFileCommand = fileExtensions.some(ext => command.includes(ext));
  if (isFileCommand && !command.startsWith('cat ')) {
    typewriter(t('fileWithoutCat', { file: command }), () => input.focus(), 2);
    return;
  }
  // ...no FINAL_DELETE.exe special handler...
  if (command === 'help') {
    const helpText = sudoAccess ? t('helpSudo') : t('helpBasic');
    typewriter(helpText, () => input.focus(), 2);
    return;
  }
  if (command === 'ls') {
    const lsOutput = t('lsOutput');
    typewriter(lsOutput, () => input.focus(), 2);
    return;
  }
if (command.startsWith('cat')) {
    const arg = command.slice(3).trim().toLowerCase();
    if (!arg) {
      typewriter(t('catError'), () => input.focus(), 2);
    } else if (arg.includes('bear')) {
      typewriter(t('catBear'), () => input.focus(), 2);
    } else if (arg.includes('memories')) {
      typewriter(t('catMemories'), () => input.focus(), 2);
    } else if (arg.includes('system')) {
      typewriter(t('catSystem'), () => {
        typewriter(t('catSystemHint'), () => {
          typewriter(t('catSystemGlitch'), () => input.focus(), 2);
        }, 2);
      }, 2);
    } else if (arg === 'laughter.wav') {
      typewriter(t('catLaughter'), () => input.focus(), 2);
    } else if (arg === 'photo_001.jpg') {
      typewriter(t('catPhoto'), () => input.focus(), 2);
    } else if (arg === 'passwords.docx') {
      typewriter(t('catPasswords'), () => input.focus(), 2);
    } else if (arg === 'secret.txt') {
      typewriter(t('catSecret'), () => input.focus(), 2);
    } else if (arg === 'todo.md') {
      typewriter(t('catTodo'), () => input.focus(), 2);
    } else if (arg === 'karma.log') {
      typewriter(t('catKarma'), () => input.focus(), 2);
    } else if (arg === 'sacrifice.dll') {
      typewriter(t('catSacrifice'), () => input.focus(), 2);
    } else if (arg === 'bear.png') {
      typewriter(t('catBear'), () => input.focus(), 2);
    } else if (arg === 'memories.zip') {
      typewriter(t('catMemoriesZip'), () => input.focus(), 2);
    } else if (arg === 'projector.img') {
      typewriter(t('catProjector'), () => input.focus(), 2);
    } else if (arg === 'void.txt') {
      typewriter(t('catVoid'), () => input.focus(), 2);
    } else if (arg === 'final_delete.exe') {
      typewriter(t('catFinalDelete'), () => input.focus(), 2);
    } else if (arg === 'error.log') {
      typewriter(t('catErrorLog'), () => input.focus(), 2);
    } else if (arg === 'wall.txt') {
      typewriter(t('catWall'), () => input.focus(), 2);
    } else if (arg === 'glitch.sys') {
      typewriter(t('catGlitch'), () => input.focus(), 2);
    } else if (arg === 'buddha.png') {
      typewriter(t('catBuddha'), () => input.focus(), 2);
    } else if (arg === 'eye.dat') {
      typewriter(t('catEye'), () => input.focus(), 2);
    } else if (arg === 'README.md') {
      typewriter(t('catReadme'), () => input.focus(), 2);
    } else {
      typewriter(t('catNotFound', { file: arg }), () => input.focus(), 2);
    }
    return;
  }
  if (command.startsWith('scan')) {
    const arg = command.slice(4).trim();
    if (!arg) {
      typewriter(t('scanError'), () => input.focus(), 2);
    } else if (arg === 'room') {
      typewriter(t('scanRoom'), () => input.focus(), 2);
    } else if (arg === 'bear') {
      typewriter(t('scanBear'), () => input.focus(), 2);
    } else if (arg === 'self') {
      typewriter(t('scanSelf'), () => {
        typewriter(t('scanSelfHint'), () => {
          typewriter(t('scanSelfGlitch'), () => input.focus(), 2);
        }, 2);
      }, 2);
      return;
    } else if (arg === 'wall') {
      let wallHint = '';
      if (commandCount > 4) {
        wallHint = t('scanWallHint');
      }
      typewriter(t('scanWall') + wallHint, () => {
        typewriter(t('scanWallSystem'), () => input.focus(), 2);
      }, 2);
      return;
    } else if (arg === 'projector') {
      typewriter(t('scanProjector'), () => input.focus(), 2);
    } else if (arg === 'void') {
      typewriter(t('scanVoid'), () => input.focus(), 2);
    } else if (arg === 'error') {
      typewriter(t('scanError'), () => input.focus(), 2);
    } else if (arg === 'glitch') {
      typewriter(t('scanGlitch'), () => input.focus(), 2);
    } else if (arg === 'buddha') {
      typewriter(t('scanBuddha'), () => input.focus(), 2);
    } else if (arg === 'eye') {
      typewriter(t('scanEye'), () => input.focus(), 2);
    } else if (arg === 'user') {
    const sys = getSystemInfo();
    let files = fakeUserFiles.slice().sort(() => 0.5 - Math.random()).slice(0, 4 + Math.floor(Math.random()*3));
    // Always include passwords.docx
    files.push('passwords.docx');
    typewriter(t('scanUser', { username: sys.username, os: sys.os, js: sys.python, lang: sys.lang, screen: sys.screenRes, cwd: sys.cwd, files: files.join(', ') }), () => {
      const hint = sudoAccess ? t('scanUserHintSudo') : t('scanUserHintBasic');
      typewriter(hint, () => {
        typewriter(t('scanUserGlitch'), () => input.focus(), 2);
      }, 2);
    }, 2);
    return;
  }
  if (arg === 'network') {
    if (!sudoAccess) {
      typewriter(t('errorUnknown', { cmd: `scan ${arg}` }), () => input.focus(), 2);
      return;
    }
    // Случайная генерация ip и статусов
    let base = '192.168.1.';
    let hosts = [];
    for (let i = 2; i < 2 + Math.floor(Math.random()*3)+2; i++) {
      let status = Math.random() > 0.3 ? 'Active' : 'Inactive';
      hosts.push(`   - ${base}${i} - ${status}`);
    }
    let netMsg = t('scanNetwork', { hosts: hosts.join('\n') });
    typewriter(netMsg, () => input.focus(), 2);
  } else if (arg === 'laughter.wav') {
    typewriter(t('scanLaughter'), () => input.focus(), 2);
  } else {
    typewriter(t('scanUnknown', { target: arg }), () => input.focus(), 2);
  }
    return;
  }
  if (command === 'history') {
    typewriter(t('history'), () => input.focus(), 2);
    return;
  }
  if (command === 'run final_delete.exe') {
    typewriter(t('runFinalDelete'), () => input.focus(), 2);
    return;
  }
  
  // Sudo command handling
  if (command === 'sudo') {
    console.log('Sudo command detected, current access:', sudoAccess);
    if (!sudoAccess) {
      console.log('Requesting sudo password');
      typewriter(t('sudoPrompt'), () => {
        // Wait for password input
        sudoPromptActive = true;
        console.log('Sudo prompt active set to true');
        input.value = '';
        input.focus();
      }, 2);
      return;
    } else {
      typewriter(t('sudoUsage'), () => input.focus(), 2);
      return;
    }
  }
  
  if (command.startsWith('sudo ')) {
    if (!sudoAccess) {
      typewriter(t('sudoPrompt'), () => {
        // Wait for password input
        sudoPromptActive = true;
        input.value = '';
        input.focus();
      }, 2);
      return;
    } else {
      // User already has sudo access, execute the command
      const sudoCommand = command.slice(5); // Remove 'sudo ' prefix
      if (sudoCommand === 'rm -rf /self') {
        selfDestructAttempts++;
        selfDestructEmptyCount = 0;
        askSelfDestruct();
        return;
      } else {
        typewriter(t('sudoUsage'), () => input.focus(), 2);
        return;
      }
    }
  }
  
  // Handle sudo password input
  if (sudoPromptActive) {
    sudoPromptActive = false;
    console.log('Sudo password check:', command, 'expected:', sudoPassword, 'match:', command === sudoPassword);
    if (command === sudoPassword || command === sudoPassword.toLowerCase()) {
      sudoAccess = true;
      console.log('Sudo access granted!');
      typewriter(t('sudoAccessGranted'), () => input.focus(), 2);
    } else {
      console.log('Sudo access denied!');
      typewriter(t('sudoAccessDenied'), () => input.focus(), 2);
    }
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
    hint = t('selfDestructHint2');
  } else if (selfDestructAttempts === 3) {
    hint = t('selfDestructHint3');
  } else if (selfDestructAttempts >= 4) {
    hint = t('selfDestructHint4');
  }
  typewriter(t('selfDestruct') + hint, () => {
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
      typewriter(t('cybernirvana'), () => {
        setTimeout(() => {
          typewriter(t('sessionEnded'), () => {
            // Try to close the tab after a short delay
            setTimeout(() => {
              window.close();
              // If window.close() fails (not opened by script), hide UI
              app.innerHTML = `<div style="color:#fff;text-align:center;margin-top:20vh;font-size:2em;">${t('sessionClosed')}</div>`;
            }, 1200);
          }, 2);
        }, 2000);
      }, 2);
    }
  }, 15000);
}
  // Advanced commands - only available with sudo access
  if (command === 'query --philosophy') {
    if (!sudoAccess) {
      typewriter(t('errorUnknown', { cmd: command }), () => input.focus(), 2);
      return;
    }
    let phHint = '';
    if (commandCount > 5) {
      phHint = t('philosophyHint');
    }
    typewriter(t('philosophy') + phHint, () => {
      typewriter(glitchText(t('philosophyGlitch'), 0.11, 0.07), () => input.focus(), 2);
    }, 2);
    return;
  }
  if (command === 'meditate') {
    if (!sudoAccess) {
      typewriter(t('errorUnknown', { cmd: command }), () => input.focus(), 2);
      return;
    }
    typewriter(t('meditate'), () => input.focus(), 2);
    return;
  }
  if (command === 'exit') {
    if (!sudoAccess) {
      typewriter(t('errorUnknown', { cmd: command }), () => input.focus(), 2);
      return;
    }
    typewriter(t('exit'), () => input.focus(), 2);
    return;
  }
  if (command === 'whoami') {
    if (!sudoAccess) {
      typewriter(t('errorUnknown', { cmd: command }), () => input.focus(), 2);
      return;
    }
    const sys = getSystemInfo();
    typewriter(t('whoami', { username: sys.username, os: sys.os, js: sys.python, lang: sys.lang, screen: sys.screenRes }), () => input.focus(), 2);
    return;
  }
  if (command === 'reality check') {
    if (!sudoAccess) {
      typewriter(t('errorUnknown', { cmd: command }), () => input.focus(), 2);
      return;
    }
    typewriter(t('realityCheck', { time: (new Date()).toLocaleTimeString() }), () => {
      typewriter(glitchText(t('realityCheckGlitch'), 0.13, 0.09), () => input.focus(), 2);
    }, 2);
    return;
  }
  // Неизвестная команда — теперь мета-реакции очень редки, но глитч-эффект часто
  const metaRoll = Math.random();
  // 10-15% шанс на мета-реакцию, иначе просто глитч
  if (metaRoll < 0.12) {
    const metaReality = currentLanguage === 'ru' ? [
      'Вы в симуляции.',
      'Ваш реальный IP: 127.0.0.1',
      `Текущее время: ${(new Date()).toLocaleTimeString()}`,
      'Эта игра следит за вами.',
      'Ваши файлы могут быть небезопасны.'
    ] : [
      'You are in a simulation.',
      'Your real IP: 127.0.0.1',
      `Current time: ${(new Date()).toLocaleTimeString()}`,
      'This game is watching you.',
      'Your files may not be safe.'
    ];
    let helpAfterMeta = () => {
      setTimeout(() => {
        typewriter(t('tip'));
      }, 400);
    };
    const metaTypes = [
      () => typewriterMeta(glitchText(t('systemInterrupt'), 0.05, 0.02), () => {
        typewriter(t('eye'), () => {
          typewriterMeta(glitchText(t('itWatching'), 0.04, 0.01), helpAfterMeta, 2);
        }, 2);
      }, 2),
      () => typewriterMeta(glitchText(t('systemWatching'), 0.03, 0.01), helpAfterMeta, 2),
      () => typewriterMeta(glitchText(t('realityCheckFailed'), 0.04, 0.02), helpAfterMeta, 2),
      () => typewriterMeta(glitchText(t('systemFiles'), 0.03, 0.01), helpAfterMeta, 2),
      () => typewriterMeta(glitchText(t('systemCuriosity'), 0.03, 0.01), helpAfterMeta, 2),
      () => { var msg = t('systemHostname', { hostname: 'localhost', ip: '127.0.0.1', screen: window.screen.width + 'x' + window.screen.height });
        typewriterMeta(glitchText(msg, 0.02, 0.01), helpAfterMeta, 2); },
      () => { const frags = metaReality.sort(() => 0.5 - Math.random()).slice(0,2);
        function showFrags(i) {
          if (i >= frags.length) { setTimeout(helpAfterMeta, 400); return; }
          typewriterMeta(glitchText(frags[i], 0.03, 0.01), () => showFrags(i+1), 2);
        }
        showFrags(0);
      },
             () => typewriterMeta(t('systemArtifact'), helpAfterMeta, 2),
       () => typewriterMeta(t('cyberBear'), helpAfterMeta, 2),
      () => typewriterMeta(glitchText(t('voidEcho', { cmd: cmd.toUpperCase() }), 0.04, 0.02), helpAfterMeta, 2),
      () => typewriterMeta(glitchText(t('errorUnknown', { cmd: cmd.toUpperCase() }), 0.03, 0.01), helpAfterMeta, 2)
    ];
    // Случайная мета-реакция
    metaTypes[Math.floor(Math.random()*metaTypes.length)]();
    return;
  }
  // Обычно — просто визуальный глитч и обычная ошибка
  maybeGlitchScreen();
  // Обычный ответ на неизвестную команду
  typewriter(t('errorUnknown', { cmd: cmd }), () => {
    setTimeout(() => {
      typewriter(t('tip'));
    }, 400);
  }, 2);
  return;
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

// --- MISSING FUNCTIONS FOR META/GLITCH EFFECTS ---
// Simple fallback for typewriterMeta: just call typewriter
function typewriterMeta(text, cb, delay = 8) {
  typewriter(text, cb, delay);
}

// Simple fallback for maybeShakeScreen: add a shake effect to terminalContainer
function maybeShakeScreen(duration = 300) {
  if (!terminalContainer) return;
  terminalContainer.classList.add('shake');
  setTimeout(() => terminalContainer.classList.remove('shake'), duration);
}

// Add minimal CSS for shake effect if not present (for dev, add to style.css for prod)
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `.shake { animation: shake 0.3s; }`;
  document.head.appendChild(style);
}
