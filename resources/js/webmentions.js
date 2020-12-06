const dayjs = require("dayjs");

const wmContainer = document.querySelector("[data-webmentions]");

if (wmContainer) {
    const container = wmContainer.parentElement;

    fetch(`https://webmention.io/api/mentions.jf2?target=${wmContainer.dataset.webmentions}`)
        .then(response => {
            response.json().then(data => {
                if (data.children.length > 0) {
                    renderWebmentions(container, data.children);
                }
            });
    });
}

function renderWebmentions(container, webmentions) {
    container.classList.remove('hidden');

    webmentions.forEach(item => {
        wmContainer.append(buildItem(item));
    });
}

function buildItem(item) {
    const tmpl = document.importNode(document.getElementById('wm-template').content, true);
    tmpl.querySelector('[data-wm-author-img]').src = item.author.photo;
    tmpl.querySelector('[data-wm-author-img]').alt = item.author.name;
    tmpl.querySelector('[data-wm-author-name').innerHTML = item.author.name;

    tmpl.querySelector('[data-wm-meta-label]').href = item.url;
    tmpl.querySelector('[data-wm-meta-label]').innerHTML = (item['wm-property'] == 'like-of' ? 'liked' : 'retweeted');
    tmpl.querySelector('[data-wm-meta-date]').innerHTML = ' on ' + dayjs(item['wm-received']).format('MMMM DD, YYYY');

    return tmpl;
}
