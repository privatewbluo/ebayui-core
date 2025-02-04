const assign = require('core-js-pure/features/object/assign');
const { getNItems, createRenderBody } = require('../../../../common/test-utils/shared');

exports.Basic_3Headings_3Panels_No_Index = {
    headings: getNItems(3, i => ({
        renderBody: createRenderBody(`Heading ${i}`)
    })),
    panels: getNItems(3, i => ({
        renderBody: createRenderBody(`Panel ${i}`)
    }))
};

exports.Basic_3Headings_3Panels_1Index = assign({}, exports.Basic_3Headings_3Panels_No_Index, {
    index: 1
});

exports.Basic_3Headings_3Panels_2Index = assign({}, exports.Basic_3Headings_3Panels_No_Index, {
    index: 2
});

exports.Fake_3Headings_No_Index = {
    fake: true,
    headings: getNItems(3, i => ({
        href: `#tab-${i}`,
        renderBody: createRenderBody(`Heading ${i}`)
    })),
    panels: [{
        renderBody: createRenderBody('Panel 0')
    }]
};

exports.Fake_3Headings_1Index = assign({}, exports.Fake_3Headings_No_Index, {
    index: 1
});
