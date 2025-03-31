let display = document.getElementById('display');
let currentInput = '';

// Function to append the emoji to the current input and update the display
function appendEmoji(emoji) {
  if (emoji === '🔸') {  
    if (currentInput.includes('🔸')) {  
      return;
    }

    if (currentInput === '' || ['🔥', '❄️', '🥣', '🔪'].includes(currentInput.slice(-1))) {
      return;
    }
  }

  currentInput += emoji;
  updateDisplay();
}

function updateDisplay() {
  display.innerHTML = currentInput || '';
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function backspace() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -2); 
    updateDisplay();
  }
}

function convertToEmoji(result) {
    const numberToEmoji = {
        '0': '🍪',
        '1': '🍏',
        '2': '🪰',
        '3': '🍝',
        '4': '🪱',
        '5': '🍋',
        '6': '🦴',
        '7': '💩',
        '8': '🍕',
        '9': '🧁',
        '.': '🦷',
    };

    const customEmojis = {
        '10': '🍔',
        '12': '🌭',
        '15.6': '🍚',
        '16': '🧂🍊',

        '21': '🥕🫒',
        '24': '🦂🍗',
        '25.2': '🥚🍧🥚🍧',
        '27': '🥥🥥🍄',

        '30': '🐌🧄🥗',
        '36': '🍟🧃',
        '37': '🫐🍈🍒',

        '42': '🥨🍄',
        '44': '🍿🌶️',
        '49': '🍌🍌🍌',

        '50': '🍞🧶',
        '53': '🍭🕯️',
        '57': '🥒',

        '63': '🎣🥭',
        '64': '🍝🍜🍫',
        '69': '🍑👅💦',

        '73': '🥝🍅',
        '75': '🪣🫑',
        '77': '🥞🕷️🕷️',

        '80': '🥄🧊🧽',
        '87': '🥫🥄',
        '88': ' 🚬🍋‍🟩',

        '91': '🍇',
        '96': '🥖🦞',
        '99': '🥗🍦🍦',

        '105': '🍅🧀🍳',
        '110': '🧶🧶🍍',
    };

    // If the result matches a custom number, return the specific emoji
    if (customEmojis[result]) {
        return customEmojis[result];
    }

    // If the result doesn't match a custom number, convert each character in the result to the corresponding emoji
    return result.toString().split('').map(char => numberToEmoji[char] || char).join('');
}


function calculate() {
  try {
    let expression = currentInput
      .replace(/🍏/g, '1')
      .replace(/🪰/g, '2')
      .replace(/🍝/g, '3')
      .replace(/🪱/g, '4')
      .replace(/🍋/g, '5')
      .replace(/🦴/g, '6')
      .replace(/💩/g, '7')
      .replace(/🍕/g, '8')
      .replace(/🧁/g, '9')
      .replace(/🍪/g, '0')
      .replace(/🔥/g, '+')
      .replace(/❄️/g, '-')
      .replace(/🥣/g, '*')
      .replace(/🔪/g, '/')
      .replace(/🦷/g, '.');

      

  
    let result = eval(expression);

    // Convert the result to emoji format
    currentInput = convertToEmoji(result);
    updateDisplay();
  } catch (error) {
    display.innerText = '🤮🤮🤮';
    currentInput = '';
  }
}