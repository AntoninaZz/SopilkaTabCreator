// variables
let tunes;
let languages;
let notesTranslation;
let contentTranslation;
let infoSlides;
let transliteration;
let sopilkaTypes;
let html = document.getElementsByTagName("html")[0];
let notes = document.getElementById("notes");
let tabs = document.getElementById("tabs");
let tune = document.getElementById("tune");
let lang = document.getElementById("lang");
let sopilkaType = document.getElementById("sopilkaType");
let slogan = document.getElementById("slogan");
let btnSave = document.getElementById("btnSave");
let saving = document.getElementById("saving");
let sopilkaTypeChanger = document.getElementById("sopilkaTypeChanger");
let chooseFormat = document.getElementById("chooseFormat");
let rbSaveToPng = document.getElementById("png");
let rbSaveToTg = document.getElementById("tg");
let info = document.getElementById("info");
let settings = document.getElementById("settings");
let spacing = document.getElementById("spacing");
let whiteBg = document.getElementById("whiteBg");
let showNotesSwitch = document.getElementById("showNotes");
let duplicateToTgSwitch = document.getElementById("duplicateToTg");
let description = document.getElementById("description");
let tglogout = document.getElementById("tglogout");
let profilePhoto = document.getElementById("profilePhoto");
let labelFeedback = document.getElementById("feedback");
let labelBugreport = document.getElementById("bugreport");
let requaireLogin = document.getElementById("requaireLogin");
let labelTune = document.querySelectorAll('[for="tune"]')[0];
let labelLang = document.querySelectorAll('[for="lang"]')[0];
let labelSopilkaType = document.querySelectorAll('[for="sopilkaType"]')[0];
let labelSpacing = document.querySelectorAll('[for="spacing"]')[0];
let labelWhiteBg = document.querySelectorAll('[for="whiteBg"]')[0];
let labelShowNotesSwitch = document.querySelectorAll('[for="showNotes"]')[0];
let labelduplicateToTg = document.querySelectorAll('[for="duplicateToTg"]')[0];
let labelSettings = document.querySelectorAll('label.menuItem[for="settings"]')[0];
let labelInfo = document.querySelectorAll('label.menuItem[for="info"]')[0];
let infoPopup = document.getElementsByClassName("info")[0];
let interviewPopup = document.getElementsByClassName("interview")[0];
let optionScaleB;
let optionScaleE;
let optionOwnTune;
let currentLang = 'uk';
let currentSpacing = 4;
let currentName = '';
let currentSopilkaType = 'sopranoC';
let duplToTg = false;
let tglogin;
let homeLink = window.location.href;
let logoutContent = {
  uk: `<p>Ви увійшли як <em>${localStorage.getItem("name")}</em></p><p>Тепер Ви можете зберігати аплікатурні схеми до окремого чату у <em>telegram</em>.</p><input type="button" id="btnUnsubscribe" value="Не надсилати мені повідомлення" onclick="unsubscribe()">`,
  en: `<p>You logged in as <em>${localStorage.getItem("name")}</em></p><p>Now you can save your tabs to <em>telegram</em>.</p><input type="button" id="btnUnsubscribe" value="Log out" onclick="unsubscribe()">`
};

// entry point
getData('https://antoninazz.github.io/SopilkaTabCreator/' + 'data.json'); //homeLink + 'data.json'
window.onload = function () { setTimeout(showInterview, 4000) };
notes.addEventListener("input", function (event) {
  showSaving(event.target.value);
  normalizeInput(event.target.value);
});

// functions
async function getData(url) {
  let response = await fetch(new Request(url));
  response = await response.json();
  tunes = response.tunes;
  languages = response.languages;
  notesTranslation = response.notesTranslation;
  contentTranslation = response.contentTranslation;
  infoSlides = response.infoSlides;
  transliteration = response.transliteration;
  sopilkaTypes = response.sopilkaTypes;

  addTuneOptions();
  addLangOptions();
  addSopilkaTypeOptions();
  addInfoSlides();

  optionScaleB = document.querySelectorAll('[value="scaleB"]')[0];
  optionScaleE = document.querySelectorAll('[value="scaleE"]')[0];
  optionOwnTune = document.querySelectorAll('[value="byHand"]')[0];

  getSettingsFromLocalStorage();
}

