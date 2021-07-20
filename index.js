
function distanceFromHqInBlocks(blocks) {
    let hq = 42
    if (blocks <= hq){
        return hq - blocks
    }  else  {
        return blocks - hq;
    }  
};

function distanceFromHqInFeet(x) {
    let blocks = distanceFromHqInBlocks(x);
    let feet = blocks * 264
    return feet;
};

function distanceTravelledInFeet(start, end) {
    let result = 0
    if (start < end){
       result = end - start
    } else {
        result = start - end;
    }
    return result * 264;
};

function calculatesFarePrice(begin, destination) {
    let feet = distanceTravelledInFeet(begin, destination);
    if (feet <= 400){
        return 0
    } else if(400 < feet && feet < 2000) {
        let ihf = feet - 400
        return ihf * .02
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else if(feet > 2500){
        return 'cannot travel that far';
    }
};