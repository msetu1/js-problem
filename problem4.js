// Problem - 4
/*ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
তি নটি property থাকবে ।
Task:
1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।
2. Bonus: যদি object এর ক োন ো property missing থাকে সে ক্ষে ত্রে সে ই অংশটুকু double underscore
দি য়ে replace হবে । (২য় output এর format এ )*/
function findAddress(obj) {
    if(typeof obj!=="object"){
        return "please provide a object";
    }
    else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        return `${street}, ${house}, ${society}`
    }
}
const obj={
    street:10,
    house:"",
    society:""
}
const address =findAddress(obj);
console.log(address);