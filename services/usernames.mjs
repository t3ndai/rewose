import { randomInt } from 'crypto'

/* 
* Generate random username 
*/
export default function generateUsername() {
    const wordSize = 5
    const vowels = 'aeiou'
    const wordCharArray = []

    for(let i = 0; i <= 5; i++) {
        if (i == 2 || i == 4) {
            const index = randomInt(5)
            const charInt = vowels.charCodeAt(index)
            wordCharArray.push(charInt)
        } else {
            const charInt = randomInt(97, 122)
            wordCharArray.push(charInt)
        } 
    }
    return String.fromCharCode(...wordCharArray)
}