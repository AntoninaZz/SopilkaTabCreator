// variables
let tunes;
let languages;
let notesTranslation;
let contentTranslation;
let infoSlides;
let transliteration;
let html = document.getElementsByTagName("html")[0];
let notes = document.getElementById("notes");
let tabs = document.getElementById("tabs");
let tune = document.getElementById("tune");
let lang = document.getElementById("lang");
let slogan = document.getElementById("slogan");
let btnSave = document.getElementById("btnSave");
let saving = document.getElementById("saving");
let chooseFormat = document.getElementById("chooseFormat");
let rbSaveToPng = document.getElementById("png");
let info = document.getElementById("info");
let settings = document.getElementById("settings");
let spacing = document.getElementById("spacing");
let whiteBg = document.getElementById("whiteBg");
let description = document.getElementById("description");
let labelTune = document.querySelectorAll('[for="tune"]')[0];
let labelLang = document.querySelectorAll('[for="lang"]')[0];
let labelSpacing = document.querySelectorAll('[for="spacing"]')[0];
let labelWhiteBg = document.querySelectorAll('[for="whiteBg"]')[0];
let infoPopup = document.getElementsByClassName("info")[0];
let optionScaleB;
let optionScaleE;
let optionOwnTune;
let currentLang = 'uk';
let currentSpacing = 4;
let currentName = '';
const dataURL = 'data.json'; //https://raw.githubusercontent.com/AntoninaZz/SopilkaTabCreator/main/data.json

// entry point
getData(dataURL);

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

  addTuneOptions();
  addLangOptions();
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
      getCurrentName(notes.value);
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
}

function showTabs(notes) {
  tabs.innerHTML = '';
  for (let i = 0; i < notes.length; i++) {
    if (notes[i] !== 'c' && notes[i] !== 'd' && notes[i] !== 'e' && notes[i] !== 'f' && notes[i] !== 'g' && notes[i] !== 'a' && notes[i] !== 'b' && notes[i] !== 'C' && notes[i] !== 'D' && notes[i] !== 'E' && notes[i] !== 'F' && notes[i] !== 'G' && notes[i] !== 'A' && notes[i] !== 'B' && notes[i] !== ' ' && notes[i] !== '\n' && notes[i] !== '-') {
      elementCreation('error');
    } else {
      if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] == '-' && notes[i + 4] !== '\n') {
        let title = notes.slice(i + 4).split('\n')[0];
        i = i + 3 + title.length;
        elementCreation(`title_${title}`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] == '-' && notes[i + 4] == '\n') {
        i = i + 3;
        elementCreation(`title_`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] !== '\n') {
        let title = notes.slice(i + 3).split('\n')[0];
        i = i + 2 + title.length;
        elementCreation(`title_${title}`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] == '\n') {
        i = i + 2;
        elementCreation(`title_`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] !== '\n') {
        let subtitle = notes.slice(i + 3).split('\n')[0];
        i = i + 2 + subtitle.length;
        elementCreation(`subtitle_${subtitle}`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '-' && notes[i + 3] == '\n') {
        i = i + 2;
        elementCreation(`subtitle_`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '-' && notes[i + 2] !== '\n') {
        let subtitle = notes.slice(i + 2).split('\n')[0];
        i = i + 1 + subtitle.length;
        elementCreation(`subtitle_${subtitle}`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] == '-' && notes[i + 2] == '\n') {
        i = i + 1;
        elementCreation(`subtitle_`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] !== '\n') {
        let comment = notes.slice(i + 2).split('\n')[0];
        i = i + 1 + comment.length;
        elementCreation(`comment_${comment}`);
      } else if (notes[i] == '\n' && notes[i + 1] == '-' && notes[i + 2] == '\n') {
        i = i + 1;
        elementCreation(`comment_`);
      } else if (i == 0 && notes[i] == '-' && notes[i + 1] !== '\n') {
        let comment = notes.slice(i + 1).split('\n')[0];
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
    notesValueChange(tunes[tune.value]);
  } else {
    notes.value = localStorage.getItem("ownNotes");
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
    currentName = toTune.name[currentLang];
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
      filename = '';
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
        filename += transliteration[char] || char;
      }
      let link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL();
      link.download = `${filename === '' ? 'tabs' : filename}.png`;
      link.click();
      document.body.removeChild(link);
    });
  } else {
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
