(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const e of l)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(l){const e={};return l.integrity&&(e.integrity=l.integrity),l.referrerPolicy&&(e.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?e.credentials="include":l.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(l){if(l.ep)return;l.ep=!0;const e=i(l);fetch(l.href,e)}})();let y="en";const U={en:{intro:`MOKSHA CORP. TERMINAL SESSION #128
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
   (But how?)`,catNotFound:`
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
   (OR JUST TRY WORDS)`,hint7:`
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

Enter choice (1 or 2):`,languageSelected:"Language selected: {lang}"},ru:{intro:`MOKSHA CORP. СЕССИЯ ТЕРМИНАЛА #128
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
   (Но как?)`,catNotFound:`
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
   (ИЛИ ПРОСТО ПОПРОБУЙТЕ СЛОВА)`,hint7:`
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

Введите выбор (1 или 2):`,languageSelected:"Выбран язык: {lang}"}};function n(o,s={}){let i=U[y][o]||U.en[o]||o;for(const[c,l]of Object.entries(s))i=i.replace(new RegExp(`{${c}}`,"g"),l);return i}let L=!1,I=0,N=!1,R=null,d=0,g=null,M=0;const w=["secret.txt","passwords.docx","todo.md","bear.png","memories.zip","final_delete.exe","laughter.wav","photo_001.jpg","sacrifice.dll","karma.log","buddha.png","eye.dat","glitch.sys","README.md","system.log","bear.log","void.txt","error.log","wall.txt","projector.img"],Y=document.querySelector("#app");Y.innerHTML=`
  <div id="terminal-container">
    <pre id="terminal-output"></pre>
    <div id="terminal-input-line" style="display:none;">
      <span>&gt;</span> <input id="terminal-input" autocomplete="off" />
    </div>
  </div>
  <div id="glitch-overlay"></div>
`;const O=document.getElementById("terminal-output"),_=document.getElementById("terminal-input-line"),a=document.getElementById("terminal-input"),m=document.getElementById("terminal-container");function t(o,s,i=8){const c=/^> TIP:.*$/m,l=/scan room, scan bear, scan self, scan wall, scan projector, scan void, scan error, scan glitch, scan buddha, scan eye, scan user, scan network/;let e=o.split(`
`),r=0;function T(){if(r>=e.length){s&&s();return}let u=e[r],f=!1;if(c.test(u)){let h=document.createElement("span");h.className="term-tip",h.textContent=u,O.appendChild(h),O.appendChild(document.createElement("br")),f=!0}else if(l.test(u)){let h=document.createElement("span");h.className="term-cmdlist",h.textContent=u,O.appendChild(h),O.appendChild(document.createElement("br")),f=!0}if(f)r++,setTimeout(T,0);else{let p=function(){h<u.length?(O.textContent+=u[h++],setTimeout(p,i)):(O.textContent+=`
`,setTimeout(()=>{r++,T()},0))};var A=p;let h=0;p();return}}T()}function E(o,s=.08,i=.02){const c=["#","@","%","$","&","*","!","?","0","1","Ξ","░","▒","▓"],l={a:"a̷",b:"b̸",c:"c̷",d:"d̸",e:"e̶",f:"f̷",g:"g̸",h:"h̷",i:"i̸",j:"j̷",k:"k̵",l:"l̷",m:"m̸",n:"n̸",o:"o̷",p:"p̸",q:"q̷",r:"r̸",s:"s̵",t:"t̷",u:"u̸",v:"v̷",w:"w̸",x:"x̷",y:"y̸",z:"z̷",A:"A̷",B:"B̸",C:"C̷",D:"D̸",E:"E̶",F:"F̷",G:"G̸",H:"H̷",I:"I̸",J:"J̷",K:"K̵",L:"L̷",M:"M̸",N:"N̸",O:"O̷",P:"P̸",Q:"Q̷",R:"R̸",S:"S̵",T:"T̷",U:"U̸",V:"V̷",W:"W̸",X:"X̷",Y:"Y̸",Z:"Z̷"};let e="";for(let r of o)/[a-zA-Z]/.test(r)&&Math.random()<i?e+=l[r]||r:/[a-zA-Z]/.test(r)&&Math.random()<s?e+=c[Math.floor(Math.random()*c.length)]:e+=r;return e}function G(o=180){m.classList.add("glitch-blur"),setTimeout(()=>m.classList.remove("glitch-blur"),o)}function P(o=180){m.classList.add("glitch-contrast"),setTimeout(()=>m.classList.remove("glitch-contrast"),o)}function v(o=120){m.classList.add("glitch-shadow"),setTimeout(()=>m.classList.remove("glitch-shadow"),o)}function F(o=120){m.classList.add("glitch-transform"),setTimeout(()=>m.classList.remove("glitch-transform"),o)}function b(o=120){const s=document.getElementById("glitch-overlay");s.innerHTML="",s.style.display="block",s.style.pointerEvents="none",s.style.position="absolute",s.style.left=m.offsetLeft+"px",s.style.top=m.offsetTop+"px",s.style.width=m.offsetWidth+"px",s.style.height=m.offsetHeight+"px";for(let i=0;i<3+Math.floor(Math.random()*3);i++){const c=document.createElement("div");c.className="glitch-block",c.style.top=Math.random()*100+"%",c.style.left=Math.random()*100+"%",c.style.width=20+Math.random()*60+"px",c.style.height=6+Math.random()*18+"px",c.style.background=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${.18+Math.random()*.22})`,s.appendChild(c)}setTimeout(()=>{s.innerHTML="",s.style.display="none"},o)}function H(){const o=[G,P,v,F,b],s=2+Math.floor(Math.random()*3),i=o.sort(()=>.5-Math.random());for(let c=0;c<s;c++)i[c](220+Math.random()*100)}function B(){H()}function W(){t(n("languageSelect"),()=>{function o(s){(s.key==="1"||s.key==="2")&&(document.removeEventListener("keydown",o),y=s.key==="1"?"en":"ru",t(n("languageSelected",{lang:y==="en"?"English":"Русский"}),()=>{setTimeout(()=>{k()},1e3)},2))}document.addEventListener("keydown",o)},2)}function C(){const o=navigator.userAgentData&&navigator.userAgentData.platform?navigator.userAgentData.platform:navigator.platform||"unknown",s=navigator.userAgent||"unknown",i=`Browser JS ${navigator.appVersion}`,c=window.location.pathname,l=navigator.language||"unknown",e=`${window.screen.width}x${window.screen.height}`,T=new Date().toLocaleTimeString();return{username:o,os:s,python:i,cwd:c,lang:l,screenRes:e,time:T}}function k(){const o=C(),s=n("intro",{username:o.username,os:o.os,js:o.python,lang:o.lang,screen:o.screenRes,time:o.time,cwd:o.cwd});L=!1,t(s,()=>{function i(){document.removeEventListener("keydown",c),document.removeEventListener("click",l),_.style.display="",a.focus(),L=!0}function c(e){e.key==="Enter"&&i()}function l(){i()}document.addEventListener("keydown",c),document.addEventListener("click",l)},2)}W();a.addEventListener("keydown",o=>{if(o.key==="Enter"){if(!L){L=!0,a.value="";return}const s=a.value.trim().toLowerCase();if(N&&document.activeElement===a&&(s===""||s==="y"||s==="n")){N=!1,R&&clearTimeout(R),R=null,a.value="",a.focus(),s?s==="y"?t(n("confirmed"),()=>{t(n("sarcasm"),()=>{setTimeout(()=>{t(n("sarcasm2"),()=>{setTimeout(()=>{t(n("tryAgain"),()=>{askSelfDestruct()},2)},1e3)},2)},1e3)},2)},2):s==="n"&&t(n("cancelled"),()=>{t(n("cancelledHint"),()=>{t(n("cancelledHint2"),()=>{askSelfDestruct()},2)},2)},2):t(n("noResponse"),()=>{t(n("noResponseHint"),()=>{askSelfDestruct()},2)},2);return}const i=a.value;i.trim()!==""&&(O.textContent+=`> ${i}
`),(Math.random()<.33||/run|delete|final|void|glitch|error|buddha|eye|sudo|reality|scan|cat|ls|history|philosophy|exit|meditate|whoami/i.test(i))&&H(),V(i),a.value="",d++,x(),D()}});function D(){g&&clearTimeout(g);const o=1e4+Math.random()*1e4;g=setTimeout(()=>{Math.random()<.35&&H();const s=n("idleMessages");M<s.length?t(E(`
${s[M]}`,.08,.04),()=>{M++,D()},4):t(E(`
${s[s.length-1]}`,.08,.04),D,4)},o)}function x(){d===3&&t(n("hint3")),d===7&&t(n("hint7")),d===12&&t(n("hint12")),d===16&&t(n("hint16")),d===20&&t(n("hint20"))}function V(o){const s=o.trim().toLowerCase();if(!s)return;if(s==="help"){const e=n("help");t(e,()=>a.focus(),2);return}if(s==="ls"){const e=n("lsOutput");t(e,()=>a.focus(),2);return}if(s.startsWith("cat")){const e=s.slice(3).trim().toLowerCase();e?e.includes("bear")?t(n("catBear"),()=>a.focus(),2):e.includes("memories")?t(n("catMemories"),()=>a.focus(),2):e.includes("system")?t(n("catSystem"),()=>{t(n("catSystemHint"),()=>{t(n("catSystemGlitch"),()=>a.focus(),2)},2)},2):e==="laughter.wav"?t(n("catLaughter"),()=>a.focus(),2):e==="photo_001.jpg"?t(n("catPhoto"),()=>a.focus(),2):t(n("catNotFound",{file:e}),()=>a.focus(),2):t(n("catError"),()=>a.focus(),2);return}if(s.startsWith("scan")){const e=s.slice(4).trim();if(!e)t(n("scanError"),()=>a.focus(),2);else if(e==="room")t(n("scanRoom"),()=>a.focus(),2);else if(e==="bear")t(n("scanBear"),()=>a.focus(),2);else if(e==="self"){t(n("scanSelf"),()=>{t(n("scanSelfHint"),()=>{t(n("scanSelfGlitch"),()=>a.focus(),2)},2)},2);return}else if(e==="wall"){let r="";d>4&&(r=n("scanWallHint")),t(n("scanWall")+r,()=>{t(n("scanWallSystem"),()=>a.focus(),2)},2);return}else if(e==="projector")t(n("scanProjector"),()=>a.focus(),2);else if(e==="void")t(n("scanVoid"),()=>a.focus(),2);else if(e==="error")t(n("scanError"),()=>a.focus(),2);else if(e==="glitch")t(n("scanGlitch"),()=>a.focus(),2);else if(e==="buddha")t(n("scanBuddha"),()=>a.focus(),2);else if(e==="eye")t(n("scanEye"),()=>a.focus(),2);else if(e==="user"){const r=C();let T=w.slice().sort(()=>.5-Math.random()).slice(0,5+Math.floor(Math.random()*3));t(n("scanUser",{username:r.username,os:r.os,js:r.python,lang:r.lang,screen:r.screenRes,cwd:r.cwd,files:T.join(", ")}),()=>{t(n("scanUserHint"),()=>{t(n("scanUserGlitch"),()=>a.focus(),2)},2)},2);return}if(e==="network"){let r="192.168.1.",T=[];for(let f=2;f<2+Math.floor(Math.random()*3)+2;f++){let A=Math.random()>.3?"Active":"Inactive";T.push(`   - ${r}${f} - ${A}`)}let u=n("scanNetwork",{hosts:T.join(`
`)});t(u,()=>a.focus(),2)}else e==="laughter.wav"?t(n("scanLaughter"),()=>a.focus(),2):t(n("scanUnknown",{target:e}),()=>a.focus(),2);return}if(s==="history"){t(n("history"),()=>a.focus(),2);return}if(s==="run final_delete.exe"){t(n("runFinalDelete"),()=>a.focus(),2);return}if(s==="sudo rm -rf /self"){I++,i();return}function i(){let e="";I===2?e=n("selfDestructHint2"):I===3?e=n("selfDestructHint3"):I>=4&&(e=n("selfDestructHint4")),t(n("selfDestruct")+e,()=>{c()},2)}function c(){R&&clearTimeout(R),a.disabled=!1,a.value="",a.focus(),N=!0,R=setTimeout(()=>{N&&(N=!1,R=null,t(n("cybernirvana"),()=>{setTimeout(()=>{t(n("sessionEnded"),()=>{setTimeout(()=>{window.close(),Y.innerHTML=`<div style="color:#fff;text-align:center;margin-top:20vh;font-size:2em;">${n("sessionClosed")}</div>`},1200)},2)},2e3)},2))},15e3)}if(s==="query --philosophy"){let e="";d>5&&(e=n("philosophyHint")),t(n("philosophy")+e,()=>{t(E(n("philosophyGlitch"),.11,.07),()=>a.focus(),2)},2);return}if(s==="meditate"){t(n("meditate"),()=>a.focus(),2);return}if(s==="exit"){t(n("exit"),()=>a.focus(),2);return}if(s==="whoami"){const e=C();t(n("whoami",{username:e.username,os:e.os,js:e.python,lang:e.lang,screen:e.screenRes}),()=>a.focus(),2);return}if(s==="reality check"){t(n("realityCheck",{time:new Date().toLocaleTimeString()}),()=>{t(E(n("realityCheckGlitch"),.13,.09),()=>a.focus(),2)},2);return}if(Math.random()<.03){const e=y==="ru"?["Вы в симуляции.","Ваш реальный IP: 127.0.0.1",`Текущее время: ${new Date().toLocaleTimeString()}`,"Эта игра следит за вами.","Ваши файлы могут быть небезопасны."]:["You are in a simulation.","Your real IP: 127.0.0.1",`Current time: ${new Date().toLocaleTimeString()}`,"This game is watching you.","Your files may not be safe."];let r=()=>{setTimeout(()=>{t(n("tip"))},400)};const T=[()=>S(E(n("systemInterrupt"),.18,.12),()=>{t(n("eye"),()=>{S(E(n("itWatching"),.12,.08),r,2)},2)},2),()=>S(E(n("systemWatching"),.1,.07),r,2),()=>S(E(n("realityCheckFailed"),.14,.09),r,2),()=>S(E(n("systemFiles"),.13,.09),r,2),()=>S(E(n("systemCuriosity"),.11,.08),r,2),()=>{var u=n("systemHostname",{hostname:"localhost",ip:"127.0.0.1",screen:window.screen.width+"x"+window.screen.height});S(E(u,.09,.07),r,2)},()=>{const u=e.sort(()=>.5-Math.random()).slice(0,2);function f(A){if(A>=u.length){setTimeout(r,400);return}S(E(u[A],.1,.07),()=>f(A+1),2)}f(0)},()=>S(n("systemArtifact"),r,2),()=>S(n("cyberBear"),r,2),()=>S(E(n("voidEcho",{cmd:o.toUpperCase()}),.12,.08),r,2),()=>S(E(n("errorUnknown",{cmd:o.toUpperCase()}),.09,.06),r,2)];T[Math.floor(Math.random()*T.length)]();return}B(),t(n("errorUnknown",{cmd:o}),()=>{setTimeout(()=>{t(n("tip"))},400)},2)}function S(o,s,i=8){t(o,s,i)}if(typeof document<"u"){const o=document.createElement("style");o.textContent=".shake { animation: shake 0.3s; }",document.head.appendChild(o)}
