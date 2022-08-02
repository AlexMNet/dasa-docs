"use strict";(self.webpackChunkdasa_docs=self.webpackChunkdasa_docs||[]).push([[335],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=o(t),m=i,c=h["".concat(d,".").concat(m)]||h[m]||p[m]||a;return t?r.createElement(c,l(l({ref:n},u),{},{components:t})):r.createElement(c,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=h;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<a;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:1},l="Singly Linked List",s={unversionedId:"data-structures/lists/singly-linked-list",id:"data-structures/lists/singly-linked-list",title:"Singly Linked List",description:"Time Complexity vs Arrays",source:"@site/docs/data-structures/lists/singly-linked-list.md",sourceDirName:"data-structures/lists",slug:"/data-structures/lists/singly-linked-list",permalink:"/data-structures/lists/singly-linked-list",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Linked Lists",permalink:"/category/linked-lists"},next:{title:"Algorithms",permalink:"/category/algorithms"}},d={},o=[{value:"Time Complexity vs Arrays",id:"time-complexity-vs-arrays",level:3}],u={toc:o};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"singly-linked-list"},"Singly Linked List"),(0,i.kt)("h3",{id:"time-complexity-vs-arrays"},"Time Complexity vs Arrays"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operation"),(0,i.kt)("th",{parentName:"tr",align:null},"Linked List"),(0,i.kt)("th",{parentName:"tr",align:null},"Arrays"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Push"),(0,i.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pop"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Shift"),(0,i.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unshift"),(0,i.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Insert"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delete"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lookup by Index"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lookup by Value"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"class Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor(value) {\n    const newNode = new Node(value);\n    this.head = newNode;\n    this.tail = newNode;\n    this.length = 1;\n  }\n\n  //Add node to end of list\n  push(value) {\n    const newNode = new Node(value);\n    if (!this.head) {\n      this.head = newNode;\n      this.tail = newNode;\n    } else {\n      this.tail.next = newNode;\n      this.tail = newNode;\n    }\n    this.length++;\n    return this;\n  }\n\n  //Remove node from end of list\n  pop() {\n    if (!this.head) return undefined;\n    let newTail = this.head;\n    let oldTail = this.head;\n    while (oldTail.next) {\n      newTail = oldTail;\n      oldTail = oldTail.next;\n    }\n    this.tail = newTail;\n    this.tail.next = null;\n    this.length--;\n    if (this.length === 0) {\n      this.head = null;\n      this.tail = null;\n    }\n    return oldTail;\n  }\n\n  //Add node to beginning of list\n  unshift(value) {\n    const newNode = new Node(value);\n    if (!this.head) {\n      this.head = newNode;\n      this.tail = newNode;\n    } else {\n      newNode.next = this.head;\n      this.head = newNode;\n    }\n    this.length++;\n    return this;\n  }\n\n  //Remove node from the beginning of the list\n  shift() {\n    if (!this.head) return undefined;\n    let oldHead = this.head;\n    this.head = this.head.next;\n    oldHead.next = null;\n    this.length--;\n    if (this.length === 0) {\n      this.tail = null;\n    }\n    return oldHead;\n  }\n\n  //Get a node at a specific index\n  get(index) {\n    if (index < 0 || index >= this.length) return undefined;\n    let temp = this.head;\n    for (let i = 0; i < this.length; i++) {\n      temp = temp.next;\n    }\n    return temp;\n  }\n\n  //Set (change) value of node at specific index\n  set(index, value) {\n    const node = this.get(index);\n    if (node) {\n      node.value = value;\n      return true;\n    }\n    return false;\n  }\n\n  //Insert a new node at a specific index\n  insert(index, value) {\n    if (index === 0) this.unshift(value);\n    if (index === this.length) this.push(value);\n    if (index < 0 || index > this.length) return false;\n\n    const newNode = new Node(value);\n    const temp = this.get(index - 1);\n    newNode.next = temp.next;\n    temp.next = newNode;\n    this.length++;\n    return true;\n  }\n\n  //Remove a node\n  remove(index) {\n    if (index === 0) this.shift();\n    if (index === this.length - 1) this.pop();\n    if (index < 0 || index > this.length) return undefined;\n\n    let prevNode = this.get(index - 1);\n    let deletedNode = prevNode.next;\n    prevNode.next = deletedNode.next;\n    deletedNode.next = null;\n    this.length--;\n    return deletedNode;\n  }\n\n  //Infamous Reverse a linked list\n  reverse() {\n    let temp = this.head;\n    this.head = this.tail;\n    this.tail = temp;\n\n    let prev = null;\n    let next = temp.next;\n\n    for (let i = 0; i < this.length; i++) {\n      next = temp.next;\n      temp.next = prev;\n      prev = temp;\n      temp = next;\n    }\n    return this;\n  }\n}\n\nconst list = new LinkedList(1);\n")))}p.isMDXComponent=!0}}]);