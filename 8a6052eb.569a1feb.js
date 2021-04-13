(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(119)),o={id:"getting-started",title:"Getting Started"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"In order to run Cloud Carbon Footprint locally, there are a few things you must do to get set up first.",source:"@site/docs/GettingStarted.md",slug:"/getting-started",permalink:"/docs/getting-started",version:"current",sidebar:"tryNowSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Create an App",permalink:"/docs/create-app"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Guided Install",id:"guided-install",children:[]},{value:"Standard Install",id:"standard-install",children:[]},{value:"Optional Prerequisites",id:"optional-prerequisites",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to run Cloud Carbon Footprint locally, there are a few things you must do to get set up first."),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Git")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Node.js >= 12 (tip: use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," or ",Object(i.b)("a",{parentName:"p",href:"https://github.com/tj/n"},"n")," to manage multiple Node versions)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Yarn (latest)"))),Object(i.b)("h3",{id:"clone-the-repository"},"Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"git clone --branch latest https://github.com/cloud-carbon-footprint/cloud-carbon-footprint.git\ncd cloud-carbon-footprint\n")),Object(i.b)("h3",{id:"guided-install"},"Guided Install"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"yarn install && yarn guided-install\n")),Object(i.b)("p",null,"This will install dependencies for all packages, then guide you through setting up credentials and environment variables to analyze the footprint of your AWS, GCP, or Azure account. Then:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"yarn start\n")),Object(i.b)("p",null,"If you have any problems with the guided install, you can instead choose to do a standard install."),Object(i.b)("h3",{id:"standard-install"},"Standard Install"),Object(i.b)("p",null,"A standard install gives you more visibility and control around your particular setup."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"yarn install\n")),Object(i.b)("p",null,"You can now continue by running with ",Object(i.b)("a",{parentName:"p",href:"run-with-mocked-data"},"mocked data")," or ",Object(i.b)("a",{parentName:"p",href:"aws"},"manually configuring your cloud providers")),Object(i.b)("h3",{id:"optional-prerequisites"},"Optional Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," (to download the AWS CLI)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"AWS CLI ",Object(i.b)("inlineCode",{parentName:"p"},"brew install awscli")," (if you are authenticating with AWS - see below)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Talisman (if you want to commit code)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"  curl --silent https://raw.githubusercontent.com/thoughtworks/talisman/master/global_install_scripts/install.bash > /tmp/install_talisman.bash && /bin/bash /tmp/install_talisman.bash\n")))),Object(i.b)("p",null,"Note:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"During install, Talisman may fail to add the pre-commit hook to this repository because one already exists for Husky. This is fine because it can still execute in the existing husky pre-commit hook, once installed.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"During install, Talisman will also ask you for the directory of your git repositories. If you don't want to install Talisman in all your git repos, then cancel out at this step."))))}u.isMDXComponent=!0}}]);