// Return true if the given element appears (even partially) in the window.
function isElementInViewport (el) {
    if (typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight
    );
}

function onAppearInViewport(el, callback) {
    var was_visible = false;
    return function () {
        var visible = isElementInViewport(el);
        if (visible && !was_visible) {
            was_visible = true;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

function moveBackToDefault(el) {
    el.addClass('move-back-to-default');
}

function addClassToElements (elements, _class) {
    elements.forEach(function (e) {
        e.addClass(_class);
    })
}

$(document).ready(function() {
    var homeTitle = $('#home_id').find('h1');
    var welcomeElement = $('#welcome_id');
    var kitchenElement = $('#kitchen_id');
    var ingredientsElement = $('#ingredients_id');
    var aboutEventElement = $('#about_events_id');
    var eventElement = $('#events_id');
    var upcomingEventsElement = $('#upcoming_event_id');
    var pastEventsElement = $('#past_event_id');
    var aboutContactElement = $('#about_contact_id');
    var contactElement = $('#contact_form_container_id');
    var bookingElement = $('#booking_inner_id');
    var footerElement = $('#footer_id');
    var copyrightElement = $('#copyright_id');

    addClassToElements([
        homeTitle,
        welcomeElement.find('h2'),
        welcomeElement.find('p'),
        ingredientsElement.find('h2'),
        ingredientsElement.find('p'),
        eventElement.find('h3').eq(4),
        pastEventsElement,
        footerElement.find('.footer-col').eq(0)
    ], 'move-to-left');
    addClassToElements([
        kitchenElement.find('h2'),
        kitchenElement.find('p'),
        aboutEventElement.find('h2'),
        aboutEventElement.find('p'),
        aboutContactElement.find('h2'),
        aboutContactElement.find('p'),
        contactElement,
        footerElement.find('.footer-col').eq(1)
    ], 'move-to-right');
    addClassToElements([
        eventElement.find('h3').eq(0),
        upcomingEventsElement,
        bookingElement,
        copyrightElement.find('ul')
    ], 'move-down');

    var homeAppearHandler = onAppearInViewport($('#home_id'), function () {
        console.log('Home appeared.');
        moveBackToDefault(homeTitle);
    });
    var welcomeAppearHandler = onAppearInViewport(welcomeElement, function () {
        console.log('Welcome appeared.');
        moveBackToDefault(welcomeElement.find('h2'));
        moveBackToDefault(welcomeElement.find('p'));
    });
    var kitchenAppearHandler = onAppearInViewport(kitchenElement, function () {
        console.log('Kitchen appeared.');
        moveBackToDefault(kitchenElement.find('h2'));
        moveBackToDefault(kitchenElement.find('p'));
    });
    var ingredientsAppearHandler = onAppearInViewport(ingredientsElement, function () {
        console.log('Ingredients appeared.');
        moveBackToDefault(ingredientsElement.find('h2'));
        moveBackToDefault(ingredientsElement.find('p'));
    });
    var aboutEventsAppearHandler = onAppearInViewport(aboutEventElement, function () {
        console.log('Events about appeared');
        moveBackToDefault(aboutEventElement.find('h2'));
        moveBackToDefault(aboutEventElement.find('p'));
    });
    var upcomingEventsAppearHandler = onAppearInViewport(upcomingEventsElement, function () {
        console.log('Upcoming Events appeared');
        moveBackToDefault(upcomingEventsElement);
        moveBackToDefault(eventElement.find('h3').eq(0))
    });
    var pastEventsAppearHandler = onAppearInViewport(pastEventsElement, function () {
        console.log('Past Events appeared');
        moveBackToDefault(pastEventsElement);
        moveBackToDefault(eventElement.find('h3').eq(4));
    });
    var aboutContactAppearHandler = onAppearInViewport(aboutContactElement, function () {
        console.log('Contact about appeared.');
        moveBackToDefault(aboutContactElement.find('h2'));
        moveBackToDefault(aboutContactElement.find('p'));
    });
    var contactAppearHandler = onAppearInViewport($('#contact_form_id'), function () {
        console.log('Contact appeared');
        moveBackToDefault(contactElement);
    });
    var bookingAppearHandler = onAppearInViewport($('#booking_id'), function () {
        console.log('Booking about appeared');
        moveBackToDefault(bookingElement);
    });
    var footerAppearHandler = onAppearInViewport(footerElement, function () {
        console.log('Footer appeared');
        moveBackToDefault(footerElement.find('.footer-col'));
    });
    var copyrightAppearHandler = onAppearInViewport(copyrightElement, function () {
        console.log('Copyright appeared');
        moveBackToDefault(copyrightElement.find('ul'));
    });

    $(window).on('DOMContentLoaded load scroll', homeAppearHandler);
    $(window).on('DOMContentLoaded load scroll', welcomeAppearHandler);
    $(window).on('DOMContentLoaded load scroll', kitchenAppearHandler);
    $(window).on('DOMContentLoaded load scroll', ingredientsAppearHandler);
    $(window).on('DOMContentLoaded load scroll', aboutEventsAppearHandler);
    $(window).on('DOMContentLoaded load scroll', upcomingEventsAppearHandler);
    $(window).on('DOMContentLoaded load scroll', pastEventsAppearHandler);
    $(window).on('DOMContentLoaded load scroll', aboutContactAppearHandler);
    $(window).on('DOMContentLoaded load scroll', contactAppearHandler);
    $(window).on('DOMContentLoaded load scroll', bookingAppearHandler);
    $(window).on('DOMContentLoaded load scroll', footerAppearHandler);
    $(window).on('DOMContentLoaded load scroll', copyrightAppearHandler);
});