function getSettingsFromLocalStorage() {
  if (localStorage.getItem('whiteBg')) {
    html.setAttribute("class", "");
    whiteBg.checked = true;
  }

  if (localStorage.getItem('showNotes')) {
    showNotesSwitch.checked = false;
  }

  if (localStorage.getItem('spacing')) {
    currentSpacing = spacing.value = localStorage.getItem('spacing');
  }

  if (localStorage.getItem('tune')) {
    tune.value = localStorage.getItem('tune');
    if (tune.value === 'byHand') {
      if (localStorage.getItem('sopilkaType')) {
        currentSopilkaType = localStorage.getItem("sopilkaType");
        sopilkaType.value = currentSopilkaType;
      }
      if (localStorage.getItem('ownNotes')) {
        notes.value = localStorage.getItem("ownNotes");
      } else {
        notes.value = sopilkaTypes[currentSopilkaType].hasOwnProperty('scale') ? sopilkaTypes[currentSopilkaType].scale[currentLang] : '';
      }
      showTabs(notes.value);
      showSaving(notes.value);
      getCurrentName(notes.value);
    } else {
      notesValueChange(tunes[tune.value]);
      sopilkaTypeChanger.setAttribute('class', 'invisible');
    }
  } else {
    notesValueChange(tunes.scaleB);
    sopilkaTypeChanger.setAttribute('class', 'invisible');
  }

  if (localStorage.getItem('lang')) {
    currentLang = lang.value = localStorage.getItem('lang');
    changeLang(currentLang);
  }

  switch (localStorage.getItem('saveTo')) {
    case rbSaveToPng.id:
      rbSaveToPng.checked = true;
      break;
    case rbSaveToTg.id:
      rbSaveToTg.checked = true;
      break;
    default:
      break;
  }

  if (localStorage.getItem('duplToTg')) {
    duplToTg = JSON.parse(localStorage.getItem('duplToTg'));
  }
  duplicateToTgSwitch.checked = duplToTg;

  waitForTg().then((iframe) => {
    iframe.addEventListener("load", function () {
      tglogin = document.getElementById("telegram-login-SopilkaTabCreatorBot");
      if (localStorage.getItem("chat_id")) {
        tglogin.setAttribute('class', 'invisible');
        tglogout.setAttribute('class', '');
        tglogout.innerHTML = logoutContent[currentLang];
      } else {
        tglogout.setAttribute('class', 'invisible');
        tglogin.setAttribute('class', '');
      }
    });
  });

  if (localStorage.getItem("profilePhoto")) {
    profilePhoto.src = localStorage.getItem("profilePhoto");
  }
}

