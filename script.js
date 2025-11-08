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

        '-15': '🥓🍼',
        '-11': '🥥🥥🍄',
      
        '-9': 'radish cubes',
        '-5': '🌯🍳🍳',
        '-3': '🥛🧂',
        '-1': '🧠🫛',
      
        '10': '🍔',
        '11': 'pork stones',
        '11.1': '🫜',
        '12': 'ant syrup',
        '13': 'spoilt casserole',
        '13.12': '🧈🥖🦎',
        '14': '🥮',
        '15': 'spatchcock watermelon',
        '15.6': '🫟🍣',
        '16': 'olive stuffed eggs',
        '17': '🍩🐿️',
        '17.1': '🥐🍕🍋',
        '18': '🥯',
        '19': 'interrupted hummus',
      
        '20': 'stuffed gall bladder',
        '21': '🥕🫒',
        '22': 'lemon fibre',
        '23': '🧵🥑',
        '24': '🦂🍗',
        '25': 'balloon wafers',
        '25.2': '🥚🍧🥚🍧',
        '26': '🪱🍮🍮',
        '27': 'grated snails',
        '28': '☕️🌰',
        '29': '🍈🥫👂',

        '30': 'lychee dangle',
        '31': 'jelly meat',
        '31.5': '🧅🦞🥔',
        '32': 'nugget quartet',
        '33': 'soiled nougat',
        '34': '🍉🍉🍅',
        '35': '🍔🖇️',
        '36': 'rice trifle',
        '37': '🫐🍈🍒',
        '38': 'plum pesto',
        '39': 'pinstriped mackerel',

        '40': '🍥🎲',
        '41': 'flushed peppercorns',
        '42': '🥨🍄',
        '43': '🍕🥦🥥',
        '44': '🍿🌶️',
        '44.9': '🪨🍊',
        '45': 'breadrice',
        '45.1': '🫘🍠🫚',
        '46': 'erotica pancakes',
        '47': '🫚🫚🫚🫚',
        '48': '🧁💣',
        '49': '🍌🍌🚬🍌',

        '50': '🍞🧶',
        '51': 'brick pudding',
        '52': '🥨🦴🥪',
        '52.8': '🥤🕯️',
        '53': 'apricot medallions',
        '54': '🌽🪵',
        '55': 'cake bones',
        '55.1': '🚬🚬🍲',
        '56': '🍹🐡',
        '57': 'drain slop',
        '58': 'sloppy goujons',
        '59': '🍞🍞',

        '60': '🍕🧀🧀',
        '61': 'desiccated marrow',
        '62': '🍜🍜',
        '63': 'camel tongues',
        '64': '🍝🍜🍫',
        '65': 'beef strings',
        '65.2': '🥩🥩',
        '66': 'shrivelled feta',
        '67': 'melancholic beansprouts',
        '68': '🌭',
        '69': '🍑👅💦',

        '70': '🍆🍇',
        '71': 'malignant bagels',
        '72': '🧂💿',
        '73': '🥝🍅',
        '74': 'tongue cheese',
        '74.7': '🖐️🥓',
        '75': '🪣🫑',
        '75.2': '🍫🫜🫜',
        '76': 'hedgehog surprise',
        '76.45': '🐝🍫',
        '77': '🥞🕷️🕷️',
        '78': '🍋‍🟩🏴‍☠️🍋‍🟩',
        '79': '🍌🌾🍌🍌',

        '80': '🥄🧊🧽',
        '80.5': '🍤🍤🥫🥫',
        '81': '🍷🍈🍳',
        '82': 'egg sockets',
        '83': '🥭🌵',
        '84': '🍦✂️🍦✂️',  
        '85': 'oppositional fig snaps',
        '86': '🍶🍑',
        '86.9': '🍢🍢',
        '87': 'jammy crickets',
        '87.4': '🚬🍋‍🟩',
        '88': 'pulped cod', 
        '89': '🍛',

        '90': 'cement mousse',
        '91': '🍇',
        '92': '🫒🫒🫔',
        '93': 'sugared oysters',
        '94': '🪲🥜',
        '95': 'tarmac rotisserie',
        '95.2': 'jellied lobster',
        '96': '🥖🦞',
        '97': '🦨🍪🦨',
        '98': 'mucus dumplings',
        '99': '🥗🍦🍦',

        '100': '🥦',
        '101': '🍼🥫',
        '101.6': '🫑🍯',
        '102': 'steamed toast',
        '103': '💊🥫',
        '104': 'pineapple beer',
        '105': 'bbq bran flakes',
        '106': 'pickled daffodils',
        '107': '🥘🥘🧽',
        '108': '🥘🥓🍅',
        '109': 'beef-fed grass steaks',

      
        '110': '🧶🧶🍍',
        '111': '🍜',
        '112': '🍳🫑🥫',
        '113': 'beef kisses',
        '114': '🍗🥔🥦',
        '115': 'marmite grit',
        '115.7': '🫓🧯',
        '116': '📌🥃🍸',
        '117': 'contrapuntal waffles',
        '118': '🍭🍋🧃',
        '119': 'glovebox tenderloins',
        '119.5': '🌯🧶',

        '120': '🧀🧈🍪',
        '121': 'freeze-dried cacti',
        '121.5': '🧱🧱🍐',
        '122': 'hoover pasta bake',
        '123': '🍾🍌',
        '123.5': '🗞️🍌🍄',
        '124': 'pink avocado',
        '125': '🧆🦎',
        '126': 'packet of frazzles',
        '127': 'dogged apples',
        '128': 'throat loaf',
        '129': '🧈🌼🍷',

        '130': 'weasel beef',
        '131': '🌶️🍅🍅🥊',
        '132': '🍶🫐',
        '133': '🥗🪰🪱🐛',
        '134': 'candied bubble meat',
        '135': '🧀📦🧠',
        '136': 'anchovy dust',
        '137': '🦇🧀🥨',
        '138': 'just borvil',
        '139': '🍯🌶️🧪',

        '140': 'fish tea',
        '141': '🍣🧼🍣',
        '142': 'distilled fructose',
        '143': '🫒🌶️🥒',
        '144': 'spectral butter',
        '145': 'explosive bran apples',
        '146': '🥫🥒',
        '147': 'creamed squid',
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
        '169': 'calcified pancakes',

        '170': 'chicken sponge',
        '171': '🫜🎂🐁',
        '172': '👁️🫔',
        '173': 'juiced hot dogs',
        '174': '🥠👂🍼',
        '175': '🪱🍝🪱🍝',
        '176': 'spider dough',
        '177': '🥕🥕🧂',
        '178': 'earth beans',
        '179': '🥡🧄🍖',

        '180': '🍒🐀🥛',
        '181': 'foamed tofu',
        '182': '🧃🥜',
        '183': 'recoiled bean sprouts',
        '184': '🍠🍠🍠🍠🍠',
        '185': 'codine noodles',
        '186': '🥔🥪🍏',
        '187': 'sniffer dogs',
        '188': 'unfortunate pears',
        '189': '🐿️🥧',

        '190': 'almond negotiation',
        '191': 'sweaty ostrich',
        '192': 'bone balls',
        '193': '🍫🍕🍫🦟',
        '194': '🦂🥘',
        '195': 'salmon keyhole',
        '196': '🍦🍡',
        '197': '🦗🍙🍙',
        '198': '🍓🥛🎾',
        '199': 'nipple cream',

        '200': '💡👅🍝',
        '201': '🌰🐡',
        '202': 'trash badger crumble',
        '203': '🎂💡🎾',
        '204': 'asparagus nodules',
        '205': 'congested meatballs',
        '206': 'finger juice',
        '207': '🥛🌾🥄',
        '208': 'sodden crabcakes',
        '209.9': '🍭🪨',
        '209.93': '🌯🤡💩',

        '230': 'slippery biscuits',
        '231': 'muted swede',
        '232': 'donut clots',
        '233': '💊🍑🍑',
        '234': '🥩🥞',
        '235': '🥟🔩',
        '236': '🍯🧲',
        '237': 'turbulent grease sticks',
        '238': 'prawn negotiation',
        '239': 'bucket gunk pavolva',

        '240': '🫔🩹',
        '241': '🫚🍳',
        '242': 'carpet hot slice',
        '243': 'baked bean threat',
        '244': 'the idea of a radish',
        '245': 'fatberg gravy',
        '246': '🌶️🫧🍍',
        '247': '🍭🕯️',
        '248': '🐌🧄🥗',
        '249': 'bile daiquiri',

        '250': '🥜🥜🥜🥜',
        '251': 'cheese assault',
        '252': '🥔🥞',
        '253': 'aromatic doritos',
        '254': 'lipstick tomatoes',
        '255': '🦪🥟🦪🥟',
        '256': 'turpentine martini',
        '257': '🦐🍚🍤',
        '258': 'chickpea snogger',
        '259': 'snotty tissue filo',

        '260': 'clockwork jam',
        '261': '🥒',
        '262': '8-bit bananas',
        '263': 'faxed potatoes',
        '264': 're-heated tax discs',
        '265': 'sticky clams',
        '266': '🥽🍔',
        '267': 'drippy eggballs',
        '268': '🍫🧁',
        '269': 'guava jambalaya',

        '270': 'sautéed sand',
        '271': 'vehicular squid',
        '272': '🌮🫖',
        '273': 'interpretive strudel',
        '274': '🫛🫁🥓',
        '275': '🦐🥞',
        '278': '🥘🧽🫚',
        '279': 'yeasty protrusion',

        '280': 'potato embrace',
        '281': 'haunted trout',
        '282': '🧄🧱',
        '283': 'charred porcupine quills',
        '284': '🧈💊',
        '285': 'bleached gratin',
        '286': 'temporal lime pulp',
        '287': 'boiled baguette',
        '288': 'bike rack BBQ',
        '289': 'hi-vis tomato salad',

        '290': 'prepared teapots',
        '291': 'troubled watercress',
        '292': 'basted plimsolls',
        '293': '⏳⏳🍭',
        '294': '🍎🍄',
        '295': '🥄🫁',
        '296': 'peach wastage',
        '297': '🦞',
        '298': '🥥🫛🍳🍳',
        '299': '🍪🥛🧋',

        '300': 'liberated artichokes',
        '301': 'hazlehut intentions',
        '302': 'strawberry calculations',
        '306': '🥩🦴🥯',
        '305': 'breaded tortoise breasts',
        '306': '🤡🍰🧃',
        '307': 'dairy-free calpol',
        '309': '🧅🐢',

        '310': 'corrugated tahini',
        '311': '🥬🦐🍪',
        '312': 'avian suggestion',
        '313': 'gamey whisper',
        '314': 'drowsy kale corn',
        '315': 'stiff grapes',

        '320': 'shrimp erosion',
        '321': '🥄🎲🍤',

        '330': 'stone-baked dispair',
        '331': 'horse crab swirls',

        '340': 'sharps bin broth',

        '350': 'linguine but not',

        '360': 'rotated cactus chips',

        '370': 'incontinental breakfast',

        '380': 'funeral platter',

        '390': 'generative cod',

        '400': '🥙🥗',
        '401': 'buttered turds',
        '404': '🛞🍉',
        '405': 'modern cabbage splat',

        '410': 'fish feet',
        '411': '🥧🪑',

        '420': 'recreational gammon',

        '430': 'societal pastie',

        '440': 'cheesemonger fingers',

        '450': 'microwaved USB dongle',

        '460': 'sweetened bacteria',

        '470': 'poached envelopes',
        '471': 'sublimated ricecakes',

        '480': 'shredded crab lungs',

        '490': 'isolation purée',
        '491': 'honey-roasted breath tube',
      
        '507': '☕️☕️☕️',
        '507.1': '🍺🎣',
        '508': 'cow froth',

        '510': 'fermented sertraline',
        '511': 'arpeggiated calimari',

        '520': 'binaural lamb chops',

        '530': 'candied tumours',

        '540': 'tonsil casserole',
        '545': 'steel pan-fried bongos',

        '550': 'oven-baked carcinoma',

        '560': 'aphex frittata',
        '569': 'grotty omelette',

        '570': 'almond solfeggietto',

        '582': 'Yummy Petrol Slurp',
        '583': '🍯🍚',

        '590': 'clumped brisket',
      
        '607': '🧤🍜🫔',
        '608': 'wood onions',
        '609': '🧴🧋',

        '610': 'slow-roasted briefcase',

        '620': 'phroylactic custard',

        '630': 'marinated cervix',

        '640': 'mayonaise popcorn',
        '641': '🧻🧻🥓🫒',

        '650': '🍅🧀🍳',
        '651': 'rusty nail bake',

        '660': 'buck-wheat aneurysm',

        '670': 'abdominal clam chowder',

        '680': 'clotted styrofoam',

        '690': 'toothy paté',

        '700': 'lemon and gingivitis',

        '710': 'stem-cells on the rocks',

        '720': 'chicken transplants',

        '730': 'air-fried astroturf',

        '740': 'itchy strogonoff',

        '751': 'crowded ribs',
        '756': 'petrified halloumi',

        '760': 'sprout clippings',

        '770': 'gelatinous cuboid',

        '780': 'arpegiatted wakame',

        '790': 'industrial chickpeas',
      
        '801': 'armoured carrots',
        '802': 'mustard cookies',
        '809': 'fruit meat trousers',

        '810': 'salted floppy discs',

        '820': 'creamed circuit board',

        '832': 'rendered pineapple',
        '834': 'difficult mushrooms',
        '835': 'fizzy cheese',
        '836': 'distilled parmesan',
        '837': 'frosted broccoli cheeks',

        '840': 'cable tie assortment',

        '850': 'vegetable clogs',

        '860': 'flambéd piano keys',

        '870': 'feathered cronuts',

        '880': 'self-inflicted chicken',

        '890': 'skunk jerky',
      
        '901': 'garlicky toffee',
        '902': 'ill concieved hotpot',
        '903': 'faxed paninis',
        '904': 'waste disposal hash',

        '910': 'red onion boba',
        '920': 'almost turnips',

        '920': 'a ham cabinet',

        '930': 'ash tray bake',

        '940': 'polyp couscous',

        '950': 'beef gussets',

        '960': 'one pot crisis',

        '970': 'synthetic borscht',

        '980': 'preserved cotton buds',

        '990': 'piss spritz',

        '1000': 'tapioca struggle',
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
