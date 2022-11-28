export var id;

export function randomPic(solved, testerId, list_of_done, callback) {
    let randomn = Math.floor(Math.random() * 101);
    if (5 * randomn < solved) {
        fetch('https://mn15t-by-hum4n5.onrender.com/tester/' + testerId + '/highdeviation')
            .then(response => response.json())
            .then(res_json => {
                let res_data = res_json['0'];
                if (res_data.Deviation == 0) {
                    returnAnyRandomPic(list_of_done, callback)
                }
                else {
                    id = res_data['ID']
                    callback(res_data['ImagePath'])
                }
            });
    }
    else {
        returnAnyRandomPic(list_of_done, callback)
    }
}
function returnAnyRandomPic(list_of_done, callback) {
    let randomn = 0;
    do {
        randomn = Math.floor(Math.random() * 10000) + 1
    } while (list_of_done.includes(randomn));
    fetch('https://mn15t-by-hum4n5.onrender.com/images/' + randomn)
        .then(response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            callback(res_data['ImagePath']);
            console.log(res_data['ImagePath'])
            console.log(randomn)
        });
    console.log(id)
    id = randomn; //xdfunixdd
}
