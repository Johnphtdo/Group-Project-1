var backArr = ["url(./assets/images/food_back01.jpg)", "url(./assets/images/food_back04.jpg)", "url(./assets/images/food_back05.jpg)", "url(./assets/images/food_back06.jpg)", "url(./assets/images/food_back07.jpg)", "url(./assets/images/food_back08.jpg)", "url(./assets/images/food_back09.jpg)", "url(./assets/images/food_back10.jpg)", "url(./assets/images/food_back11.jpg)"];

var quoteArr = ["Food is an important part of a balanced diet!", "I cook with wine. Sometimes I even add it to the food.", "Cooking is like love. It should be entered into with abandon, or not at all.", "Life is a combination of magic and pasta.", "Promises and pie-crust are made to be broken", "Cheese - milk's leap towards immortality.", "Rice is great if you're hungry and want 2,000 of something.", "It would be a sad waste of opportunity to eat badly.", "First we eat. Then we do everything else.", "A balanced diet is a cookie in each hand.", "Ask not what you can do for your country. Ask what's for lunch.", "All you need is love. But a little chocolate now and then doesn't hurt.", "The only time to eat diet food is while you're waiting for the steak to cook.", "Wait. Why am I thinking about Krispy Kremes? We’re supposed to be exercising.", "I am not a glutton - I am an explorer of food." ];

var randomBackgroundNumber = Math.floor(Math.random() * backArr.length);
var randomQuoteNumber = Math.floor(Math.random() * quoteArr.length);

document.getElementById('background').style.backgroundImage = backArr[randomBackgroundNumber];
$("#quote").text('"' + quoteArr[randomQuoteNumber] + '"');


