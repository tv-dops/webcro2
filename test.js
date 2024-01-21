const { initialData, initialDataTest } = require('./data');

//console.log(initialData)


for (key1 in initialData['settings']) {

    //console.log(`Key1 [${key1}] (with the second data): `, initialDataTest['settings'][key1])

    //console.log(`Key1 [${key1}] (with the first data): `, initialData['settings'][key1])

    if (key1 != 'info') {
        for (key2 in initialData['settings'][key1]) {
            //console.log(`For ${key1} : `,key2)
            if (key2 != 'qa') {
                if (initialDataTest['settings'][key1][key2] == 'on') {
                    //console.log(`${key1} a ${key2} de ${initialDataTest['settings'][key1][key2]}`)
                    initialData['settings'][key1][key2] = 'on'
                } else {
                    initialData['settings'][key1][key2] = 'off'
                }

            } else if(key2 == 'qa') {
                initialData['settings'][key1][key2] = initialDataTest['settings'][key1][key2]
            }
        }
    } else {
        initialData['settings'][key1]['amount'] = initialDataTest['settings'][key1]['amount']
        initialData['settings'][key1]['from'] = initialDataTest['settings'][key1]['from']
        initialData['settings'][key1]['notice'] = initialDataTest['settings'][key1]['notice']
        initialData['settings'][key1]['expire'] = initialDataTest['settings'][key1]['expire']
    }
}



console.log(initialData)

