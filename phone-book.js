'use strict';

/**
 * Сделано задание на звездочку
 * Реализован метод importFromCsv
 */
const isStar = true;

/**
 * Телефонная книга
 */
let phoneBook = [];

/**
 * Добавление записи в телефонную книгу
 * @param {String} phone
 * @param {String?} name
 * @param {String?} email
 * @returns {Boolean}
 */
function add(phone, name, email) {
    if ((phone.length !== 10) || (!name)) {
        return false;
    }

    for (let i = 0; i < phoneBook.length; i++) {
        if (phone === phoneBook[i][0]) {
            return false;
        }
    }
    phoneBook.push([phone, name, email]);

    return true;
}

/**
 * Обновление записи в телефонной книге
 * @param {String} phone
 * @param {String?} name
 * @param {String?} email
 * @returns {Boolean}
 */
function update(phone, name, email) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phone === phoneBook[i][0] && name) {
            phoneBook[i] = ([phone, name, email]);

            return true;
        }
    }

    return false;
}

/**
 * Удаление записей по запросу из телефонной книги
 * @param {String} query
 * @returns {Number}
 */
function findAndRemove(query) {

}

/**
 * Поиск записей по запросу в телефонной книге
 * @param {String} query
 * @returns {String[]}
 */
function find(query) {
    let answer = [];
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i][0].includes(query) ||
            phoneBook[i][1].includes(query) ||
            phoneBook[i][2].includes(query)
        ) {
            const entry = phoneBook[i];
            const number = chopNumber(entry[0]);
            answer.push(`${entry[1]}, ${number}, ${entry[2]}`);
        }
    }

    return answer;
}

function chopNumber(number) {

    const numberCode = `(${number[0]}${number[1]}${number[2]})`;
    const numberScnd = `(${number[3]}${number[4]}${number[5]})`;
    const numberThrd = `(${number[6]}${number[7]})`;
    const numberFrth = `(${number[8]}${number[9]})`;

    return `+7 (${numberCode}) ${numberScnd}-${numberThrd}-${numberFrth}`;
}

/**
 * Импорт записей из csv-формата
 * @star
 * @param {String} csv
 * @returns {Number} – количество добавленных и обновленных записей
 */
function importFromCsv(csv) {
    // Парсим csv
    // Добавляем в телефонную книгу
    // Либо обновляем, если запись с таким телефоном уже существует

    return csv.split('\n').length;
}

module.exports = {
    add,
    update,
    findAndRemove,
    find,
    importFromCsv,

    isStar
};
