/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  // loops through tweets
  $('#tweetContainer').empty();
  tweets.forEach((tweet) => {
    const tweetAppend = createTweet(tweet);
    $('#tweetContainer').append(tweetAppend);
  })

  }

const createTweet = function(tweet) {
console.log(tweet);
const time = timeago.format(1461116232227)
    const tweetContent = `
    <section class = "tweet-container">
        <article class = "tweet">
          <header >
            <img src=${tweet.user.avatars} alt="Avatar"> 
            <h2 class = "name">${tweet.user.name}</h3>
            <h2 class = "username">${tweet.user.handle}</h3>
          </header>
          <p>
           ${tweet.content.text}
          </p>
         
          <footer>
              <date>
               ${time}
              </date>
            
              <div class = "like-retweet-flag-icons">
              <i class="fas fa-heart"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-flag"></i>
            </div>
          </footer>
        
        </article>
      </section>
      `
      $('#tweetContainer').append(tweetContent);
  };

    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

  
    $(document).ready(function(event) {
      renderTweets(data);
      $('#tweet-form').on('submit', function(event) {
        event.preventDefault();
        console.log("event has happened");
      })
  });



