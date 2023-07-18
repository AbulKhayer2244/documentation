import{_ as e,c as t,o,a as n}from"./app.ef097145.js";const b='{"title":"F.A.Q.","description":"","frontmatter":{},"headers":[{"level":2,"title":"How do I help contribute?","slug":"how-do-i-help-contribute"},{"level":2,"title":"How do I debug?","slug":"how-do-i-debug"},{"level":2,"title":"How do I run the test suite?","slug":"how-do-i-run-the-test-suite"},{"level":2,"title":"My tests are failing because slow DB connection and short test timeouts! How to extend test timeouts?","slug":"my-tests-are-failing-because-slow-db-connection-and-short-test-timeouts-how-to-extend-test-timeouts"},{"level":2,"title":"I found something broken with Amazon Redshift! Can you help?","slug":"i-found-something-broken-with-amazon-redshift-can-you-help"}],"relativePath":"faq/index.md"}',a={},s=n(`<h1 id="f-a-q" tabindex="-1">F.A.Q. <a class="header-anchor" href="#f-a-q" aria-hidden="true">#</a></h1><h2 id="how-do-i-help-contribute" tabindex="-1">How do I help contribute? <a class="header-anchor" href="#how-do-i-help-contribute" aria-hidden="true">#</a></h2><p>Glad you asked! Pull requests, or feature requests, though not always implemented, are a great way to help make Knex even better than it is now. If you&#39;re looking for something specific to help out with, there&#39;s a number of unit tests that aren&#39;t implemented yet, the library could never have too many of those. If you want to submit a fix or feature, take a look at the <a href="https://github.com/knex/knex/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing</a> readme in the Github and go ahead and open a ticket.</p><h2 id="how-do-i-debug" tabindex="-1">How do I debug? <a class="header-anchor" href="#how-do-i-debug" aria-hidden="true">#</a></h2><p>Knex is beginning to make use of the <a href="https://github.com/visionmedia/debug" target="_blank" rel="noopener noreferrer">debug</a> module internally, so you can set the <code>DEBUG</code> environment variable to <code>knex:*</code> to see all debugging, or select individual namespaces <code>DEBUG=knex:query,knex:tx</code> to constrain a bit.</p><p>If you pass <code>{debug: true}</code> as one of the options in your initialize settings, you can see all of the query calls being made. Sometimes you need to dive a bit further into the various calls and see what all is going on behind the scenes. I&#39;d recommend <a href="https://github.com/dannycoates/node-inspector" target="_blank" rel="noopener noreferrer">node-inspector</a>, which allows you to debug code with <code>debugger</code> statements like you would in the browser.</p><p>At the start of your application code will catch any errors not otherwise caught in the normal promise chain handlers, which is very helpful in debugging.</p><h2 id="how-do-i-run-the-test-suite" tabindex="-1">How do I run the test suite? <a class="header-anchor" href="#how-do-i-run-the-test-suite" aria-hidden="true">#</a></h2><p>The test suite looks for an environment variable called <code>KNEX_TEST</code> for the path to the database configuration. If you run the following command:</p><div class="language-bash"><pre><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">KNEX_TEST</span><span class="token operator">=</span><span class="token string">&#39;/path/to/your/knex_config.js&#39;</span>
$ <span class="token function">npm</span> <span class="token builtin class-name">test</span>
</code></pre></div><p>replacing with the path to your config file, and the config file is valid, the test suite should run properly.</p><h2 id="my-tests-are-failing-because-slow-db-connection-and-short-test-timeouts-how-to-extend-test-timeouts" tabindex="-1">My tests are failing because slow DB connection and short test timeouts! How to extend test timeouts? <a class="header-anchor" href="#my-tests-are-failing-because-slow-db-connection-and-short-test-timeouts-how-to-extend-test-timeouts" aria-hidden="true">#</a></h2><p>Sometimes, e.g. when running CI on travis, test suite&#39;s default timeout of 5 seconds might be too short. In such cases an alternative test timeout value in milliseconds can be specified using the <code>KNEX_TEST_TIMEOUT</code> environment variable.</p><div class="language-bash"><pre><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">KNEX_TEST_TIMEOUT</span><span class="token operator">=</span><span class="token number">30000</span>
$ <span class="token function">npm</span> <span class="token builtin class-name">test</span>
</code></pre></div><h2 id="i-found-something-broken-with-amazon-redshift-can-you-help" tabindex="-1">I found something broken with Amazon Redshift! Can you help? <a class="header-anchor" href="#i-found-something-broken-with-amazon-redshift-can-you-help" aria-hidden="true">#</a></h2><p>Because there is no testing platform available for Amazon Redshift, be aware that it is included as a dialect but is unsupported. With that said, please file an issue if something is found to be broken that is not noted in the documentation, and we will do our best.</p>`,16),i=[s];function r(d,h,l,u,c,p){return o(),t("div",null,i)}var f=e(a,[["render",r]]);export{b as __pageData,f as default};