function showTabs(notes) {
  tabs.innerHTML = '';
  for (let i = 0; i < notes.length; i++) {
    switch (notes[i]) {
      case '\n':
        if (notes[i + 1] === '-' && notes[i + 2] === '-' && notes[i + 3] === '-' && notes[i + 4] === '\n') {
          i = i + 3;
          elementCreation(`title_`);
        } else if (notes[i + 1] === '-' && notes[i + 2] === '-' && notes[i + 3] === '-') {
          let title = notes.slice(i + 4).split('\n')[0];
          i = i + 3 + title.length;
          elementCreation(`title_${title}`);
        } else if (notes[i + 1] === '-' && notes[i + 2] === '-' && notes[i + 3] === '\n') {
          i = i + 2;
          elementCreation(`subtitle_`);
        } else if (notes[i + 1] === '-' && notes[i + 2] === '-') {
          let subtitle = notes.slice(i + 3).split('\n')[0];
          i = i + 2 + subtitle.length;
          elementCreation(`subtitle_${subtitle}`);
        } else if (notes[i + 1] === '-' && notes[i + 2] === '\n') {
          i = i + 1;
          elementCreation(`comment_`);
        } else if (notes[i + 1] === '-') {
          let comment = notes.slice(i + 2).split('\n')[0];
          i = i + 1 + comment.length;
          elementCreation(`comment_${comment}`);
        } else {
          elementCreation('line');
        }
        break
      case '-':
        if (i === 0) {
          if (notes[i + 1] === '-' && notes[i + 2] === '-' && notes[i + 3] === '\n') {
            i = i + 2;
            elementCreation(`title_`);
          } else if (notes[i + 1] === '-' && notes[i + 2] === '-') {
            let title = notes.slice(i + 3).split('\n')[0];
            i = i + 2 + title.length;
            elementCreation(`title_${title}`);
          } else if (notes[i + 1] === '-' && notes[i + 2] === '\n') {
            i = i + 1;
            elementCreation(`subtitle_`);
          } else if (notes[i + 1] === '-') {
            let subtitle = notes.slice(i + 2).split('\n')[0];
            i = i + 1 + subtitle.length;
            elementCreation(`subtitle_${subtitle}`);
          } else if (notes[i + 1] === '\n') {
            elementCreation(`comment_`);
          } else {
            let comment = notes.slice(i + 1).split('\n')[0];
            i = i + comment.length;
            elementCreation(`comment_${comment}`);
          }
        }
        break
      case ' ':
        elementCreation('space');
        break
      case 'C':
      case 'c':
      case 'D':
      case 'd':
      case 'E':
      case 'e':
      case 'F':
      case 'f':
      case 'G':
      case 'g':
      case 'A':
      case 'a':
      case 'B':
      case 'b':
        if (notes[i] !== 'b' && notes[i] !== 'e' && notes[i] !== 'B' && notes[i] !== 'E' && notes[i + 1] == '#' && notes[i + 2] == '+' && notes[i + 3] == '+') {
          elementCreation(`${notes[i]}${notes[++i]}${notes[++i]}${notes[++i]}`);
        } else if ((notes[i + 1] == '+' || notes[i] !== 'b' && notes[i] !== 'e' && notes[i] !== 'B' && notes[i] !== 'E' && notes[i + 1] == '#') && notes[i + 2] == '+') {
          elementCreation(`${notes[i]}${notes[++i]}${notes[++i]}`);
        } else if (notes[i] !== 'b' && notes[i] !== 'e' && notes[i] !== 'B' && notes[i] !== 'E' && notes[i + 1] == '#' || notes[i + 1] == '+') {
          if (notes[i] == notes[i].toUpperCase()) {
            elementCreation(`${notes[i].toLowerCase()}${notes[++i]}+`);
          } else {
            elementCreation(`${notes[i]}${notes[++i]}`);
          }
        } else if (notes[i] == notes[i].toUpperCase()) {
          elementCreation(`${notes[i].toLowerCase()}+`);
        } else {
          elementCreation(notes[i]);
        }
        break
      default:
        elementCreation('error');
        break
    }
  }
  spaceCorrection();
}

