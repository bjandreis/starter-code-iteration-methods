console.log(users)

const main = document.querySelector('main')

// Helper function
function printKata(kataNumber, object) {
    const detailsElement = document.createElement('details')
    main.append(detailsElement)

    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)

    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
// KATA 1
const isActive = users.filter(user => user.isActive === true)
printKata(1, isActive)

// KATA 2
const showEmail = users.map(user => user.email)
printKata(2, showEmail)

// KATA 3
const checkForCompanyOvation = users.some(user => user.company === 'OVATION')
printKata(3, checkForCompanyOvation)

// KATA 4
const firstUserOverAge38 = users.find(user => user.age > 38)
printKata(4, firstUserOverAge38)

// KATA 5
const firstUserOverAge38AndIsActive = users
    .filter(user => user.isActive === true)
    .find(user => user.age > 38)
printKata(5, firstUserOverAge38AndIsActive)

// KATA 6
const zencoUserBalances = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)
printKata(6, zencoUserBalances)

// KATA 7
const fugiatTagUserAges = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
printKata(7, fugiatTagUserAges)