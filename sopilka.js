// tunes storage
let tunes = {
  scaleB: {
    name: {
      uk: "Основна гама",
      en: "Basic Scale"
    },
    description: {
      uk: "таби для сопілки",
      en: "Sopilka Tabs"
    },
    commentedNotes: {
      uk: "cdefgab CDEf+g+a+b+ C+D+e++f++g++\n-Обережно! Ноти третьої октави можуть бути дуже гучними",
      en: "cdefgab CDEf+g+a+b+ C+D+e++f++g++\n-be careful playing in the third octave, those notes can be very loud"
    }
  },
  scaleE: {
    name: {
      uk: "Розширена гама",
      en: "Extended Scale"
    },
    description: {
      uk: "таби для сопілки",
      en: "Sopilka Tabs"
    },
    commentedNotes: {
      uk: "cc#dd#eff#gg#aa#b CC#DD#Ef+f#+g+g#+a+a#+b+\n-перша та друга октава\nC+C#+D+D#+e++f++f#++g++\n-третя октава",
      en: "cc#dd#eff#gg#aa#b CC#DD#Ef+f#+g+g#+a+a#+b+\n-first & second octave\nC+C#+D+D#+e++f++f#++g++\n-third octave"
    }
  },
  tuneOiULuziChervonaKalyna: {
    name: "Ой у лузі червона калина",
    description: "таби для сопілки",
    commentedNotes: "gga# gaa#agf#d gaa#ag \nggC ga#agf#gd gaa#agf \na#DF EFGFD#DC DD#DCa#a \nga#D C#DD#DCa#a ga#DCa#ag \n-приспів грати двічі"
  },
  tuneChervonaRuta: {
    name: "Червона рута",
    description: "таби для сопілки",
    commentedNotes: "dda#aa#g gaa#agf#d \nddCa#Ca CCCa#CDg\nffDCDa# a#CDCa#af \nffD#DD#C CCCa#CDg\nD#FD#DC  a#CDD#DCa# \naa#C DD#DC a#aa#CD\nD#FD#DC  a#CDD#DCa# \naa#C  DD#DC  a#ag\n-повторити повністю два рази"
  },
  tunePidmanula: {
    name: "Ти ж мене підманула",
    description: "таби для сопілки",
    commentedNotes: "dddddfed c#c#c#c#c#edc# dddddfed\naaac#ddd ffaCCa#a Cgga#a#ag\nddfaagf aaac#ddd aaaaaaaCa#a\nCggggggga#ag Dfffffffagf\naaac#ddd"
  },
  tuneYakTebeNeLiubytyKyieveMii: {
    name: "Як тебе не любити, Києве мій!",
    description: "таби для сопілки",
    commentedNotes: "ccg#gfgg fffedc \nfgg#a#CC#C# gggg#a#C \ng#g#g#a#CC#C C#D#C#Ca# \nCffgg#Ca# g#egf "
  },
  tunePisniaProRushnyk: {
    name: "Пісня про рушник",
    description: "таби для сопілки",
    commentedNotes: "defgae efg fgad defg#aF \nEDC Da#a DEFEDDa# a#CD \na#CDCa#Da fgagaCa#agfga \nDEFEDDa# a#CD a#CDCa#Da \nfgagaCa#agfga#agd"
  },
  tuneUkrainaTseTy: {
    name: "Україна - це ти",
    description: "таби для сопілки",
    commentedNotes: "gD#DCa#g#g#g ga#a#a#a#gg# gg#g#g#g#fgg\nd#ffffdd#           d#ffffdc\nggDDD# a#a#g#gfg ggDDd# a#a#g#gfd# \n-грати у порядку: перший рядок, другий рядок (зліва), перший рядок, другий рядок (справа), третій рядок, повторити все разом."
  },
  tuneChomTyNePryishov: {
    name: "Чом ти не прийшов",
    description: "таби для сопілки",
    commentedNotes: "defed defed ffgfagf \na#a#a#a#a# aa#agf fagfed \nfgg#gf fgg#gf g#g#a#g#Ca#g# \na#a#a#a#a# g#a#g#gf g#Ca#g#gf"
  },
  tuneUkraino: {
    name: "Україна - Тарас Петриненко",
    description: "таби для сопілки",
    commentedNotes: "gE EEFDbCg gE EEFDbC \ngE EEFEDCa CCggFE EDCC \n-2х\nEGAA AAGEDC DEFEDCE \nEGAA EF#GF#GE DEFEDCF"
  },
  tuneKvitkaDusha: {
    name: "Квітка душа",
    description: "Ніна Матвіенко",
    commentedNotes: "aaa#C a#agfef aaa#C a#agfef\nagff gggfa agff gggfagf\n-2x\naaa#C af aaa#C af aaa#C af\n-повторити першу частину 1 раз"
  },
  tuneYaPiduVDalekiHory: {
    name: "Я піду в далекі гори",
    description: "таби для сопілки",
    commentedNotes: "eea abCED DCb babDC\nCbaa EEDD FFE EEDEDE\n-2x\nFEED FEED DCCDE\n-2x\nCCC Cb bbb CCCCb\nFFF FEE EE FFEFE\n-повторити все 2 рази, потім повторити еще раз, починаючи з 2-ої частини (мила моя..) й закінчити, додавши ноту ля (а)"
  },
  tuneDontWorryBeHappy: {
    name: "Don't Worry, Be Happy",
    description: "sopilka tabs",
    commentedNotes: "Cagaegedcded gedcded eccdc\n-2x\nededeeg dddcecd ecc dcc\n-2x, повторити першу частину"
  }
};

