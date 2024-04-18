//@ui5-bundle zcursoecapp2/Component-preload.js
sap.ui.require.preload({
	"zcursoecapp2/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","zcursoecapp2/model/models"],function(e,t,i){"use strict";return e.extend("zcursoecapp2.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"zcursoecapp2/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("zcursoecapp2.controller.App",{onInit:function(){}})});
},
	"zcursoecapp2/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("zcursoecapp2.controller.View1",{onInit:function(){}})});
},
	"zcursoecapp2/i18n/i18n.properties":'# This is the resource bundle for zcursoecapp2\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\r\n#XTIT: Main view title\ntitle=App Title',
	"zcursoecapp2/manifest.json":'{"_version":"1.42.0","sap.app":{"id":"zcursoecapp2","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.1","toolsId":"5890f846-90e1-49e8-a7b3-474467f1ee48"},"dataSources":{"mainService":{"uri":"/sap/opu/odata/sap/ZG_CURSO_FIORI_EDSONCR_SRV/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"2.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.102.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"zcursoecapp2.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"zcursoecapp2.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"zcursoecapp2.view.App","type":"XML","async":true,"id":"App"}}}',
	"zcursoecapp2/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"zcursoecapp2/view/App.view.xml":'<mvc:View controllerName="zcursoecapp2.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"zcursoecapp2/view/View1.view.xml":'<mvc:View controllerName="zcursoecapp2.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content /></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
