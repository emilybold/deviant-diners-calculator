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
      
        '-5': '🌯🍳🍳',
        '-3': '🥛🧂',
        '-1': '🧠🫛',
      
        '10': 'irksome scallops',
        '11': 'pork stones',
        '11.1': '🫚🫚🫚🫚',
        '12': 'ant syrup',
        '13': 'spoilt casserole',
        '13.12': '🧈🥖🦎',
        '14': 'rectal crunchwrap',
        '15': 'spatchcock watermelon',
        '15.6': 'itcy scratchings',
        '16': 'olive stuffed eggs',
        '17': 'porky swindon',
        '17.1': '🌽🪵',
        '18': 'instructional tofu',
        '19': 'interrupted hummus',
      
        '20': 'stuffed gall bladder',
        '21': 'creamy femurs',
        '22': 'lemon fibre',
        '23': 'stew obligation',
        '24': 'skimmed wetwipes',
        '25': 'balloon wafers',
        '25.2': '🍌🍌🚬🍌',
        '26': 'oral plums',
        '27': 'grated snails',
        '28': 'terminal fishcakes',
        '29': 'fizzy dentures',

        '30': 'lychee dangling',
        '31': 'jelly meat',
        '31.5': '🍞🧶',
        '32': 'nugget quartet',
        '33': 'soiled nougat',
        '34': 'meat splatter',
        '35': 'lemon disturbance',
        '36': 'rice trifle',
        '37': 'trout pincher',
        '38': 'plum pesto',
        '39': 'pinstriped mackerel',

        '40': 'venison matrix',
        '41': 'flushed peppercorns',
        '42': 'pizza renewal',
        '43': 'ginger cigarettes',
        '44': 'hegelian penne',
        '44.9': '🍹🐡',
        '45': 'breadrice',
        '45.1': '🫘🍠🫚',
        '46': 'erotica pancakes',
        '47': 'dirty scampi',
        '48': 'nothing potato',
        '49': 'spinach quiff',

        '50': 'vegtable fallout',
        '51': 'brick pudding',
        '52': 'smoked banana',
        '52.8': '🥤🕯️',
        '53': 'apricot medallions',
        '54': 'toilet steak',
        '55': 'cake bones',
        '55.1': '🚬🚬🍲',
        '56': 'badger nuggets',
        '57': 'drain slop',
        '58': 'sloppy goujons',
        '59': 'haddock fetish',

        '60': 'blanched bog roll',
        '61': 'desiccated marrow',
        '62': 'oyster flusher',
        '63': 'camel tongues',
        '63.3': '🍞🍞',
        '64': 'isopropyl milkshake',
        '65': 'beef strings',
        '65.2': '🥩🥩',
        '66': 'shrivelled feta',
        '67': 'melancholic beansprouts',
        '68': 'endoscope pie',
        '69': 'battered urethra',
        '69.2': '🍑👅💦',

        '70': 'mammalian bap',
        '71': 'malignant bagels',
        '72': 'quixotic slices',
        '73': 'sour balls',
        '74': 'tongue cheese',
        '74.7': '🖐️🥓',
        '75': 'fabric eggs',
        '75.2': '🍫🫜🫜',
        '76': 'hedgehog surprise',
        '76.45': '🐝🍫',
        '77': 'bean pathology',
        '78': 'road mash',
        '79': 'squashed flies',

        '80': 'dung loaded fries',
        '80.5': '🥭🌵',
        '81': 'moth bitten pizza',
        '82': 'egg sockets',
        '83': 'vinegar destruction',
        '84': 'buttered afterbirth',  
        '85': 'oppositional fig snaps',
        '86': 'quantum potatoes',
        '86.9': '🍢🍢',
        '87': 'jammy crickets',
        '87.4': '🚬🍋‍🟩',
        '88': 'pulped cod', 
        '89': 'pulled raisins',

        '90': 'cement mousse',
        '91': 'lamb discharge',
        '92': 'crusty nuts',
        '93': 'sugared oysters',
        '94': 'cheddar blankets',
        '95': 'tarmac rotisserie',
        '95.2': 'jellied lobster',
        '96': 'salted documents',
        '97': 'prawn strategy',
        '98': 'mucus dumplings',
        '99': 'steamed bank notes',

        '100': 'geologic wafers',
        '101': 'porcine outcome',
        '101.6': '🫑🍯',
        '102': 'steamed toast',
        '103': 'beef tablets',
        '104': 'pineapple beer',
        '105': 'bbq bran flakes',
        '106': 'pickled daffodils',
        '107': 'fermented syringes',
        '108': 'sea bass flaps',
        '109': 'beef-fed grass steaks',

      
        '110': 'fruity needles',
        '111': 'a brothy return',
        '112': 'goose-fat snooker',
        '112.1': '🍳🫑🥫',
        '113': 'beef kisses',
        '114': 'indignified onions',
        '115': 'marmite grit',
        '115.7': '🫓🧯',
        '116': 'shredded complexity',
        '117': 'contrapuntal waffles',
        '118': 'toasted dartboard',
        '119': 'glovebox tenderloins',
        '119.5': '🌯🧶',

        '120': 'hammered salad',
        '121': 'freeze-dried cacti',
        '121.5': '🧱🧱🍐',
        '122': 'hoover pasta bake',
        '123': 'twarted gibblets',
        '123.5': '🗞️🍌🍄',
        '124': 'pink avocado',
        '125': 'furious gravelax',
        '126': 'packet of frazzles',
        '127': 'dogged apples',
        '128': 'throat loaf',
        '129': 'flatbread economy',

        '130': 'weasel beef',
        '131': 'chilli departure',
        '132': 'fiscal milk',
        '133': 'mythic pretzel',
        '134': 'candied bubble meat',
        '135': 'cured sugarlumps',
        '135.6': '🧀📦🧠',
        '136': 'anchovy dust',
        '137': 'pancreatic doughballs',
        '138': 'just borvil',
        '138.4': '🦇🧀🥨',
        '139': 'folic pears',

        '140': 'fish tea',
        '141': 'deified spam',
        '142': 'distilled fructose',
        '143': 'insulated beans',
        '144': 'spectral butter',
        '144.2': '🫒🌶️🥒',
        '145': 'explosive bran apples',
        '146': 'refined ham skin',
        '147': 'creamed squid',
        '148': 'foot grapes',
        '148.12': '🦔🥄🍲',
        '149': 'chainsmoked ribs',

        '150': 'psychic toast cream',
        '151': 'burrata wig',
        '151.6': '🥙🧶',
        '152': 'medical eggs',
        '153': 'sour ribbed bacon',
        '154': 'risotto wreckage',
        '155': 'territorial lamb',
        '156': 'sun-dried glands',
        '156.7': '🍼🧱',
        '157': 'brick nuts',
        '158': 'concrete sorbet',
        '159': 'falafel shavings',

        '160': 'cerebral peppers',
        '161': 'curried anatomy',
        '162': 'proscuitto domain',
        '163': 'nutty lungs',
        '164': 'autopsy in yellow sauce',
        '165': 'wax fruits',
        '166': 'meaty panel',
        '166.8': '🌰🧂🍹',
        '167': 'fugal potatoes',
        '168': 'shallot pandemic',
        '169': 'calcified pancakes',

        '170': 'chicken sponge',
        '171': 'ratted popcorn',
        '172': 'deficated coconuts',
        '173': 'juiced hot dogs',
        '174': 'a beefy shart',
        '175': 'carrot breasts',
        '176': 'spider dough',
        '177': 'smoked saddle',
        '177.2': '🥕🥕🧂',
        '178': 'earth beans',
        '179': 'hasselback house cat',

        '180': 'cherry rodent bites',
        '181': 'foamed tofu',
        '182': 'bum buns',
        '182.9': '🧃🥜',
        '183': 'recoiled bean sprouts',
        '184': 'cashew extremity',
        '185': 'codine noodles',
        '186': 'corn recoil',
        '186.3': '🍠🍠🍠🍠🍠',
        '187': 'sniffer dogs',
        '188': 'unfortunate pears',
        '189': 'chimpunk goujons',
        '189.3': '🐿️🥧',

        '190': 'almond negotiation',
        '191': 'sweaty ostrich',
        '192': 'bone balls',
        '193': 'mucus reduction',
        '193.2': '🍫🍕🍫🦟',
        '194': 'lime bike',
        '194.3': '🦂🥘',
        '195': 'salmon keyhole',
        '196': 'lemon scooter',
        '196.7': '🍦🍡',
        '197': 'haddock luddites',
        '197.4': '🦗🍙🍙',
        '198': 'spinach duffle',
        '198.2': '🍓🥛🎾',
        '199': 'nipple cream',

        '200': 'hard boiled brexit',
        '200.5': '💡👅🍝',
        '201': '🌰🐡',
        '202': 'trash badger crumble',
        '203': 'toilet coffee',
        '203.4': '🎂💡🎾',
        '204': 'asparagus nodules',
        '205': 'congested meatballs',
        '206': 'finger juice',
        '207': 'modular nuggets',
        '207.4': '🥛🌾🥄',
        '208': 'sodden crabcakes',
        '209': 'scholastic brisket',
        '209.9': '🍭🪨',
        '209.93': '🌯🤡💩',

        '210': 'shovel salad',
        '211': 'gammon antiquity',
        '212': 'fried bluetit',
        '213': 'comedy beetroot',
        '214': 'allium pavlova',
        '215': 'grey bin puree',
        '216': 'acrostic satsumas',
        '217': 'feature length kebabs',
        '218': 'berry reincarnation',
        '219': 'bladdered quorn mince',

        '220': 'chum slurpee',
        '221': 'crabby slurry',
        '222': 'quorn neolibralism',
        '223': 'torrential cornflakes',
        '224': 'surgical burgers',
        '225': 'matcha sludge',
        '226': 'sherbet rummage',
        '227': 'chocolate teapot',
        '228': 'thwacked garlic',
        '229': 'bus depot fondue',

        '230': 'slippery biscuits',
        '231': 'muted swede',
        '232': 'donut clots',
        '233': 'lost property hot pot',
        '234': 'salad duvet',
        '234.2': '🥩🥞',
        '235': 'managerial biscuits',
        '235.2': '🥟🔩',
        '235.8': '🥩🥞',
        '236': 'sticky tarmac',
        '237': 'turbulent grease sticks',
        '238': 'prawn negotiation',
        '239': 'bucket gunk pavolva',

        '240': 'time to think',
        '241': 'egg bandages',
        '242': 'carpet hot slice',
        '243': 'baked bean threat',
        '244': 'the idea of a radish',
        '245': 'fatberg gravy',
        '246': 'backbacked parsnips',
        '246.8': '🌶️🫧🍍',
        '247': 'pork lampshades',
        '248': 'stringy roulade',
        '248.2': '🐌🧄🥗',
        '249': 'bile daiquiri',

        '250': 'strangled carpaccio',
        '250.3': '🥜🥜🥜🥜',
        '251': 'cheese assault',
        '252': 'jungian crostini',
        '252.3': '🥔🥞',
        '253': 'aromatic doritos',
        '254': 'lipstick tomatoes',
        '255': 'bladder with tarragon',
        '255.5': '🦪🥟🦪🥟',
        '256': 'turpentine martini',
        '257': 'radiophonic tartlets',
        '257.8': '🦐🍚🍤',
        '258': 'chickpea snogger',
        '259': 'snotty tissue filo',

        '260': 'clockwork jam',
        '261': 'radish cubes',
        '261.2': '🥒',
        '262': '8-bit bananas',
        '263': 'faxed potatoes',
        '264': 're-heated tax discs',
        '265': 'sticky clams',
        '266': 'nappy bacon rashers',
        '267': 'drippy eggballs',
        '267.4': '🍫🧁',
        '268': 'railcard croutons',
        '269': 'guava jambalaya',

        '270': 'sautéed sand',
        '271': 'vehicular squid',
        '272': 'crimped salmon',
        '272.4': '🌮🫖',
        '273': 'interpretive strudel',
        '273.4': '🫛🫁🥓',
        '274': 'blue cheese shuffle',
        '274.3': '🦐🥞',
        '275': 'poigniant tiramisu',
        '278': 'ecclesiastical tuna',
        '278.1': '🥘🧽🫚',
        '279': 'yeasty protrusion',

        '280': 'potato embrace',
        '281': 'haunted trout',
        '282': 'brick sausage',
        '282.2': '🧄🧱',
        '283': 'charred porcupine quills',
        '284': 'dung truffles',
        '284.1': '🧈💊',
        '285': 'bleached gratin',
        '286': 'temporal lime pulp',
        '287': 'boiled baguette',
        '288': 'bike rack BBQ',
        '289': 'hi-vis tomato salad',

        '290': 'prepared teapots',
        '291': 'troubled watercress',
        '292': 'basted plimsolls',
        '293': 'chocolate-dipped slugs',
        '293.5': '⏳⏳🍭',
        '294': 'air fried car seat',
        '294.3': '🍎🍄',
        '295': 'salmon ablation',
        '296': 'peach wastage',
        '297': 'a sprout fountain',
        '297.4': '🦞',
        '298': 'adjectival pancetta',
        '298.3': '🥥🫛🍳🍳',
        '299': 'poutine rehearsal',
        '299.4': '🍪🥛🧋,

        '300': 'liberated artichokes',
        '301': 'hazlehut intentions',
        '302': 'strawberry calculations',
        '306': 'grilled adrenal glands',
        '306.5': '🥩🦴🥯',
        '305': 'breaded tortoise breasts',
        '306': 'candied hippocampus',
        '306.2': '🤡🍰🧃',
        '307': 'dairy-free calpol',
        '308': 'spiced epidermis',
        '309': 'gothic chestnuts',

        '310': 'corrugated tahini',
        '311': 'starched chicken',
        '311.2': '🥬🦐🍪',
        '312': 'avian suggestion',
        '313': 'gamey whisper',
        '314': 'drowsy kale corn',
        '315': 'stiff grapes',
        '316': 'green bean frustration',
        '316.4': '🍿🌶️',
        '317': 'greasy toolbox',
        '317.4': '🧯🍙🧯',
        '318': 'retextured mussels',
        '319': 'goose tiramisu',

        '320': 'shrimp erosion',
        '321': 'tomato hinges',
        '322': 'grass in custard',
        '323': 'goat cheese whisper',
        '324': 'yummy barnacles',
        '325': 'urinal spoonful',
        '326': 'stuffed urethra',
        '327': 'peeled beef',
        '328': 'chicken denistry',
        '329': 'tinned spines',

        '330': 'stone-baked dispair',
        '331': 'horse crab swirls',
        '332': 'whipped clockfaces',
        '333': 'kumquat swab',
        '334': 'fruity stopcock',
        '335': 'anonymous sauce',
        '336': 'optimal yam', 
        '337': 'peppermint invitaion',
        '337.3': '🪣🫑',
        '338': 'gummy rabbits',
        '339': 'thong chocolate',

        '340': 'sharps bin broth',
        '341': 'complicated okra',
        '342': 'potato abstraction',
        '343': 'reclaimed broccoli',
        '343.3': '🥄🫁',
        '344': 'englarged beef tongue',
        '345': 'durational cream',
        '346': 'lubricated sirloins',
        '347': 'sardine embankment',
        '348': 'carrot apprehension',
        '349': 'salmon compute',
      
        '350': 'linguine but not',
        '351': 'iterative pizza',

        '360': 'rotated cactus chips',

        '370': 'incontinental breakfast',
        '371': 'bao bun bonanza',
        '372': 'slug with poppy seeds',

        '380': 'funeral platter',

        '390': 'generative cod',

        '400': '🥙🥗',
        '401': 'buttered turds',
        '404': '🛞🍉',
        '405': 'modern cabbage splat',

        '410': 'fish feet',
        '411': '🥧🪑',

        '420': 'recreational gammon',
        '421': '🥮',
        '422': 'metric bananas',

        '430': 'societal pastie',
        '431': 'episodic muffins',

        '440': 'cheesemonger fingers',
        '441': 'saurkraut unraveling',

        '450': 'microwaved USB dongle',
        '451': 'strawberry panic',
        '452': 'attack of the chives',
        '453': 'salmon retreat',
        '454': 'pretzel singularity',

        '460': 'sweetened bacteria',
        '461': '🥔🥪🍏',
        '462': 'pepperoni frisking',
        '463': 'melon emancipation',
        '464': 'drippy pond paste',
        '465': 'haddock failiure',
        '466': 'creamed fruit flies',

        '470': 'poached envelopes',
        '471': 'sublimated ricecakes',
        '472': 'sensible egg discussion',

        '480': 'shredded crab lungs',

        '490': 'isolation purée',
        '491': 'honey-roasted breath tube',
      
        '507': '☕️☕️☕️',
        '507.1': '🍺🎣',
        '508': 'cow froth',

        '510': 'fermented sertraline',
        '511': 'arpeggiated calimari',

        '520': 'binaural lamb chops',
        '521': '🍤🍤🥫🥫',

        '530': 'candied tumours',

        '540': 'tonsil casserole',
        '545': 'steel pan-fried bongos',

        '550': 'oven-baked carcinoma',

        '560': 'aphex frittata',
      
        '569': 'grotty omelette',

        '570': 'almond solfeggietto',
        '571': 'stilton proclivity',

        '582': 'yummy petrol slurp',
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
        '681': 'ravioli landslide',

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
        '911': 'almost turnips',
        '912': '🥞🕷️🕷️',

        '920': 'a ham cabinet',

        '930': 'ash tray bake',

        '940': 'polyp couscous',

        '950': 'beef gussets',

        '960': 'one pot crisis',

        '970': 'synthetic borscht',

        '980': 'preserved cotton buds',

        '990': 'piss spritz',

        '1000': 'tapioca struggle',

        '1997': 'blue jam',
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
