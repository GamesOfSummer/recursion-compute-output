const consoleStart = () => {
    console.log('\x1b[33m', 'Running test cases...');
    console.log('');
};

const consoleEnd = () => {
    console.log('\x1b[33m', 'End of test cases...');
    console.log('\x1b[37m', '');
    console.log('');
};

const consoleBuffer = () => {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};

const formatOutput = (fxn: any, answer: any) => {
    const output = fxn;

    console.log('\x1b[36m%s\x1b[0m', 'Testing function...');

    if (output === answer) {
        console.log('\x1b[32m', 'CORRECT :: ' + output + ' === ' + answer);
    } else {
        console.log(
            '\x1b[31m',
            'WRONG -> Output was ' + output + ', expected ' + answer
        );
    }

    console.log();
};


function crudeSort(array: number[], n: number) {
    
    if(n === 0)
    {
        return array[n];
    }
    else if (array[n] < crudeSort(array, n - 1))
    {
        return array[n];
    }
    else
    {
        return crudeSort(array, n-1);
    }

}



function betterSort(array: number[], n: number) {
    
    if(n === 0)
    {
        return array[n];
    }
    else if (array[n] < betterSort(array, n - 1))
    {
        return array[n];
    }
    else
    {
        return betterSort(array, n-1);
    }

}




consoleStart();


console.log(crudeSort([1,2,3], 5));
console.log(crudeSort([1,2,3,4,5,6], 3));
console.log(crudeSort([6,3,2,0,13], 3));
console.log(crudeSort([36,110,42,2], 1));

consoleEnd();

consoleBuffer();

export {};