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
          $('#tweetContainer').prepend(createTweet(tweet));
        };
      
        };

        //This function helps avoid Cross-Site Scripting
        const escape = function (str) {
          let div = document.createElement("div");
          div.appendChild(document.createTextNode(str));
          return div.innerHTML;
        };


    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
      
      const createTweet = function(tweet) {
        // console.log(tweet);
        const time = timeago.format(1461116232227)
            const tweetContent = `
            <section class = "tweet-container">
                <article class = "tweet">
                  <header >
                    <img src=${escape(tweet.user.avatars)} alt="Avatar"> 
                    <h2 class = "name">${escape(tweet.user.name)}</h3>
                    <h2 class = "username">${escape(tweet.user.handle)}</h3>
                  </header>
                  <p>
                   ${escape(tweet.content.text)}
                  </p>
                 
                  <footer>
                      <date>
                       ${escape(time)}
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
              $('#tweetContainer').prepend(tweetContent);
          };

         
          
          //Declaring a counter for the input characters and counting the characters 
          //in the input event listener so that it can be referenced in the submit request

          let charCountVal = 0;
          
          $("#tweet-text").on("input", function(event) {
            charCountVal = $(this).val().length;
        });

        $('#tweet-form').submit(function(event) {
          event.preventDefault();
         
          //Form Validation

          if (charCountVal > 140) {
             //Removing error message as soon as the input is submitted
            $("div.error-message").remove();
            $(".error-message").removeClass("error-message");

            $('.new-tweet').prepend($(`<div class = error-message>Sorry, you've exceeded the character limit of 140 characters! :( </div>`)).slideDown(700);
          } else if (charCountVal === 0) {
             //Removing error message as soon as the input is submitted
            $("div.error-message").remove();
            $(".error-message").removeClass("error-message");

            $('.new-tweet').prepend($(`<div class = error-message>Sorry, you're tweet must contain at least 1 character! :( </div>`)).slideDown(700);
          } else {
            //Removing error message as soon as the input is submitted
            $("div.error-message").remove();
            $(".error-message").removeClass("error-message");
          $.ajax({
            type: "POST",
            url: '/tweets',
            data: $(this).serialize(),
            success: function(data) {
              loadTweets();
              history.go(0);
            }
          });
        }

          
          
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




