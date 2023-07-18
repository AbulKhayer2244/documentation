import{_ as s,c as n,o as a,a as t}from"./app.ef097145.js";const q='{"title":"Ref","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"withSchema","slug":"withschema"},{"level":3,"title":"alias","slug":"alias"}],"relativePath":"guide/ref.md"}',p={},e=t('<h1 id="ref" tabindex="-1">Ref <a class="header-anchor" href="#ref" aria-hidden="true">#</a></h1><p>Can be used to create references in a query, such as column- or tablenames. This is a good and shorter alternative to using <code>knex.raw(&#39;??&#39;, &#39;tableName.columName&#39;)</code> which essentially does the same thing.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p><code>knex.ref</code> can be used essentially anywhere in a build-chain. Here is an example:</p><div class="language-js"><pre><code><span class="token function">knex</span><span class="token punctuation">(</span>knex<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withSchema</span><span class="token punctuation">(</span><span class="token string">&#39;TenantId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span>knex<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">orWhere</span><span class="token punctuation">(</span>knex<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Id&#39;</span><span class="token punctuation">,</span> knex<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&#39;Username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div><div data-dialect="better-sqlite3"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>Username<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>TenantId<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Users<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="cockroachdb"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Name&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;Username&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;TenantId&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token keyword">where</span> <span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token string">&quot;Name&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="mssql"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token punctuation">[</span>Id<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Name<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token punctuation">[</span>Username<span class="token punctuation">]</span> <span class="token keyword">from</span> <span class="token punctuation">[</span>TenantId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>Users<span class="token punctuation">]</span> <span class="token keyword">where</span> <span class="token punctuation">[</span>Id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token punctuation">[</span>Name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="mysql"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>Username<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>TenantId<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Users<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="mysql2"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>Username<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>TenantId<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Users<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="oracledb"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Name&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;Username&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;TenantId&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token keyword">where</span> <span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token string">&quot;Name&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="pgnative"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Name&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;Username&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;TenantId&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token keyword">where</span> <span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token string">&quot;Name&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="postgres"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Name&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;Username&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;TenantId&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token keyword">where</span> <span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token string">&quot;Name&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="redshift"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Name&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;Username&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;TenantId&quot;</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token keyword">where</span> <span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token string">&quot;Name&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><div data-dialect="sqlite3"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>Username<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>TenantId<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Users<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">or</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;Admin&#39;</span>\n</code></pre></div></div><h3 id="withschema" tabindex="-1">withSchema <a class="header-anchor" href="#withschema" aria-hidden="true">#</a></h3><p>The Ref function supports schema using <code>.withSchema(string)</code>:</p><div class="language-js"><pre><code><span class="token function">knex</span><span class="token punctuation">(</span>knex<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withSchema</span><span class="token punctuation">(</span><span class="token string">&#39;TenantId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="alias" tabindex="-1">alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h3><p>Alias is supported using <code>.alias(string)</code></p><div class="language-js"><pre><code><span class="token function">knex</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>knex<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">&#39;UserId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div><div data-dialect="better-sqlite3"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>UserId<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span>\n</code></pre></div></div><div data-dialect="cockroachdb"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;UserId&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;users&quot;</span>\n</code></pre></div></div><div data-dialect="mssql"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token punctuation">[</span>Id<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token punctuation">[</span>UserId<span class="token punctuation">]</span> <span class="token keyword">from</span> <span class="token punctuation">[</span>users<span class="token punctuation">]</span>\n</code></pre></div></div><div data-dialect="mysql"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>UserId<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span>\n</code></pre></div></div><div data-dialect="mysql2"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>UserId<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span>\n</code></pre></div></div><div data-dialect="oracledb"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;UserId&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;users&quot;</span>\n</code></pre></div></div><div data-dialect="pgnative"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;UserId&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;users&quot;</span>\n</code></pre></div></div><div data-dialect="postgres"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;UserId&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;users&quot;</span>\n</code></pre></div></div><div data-dialect="redshift"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token string">&quot;Id&quot;</span> <span class="token keyword">as</span> <span class="token string">&quot;UserId&quot;</span> <span class="token keyword">from</span> <span class="token string">&quot;users&quot;</span>\n</code></pre></div></div><div data-dialect="sqlite3"><div class="language-sql"><pre><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>UserId<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span>\n</code></pre></div></div>',31),o=[e];function c(l,i,u,k,r,d){return a(),n("div",null,o)}var f=s(p,[["render",c]]);export{q as __pageData,f as default};