let languages = {
  uk: "укр",
  en: "eng"
};

let notesTranslation = {
  c: {
    uk: "до",
    en: "c",
    it: "do"
  },
  d: {
    uk: "ре",
    en: "d",
    it: "re"
  },
  e: {
    uk: "мі",
    en: "e",
    it: "mi"
  },
  f: {
    uk: "фа",
    en: "f",
    it: "fa"
  },
  g: {
    uk: "соль",
    en: "g",
    it: "sol"
  },
  a: {
    uk: "ля",
    en: "a",
    it: "la"
  },
  b: {
    uk: "сі",
    en: "b",
    it: "si"
  },
};

let contentTranslation = {
  slogan: {
    uk: "Грати на сопілці – легко, навіть без знання нотної грамоти!",
    en: "Play sopilka easily without musical notation knowledge!"
  },
  description: {
    uk: "Для <em>десятидіркової хроматичної сопілки</em>. Використовуйте <kbd>#</kbd> після ноти для позначення дієз та великі літери, <kbd>+</kbd> і <kbd>++</kbd> для позначення нот вищих октав. Для групування нот використовуйте пробіли і переходи на новий рядок, а заголовки, підзаголовки і коментарі можна додавати, почавши новий рядок з <kbd>---</kbd>, <kbd>--</kbd> або <kbd>-</kbd> відповідно. Успіхів!",
    en: "For <em>ten-hole chromatic sopilka</em>. Use <kbd>#</kbd> after a note to indicate sharp, and <kbd>+</kbd> and <kbd>++</kbd> to indicate upper octaves. Spaces and newlines can be used for grouping, and headings, subheadings and comments can be added by starting a new line with <kbd>---</kbd>, <kbd>--</kbd> and <kbd>-</kbd>. Good luck!"
  },
  tune: {
    uk: "Мелодія",
    en: "Tune"
  },
  lang: {
    uk: "Мова",
    en: "Lang"
  },
  spacing: {
    uk: "Проміжки",
    en: "Spacing"
  },
  whiteBg: {
    uk: "Біле тло",
    en: "White background"
  },
  byHand: {
    uk: "Власна мелодія",
    en: "Your own tune"
  }, 
  btnSave: {
    uk: "Зберегти",
    en: "Save"
  },
  chooseFormat: {
    uk: 'Зберегти як <label for="pdf">PDF</label> <label for="png">PNG</label>',
    en: 'Save as <label for="pdf">PDF</label> <label for="png">PNG</label>'
  }
};

