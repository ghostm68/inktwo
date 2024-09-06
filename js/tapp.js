(function() {
    let darkMode = false;
    let fontSize = 18;
    let currentFont = 'Lora';
    let typewriterSound = false;
    let openDyslexicMode = false;
    const fonts = [
        'Lora', 'Roboto', 'Open Sans', 'Merriweather', 'Arial', 'Helvetica', 'Times New Roman', 
        'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 
        'Arial Black', 'Impact'
    ];
    let typewriterAudio;
	
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? '#222' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';
    document.getElementById('editor').style.backgroundColor = darkMode ? '#222' : '#fff';
    document.getElementById('editor').style.color = darkMode ? '#fff' : '#000';
}

function changeFontSize(operation) {
    if (operation === '+') {
        fontSize += 2;
    } else if (operation === '-' && fontSize > 8) {
        fontSize -= 2;
    }
    document.getElementById('editor').style.fontSize = fontSize + 'px';
}

function changeFont() {
    const currentIndex = fonts.indexOf(currentFont);
    currentFont = fonts[(currentIndex + 1) % fonts.length];
    document.getElementById('editor').style.fontFamily = currentFont;
}

function toggleTypewriterSound() {
    typewriterSound = !typewriterSound;
    if (typewriterSound) {
        typewriterAudio = new Audio('https://www.soundjay.com/mechanical/sounds/typewriter-key-1.mp3');
        document.getElementById('editor').addEventListener('keypress', playTypewriterSound);
    } else {
        document.getElementById('editor').removeEventListener('keypress', playTypewriterSound);
    }
}

function playTypewriterSound() {
    if (typewriterAudio) {
        typewriterAudio.currentTime = 0;
        typewriterAudio.play();
    }
}

function toggleOpenDyslexic() {
    openDyslexicMode = !openDyslexicMode;
    document.body.classList.toggle('opendyslexic');
    document.getElementById('editor').classList.toggle('opendyslexic');
}

function saveDocument() {
    const text = document.getElementById('editor').value;
    const fileType = prompt("Enter file type to save (txt or pdf):", "txt");
    
    if (fileType === "txt") {
        const blob = new Blob([text], {type: 'text/plain'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'document.txt';
        a.click();
    } else if (fileType === "pdf") {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(text, 10, 10);
        doc.save("document.pdf");
    } else {
        alert("Invalid file type. Please choose 'txt' or 'pdf'.");
    }
}

function loadDocument() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt,.pdf';
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        if (file.type === "text/plain") {
            reader.onload = function(e) {
                document.getElementById('editor').value = e.target.result;
                updateWordCount();
            };
            reader.readAsText(file);
        } else if (file.type === "application/pdf") {
            reader.onload = function(e) {
                const typedarray = new Uint8Array(e.target.result);
                
                pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

                pdfjsLib.getDocument({ data: typedarray }).promise.then(function(pdf) {
                    let text = '';
                    const numPages = pdf.numPages;
                    let loadedPages = 0;

                    for (let i = 1; i <= numPages; i++) {
                        pdf.getPage(i).then(function(page) {
                            page.getTextContent().then(function(textContent) {
                                text += textContent.items.map(item => item.str).join(' ') + '\n\n';
                                loadedPages++;
                                if (loadedPages === numPages) {
                                    document.getElementById('editor').value = text.trim();
                                    updateWordCount();
                                }
                            });
                        });
                    }
                }).catch(function(error) {
                    console.error('Error loading PDF:', error);
                    alert('Error loading PDF. Please try again.');
                });
            };
            reader.readAsArrayBuffer(file);
        }
    };
    input.click();
}

function printDocument() {
    window.print();
}

function showPopupToolbar() {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const toolbar = document.getElementById('popup-toolbar');
        toolbar.style.display = 'block';
        toolbar.style.top = `${rect.top - toolbar.offsetHeight - 5}px`;
        toolbar.style.left = `${rect.left}px`;
    }
}

function applyFormatting(format) {
    document.execCommand(format, false, null);
}

function updateWordCount() {
    const text = document.getElementById('editor').value;
    const wordCount = text.trim().split(/\s+/).length;
    document.getElementById('word-counter').textContent = `Words: ${wordCount}`;
}

function applyScreenplayFormat() {
    const editor = document.getElementById('editor');
    const format = document.getElementById('screenplay-elements').value;
    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;
    const selection = editor.value.substring(selectionStart, selectionEnd);
    let formattedText = selection;

    switch(format) {
        case 'sceneheading':
            formattedText = selection.toUpperCase() + '\n\n';
            break;
        case 'action':
            formattedText = selection + '\n\n';
            break;
        case 'character':
            formattedText = '\n' + selection.toUpperCase() + '\n';
            break;
        case 'dialogue':
            formattedText = '    ' + selection + '\n\n';
            break;
        case 'parentheses':
            formattedText = '    (' + selection + ')\n';
            break;
        case 'transition':
            formattedText = '\n' + selection.toUpperCase() + ':\n\n';
            break;
    }

    editor.setRangeText(formattedText, selectionStart, selectionEnd, 'end');
    editor.focus();
}

function initializeFeatures() {
        updateWordCount();
        document.getElementById('editor').addEventListener('input', handleListCreation);
        
        // Add event listeners for menu items
        document.querySelector('.menu-item:nth-child(1)').addEventListener('click', toggleFullScreen);
        document.querySelector('.menu-item:nth-child(2)').addEventListener('click', toggleDarkMode);
        document.querySelector('.menu-item:nth-child(3)').addEventListener('click', () => changeFontSize('+'));
        document.querySelector('.menu-item:nth-child(4)').addEventListener('click', () => changeFontSize('-'));
        document.querySelector('.menu-item:nth-child(5)').addEventListener('click', changeFont);
        document.querySelector('.menu-item:nth-child(6)').addEventListener('click', toggleTypewriterSound);
        document.querySelector('.menu-item:nth-child(7)').addEventListener('click', toggleOpenDyslexic);
        document.querySelector('.menu-item:nth-child(8)').addEventListener('click', saveDocument);
        document.querySelector('.menu-item:nth-child(9)').addEventListener('click', loadDocument);
        document.querySelector('.menu-item:nth-child(10)').addEventListener('click', printDocument);
        
        // Add event listener for screenplay format
        document.getElementById('screenplay-elements').addEventListener('change', applyScreenplayFormat);
        
        // Add event listener for editor selection
        document.getElementById('editor').addEventListener('mouseup', showPopupToolbar);
        
        // Add event listeners for popup toolbar buttons
        document.querySelectorAll('#popup-toolbar button').forEach(button => {
            button.addEventListener('click', () => applyFormatting(button.textContent.toLowerCase()));
        });
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('#popup-toolbar') && !e.target.closest('#editor')) {
            document.getElementById('popup-toolbar').style.display = 'none';
        }
    });

    // Call initializeFeatures when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', initializeFeatures);
})();