function elementCreation(note) {
  if (note == 'line') {
    let br = document.createElement('br');
    tabs.appendChild(br);
  } else if (note.startsWith('title_')) {
    let h2 = document.createElement('h2');
    h2.textContent = `${note.replace('title_', '')}`;
    tabs.appendChild(h2);
  } else if (note.startsWith('subtitle_')) {
    let h3 = document.createElement('h3');
    h3.textContent = `${note.replace('subtitle_', '')}`;
    tabs.appendChild(h3);
  } else if (note.startsWith('comment_')) {
    let h4 = document.createElement('h4');
    h4.textContent = `${note.replace('comment_', '')}`;
    tabs.appendChild(h4);
  } else {
    let figure = document.createElement('figure');
    figure.setAttribute("class", `spacing-${currentSpacing}`);
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    figcaption.setAttribute("class", `lang-${currentLang}${localStorage.getItem('showNotes') ? ' invisible' : ''}`);
    if (note.endsWith("#")) {
      img.src = `./img/${sopilkaTypes.sopranoC.notes[(sopilkaTypes.sopranoC.notes.indexOf(note[0] + "_sharp") + sopilkaTypes[currentSopilkaType].offset) % 12]}.svg`;
      figcaption.innerText = `${notesTranslation[note[0]][currentLang]}#`;
    } else if (note.endsWith("#+")) {
      if (note == note.toUpperCase()) {
        img.src = `./img/${sopilkaTypes.sopranoC.notes[(sopilkaTypes.sopranoC.notes.indexOf(note[0].toLowerCase() + "_sharp") + sopilkaTypes[currentSopilkaType].offset) % 12]}++.svg`;
        figcaption.innerText = `${notesTranslation[note[0].toLowerCase()][currentLang].toUpperCase()}#+`;
      } else {
        img.src = `./img/${sopilkaTypes.sopranoC.notes[(sopilkaTypes.sopranoC.notes.indexOf(note[0] + "_sharp") + sopilkaTypes[currentSopilkaType].offset) % 12]}+.svg`;
        figcaption.innerText = `${notesTranslation[note[0]][currentLang].toUpperCase()}${note[1]}`;
      }
    } else if (note.endsWith("#++")) {
      img.src = `./img/${sopilkaTypes.sopranoC.notes[(sopilkaTypes.sopranoC.notes.indexOf(note[0] + "_sharp") + sopilkaTypes[currentSopilkaType].offset) % 12]}++.svg`;
      figcaption.innerText = `${notesTranslation[note[0]][currentLang].toUpperCase()}${note[1]}${note[2]}`;
    } else if (note.endsWith('++')) {
      img.src = `./img/${sopilkaTypes.sopranoC.notes[(sopilkaTypes.sopranoC.notes.indexOf(note[0]) + sopilkaTypes[currentSopilkaType].offset) % 12]}${note.substring(1)}.svg`;
      figcaption.innerText = `${notesTranslation[note[0]][currentLang].toUpperCase()}${note[1]}`;
    } else if (note.endsWith('+')) {
      img.src = `./img/${sopilkaTypes.sopranoC.notes[(sopilkaTypes.sopranoC.notes.indexOf(note[0]) + sopilkaTypes[currentSopilkaType].offset) % 12]}${note.substring(1)}.svg`;
      figcaption.innerText = `${notesTranslation[note[0]][currentLang].toUpperCase()}`;
    } else if (note == 'space') {
      img.src = `./img/${note}.svg`;
      figcaption.innerText = '';
    } else if (note == 'error') {
      img.src = `./img/${note}.svg`;
      figcaption.innerText = '';
    } else {
      img.src = `./img/${sopilkaTypes.sopranoC.notes[(sopilkaTypes.sopranoC.notes.indexOf(note[0]) + sopilkaTypes[currentSopilkaType].offset) % 12]}${note.substring(1)}.svg`;
      figcaption.innerText = notesTranslation[note][currentLang];
    }
    img.alt = `${note}`;
    tabs.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
  }
}

function spaceCorrection() {
  let lines = document.getElementsByTagName("br");
  for (let br of lines) {
    if (br.parentElement.firstElementChild != br && br.previousElementSibling.localName.startsWith('h')) {
      br.parentElement.removeChild(br);
    }
  }
}

function addTuneOptions() {
  for (let key in tunes) {
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
    sopilkaTypeChanger.setAttribute('class', 'invisible');
    currentSopilkaType = 'sopranoC';
    notesValueChange(tunes[tune.value]);
  } else {
    sopilkaTypeChanger.setAttribute('class', '');
    sopilkaType.value = currentSopilkaType = localStorage.getItem('sopilkaType') || 'sopranoC';
    notes.value = localStorage.getItem("ownNotes") ? localStorage.getItem("ownNotes") : sopilkaTypes[currentSopilkaType].hasOwnProperty('scale') ? sopilkaTypes[currentSopilkaType].scale[currentLang] : '';
    showTabs(notes.value);
    showSaving(notes.value);
    getCurrentName(notes.value);
  }
}

