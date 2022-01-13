const getSleepHours = day => {
    switch (day) {
        case 'sunday':
            return 8;
            break;
        case 'monday':
            return 6;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 5;
            break;
        default:
            return 7;
            break;
    };
};
console.log(getSleepHours('sunday'));
console.log(getSleepHours('monday'));
console.log(getSleepHours('tuesday'));
console.log(getSleepHours('wednesday'));
console.log(getSleepHours('thursday'));
console.log(getSleepHours('friday'));
console.log(getSleepHours('saturday'));

const getActualSleepHours = () =>
    getSleepHours('sunday') +
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday');

const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('User gets perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`User gets ${actualSleepHours - idealSleepHours} hours more sleep than needed`);
    } else {
        console.log(`User gets ${idealSleepHours - actualSleepHours} hours less sleep. Must get some rest.`);
    };
};
calculateSleepDebt();