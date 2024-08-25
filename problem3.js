// Problem - 3
/*ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
এই array তে সবসময় দইুটি উপাদান থাকবে ।
Task:
1. যদি অ্যারে র দইুটি উপাদান পজি টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থে কে ছ োট ক্রমে সাজি য়ে রি টার্ন
করবে ।
2. যদি দইুটি উপাদান একই হয় সে ক্ষে ত্রে তুমি এই স্ট্রি ং রি টার্ন করবে ঃ “equal”
3. Bonus: যদি অ্যারে র যে ক োন ো একটি উপাদান নে গে টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি রি টার্ন করবে “Invalid
Input” */
function sortMaker(arr) {
    if(!Array.isArray(arr) ){
        return "please provide me amn array";
    }
    else{
        if (arr[0] < 0 || arr[1] < 0) {
            return "Invalid Input";
        }
        
        // Check if both elements are equal
        if (arr[0] === arr[1]) {
            return "equal";
        }
        
        // Sort array in descending order and return
        return arr.sort((a, b) => b - a);
    }
}
const arr =[4,-2]
const arrNum =sortMaker(arr);
console.log(arrNum);

// যদি অ্যারের দইুটি উপাদান পজিটিভ সংখ্যা হয় সে ক্ষেত্রে তুমি অ্যারে টিকে বড় ো থেকে ছ োট ক্রমে সাজিয়ে রিটার্ন
// করবে ।

// Sort array in descending order and return
return arr.sort((a, b) => b - a);

