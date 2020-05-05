//date
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    }
  
  if(h===0) {
    h=12;
  }
    document.getElementById('disp').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) {
    if (i<10) {i = "0" + i} // add zero in front of numbers < 10
    return i;
}

//quote array
var quotes = [
    "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\" <br> – Mahatma Gandhi",
    "\"Dude, suckin' at something is the first step at being sorta good at something.\" <br> - Jake <small><em>(Adventure Time)</em></small>",
    "\"That which does not kill us makes us stronger.\" <br> – Friedrich Nietzsche",
    "\"Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.\" <br> – Bernard M. Baruch",
    "\"We must not allow other people’s limited perceptions to define us.\" <br> – Virginia Satir",
    "\"This above all: to thine own self be true.\" <br> – William Shakespeare",
    "\"If you cannot do great things, do small things in a great way.\" <br> – Napoleon Hill",
    "\"It\'s Not whether you get knocked down, it\'s about whether you get up.\" <br> - Vince Lombardi",
     ];

//NewQuote function
//Calling Math.floor() with Math.random() passes as a parameter
function NewQuote () {
var randomNumber = Math.floor(Math.random() * (quotes.length)) ;
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
var share = quotes[randomNumber].split(' ').join('%20');
  share = share.split('<br>').join('');
  share = "https://twitter.com/intent/tweet?text=" + share.split('"').join('');
  $('.twitter-share-button').attr('href', share);
}
//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+d.getDate()+"/"+[d.getMonth()+1]+"/"+d.getFullYear();
}




