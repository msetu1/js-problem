// Problem - 5
/*তুমি দ োকানে একটা চি প্স কি নতে গে লা কি ছুখুচরা টাকার ন োট নি য়ে । একটা canPay() নামে function বানাও যে টা
২টা ইনপুট নে ইঃ একটা array, এবং আরে কটা number।
1. Array এর প্রত্যে ক টা element ত োমার খুচরা টাকা বঝু াই
1 taka
2 taka
5 taka
2. second input টা বঝু াই চি প্স এর দাম।
Task:
1. যদি খুচরা টাকা গুল ো য োগ করে চি প্স এর দামে র সমান বা তার বে শি হয় তাহলে boolean true রি টার্ন
করবে
2. আর যদি ন োটগুল োর য োগফল চি প্স এর দামে র চে য়ে কম হয় সে ক্ষে ত্রে boolean false রি টার্ন করবে ।
3. Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কি না চে ক করবে । empty অ্যারে হলে মি নি ংফুল মে সে জ
রি টার্ন করে দি বে । */

function canPay(changeArray, totalDue) {
    if(!Array.isArray(changeArray)|| typeof totalDue !=="number"){
        return "Please provide me an array and number";
    } 
    else{
        // Bonus: Check if the first input is an empty array
    if (changeArray.length === 0) {
        return "empty array";
    }
    let totalChange =0
    for (let item of changeArray){ 
        totalChange += item;
    }
    return totalChange >= totalDue;
    }
}
console.log(canPay([1,5,5],10));
