// 7. Write a ts program to toggle case of each character of a string

var toggleCase: string = "THis Is a String"

if (toggleCase >= 'A' || toggleCase <= 'Z') {
    let result8 = toggleCase.toLowerCase()
    console.log(result8)

} else if (toggleCase >= 'a' || toggleCase <= 'z') {
    let result9 = toggleCase.toUpperCase()
    console.log(result9)
} else {
    console.log("This is not a uppercase and lowercase")
}