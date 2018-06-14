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

/* This is Solution 10 Class */
class feed{
	constructor(author, image, content, likes, comments, share){
		this.author = author;
		this.image = image;
		this.content = content;
        this.likes = likes;
        this.comments = comments;
		this.share = share;
	}
}
function find_number_of_post(name, feeds){
    var count=0;
    for(var i=0; i<feeds.length; i++){
        if(feeds[i].author == name)
            count++;
    }
    return count;
}
function number_of_likes(post, feeds){
    return feeds[parseInt(post)-1].likes.length;
}
function print_users_like(number, feeds){
    var names = '';
    for(var i=0; i<feeds[parseInt(number)-1].likes.length; i++){
        names += feeds[parseInt(number)-1].likes[i] + '\n';
    }
    alert('Users who liked '+number+' post are:\n'+names);
}
function print_first_user_like(number, feeds){
    alert('First person to like this post is:\n'+feeds[parseInt(number)-1].likes[0]);
}
function print_user_comment_like(number, feeds){
    var names = '';
    for(var i=0; i<feeds[parseInt(number)-1].comments.length; i++){
        var n = feeds[parseInt(number)-1].comments[i].name;
        for(var j=0; j<feeds[parseInt(number)-1].likes.length; j++){
            if(feeds[parseInt(number)-1].likes[j] === n)
                names += n+'\n';
        }
    }
    alert('Users who have commented and liked '+number+' post are:\n'+names);
}
function print_most_comments(feeds){
    var res = '';
    var max = -1;
    var names_arr = [];
    for(var i=0; i<feeds.length; i++){
        for(var j=0; j<feeds[i].comments.length; j++){
            names_arr.push(feeds[i].comments[j].name);
        }
    }
    for(var i=0; i<names_arr.length; i++){
        var c=0;
        for(var j=0; j<names_arr.length; j++){
            if(names_arr[i] == names_arr[j])
                c++;
        }
        if(c>max){
            max = c;
            res = names_arr[i];
        }
    }
    alert('User most commented: '+res);
}
function solution_10(){ 
    var feed_1 = new feed('one', 'path/to/image', 'this is sample content', ['person_1', 'person_2', 'person_2'], [{name:'person_1', comment:'hello'}], 3);
    var feed_2 = new feed('two', 'path/to/image', 'this is sample content', ['person_3', 'person_1', 'person_2'], [{name:'person_1', comment:'hello'}], 3);
    var feed_3 = new feed('one', 'path/to/image', 'this is sample content', ['person_3', 'person_1', 'person_2'], [{name:'person_1', comment:'hello'}], 3);
    var feed_4 = new feed('four', 'path/to/image', 'this is sample content', ['person_1', 'person_2', 'person_1'], [{name:'person_2', comment:'hello'}], 3);
    var feed_5 = new feed('one', 'path/to/image', 'this is sample content', ['smaple', 'person_1', 'person_1', 'person_2'], [{name:'person_2', comment:'hello'}, {name:'person_5', comment:'hello'}], 3);
    var feed_6 = new feed('six', 'path/to/image', 'this is sample content', ['person_2', 'person_1', 'person_2'], [{name:'person_1', comment:'hello'}], 3);
    var feed_7 = new feed('one', 'path/to/image', 'this is sample content', ['person_2', 'person_2', 'person_1'], [{name:'person_1', comment:'hello'}], 3);
    var feed_8 = new feed('eight', 'path/to/image', 'this is sample content', ['person_2', 'person_2', 'person_1'], [{name:'person_1', comment:'hello'}], 3);
    var feed_9 = new feed('nine', 'path/to/image', 'this is sample content', ['person_1', 'person_2', 'person_2'], [{name:'person_2', comment:'hello'}], 3);
    var feed_10 = new feed('ten', 'path/to/image', 'this is sample content', ['person_3', 'person_3', 'person_2'], [{name:'person_3', comment:'hello'}], 3);
    var feeds = [feed_1, feed_2, feed_3, feed_4, feed_5, feed_6, feed_7, feed_8, feed_9, feed_10];
    var query = prompt('Input question number:');
    switch(parseInt(query)){
        case 1:
            var name = prompt('Input user name:');
            alert('Number of feeds by user-'+name+' are: '+ find_number_of_post(name, feeds));
            break;
        case 2:
            var number = prompt('Input post number:');
            alert('Number of likes on 5th post: '+number_of_likes(number, feeds));
            break;
        case 3:
            var number = prompt('Input post number:');
            print_users_like(number, feeds);
            break
        case 4:
            var number = prompt('Input post number:');
            print_first_user_like(number, feeds);
            break;
        case 5:
            var number = prompt('Input post number:');
            print_user_comment_like(number, feeds);
            break;
        case 6:
            print_most_comments(feeds);
            break;
        default:
            alert('Wrong Input');
    }
}
/* Solution 10 ends here */
/* Solution 11 */
class list{
    constructor(friends){
        this.friends = friends;
    }
    delete_fake(){
        for(var i=0; i<this.friends.length; i++){
            if(this.friends[i].split(' ')[0].toLowerCase() == 'fake')
                this.friends.splice(i, 1);
        }
        console.log(this.friends.length);
    }
    join_friends(names){
        for(var i = 0; i<names.length; i++)
            this.friends.push(names[i]);
    }
    print(){
        this.friends.sort();
        var names = '';
        for(var i=0; i<this.friends.length; i++)
            names += this.friends[i]+'\n';
        alert(names);
    }
    print_length(){
        this.friends.sort(function(a,b){
            return b.length - a.length;
        });
        var names = '';
        for(var i=0; i<this.friends.length; i++)
            names += this.friends[i]+'\n';
        alert(names);
    }
    initials(){
        var names='';
        for(var i = 0; i<this.friends.length; i++){
            var n = this.friends[i].split(" ");
            for(var j=0; j<n.length; j++)
                names += n[j][0];
            names += '\n'
        }
        alert(names);
    }
}
function solution_11(){
    var friend_1 = 'Fake Singh';
    var friend_2 = 'Chikka Singh';
    var friend_3 = 'Noony Singh';
    var friend_4 = 'Hello Singh';
    var friend_5 = 'One Singh';
    var friend_6 = 'Oneone Singh';
    var friend_7 = 'Abcd Singh';
    var friend_8 = 'World Singh';
    var friend_9 = 'B Singh';

    var friends = [friend_1, friend_2, friend_3, friend_4, friend_5, friend_6, friend_7, friend_8, friend_9];
    var my_friends = new list(friends);

    var query = prompt('Input question number:');
    switch(parseInt(query)){
        case 1:
            var old = my_friends.friends.length;
            my_friends.delete_fake();
            alert('Old Length: '+old+'\nNew Length: '+my_friends.friends.length);
            break;
        case 2:
            var old = my_friends.friends.length;
            var names = prompt('Input friends seperated by comma(,) :');
            names = names.split(',');
            my_friends.join_friends(names);
            alert('Old Length: '+old+'\nNew Length: '+my_friends.friends.length);
            break; 
        case 3:
            my_friends.print();
            break
        case 4:
            my_friends.print_length();
            break;
        case 5:
            my_friends.initials();
            break;
        case 6:
        
            break;
        default:
            alert('Wrong Input');
    }
}
/* Solution 11 ends here */