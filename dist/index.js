const btnBanner = document.querySelector('.banner--btn');
const emailBanner = document.querySelector('.banner--email');
const invaildBanner = document.querySelector('.invalid__email--banner');
const btnAccess = document.querySelector('.access--btn');
const emailAccess = document.querySelector('.access--email');
const invaildAccess = document.querySelector('.invalid__email--access');
const regexPatten = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


btnBanner.addEventListener('click', e => {
    if (!emailBanner.value.match(regexPatten)) {
        invaildBanner.style.visibility = 'visible'
    } else {
        invaildBanner.style.visibility = 'hidden'
    }
});
btnAccess.addEventListener('click', e => {
    if (!emailAccess.value.match(regexPatten)) {
        invaildAccess.style.visibility = 'visible'
    } else {
        invaildAccess.style.visibility = 'hidden'
    }
});
