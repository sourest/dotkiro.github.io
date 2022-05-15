import{_ as e,c as s,o as a,a as n}from"./app.b331f974.js";const k='{"title":"VitePress \u6559\u7A0B","description":"","frontmatter":{"layout":"post","title":"VitePress \u6559\u7A0B","date":"2022-05-14 20:00"},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F VitePress","slug":"\u4EC0\u4E48\u662F-vitepress"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u90E8\u7F72","slug":"\u90E8\u7F72"},{"level":3,"title":"FTP \u90E8\u7F72","slug":"ftp-\u90E8\u7F72"},{"level":3,"title":"GitHub Pages \u90E8\u7F72","slug":"github-pages-\u90E8\u7F72"},{"level":3,"title":"GitLab Pages \u90E8\u7F72","slug":"gitlab-pages-\u90E8\u7F72"},{"level":2,"title":"\u5BF9\u6BD4","slug":"\u5BF9\u6BD4"},{"level":3,"title":"\u4E0E VuePress v1 \u5BF9\u6BD4","slug":"\u4E0E-vuepress-v1-\u5BF9\u6BD4"},{"level":3,"title":"\u4E0E Gatsby \u5BF9\u6BD4","slug":"\u4E0E-gatsby-\u5BF9\u6BD4"}],"relativePath":"StaticSite/VitePress.md","lastUpdated":1652612751000}',t={},o=n(`<h1 id="vitepress-\u6559\u7A0B" tabindex="-1">VitePress \u6559\u7A0B <a class="header-anchor" href="#vitepress-\u6559\u7A0B" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F-vitepress" tabindex="-1">\u4EC0\u4E48\u662F VitePress <a class="header-anchor" href="#\u4EC0\u4E48\u662F-vitepress" aria-hidden="true">#</a></h2><p><a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VitePress</a> \u662F\u5C24\u5927\u57FA\u4E8E\u5176\u5F00\u53D1\u7684\u4E0B\u4E00\u4EE3\u524D\u7AEF\u5DE5\u7A0B\u6784\u5EFA\u5DE5\u5177 <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> \u5F00\u53D1\u7684\u7C7B\u6BD4 <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress</a> \u7684\u6587\u6863\u751F\u6210\u5668\u3002</p><p>\u540C\u65F6\u672C\u7AD9\u70B9\u57FA\u4E8E <code>VitePress</code> \u5EFA\u7ACB\uFF0C\u5728\u6B64\u4F5C\u9E23\u8C22\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u73AF\u5883\uFF1ANodeJS &gt; 12.0</p><p>\u7B2C\u4E00\u6B65\uFF0C\u5728\u4F60\u7684\u9879\u76EE\u4E2D\u5B89\u88C5 <code>VitePress</code></p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev vitepress
</code></pre></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u5728\u4F60\u7684\u9879\u76EE <code>package.json</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u4E9B\u811A\u6B65</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u81F3\u6B64\u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86 VitePress \u7684\u5B89\u88C5\uFF0C\u63A5\u4E0B\u6765\u4F60\u53EF\u4EE5\u5728\u4F60\u7684\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>docs</code> \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4F60\u7684 <code>markdown</code> \u6587\u6863\u4E86\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u4F60\u7684\u9879\u76EE\u6587\u6863\u76EE\u5F55\u5E94\u5F53\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-shell"><pre><code><span class="token builtin class-name">.</span>
\u251C\u2500 docs
\u2502  \u251C\u2500 .vitepress
\u2502  \u2502  \u2514\u2500 config.ts
\u2502  \u2514\u2500 index.md
\u2514\u2500 package.json
</code></pre></div><p>\u5176\u4E2D <code>docs/.vitepress/config.ts</code> \u662F VitePress \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u914D\u7F6E\u4F60\u7684\u9879\u76EE\u6587\u6863\u7684\u4E00\u4E9B\u57FA\u672C\u4FE1\u606F\uFF0C\u5E76\u5C06\u914D\u7F6E\u4FE1\u606F\u5BFC\u51FA</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;This is a VitePress project&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// And more...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5177\u4F53\u914D\u7F6E\u4FE1\u606F\u53EF\u4EE5\u53C2\u8003 <a href="https://vitepress.vuejs.org/config/basics.html" target="_blank" rel="noopener noreferrer">VitePress \u914D\u7F6E\u6587\u6863</a>\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF1A</p><div class="language-shell"><pre><code><span class="token function">npm</span> run docs:dev
</code></pre></div><p>VitePress \u5C06\u5728 <code>http://localhost:3000/</code> \u76D1\u542C\u4F60\u7684\u9879\u76EE\u6587\u6863\u76EE\u5F55\uFF0C\u4F60\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u3002</p><p>\u751F\u6210\u6587\u6863\uFF1A</p><div class="language-shell"><pre><code><span class="token function">npm</span> run docs:build
</code></pre></div><p>VitePress \u5C06\u751F\u6210\u4F60\u7684\u9879\u76EE\u6587\u6863\uFF0C\u4F60\u53EF\u4EE5\u5728 <code>docs/.vitepress/dist</code> \u4E2D\u67E5\u770B\u4F60\u7684\u9759\u6001\u7AD9\u70B9\u6587\u4EF6\u3002</p><p>\u542F\u52A8\u9759\u6001\u670D\u52A1\u5668\uFF1A</p><div class="language-shell"><pre><code><span class="token function">npm</span> run docs:serve
</code></pre></div><p>VitePress \u5C06\u5728 <code>http://localhost:5000/</code> \u542F\u52A8\u4F60\u7684\u6587\u9759\u6001\u7AD9\u70B9\u670D\u52A1\u5668\u3002</p><h2 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="ftp-\u90E8\u7F72" tabindex="-1">FTP \u90E8\u7F72 <a class="header-anchor" href="#ftp-\u90E8\u7F72" aria-hidden="true">#</a></h3><p>\u60A8\u53EF\u4EE5\u8FD0\u884C <code>npm run docs:build</code> \u547D\u4EE4\u6765\u6784\u5EFA\u6587\u6863\u3002</p><div class="language-shell"><pre><code><span class="token function">npm</span> run docs:build
</code></pre></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6784\u5EFA\u8F93\u51FA\u5C06\u653E\u7F6E\u5728 <code>.vitepress/dist</code>\u3002\u60A8\u53EF\u4EE5\u5C06\u6B64\u6587\u4EF6\u5939\u90E8\u7F72 dist \u5230\u60A8\u559C\u6B22\u7684\u4EFB\u4F55\u5E73\u53F0\uFF0C\u5982\u679C\u4F60\u4F7F\u7528 FTP\uFF0C\u90A3\u4E48\u6B64\u65F6\u53EF\u4EE5\u5C06\u5176\u6253\u5305\u4E0A\u4F20\u5230\u4F60\u7684\u670D\u52A1\u5668\u3002</p><h3 id="github-pages-\u90E8\u7F72" tabindex="-1">GitHub Pages \u90E8\u7F72 <a class="header-anchor" href="#github-pages-\u90E8\u7F72" aria-hidden="true">#</a></h3><ol><li><p>\u5728 <code>docs/.vitepress/config.js</code> \u4E2D\u8BBE\u7F6E\u6B63\u786E\u7684 <code>base</code>\u3002</p><p>\u5982\u679C\u60A8\u8981\u90E8\u7F72\u5230 <code>https://&lt;USERNAME&gt;.github.io/</code>\uFF0C\u5219\u53EF\u4EE5\u7701\u7565\u8BBE\u7F6E <code>base</code>\uFF0C\u56E0\u4E3A\u5B83\u9ED8\u8BA4\u4E3A <code>&#39;/&#39;</code>\u3002</p><p>\u5982\u679C\u60A8\u8981\u90E8\u7F72\u5230 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPOSITORY&gt;/</code>\uFF0C\u4F8B\u5982\u60A8\u7684\u5B58\u50A8\u5E93\u4F4D\u4E8E <code>https://github.com/&lt;USERNAME&gt;/&lt;REPOSITORY&gt;</code>\uFF0C\u5219\u8BBE\u7F6E <code>base</code> \u4E3A <code>&#39;/&lt;REPOSITORY&gt;/&#39;</code>\u3002</p></li><li><p>\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>.travis.yml</code> \u7684 <a href="https://www.travis-ci.com/" target="_blank" rel="noopener noreferrer">Travis CI</a> \u914D\u7F6E\u6587\u4EF6\u3002</p></li><li><p>\u5728\u672C\u5730\u8FD0\u884C <code>npm install</code> \u5E76\u63D0\u4EA4\u751F\u6210\u7684 <code>package-lock.json</code> \u9501\u6587\u4EF6\u3002</p></li><li><p>\u914D\u7F6E <code>.travis.yml</code>\uFF1A</p></li></ol><div class="language-shell"><pre><code>language: node_js
node_js:
  - lts/*
install:
  - <span class="token function">npm</span> ci
script:
  - <span class="token function">npm</span> run docs:build
deploy:
  provider: pages
  skip_cleanup: <span class="token boolean">true</span>
  local_dir: docs/.vitepress/dist
  github_token: <span class="token variable">$GITHUB_TOKEN</span>
  keep_history: <span class="token boolean">true</span>
  on:
    branch: main
</code></pre></div><h3 id="gitlab-pages-\u90E8\u7F72" tabindex="-1">GitLab Pages \u90E8\u7F72 <a class="header-anchor" href="#gitlab-pages-\u90E8\u7F72" aria-hidden="true">#</a></h3><ol><li><p>\u5728 <code>docs/.vitepress/config.js</code> \u4E2D\u8BBE\u7F6E\u6B63\u786E\u7684 <code>base</code>\u3002</p><p>\u5982\u679C\u60A8\u8981\u90E8\u7F72\u5230 <code>https://&lt;USERNAME&gt;.gitlab.io/</code>\uFF0C\u5219\u53EF\u4EE5\u7701\u7565\u8BBE\u7F6E <code>base</code>\uFF0C\u56E0\u4E3A\u5B83\u9ED8\u8BA4\u4E3A <code>&#39;/&#39;</code>\u3002</p><p>\u5982\u679C\u60A8\u8981\u90E8\u7F72\u5230 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPOSITORY&gt;/</code>\uFF0C\u4F8B\u5982\u60A8\u7684\u5B58\u50A8\u5E93\u4F4D\u4E8E <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPOSITORY&gt;</code>\uFF0C\u5219\u8BBE\u7F6E <code>base</code> \u4E3A <code>&#39;/&lt;REPOSITORY&gt;/&#39;</code>\u3002</p></li><li><p>\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>.gitlab-ci.yml</code> \u7684 <code>GitLab CI</code> \u914D\u7F6E\u6587\u4EF6\u3002</p></li><li><p>\u5728\u672C\u5730\u8FD0\u884C <code>npm install</code> \u5E76\u63D0\u4EA4\u751F\u6210\u7684 <code>package-lock.json</code> \u9501\u6587\u4EF6\u3002</p></li><li><p>\u914D\u7F6E <code>.gitlab-ci.yml</code>\uFF1A</p></li></ol><div class="language-yaml"><pre><code><span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>16.5.0
<span class="token key atrule">pages</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node_modules/
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm ci
    <span class="token punctuation">-</span> npm run docs<span class="token punctuation">:</span>build
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> docs/.vitepress/dist
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
</code></pre></div><h2 id="\u5BF9\u6BD4" tabindex="-1">\u5BF9\u6BD4 <a class="header-anchor" href="#\u5BF9\u6BD4" aria-hidden="true">#</a></h2><h3 id="\u4E0E-vuepress-v1-\u5BF9\u6BD4" tabindex="-1">\u4E0E <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress</a> v1 \u5BF9\u6BD4 <a class="header-anchor" href="#\u4E0E-vuepress-v1-\u5BF9\u6BD4" aria-hidden="true">#</a></h3><ol><li>\u4F7F\u7528 Vue 3</li><li>\u4F7F\u7528 Vite</li><li>\u4E0D\u4F7F\u7528 <code>vue-router</code>\uFF0C\u4F7F\u7528\u7B80\u5355\u7684\u81EA\u5B9A\u4E49\u8DEF\u7531</li><li>\u4ECE\u5B9E\u7528\u4E3B\u4E49\u51FA\u53D1\uFF0C\u66F4\u52A0\u7B80\u6D01</li><li>\u8FD8\u65E0\u7A33\u5B9A\u7248</li></ol><h3 id="\u4E0E-gatsby-\u5BF9\u6BD4" tabindex="-1">\u4E0E <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> \u5BF9\u6BD4 <a class="header-anchor" href="#\u4E0E-gatsby-\u5BF9\u6BD4" aria-hidden="true">#</a></h3><ol><li>\u5B66\u4E60\u6210\u672C\u4F4E</li><li>\u8BBE\u8BA1\u66F4\u52A0\u7B80\u6D01</li><li>\u4F7F\u7528 Vue 3</li><li>\u4F7F\u7528 Vite</li><li>\u8FD8\u65E0\u7A33\u5B9A\u7248</li><li>\u751F\u6001\u4E0D\u5982 Gatsby</li></ol>`,43),p=[o];function c(l,i,r,d,u,h){return a(),s("div",null,p)}var v=e(t,[["render",c]]);export{k as __pageData,v as default};
