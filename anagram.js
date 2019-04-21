// Program to find if two words are anagram or not
var word1 = "ujjwal";
var word2 = "ujjwal";
var sum1 = 0;
var sum2 = 0;

for (i = 0; i < word1.length; i++) {
    sum1 += word1.charCodeAt(i);
    sum2 += word2.charCodeAt(i);
}
//Checking whether both the sums are equal
if (sum1 == sum2) {
    console.log("Anagram")
}
else {
    console.log("Not an anagram")
}