
export const  counterF = (email) => {

		const emailArray = email.split("");
		const counterObject = {};
		const counterSorted = [];

		emailArray.forEach((character) => {
			
			if(counterObject[character]){

				counterObject[character] += 1;

			}else{

				counterObject[character] = 1;
			}
		});

		for (const character in counterObject) {

    		counterSorted.push([character, counterObject[character]]);
		}

		counterSorted.sort((a, b) => {

			return b[1] - a[1];
		});

		return counterSorted;
	}