let infoSlides = {
  carouselSlide1: {
    uk: "<header>Сопілка – </header><p>старовинний український народний духовий музичний інструмент, схожий на блок-флейту. Sopilka Tab Creator створений для найбільш поширеного виду сопілки – десятидіркової хроматичної сопілки сопрано у тональності до.</p><p>Якщо Ви новачок у музиці, й не вмієте читати ноти, зате маєте нестримну жагу грати на сопілці, то Sopilka Tab Creator створений саме для Вас. Завдяки табам Ви одразу зможете грати улюблені мелодії, користуючись при цьому мінімумом знань нотної грамоти.</p>",
    en: "<header>Sopilka</header><p>is an ancient Ukrainian folk recorder. Sopilka Tab Creator is designed for the most common type of sopilka - a ten-hole chromatic soprano sopilka in the key of C.</p><p>If you are new to sopilka and don't read music, but you have enthusiasm to play, then Sopilka Tab Creator is just for you. Using tabs you will be able to play your favorite tunes immediately with a minimum knowledge of musical notation.</p>"
  },
  carouselSlide2: {
    uk: "<header>Табулатура – </header><p>це форма інструментальної нотації, яка використовує замість нот (чи разом з ними) букви або цифри.</p><p>Сопілкові таби відображають:</p><ul><li>які отвори сопілки мають бути закритими, а які – відкритими для видобуття певної ноти</li><li>які ноти грати</li> <li>у якому порядку грати ноти</li></ul><p>Сопілкові таби не відображають:</p><ul><li>довжину тої чи іншої ноти</li><li>ритм мелодії</li></ul><p>Проте якщо мелодія Вам знайома й Ви чули її раніше, то довжина нот й загальний ритм Вам також уже відомі :)</p>",
    en: "<header>Tablature</header><p>is a form of musical notation indicating instrument fingering rather than musical pitches.</p><p>Sopilka tabs can show you:</p><ul><li>which holes should be covered to produce a particular note</li><li>which notes to play</li> <li>in what order to play the notes</li></ul><p>Sopilka tabs can't show:</p><ul><li>the length of a particular note</li><li>the general rhythm of the tune</li></ul><p>However, if the tune is already familiar to you and you have heard it before, then the length of the notes and the general rhythm are also familiar to you :)</p>"
  },
  carouselSlide3: {
    uk: "<header>Як користуватись додатком?</header><p>З випадного списку Ви можете обрати одну з заздалегідь записаних мелодій для перегляду, або створити власні таби для будь-якої мелодії на Ваш смак. Записуйте у поле для вводу ноти у буквенному вигляді та одразу отримуйте таби, готові для гри. Для групування нот використовуйте пробіли і переходи на новий рядок. Ноти можна записувати як англійською (a b c…), так і українською (до ре мі…) мовами.</p><header>Як розуміти сопілкові таби?</header> <p>○ – відкритий отвір</p><p>● – закритий отвір</p><p>+ – вища октава</p>",
    en: "<header>How to use the app?</header><p>From a dropdown list you can select one of the prewritten tunes, or you can create your own tabs for any tune you like. Write notes in the input field and immediately get ready to play tabs. Spaces and newlines can be used for grouping.  Notes can be written in both English (a b c...) and Ukrainian (до ре мі...) languages.</p><header>How to understand sopilka tabs?</header> <p>○ – open hole</p><p>● – covered hole</p><p>+ – higher octave</p>"
  },
  carouselSlide4: {
    uk: "<header>Спеціальні позначення:</header><p><kbd>#</kbd> – підвищення ноти на півтону, записується <u>одразу</u> після ноти, якої стосується.</p><p><kbd>🔠</kbd> , <kbd>+</kbd> – ноти другої октави записуються великими літерами або з додаванням знаку <kbd>+</kbd>.</p><p><kbd>🔠+</kbd> , <kbd>++</kbd> – ноти третьої октави записуються великими літерами з додаванням знаку <kbd>+</kbd>, або з додаванням двох знаків <kbd>+</kbd>.</p><p><kbd>---</kbd> – на початку нового рядка позначає заголовок.</p><p><kbd>--</kbd> – на початку нового рядка позначає підзаголовок.</p><p><kbd>-</kbd> – на початку нового рядка позначає коментар.</p>",
    en: "<header>Special notation:</header><p><kbd>#</kbd> – indicates a sharp note if written just after the note.</p><p><kbd>🔠</kbd> , <kbd>+</kbd> – notes of the second octave are written in uppercase or with plus sign.</p><p><kbd>🔠+</kbd> , <kbd>++</kbd> – notes of the third octave are written in uppercase with plus sign, or in lowercase with two plus signs.</p><p><kbd>---</kbd> – at the beginning of a new line indicates the heading.</p><p><kbd>--</kbd> – at the beginning of a new line indicates a subheading.</p><p><kbd>-</kbd> – at the beginning of a new line indicates a comment.</p>"
  },
  carouselSlide5: {
    uk: "<header>Основні налаштування</header><p>У вікні налаштувань ви можете змінювати мову сторінки, регулювати проміжки між табами, а також задавати тло сторінки.</p><header>Збереження результатів</header><p>Введені таби Вашої власної мелодії завжди зберігатимуться у пам’яті Вашого браузера. Також Ви можете роздрукувати сторінку з табами.</p><header>Про автора</header><p>Sopilka Tab Creator створено у рамках бакалаврської дипломної роботи студентки Київського університету імені Бориса Грінченка, Здебської Антоніни.</p>",
    en: "<header>Basic settings</header><p>In the settings popup you can change the language of the page, adjust the spacing between tabs, and set white background of the page.</p><header>Results saving</header><p>The entered tabs of your own tune will always be saved in the memory of your browser. You can also print the page with tabs.</p><header>Information about the author</header><p>Sopilka Tab Creator was created by student of Borys Grinchenko Kyiv University, Antonina Zdebska, as a bachelor's graduation project. (Ukraine, 2022)</p>"
  },
}

