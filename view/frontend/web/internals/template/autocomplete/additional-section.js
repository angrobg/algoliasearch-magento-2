define([
    'mage/translate'
], function ($t) {
    return {
        getAdditionalHtml: function (item, components, html) {
            return html`${components.Highlight({ hit: item, attribute: 'value' })}`;
        },

        getHeaderHtml: function (section) {
            // TODO: NIMA CHANGES - whatever tried - nothing could translate this - therefore for now we hardcode it!
            return $t(section.name);
        },

        getNoResultHtml: function () {
            return $t('No Results');
        }
    };
});
