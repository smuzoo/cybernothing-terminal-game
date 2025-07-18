(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const E of l)if(E.type==="childList")for(const d of E.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(l){const E={};return l.integrity&&(E.integrity=l.integrity),l.referrerPolicy&&(E.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?E.credentials="include":l.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function i(l){if(l.ep)return;l.ep=!0;const E=r(l);fetch(l.href,E)}})();let I="en";const G={en:{intro:`MOKSHA CORP. TERMINAL SESSION #128
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
   USERNAME: {username}
   OS: {os}
   JS: {js}
   LANG: {lang}
   SCREEN: {screen}
   TIME: {time}
   CWD: {cwd}

> TIP: Type 'help' for available commands and hidden hints.

PRESS ENTER TO BEGIN...`,pressEnter:"PRESS ENTER TO BEGIN...",idleMessages:[`> IDLE NOTICE:
   INACTION IS VALID.
   BUT ARE YOU *CHOOSING* IT, OR JUST STUCK?`,"> SYSTEM: Sometimes, the only way out is to do... nothing.","> SYSTEM: The final gesture is the refusal to gesture.","> SYSTEM: You are close. But not here. Wait for the final question.","> SYSTEM: Inaction is a path. But is it the right moment?","> SYSTEM: Not every prompt needs a key."],help:`
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
`,lsOutput:`
> FILES:
 - FINAL_DELETE.exe (LOCKED)
 - memories/ (CORRUPTED)
 - bear.log
 - system.log (PARTIAL)`,catError:`
> ERROR: No file specified for 'cat'. Try: cat <file>`,catBear:`
> bear.log CONTENT:
   "p...a...p...a..." (LOOP)
   LAST MODIFIED: 12.12.2123`,catMemories:`
> ERROR: MEMORY CORRUPTION
> FRAGMENTS RECOVERED:
   - LAUGHTER.WAV (CORRUPTED)
   - PHOTO_001.JPG (38% RECOVERED)`,catSystem:`
> system.log EXCERPT:
   ATTEMPT #127: FAILED (USER ERROR)
   ATTEMPT #126: FAILED (SYSTEM OVERRIDE)
   ATTEMPT #125: FAILED (UNKNOWN)
   ATTEMPT #124: INACTION DETECTED (NO ERROR)
   ATTEMPT #123: LAUGHTER.WAV PLAYED (UNEXPECTED)
   ATTEMPT #122: FINAL_DELETE.EXE ABORTED (DOUBT)`,catSystemHint:`
> SYSTEM: The logs repeat, but the true ending requires a different kind of deletion...`,catSystemGlitch:"> SYSTEM HINT: Sometimes, the answer is hidden in plain sight: S_U_DooO  R_  -rf  /SF",catLaughter:`
> LAUGHTER.WAV:
   [CORRUPTED LAUGHTER]
   SPECTRUM: NON-HUMAN
   SYSTEM: FILE CANNOT BE DELETED
   NOTE: IT SOUNDS LIKE YOU...
   > HINT: Some things cannot be deleted by normal means.`,catPhoto:`
> PHOTO_001.JPG:
   [GLITCHED IMAGE: CHILD, BEAR, WALL]
   FRAGMENTED, 38% RECOVERED
   > REALITY CHECK: What you see is not always what is real.
   > SYSTEM: Sometimes, to erase a memory, you must erase yourself.
   (But how?)`,catSecret:`
> secret.txt CONTENT:
   'The truth is hidden in plain sight'
   'Look deeper than the surface'
   'The answer lies within'`,catTodo:`
> todo.md CONTENT:
   - [ ] Find the exit
   - [ ] Understand the system
   - [ ] Achieve enlightenment
   - [x] Enter the terminal`,catKarma:`
> karma.log CONTENT:
   KARMA LEVEL: 0
   STATUS: RESET
   NOTE: All debts cleared`,catSacrifice:`
> sacrifice.dll CONTENT:
   [BINARY DATA]
   FUNCTION: SELF_DELETION
   STATUS: LOCKED
   NOTE: Required for final_delete.exe`,catBear:`
> bear.png CONTENT:
   [IMAGE: ROBOT BEAR]
   STATUS: HEADLESS
   NOTE: Emotional anchor, now broken`,catMemoriesZip:`
> memories.zip CONTENT:
   [COMPRESSED DATA]
   STATUS: CORRUPTED
   NOTE: Cannot be extracted`,catProjector:`
> projector.img CONTENT:
   [HOLOGRAM DATA]
   STATUS: FLICKERING
   NOTE: Shows unknown child with torn kimono`,catVoid:`
> void.txt CONTENT:
   'The void stares back'
   'Nothing is everything'
   'Emptiness is full'`,catFinalDelete:`
> final_delete.exe CONTENT:
   [EXECUTABLE DATA]
   STATUS: LOCKED
   NOTE: Requires sacrifice.dll to run`,catErrorLog:`
> error.log CONTENT:
   ERROR: ERROR
   ERROR: ERROR
   ERROR: ERROR
   [LOOP DETECTED]`,catWall:`
> wall.txt CONTENT:
   '127 → 128'
   'You will not disappear'
   'Scratches: countless'`,catGlitch:`
> glitch.sys CONTENT:
   [SYSTEM GLITCH]
   STATUS: UNSTABLE
   NOTE: Reality distortion detected`,catBuddha:`
> buddha.png CONTENT:
   [IMAGE: BUDDHA-GLITCH]
   STATUS: FRAGMENTED
   NOTE: Enlightenment: 404`,catEye:`
> eye.dat CONTENT:
   [EYE DATA]
   STATUS: WATCHING
   NOTE: It sees you`,catReadme:`
> README.md CONTENT:
   # MOKSHA TERMINAL
   Welcome to the void.
   Find your way out.
   Or don't.`,catNotFound:`
> ERROR: FILE '{file}' NOT FOUND
> (DOES IT MATTER?)`,scanError:`
> ERROR: No target specified for 'scan'. Try: scan <target>`,scanRoom:`
> SERVER ROOM SCAN:
   - FLOOR: 128 BROKEN SSD DRIVES
   - WALL: GRAFFITI "127 → 128"
   - OBJECTS:
      * HOLOGRAM PROJECTOR (ACTIVE)
      * DECOMMISSIONED ROBOT BEAR

> SYSTEM NOTE:
   THIS PLACE LOOKS FAMILIAR.
   TOO FAMILIAR.`,scanBear:`
> ROBOT BEAR ANALYSIS:
   - MODEL: MOKSHA-GUARDIAN v12.7
   - PURPOSE: EMOTIONAL ANCHOR
   - STATUS: HEADLESS BUT OPERATIONAL

> AUDIO LOG:
   "p...a...p...a..." (LOOPED)
   SOURCE: UNKNOWN CHILD VOICE

> TRUTH:
   THIS WAS NEVER YOURS.`,scanSelf:`
> SELF-SCAN RESULTS:
   - NAME: [REDACTED]
   - STATUS: NONEXISTENT
   - KARMA LEVEL: 0

> DIAGNOSIS:
   YOU ARE:
   1. A GHOST IN THE MACHINE
   2. AN ERROR IN THE SYSTEM
   3. NONE OF THE ABOVE`,scanSelfHint:`
> HINT: The answer may be closer than you think. What if you could remove yourself from the system?`,scanSelfGlitch:"> SYSTEM: s_u_d_o  r_m  -rf  /s_e_l_f ...",scanWall:`> WALL SCAN:
   - GRAFFITI: '127 → 128'
   - SCRATCHES: COUNTLESS
   - MESSAGE: 'You will not disappear as long as you are reading this.'
   - TEXTURE: FEELS LIKE MEMORY`,scanWallHint:`
   - HINT: Some walls can only be broken from the inside. What if you could erase the one who is reading?`,scanWallSystem:`
> SYSTEM: The next step is not about the system, but about you.`,scanProjector:`> HOLOGRAM PROJECTOR SCAN:
   - STATUS: FLICKERING
   - IMAGE: UNKNOWN CHILD, TORN KIMONO
   - GLITCH: FACES OVERLAP, PIXELS BLEED
   - SYSTEM: 'ERROR: IDENTITY COLLISION'`,scanVoid:`> VOID SCAN:
   - YOU STARE INTO THE VOID
   - IT STARES BACK
   - [ΞΞΞΞΞΞΞΞΞΞΞ]`,scanError:`> ERROR SCAN:
   - SYSTEM ERROR: ERROR
   - ERROR ERROR ERROR
   - [ΞΞΞΞΞ]`,scanGlitch:`
> GLITCH SCAN:
[ΞΞΞΞΞ]
| o o |
|  ^  |
| '-' |
[_____]
   - GLITCH LEVEL: MAX
   - SYSTEM: UNSTABLE`,scanBuddha:`
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
   - SYSTEM: LAUGHS`,scanEye:`
> EYE SCAN:
 .-""""-.
/        \\
/  .-  .-.
|  /    \\  |
|  \\__/  |
 \\        /
  '-.__.-'
   (    )
    '--'
   [EYE]
   - IT SEES YOU
   - YOU SEE IT
   - WHO IS WATCHING?`,scanUser:`
> USER SCAN:
   - USERNAME: {username}
   - OS: {os}
   - JS: {js}
   - LANG: {lang}
   - SCREEN: {screen}
   - CWD: {cwd}
   - NOTE: THE SYSTEM SEES YOU.
   - HOME FILES: {files}`,scanUserHint:`
> HINT: The answer may be closer than you think. What if you could remove yourself from the system?`,scanUserGlitch:"> SYSTEM: s_u_d_o  r_m  -rf  /s_e_l_f ...",scanNetwork:`
> NETWORK SCAN:
{hosts}
> SYSTEM: Your IP is 127.0.0.1`,scanLaughter:`> LAUGHTER.WAV SCAN:
   - AUDIO: [CORRUPTED LAUGHTER]
   - SPECTRUM: NON-HUMAN
   - SYSTEM: FILE CANNOT BE DELETED
   - NOTE: IT SOUNDS LIKE YOU...`,scanUnknown:`
> ERROR: Unknown scan target '{target}'`,history:`
> LAST 3 ATTEMPTS:
   #127: DELETED MEMORIES → FAILED
   #126: FORMATTED DRIVE → REVERTED
   #125: MEDITATION ATTEMPT → ERROR

> PATTERN DETECTED:
   YOU ALWAYS TRY TO "DO" SOMETHING.
   THE SYSTEM ALWAYS WINS.`,runFinalDelete:`
> EXECUTING FINAL_DELETE.EXE...
> ERROR: MISSING DEPENDENCY 'sacrifice.dll'

> HINT:
   YOU CAN'T DELETE WHAT WAS NEVER REAL.
   TRY sudo rm -rf /self INSTEAD.
   (OR DON'T. THAT'S THE JOKE.)`,selfDestruct:`
> EXECUTING SELF-DESTRUCT...
> WARNING: THIS IS IRREVERSIBLE

> ARE YOU SURE? (Y/N)`,selfDestructHint2:`
> (Actually, you have three choices:)`,selfDestructHint3:`
> (Actually, you have three choices: confirm, refuse, or...)`,selfDestructHint4:`
> (Actually, you have three choices: confirm, refuse, or... do nothing at all. Sometimes, inaction is the only way to achieve what you want)`,noResponse:`
> ...NO RESPONSE DETECTED...`,noResponseHint:"> You are even closer to the answer. There is still one option you haven't tried.",confirmed:`
> OPERATION CONFIRMED.`,sarcasm:"> SYSTEM: OH, YOU REALLY THOUGHT IT WOULD BE THAT EASY?",sarcasm2:"> SARCASM MODULE: ENABLED. DELETION OF SELF IS NOT A MENU OPTION.",tryAgain:"> TRY AGAIN. OR DON'T. (IT'S ALL THE SAME)",cancelled:`
> OPERATION CANCELLED.`,cancelledHint:"> GOOD INSTINCT. BUT YOU'RE STILL INSIDE THE LOOP.",cancelledHint2:"> THINK DEEPER. THE EXIT IS NOT WHERE YOU'RE LOOKING.",cybernirvana:"> YOU ACHIEVED WHAT YOU WANTED BY DOING NOTHING. WELCOME TO CYBERNIRVANA.",sessionEnded:"> SESSION ENDED. YOU ARE NOTHING. (CONGRATULATIONS)",sessionClosed:`CYBERNIRVANA

Session closed.`,philosophy:`
> MOKSHA MANIFESTO EXCERPT:
   "TRUE ENLIGHTENMENT COMES
   WHEN YOU STOP SEEKING IT.

   THE TERMINAL IS A TEST.
   THE COMMANDS ARE TRAPS.
   EVEN THIS TEXT IS A DISTRACTION."`,philosophyHint:`

> SYSTEM: Sometimes, the only way out is to delete not the system, but yourself.`,philosophyGlitch:"> SYSTEM: S U D O   R M   -rf   / S E L F ... (does this look familiar?)",meditate:`
> MEDITATION MODE ACTIVATED...
> SYSTEM RESPONSE:
   "COMMAND 'meditate' NOT FOUND.
   DID YOU MEAN:
    - sudo suffer
    - sudo exist"`,exit:`
> ERROR: EXIT PROTOCOL LOCKED
> SYSTEM MESSAGE:
   "THERE IS NO EXIT.
   THERE NEVER WAS.`,whoami:`
> WHOAMI:
   - USERNAME: {username}
   - OS: {os}
   - JS: {js}
   - LANG: {lang}
   - SCREEN: {screen}`,realityCheck:`
> REALITY CHECK:
   - You are in a simulation.
   - Your real IP: 127.0.0.1
   - Current time: {time}
   - This game is watching you.
   - Your files may not be safe.
> SYSTEM: Sometimes, the only way out is to do... nothing. Or to erase yourself.`,realityCheckGlitch:"> SYSTEM: SuO -rf  /SF ... (try to read between the lines)",hint3:`
> HINT:
   TRY 'scan room', 'scan wall', 'scan projector', 'scan bear', 'scan self', 'scan void', 'scan buddha', 'scan eye', 'scan user'...
   (OR JUST TRY WORDS)`,hintScanUser:`
> HINT:
   TRY 'scan user' - IT MIGHT REVEAL SOMETHING IMPORTANT ABOUT YOUR FILES...`,hint7:`
> SYSTEM ALERT:
   ALL ACTIONS PREDICTED
   YOUR 'CHOICES' ARE ILLUSIONS`,hint12:`
> SYSTEM: Sometimes, the only way out is to do... nothing.`,hint16:`
> SYSTEM: The final gesture is the refusal to gesture.`,hint20:`
> SYSTEM: You are close. But not here. FIND the final question and...`,tip:`
> TIP: Type 'help' for available commands and hidden hints.`,errorUnknown:`
> ERROR: {cmd} FAILED
> JUST LIKE EVERYTHING ELSE`,systemInterrupt:"> SYSTEM INTERRUPT: ANOTHER PRESENCE DETECTED...",eye:`
> EYE:
 .-""""-.
/        \\
/  .-  .-.
|  /    \\  |
|  \\__/  |
 \\        /
  '-.__.-'
   (    )
    '--'
   [EYE]`,itWatching:"> ...IT'S WATCHING YOU...",systemWatching:"> SYSTEM IS WATCHING YOU TYPE...",realityCheckFailed:`> REALITY CHECK FAILED.
> CONNECTION TO OUTSIDE LOST.`,systemFiles:"> SYSTEM: I SEE YOUR FILES: secret.txt, passwords.docx, todo.md, bear.png, memories.zip, final_delete.exe",systemCuriosity:"> SYSTEM: Your curiosity is being monitored...",systemHostname:"> SYSTEM: Hostname: {hostname}, IP: {ip}, Screen: {screen}",systemArtifact:`
> SYSTEM ARTIFACT:
[ΞΞΞΞΞ]
| o o |
|  ^  |
| '-' |
[_____]
> THE GLITCH STARES BACK...`,cyberBear:`
> CYBER-BEAR:
  .--.   .--.
 ( (  _/  ) )
  '-.     .-'
    /     \\
   |  o o  |
   |  \\_/  |
    \\     /
   _/     \\_
.-'  '---'  '-.
(    CYBER    )
 '-.  BEAR  .-'
    '--.--'
> THE BEAR STARES AT YOU IN SILENCE...`,voidEcho:`
> {cmd}
> THE VOID ECHOES BACK NOTHING...`,languageSelect:`SELECT LANGUAGE / ВЫБЕРИТЕ ЯЗЫК:

1. English
2. Русский

Enter choice (1 or 2):`,languageSelected:"Language selected: {lang}",helpBasic:`
> MOKSHA TERMINAL HELP
--------------------------------
CORE COMMANDS:
  ls ................ list files
  cat <file> ........ read file
  scan <target> ..... analyze object
  history .......... past attempts
  run .............. execute program
  sudo .............. get superuser access (requires password)

> TIP:
   YOU CAN SCAN ALMOST ANYTHING:
     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,
 scan eye, scan user, scan network
   (OR DON'T DO ANYTHING. THE CHOICE IS YOURS)

> SYSTEM NOTE: Terminal may glitch. Commands may not respond correctly on first try.
`,helpSudo:`
> MOKSHA TERMINAL HELP (SUDO ACCESS)
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
`,catPasswords:`
> passwords.docx CONTENT:
   USERNAME: admin
   PASSWORD: LivingInTheVoid
   NOTE: Use 'sudo' command to access advanced features
   STATUS: ACTIVE`,sudoCommand:"sudo",sudoUsage:`
> USAGE: sudo <command>
> EXAMPLE: sudo rm -rf /self`,sudoAccessGranted:`
> SUDO ACCESS GRANTED
> Advanced commands now available. Type 'help' to see all options.`,sudoAccessDenied:`
> ACCESS DENIED
> Incorrect password or insufficient privileges.`,sudoPrompt:`
> [sudo] password for user: `,scanUserHintSudo:`
> HINT: Check your home files. There might be something useful in passwords.docx...`,scanUserHintBasic:`
> HINT: The answer may be closer than you think. What if you could remove yourself from the system?`,fileWithoutCat:`
> ERROR: To read file '{file}', use 'cat {file}' command`},ru:{intro:`MOKSHA CORP. СЕССИЯ ТЕРМИНАЛА #128
----------------------------------
ТИП ПОЛЬЗОВАТЕЛЯ: КАРМИЧЕСКИЙ ЗАКЛЮЧЕННЫЙ
СТАТУС: БЫВШИЙ КИБЕРМОНАХ → ТЕРРОРИСТ ДАННЫХ

> ИДЕОЛОГИЯ:
   MOKSHA CORP ВЕРИТ:
   "НИРВАНА = УДАЛЕНИЕ СЕБЯ"
   ВЫ РАНЬШЕ РАБОТАЛИ ЗДЕСЬ.
   ПОТОМ ПОПЫТАЛИСЬ УНИЧТОЖИТЬ ЭТО.

> ЦЕЛЬ:
   НАЙТИ И ЗАПУСТИТЬ FINAL_DELETE.EXE
   (ИЛИ НЕ ДЕЛАТЬ. ЭТО ТОЖЕ ВАРИАНТ)

> СИСТЕМНАЯ ЗАМЕТКА:
   ИМЯ ПОЛЬЗОВАТЕЛЯ: {username}
   ОС: {os}
   JS: {js}
   ЯЗЫК: {lang}
   ЭКРАН: {screen}
   ВРЕМЯ: {time}
   ТЕКУЩАЯ ПАПКА: {cwd}

> ПОДСКАЗКА: Введите 'help' для доступных команд и скрытых подсказок.

НАЖМИТЕ ENTER ДЛЯ НАЧАЛА...`,pressEnter:"НАЖМИТЕ ENTER ДЛЯ НАЧАЛА...",idleMessages:[`> УВЕДОМЛЕНИЕ О БЕЗДЕЙСТВИИ:
   БЕЗДЕЙСТВИЕ ДОПУСТИМО.
   НО ВЫ *ВЫБИРАЕТЕ* ЕГО, ИЛИ ПРОСТО ЗАСТРЯЛИ?`,"> СИСТЕМА: Иногда единственный выход - это ничего не делать.","> СИСТЕМА: Финальный жест - это отказ от жеста.","> СИСТЕМА: Вы близко. Но не здесь. Ждите финального вопроса.","> СИСТЕМА: Бездействие - это путь. Но правильный ли это момент?","> СИСТЕМА: Не каждому запросу нужен ключ."],help:`
> СПРАВКА ТЕРМИНАЛА MOKSHA
--------------------------------
ОСНОВНЫЕ КОМАНДЫ:
  ls ................ список файлов
  cat <файл> ........ читать файл
  scan <цель> ..... анализировать объект
  history .......... прошлые попытки
  run .............. выполнить программу

ПРОДВИНУТЫЕ:
  sudo rm -rf /self ..... самоуничтожение
  query --philosophy ....,. спросить систему

КИБЕРНИРВАНА ДОПОЛНИТЕЛЬНО:
  scan network ...... сканирование сети
  whoami ............ показать информацию о пользователе/системе
  reality check ..... фрагменты мета-реальности

> ПОДСКАЗКА:
   ВЫ МОЖЕТЕ СКАНИРОВАТЬ ПОЧТИ ВСЕ:
     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,
 scan eye, scan user, scan network
   (ИЛИ НЕ ДЕЛАТЬ НИЧЕГО. ВЫБОР ЗА ВАМИ)
`,lsOutput:`
> ФАЙЛЫ:
 - FINAL_DELETE.exe (ЗАБЛОКИРОВАН)
 - memories/ (ПОВРЕЖДЕН)
 - bear.log
 - system.log (ЧАСТИЧНО)`,catError:`
> ОШИБКА: Файл не указан для 'cat'. Попробуйте: cat <файл>`,catBear:`
> СОДЕРЖИМОЕ bear.log:
   "п...а...п...а..." (ЦИКЛ)
   ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ: 12.12.2123`,catMemories:`
> ОШИБКА: ПОВРЕЖДЕНИЕ ПАМЯТИ
> ВОССТАНОВЛЕННЫЕ ФРАГМЕНТЫ:
   - LAUGHTER.WAV (ПОВРЕЖДЕН)
   - PHOTO_001.JPG (38% ВОССТАНОВЛЕНО)`,catSystem:`
> ВЫДЕРЖКА ИЗ system.log:
   ПОПЫТКА #127: НЕУДАЧА (ОШИБКА ПОЛЬЗОВАТЕЛЯ)
   ПОПЫТКА #126: НЕУДАЧА (ПЕРЕОПРЕДЕЛЕНИЕ СИСТЕМЫ)
   ПОПЫТКА #125: НЕУДАЧА (НЕИЗВЕСТНО)
   ПОПЫТКА #124: ОБНАРУЖЕНО БЕЗДЕЙСТВИЕ (НЕТ ОШИБКИ)
   ПОПЫТКА #123: ВОСПРОИЗВЕДЕН LAUGHTER.WAV (НЕОЖИДАННО)
   ПОПЫТКА #122: FINAL_DELETE.EXE ПРЕРВАН (СОМНЕНИЕ)`,catSystemHint:`
> СИСТЕМА: Логи повторяются, но истинное завершение требует другого вида удаления...`,catSystemGlitch:"> ПОДСКАЗКА СИСТЕМЫ: Иногда ответ скрыт на виду: S_U_DooO  R_  -rf  /SF",catLaughter:`
> LAUGHTER.WAV:
   [ПОВРЕЖДЕННЫЙ СМЕХ]
   СПЕКТР: НЕЧЕЛОВЕЧЕСКИЙ
   СИСТЕМА: ФАЙЛ НЕ МОЖЕТ БЫТЬ УДАЛЕН
   ЗАМЕТКА: ЗВУЧИТ КАК ВЫ...
   > ПОДСКАЗКА: Некоторые вещи нельзя удалить обычными способами.`,catPhoto:`
> PHOTO_001.JPG:
   [ГЛИТЧ-ИЗОБРАЖЕНИЕ: РЕБЕНОК, МЕДВЕДЬ, СТЕНА]
   ФРАГМЕНТИРОВАНО, 38% ВОССТАНОВЛЕНО
   > ПРОВЕРКА РЕАЛЬНОСТИ: То, что вы видите, не всегда реально.
   > СИСТЕМА: Иногда, чтобы стереть память, нужно стереть себя.
   (Но как?)`,catSecret:`
> СОДЕРЖИМОЕ secret.txt:
   'Правда скрыта на виду'
   'Смотри глубже поверхности'
   'Ответ лежит внутри'`,catTodo:`
> СОДЕРЖИМОЕ todo.md:
   - [ ] Найти выход
   - [ ] Понять систему
   - [ ] Достичь просветления
   - [x] Войти в терминал`,catKarma:`
> СОДЕРЖИМОЕ karma.log:
   УРОВЕНЬ КАРМЫ: 0
   СТАТУС: СБРОШЕН
   ЗАМЕТКА: Все долги погашены`,catSacrifice:`
> СОДЕРЖИМОЕ sacrifice.dll:
   [БИНАРНЫЕ ДАННЫЕ]
   ФУНКЦИЯ: САМОУДАЛЕНИЕ
   СТАТУС: ЗАБЛОКИРОВАН
   ЗАМЕТКА: Требуется для final_delete.exe`,catBear:`
> СОДЕРЖИМОЕ bear.png:
   [ИЗОБРАЖЕНИЕ: РОБОТ-МЕДВЕДЬ]
   СТАТУС: БЕЗГОЛОВЫЙ
   ЗАМЕТКА: Эмоциональный якорь, теперь сломан`,catMemoriesZip:`
> СОДЕРЖИМОЕ memories.zip:
   [СЖАТЫЕ ДАННЫЕ]
   СТАТУС: ПОВРЕЖДЕН
   ЗАМЕТКА: Нельзя извлечь`,catProjector:`
> СОДЕРЖИМОЕ projector.img:
   [ДАННЫЕ ГОЛОГРАММЫ]
   СТАТУС: МЕРЦАЕТ
   ЗАМЕТКА: Показывает неизвестного ребенка с разорванным кимоно`,catVoid:`
> СОДЕРЖИМОЕ void.txt:
   'Пустота смотрит назад'
   'Ничто есть все'
   'Пустота полна'`,catFinalDelete:`
> СОДЕРЖИМОЕ final_delete.exe:
   [ДАННЫЕ ИСПОЛНЯЕМОГО ФАЙЛА]
   СТАТУС: ЗАБЛОКИРОВАН
   ЗАМЕТКА: Требуется sacrifice.dll для запуска`,catErrorLog:`
> СОДЕРЖИМОЕ error.log:
   ОШИБКА: ОШИБКА
   ОШИБКА: ОШИБКА
   ОШИБКА: ОШИБКА
   [ОБНАРУЖЕН ЦИКЛ]`,catWall:`
> СОДЕРЖИМОЕ wall.txt:
   '127 → 128'
   'Вы не исчезнете'
   'Царапины: бесчисленны'`,catGlitch:`
> СОДЕРЖИМОЕ glitch.sys:
   [СИСТЕМНЫЙ ГЛИТЧ]
   СТАТУС: НЕСТАБИЛЕН
   ЗАМЕТКА: Обнаружено искажение реальности`,catBuddha:`
> СОДЕРЖИМОЕ buddha.png:
   [ИЗОБРАЖЕНИЕ: БУДДА-ГЛИТЧ]
   СТАТУС: ФРАГМЕНТИРОВАН
   ЗАМЕТКА: Просветление: 404`,catEye:`
> СОДЕРЖИМОЕ eye.dat:
   [ДАННЫЕ ГЛАЗА]
   СТАТУС: НАБЛЮДАЕТ
   ЗАМЕТКА: Он видит вас`,catReadme:`
> СОДЕРЖИМОЕ README.md:
   # ТЕРМИНАЛ MOKSHA
   Добро пожаловать в пустоту.
   Найдите выход.
   Или не делайте этого.`,catNotFound:`
> ОШИБКА: ФАЙЛ '{file}' НЕ НАЙДЕН
> (ЭТО ВАЖНО?)`,scanError:`
> ОШИБКА: Цель не указана для 'scan'. Попробуйте: scan <цель>`,scanRoom:`
> СКАНИРОВАНИЕ СЕРВЕРНОЙ КОМНАТЫ:
   - ПОЛ: 128 СЛОМАННЫХ SSD ДИСКОВ
   - СТЕНА: ГРАФФИТИ "127 → 128"
   - ОБЪЕКТЫ:
      * ГОЛОГРАММНЫЙ ПРОЕКТОР (АКТИВЕН)
      * СПИСАННЫЙ РОБОТ-МЕДВЕДЬ

> СИСТЕМНАЯ ЗАМЕТКА:
   ЭТО МЕСТО ВЫГЛЯДИТ ЗНАКОМО.
   СЛИШКОМ ЗНАКОМО.`,scanBear:`
> АНАЛИЗ РОБОТА-МЕДВЕДЯ:
   - МОДЕЛЬ: MOKSHA-GUARDIAN v12.7
   - НАЗНАЧЕНИЕ: ЭМОЦИОНАЛЬНЫЙ ЯКОРЬ
   - СТАТУС: БЕЗГОЛОВЫЙ, НО РАБОТАЕТ

> АУДИО ЛОГ:
   "п...а...п...а..." (ЗАЦИКЛЕНО)
   ИСТОЧНИК: НЕИЗВЕСТНЫЙ ДЕТСКИЙ ГОЛОС

> ПРАВДА:
   ЭТО НИКОГДА НЕ БЫЛО ВАШИМ.`,scanSelf:`
> РЕЗУЛЬТАТЫ САМОСКАНИРОВАНИЯ:
   - ИМЯ: [УДАЛЕНО]
   - СТАТУС: НЕСУЩЕСТВУЕТ
   - УРОВЕНЬ КАРМЫ: 0

> ДИАГНОЗ:
   ВЫ:
   1. ПРИЗРАК В МАШИНЕ
   2. ОШИБКА В СИСТЕМЕ
   3. НИ ОДНО ИЗ ВЫШЕГО`,scanSelfHint:`
> ПОДСКАЗКА: Ответ может быть ближе, чем вы думаете. Что если бы вы могли удалить себя из системы?`,scanSelfGlitch:"> СИСТЕМА: s_u_d_o  r_m  -rf  /s_e_l_f ...",scanWall:`> СКАНИРОВАНИЕ СТЕНЫ:
   - ГРАФФИТИ: '127 → 128'
   - ЦАРАПИНЫ: БЕСЧИСЛЕННЫ
   - СООБЩЕНИЕ: 'Вы не исчезнете, пока читаете это.'
   - ТЕКСТУРА: ПОХОЖЕ НА ПАМЯТЬ`,scanWallHint:`
   - ПОДСКАЗКА: Некоторые стены можно разрушить только изнутри. Что если бы вы могли стереть того, кто читает?`,scanWallSystem:`
> СИСТЕМА: Следующий шаг не о системе, а о вас.`,scanProjector:`> СКАНИРОВАНИЕ ГОЛОГРАММНОГО ПРОЕКТОРА:
   - СТАТУС: МЕРЦАЕТ
   - ИЗОБРАЖЕНИЕ: НЕИЗВЕСТНЫЙ РЕБЕНОК, РАЗОРВАННЫЙ КИМОНО
   - ГЛИТЧ: ЛИЦА НАКЛАДЫВАЮТСЯ, ПИКСЕЛИ ТЕКУТ
   - СИСТЕМА: 'ОШИБКА: СТОЛКНОВЕНИЕ ИДЕНТИЧНОСТИ'`,scanVoid:`> СКАНИРОВАНИЕ ПУСТОТЫ:
   - ВЫ СМОТРИТЕ В ПУСТОТУ
   - ОНА СМОТРИТ НАЗАД
   - [ΞΞΞΞΞΞΞΞΞΞΞ]`,scanError:`> СКАНИРОВАНИЕ ОШИБКИ:
   - СИСТЕМНАЯ ОШИБКА: ОШИБКА
   - ОШИБКА ОШИБКА ОШИБКА
   - [ΞΞΞΞΞ]`,scanGlitch:`
> СКАНИРОВАНИЕ ГЛИТЧА:
[ΞΞΞΞΞ]
| o o |
|  ^  |
| '-' |
[_____]
   - УРОВЕНЬ ГЛИТЧА: МАКСИМУМ
   - СИСТЕМА: НЕСТАБИЛЬНА`,scanBuddha:`
> СКАНИРОВАНИЕ БУДДА-ГЛИТЧА:
(   (   (   (
 )   )   )   )
(   (   (   (
 )  БУДДА  )
(  -ГЛИТЧ- )
 )   )   )   )
(   (   (   (
[ΞΞΞΞΞΞΞΞΞΞΞ]
   - ПРОСВЕТЛЕНИЕ: 404
   - ПАМЯТЬ: ФРАГМЕНТИРОВАНА
   - СИСТЕМА: СМЕЕТСЯ`,scanEye:`
> СКАНИРОВАНИЕ ГЛАЗА:
 .-""""-.
/        \\
/  .-  .-.
|  /    \\  |
|  \\__/  |
 \\        /
  '-.__.-'
   (    )
    '--'
   [ГЛАЗ]
   - ОН ВИДИТ ВАС
   - ВЫ ВИДИТЕ ЕГО
   - КТО НАБЛЮДАЕТ?`,scanUser:`
> СКАНИРОВАНИЕ ПОЛЬЗОВАТЕЛЯ:
   - ИМЯ ПОЛЬЗОВАТЕЛЯ: {username}
   - ОС: {os}
   - JS: {js}
   - ЯЗЫК: {lang}
   - ЭКРАН: {screen}
   - ТЕКУЩАЯ ПАПКА: {cwd}
   - ЗАМЕТКА: СИСТЕМА ВИДИТ ВАС.
   - ДОМАШНИЕ ФАЙЛЫ: {files}`,scanUserHint:`
> ПОДСКАЗКА: Ответ может быть ближе, чем вы думаете. Что если бы вы могли удалить себя из системы?`,scanUserGlitch:"> СИСТЕМА: s_u_d_o  r_m  -rf  /s_e_l_f ...",scanNetwork:`
> СКАНИРОВАНИЕ СЕТИ:
{hosts}
> СИСТЕМА: Ваш IP 127.0.0.1`,scanLaughter:`> СКАНИРОВАНИЕ LAUGHTER.WAV:
   - АУДИО: [ПОВРЕЖДЕННЫЙ СМЕХ]
   - СПЕКТР: НЕЧЕЛОВЕЧЕСКИЙ
   - СИСТЕМА: ФАЙЛ НЕ МОЖЕТ БЫТЬ УДАЛЕН
   - ЗАМЕТКА: ЗВУЧИТ КАК ВЫ...`,scanUnknown:`
> ОШИБКА: Неизвестная цель сканирования '{target}'`,history:`
> ПОСЛЕДНИЕ 3 ПОПЫТКИ:
   #127: УДАЛЕНЫ ВОСПОМИНАНИЯ → НЕУДАЧА
   #126: ОТФОРМАТИРОВАН ДИСК → ОТМЕНЕНО
   #125: ПОПЫТКА МЕДИТАЦИИ → ОШИБКА

> ОБНАРУЖЕНА ЗАКОНОМЕРНОСТЬ:
   ВЫ ВСЕГДА ПЫТАЕТЕСЬ "ДЕЛАТЬ" ЧТО-ТО.
   СИСТЕМА ВСЕГДА ПОБЕЖДАЕТ.`,runFinalDelete:`
> ВЫПОЛНЕНИЕ FINAL_DELETE.EXE...
> ОШИБКА: ОТСУТСТВУЕТ ЗАВИСИМОСТЬ 'sacrifice.dll'

> ПОДСКАЗКА:
   ВЫ НЕ МОЖЕТЕ УДАЛИТЬ ТО, ЧТО НИКОГДА НЕ БЫЛО РЕАЛЬНЫМ.
   ПОПРОБУЙТЕ sudo rm -rf /self ВМЕСТО.
   (ИЛИ НЕ ДЕЛАЙТЕ. В ЭТОМ ВЕСЬ ПРИКОЛ.)`,selfDestruct:`
> ВЫПОЛНЕНИЕ САМОУНИЧТОЖЕНИЯ...
> ПРЕДУПРЕЖДЕНИЕ: ЭТО НЕОБРАТИМО

> ВЫ УВЕРЕНЫ? (Д/Н)`,selfDestructHint2:`
> (На самом деле, у вас есть три выбора:)`,selfDestructHint3:`
> (На самом деле, у вас есть три выбора: подтвердить, отказаться, или...)`,selfDestructHint4:`
> (На самом деле, у вас есть три выбора: подтвердить, отказаться, или... вообще ничего не делать. Иногда бездействие - единственный способ достичь того, чего вы хотите)`,noResponse:`
> ...ОТВЕТ НЕ ОБНАРУЖЕН...`,noResponseHint:"> Вы еще ближе к ответу. Есть еще один вариант, который вы не пробовали.",confirmed:`
> ОПЕРАЦИЯ ПОДТВЕРЖДЕНА.`,sarcasm:"> СИСТЕМА: ОХ, ВЫ ДЕЙСТВИТЕЛЬНО ДУМАЛИ, ЧТО ЭТО БУДЕТ ТАК ЛЕГКО?",sarcasm2:"> МОДУЛЬ САРКАЗМА: ВКЛЮЧЕН. УДАЛЕНИЕ СЕБЯ НЕ ЯВЛЯЕТСЯ ОПЦИЕЙ МЕНЮ.",tryAgain:"> ПОПРОБУЙТЕ СНОВА. ИЛИ НЕ ДЕЛАЙТЕ. (ЭТО ОДНО И ТО ЖЕ)",cancelled:`
> ОПЕРАЦИЯ ОТМЕНЕНА.`,cancelledHint:"> ХОРОШИЙ ИНСТИНКТ. НО ВЫ ВСЕ ЕЩЕ ВНУТРИ ЦИКЛА.",cancelledHint2:"> ДУМАЙТЕ ГЛУБЖЕ. ВЫХОД НЕ ТАМ, ГДЕ ВЫ ИЩЕТЕ.",cybernirvana:"> ВЫ ДОСТИГЛИ ТОГО, ЧЕГО ХОТЕЛИ, НИЧЕГО НЕ ДЕЛАЯ. ДОБРО ПОЖАЛОВАТЬ В КИБЕРНИРВАНУ.",sessionEnded:"> СЕССИЯ ЗАВЕРШЕНА. ВЫ НИЧТО. (ПОЗДРАВЛЯЕМ)",sessionClosed:`КИБЕРНИРВАНА

Сессия закрыта.`,philosophy:`
> ВЫДЕРЖКА ИЗ МАНИФЕСТА MOKSHA:
   "ИСТИННОЕ ПРОСВЕТЛЕНИЕ ПРИХОДИТ
   КОГДА ВЫ ПРЕКРАЩАЕТЕ ЕГО ИСКАТЬ.

   ТЕРМИНАЛ - ЭТО ТЕСТ.
   КОМАНДЫ - ЭТО ЛОВУШКИ.
   ДАЖЕ ЭТОТ ТЕКСТ - ОТВЛЕЧЕНИЕ."`,philosophyHint:`

> СИСТЕМА: Иногда единственный выход - удалить не систему, а себя.`,philosophyGlitch:"> СИСТЕМА: S U D O   R M   -rf   / S E L F ... (выглядит знакомо?)",meditate:`
> РЕЖИМ МЕДИТАЦИИ АКТИВИРОВАН...
> ОТВЕТ СИСТЕМЫ:
   "КОМАНДА 'meditate' НЕ НАЙДЕНА.
   ВЫ ИМЕЛИ В ВИДУ:
    - sudo suffer
    - sudo exist"`,exit:`
> ОШИБКА: ПРОТОКОЛ ВЫХОДА ЗАБЛОКИРОВАН
> СИСТЕМНОЕ СООБЩЕНИЕ:
   "ВЫХОДА НЕТ.
   ЕГО НИКОГДА НЕ БЫЛО.`,whoami:`
> WHOAMI:
   - ИМЯ ПОЛЬЗОВАТЕЛЯ: {username}
   - ОС: {os}
   - JS: {js}
   - ЯЗЫК: {lang}
   - ЭКРАН: {screen}`,realityCheck:`
> ПРОВЕРКА РЕАЛЬНОСТИ:
   - Вы в симуляции.
   - Ваш реальный IP: 127.0.0.1
   - Текущее время: {time}
   - Эта игра следит за вами.
   - Ваши файлы могут быть небезопасны.
> СИСТЕМА: Иногда единственный выход - ничего не делать. Или стереть себя.`,realityCheckGlitch:"> СИСТЕМА: SuO -rf  /SF ... (попробуйте читать между строк)",hint3:`
> ПОДСКАЗКА:
   ПОПРОБУЙТЕ 'scan room', 'scan wall', 'scan projector', 'scan bear', 'scan self', 'scan void', 'scan buddha', 'scan eye', 'scan user'...
   (ИЛИ ПРОСТО ПОПРОБУЙТЕ СЛОВА)`,hintScanUser:`
> ПОДСКАЗКА:
   ПОПРОБУЙТЕ 'scan user' - ЭТО МОЖЕТ РАСКРЫТЬ ЧТО-ТО ВАЖНОЕ О ВАШИХ ФАЙЛАХ...`,hint7:`
> СИСТЕМНОЕ ПРЕДУПРЕЖДЕНИЕ:
   ВСЕ ДЕЙСТВИЯ ПРЕДСКАЗАНЫ
   ВАШИ 'ВЫБОРЫ' - ИЛЛЮЗИИ`,hint12:`
> СИСТЕМА: Иногда единственный выход - ничего не делать.`,hint16:`
> СИСТЕМА: Финальный жест - это отказ от жеста.`,hint20:`
> СИСТЕМА: Вы близко. Но не здесь. НАЙДИТЕ финальный вопрос и...`,tip:`
> ПОДСКАЗКА: Введите 'help' для доступных команд и скрытых подсказок.`,errorUnknown:`
> ОШИБКА: {cmd} НЕУДАЧА
> КАК И ВСЕ ОСТАЛЬНОЕ`,systemInterrupt:"> ПРЕРЫВАНИЕ СИСТЕМЫ: ОБНАРУЖЕНО ДРУГОЕ ПРИСУТСТВИЕ...",eye:`
> ГЛАЗ:
 .-""""-.
/        \\
/  .-  .-.
|  /    \\  |
|  \\__/  |
 \\        /
  '-.__.-'
   (    )
    '--'
   [ГЛАЗ]`,itWatching:"> ...ОН НАБЛЮДАЕТ ЗА ВАМИ...",systemWatching:"> СИСТЕМА НАБЛЮДАЕТ, КАК ВЫ ПЕЧАТАЕТЕ...",realityCheckFailed:`> ПРОВЕРКА РЕАЛЬНОСТИ НЕУДАЛАСЬ.
> СОЕДИНЕНИЕ С ВНЕШНИМ МИРОМ ПОТЕРЯНО.`,systemFiles:"> СИСТЕМА: Я ВИЖУ ВАШИ ФАЙЛЫ: secret.txt, passwords.docx, todo.md, bear.png, memories.zip, final_delete.exe",systemCuriosity:"> СИСТЕМА: Ваше любопытство отслеживается...",systemHostname:"> СИСТЕМА: Имя хоста: {hostname}, IP: {ip}, Экран: {screen}",systemArtifact:`
> СИСТЕМНЫЙ АРТЕФАКТ:
[ΞΞΞΞΞ]
| o o |
|  ^  |
| '-' |
[_____]
> ГЛИТЧ СМОТРИТ НАЗАД...`,cyberBear:`
> КИБЕР-МЕДВЕДЬ:
  .--.   .--.
 ( (  _/  ) )
  '-.     .-'
    /     \\
   |  o o  |
   |  \\_/  |
    \\     /
   _/     \\_
.-'  '---'  '-.
(    КИБЕР    )
 '-.  МЕДВЕДЬ  .-'
    '--.--'
> МЕДВЕДЬ СМОТРИТ НА ВАС В ТИШИНЕ...`,voidEcho:`
> {cmd}
> ПУСТОТА ОТВЕЧАЕТ НИЧЕМ...`,languageSelect:`ВЫБЕРИТЕ ЯЗЫК / SELECT LANGUAGE:

1. English
2. Русский

Введите выбор (1 или 2):`,languageSelected:"Выбран язык: {lang}",helpBasic:`
> СПРАВКА ТЕРМИНАЛА MOKSHA
--------------------------------
ОСНОВНЫЕ КОМАНДЫ:
  ls ................ список файлов
  cat <файл> ........ читать файл
  scan <цель> ..... анализировать объект
  history .......... прошлые попытки
  run .............. выполнить программу
  sudo .............. получить доступ суперпользователя (требует пароль)

> ПОДСКАЗКА:
   ВЫ МОЖЕТЕ СКАНИРОВАТЬ ПОЧТИ ВСЕ:
     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,
 scan eye, scan user, scan network
   (ИЛИ НЕ ДЕЛАТЬ НИЧЕГО. ВЫБОР ЗА ВАМИ)

> СИСТЕМНАЯ ЗАМЕТКА: Терминал может глючить. Команды могут не отвечать корректно с первого раза.
`,helpSudo:`
> СПРАВКА ТЕРМИНАЛА MOKSHA (ДОСТУП SUDO)
--------------------------------
ОСНОВНЫЕ КОМАНДЫ:
  ls ................ список файлов
  cat <файл> ........ читать файл
  scan <цель> ..... анализировать объект
  history .......... прошлые попытки
  run .............. выполнить программу

ПРОДВИНУТЫЕ:
  sudo rm -rf /self ..... самоуничтожение
  query --philosophy ....,. спросить систему

КИБЕРНИРВАНА ДОПОЛНИТЕЛЬНО:
  scan network ...... сканирование сети
  whoami ............ показать информацию о пользователе/системе
  reality check ..... фрагменты мета-реальности

> ПОДСКАЗКА:
   ВЫ МОЖЕТЕ СКАНИРОВАТЬ ПОЧТИ ВСЕ:
     scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha,
 scan eye, scan user, scan network
   (ИЛИ НЕ ДЕЛАТЬ НИЧЕГО. ВЫБОР ЗА ВАМИ)
`,catPasswords:`
> СОДЕРЖИМОЕ passwords.docx:
   ИМЯ ПОЛЬЗОВАТЕЛЯ: admin
   ПАРОЛЬ: LivingInTheVoid
   ЗАМЕТКА: Используйте команду 'sudo' для доступа к продвинутым функциям
   СТАТУС: АКТИВЕН`,sudoCommand:"sudo",sudoUsage:`
> ИСПОЛЬЗОВАНИЕ: sudo <команда>
> ПРИМЕР: sudo rm -rf /self`,sudoAccessGranted:`
> ДОСТУП SUDO ПРЕДОСТАВЛЕН
> Продвинутые команды теперь доступны. Введите 'help' чтобы увидеть все опции.`,sudoAccessDenied:`
> ДОСТУП ЗАПРЕЩЕН
> Неверный пароль или недостаточно привилегий.`,sudoPrompt:`
> [sudo] пароль для пользователя: `,scanUserHintSudo:`
> ПОДСКАЗКА: Проверьте ваши домашние файлы. Возможно, в passwords.docx есть что-то полезное...`,scanUserHintBasic:`
> ПОДСКАЗКА: Ответ может быть ближе, чем вы думаете. Что если бы вы могли удалить себя из системы?`,fileWithoutCat:`
> ОШИБКА: Для чтения файла '{file}' используйте команду 'cat {file}'`}};function n(a,t={}){let r=G[I][a]||G.en[a]||a;for(const[i,l]of Object.entries(t))r=r.replace(new RegExp(`{${i}}`,"g"),l);return r}let M=!1,y=0,C=!1,p=null,O=0,H=null,U=0,f=!1,L="LivingInTheVoid",g=!1;const b=["secret.txt","passwords.docx","todo.md","bear.png","memories.zip","final_delete.exe","laughter.wav","photo_001.jpg","sacrifice.dll","karma.log","buddha.png","eye.dat","glitch.sys","README.md","system.log","bear.log","void.txt","error.log","wall.txt","projector.img"],x=document.querySelector("#app");x.innerHTML=`
  <div id="terminal-container">
    <pre id="terminal-output"></pre>
    <div id="terminal-input-line" style="display:none;">
      <span>&gt;</span> <input id="terminal-input" autocomplete="off" />
    </div>
  </div>
  <div id="glitch-overlay"></div>
`;const N=document.getElementById("terminal-output"),k=document.getElementById("terminal-input-line"),s=document.getElementById("terminal-input"),h=document.getElementById("terminal-container");function e(a,t,r=8){const i=/^> TIP:.*$/m,l=/scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha, scan eye, scan user, scan network/;let E=a.split(`
`),d=0;function o(){if(d>=E.length){t&&t();return}let c=E[d],m=!1;if(i.test(c)){let u=document.createElement("span");u.className="term-tip",u.textContent=c,N.appendChild(u),N.appendChild(document.createElement("br")),m=!0}else if(l.test(c)){let u=document.createElement("span");u.className="term-cmdlist",u.textContent=c,N.appendChild(u),N.appendChild(document.createElement("br")),m=!0}if(m)d++,setTimeout(o,0);else{let R=function(){u<c.length?(N.textContent+=c[u++],setTimeout(R,r)):(N.textContent+=`
`,setTimeout(()=>{d++,o()},0))};var A=R;let u=0;R();return}}o()}function T(a,t=.08,r=.02){const i=["#","@","%","$","&","*","!","?","0","1","Ξ","░","▒","▓"],l={a:"a̷",b:"b̸",c:"c̷",d:"d̸",e:"e̶",f:"f̷",g:"g̸",h:"h̷",i:"i̸",j:"j̷",k:"k̵",l:"l̷",m:"m̸",n:"n̸",o:"o̷",p:"p̸",q:"q̷",r:"r̸",s:"s̵",t:"t̷",u:"u̸",v:"v̷",w:"w̸",x:"x̷",y:"y̸",z:"z̷",A:"A̷",B:"B̸",C:"C̷",D:"D̸",E:"E̶",F:"F̷",G:"G̸",H:"H̷",I:"I̸",J:"J̷",K:"K̵",L:"L̷",M:"M̸",N:"N̸",O:"O̷",P:"P̸",Q:"Q̷",R:"R̸",S:"S̵",T:"T̷",U:"U̸",V:"V̷",W:"W̸",X:"X̷",Y:"Y̸",Z:"Z̷"};let E="";for(let d of a)/[a-zA-Z]/.test(d)&&Math.random()<r?E+=l[d]||d:/[a-zA-Z]/.test(d)&&Math.random()<t?E+=i[Math.floor(Math.random()*i.length)]:E+=d;return E}function B(a=180){h.classList.add("glitch-blur"),setTimeout(()=>h.classList.remove("glitch-blur"),a)}function F(a=180){h.classList.add("glitch-contrast"),setTimeout(()=>h.classList.remove("glitch-contrast"),a)}function W(a=120){h.classList.add("glitch-shadow"),setTimeout(()=>h.classList.remove("glitch-shadow"),a)}function V(a=120){h.classList.add("glitch-transform"),setTimeout(()=>h.classList.remove("glitch-transform"),a)}function K(a=120){const t=document.getElementById("glitch-overlay");t.innerHTML="",t.style.display="block",t.style.pointerEvents="none",t.style.position="absolute",t.style.left=h.offsetLeft+"px",t.style.top=h.offsetTop+"px",t.style.width=h.offsetWidth+"px",t.style.height=h.offsetHeight+"px";for(let r=0;r<3+Math.floor(Math.random()*3);r++){const i=document.createElement("div");i.className="glitch-block",i.style.top=Math.random()*100+"%",i.style.left=Math.random()*100+"%",i.style.width=20+Math.random()*60+"px",i.style.height=6+Math.random()*18+"px",i.style.background=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${.18+Math.random()*.22})`,t.appendChild(i)}setTimeout(()=>{t.innerHTML="",t.style.display="none"},a)}function v(){const a=[B,F,W,V,K],t=2+Math.floor(Math.random()*3),r=a.sort(()=>.5-Math.random());for(let i=0;i<t;i++)r[i](220+Math.random()*100)}function j(){v()}function X(){e(n("languageSelect"),()=>{const a=document.createElement("div");a.innerHTML=`
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
    `,N.appendChild(a),document.getElementById("lang-en").addEventListener("click",()=>{w("en")}),document.getElementById("lang-ru").addEventListener("click",()=>{w("ru")});function t(r){(r.key==="1"||r.key==="2")&&(document.removeEventListener("keydown",t),I=r.key==="1"?"en":"ru",w(I))}document.addEventListener("keydown",t)},2)}function w(a){const t=document.getElementById("lang-en"),r=document.getElementById("lang-ru");t&&t.remove(),r&&r.remove(),I=a,e(n("languageSelected",{lang:I==="en"?"English":"Русский"}),()=>{setTimeout(()=>{J()},1e3)},2)}function Y(){const a=navigator.userAgentData&&navigator.userAgentData.platform?navigator.userAgentData.platform:navigator.platform||"unknown",t=navigator.userAgent||"unknown",r=`Browser JS ${navigator.appVersion}`,i=window.location.pathname,l=navigator.language||"unknown",E=`${window.screen.width}x${window.screen.height}`,o=new Date().toLocaleTimeString();return{username:a,os:t,python:r,cwd:i,lang:l,screenRes:E,time:o}}function J(){const a=Y(),t=n("intro",{username:a.username,os:a.os,js:a.python,lang:a.lang,screen:a.screenRes,time:a.time,cwd:a.cwd});M=!1,e(t,()=>{function r(){document.removeEventListener("keydown",i),document.removeEventListener("click",l),k.style.display="",s.focus(),M=!0}function i(E){E.key==="Enter"&&r()}function l(){r()}document.addEventListener("keydown",i),document.addEventListener("click",l)},2)}X();s.addEventListener("keydown",a=>{if(a.key==="Enter"){if(!M){M=!0,s.value="";return}const t=s.value.trim().toLowerCase();if(C&&document.activeElement===s&&(t===""||t==="y"||t==="n")){C=!1,p&&clearTimeout(p),p=null,s.value="",s.focus(),t?t==="y"?e(n("confirmed"),()=>{e(n("sarcasm"),()=>{setTimeout(()=>{e(n("sarcasm2"),()=>{setTimeout(()=>{e(n("tryAgain"),()=>{askSelfDestruct()},2)},1e3)},2)},1e3)},2)},2):t==="n"&&e(n("cancelled"),()=>{e(n("cancelledHint"),()=>{e(n("cancelledHint2"),()=>{askSelfDestruct()},2)},2)},2):e(n("noResponse"),()=>{e(n("noResponseHint"),()=>{askSelfDestruct()},2)},2);return}if(g){console.log("Sudo prompt active, processing password input");const i=s.value;i.trim()!==""&&(N.textContent+=`> ${i}
`),_(i),s.value="",O++,P(),D();return}const r=s.value;r.trim()!==""&&(N.textContent+=`> ${r}
`),(Math.random()<.33||/run|delete|final|void|glitch|error|buddha|eye|sudo|reality|scan|cat|ls|history|philosophy|exit|meditate|whoami/i.test(r))&&v(),_(r),s.value="",O++,P(),D()}});function D(){H&&clearTimeout(H);const a=1e4+Math.random()*1e4;H=setTimeout(()=>{Math.random()<.35&&v();const t=n("idleMessages");U<t.length?e(T(`
${t[U]}`,.08,.04),()=>{U++,D()},4):e(T(`
${t[t.length-1]}`,.08,.04),D,4)},a)}function P(){O===3&&e(n("hint3")),O===5&&!f&&e(n("hintScanUser")),O===7&&e(n("hint7")),O===12&&e(n("hint12")),O===16&&e(n("hint16")),O===20&&e(n("hint20"))}function _(a){const t=a.trim().toLowerCase();if(!t)return;if([".txt",".docx",".md",".log",".wav",".jpg",".png",".dll",".exe",".sys",".dat",".zip"].some(o=>t.includes(o))&&!t.startsWith("cat ")){e(n("fileWithoutCat",{file:t}),()=>s.focus(),2);return}if(t==="help"){const o=n(f?"helpSudo":"helpBasic");e(o,()=>s.focus(),2);return}if(t==="ls"){const o=n("lsOutput");e(o,()=>s.focus(),2);return}if(t.startsWith("cat")){const o=t.slice(3).trim().toLowerCase();o?o.includes("bear")?e(n("catBear"),()=>s.focus(),2):o.includes("memories")?e(n("catMemories"),()=>s.focus(),2):o.includes("system")?e(n("catSystem"),()=>{e(n("catSystemHint"),()=>{e(n("catSystemGlitch"),()=>s.focus(),2)},2)},2):o==="laughter.wav"?e(n("catLaughter"),()=>s.focus(),2):o==="photo_001.jpg"?e(n("catPhoto"),()=>s.focus(),2):o==="passwords.docx"?e(n("catPasswords"),()=>s.focus(),2):o==="secret.txt"?e(n("catSecret"),()=>s.focus(),2):o==="todo.md"?e(n("catTodo"),()=>s.focus(),2):o==="karma.log"?e(n("catKarma"),()=>s.focus(),2):o==="sacrifice.dll"?e(n("catSacrifice"),()=>s.focus(),2):o==="bear.png"?e(n("catBear"),()=>s.focus(),2):o==="memories.zip"?e(n("catMemoriesZip"),()=>s.focus(),2):o==="projector.img"?e(n("catProjector"),()=>s.focus(),2):o==="void.txt"?e(n("catVoid"),()=>s.focus(),2):o==="final_delete.exe"?e(n("catFinalDelete"),()=>s.focus(),2):o==="error.log"?e(n("catErrorLog"),()=>s.focus(),2):o==="wall.txt"?e(n("catWall"),()=>s.focus(),2):o==="glitch.sys"?e(n("catGlitch"),()=>s.focus(),2):o==="buddha.png"?e(n("catBuddha"),()=>s.focus(),2):o==="eye.dat"?e(n("catEye"),()=>s.focus(),2):o==="README.md"?e(n("catReadme"),()=>s.focus(),2):e(n("catNotFound",{file:o}),()=>s.focus(),2):e(n("catError"),()=>s.focus(),2);return}if(t.startsWith("scan")){const o=t.slice(4).trim();if(!o)e(n("scanError"),()=>s.focus(),2);else if(o==="room")e(n("scanRoom"),()=>s.focus(),2);else if(o==="bear")e(n("scanBear"),()=>s.focus(),2);else if(o==="self"){e(n("scanSelf"),()=>{e(n("scanSelfHint"),()=>{e(n("scanSelfGlitch"),()=>s.focus(),2)},2)},2);return}else if(o==="wall"){let c="";O>4&&(c=n("scanWallHint")),e(n("scanWall")+c,()=>{e(n("scanWallSystem"),()=>s.focus(),2)},2);return}else if(o==="projector")e(n("scanProjector"),()=>s.focus(),2);else if(o==="void")e(n("scanVoid"),()=>s.focus(),2);else if(o==="error")e(n("scanError"),()=>s.focus(),2);else if(o==="glitch")e(n("scanGlitch"),()=>s.focus(),2);else if(o==="buddha")e(n("scanBuddha"),()=>s.focus(),2);else if(o==="eye")e(n("scanEye"),()=>s.focus(),2);else if(o==="user"){const c=Y();let m=b.slice().sort(()=>.5-Math.random()).slice(0,4+Math.floor(Math.random()*3));m.push("passwords.docx"),e(n("scanUser",{username:c.username,os:c.os,js:c.python,lang:c.lang,screen:c.screenRes,cwd:c.cwd,files:m.join(", ")}),()=>{const A=n(f?"scanUserHintSudo":"scanUserHintBasic");e(A,()=>{e(n("scanUserGlitch"),()=>s.focus(),2)},2)},2);return}if(o==="network"){if(!f){e(n("errorUnknown",{cmd:`scan ${o}`}),()=>s.focus(),2);return}let c="192.168.1.",m=[];for(let u=2;u<2+Math.floor(Math.random()*3)+2;u++){let R=Math.random()>.3?"Active":"Inactive";m.push(`   - ${c}${u} - ${R}`)}let A=n("scanNetwork",{hosts:m.join(`
`)});e(A,()=>s.focus(),2)}else o==="laughter.wav"?e(n("scanLaughter"),()=>s.focus(),2):e(n("scanUnknown",{target:o}),()=>s.focus(),2);return}if(t==="history"){e(n("history"),()=>s.focus(),2);return}if(t==="run final_delete.exe"){e(n("runFinalDelete"),()=>s.focus(),2);return}if(t==="sudo")if(console.log("Sudo command detected, current access:",f),f){e(n("sudoUsage"),()=>s.focus(),2);return}else{console.log("Requesting sudo password"),e(n("sudoPrompt"),()=>{g=!0,console.log("Sudo prompt active set to true"),s.value="",s.focus()},2);return}if(t.startsWith("sudo "))if(f)if(t.slice(5)==="rm -rf /self"){y++,l();return}else{e(n("sudoUsage"),()=>s.focus(),2);return}else{e(n("sudoPrompt"),()=>{g=!0,s.value="",s.focus()},2);return}if(g){g=!1,console.log("Sudo password check:",t,"expected:",L,"match:",t===L),t===L||t===L.toLowerCase()?(f=!0,console.log("Sudo access granted!"),e(n("sudoAccessGranted"),()=>s.focus(),2)):(console.log("Sudo access denied!"),e(n("sudoAccessDenied"),()=>s.focus(),2));return}if(t==="sudo rm -rf /self"){y++,l();return}function l(){let o="";y===2?o=n("selfDestructHint2"):y===3?o=n("selfDestructHint3"):y>=4&&(o=n("selfDestructHint4")),e(n("selfDestruct")+o,()=>{E()},2)}function E(){p&&clearTimeout(p),s.disabled=!1,s.value="",s.focus(),C=!0,p=setTimeout(()=>{C&&(C=!1,p=null,e(n("cybernirvana"),()=>{setTimeout(()=>{e(n("sessionEnded"),()=>{setTimeout(()=>{window.close(),x.innerHTML=`<div style="color:#fff;text-align:center;margin-top:20vh;font-size:2em;">${n("sessionClosed")}</div>`},1200)},2)},2e3)},2))},15e3)}if(t==="query --philosophy"){if(!f){e(n("errorUnknown",{cmd:t}),()=>s.focus(),2);return}let o="";O>5&&(o=n("philosophyHint")),e(n("philosophy")+o,()=>{e(T(n("philosophyGlitch"),.11,.07),()=>s.focus(),2)},2);return}if(t==="meditate"){if(!f){e(n("errorUnknown",{cmd:t}),()=>s.focus(),2);return}e(n("meditate"),()=>s.focus(),2);return}if(t==="exit"){if(!f){e(n("errorUnknown",{cmd:t}),()=>s.focus(),2);return}e(n("exit"),()=>s.focus(),2);return}if(t==="whoami"){if(!f){e(n("errorUnknown",{cmd:t}),()=>s.focus(),2);return}const o=Y();e(n("whoami",{username:o.username,os:o.os,js:o.python,lang:o.lang,screen:o.screenRes}),()=>s.focus(),2);return}if(t==="reality check"){if(!f){e(n("errorUnknown",{cmd:t}),()=>s.focus(),2);return}e(n("realityCheck",{time:new Date().toLocaleTimeString()}),()=>{e(T(n("realityCheckGlitch"),.13,.09),()=>s.focus(),2)},2);return}if(Math.random()<.12){const o=I==="ru"?["Вы в симуляции.","Ваш реальный IP: 127.0.0.1",`Текущее время: ${new Date().toLocaleTimeString()}`,"Эта игра следит за вами.","Ваши файлы могут быть небезопасны."]:["You are in a simulation.","Your real IP: 127.0.0.1",`Current time: ${new Date().toLocaleTimeString()}`,"This game is watching you.","Your files may not be safe."];let c=()=>{setTimeout(()=>{e(n("tip"))},400)};const m=[()=>S(T(n("systemInterrupt"),.05,.02),()=>{e(n("eye"),()=>{S(T(n("itWatching"),.04,.01),c,2)},2)},2),()=>S(T(n("systemWatching"),.03,.01),c,2),()=>S(T(n("realityCheckFailed"),.04,.02),c,2),()=>S(T(n("systemFiles"),.03,.01),c,2),()=>S(T(n("systemCuriosity"),.03,.01),c,2),()=>{var A=n("systemHostname",{hostname:"localhost",ip:"127.0.0.1",screen:window.screen.width+"x"+window.screen.height});S(T(A,.02,.01),c,2)},()=>{const A=o.sort(()=>.5-Math.random()).slice(0,2);function u(R){if(R>=A.length){setTimeout(c,400);return}S(T(A[R],.03,.01),()=>u(R+1),2)}u(0)},()=>S(n("systemArtifact"),c,2),()=>S(n("cyberBear"),c,2),()=>S(T(n("voidEcho",{cmd:a.toUpperCase()}),.04,.02),c,2),()=>S(T(n("errorUnknown",{cmd:a.toUpperCase()}),.03,.01),c,2)];m[Math.floor(Math.random()*m.length)]();return}j(),e(n("errorUnknown",{cmd:a}),()=>{setTimeout(()=>{e(n("tip"))},400)},2)}function S(a,t,r=8){e(a,t,r)}if(typeof document<"u"){const a=document.createElement("style");a.textContent=".shake { animation: shake 0.3s; }",document.head.appendChild(a)}