function getCurrentName(notes) {
  if (notes.split('\n').filter(line => line.startsWith('---')).length > 0) {
    currentName = notes.split('\n').filter(line => line.startsWith('---'))[0].slice(3);
  } else {
    currentName = '';
  }
}

function addLangOptions() {
  for (let key in languages) {
    let option = document.createElement('option');
    option.setAttribute("value", key);
    option.textContent = languages[key];
    lang.appendChild(option);
  }
}

function addSopilkaTypeOptions() {
  for (let key in sopilkaTypes) {
    let option = document.createElement('option');
    option.setAttribute("value", key);
    option.textContent = sopilkaTypes[key].name[currentLang];
    sopilkaType.appendChild(option);
  }
}

function changeLang(newLang) {
  currentLang = newLang;
  localStorage.setItem("lang", currentLang);
  slogan.innerText = contentTranslation[slogan.id][currentLang];
  slogan.setAttribute("class", `lang-${currentLang}`);
  description.innerHTML = contentTranslation[description.id][currentLang];
  labelTune.innerText = contentTranslation[labelTune.getAttribute('for')][currentLang];
  optionScaleB.innerText = tunes[optionScaleB.getAttribute('value')].name[currentLang];
  optionScaleE.innerText = tunes[optionScaleE.getAttribute('value')].name[currentLang];
  optionOwnTune.innerText = contentTranslation[optionOwnTune.getAttribute('value')][currentLang];
  labelSopilkaType.innerText = contentTranslation[labelSopilkaType.getAttribute('for')][currentLang];
  tglogout.innerHTML = logoutContent[currentLang];
  labelSettings.innerHTML = contentTranslation[labelSettings.getAttribute('for')][currentLang];
  labelInfo.innerHTML = contentTranslation[labelInfo.getAttribute('for')][currentLang];
  labelFeedback.innerHTML = contentTranslation[labelFeedback.id][currentLang];
  labelBugreport.innerHTML = contentTranslation[labelBugreport.id][currentLang];
  labelLang.innerText = contentTranslation[labelLang.getAttribute('for')][currentLang];
  labelSpacing.innerText = contentTranslation[labelSpacing.getAttribute('for')][currentLang];
  labelWhiteBg.innerText = contentTranslation[labelWhiteBg.getAttribute('for')][currentLang];
  labelShowNotesSwitch.innerText = contentTranslation[labelShowNotesSwitch.getAttribute('for')][currentLang];
  labelduplicateToTg.innerText = contentTranslation[labelduplicateToTg.getAttribute('for')][currentLang];
  btnSave.setAttribute('value', contentTranslation[btnSave.id][currentLang]);
  chooseFormat.innerHTML = contentTranslation[chooseFormat.id][currentLang];
  requaireLogin.innerHTML = contentTranslation[requaireLogin.id][currentLang];
  for (let slide in infoSlides) {
    document.getElementById(slide).innerHTML = infoSlides[slide][currentLang];
  }
  if (tune.value.startsWith('scale')) {
    notesValueChange(tunes[tune.value]);
  } else {
    showTabs(notes.value);
  }
  for (i = 0; i < sopilkaType.length; i++) {
    sopilkaType[i].innerText = sopilkaTypes[sopilkaType[i].value].name[currentLang];
  }
}

function changeSopilkaType(type) {
  currentSopilkaType = type;
  localStorage.setItem("sopilkaType", currentSopilkaType);
  notes.value = localStorage.getItem("ownNotes") ? localStorage.getItem("ownNotes") : sopilkaTypes[currentSopilkaType].hasOwnProperty('scale') ? sopilkaTypes[currentSopilkaType].scale[currentLang] : '';
  showTabs(notes.value);
  showSaving(notes.value);
}

