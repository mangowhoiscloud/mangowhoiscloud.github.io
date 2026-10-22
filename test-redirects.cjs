const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const cases = {
 '/geode/resaerch/jev-system1-offloading/report-ko.pdf#page=4': 'https://tech.mangowhois.ai/jev/system-1-offloading/ko.pdf#page=4',
 '/geode/research/jev-system1-offloading/report-en.pdf': 'https://tech.mangowhois.ai/jev/system-1-offloading/en.pdf',
 '/eco2/report.pdf': 'https://tech.mangowhois.ai/eco2/report/ko.pdf',
 '/eco2/report-en.pdf?download=1#page=3': 'https://tech.mangowhois.ai/eco2/report/en.pdf?download=1#page=3',
 '/geode/report.pdf': 'https://tech.mangowhois.ai/geode/report/ko.pdf',
 '/geode/report-en.pdf': 'https://tech.mangowhois.ai/geode/report/en.pdf',
 '/geode/research/jev-system1-offloading/?lang=ko#evidence': 'https://tech.mangowhois.ai/jev/offloading/?lang=ko#evidence',
 '/geode/research/geode/': 'https://tech.mangowhois.ai/geode/',
 '/geode/resaerch/jevdb/': 'https://tech.mangowhois.ai/jev/jevdb/',
 '/geode/research/': 'https://tech.mangowhois.ai/',
 '/geode/': 'https://mangowhois.ai/products/geode/',
 '/eco2/': 'https://mangowhois.ai/eco2/',
 '/': 'https://mangowhois.ai/',
 '/https://example.org/': 'https://mangowhois.ai/'
};
for (const file of ['index.html', '404.html']) {
 const html = fs.readFileSync(file, 'utf8');
 const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
 for (const [path, expected] of Object.entries(cases)) {
  let actual;
  vm.runInNewContext(script, { URL, location: { href: 'https://mangowhoiscloud.github.io' + path, replace: to => actual = to } });
  assert.equal(actual, expected, `${file}: ${path}`);
 }
}
console.log(`PASS: ${Object.keys(cases).length * 2} browser-navigation cases`);
