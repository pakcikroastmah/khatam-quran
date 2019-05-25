function calculateDaysNeeded() {
    const pagesInputElement = document.getElementById('pages-input');
    const pagesInputValue = parseInt(pagesInputElement.value);
    
    const daysNeeded = 604 / pagesInputValue;
    const daysNeededStr = daysNeeded.toFixed(0);
    console.log('pagesInputValue', pagesInputValue)

    console.log('daysNeeded', daysNeeded)


    let pagesMessage = 'If you read '+ pagesInputValue + ' page(s) a day, you will complete it in about ' + daysNeededStr + ' days.';

    if(daysNeeded <=0) {
        pagesMessage = 'please put a valid number'
    }
    else if(daysNeeded > 365) {
        pagesMessage += 'It is very long pls try to read more pages per day.Be consistent!';
    } else { 
        pagesMessage += 'less than a year masyallah! you can do this'
    }

    const pagesOutputElement = document.getElementById('pages-output');
    pagesOutputElement.innerHTML = pagesMessage;
}





function calculatePagesNeeded() {
    const daysInputElement = document.getElementById('days-input');
    const daysInputValue = daysInputElement.value;

    const pagesNeeded = 604 / daysInputValue;
    const pagesNeededStr = pagesNeeded.toFixed(0);
    
    let pagesMessage = 'If you hope to khatam the Quran by ' + daysInputValue + ' days, you need to read about ' + pagesNeededStr + ' page(s) per day. ';


    if(pagesNeeded <=0) {
        pagesMessage = 'you cant khatam the quran in one month'
    }
    else if(pagesNeeded > 604) {
        pagesMessage += 'WOW';
    } else if(pagesNeeded < 604) { 
        pagesMessage += 'Masyallah! you can do this'
    } else if(pagesNeeded < 20) { 
        pagesMessage += ' dont worry you will khatam the quran after ramadhan. SLOWLY but SURELY insyallah.'
    } else {
        pagesMessage += 'WOW! please keep reading the quran even after ramadhan'
    }

   
    const daysOutputElement = document.getElementById('days-output');
    daysOutputElement.innerHTML = pagesMessage;

}