const expect = require('chai').expect;
const processHtmlAttributes = require('../');

['*', 'htmlAttributes'].forEach(key => {
    it(`creates attributes object based on ${key}`, () => {
        const input = { [key]: { b: 2, ariaRole: 'link' } };
        const htmlAttributes = { b: 2, 'aria-role': 'link' };
        expect(processHtmlAttributes(input)).to.deep.equal(htmlAttributes);
    });
});

it('merges htmlAttributes with *', () => {
    const input = { '*': { ariaRole: 'link' }, htmlAttributes: { b: 2 } };
    const htmlAttributes = { b: 2, 'aria-role': 'link' };
    expect(processHtmlAttributes(input)).to.deep.equal(htmlAttributes);
});

it('uses htmlAttributes over * in case of conflict', () => {
    const input = { '*': { ariaRole: 'link' }, htmlAttributes: { ariaRole: 'button' } };
    const htmlAttributes = { 'aria-role': 'button' };
    expect(processHtmlAttributes(input)).to.deep.equal(htmlAttributes);
});
