$(document).ready(function(event) {
  
  //This function adds the new tweet that was created by the user to the top of the tweets
  const renderTweets = function(tweets) {
    $("#tweetContainer").empty();
    for (const tweet of tweets) {
      $("#tweetContainer").prepend(createTweet(tweet));
    }
  };

  //This function helps avoid Cross-Site Scripting
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //This function creates tweets based on the the HTML below. The variables below are inputed with data depending on the users information,
  // the tweet, and the time the tweet was posted.
  // The escape function defined above is being used to avoid Cross-Site-Scripting
  const createTweet = function(tweet) {
    const time = timeago.format(tweet.created_at);
    const tweetContent = `
            <section class = "tweet-container">
                <article class = "tweet">
                  <header>
                  <span>
                    <img src=${escape(tweet.user.avatars)} alt="Avatar"> 
                    <h2 class = "name">${escape(tweet.user.name)}</h3>
                    </span>
                    <h2 class = "username">${escape(tweet.user.handle)}</h3>
                  </header>
                  <div class = "tweet-body">
                  <p>
                   ${escape(tweet.content.text)}
                  </p>
                  </div>
                 
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
              `;
    $("#tweetContainer").prepend(tweetContent);
  };

  //Declaring a counter for the input characters and counting the characters
  //in the input event listener so that it can be referenced in the submit request

  let charCountVal = 0;

  $("#tweet-text").on("input", function(event) {
    charCountVal = $(this).val().length;
  });

  $("#tweet-form").submit(function(event) {
    event.preventDefault();

    //Form Validation

    // The character limit is 140 characters, so if the user inputs more than 140 characters, an error message appears on the screen
    // and if the user does not input anything, then another error message relevant to that also appears.  

    if (charCountVal > 140) {
      
      //Removing error message as soon as the input is submitted
      $("div.error-message").remove();
      $(".error-message").removeClass("error-message");

      $(".new-tweet")
        .prepend(
          $(
            `<div class = error-message>Sorry, you've exceeded the character limit of 140 characters! :( </div>`
          )
        )
        .slideDown(700);
    } else if (charCountVal === 0) {
      //Removing error message as soon as the input is submitted
      $("div.error-message").remove();
      $(".error-message").removeClass("error-message");

      $(".new-tweet")
        .prepend(
          $(
            `<div class = error-message>Sorry, you're tweet must contain at least 1 character! :( </div>`
          )
        )
        .slideDown(700);
    } else {
      
      //Removing error message as soon as the input is submitted
      $("div.error-message").remove();
      $(".error-message").removeClass("error-message");
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(this).serialize(),
        success: function() {
          
          //The load the new tweet on the page if the POST request to /tweets is successful
          loadTweets();
          history.go(0); //This refreshes the page instantly without the user 
          //having to refresh the page. It's placed with in the POST request 
        },
      });
    }
  });

  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets",
      success: function(data) {
        renderTweets(data);
      },
    });
  }
  loadTweets();
});
