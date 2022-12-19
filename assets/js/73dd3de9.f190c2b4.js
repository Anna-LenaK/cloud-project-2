"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[438],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,g=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={id:"running-the-cli",title:"Running the CLI",slug:"/running-the-cli",sidebar_position:6},a=void 0,u={unversionedId:"GettingStarted/running-the-cli",id:"GettingStarted/running-the-cli",title:"Running the CLI",description:"We believe that getting your cloud emissions data should be easy. If you are looking to quickly get an output of data, the CLI is a great option. It allows you to specify exactly what data you\u2019re looking for, including the date range, regions, groupings and output type.",source:"@site/docs/GettingStarted/RunningTheCli.md",sourceDirName:"GettingStarted",slug:"/running-the-cli",permalink:"/docs/running-the-cli",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"running-the-cli",title:"Running the CLI",slug:"/running-the-cli",sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Run with Docker",permalink:"/docs/run-with-docker"},next:{title:"Creating a Lookup Table",permalink:"/docs/creating-a-lookup-table"}},l={},c=[{value:"Local",id:"local",level:4},{value:"CLI Options",id:"cli-options",level:4}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We believe that getting your cloud emissions data should be easy. If you are looking to quickly get an output of data, the CLI is a great option. It allows you to specify exactly what data you\u2019re looking for, including the date range, regions, groupings and output type."),(0,o.kt)("h4",{id:"local"},"Local"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn start-cli <options>\n")),(0,o.kt)("h4",{id:"cli-options"},"CLI Options"),(0,o.kt)("p",null,"You can run the tool interactively with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," flag; CLI will ask for the options/parameters"),(0,o.kt)("p",null,"Or you can choose to pass the parameters in a single line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--startDate YYYY-MM-DD \\\n--endDate YYYY-MM-DD \\\n--region [us-east-1 | us-east-2] \\\n--groupBy [day | dayAndService | service] \\\n--format [table | csv]\n")))}s.isMDXComponent=!0}}]);