define([
    'mage/translate'
], function ($t) {
    return {
        getSuggestionsHtml: function (item, html) {
            return html`<a class="aa-ItemLink" href="/search?q=${item.query}">
                ${item.query}
            </a>`;
        },

        getPagesHeaderHtml: function (section) {
            // TODO: NIMA CHANGES - whatever tried - nothing could translate this - therefore for now we hardcode it!
            return 'Препоръки'; //$t(section.name);
        },

        getNoResultHtml: function () {
            return $t('No Results');
        }
    };
});