// main code
var html = document.getElementsByTagName("html")[0];
var notes = document.getElementById("notes");
var tabs = document.getElementById("tabs");
var tune = document.getElementById("tune");
var lang = document.getElementById("lang");
var slogan = document.getElementById("slogan");
var btnSave = document.getElementById("btnSave");
var saving = document.getElementById("saving");
var chooseFormat = document.getElementById("chooseFormat");
var rbSaveToPng = document.getElementById("png");
var info = document.getElementById("info");
var settings = document.getElementById("settings");
var spacing = document.getElementById("spacing");
var whiteBg = document.getElementById("whiteBg");
var description = document.getElementById("description");
var labelTune = document.querySelectorAll('[for="tune"]')[0];
var labelLang = document.querySelectorAll('[for="lang"]')[0];
var labelSpacing = document.querySelectorAll('[for="spacing"]')[0];
var labelWhiteBg = document.querySelectorAll('[for="whiteBg"]')[0];
var infoPopup = document.getElementsByClassName("info")[0];
let currentLang = 'uk';
let currentSpacing = 4;

addTuneOptions();
addLangOptions();
addInfoSlides();

var optionScaleB = document.querySelectorAll('[value="scaleB"]')[0];
var optionScaleE = document.querySelectorAll('[value="scaleE"]')[0];
var optionOwnTune = document.querySelectorAll('[value="byHand"]')[0];

if (localStorage.getItem('whiteBg')) {
  html.setAttribute("class", "");
  whiteBg.checked = true;
}

if (localStorage.getItem('spacing')) {
  currentSpacing = spacing.value = localStorage.getItem('spacing');
}

if (localStorage.getItem('tune')) {
  tune.value = localStorage.getItem('tune');
  if (tune.value === 'byHand') {
    if (localStorage.getItem('ownNotes')) {
      notes.value = localStorage.getItem("ownNotes");
    } else {
      notes.value = '';
    }
    showSaving(notes.value);
  } else {
    notesValueChange(tunes[tune.value]);
  }
} else {
  notesValueChange(tunes.scaleB);
}

if (localStorage.getItem('lang')) {
  currentLang = lang.value = localStorage.getItem('lang');
  changeLang(currentLang);
}

notes.addEventListener("input", function (event) {
  showSaving(event.target.value);
  normalizeInput(event.target.value);
});

