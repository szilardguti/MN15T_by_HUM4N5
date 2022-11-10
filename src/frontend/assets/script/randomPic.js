export var asd=0;

export function randomPic(solved, testerId, list_of_done, callback) {
    let randomn = Math.floor(Math.random() * 101);
    if(randomn<solved)
    {   
        fetch('http://localhost:3030/tester/' + testerId + '/highdeviation')
        .then (response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            if(res_data.Deviation == 0 )
                {
                    returnAnyRandomPic(list_of_done,callback)
                }
                else{
                    callback(res_data)
                }
        });
    }
    else{
        returnAnyRandomPic(list_of_done,callback)
    }
}
function returnAnyRandomPic(list_of_done, callback)
{
    let randomn = 0;
    do{
        randomn = Math.floor(Math.random() * 10000)+1
    }while (list_of_done.includes(randomn));
    fetch('http://localhost:3030/images/' + randomn)
        .then (response => response.json())
        .then(res_json => {
            let res_data = res_json['0'];
            callback(res_data['ImagePath']);
            console.log(res_data['ImagePath'])
        });
    asd=randomn;
}
