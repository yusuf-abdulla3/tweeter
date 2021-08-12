/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  
const tweetObject =  {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
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
               ${timeç}
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

  $(document).ready(function(event) {
    createTweet(tweetObject);
  });


