define([
    'mage/translate'
], function ($t) {
    return {
        getAdditionalHtml: function (item, components, html) {
            return html`${components.Highlight({ hit: item, attribute: 'value' })}`;
        },

        getHeaderHtml: function (section) {
            return section.name;
        },

        getNoResultHtml: function () {
            return $t('No Results');
        }
    };
});
