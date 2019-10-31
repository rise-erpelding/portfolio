// create a function
// jquery when you click on the parent (child you actually want clicked) new function
// add stuff to html


function displayAbout() {
    //event listener
    //hide .intro
    //display bio
    $('.js-navigation').on('click', '.js-about', function() {
        $('.intro').addClass('hidden');
        $('#main').html(`
            <section class="bio light-text section">
                <p>I have been fascinated by web design since I realized that I could use HTML to change the design of my blog in high school. In the years since, as I became a teacher and instructional designer, I found that in my projects there was usually something I was hoping to customize, something more I was wanting to build to make my idea work, and that coding was the best way to accomplish it. Now, my dream is to help other people make their ideas come to life.</p>
    
                 <p>If I won the lottery, I’d probably spend (some of) the money on learning something new. I love taking classes and learning new things, and some of my learning endeavors over the years (aside from learning to code) have included math, Spanish, Japanese, and sewing.</p>
                
                <p>My other interests include fitness and nutrition, cooking, and cookie-decorating. As an adult, I have called Hawaii, Oregon, Canada, Japan, Florida, and New Mexico home. I currently live in beautiful Destin, Florida, where I am a proud military spouse and mom of two.</p>
    
                <p>Using the links below, you can view my work on GitHub, find me on LinkedIn, or email me.</p>
            </section>`);
    });
    console.log('`displayAbout` ran');
}

function displayProjects() {
    $('.js-navigation').on('click', '.js-projects', function() {
        $('.intro').addClass('hidden');
        $('#main').html(`
            <section class="quiz-app project section">
                <h2 class="heading-text light-text">GRE Vocabulary Quiz</h2>
                <h3 class="light-text">Technologies used: HTML, CSS, JavaScript, jQuery</h3>
                <img class="quiz-app-screenshot" src="images/quiz-app.png" alt="quiz app screen shot">
                <section class="project-description light-text">
                    <p>This is a quiz app I built using JavaScript and jQuery. The app tests users’ knowledge of GRE vocabulary words via multiple-choice questions, giving examples of the words in a context similar to what a user might encounter in graduate-level studies.</p>
                </section>
                 <a href="https://github.com/rise-erpelding/jquery-quiz-app">View on GitHub</a> | <a href="https://rise-erpelding.github.io/jquery-quiz-app/">View live</a>
            </section>`);
    });
}

function displayHome() {
    $('.js-navigation').on('click', '.js-home', function() {
        $('.intro').removeClass('hidden');
    });
    console.log('`displayHome` ran');
}

function doStuff() {
    displayAbout();
    displayProjects();
    displayHome();
    console.log('`doStuff` ran');
}

$(doStuff);