let str = ""

do{
    str += "*"
    console.log(str);
    
}while(str.length < 6)

do{
    str = str.slice(0, str.length-1)
    console.log(str);
    
}while(str.length > 1)