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

        '-5': '🌯🍳🍳',
        '-3': '🥛🧂',
        '-1': '🧠🫛',
      
        '10': '🍔',
        '11': '🫟🍣',
        '11.1': '🫜',
        '12': '🌭',
        '13': '🍎🍄',
        '14': '🥮',
        '15': '🥩🥩',
        '15.6': '🍚',
        '16': '🧂🍊',
        '17': '🍩🐿️',
        '17.1': '🥐🍕🍋',
        '18': '🥯',
        '19': '🤡🍰🧃',
      
        '20': '🥧🪑',
        '21': '🥕🫒',
        '22': '🫗🍋',
        '23': '🧵🥑',
        '24': '🦂🍗',
        '25': '🥐🧄',
        '25.2': '🥚🍧🥚🍧',
        '26': '🪱🍮🍮',
        '27': '🥥🥥🍄',
        '28': '☕️🌰',
        '29': '🍈🥫👂',

        '30': '🐌🧄🥗',
        '31': '🩳🍱🥚',
        '31.5': '🧅🦞🥔',
        '32': '🌶️🫧🍍',
        '33': '🧻🧻🥓🫒',
        '34': '🍉🍉🍅',
        '35': '🍔🖇️',
        '36': '🍟🧃',
        '37': '🫐🍈🍒',
        '38': '🎂💡🎾',
        '39': '🦪🥟🦪🥟',

        '40': '🍥🎲',
        '41': '👃🍨',
        '42': '🥨🍄',
        '43': '🍕🥦🥥🥥',
        '44': '🍿🌶️',
        '44.9': '🪨🍊',
        '45': '🍔🥪',
        '45.1': '🫘🍠🫚',
        '46': '🥟🔩',
        '47': '🫚🫚🫚🫚',
        '48': '🧁💣',
        '49': '🍌🍌🚬🍌',

        '50': '🍞🧶',
        '51': '🧱',
        '52': '🥨🦴🥪',
        '52.8': '🥤🕯️',
        '53': '🍭🕯️',
        '54': '🌽🪵',
        '55': '🍡🍡🍡',
        '55.1': '🚬🚬🍲',
        '56': '🍹🐡',
        '57': '🥒',
        '58': '🐝🍫',
        '59': '🍞🍞',

        '60': '🍕🧀🧀',
        '61': '🍚🐀',
        '62': '🍜🍜',
        '63': '🎣🥭',
        '64': '🍝🍜🍫',
        '65': '🧈🥖🦎',
        '66': '🥥🫛🍳🍳',
        '67': '🫘',
        '68': '🌭',
        '69': '🍑👅💦',

        '70': '🍆🍇',
        '71': '🦗🍙🍙',
        '72': '🧂💿',
        '73': '🥝🍅',
        '74': '🍋🍋🍓',
        '74.7': '🖐️🥓',
        '75': '🪣🫑',
        '75.2': '🍫🫜🫜',
        '76': '🥬🦂🍿',
        '77': '🥞🕷️🕷️',
        '78': '🍋‍🟩🏴‍☠️🍋‍🟩',
        '79': '🍌🌾🍌🍌'

        '80': '🥄🧊🧽',
        '80.5': '🍤🍤🥫🥫',
        '81': '🍷🍈🍳',
        '82': '🧇',
        '83': '🥭🌵',
        '84': '🍦✂️🍦✂️',  
        '85': '🥄🫁',
        '86': '🍶🍑',
        '86.9'; '🍢🍢',
        '87': '🥫🥄',
        '88': ' 🚬🍋‍🟩', 
        '89': '🍛',

        '91': '🍇',
        '92': '🫒🫒🫔',
        '93': '🌵',
        '94': '🪲🥜',
        '95': '🦞',
        '95.2': '🍦🍦🍩',
        '96': '🥖🦞',
        '97': '🦨🍪🦨',
        '98': '🍯🧲',
        '99': '🥗🍦🍦',

        '100': '🥦',
        '101.6': '🫑🍯',
        '102': '🧃🥜',
        '103': '💊🥫',
        '105': '🍅🧀🍳',
        '106': '🍲🍘',
        '107': '🥘🥘🧽',
        '108': '🥘🥓🍅',
        '110': '🧶🧶🍍',

        '111': '🍜',
        '115': '🧈🫚',
        '115.7': '🫓🧯',
        '116': '📌🥃🍸',
        '117': '🥕🥕🧂',
        '119.5': '🌯🧶',

        '121': '💊🍑🍑',
        '121.5': '🧱🧱🍐',
        '122': '🥓🍼',
        '123': '🍾🍌',
        '123.5': '🗞️🍌🍄',
        '124': '🧊🥞🍄‍🟫',
        '125': '🧆🦎',

        '200': '💡👅🍝',
        '206': '🍷🍟',
        '209.9': '🍭🪨',
        '209.93': '🌯🤡💩',

        '250': '🥜🥜🥜🥜',

        '306': '🥩🦴🥯',
        '309': '🧅🐢',

        '400': '🥙🥗',
        '404': '🛞🍉',

        '507': '☕️☕️☕️',
        '507.1': '🍺🎣',
        '508': '🍨🔋🍨',

        '607': '🧤🍜🫔',
        '609': '🧴🧋',
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
