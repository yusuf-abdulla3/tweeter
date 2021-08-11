/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(event) {
  const createTweet = function() {
    const tweet = `
    <section class = "tweet-container">
        <article class = "tweet">
          <header >
            <img src="/images/default-profile-image.png" alt="Default Avatar"> 
            <h2 class = "name">Newton</h3>
            <h2 class = "username">@Sir_Isaac</h3>
          </header>
          <p>
            I'm baby skateboard dreamcatcher pickled raw denim, slow-carb health goth activated charcoal shoreditch meh portland leggings chicharrones etsy tumeric taiyaki. Pug kale chips banjo, skateboard disrupt tofu kitsch neutra. Gochujang tumblr succulents, wolf chicharrones poutine post-ironic artisan. Fanny pack craft beer af yuccie. Small batch yr cornhole VHS etsy offal flexitarian hashtag umami paleo PBR&B air plant bicycle rights copper mug.
          </p>
         
          <footer>
              <date>
                10 days ago
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
      $('#tweet').append(tweet);
  }





});