function notesValueChange(toTune) {
  if (typeof toTune.name === 'object') {
    notes.value = `---${toTune.name[currentLang]}\n--${toTune.description[currentLang]}\n${toTune.commentedNotes[currentLang]}`;
    currentName = toTune.name.en;
  } else {
    notes.value = `---${toTune.name}\n--${toTune.description}\n${toTune.commentedNotes}`;
    currentName = toTune.name;
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
        lines[i] = lines[i].replaceAll(notesTranslation[key].num, notesTranslation[key].en);
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
  getCurrentName(input);
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

function showNotes(show) {
  if (show) {
    localStorage.removeItem("showNotes");
  } else {
    localStorage.setItem("showNotes", "false");
  }
  showTabs(notes.value);
}

function duplicateToTg(checked) {
  duplToTg = checked;
  localStorage.setItem('duplToTg', checked);
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
  filename = getFilename();
  if (rbSaveToPng.checked) {
    localStorage.setItem("saveTo", rbSaveToPng.id);
    html2canvas(tabs, { allowTaint: true }).then(function (canvas) {
      let link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL();
      link.download = `${filename === '' ? 'tabs' : filename}.png`;
      link.click();
      document.body.removeChild(link);
      if (duplToTg && canvas) {
        if (localStorage.getItem("chat_id")) {
          sendWatermarkedTabs(canvas, homeLink);
        } else {
          showErr();
        }
      }
    });
  } else if (rbSaveToTg.checked) {
    localStorage.setItem("saveTo", rbSaveToTg.id);
    html2canvas(tabs, { allowTaint: true }).then(function (canvas) {
      if (localStorage.getItem("chat_id")) {
        sendWatermarkedTabs(canvas, homeLink);
      } else {
        showErr();
      }
    });
  } else {
    localStorage.setItem("saveTo", "pdf");
    if (duplToTg) { sendMessage(); }
    window.print();
  }
}

function showSaving(input) {
  if (input === '') {
    saving.setAttribute('class', 'invisible');
  } else {
    saving.setAttribute('class', '');
  }
}

function sendMessage() {
  if (localStorage.getItem("chat_id")) {
    let url = `https://api.telegram.org/bot${localStorage.getItem("token")}/sendMessage?chat_id=${localStorage.getItem("chat_id")}&text=${notes.value.replaceAll('\n', '%0A').replaceAll('#', '%23')}`;
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
  } else {
    showErr();
  }
}

function sendWatermarkedTabs(canvas, text) {
  var tempCanvas = document.createElement('canvas');
  var tempCtx = tempCanvas.getContext('2d');
  var cw, ch;
  cw = tempCanvas.width = canvas.width;
  ch = tempCanvas.height = canvas.height;
  tempCtx.drawImage(canvas, 0, 0);
  tempCtx.font = "24px verdana";
  var textWidth = tempCtx.measureText(text).width;
  tempCtx.globalAlpha = .50;
  tempCtx.fillStyle = 'white'
  tempCtx.fillText(text, cw - textWidth - 10, ch - 8);
  tempCtx.fillStyle = 'black'
  tempCtx.fillText(text, cw - textWidth - 10 + 5, ch - 8 + 5);
  tempCanvas.toBlob(function (blob) {
    let formData = new FormData();
    let request = new XMLHttpRequest();
    request.addEventListener('error', sendMessage);
    if (tabs.offsetHeight <= 24 * tabs.offsetWidth / 9) {
      formData.append('photo', blob);
      formData.append('caption', notes.value);
      request.open('POST', `https://api.telegram.org/bot${localStorage.getItem("token")}/sendPhoto?chat_id=${localStorage.getItem("chat_id")}`);
    } else {
      let file = new File([blob], `${filename === '' ? 'tabs' : filename}.png`);
      formData.append('document', file);
      request.open('POST', `https://api.telegram.org/bot${localStorage.getItem("token")}/sendDocument?chat_id=${localStorage.getItem("chat_id")}`);
      sendMessage();
    }
    request.send(formData);
  });
}

function getFilename() {
  let filename = '';
  currentName = currentName.replaceAll('/', '');
  currentName = currentName.replaceAll('\\', '');
  currentName = currentName.replaceAll('?', '');
  currentName = currentName.replaceAll('%', '');
  currentName = currentName.replaceAll('*', '');
  currentName = currentName.replaceAll(':', '');
  currentName = currentName.replaceAll('|', '');
  currentName = currentName.replaceAll('"', '');
  currentName = currentName.replaceAll('<', '');
  currentName = currentName.replaceAll('>', '');
  currentName = currentName.replaceAll('.', '');
  currentName = currentName.replaceAll(',', '');
  currentName = currentName.replaceAll(';', '');
  currentName = currentName.replaceAll('=', '');
  currentName = currentName.replaceAll(' ', '_');
  for (let char of currentName) {
    filename += transliteration[char] === undefined ? char : transliteration[char];
  }
  return filename;
}

function unsubscribe() {
  if (localStorage.getItem("chat_id")) {
    let goodbye = "Ви успішно відв'язали Sopilka Tab Creator Bot від сайту. Більше Ви не будете отримувати жодних сповіщень :(";
    let url = `https://api.telegram.org/bot${localStorage.getItem("token")}/sendMessage?chat_id=${localStorage.getItem("chat_id")}&text=${goodbye}`;
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
  }
  localStorage.removeItem('chat_id');
  localStorage.removeItem('profilePhoto');
  localStorage.removeItem('name');
  tglogout.setAttribute('class', 'invisible');
  tglogin.setAttribute('class', '');
  profilePhoto.setAttribute('src', './img/avatar.svg');
}

function showErr() {
  requaireLogin.setAttribute('class', 'error');
}

function closeErr() {
  requaireLogin.setAttribute('class', 'error invisible');
}

function closePopup() {
  if (info.checked) {
    info.checked = false;
  } else if (settings.checked) {
    settings.checked = false;
  }
}

function showInterview() {
  interviewPopup.setAttribute("class", "interview popup show");
}

function closeInterview() {
  interviewPopup.setAttribute("class", "interview popup");
}

function waitForTg() {
  return new Promise(resolve => {
    if (document.getElementById("telegram-login-SopilkaTabCreatorBot")) {
      return resolve(document.getElementById("telegram-login-SopilkaTabCreatorBot"));
    }

    const observer = new MutationObserver(mutations => {
      if (document.getElementById("telegram-login-SopilkaTabCreatorBot")) {
        resolve(document.getElementById("telegram-login-SopilkaTabCreatorBot"));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

function onTelegramAuth(user) {
  if (user.photo_url) {
    profilePhoto.setAttribute('src', user.photo_url);
    localStorage.setItem('profilePhoto', user.photo_url);
  }
  localStorage.setItem("chat_id", user.id);
  localStorage.setItem('token', '5854252894:AAH4UxPPUZiDTy-GqZ5UzNkDQY-IFZdekuw');
  localStorage.setItem("name", `${user.first_name} ${user.last_name ? user.last_name : ''}`);
  let welcomeMessage = `Вітаю, ${user.first_name} ${user.last_name ? user.last_name : ''}!%0AВи успішно підключили Sopilka Tab Creator Bot. Тепер при збереженні результатів роботи на сайті Ваші аплікатурні схеми автоматично надходитимуть у цей чат.`;
  let url = `https://api.telegram.org/bot${localStorage.getItem("token")}/sendMessage?chat_id=${localStorage.getItem("chat_id")}&text=${welcomeMessage}`;
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  tglogin.setAttribute('class', 'invisible');
  tglogout.innerHTML = localStorage.getItem('lang') === 'en' ? `<p>You logged in as <em>${localStorage.getItem("name")}</em></p><p>Now you can save your tabs to <em>telegram</em>.</p><input type="button" id="btnUnsubscribe" value="Log out" onclick="unsubscribe()">` : `<p>Ви увійшли як <em>${localStorage.getItem("name")}</em></p><p>Тепер Ви можете зберігати аплікатурні схеми до окремого чату у <em>telegram</em>.</p><input type="button" id="btnUnsubscribe" value="Не надсилати мені повідомлення" onclick="unsubscribe()">`;
  tglogout.setAttribute('class', '');
}
