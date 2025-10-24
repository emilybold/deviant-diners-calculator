let display;
let currentInput = '';

// Ensure the display element exists before we try to use it
document.addEventListener('DOMContentLoaded', () => {
  display = document.getElementById('display');
  updateDisplay();
});

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
  if (!display) return;
  display.innerHTML = currentInput || '';
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function backspace() {
  if (currentInput.length > 0) {
    // Use Array.from to correctly handle emoji/grapheme clusters
    const chars = Array.from(currentInput);
    chars.pop();
    currentInput = chars.join('');
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
        '12': 'ant syrup',
        '13': '🍎🍄',
        '14': '🥮',
        '15': '🥩🥩',
        '15.6': 'pork stones',
        '16': 'olive stuffed eggs',
        '17': '🍩🐿️',
        '17.1': '🥐🍕🍋',
        '18': '🥯',
        '19': '🤡🍰🧃',
      
        '20': '🥧🪑',
        '21': '🥕🫒',
        '22': 'lemon fibre',
        '23': '🧵🥑',
        '24': '🦂🍗',
        '25': 'balloon wafers',
        '25.2': '🥚🍧🥚🍧',
        '26': '🪱🍮🍮',
        '27': '🥥🥥🍄',
        '28': '☕️🌰',
        '29': '🍈🥫👂',

        '30': '🐌🧄🥗',
        '31': 'jelly meat',
        '31.5': '🧅🦞🥔',
        '32': '🌶️🫧🍍',
        '33': '🧻🧻🥓🫒',
        '34': '🍉🍉🍅',
        '35': '🍔🖇️',
        '36': 'rice trifle',
        '37': '🫐🍈🍒',
        '38': '🎂💡🎾',
        '39': '🦪🥟🦪🥟',

        '40': '🍥🎲',
        '41': 'flushed peppercorns',
        '42': '🥨🍄',
        '43': '🍕🥦🥥',
        '44': '🍿🌶️',
        '44.9': '🪨🍊',
        '45': 'breadrice',
        '45.1': '🫘🍠🫚',
        '46': '🥟🔩',
        '47': '🫚🫚🫚🫚',
        '48': '🧁💣',
        '49': '🍌🍌🚬🍌',

        '50': '🍞🧶',
        '51': 'brick pudding',
        '52': '🥨🦴🥪',
        '52.8': '🥤🕯️',
        '53': '🍭🕯️',
        '54': '🌽🪵',
        '55': 'cake bones',
        '55.1': '🚬🚬🍲',
        '56': '🍹🐡',
        '57': '🥒',
        '58': '🐝🍫',
        '59': '🍞🍞',

        '60': '🍕🧀🧀',
        '61': '🍚🐀',
        '62': '🍜🍜',
        '63': 'camel tongues',
        '64': '🍝🍜🍫',
        '65': '🧈🥖🦎',
        '66': '🥥🫛🍳🍳',
        '67': 'melancholic bean sprouts',
        '68': '🌭',
        '69': '🍑👅💦',

        '70': '🍆🍇',
        '71': '🦗🍙🍙',
        '72': '🧂💿',
        '73': '🥝🍅',
        '74': 'tongue cheese',
        '74.7': '🖐️🥓',
        '75': '🪣🫑',
        '75.2': '🍫🫜🫜',
        '76': 'hedgehog surprise',
        '77': '🥞🕷️🕷️',
        '78': '🍋‍🟩🏴‍☠️🍋‍🟩',
        '79': '🍌🌾🍌🍌',

        '80': '🥄🧊🧽',
        '80.5': '🍤🍤🥫🥫',
        '81': '🍷🍈🍳',
        '82': 'egg sockets',
        '83': '🥭🌵',
        '84': '🍦✂️🍦✂️',  
        '85': '🥄🫁',
        '86': '🍶🍑',
        '86.9': '🍢🍢',
        '87': 'jammy crickets',
        '88': '🚬🍋‍🟩', 
        '89': '🍛',

        '91': '🍇',
        '92': '🫒🫒🫔',
        '93': 'sugared oysters',
        '94': '🪲🥜',
        '95': '🦞',
        '95.2': 'jellied lobster',
        '96': '🥖🦞',
        '97': '🦨🍪🦨',
        '98': '🍯🧲',
        '99': '🥗🍦🍦',

        '100': '🥦',
        '101.6': '🫑🍯',
        '102': 'steamed toast',
        '103': '💊🥫',
        '105': '🍅🧀🍳',
        '106': 'pickled daffodils',
        '107': '🥘🥘🧽',
        '108': '🥘🥓🍅',
        '109': '🥔🥞',
        '110': '🧶🧶🍍',

        '111': '🍜',
        '112': '🍳🫑🥫',
        '113': '🍦🍡',
        '114': '🍗🥔🥦',
        '115': 'marmite grit',
        '115.7': '🫓🧯',
        '116': '📌🥃🍸',
        '117': 'contrapuntal waffles',
        '118': '🍭🍋🧃',
        '119.5': '🌯🧶',

        '120': '🧀🧈🍪',
        '121': '💊🍑🍑',
        '121.5': '🧱🧱🍐',
        '122': '🥓🍼',
        '123': '🍾🍌',
        '123.5': '🗞️🍌🍄',
        '124': 'pink avocado',
        '125': '🧆🦎',
        '126': '🥛🌾🥄',
        '127': '🦐🍚🍤',
        '128': 'throat loaf',
        '129': '🧈🌼🍷',

        '130': 'weasel beef',
        '131': '🌶️🍅🍅🥊',
        '132': '🍶🫐',
        '133': '🥗🪰🪱🐛',
        '134': 'candied bubble meat',
        '135': '🧀📦🧠',
        '136': '🍓🥛🎾',
        '137': '🦇🧀🥨',
        '138': 'just borvil',
        '139': '🍯🌶️🧪',

        '140': 'fish tea',
        '141': '🍣🧼🍣',
        '142': '🍪🥛🧋',
        '143': '🫒🌶️🥒',
        '144': 'spectral butter',
        '145': '🍯🍚',
        '146': '🥫🥒',
        '147': '🦂🥘',
        '148': '🧈🥜🦶',
        '149': '🦔🥄🍲',

        '150': 'psychic toast cream',
        '151': '🥙🧶',
        '152': '🪙🍩🛞',
        '153': 'sour ribbed bacon',
        '154': '🍟🍟🧮🍟',
        '155': '🍼🧱',
        '156': 'sun-dried glands',
        '157': '🥜🥩',
        '158': '🧅🍧',
        '159': 'falafel shavings',

        '160': '🫑🫚',
        '161': '🍛🦠',
        '162': '🥜🧆🧆',
        '163': 'nutty lungs',
        '164': '🧯🍙🧯',
        '165': 'wax fruits',
        '166': '🌰🧂🍹',
        '167': 'fugal potatoes',
        '168': '🍕🥚',
        '169': '🥩🥞',

        '170': 'Chicken Sponge',
        '171': '🫜🎂🐁',
        '172': '👁️🫔',
        '173': 'juiced hot dogs',
        '174': '🥠👂🍼',
        '175': '🪱🍝🪱🍝',
        '176': '🍫🍕🍫🦟',
        '177': '🥕🥕🧂',
        '178': 'earth beans',
        '179': '🥡🧄🍖',

        '180': '🍒🐀🥛',
        '181': 'foamed tofu',
        '182': '🧃🥜',
        '183': '🥄🎲🍤',
        '184': '🍠🍠🍠🍠🍠',
        '185': '🌰🐡🍝',
        '186': '🥔🥪🍏',

        
        '200': '💡👅🍝',
        '206': 'finger juice',
        '209.9': '🍭🪨',
        '209.93': '🌯🤡💩',

        '250': '🥜🥜🥜🥜',

        '306': '🥩🦴🥯',
        '305': 'breaded tortoise breasts',
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
    if (display) display.innerText = '🤮🤮🤮';
    currentInput = '';
  }
}
