function solution_1(){
    var a = 5;
    var b = 6;
    var c = 7;
    var s = (a+b+c)/2;
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    alert('Area of the Triangle is: '+area);
}
function solution_2(b){
    var input = prompt("Enter Value:");
    var ans;
    if(b){
        ans = (input-32)/9*5;
    }
    else{
        ans = (input/5*9)+32;
    }
    alert('Answer is: '+ans);
}
function solution_3(){
    var a = prompt('Enter First Number:');
    var b = prompt('Enter Second Number:');
    var c = prompt('Enter Third Number:');
    var ans = Math.max(a, Math.max(b, c));
    alert('Maximum is: '+ans);
}
function solution_4(){
    var string = prompt('Input a String:');
    var each = string.split(" ");
    for(var i=0; i<each.length; i++){
        each[i] = each[i][0].toUpperCase() + each[i].slice(1);
    }
    string = each.join(" ");
    alert('Output String: '+string);
}
function solution_5(){
    var input = prompt('Input a Number:');
    var ans;
    if(input%3 == 0)
        ans = 'Divisible by 3';
    else
        ans = 'Not Divisible by 3';
    if(input%7 == 0)
        ans += ', Divisible by 7';
    else
        ans += ', Not Divisible by 7';
    alert(ans);
}
function solution_6(){
    var a = 'GAGCCTACTAACGGGAT';
    var b = 'CATCGTAATGACGGCCT';
    var count=0;
    for(var i=0; i<a.length; i++){
        if(a[i] != b[i])
            count++;
    }
    alert('Answer is: '+count);
}
function solution_7(){
    var string = prompt('Input a String:');
    string = string.toLowerCase();
    var check = 'abcdefghijklmnopqrstuvwxyz';
    var b = true;
    for(var i=0; i<check.length; i++){
        if(string.indexOf(check[i]) == -1){
            b=false;
            break;
        }
    }
    if(b) alert('Pangram');
    else alert('Not a Pangram');
}
function solution_8(){
    var string = prompt('Input a String:');
    var b = true;
    for(var i=0; i<string.length; i++){
        if(string.split(string[i]).length-1 > 1){
            b = false;
            break;
        }
    }
    if(b) alert('Isogram');
    else alert('Not an Isogram');
}
function solution_9(){
    var string = prompt('Input a String:');
    var ans = '';
    string = string.split(' ');
    for(var i=0; i<string.length; i++){
        ans += string[i][0];
    }
    ans = ans.toUpperCase();
    alert('Answer is: '+ans);
}
function solution_10(){ 
    var feeds = {author:'', image:'', content:'', likes:[], comments:[], share:''};    
}
function solution_11(){
    var friends_list = {fname:'', lname:''};
}