// functions
function showTabs(notes) {
  tabs.innerHTML = '';
  for (var i = 0; i < notes.length; i++) {
    if (notes[i] !== 'c' && notes[i] !== 'd' && notes[i] !== 'e' && notes[i] !== 'f' && notes[i] !== 'g' && notes[i] !== 'a' && notes[i] !== 'b' && notes[i] !== 'C' && notes[i] !== 'D' && notes[i] !== 'E' && notes[i] !== 'F' && notes[i] !== 'G' && notes[i] !== 'A' && notes[i] !== 'B' && notes[i] !== ' ' && notes[i] !== '\n' && notes[i] !== '-') {
      elementCreation('error');
    } else {
      if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] == '-' && notes[i + 4] !== '\n') {
        var title = notes.slice(i + 4).split('\n')[0];
        i = i + 3 + title.length;
        elementCreation(`title_${title}`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] == '-' && notes[i + 4] == '\n') {
        i = i + 3;
        elementCreation(`title_`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] !== '\n') {
        var title = notes.slice(i + 3).split('\n')[0];
        i = i + 2 + title.length;
        elementCreation(`title_${title}`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] == '\n') {
        i = i + 2;
        elementCreation(`title_`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] !== '\n') {
        var subtitle = notes.slice(i + 3).split('\n')[0];
        i = i + 2 + subtitle.length;
        elementCreation(`subtitle_${subtitle}`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] == '\n') {
        i = i + 2;
        elementCreation(`subtitle_`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '-' && notes[i + 2] !== '\n') {
        var subtitle = notes.slice(i + 2).split('\n')[0];
        i = i + 1 + subtitle.length;
        elementCreation(`subtitle_${subtitle}`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '-' && notes[i + 2] == '\n') {
        i = i + 1;
        elementCreation(`subtitle_`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] !== '\n') {
        var comment = notes.slice(i + 2).split('\n')[0];
        i = i + 1 + comment.length;
        elementCreation(`comment_${comment}`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '\n') {
        i = i + 1;
        elementCreation(`comment_`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] !== '\n') {
        var comment = notes.slice(i + 1).split('\n')[0];
        i = i + comment.length;
        elementCreation(`comment_${comment}`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '\n') {
        elementCreation(`comment_`);
      } else if (notes[i] == '\n') {
        elementCreation('line');
      } else if (notes[i] !== 'b' && notes[i] !== 'e' && notes[i] !== 'B' && notes[i] !== 'E' && notes[i + 1] == '#' && notes[i + 2] == '+' && notes[i + 3] == '+') {
        elementCreation(`${notes[i]}${notes[++i]}${notes[++i]}${notes[++i]}`);
      } else if ((notes[i + 1] == '+' || notes[i] !== 'b' && notes[i] !== 'e' && notes[i] !== 'B' && notes[i] !== 'E' && notes[i + 1] == '#') && notes[i + 2] == '+') {
        elementCreation(`${notes[i]}${notes[++i]}${notes[++i]}`);
      } else if (notes[i] !== 'b' && notes[i] !== 'e' && notes[i] !== 'B' && notes[i] !== 'E' && notes[i + 1] == '#' || notes[i + 1] == '+') {
        if (notes[i] == notes[i].toUpperCase()) {
          elementCreation(`${notes[i].toLowerCase()}${notes[++i]}+`);
        } else {
          elementCreation(`${notes[i]}${notes[++i]}`);
        }
      } else if (notes[i] == ' ') {
        elementCreation('space');
      } else if (notes[i] == notes[i].toUpperCase()) {
        elementCreation(`${notes[i].toLowerCase()}+`);
      } else {
        elementCreation(notes[i]);
      }
    }
  }
  spaceCorrection();
}

function elementCreation(note) {
  if (note == 'line') {
    var br = document.createElement('br');
    tabs.appendChild(br);
  } else if (note.startsWith('title_')) {
    var h2 = document.createElement('h2');
    h2.textContent = `${note.replace('title_', '')}`;
    tabs.appendChild(h2);
  } else if (note.startsWith('subtitle_')) {
    var h3 = document.createElement('h3');
    h3.textContent = `${note.replace('subtitle_', '')}`;
    tabs.appendChild(h3);
  } else if (note.startsWith('comment_')) {
    var h4 = document.createElement('h4');
    h4.textContent = `${note.replace('comment_', '')}`;
    tabs.appendChild(h4);
  } else {
    var figure = document.createElement('figure');
    figure.setAttribute("class", `spacing-${currentSpacing}`);
    var img = document.createElement('img');
    var figcaption = document.createElement('figcaption');
    figcaption.setAttribute("class", `lang-${currentLang}`);
    if (note.endsWith("#")) {
      img.src = `./img/${note[0]}_sharp.svg`;
      figcaption.innerText = `${notesTranslation[note[0]][currentLang]}#`;
    } else if (note.endsWith("#+")) {
      if (note == note.toUpperCase()) {
        img.src = `./img/${note[0].toLowerCase()}_sharp++.svg`;
        figcaption.innerText = `${notesTranslation[note[0].toLowerCase()][currentLang].toUpperCase()}#+`;
      } else {
        img.src = `./img/${note[0]}_sharp+.svg`;
        figcaption.innerText = `${notesTranslation[note[0]][currentLang].toUpperCase()}${note[1]}`;
      }
    } else if (note.endsWith("#++")) {
      img.src = `./img/${note[0]}_sharp++.svg`;
      figcaption.innerText = `${notesTranslation[note[0]][currentLang].toUpperCase()}${note[1]}${note[2]}`;
    } else {
      img.src = `./img/${note}.svg`;
      if (note.endsWith('++')) {
        figcaption.innerText = `${notesTranslation[note[0]][currentLang].toUpperCase()}${note[1]}`;
      } else if (note.endsWith('+')) {
        figcaption.innerText = `${notesTranslation[note[0]][currentLang].toUpperCase()}`;
      } else if (note == 'space') {
        figcaption.innerText = '';
      } else if (note == 'error') {
        figcaption.innerText = '';
      } else {
        figcaption.innerText = notesTranslation[note][currentLang];
      }
    }
    img.alt = `${note}`;
    tabs.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
  }
}

function spaceCorrection() {
  var lines = document.getElementsByTagName("br");
  for (var br of lines) {
    if (br.parentElement.firstElementChild != br && br.previousElementSibling.localName.startsWith('h')) {
      br.parentElement.removeChild(br);
    }
  }
}

function addTuneOptions() {
  for (var key in tunes) {
    let option = document.createElement('option');
    option.setAttribute("value", key);
    if (key.startsWith('scale')) {
      option.textContent = tunes[key].name[currentLang];
    } else {
      option.textContent = tunes[key].name;
    }
    tune.appendChild(option);
  }
  let option = document.createElement('option');
  option.setAttribute("value", "byHand");
  option.textContent = contentTranslation[option.value][currentLang];
  tune.appendChild(option);
}

function changeTune() {
  localStorage.setItem("tune", tune.value);
  if (tune.value != "byHand") {
    notesValueChange(tunes[tune.value]);
  } else {
    notes.value = localStorage.getItem("ownNotes");
    showTabs(notes.value);
    showSaving(notes.value);
  }
}

function addLangOptions() {
  for (var key in languages) {
    let option = document.createElement('option');
    option.setAttribute("value", key);
    option.textContent = languages[key];
    lang.appendChild(option);
  }
}

function changeLang(newLang) {
  currentLang = newLang;
  localStorage.setItem("lang", currentLang);
  slogan.innerText = contentTranslation[slogan.id][currentLang];
  slogan.setAttribute("class", `lang-${currentLang}`);
  description.innerHTML = contentTranslation[description.id][currentLang];
  labelTune.innerText = contentTranslation[labelTune.getAttribute('for')][currentLang];
  labelLang.innerText = contentTranslation[labelLang.getAttribute('for')][currentLang];
  labelSpacing.innerText = contentTranslation[labelSpacing.getAttribute('for')][currentLang];
  labelWhiteBg.innerText = contentTranslation[labelWhiteBg.getAttribute('for')][currentLang];
  optionScaleB.innerText = tunes[optionScaleB.getAttribute('value')].name[currentLang];
  optionScaleE.innerText = tunes[optionScaleE.getAttribute('value')].name[currentLang];
  optionOwnTune.innerText = contentTranslation[optionOwnTune.getAttribute('value')][currentLang];
  chooseFormat.innerHTML = contentTranslation[chooseFormat.id][currentLang];
  btnSave.setAttribute('value', contentTranslation[btnSave.id][currentLang]);
  for (let slide in infoSlides) {
    document.getElementById(slide).innerHTML = infoSlides[slide][currentLang];
  }
  if (tune.value.startsWith('scale')) {
    notesValueChange(tunes[tune.value]);
  } else {
    showTabs(notes.value);
  }
}

function notesValueChange(toTune) {
  if (typeof toTune.name === 'object') {
    notes.value = `---${toTune.name[currentLang]}\n--${toTune.description[currentLang]}\n${toTune.commentedNotes[currentLang]}`;
  } else {
    notes.value = `---${toTune.name}\n--${toTune.description}\n${toTune.commentedNotes}`;
  }
  showTabs(notes.value);
  showSaving(notes.value);
}

function normalizeInput(input) {
  let lines = input.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].startsWith('---') && !lines[i].startsWith('--') && !lines[i].startsWith('-')) {
      for (let key in notesTranslation) {
        lines[i] = lines[i].replaceAll(notesTranslation[key].uk, notesTranslation[key].en);
        lines[i] = lines[i].replaceAll(notesTranslation[key].uk.toUpperCase(), notesTranslation[key].en.toUpperCase());
      }
    }
  }
  let normalizedInput = '';
  for (let line of lines) {
    normalizedInput += `${line}\n`
  }
  notes.value = normalizedInput.slice(0, -1);
  if (tune.value === 'byHand') {
    localStorage.setItem("ownNotes", notes.value);
  }
  showTabs(notes.value);
}

