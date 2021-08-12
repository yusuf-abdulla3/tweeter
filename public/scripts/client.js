/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  
  
  $(document).ready(function(event) {
     
      const renderTweets = function(tweets) {
        // loops through tweets
        $('#tweetContainer').empty();
        for (tweet of tweets) {
          $('#tweetContainer').append(createTweet(tweet));
        };
      
        };


    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
      
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
      
      $('#tweet-form').submit(function(event) {
        event.preventDefault();
        
        $.ajax({
          type: "POST",
          url: '/tweets',
          data: $(this).serialize(),
          success: function(data) {
            renderTweets(data)
          }
        });
        
      });

      function loadTweets() {
        $.ajax({
          type: "GET",
          url: '/tweets',
          success: function(data) {
            renderTweets(data)
          }
        });

      }

      loadTweets();

      });




