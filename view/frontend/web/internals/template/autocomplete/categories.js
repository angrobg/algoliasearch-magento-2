define([
    'mage/translate'
], function ($t) {
    return {
        getCategoriesHtml: function (item, components, html) {
            return html `<a class="algoliasearch-autocomplete-hit" href="${item.url}">
                ${components.Highlight({ hit: item, attribute: 'path' })} (${item.product_count})
            </a>`;
        },

        getHeaderHtml: function (section) {
            // TODO: NIMA CHANGES - whatever tried - nothing could translate this - therefore for now we hardcode it!
            return 'Категории'; // $t(section.name);
        },

        getNoResultHtml: function () {
            return $t('No Results');
        }
    };
});
