!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=24)}([function(e,t){e.exports=jQuery},function(e,t){e.exports=i18n},function(e,t){e.exports=Injector},function(e,t){e.exports=ReactApollo},function(e,t){e.exports=React},function(e,t){e.exports=ReactRedux},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ANCHORSELECTOR_UPDATED:"ANCHORSELECTOR_UPDATED",ANCHORSELECTOR_UPDATING:"ANCHORSELECTOR_UPDATING",ANCHORSELECTOR_UPDATE_FAILED:"ANCHORSELECTOR_UPDATE_FAILED"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={SUCCESS:"SUCCESS",DIRTY:"DIRTY",UPDATING:"UPDATING",FAILED:"FAILED"}},function(e,t){e.exports=GraphQLTag},function(e,t){e.exports=Redux},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(23),r=a(i),o=n(22),s=a(o);window.document.addEventListener("DOMContentLoaded",function(){(0,s.default)(),(0,r.default)()})},function(e,t,n){"use strict";var a=n(0);(function(e){return e&&e.__esModule?e:{default:e}})(a).default.entwine("ss",function(e){e(".TreeDropdownField").entwine({OldValue:null}),e("#Form_AddForm_ParentID_Holder .treedropdownfield").entwine({onmatch:function(){this._super(),e(".cms-add-form").updateTypeList()}}),e(".cms-add-form .parent-mode :input").entwine({onclick:function(e){var t=this.closest("form").find("#Form_AddForm_ParentID_Holder .TreeDropdownField");"top"==this.val()?(t.setOldValue(t.getValue()),t.setValue(0)):(t.setValue(t.getOldValue()||0),t.setOldValue(null)),t.refresh(),t.trigger("change")}}),e(".cms-add-form").entwine({ParentCache:{},onadd:function(){var t=this;this.find("#Form_AddForm_ParentID_Holder .TreeDropdownField").bind("change",function(){t.updateTypeList()}),this.find(".SelectionGroup.parent-mode").bind("change",function(){t.updateTypeList()}),"top"==e(".cms-add-form .parent-mode :input").val()&&this.updateTypeList()},loadCachedChildren:function(e){var t=this.getParentCache();return void 0!==t[e]?t[e]:null},saveCachedChildren:function(e,t){var n=this.getParentCache();n[e]=t,this.setParentCache(n)},updateTypeList:function(){var t=this.data("hints"),n=this.find("#Form_AddForm_ParentID"),a=this.find("input[name=ParentModeField]:checked").val(),i=n.data("metadata"),r="child"===a?n.getValue():null,o=i?i.ClassName:null,s=o&&"child"===a&&r?o:"Root",d=void 0!==t[s]?t[s]:null,l=this,u=d&&void 0!==d.defaultChild?d.defaultChild:null,c=[];if(r){if(this.hasClass("loading"))return;return this.addClass("loading"),null!==(c=this.loadCachedChildren(r))?(this.updateSelectionFilter(c,u),void this.removeClass("loading")):(e.ajax({url:l.data("childfilter"),data:{ParentID:r},success:function(e){l.saveCachedChildren(r,e),l.updateSelectionFilter(e,u)},complete:function(){l.removeClass("loading")}}),!1)}c=d&&void 0!==d.disallowedChildren?d.disallowedChildren:[],this.updateSelectionFilter(c,u)},updateSelectionFilter:function(t,n){var a=null;if(this.find("#Form_AddForm_PageType div.radio").each(function(){var n=e(this).find("input").val(),i=-1===e.inArray(n,t);e(this).setEnabled(i),i||e(this).setSelected(!1),a=null===a?i:a&&i}),n)var i=this.find("#Form_AddForm_PageType div.radio input[value="+n+"]").parents("li:first");else var i=this.find("#Form_AddForm_PageType div.radio:not(.disabled):first");i.setSelected(!0),i.siblings().setSelected(!1),this.find("#Form_AddForm_PageType div.radio:not(.disabled)").length?this.find("button[name=action_doAdd]").removeAttr("disabled"):this.find("button[name=action_doAdd]").attr("disabled","disabled"),this.find(".message-restricted")[a?"hide":"show"]()}}),e(".cms-add-form #Form_AddForm_PageType div.radio").entwine({onclick:function(e){this.setSelected(!0)},setSelected:function(e){var t=this.find("input");e&&!t.is(":disabled")?(this.siblings().setSelected(!1),this.toggleClass("selected",!0),t.prop("checked",!0)):(this.toggleClass("selected",!1),t.prop("checked",!1))},setEnabled:function(t){e(this).toggleClass("disabled",!t),t?e(this).find("input").removeAttr("disabled"):e(this).find("input").attr("disabled","disabled").removeAttr("checked")}}),e(".cms-content-addpage-button").entwine({onclick:function(t){var n,a=e(".cms-tree"),i=e(".cms-list"),r=0;if(a.is(":visible")){var o=a.jstree("get_selected");r=o?e(o[0]).data("id"):null}else{var s=i.find('input[name="Page[GridState]"]').val();s&&(r=parseInt(JSON.parse(s).ParentID,10))}var d,l={selector:this.data("targetPanel"),pjax:this.data("pjax")};r?(n=this.data("extraParams")?this.data("extraParams"):"",d=e.path.addSearchParams(i18n.sprintf(this.data("urlAddpage"),r),n)):d=this.attr("href"),e(".cms-container").loadPanel(d,null,l),t.preventDefault(),this.blur()}})})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(0),r=a(i),o=n(1),s=a(o);r.default.entwine("ss",function(e){e(".cms-edit-form :input[name=ClassName]").entwine({onchange:function(){alert(s.default._t("CMS.ALERTCLASSNAME"))}}),e(".cms-edit-form input[name=Title]").entwine({onmatch:function(){var t=this;t.data("OrigVal",t.val());var n=t.closest("form"),a=e("input:text[name=URLSegment]",n),i=e("input[name=LiveLink]",n);a.length>0&&(t._addActions(),this.bind("change",function(n){var r=t.data("OrigVal"),o=t.val();t.data("OrigVal",o),0===a.val().indexOf(a.data("defaultUrl"))&&""==i.val()?t.updateURLSegment(o):e(".update",t.parent()).show(),t.updateRelatedFields(o,r),t.updateBreadcrumbLabel(o)})),this._super()},onunmatch:function(){this._super()},updateRelatedFields:function(t,n){this.parents("form").find("input[name=MetaTitle], input[name=MenuTitle]").each(function(){var a=e(this);a.val()==n&&(a.val(t),a.updatedRelatedFields&&a.updatedRelatedFields())})},updateURLSegment:function(t){var n=e("input:text[name=URLSegment]",this.closest("form")),a=n.closest(".field.urlsegment"),i=e(".update",this.parent());a.update(t),i.is(":visible")&&i.hide()},updateBreadcrumbLabel:function(t){var n=(e(".cms-edit-form input[name=ID]").val(),e("span.cms-panel-link.crumb"));t&&""!=t&&n.text(t)},_addActions:function(){var t,n=this;t=e("<button />",{class:"update btn btn-outline-secondary form__field-update-url",text:s.default._t("CMS.UpdateURL"),type:"button",click:function(e){e.preventDefault(),n.updateURLSegment(n.val())}}),t.insertAfter(n),t.parent(".form__field-holder").addClass("input-group"),t.hide()}}),e(".cms-edit-form .parentTypeSelector").entwine({onmatch:function(){var e=this;this.find(":input[name=ParentType]").bind("click",function(t){e._toggleSelection(t)}),this.find(".TreeDropdownField").bind("change",function(t){e._changeParentId(t)}),this._changeParentId(),this._toggleSelection(),this._super()},onunmatch:function(){this._super()},_toggleSelection:function(t){var n=this.find(":input[name=ParentType]:checked").val(),a=this.find("#Form_EditForm_ParentID_Holder");"root"==n?this.find(":input[name=ParentID]").val(0):this.find(":input[name=ParentID]").val(this.find("#Form_EditForm_ParentType_subpage").data("parentIdValue")),"root"!=n?a.slideDown(400,function(){e(this).css("overflow","visible")}):a.slideUp()},_changeParentId:function(e){var t=this.find(":input[name=ParentID]").val();this.find("#Form_EditForm_ParentType_subpage").data("parentIdValue",t)}}),e(".cms-edit-form .btn-toolbar #Form_EditForm_action_doRollback, .cms-edit-form .btn-toolbar #Form_EditForm_action_rollback").entwine({onclick:function(e){if(this.is(":disabled"))return e.preventDefault(),!1;var t=this.parents("form:first").find(":input[name=Version]").val(),n=t?s.default.sprintf(s.default._t("CMS.RollbackToVersion","Do you really want to roll back to version #%s of this page?"),t):s.default._t("CMS.ConfirmRestoreFromLive","Are you sure you want to revert draft to when the page was last published?");return confirm(n)?this._super(e):(e.preventDefault(),!1)}}),e(".cms-edit-form .btn-toolbar #Form_EditForm_action_archive").entwine({onclick:function(e){var t=this.parents("form:first"),n="";return n=t.find("input[name=ArchiveWarningMessage]").val().replace(/\\n/g,"\n"),!!confirm(n)&&this._super(e)}}),e(".cms-edit-form .btn-toolbar #Form_EditForm_action_restore").entwine({onclick:function(e){var t=this.parents("form:first"),n=t.find(":input[name=Version]").val(),a="",i=this.data("toRoot");return a=s.default.sprintf(s.default._t(i?"CMS.RestoreToRoot":"CMS.Restore"),n),!!confirm(a)&&this._super(e)}}),e(".cms-edit-form .btn-toolbar #Form_EditForm_action_unpublish").entwine({onclick:function(e){var t=this.parents("form:first"),n=t.find(":input[name=Version]").val(),a="";return a=s.default.sprintf(s.default._t("CMS.Unpublish"),n),!!confirm(a)&&this._super(e)}}),e(".cms-edit-form.changed").entwine({onmatch:function(t){this.find("button[data-text-alternate]").each(function(){var t=e(this),n=t.find(".btn__title"),a=t.data("textAlternate");a&&(t.data("textStandard",n.text()),n.text(a));var i=t.data("btnAlternate");i&&(t.data("btnStandard",t.attr("class")),t.attr("class",i),t.removeClass("btn-outline-secondary").addClass("btn-primary"));var r=t.data("btnAlternateAdd");r&&t.addClass(r);var o=t.data("btnAlternateRemove");o&&t.removeClass(o)}),this._super(t)},onunmatch:function(t){this.find("button[data-text-alternate]").each(function(){var t=e(this),n=t.find(".btn__title"),a=t.data("textStandard");a&&n.text(a);var i=t.data("btnStandard");i&&(t.attr("class",i),t.addClass("btn-outline-secondary").removeClass("btn-primary"));var r=t.data("btnAlternateAdd");r&&t.removeClass(r);var o=t.data("btnAlternateRemove");o&&t.addClass(o)}),this._super(t)}}),e(".cms-edit-form .btn-toolbar button[name=action_publish]").entwine({onbuttonafterrefreshalternate:function(){this.data("showingAlternate")?(this.addClass("btn-primary"),this.removeClass("btn-secondary")):(this.removeClass("btn-primary"),this.addClass("btn-secondary"))}}),e(".cms-edit-form .btn-toolbar button[name=action_save]").entwine({onbuttonafterrefreshalternate:function(){this.data("showingAlternate")?(this.addClass("btn-primary"),this.removeClass("btn-secondary")):(this.removeClass("btn-primary"),this.addClass("btn-secondary"))}}),e('.cms-edit-form.CMSPageSettingsController input[name="ParentType"]:checked').entwine({onmatch:function(){this.redraw(),this._super()},onunmatch:function(){this._super()},redraw:function(){var t=e(".cms-edit-form.CMSPageSettingsController #Form_EditForm_ParentID_Holder");"Form_EditForm_ParentType_root"==e(this).attr("id")?t.slideUp():t.slideDown()},onclick:function(){this.redraw()}}),"Form_EditForm_ParentType_root"==e('.cms-edit-form.CMSPageSettingsController input[name="ParentType"]:checked').attr("id")&&e(".cms-edit-form.CMSPageSettingsController #Form_EditForm_ParentID_Holder").hide()})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(0),r=a(i),o=n(1),s=a(o);r.default.entwine("ss.tree",function(e){e(".cms-tree").entwine({fromDocument:{"oncontext_show.vakata":function(e){this.adjustContextClass()}},adjustContextClass:function(){var t=e("#vakata-contextmenu").find("ul ul");t.each(function(n){var a="1",i=e(t[n]).find("li").length;i>20?a="3":i>10&&(a="2"),e(t[n]).addClass("col-"+a).removeClass("right"),e(t[n]).find("li").on("mouseenter",function(t){e(this).parent("ul").removeClass("right")})})},getTreeConfig:function(){var t=this,n=this._super();return this.getHints(),n.plugins.push("contextmenu"),n.contextmenu={items:function(n){var a={edit:{label:n.hasClass("edit-disabled")?s.default._t("CMS.EditPage","Edit page",100,"Used in the context menu when right-clicking on a page node in the CMS tree"):s.default._t("CMS.ViewPage","View page",100,"Used in the context menu when right-clicking on a page node in the CMS tree"),action:function(n){e(".cms-container").entwine(".ss").loadPanel(s.default.sprintf(t.data("urlEditpage"),n.data("id")))}}};n.hasClass("nochildren")||(a.showaslist={label:s.default._t("CMS.ShowAsList"),action:function(n){e(".cms-container").entwine(".ss").loadPanel(t.data("urlListview")+"&ParentID="+n.data("id"),null,{tabState:{"pages-controller-cms-content":{tabSelector:".content-listview"}}})}});var i=(n.data("pagetype"),n.data("id")),r=n.find(">a .item").data("allowedchildren"),o={},d=!1;return e.each(r,function(n,a){d=!0,o["allowedchildren-"+n]={label:'<span class="jstree-pageicon"></span>'+a,_class:"class-"+n.replace(/[^a-zA-Z0-9\-_:.]+/g,"_"),action:function(a){e(".cms-container").entwine(".ss").loadPanel(e.path.addSearchParams(s.default.sprintf(t.data("urlAddpage"),i,n),t.data("extraParams")))}}}),d&&(a.addsubpage={label:s.default._t("CMS.AddSubPage","Add page under this page",100,"Used in the context menu when right-clicking on a page node in the CMS tree"),submenu:o}),n.hasClass("edit-disabled")||(a.duplicate={label:s.default._t("CMS.Duplicate"),submenu:[{label:s.default._t("CMS.ThisPageOnly"),action:function(n){e(".cms-container").entwine(".ss").loadPanel(e.path.addSearchParams(s.default.sprintf(t.data("urlDuplicate"),n.data("id")),t.data("extraParams")))}},{label:s.default._t("CMS.ThisPageAndSubpages"),action:function(n){e(".cms-container").entwine(".ss").loadPanel(e.path.addSearchParams(s.default.sprintf(t.data("urlDuplicatewithchildren"),n.data("id")),t.data("extraParams")))}}]}),a}},n}}),e(".cms-tree a.jstree-clicked").entwine({onmatch:function(){var e,t=this,n=t.parents(".cms-panel-content");(t.offset().top<0||t.offset().top>n.height()-t.height())&&(e=n.scrollTop()+t.offset().top+n.height()/2,n.animate({scrollTop:e},"slow"))}}),e(".cms-tree-filtered .clear-filter").entwine({onclick:function(){window.location=location.protocol+"//"+location.host+location.pathname}})})},function(e,t,n){"use strict";var a=n(0);(function(e){return e&&e.__esModule?e:{default:e}})(a).default.entwine("ss",function(e){e(".cms-content-header-info").entwine({"from .cms-panel":{ontoggle:function(e){var t=this.closest(".cms-content").find(e.target);0!==t.length&&this.parent()[t.hasClass("collapsed")?"addClass":"removeClass"]("collapsed")}}}),e(".cms-panel-deferred.cms-content-view").entwine({onadd:function(){if(!this.data("no-ajax")){var e=localStorage.getItem("ss.pages-view-type")||"treeview";this.closest(".cms-content-tools").length>0&&(e="treeview");var t=this.data("url-"+e);this.data("deferredNoCache","listview"===e),this.data("url",t+location.search),this._super()}}}),e(".cms .page-view-link").entwine({onclick:function(t){t.preventDefault();var n=e(this).data("view"),a=this.closest(".cms-content-view"),i=a.data("url-"+n),r=0!==a.closest(".cms-content-tools").length;if(localStorage.setItem("ss.pages-view-type",n),r&&"listview"===n)return void(window.location=a.data("url-listviewroot"));a.data("url",i+location.search),a.redraw()}}),e(".cms .cms-clear-filter").entwine({onclick:function(t){t.preventDefault(),window.location=e(this).prop("href")}}),e(".cms-content-toolbar").entwine({onmatch:function(){var t=this;this._super(),e.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var n=e(this),a=n.data("toolid");n.hasClass("active"),void 0!==a&&(n.data("active",!1).removeClass("active"),e("#"+a).hide(),t.bindActionButtonEvents(n))})},onunmatch:function(){var t=this;this._super(),e.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var n=e(this);t.unbindActionButtonEvents(n)})},bindActionButtonEvents:function(e){var t=this;e.on("click.cmsContentToolbar",function(n){t.showHideTool(e)})},unbindActionButtonEvents:function(e){e.off(".cmsContentToolbar")},showHideTool:function(t){var n=t.data("active"),a=t.data("toolid"),i=e("#"+a);e.each(this.find(".cms-actions-buttons-row .tool-button"),function(){var t=e(this),n=e("#"+t.data("toolid"));t.data("toolid")!==a&&(n.hide(),t.data("active",!1))}),t[n?"removeClass":"addClass"]("active"),i[n?"hide":"show"](),t.data("active",!n)}})})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(0),r=a(i),o=n(1),s=a(o);r.default.entwine("ss",function(e){e("#Form_VersionsForm").entwine({onmatch:function(){this._super()},onunmatch:function(){this._super()},onsubmit:function(t){t.preventDefault();var n=this.find(":input[name=ID]").val();if(!n)return!1;var a=null,i=null,r=null,o=this.find(":input[name=CompareMode]").is(":checked"),d=this.find("table input[type=checkbox]").filter(":checked");if(o){if(2!==d.length)return!1;i=d.eq(0).val(),r=d.eq(1).val(),a=s.default.sprintf(this.data("linkTmplCompare"),n,r,i)}else i=d.eq(0).val(),a=s.default.sprintf(this.data("linkTmplShow"),n,i);return e(".cms-container").loadPanel(a,"",{pjax:"CurrentForm"}),!0}}),e("#Form_VersionsForm input[name=ShowUnpublished]").entwine({onmatch:function(){this.toggle(),this._super()},onunmatch:function(){this._super()},onchange:function(){this.toggle()},toggle:function(){var t=e(this),n=t.parents("form").find("tr[data-published=false]");t.attr("checked")?n.removeClass("ui-helper-hidden").show():n.addClass("ui-helper-hidden").hide()._unselect()}}),e("#Form_VersionsForm tbody tr").entwine({onclick:function(){var e=this.parents("form").find(":input[name=CompareMode]").attr("checked"),t=this.siblings(".active");return e&&this.hasClass("active")?void this._unselect():e?t.length>1?void alert(s.default._t("CMS.ONLYSELECTTWO","You can only compare two versions at this time.")):(this._select(),void(1===t.length&&this.parents("form").submit())):(this._select(),t._unselect(),void this.parents("form").submit())},_unselect:function(){this.get(0).classList.remove("active"),this.find(":input[type=checkbox][checked]").attr("checked",!1)},_select:function(){this.addClass("active"),this.find(":input[type=checkbox]").attr("checked",!0)}})})},function(e,t,n){"use strict";var a=n(0);(function(e){return e&&e.__esModule?e:{default:e}})(a).default.entwine("ss",function(e){e("#Form_EditForm_RedirectionType input").entwine({onmatch:function(){e(this).attr("checked")&&this.toggle(),this._super()},onunmatch:function(){this._super()},onclick:function(){this.toggle()},toggle:function(){"Internal"==e(this).attr("value")?(e("#Form_EditForm_ExternalURL_Holder").hide(),e("#Form_EditForm_LinkToID_Holder").show()):(e("#Form_EditForm_ExternalURL_Holder").show(),e("#Form_EditForm_LinkToID_Holder").hide())}})})},function(e,t,n){"use strict";var a=n(0);(function(e){return e&&e.__esModule?e:{default:e}})(a).default.entwine("ss",function(e){e(".field.urlsegment:not(.readonly)").entwine({MaxPreviewLength:55,Ellipsis:"...",onmatch:function(){this.find(":text").length&&this.toggleEdit(!1),this.redraw(),this._super()},redraw:function(){var e=this.find(":text"),t=decodeURI(e.data("prefix")+e.val()),n=t;t.length>this.getMaxPreviewLength()&&(n=this.getEllipsis()+t.substr(t.length-this.getMaxPreviewLength(),t.length)),this.find(".URL-link").attr("href",encodeURI(t+e.data("suffix"))).text(n)},toggleEdit:function(e){var t=this.find(":text");this.find(".preview-holder")[e?"hide":"show"](),this.find(".edit-holder")[e?"show":"hide"](),e&&(t.data("origval",t.val()),t.focus())},update:function(){var e=this,t=this.find(":text"),n=t.data("origval"),a=arguments[0],i=a&&""!==a?a:t.val();n!=i?(this.addClass("loading"),this.suggest(i,function(n){t.val(decodeURIComponent(n.value)),e.toggleEdit(!1),e.removeClass("loading"),e.redraw()})):(this.toggleEdit(!1),this.redraw())},cancel:function(){var e=this.find(":text");e.val(e.data("origval")),this.toggleEdit(!1)},suggest:function(t,n){var a=this,i=a.find(":text"),r=e.path.parseUrl(a.closest("form").attr("action")),o=r.hrefNoSearch+"/field/"+i.attr("name")+"/suggest/?value="+encodeURIComponent(t);r.search&&(o+="&"+r.search.replace(/^\?/,"")),e.ajax({url:o,success:function(e){n.apply(this,arguments)},error:function(e,t){e.statusText=e.responseText},complete:function(){a.removeClass("loading")}})}}),e(".field.urlsegment .edit").entwine({onclick:function(e){e.preventDefault(),this.closest(".field").toggleEdit(!0)}}),e(".field.urlsegment .update").entwine({onclick:function(e){e.preventDefault(),this.closest(".field").update()}}),e(".field.urlsegment .cancel").entwine({onclick:function(e){e.preventDefault(),this.closest(".field").cancel()}})})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=a(i),o=n(25),s=a(o),d=n(31),l=a(d),u=n(32),c=a(u);t.default=function(){r.default.component.register("AnchorSelectorField",s.default),r.default.transform("pages-history",function(e){e.component("HistoryViewer.pages-controller-cms-content",l.default,"PageHistoryViewer")}),r.default.transform("pages-history-revert",function(e){e.component("HistoryViewerToolbar.VersionedAdmin.HistoryViewer.SiteTree.HistoryViewerVersionDetail",c.default,"PageRevertMutation")})}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=a(i),o=n(13),s=n(30),d=a(s);t.default=function(){r.default.reducer.register("cms",(0,o.combineReducers)({anchorSelector:d.default}))}},function(e,t,n){"use strict";n(15),n(16),n(18),n(17),n(19),n(20),n(21),n(14)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=(0,_.formValueSelector)(t.formid,D.default),a=t&&t.data&&t.data.targetFieldName||"PageID",i=Number(n(e,a)||0),r=[],o=i?e.cms.anchorSelector.pages.find(function(e){return e.id===i}):null;o&&o.loadingState===P.default.SUCCESS&&(r=o.anchors);var s=null;return s=o?o.loadingState:i?P.default.DIRTY:P.default.SUCCESS,{pageId:i,anchors:r,loadingState:s}}function d(e){return{actions:{anchorSelector:(0,v.bindActionCreators)(w,e)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectedAnchorSelectorField=t.Component=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),c=a(u),f=n(4),h=a(f),p=n(35),m=a(p),g=n(5),v=n(13),_=n(37),b=n(38),C=a(b),S=n(29),w=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(S),y=n(11),P=a(y),T=n(34),E=a(T),F=n(36),A=n(40),D=a(A),I=n(39),O=a(I),x=function(){return null},L=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n.handleLoadingError=n.handleLoadingError.bind(n),n}return o(t,e),l(t,[{key:"componentDidMount",value:function(){this.ensurePagesLoaded()}},{key:"componentWillReceiveProps",value:function(e){this.props.pageId!==e.pageId&&this.ensurePagesLoaded(e)}},{key:"ensurePagesLoaded",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;if(t.loadingState!==P.default.DIRTY||!t.pageId)return Promise.resolve();t.actions.anchorSelector.beginUpdating(t.pageId);var n=t.data.endpoint.replace(/:id/,t.pageId);return(0,m.default)(n,{credentials:"same-origin"}).then(function(e){return e.json()}).then(function(e){return t.actions.anchorSelector.updated(t.pageId,e),e}).catch(function(n){t.actions.anchorSelector.updateFailed(t.pageId),e.handleLoadingError(n,t)})}},{key:"getDropdownOptions",value:function(){var e=this,t=this.props.anchors.map(function(e){return{value:e}});return this.props.value&&!this.props.anchors.find(function(t){return t===e.props.value})&&t.unshift({value:this.props.value}),t}},{key:"handleChange",value:function(e){"function"==typeof this.props.onChange&&this.props.onChange(e?e.value:"")}},{key:"handleLoadingError",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props;if(t.onLoadingError===x)throw e;return t.onLoadingError({errors:[{value:e.message,type:"error"}]})}},{key:"render",value:function(){var e={id:this.props.id},t=(0,O.default)("anchorselectorfield",this.props.extraClass),n=this.getDropdownOptions(),a=this.props.value||"",i=c.default._t("CMS.ANCHOR_SELECT_OR_TYPE","Select or enter anchor");return h.default.createElement(F.Creatable,{searchable:!0,options:n,className:t,name:this.props.name,inputProps:e,onChange:this.handleChange,onBlurResetsInput:!0,value:a,placeholder:i,labelKey:"value"})}}]),t}(C.default);L.propTypes={extraClass:h.default.PropTypes.string,id:h.default.PropTypes.string,name:h.default.PropTypes.string.isRequired,onChange:h.default.PropTypes.func,value:h.default.PropTypes.string,attributes:h.default.PropTypes.oneOfType([h.default.PropTypes.object,h.default.PropTypes.array]),pageId:h.default.PropTypes.number,anchors:h.default.PropTypes.array,loadingState:h.default.PropTypes.oneOf(Object.keys(P.default).map(function(e){return P.default[e]})),onLoadingError:h.default.PropTypes.func,data:h.default.PropTypes.shape({endpoint:h.default.PropTypes.string,targetFieldName:h.default.PropTypes.string})},L.defaultProps={value:"",extraClass:"",onLoadingError:x,attributes:{}};var R=(0,g.connect)(s,d)(L);t.Component=L,t.ConnectedAnchorSelectorField=R,t.default=(0,E.default)(R)},,,,function(e,t,n){"use strict";function a(e){return{type:s.default.ANCHORSELECTOR_UPDATING,payload:{pageId:e}}}function i(e,t){return{type:s.default.ANCHORSELECTOR_UPDATED,payload:{pageId:e,anchors:t}}}function r(e){return{type:s.default.ANCHORSELECTOR_UPDATE_FAILED,payload:{pageId:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.beginUpdating=a,t.updated=i,t.updateFailed=r;var o=n(10),s=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=function(n,a){var r=t.payload.pageId;return(0,s.default)({pages:[].concat(i(e.pages.filter(function(e){return e.id!==r})),[{id:r,loadingState:n,anchors:a}]).sort(function(e,t){return e.id-t.id})})};switch(t.type){case l.default.ANCHORSELECTOR_UPDATING:return n(c.default.UPDATING,[]);case l.default.ANCHORSELECTOR_UPDATED:return n(c.default.SUCCESS,t.payload.anchors);case l.default.ANCHORSELECTOR_UPDATE_FAILED:return n(c.default.FAILED,[]);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(33),s=a(o),d=n(10),l=a(d),u=n(11),c=a(u),f=(0,s.default)({pages:[]})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.query=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\nquery ReadHistoryViewerPage ($page_id: ID!, $limit: Int!, $offset: Int!) {\n  readOnePage(\n    Versioning: {\n      Mode: LATEST\n    },\n    ID: $page_id\n  ) {\n    ID\n    Versions (limit: $limit, offset: $offset) {\n      pageInfo {\n        totalCount\n      }\n      edges {\n        node {\n          Version\n          AbsoluteLink\n          Author {\n            FirstName\n            Surname\n          }\n          Publisher {\n            FirstName\n            Surname\n          }\n          Published\n          LiveVersion\n          LatestDraftVersion\n          LastEdited\n        }\n      }\n    }\n  }\n}\n"],["\nquery ReadHistoryViewerPage ($page_id: ID!, $limit: Int!, $offset: Int!) {\n  readOnePage(\n    Versioning: {\n      Mode: LATEST\n    },\n    ID: $page_id\n  ) {\n    ID\n    Versions (limit: $limit, offset: $offset) {\n      pageInfo {\n        totalCount\n      }\n      edges {\n        node {\n          Version\n          AbsoluteLink\n          Author {\n            FirstName\n            Surname\n          }\n          Publisher {\n            FirstName\n            Surname\n          }\n          Published\n          LiveVersion\n          LatestDraftVersion\n          LastEdited\n        }\n      }\n    }\n  }\n}\n"]),r=n(3),o=n(12),s=function(e){return e&&e.__esModule?e:{default:e}}(o),d=(0,s.default)(i),l={options:function(e){var t=e.recordId,n=e.limit;return{variables:{limit:n,offset:((e.page||1)-1)*n,page_id:t}}},props:function(e){var t=e.data,n=t.error,i=t.refetch,r=t.readOnePage,o=t.loading,s=e.ownProps,d=s.actions,l=void 0===d?{versions:{}}:d,u=s.limit,c=s.recordId,f=r||null,h=n&&n.graphQLErrors&&n.graphQLErrors.map(function(e){return e.message});return{loading:o||!f,versions:f,graphQLErrors:h,actions:a({},l,{versions:a({},f,{goToPage:function(e){i({offset:((e||1)-1)*u,limit:u,page_id:c})}})})}}};t.query=d,t.config=l,t.default=(0,r.graphql)(d,l)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.mutation=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\nmutation revertPageToVersion($id:ID!, $fromStage:VersionedStage!, $toStage:VersionedStage!, $fromVersion:Int!) {\n  copySilverStripeSiteTreeToStage(Input: {\n    ID: $id\n    FromVersion: $fromVersion\n    FromStage: $fromStage\n    ToStage: $toStage\n  }) {\n    ID\n  }\n}\n\n"],["\nmutation revertPageToVersion($id:ID!, $fromStage:VersionedStage!, $toStage:VersionedStage!, $fromVersion:Int!) {\n  copySilverStripeSiteTreeToStage(Input: {\n    ID: $id\n    FromVersion: $fromVersion\n    FromStage: $fromStage\n    ToStage: $toStage\n  }) {\n    ID\n  }\n}\n\n"]),r=n(3),o=n(12),s=function(e){return e&&e.__esModule?e:{default:e}}(o),d=(0,s.default)(i),l={props:function(e){var t=e.mutate,n=e.ownProps.actions;return{actions:a({},n,{revertToVersion:function(e,n,a,i){return t({variables:{id:e,fromVersion:n,fromStage:a,toStage:i}})}})}},options:{refetchQueries:["ReadHistoryViewerPage"]}};t.mutation=d,t.config=l,t.default=(0,r.graphql)(d,l)},function(e,t){e.exports=DeepFreezeStrict},function(e,t){e.exports=FieldHolder},function(e,t){e.exports=IsomorphicFetch},function(e,t){e.exports=ReactSelect},function(e,t){e.exports=ReduxForm},function(e,t){e.exports=SilverStripeComponent},function(e,t){e.exports=classnames},function(e,t){e.exports=getFormState}]);