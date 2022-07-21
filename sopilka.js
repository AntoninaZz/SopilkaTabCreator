var notes = document.getElementById("notes");
var tabs = document.getElementById("tabs");
notes.value = "cc#dd#eff#gg#aa#b CC#DD#Ef+f#+g+g#+a+a#+b+";
showTabs(notes.value);

notes.addEventListener("input", function (event) {
  showTabs(event.target.value);
});

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
    var img = document.createElement('img');
    var figcaption = document.createElement('figcaption');
    if (note.endsWith("#")) {
      img.src = `${note[0]}_sharp.svg`;
      figcaption.innerText = note;
    } else if (note.endsWith("#+")) {
      if (note == note.toUpperCase()) {
        img.src = `${note[0].toLowerCase()}_sharp++.svg`;
        figcaption.innerText = `${note}`;
      } else {
        img.src = `${note[0]}_sharp+.svg`;
        figcaption.innerText = `${note[0].toUpperCase()}${note[1]}`;
      }
    } else if (note.endsWith("#++")) {
      img.src = `${note[0]}_sharp++.svg`;
      figcaption.innerText = `${note[0].toUpperCase()}${note[1]}${note[2]}`;
    } else {
      img.src = `${note}.svg`;
      if (note.endsWith('++')) {
        figcaption.innerText = `${note[0].toUpperCase()}${note[1]}`;
      } else if (note.endsWith('+')) {
        figcaption.innerText = `${note[0].toUpperCase()}`;
      } else if (note == 'space') {
        figcaption.innerText = '';
      } else if (note == 'error') {
        figcaption.innerText = '';
      } else {
        figcaption.innerText = note;
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
  for(var br of lines){
    if(br.parentElement.firstElementChild != br && br.previousElementSibling.localName.startsWith('h')) {
      br.parentElement.removeChild(br);
    }
  }
}
