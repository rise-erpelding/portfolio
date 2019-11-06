function hideOtherSections() {
    $('.projects').addClass('hidden');
    $('.bio').addClass('hidden');
}

function displayAbout() {
    $('.js-navigation').on('click', '.js-about', function() {
        $('.intro').addClass('hidden');
        $('.projects').addClass('hidden');
        $('.bio').removeClass('hidden');
        $('.im-rise').text('About');
    });
}

function displayProjects() {
    $('.js-navigation').on('click', '.js-projects', function() {
        $('.intro').addClass('hidden');
        $('.bio').addClass('hidden');
        $('.projects').removeClass('hidden');
        $('.im-rise').text('Projects');
    });
}

function displayHome() {
    $('.js-navigation').on('click', '.js-home', function() {
        $('.intro').removeClass('hidden');
        $('.bio').addClass('hidden');
        $('.projects').addClass('hidden');
        $('.im-rise').text('Hi! I\'m Risé.');
    });
}

function doStuff() {
    hideOtherSections();
    displayAbout();
    displayProjects();
    displayHome();
}

$(doStuff);