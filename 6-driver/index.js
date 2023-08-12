const age = 20;
const hasLicence = true;
const isDrunk = false;

const canDrive = age >= 18
    && !isDrunk
    && hasLicence;
    console.log(`Пользователь может вести машину: ${canDrive ? 'Да' : 'Нет'}`);