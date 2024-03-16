import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.C6W-8D0E.js";const c=JSON.parse('{"title":"AI 菜单配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ai/menu.md","filePath":"zh/ai/menu.md","lastUpdated":1710603662000}'),n={name:"zh/ai/menu.md"},l=t(`<h1 id="ai-菜单配置" tabindex="-1">AI 菜单配置 <a class="header-anchor" href="#ai-菜单配置" aria-label="Permalink to &quot;AI 菜单配置&quot;">​</a></h1><p>AI 菜单配置，用于在编辑器顶部工具类，点击 AI 下拉的菜单内容。</p><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AiEditor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    element: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#aiEditor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ai:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        models:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            spark:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                appId:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;****&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                apiKey:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;****&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                apiSecret:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;****&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        menus:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path fill=&quot;none&quot; d=&quot;M0 0h24v24H0z&quot;&gt;&lt;/path&gt;&lt;path d=&quot;M4 18.9997H20V13.9997H22V19.9997C22 20.552 21.5523 20.9997 21 20.9997H3C2.44772 20.9997 2 20.552 2 19.9997V13.9997H4V18.9997ZM16.1716 6.9997L12.2218 3.04996L13.636 1.63574L20 7.9997L13.636 14.3637L12.2218 12.9495L16.1716 8.9997H5V6.9997H16.1716Z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AI 续写&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                prompt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请帮我继续扩展一些这段话的内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;focusBefore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                model: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path fill=&quot;none&quot; d=&quot;M0 0h24v24H0z&quot;&gt;&lt;/path&gt;&lt;path d=&quot;M15 5.25C16.7949 5.25 18.25 3.79493 18.25 2H19.75C19.75 3.79493 21.2051 5.25 23 5.25V6.75C21.2051 6.75 19.75 8.20507 19.75 10H18.25C18.25 8.20507 16.7949 6.75 15 6.75V5.25ZM4 7C4 5.89543 4.89543 5 6 5H13V3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V12H20V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AI 优化&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                prompt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请帮我优化一下这段文字的内容，并返回结果&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;selected&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                model: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;spark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><ul><li><strong>icon</strong>：用于菜单显示的 icon，暂时只支持 svg 配置，svg icon 建议使用 <a href="https://remixicon.com" target="_blank" rel="noreferrer">https://remixicon.com</a> 提供的 icon，以保证和 AiEditor 的 icon 风格保持统一。</li><li><strong>name</strong>：AI 菜单的名称</li><li><strong>prompt</strong>：AI 提示语</li><li><strong>text</strong>：文字内容，支持 <code>&quot;focusBefore&quot;</code> 和 <code>&quot;selected&quot;</code> 可选；<code>&quot;focusBefore&quot;</code> 表示获取当前焦点前的文字内容，<code>&quot;selected&quot;</code> 表示获取当前选中的文本内容。</li><li><strong>model</strong>：使用的 AI 大模型，目前暂时只支持 xinghuo (星火大模型)，来未来会支持文心一言、ChatGPT 等多模型共存。</li></ul>`,5),p=[l];function h(e,E,k,o,r,d){return a(),i("div",null,p)}const u=s(n,[["render",h]]);export{c as __pageData,u as default};