"use strict";(self.webpackChunkmy_button_project=self.webpackChunkmy_button_project||[]).push([[6347],{"./node_modules/antd/es/_util/ActionButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rc-util/es/hooks/useState.js"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js"),_button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/button/buttonHelpers.js");function isThenable(thing){return!!(null==thing?void 0:thing.then)}const __WEBPACK_DEFAULT_EXPORT__=props=>{const{type,children,prefixCls,buttonProps,close,autoFocus,emitEvent,isSilent,quitOnNullishReturnValue,actionFn}=props,clickedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),buttonRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[loading,setLoading]=(0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_1__.A)(!1),onInternalClose=function(){null==close||close.apply(void 0,arguments)};react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{let timeoutId=null;return autoFocus&&(timeoutId=setTimeout((()=>{var _a;null===(_a=buttonRef.current)||void 0===_a||_a.focus({preventScroll:!0})}))),()=>{timeoutId&&clearTimeout(timeoutId)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.Ay,Object.assign({},(0,_button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__.DU)(type),{onClick:e=>{if(clickedRef.current)return;if(clickedRef.current=!0,!actionFn)return void onInternalClose();let returnValueOfOnOk;if(emitEvent){if(returnValueOfOnOk=actionFn(e),quitOnNullishReturnValue&&!isThenable(returnValueOfOnOk))return clickedRef.current=!1,void onInternalClose(e)}else if(actionFn.length)returnValueOfOnOk=actionFn(close),clickedRef.current=!1;else if(returnValueOfOnOk=actionFn(),!isThenable(returnValueOfOnOk))return void onInternalClose();(returnValueOfOnOk=>{isThenable(returnValueOfOnOk)&&(setLoading(!0),returnValueOfOnOk.then((function(){setLoading(!1,!0),onInternalClose.apply(void 0,arguments),clickedRef.current=!1}),(e=>{if(setLoading(!1,!0),clickedRef.current=!1,!(null==isSilent?void 0:isSilent()))return Promise.reject(e)})))})(returnValueOfOnOk)},loading,prefixCls},buttonProps,{ref:buttonRef}),children)}},"./node_modules/antd/es/locale/useLocale.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/locale/context.js"),_en_US__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/locale/en_US.js");const __WEBPACK_DEFAULT_EXPORT__=(componentName,defaultLocale)=>{const fullLocale=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context__WEBPACK_IMPORTED_MODULE_1__.A);return[react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{var _a;const locale=defaultLocale||_en_US__WEBPACK_IMPORTED_MODULE_2__.A[componentName],localeFromContext=null!==(_a=null==fullLocale?void 0:fullLocale[componentName])&&void 0!==_a?_a:{};return Object.assign(Object.assign({},"function"==typeof locale?locale():locale),localeFromContext||{})}),[componentName,defaultLocale,fullLocale]),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const localeCode=null==fullLocale?void 0:fullLocale.locale;return(null==fullLocale?void 0:fullLocale.exist)&&!localeCode?_en_US__WEBPACK_IMPORTED_MODULE_2__.A.locale:localeCode}),[fullLocale])]}},"./src/ant/components/Popconfirm/popconfirm.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>popconfirm_stories,ПодтверждениеДействияПриНажатииНаКнопку:()=>ПодтверждениеДействияПриНажатииНаКнопку});var react=__webpack_require__("./node_modules/react/index.js"),message=__webpack_require__("./node_modules/antd/es/message/index.js"),ExclamationCircleFilled=__webpack_require__("./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useMergedState=__webpack_require__("./node_modules/rc-util/es/hooks/useMergedState.js"),omit=__webpack_require__("./node_modules/rc-util/es/omit.js"),context=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),KeyCode=__webpack_require__("./node_modules/rc-util/es/KeyCode.js");const getRenderPropValue=propValue=>propValue?"function"==typeof propValue?propValue():propValue:null;var motion=__webpack_require__("./node_modules/antd/es/_util/motion.js"),reactNode=__webpack_require__("./node_modules/antd/es/_util/reactNode.js"),tooltip=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),es=__webpack_require__("./node_modules/rc-tooltip/es/index.js"),style=__webpack_require__("./node_modules/antd/es/style/index.js"),zoom=__webpack_require__("./node_modules/antd/es/style/motion/zoom.js"),placementArrow=__webpack_require__("./node_modules/antd/es/style/placementArrow.js"),roundedArrow=__webpack_require__("./node_modules/antd/es/style/roundedArrow.js"),presetColors=__webpack_require__("./node_modules/antd/es/theme/interface/presetColors.js"),genStyleUtils=__webpack_require__("./node_modules/antd/es/theme/util/genStyleUtils.js"),cssinjs_utils_es=__webpack_require__("./node_modules/@ant-design/cssinjs-utils/es/index.js");const genBaseStyle=token=>{const{componentCls,popoverColor,titleMinWidth,fontWeightStrong,innerPadding,boxShadowSecondary,colorTextHeading,borderRadiusLG,zIndexPopup,titleMarginBottom,colorBgElevated,popoverBg,titleBorderBottom,innerContentPadding,titlePadding}=token;return[{[componentCls]:Object.assign(Object.assign({},(0,style.dF)(token)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:zIndexPopup,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":colorBgElevated,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${componentCls}-content`]:{position:"relative"},[`${componentCls}-inner`]:{backgroundColor:popoverBg,backgroundClip:"padding-box",borderRadius:borderRadiusLG,boxShadow:boxShadowSecondary,padding:innerPadding},[`${componentCls}-title`]:{minWidth:titleMinWidth,marginBottom:titleMarginBottom,color:colorTextHeading,fontWeight:fontWeightStrong,borderBottom:titleBorderBottom,padding:titlePadding},[`${componentCls}-inner-content`]:{color:popoverColor,padding:innerContentPadding}})},(0,placementArrow.Ay)(token,"var(--antd-arrow-background-color)"),{[`${componentCls}-pure`]:{position:"relative",maxWidth:"none",margin:token.sizePopupArrow,display:"inline-block",[`${componentCls}-content`]:{display:"inline-block"}}}]},genColorStyle=token=>{const{componentCls}=token;return{[componentCls]:presetColors.s.map((colorKey=>{const lightColor=token[`${colorKey}6`];return{[`&${componentCls}-${colorKey}`]:{"--antd-arrow-background-color":lightColor,[`${componentCls}-inner`]:{backgroundColor:lightColor},[`${componentCls}-arrow`]:{background:"transparent"}}}}))}},popover_style=(0,genStyleUtils.OF)("Popover",(token=>{const{colorBgElevated,colorText}=token,popoverToken=(0,cssinjs_utils_es.oX)(token,{popoverBg:colorBgElevated,popoverColor:colorText});return[genBaseStyle(popoverToken),genColorStyle(popoverToken),(0,zoom.aB)(popoverToken,"zoom-big")]}),(token=>{const{lineWidth,controlHeight,fontHeight,padding,wireframe,zIndexPopupBase,borderRadiusLG,marginXS,lineType,colorSplit,paddingSM}=token,titlePaddingBlockDist=controlHeight-fontHeight,popoverTitlePaddingBlockTop=titlePaddingBlockDist/2,popoverTitlePaddingBlockBottom=titlePaddingBlockDist/2-lineWidth,popoverPaddingHorizontal=padding;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:zIndexPopupBase+30},(0,roundedArrow.n)(token)),(0,placementArrow.Ke)({contentRadius:borderRadiusLG,limitVerticalRadius:!0})),{innerPadding:wireframe?0:12,titleMarginBottom:wireframe?0:marginXS,titlePadding:wireframe?`${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px`:0,titleBorderBottom:wireframe?`${lineWidth}px ${lineType} ${colorSplit}`:"none",innerContentPadding:wireframe?`${paddingSM}px ${popoverPaddingHorizontal}px`:0})}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Overlay=_ref=>{let{title,content,prefixCls}=_ref;return title||content?react.createElement(react.Fragment,null,title&&react.createElement("div",{className:`${prefixCls}-title`},title),content&&react.createElement("div",{className:`${prefixCls}-inner-content`},content)):null},RawPurePanel=props=>{const{hashId,prefixCls,className,style,placement="top",title,content,children}=props,titleNode=getRenderPropValue(title),contentNode=getRenderPropValue(content),cls=classnames_default()(hashId,prefixCls,`${prefixCls}-pure`,`${prefixCls}-placement-${placement}`,className);return react.createElement("div",{className:cls,style},react.createElement("div",{className:`${prefixCls}-arrow`}),react.createElement(es.z,Object.assign({},props,{className:hashId,prefixCls}),children||react.createElement(Overlay,{prefixCls,title:titleNode,content:contentNode})))},popover_PurePanel=props=>{const{prefixCls:customizePrefixCls,className}=props,restProps=__rest(props,["prefixCls","className"]),{getPrefixCls}=react.useContext(context.QO),prefixCls=getPrefixCls("popover",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=popover_style(prefixCls);return wrapCSSVar(react.createElement(RawPurePanel,Object.assign({},restProps,{prefixCls,hashId,className:classnames_default()(className,cssVarCls)})))};var popover_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Popover=react.forwardRef(((props,ref)=>{var _a,_b;const{prefixCls:customizePrefixCls,title,content,overlayClassName,placement="top",trigger="hover",children,mouseEnterDelay=.1,mouseLeaveDelay=.1,onOpenChange,overlayStyle={},styles,classNames:popoverClassNames}=props,otherProps=popover_rest(props,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle","styles","classNames"]),{getPrefixCls,className:contextClassName,style:contextStyle,classNames:contextClassNames,styles:contextStyles}=(0,context.TP)("popover"),prefixCls=getPrefixCls("popover",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=popover_style(prefixCls),rootPrefixCls=getPrefixCls(),rootClassNames=classnames_default()(overlayClassName,hashId,cssVarCls,contextClassName,contextClassNames.root,null==popoverClassNames?void 0:popoverClassNames.root),bodyClassNames=classnames_default()(contextClassNames.body,null==popoverClassNames?void 0:popoverClassNames.body),[open,setOpen]=(0,useMergedState.A)(!1,{value:null!==(_a=props.open)&&void 0!==_a?_a:props.visible,defaultValue:null!==(_b=props.defaultOpen)&&void 0!==_b?_b:props.defaultVisible}),settingOpen=(value,e)=>{setOpen(value,!0),null==onOpenChange||onOpenChange(value,e)},titleNode=getRenderPropValue(title),contentNode=getRenderPropValue(content);return wrapCSSVar(react.createElement(tooltip.A,Object.assign({placement,trigger,mouseEnterDelay,mouseLeaveDelay},otherProps,{prefixCls,classNames:{root:rootClassNames,body:bodyClassNames},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},contextStyles.root),contextStyle),overlayStyle),null==styles?void 0:styles.root),body:Object.assign(Object.assign({},contextStyles.body),null==styles?void 0:styles.body)},ref,open,onOpenChange:value=>{settingOpen(value)},overlay:titleNode||contentNode?react.createElement(Overlay,{prefixCls,title:titleNode,content:contentNode}):null,transitionName:(0,motion.b)(rootPrefixCls,"zoom-big",otherProps.transitionName),"data-popover-inject":!0}),(0,reactNode.Ob)(children,{onKeyDown:e=>{var _a,_b;react.isValidElement(children)&&(null===(_b=null==children?void 0:(_a=children.props).onKeyDown)||void 0===_b||_b.call(_a,e)),(e=>{e.keyCode===KeyCode.A.ESC&&settingOpen(!1,e)})(e)}})))}));Popover._InternalPanelDoNotUseOrYouWillBeFired=popover_PurePanel;const popover=Popover;var ActionButton=__webpack_require__("./node_modules/antd/es/_util/ActionButton.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),buttonHelpers=__webpack_require__("./node_modules/antd/es/button/buttonHelpers.js"),useLocale=__webpack_require__("./node_modules/antd/es/locale/useLocale.js"),en_US=__webpack_require__("./node_modules/antd/es/locale/en_US.js");const popconfirm_style=(0,genStyleUtils.OF)("Popconfirm",(token=>(token=>{const{componentCls,iconCls,antCls,zIndexPopup,colorText,colorWarning,marginXXS,marginXS,fontSize,fontWeightStrong,colorTextHeading}=token;return{[componentCls]:{zIndex:zIndexPopup,[`&${antCls}-popover`]:{fontSize},[`${componentCls}-message`]:{marginBottom:marginXS,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${componentCls}-message-icon ${iconCls}`]:{color:colorWarning,fontSize,lineHeight:1,marginInlineEnd:marginXS},[`${componentCls}-title`]:{fontWeight:fontWeightStrong,color:colorTextHeading,"&:only-child":{fontWeight:"normal"}},[`${componentCls}-description`]:{marginTop:marginXXS,color:colorText}},[`${componentCls}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:marginXS}}}}})(token)),(token=>{const{zIndexPopupBase}=token;return{zIndexPopup:zIndexPopupBase+60}}),{resetStyle:!1});var PurePanel_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const PurePanel_Overlay=props=>{const{prefixCls,okButtonProps,cancelButtonProps,title,description,cancelText,okText,okType="primary",icon=react.createElement(ExclamationCircleFilled.A,null),showCancel=!0,close,onConfirm,onCancel,onPopupClick}=props,{getPrefixCls}=react.useContext(context.QO),[contextLocale]=(0,useLocale.A)("Popconfirm",en_US.A.Popconfirm),titleNode=getRenderPropValue(title),descriptionNode=getRenderPropValue(description);return react.createElement("div",{className:`${prefixCls}-inner-content`,onClick:onPopupClick},react.createElement("div",{className:`${prefixCls}-message`},icon&&react.createElement("span",{className:`${prefixCls}-message-icon`},icon),react.createElement("div",{className:`${prefixCls}-message-text`},titleNode&&react.createElement("div",{className:`${prefixCls}-title`},titleNode),descriptionNode&&react.createElement("div",{className:`${prefixCls}-description`},descriptionNode))),react.createElement("div",{className:`${prefixCls}-buttons`},showCancel&&react.createElement(es_button.Ay,Object.assign({onClick:onCancel,size:"small"},cancelButtonProps),cancelText||(null==contextLocale?void 0:contextLocale.cancelText)),react.createElement(ActionButton.A,{buttonProps:Object.assign(Object.assign({size:"small"},(0,buttonHelpers.DU)(okType)),okButtonProps),actionFn:onConfirm,close,prefixCls:getPrefixCls("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},okText||(null==contextLocale?void 0:contextLocale.okText))))},popconfirm_PurePanel=props=>{const{prefixCls:customizePrefixCls,placement,className,style}=props,restProps=PurePanel_rest(props,["prefixCls","placement","className","style"]),{getPrefixCls}=react.useContext(context.QO),prefixCls=getPrefixCls("popconfirm",customizePrefixCls),[wrapCSSVar]=popconfirm_style(prefixCls);return wrapCSSVar(react.createElement(popover_PurePanel,{placement,className:classnames_default()(prefixCls,className),style,content:react.createElement(PurePanel_Overlay,Object.assign({prefixCls},restProps))}))};var popconfirm_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Popconfirm=react.forwardRef(((props,ref)=>{var _a,_b;const{prefixCls:customizePrefixCls,placement="top",trigger="click",okType="primary",icon=react.createElement(ExclamationCircleFilled.A,null),children,overlayClassName,onOpenChange,onVisibleChange,overlayStyle,styles,classNames:popconfirmClassNames}=props,restProps=popconfirm_rest(props,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange","overlayStyle","styles","classNames"]),{getPrefixCls,className:contextClassName,style:contextStyle,classNames:contextClassNames,styles:contextStyles}=(0,context.TP)("popconfirm"),[open,setOpen]=(0,useMergedState.A)(!1,{value:null!==(_a=props.open)&&void 0!==_a?_a:props.visible,defaultValue:null!==(_b=props.defaultOpen)&&void 0!==_b?_b:props.defaultVisible}),settingOpen=(value,e)=>{setOpen(value,!0),null==onVisibleChange||onVisibleChange(value),null==onOpenChange||onOpenChange(value,e)},prefixCls=getPrefixCls("popconfirm",customizePrefixCls),rootClassNames=classnames_default()(prefixCls,contextClassName,overlayClassName,contextClassNames.root,null==popconfirmClassNames?void 0:popconfirmClassNames.root),bodyClassNames=classnames_default()(contextClassNames.body,null==popconfirmClassNames?void 0:popconfirmClassNames.body),[wrapCSSVar]=popconfirm_style(prefixCls);return wrapCSSVar(react.createElement(popover,Object.assign({},(0,omit.A)(restProps,["title"]),{trigger,placement,onOpenChange:(value,e)=>{const{disabled=!1}=props;disabled||settingOpen(value,e)},open,ref,classNames:{root:rootClassNames,body:bodyClassNames},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign({},contextStyles.root),contextStyle),overlayStyle),null==styles?void 0:styles.root),body:Object.assign(Object.assign({},contextStyles.body),null==styles?void 0:styles.body)},content:react.createElement(PurePanel_Overlay,Object.assign({okType,icon},props,{prefixCls,close:e=>{settingOpen(!1,e)},onConfirm:e=>{var _a;return null===(_a=props.onConfirm)||void 0===_a?void 0:_a.call(void 0,e)},onCancel:e=>{var _a;settingOpen(!1,e),null===(_a=props.onCancel)||void 0===_a||_a.call(void 0,e)}})),"data-popover-inject":!0}),children))}));Popconfirm._InternalPanelDoNotUseOrYouWillBeFired=popconfirm_PurePanel;const popconfirm=Popconfirm;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const popconfirm_confirm=e=>{console.log(e),message.Ay.success("Click on Yes")},cancel=e=>{console.log(e),message.Ay.error("Click on No")},PopconfirmExample=()=>(0,jsx_runtime.jsx)(popconfirm,{title:"Удаление записи",description:"Вы уверены что хотите удалить запись?",onConfirm:popconfirm_confirm,onCancel:cancel,okText:"Да",cancelText:"Нет",children:(0,jsx_runtime.jsx)(es_button.Ay,{danger:!0,children:"Удалить"})}),Popconfirm_popconfirm=PopconfirmExample;PopconfirmExample.__docgenInfo={description:"",methods:[],displayName:"PopconfirmExample"};const popconfirm_stories={title:"antd/Окошко подтверждения действия",component:Popconfirm_popconfirm},ПодтверждениеДействияПриНажатииНаКнопку=(args=>(0,jsx_runtime.jsx)(Popconfirm_popconfirm,{...args})).bind({}),__namedExportsOrder=["ПодтверждениеДействияПриНажатииНаКнопку"];ПодтверждениеДействияПриНажатииНаКнопку.parameters={...ПодтверждениеДействияПриНажатииНаКнопку.parameters,docs:{...ПодтверждениеДействияПриНажатииНаКнопку.parameters?.docs,source:{originalSource:"args => <PopconfirmExample {...args} />",...ПодтверждениеДействияПриНажатииНаКнопку.parameters?.docs?.source}}}}}]);