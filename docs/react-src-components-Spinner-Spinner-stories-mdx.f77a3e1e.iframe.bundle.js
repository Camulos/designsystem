"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[559],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/react/src/components/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Spinner_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Spinner/Spinner.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Spinner_module.Z,options);const Spinner_Spinner_module=Spinner_module.Z&&Spinner_module.Z.locals?Spinner_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const sizeMap={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},variantMap={default:{foreground:Spinner_Spinner_module.defaultForeground,background:Spinner_Spinner_module.defaultBackground},interaction:{foreground:Spinner_Spinner_module.interactionForeground,background:Spinner_Spinner_module.interactionBackground},inverted:{foreground:Spinner_Spinner_module.invertedForeground,background:Spinner_Spinner_module.invertedBackground}},Spinner=({title,size="medium",variant="default",className="",...rest})=>(0,jsx_runtime.jsxs)("svg",{className:`${Spinner_Spinner_module.spinner} ${className}`,style:{width:sizeMap[size],height:sizeMap[size]},viewBox:"0 0 50 50",...rest,children:[(0,jsx_runtime.jsx)("title",{children:title}),(0,jsx_runtime.jsx)("circle",{className:variantMap[variant].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),(0,jsx_runtime.jsx)("circle",{className:`${Spinner_Spinner_module.spinnerCircle} ${variantMap[variant].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})]});Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Spinner component used for indicating busy or indeterminate loading",displayName:"Spinner",props:{title:{defaultValue:null,description:"Spinner title",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Spinner size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xSmall"'},{value:'"1xLarge"'},{value:'"2xLarge"'},{value:'"3xLarge"'}]}},variant:{defaultValue:{value:"default"},description:"Spinner appearance",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inverted"'},{value:'"default"'},{value:'"interaction"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"packages/react/src/components/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/src/components/Spinner/Spinner.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultArgs:()=>defaultArgs,defaultSpinner:()=>defaultSpinner,defaultSpinner1XLarge:()=>defaultSpinner1XLarge,defaultSpinner2XLarge:()=>defaultSpinner2XLarge,defaultSpinner3XLarge:()=>defaultSpinner3XLarge,defaultSpinnerLarge:()=>defaultSpinnerLarge,defaultSpinnerMedium:()=>defaultSpinnerMedium,defaultSpinnerSmall:()=>defaultSpinnerSmall,interactionSpinner1XLarge:()=>interactionSpinner1XLarge,interactionSpinner2XLarge:()=>interactionSpinner2XLarge,interactionSpinner3XLarge:()=>interactionSpinner3XLarge,interactionSpinnerLarge:()=>interactionSpinnerLarge,interactionSpinnerMedium:()=>interactionSpinnerMedium,interactionSpinnerSmall:()=>interactionSpinnerSmall,interactionSpinnerXSmall:()=>interactionSpinnerXSmall,invertedSpinner1XLarge:()=>invertedSpinner1XLarge,invertedSpinner2XLarge:()=>invertedSpinner2XLarge,invertedSpinner3XLarge:()=>invertedSpinner3XLarge,invertedSpinnerLarge:()=>invertedSpinnerLarge,invertedSpinnerMedium:()=>invertedSpinnerMedium,invertedSpinnerSmall:()=>invertedSpinnerSmall,invertedSpinnerXSmall:()=>invertedSpinnerXSmall});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Spinner__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/react/src/components/Spinner/Spinner.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs-components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultArgs={screenReaderLabel:"Loading",size:"3xLarge",variant:"default"},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_4__.$,{label:args.screenReaderLabel,variant:args.variant,size:args.size});const defaultSpinner=Template.bind({});defaultSpinner.storyName="Default spinner",defaultSpinner.args={size:"xSmall",variant:"default"},defaultSpinner.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const defaultSpinnerSmall=Template.bind({});defaultSpinnerSmall.storyName="Default spinner small",defaultSpinnerSmall.args={size:"small",variant:"default"},defaultSpinnerSmall.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const defaultSpinnerMedium=Template.bind({});defaultSpinnerMedium.storyName="Default spinner medium",defaultSpinnerMedium.args={size:"medium",variant:"default"},defaultSpinnerMedium.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const defaultSpinnerLarge=Template.bind({});defaultSpinnerLarge.storyName="Default spinner large",defaultSpinnerLarge.args={size:"large",variant:"default"},defaultSpinnerLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const defaultSpinner1XLarge=Template.bind({});defaultSpinner1XLarge.storyName="Default spinner 1xLarge",defaultSpinner1XLarge.args={size:"1xLarge",variant:"default"},defaultSpinner1XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const defaultSpinner2XLarge=Template.bind({});defaultSpinner2XLarge.storyName="Default spinner 2xLarge",defaultSpinner2XLarge.args={size:"2xLarge",variant:"default"},defaultSpinner2XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const defaultSpinner3XLarge=Template.bind({});defaultSpinner3XLarge.storyName="Default spinner 3xLarge",defaultSpinner3XLarge.args={size:"3xLarge",variant:"default"},defaultSpinner3XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const interactionSpinnerXSmall=Template.bind({});interactionSpinnerXSmall.storyName="Interaction spinner xSmall",interactionSpinnerXSmall.args={size:"xSmall",variant:"interaction"},interactionSpinnerXSmall.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const interactionSpinnerSmall=Template.bind({});interactionSpinnerSmall.storyName="Interaction spinner small",interactionSpinnerSmall.args={size:"small",variant:"interaction"},interactionSpinnerSmall.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const interactionSpinnerMedium=Template.bind({});interactionSpinnerMedium.storyName="Interaction spinner medium",interactionSpinnerMedium.args={size:"medium",variant:"interaction"},interactionSpinnerMedium.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const interactionSpinnerLarge=Template.bind({});interactionSpinnerLarge.storyName="Interaction spinner large",interactionSpinnerLarge.args={size:"large",variant:"interaction"},interactionSpinnerLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const interactionSpinner1XLarge=Template.bind({});interactionSpinner1XLarge.storyName="Interaction spinner 1xLarge",interactionSpinner1XLarge.args={size:"1xLarge",variant:"interaction"},interactionSpinner1XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const interactionSpinner2XLarge=Template.bind({});interactionSpinner2XLarge.storyName="Interaction spinner 2xLarge",interactionSpinner2XLarge.args={size:"2xLarge",variant:"interaction"},interactionSpinner2XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const interactionSpinner3XLarge=Template.bind({});interactionSpinner3XLarge.storyName="Interaction spinner 3xLarge",interactionSpinner3XLarge.args={size:"3xLarge",variant:"interaction"},interactionSpinner3XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const invertedSpinnerXSmall=Template.bind({});invertedSpinnerXSmall.storyName="Inverted spinner xSmall",invertedSpinnerXSmall.args={size:"xSmall",variant:"inverted"},invertedSpinnerXSmall.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const invertedSpinnerSmall=Template.bind({});invertedSpinnerSmall.storyName="Inverted spinner small",invertedSpinnerSmall.args={size:"small",variant:"inverted"},invertedSpinnerSmall.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const invertedSpinnerMedium=Template.bind({});invertedSpinnerMedium.storyName="Inverted spinner medium",invertedSpinnerMedium.args={size:"medium",variant:"inverted"},invertedSpinnerMedium.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const invertedSpinnerLarge=Template.bind({});invertedSpinnerLarge.storyName="Inverted spinner large",invertedSpinnerLarge.args={size:"large",variant:"inverted"},invertedSpinnerLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const invertedSpinner1XLarge=Template.bind({});invertedSpinner1XLarge.storyName="Inverted spinner 1xLarge",invertedSpinner1XLarge.args={size:"1xLarge",variant:"inverted"},invertedSpinner1XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const invertedSpinner2XLarge=Template.bind({});invertedSpinner2XLarge.storyName="Inverted spinner 2xLarge",invertedSpinner2XLarge.args={size:"2xLarge",variant:"inverted"},invertedSpinner2XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const invertedSpinner3XLarge=Template.bind({});invertedSpinner3XLarge.storyName="Inverted spinner 3xLarge",invertedSpinner3XLarge.args={size:"3xLarge",variant:"inverted"},invertedSpinner3XLarge.parameters={storySource:{source:"args => <Spinner label={args.screenReaderLabel} variant={args.variant} size={args.size} />"}};const componentMeta={title:"Kjernekomponenter/Spinner",parameters:{status:{type:"beta",url:"http://www.url.com/status"}},component:_Spinner__WEBPACK_IMPORTED_MODULE_4__.$,argTypes:{size:{control:{type:"select",options:["xSmall","small","medium","large","1xLarge","2xLarge","3xLarge"]}},variant:{control:{type:"select",options:["default","interaction","inverted"]}},screenReaderLabel:{type:"string"}},tags:["stories-mdx"],includeStories:["defaultSpinner","defaultSpinnerSmall","defaultSpinnerMedium","defaultSpinnerLarge","defaultSpinner1XLarge","defaultSpinner2XLarge","defaultSpinner3XLarge","interactionSpinnerXSmall","interactionSpinnerSmall","interactionSpinnerMedium","interactionSpinnerLarge","interactionSpinner1XLarge","interactionSpinner2XLarge","interactionSpinner3XLarge","invertedSpinnerXSmall","invertedSpinnerSmall","invertedSpinnerMedium","invertedSpinnerLarge","invertedSpinner1XLarge","invertedSpinner2XLarge","invertedSpinner3XLarge"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Kjernekomponenter/Spinner",component:_Spinner__WEBPACK_IMPORTED_MODULE_4__.$,parameters:{status:{type:"beta",url:"http://www.url.com/status"}},argTypes:{size:{control:{type:"select",options:["xSmall","small","medium","large","1xLarge","2xLarge","3xLarge"]}},variant:{control:{type:"select",options:["default","interaction","inverted"]}},screenReaderLabel:{type:"string"}}}),"\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"spinner",children:"Spinner"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_2__.AL,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Spinner brukes for å vise en visuell indikasjon på at noe laster. En spinner gir\ningen informasjon om prossesen, men indikerer at noe skjer."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"varianter",children:"Varianter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default-spinner",children:"Default spinner"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default spinner",args:{size:"xSmall",variant:"default"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default spinner small",args:{size:"small",variant:"default"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default spinner medium",args:{size:"medium",variant:"default"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default spinner large",args:{size:"large",variant:"default"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default spinner 1xLarge",args:{size:"1xLarge",variant:"default"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default spinner 2xLarge",args:{size:"2xLarge",variant:"default"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default spinner 3xLarge",args:{size:"3xLarge",variant:"default"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"interaction-spinner",children:"Interaction spinner"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Interaction spinner xSmall",args:{size:"xSmall",variant:"interaction"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Interaction spinner small",args:{size:"small",variant:"interaction"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Interaction spinner medium",args:{size:"medium",variant:"interaction"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Interaction spinner large",args:{size:"large",variant:"interaction"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Interaction spinner 1xLarge",args:{size:"1xLarge",variant:"interaction"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Interaction spinner 2xLarge",args:{size:"2xLarge",variant:"interaction"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Interaction spinner 3xLarge",args:{size:"3xLarge",variant:"interaction"},children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"inverted-spinner",children:"Inverted spinner"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Inverted spinner xSmall",args:{size:"xSmall",variant:"inverted"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Inverted spinner small",args:{size:"small",variant:"inverted"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Inverted spinner medium",args:{size:"medium",variant:"inverted"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Inverted spinner large",args:{size:"large",variant:"inverted"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Inverted spinner 1xLarge",args:{size:"1xLarge",variant:"inverted"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Inverted spinner 2xLarge",args:{size:"2xLarge",variant:"inverted"},children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Inverted spinner 3xLarge",args:{size:"3xLarge",variant:"inverted"},children:Template.bind({})})]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./packages/react/src/components/Spinner/Spinner.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Spinner-module_spinner__lKL1F {\n  animation: Spinner-module_rotate-animation__GiOU1 2s linear infinite;\n}\n\n.Spinner-module_spinnerCircle__rz_YC {\n  animation: Spinner-module_stroke-animation__BFhIL 1.5s ease-in-out infinite;\n}\n\n.Spinner-module_defaultForeground__kWSLX {\n  stroke: var(--colors-grey-500);\n}\n\n.Spinner-module_interactionForeground__RITJB {\n  stroke: var(--semantic-border-action-default);\n}\n\n.Spinner-module_invertedForeground___CyKr {\n  stroke: var(--colors-white);\n}\n\n.Spinner-module_defaultBackground__z5kyk,\n.Spinner-module_interactionBackground__HGEyz,\n.Spinner-module_invertedBackground__SdY3Z {\n  stroke: var(--colors-grey-200);\n}\n\n@keyframes Spinner-module_rotate-animation__GiOU1 {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes Spinner-module_stroke-animation__BFhIL {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -62;\n  }\n\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n","",{version:3,sources:["webpack://./packages/react/src/components/Spinner/Spinner.module.css"],names:[],mappings:"AAAA;EACE,oEAA8C;AAChD;;AAEA;EACE,2EAAqD;AACvD;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;EAGE,8BAA8B;AAChC;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,wBAAwB;IACxB,oBAAoB;EACtB;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;EACxB;;EAEA;IACE,yBAAyB;IACzB,uBAAuB;EACzB;AACF",sourcesContent:[".spinner {\n  animation: rotate-animation 2s linear infinite;\n}\n\n.spinnerCircle {\n  animation: stroke-animation 1.5s ease-in-out infinite;\n}\n\n.defaultForeground {\n  stroke: var(--colors-grey-500);\n}\n\n.interactionForeground {\n  stroke: var(--semantic-border-action-default);\n}\n\n.invertedForeground {\n  stroke: var(--colors-white);\n}\n\n.defaultBackground,\n.interactionBackground,\n.invertedBackground {\n  stroke: var(--colors-grey-200);\n}\n\n@keyframes rotate-animation {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes stroke-animation {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -62;\n  }\n\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"Spinner-module_spinner__lKL1F","rotate-animation":"Spinner-module_rotate-animation__GiOU1",spinnerCircle:"Spinner-module_spinnerCircle__rz_YC","stroke-animation":"Spinner-module_stroke-animation__BFhIL",defaultForeground:"Spinner-module_defaultForeground__kWSLX",interactionForeground:"Spinner-module_interactionForeground__RITJB",invertedForeground:"Spinner-module_invertedForeground___CyKr",defaultBackground:"Spinner-module_defaultBackground__z5kyk",interactionBackground:"Spinner-module_interactionBackground__HGEyz",invertedBackground:"Spinner-module_invertedBackground__SdY3Z"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);