function singlePopup(element) {
  if (info.checked && settings.checked) {
    if (element == info) {
      settings.checked = false;
    } else {
      info.checked = false;
    }
  }
}

function changeSpacing(range) {
  currentSpacing = range.value;
  localStorage.setItem("spacing", currentSpacing);
  showTabs(notes.value);
}

function changeBg(white) {
  if (white) {
    html.setAttribute("class", "");
    localStorage.setItem("whiteBg", "true");
  } else {
    html.setAttribute("class", "bg");
    localStorage.removeItem("whiteBg");
  }
}

function addInfoSlides() {
  for (let i = 1; i <= Object.keys(infoSlides).length; i++) {
    let rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "slider");
    rb.setAttribute("id", `slider${i}`);
    let label = document.createElement("label");
    label.setAttribute("class", "right");
    label.setAttribute("for", `slider${i}`);
    if (i === 1) {
      rb.setAttribute("checked", "true");
      infoPopup.appendChild(rb);
      infoPopup.appendChild(label);
    } else {
      infoPopup.appendChild(rb);
      infoPopup.appendChild(label);
      let label_prev = document.createElement("label");
      label_prev.setAttribute("class", "left");
      label_prev.setAttribute("for", `slider${i - 1}`);
      infoPopup.appendChild(label_prev);
    }
  }
  let carouselContent = document.createElement("div");
  carouselContent.setAttribute("class", "carouselContent");
  let carousel = document.createElement("div");
  carousel.setAttribute("class", "carousel");
  let carouselNavigation = document.createElement("div");
  carouselNavigation.setAttribute("class", "carouselNavigation");
  for (let i = 1; i <= Object.keys(infoSlides).length; i++) {
    let slide = document.createElement("div");
    slide.setAttribute("class", "slide");
    slide.setAttribute("id", `carouselSlide${i}`);
    slide.innerHTML = infoSlides[slide.id][currentLang];
    carousel.appendChild(slide);
    let label = document.createElement("label");
    label.setAttribute("class", "navigationButton");
    label.setAttribute("for", `slider${i}`);
    carouselNavigation.appendChild(label);
  }
  carouselContent.appendChild(carousel);
  carouselContent.appendChild(carouselNavigation);
  infoPopup.appendChild(carouselContent);
}

function saveResults() {
  if (rbSaveToPng.checked) {
    html2canvas(tabs, { allowTaint: true }).then(function (canvas) {
      let link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL();
      link.download = "tabs.png";
      link.click();
      document.body.removeChild(link);
    });
  } else {
    window.print();
  }
}

function showSaving(input) {
  if(input === '') {
    saving.setAttribute('class', 'invisible');
  } else {
    saving.setAttribute('class', '');
  }
}
