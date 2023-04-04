define([
    'mage/translate'
], function ($t) {
    return {
        getPagesHtml: function (item, components, html) {
            return html`<a class="algoliasearch-autocomplete-hit" href="${item.url}">
                <div class="info-without-thumb">
                    ${components.Highlight({hit: item, attribute: 'name'})}
                    <div class="details">
                        ${components.Highlight({hit: item, attribute: 'content'})}
                    </div>
                </div>
                <div class="algolia-clearfix"></div>
            </a>`;
        },

        getHeaderHtml: function (section) {
            // TODO: NIMA CHANGES - whatever tried - nothing could translate this - therefore for now we hardcode it!
            return 'Страници'; //$t(section.name);
        },

        getNoResultHtml: function () {
            return $t('No Results');
        }
    };
});
