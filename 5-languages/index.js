const hi = prompt('Укажите язык приветствия: EN, RU, DE или FR');
switch (true) {
    case hi === 'EN':
        console.log('Good day!')
        break;
    case hi === 'RU':
        console.log('Добрый день!')
        break;
    case hi === 'DE':
        console.log('Guten Tag!')
        break;
        case hi === 'FR':
            console.log('Bonjour!')
            break;
}

