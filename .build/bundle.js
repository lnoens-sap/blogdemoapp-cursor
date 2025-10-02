(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/blogdemoappcursor/i18n/i18n.properties":
/*!******************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/i18n/i18n.properties ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "Products=Products\nProducts_Detail=Products Detail\nCreate_Products_Detail=Create Products Detail\nUpdate_Products_Detail=Update Products Detail"

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/i18n/i18n_de.properties":
/*!*********************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/i18n/i18n_de.properties ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "Products=Produkte\nProducts_Detail=Produktdetails\nCreate_Products_Detail=Produktdetails erstellen\nUpdate_Products_Detail=Produktdetails aktualisieren\n"

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/i18n/i18n_en.properties":
/*!*********************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/i18n/i18n_en.properties ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "Products=Products\nProducts_Detail=Products Detail\nCreate_Products_Detail=Create Products Detail\nUpdate_Products_Detail=Update Products Detail\n"

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/i18n/i18n_es.properties":
/*!*********************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/i18n/i18n_es.properties ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "Products=Productos\nProducts_Detail=Detalles del producto\nCreate_Products_Detail=Crear detalles del producto\nUpdate_Products_Detail=Actualizar detalles del producto\n"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let blogdemoappcursor_actions_application_appupdate_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/AppUpdate.action */ "./build.definitions/blogdemoappcursor/Actions/Application/AppUpdate.action")
let blogdemoappcursor_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateFailureMessage.action")
let blogdemoappcursor_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateProgressBanner.action")
let blogdemoappcursor_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateSuccessMessage.action")
let blogdemoappcursor_actions_application_logout_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/Logout.action */ "./build.definitions/blogdemoappcursor/Actions/Application/Logout.action")
let blogdemoappcursor_actions_application_navtoabout_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/NavToAbout.action */ "./build.definitions/blogdemoappcursor/Actions/Application/NavToAbout.action")
let blogdemoappcursor_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/NavToActivityLog.action */ "./build.definitions/blogdemoappcursor/Actions/Application/NavToActivityLog.action")
let blogdemoappcursor_actions_application_navtosupport_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/NavToSupport.action */ "./build.definitions/blogdemoappcursor/Actions/Application/NavToSupport.action")
let blogdemoappcursor_actions_application_onwillupdate_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/OnWillUpdate.action */ "./build.definitions/blogdemoappcursor/Actions/Application/OnWillUpdate.action")
let blogdemoappcursor_actions_application_reset_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/Reset.action */ "./build.definitions/blogdemoappcursor/Actions/Application/Reset.action")
let blogdemoappcursor_actions_application_resetmessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/ResetMessage.action */ "./build.definitions/blogdemoappcursor/Actions/Application/ResetMessage.action")
let blogdemoappcursor_actions_application_usermenupopover_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Application/UserMenuPopover.action */ "./build.definitions/blogdemoappcursor/Actions/Application/UserMenuPopover.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_create_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Create.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Create.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_detail_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Detail.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Detail.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_edit_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Edit.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Edit.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_list_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_List.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_List.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_products_products_createentity_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_CreateEntity.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_CreateEntity.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_products_products_deleteentity_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_DeleteEntity.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_DeleteEntity.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_products_products_updateentity_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_UpdateEntity.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_UpdateEntity.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_service_initializeonline_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnline.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnline.action")
let blogdemoappcursor_actions_blogmobiledemodestination3_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnlineFailureMessage.action")
let blogdemoappcursor_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/CloseModalPage_Cancel.action */ "./build.definitions/blogdemoappcursor/Actions/CloseModalPage_Cancel.action")
let blogdemoappcursor_actions_closemodalpage_complete_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/CloseModalPage_Complete.action */ "./build.definitions/blogdemoappcursor/Actions/CloseModalPage_Complete.action")
let blogdemoappcursor_actions_closepage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/ClosePage.action */ "./build.definitions/blogdemoappcursor/Actions/ClosePage.action")
let blogdemoappcursor_actions_createentityfailuremessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/CreateEntityFailureMessage.action */ "./build.definitions/blogdemoappcursor/Actions/CreateEntityFailureMessage.action")
let blogdemoappcursor_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/blogdemoappcursor/Actions/CreateEntitySuccessMessage.action")
let blogdemoappcursor_actions_deleteconfirmation_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/DeleteConfirmation.action */ "./build.definitions/blogdemoappcursor/Actions/DeleteConfirmation.action")
let blogdemoappcursor_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/blogdemoappcursor/Actions/DeleteEntityFailureMessage.action")
let blogdemoappcursor_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/blogdemoappcursor/Actions/DeleteEntitySuccessMessage.action")
let blogdemoappcursor_actions_genericbannermessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/GenericBannerMessage.action */ "./build.definitions/blogdemoappcursor/Actions/GenericBannerMessage.action")
let blogdemoappcursor_actions_genericmessagebox_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/GenericMessageBox.action */ "./build.definitions/blogdemoappcursor/Actions/GenericMessageBox.action")
let blogdemoappcursor_actions_genericnavigation_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/GenericNavigation.action */ "./build.definitions/blogdemoappcursor/Actions/GenericNavigation.action")
let blogdemoappcursor_actions_generictoastmessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/GenericToastMessage.action */ "./build.definitions/blogdemoappcursor/Actions/GenericToastMessage.action")
let blogdemoappcursor_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Logging/LogUploadFailure.action */ "./build.definitions/blogdemoappcursor/Actions/Logging/LogUploadFailure.action")
let blogdemoappcursor_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/blogdemoappcursor/Actions/Logging/LogUploadSuccessful.action")
let blogdemoappcursor_actions_logging_uploadlog_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Logging/UploadLog.action */ "./build.definitions/blogdemoappcursor/Actions/Logging/UploadLog.action")
let blogdemoappcursor_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/Logging/UploadLogProgress.action */ "./build.definitions/blogdemoappcursor/Actions/Logging/UploadLogProgress.action")
let blogdemoappcursor_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/blogdemoappcursor/Actions/UpdateEntityFailureMessage.action")
let blogdemoappcursor_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./blogdemoappcursor/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/blogdemoappcursor/Actions/UpdateEntitySuccessMessage.action")
let blogdemoappcursor_globals_application_appdefinition_version_global = __webpack_require__(/*! ./blogdemoappcursor/Globals/Application/AppDefinition_Version.global */ "./build.definitions/blogdemoappcursor/Globals/Application/AppDefinition_Version.global")
let blogdemoappcursor_globals_application_applicationname_global = __webpack_require__(/*! ./blogdemoappcursor/Globals/Application/ApplicationName.global */ "./build.definitions/blogdemoappcursor/Globals/Application/ApplicationName.global")
let blogdemoappcursor_globals_application_supportemail_global = __webpack_require__(/*! ./blogdemoappcursor/Globals/Application/SupportEmail.global */ "./build.definitions/blogdemoappcursor/Globals/Application/SupportEmail.global")
let blogdemoappcursor_globals_application_supportphone_global = __webpack_require__(/*! ./blogdemoappcursor/Globals/Application/SupportPhone.global */ "./build.definitions/blogdemoappcursor/Globals/Application/SupportPhone.global")
let blogdemoappcursor_i18n_i18n_de_properties = __webpack_require__(/*! ./blogdemoappcursor/i18n/i18n_de.properties */ "./build.definitions/blogdemoappcursor/i18n/i18n_de.properties")
let blogdemoappcursor_i18n_i18n_en_properties = __webpack_require__(/*! ./blogdemoappcursor/i18n/i18n_en.properties */ "./build.definitions/blogdemoappcursor/i18n/i18n_en.properties")
let blogdemoappcursor_i18n_i18n_es_properties = __webpack_require__(/*! ./blogdemoappcursor/i18n/i18n_es.properties */ "./build.definitions/blogdemoappcursor/i18n/i18n_es.properties")
let blogdemoappcursor_i18n_i18n_properties = __webpack_require__(/*! ./blogdemoappcursor/i18n/i18n.properties */ "./build.definitions/blogdemoappcursor/i18n/i18n.properties")
let blogdemoappcursor_jsconfig_json = __webpack_require__(/*! ./blogdemoappcursor/jsconfig.json */ "./build.definitions/blogdemoappcursor/jsconfig.json")
let blogdemoappcursor_pages_application_about_page = __webpack_require__(/*! ./blogdemoappcursor/Pages/Application/About.page */ "./build.definitions/blogdemoappcursor/Pages/Application/About.page")
let blogdemoappcursor_pages_application_support_page = __webpack_require__(/*! ./blogdemoappcursor/Pages/Application/Support.page */ "./build.definitions/blogdemoappcursor/Pages/Application/Support.page")
let blogdemoappcursor_pages_application_useractivitylog_page = __webpack_require__(/*! ./blogdemoappcursor/Pages/Application/UserActivityLog.page */ "./build.definitions/blogdemoappcursor/Pages/Application/UserActivityLog.page")
let blogdemoappcursor_pages_blogmobiledemodestination3_products_products_create_page = __webpack_require__(/*! ./blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Create.page */ "./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Create.page")
let blogdemoappcursor_pages_blogmobiledemodestination3_products_products_detail_page = __webpack_require__(/*! ./blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Detail.page */ "./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Detail.page")
let blogdemoappcursor_pages_blogmobiledemodestination3_products_products_edit_page = __webpack_require__(/*! ./blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Edit.page */ "./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Edit.page")
let blogdemoappcursor_pages_blogmobiledemodestination3_products_products_list_page = __webpack_require__(/*! ./blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_List.page */ "./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_List.page")
let blogdemoappcursor_pages_main_page = __webpack_require__(/*! ./blogdemoappcursor/Pages/Main.page */ "./build.definitions/blogdemoappcursor/Pages/Main.page")
let blogdemoappcursor_rules_application_appupdatefailure_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Application/AppUpdateFailure.js */ "./build.definitions/blogdemoappcursor/Rules/Application/AppUpdateFailure.js")
let blogdemoappcursor_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/blogdemoappcursor/Rules/Application/AppUpdateSuccess.js")
let blogdemoappcursor_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/blogdemoappcursor/Rules/Application/ClientIsMultiUserMode.js")
let blogdemoappcursor_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/blogdemoappcursor/Rules/Application/GetClientSupportVersions.js")
let blogdemoappcursor_rules_application_getclientversion_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Application/GetClientVersion.js */ "./build.definitions/blogdemoappcursor/Rules/Application/GetClientVersion.js")
let blogdemoappcursor_rules_application_onwillupdate_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Application/OnWillUpdate.js */ "./build.definitions/blogdemoappcursor/Rules/Application/OnWillUpdate.js")
let blogdemoappcursor_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/blogdemoappcursor/Rules/Application/ResetAppSettingsAndLogout.js")
let blogdemoappcursor_rules_blogmobiledemodestination3_products_products_deleteconfirmation_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/BlogMobileDemoDestination3/Products/Products_DeleteConfirmation.js */ "./build.definitions/blogdemoappcursor/Rules/BlogMobileDemoDestination3/Products/Products_DeleteConfirmation.js")
let blogdemoappcursor_rules_logging_loglevels_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Logging/LogLevels.js */ "./build.definitions/blogdemoappcursor/Rules/Logging/LogLevels.js")
let blogdemoappcursor_rules_logging_settracecategories_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Logging/SetTraceCategories.js */ "./build.definitions/blogdemoappcursor/Rules/Logging/SetTraceCategories.js")
let blogdemoappcursor_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/blogdemoappcursor/Rules/Logging/SetUserLogLevel.js")
let blogdemoappcursor_rules_logging_togglelogging_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Logging/ToggleLogging.js */ "./build.definitions/blogdemoappcursor/Rules/Logging/ToggleLogging.js")
let blogdemoappcursor_rules_logging_tracecategories_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Logging/TraceCategories.js */ "./build.definitions/blogdemoappcursor/Rules/Logging/TraceCategories.js")
let blogdemoappcursor_rules_logging_userlogsetting_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Logging/UserLogSetting.js */ "./build.definitions/blogdemoappcursor/Rules/Logging/UserLogSetting.js")
let blogdemoappcursor_rules_service_initialize_js = __webpack_require__(/*! ./blogdemoappcursor/Rules/Service/Initialize.js */ "./build.definitions/blogdemoappcursor/Rules/Service/Initialize.js")
let blogdemoappcursor_services_blogmobiledemodestination3_service = __webpack_require__(/*! ./blogdemoappcursor/Services/BlogMobileDemoDestination3.service */ "./build.definitions/blogdemoappcursor/Services/BlogMobileDemoDestination3.service")
let blogdemoappcursor_styles_styles_css = __webpack_require__(/*! ./blogdemoappcursor/Styles/Styles.css */ "./build.definitions/blogdemoappcursor/Styles/Styles.css")
let blogdemoappcursor_styles_styles_less = __webpack_require__(/*! ./blogdemoappcursor/Styles/Styles.less */ "./build.definitions/blogdemoappcursor/Styles/Styles.less")
let blogdemoappcursor_styles_styles_light_css = __webpack_require__(/*! ./blogdemoappcursor/Styles/Styles.light.css */ "./build.definitions/blogdemoappcursor/Styles/Styles.light.css")
let blogdemoappcursor_styles_styles_light_json = __webpack_require__(/*! ./blogdemoappcursor/Styles/Styles.light.json */ "./build.definitions/blogdemoappcursor/Styles/Styles.light.json")
let blogdemoappcursor_styles_styles_light_nss = __webpack_require__(/*! ./blogdemoappcursor/Styles/Styles.light.nss */ "./build.definitions/blogdemoappcursor/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	blogdemoappcursor_actions_application_appupdate_action : blogdemoappcursor_actions_application_appupdate_action,
	blogdemoappcursor_actions_application_appupdatefailuremessage_action : blogdemoappcursor_actions_application_appupdatefailuremessage_action,
	blogdemoappcursor_actions_application_appupdateprogressbanner_action : blogdemoappcursor_actions_application_appupdateprogressbanner_action,
	blogdemoappcursor_actions_application_appupdatesuccessmessage_action : blogdemoappcursor_actions_application_appupdatesuccessmessage_action,
	blogdemoappcursor_actions_application_logout_action : blogdemoappcursor_actions_application_logout_action,
	blogdemoappcursor_actions_application_navtoabout_action : blogdemoappcursor_actions_application_navtoabout_action,
	blogdemoappcursor_actions_application_navtoactivitylog_action : blogdemoappcursor_actions_application_navtoactivitylog_action,
	blogdemoappcursor_actions_application_navtosupport_action : blogdemoappcursor_actions_application_navtosupport_action,
	blogdemoappcursor_actions_application_onwillupdate_action : blogdemoappcursor_actions_application_onwillupdate_action,
	blogdemoappcursor_actions_application_reset_action : blogdemoappcursor_actions_application_reset_action,
	blogdemoappcursor_actions_application_resetmessage_action : blogdemoappcursor_actions_application_resetmessage_action,
	blogdemoappcursor_actions_application_usermenupopover_action : blogdemoappcursor_actions_application_usermenupopover_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_create_action : blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_create_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_detail_action : blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_detail_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_edit_action : blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_edit_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_list_action : blogdemoappcursor_actions_blogmobiledemodestination3_products_navtoproducts_list_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_products_products_createentity_action : blogdemoappcursor_actions_blogmobiledemodestination3_products_products_createentity_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_products_products_deleteentity_action : blogdemoappcursor_actions_blogmobiledemodestination3_products_products_deleteentity_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_products_products_updateentity_action : blogdemoappcursor_actions_blogmobiledemodestination3_products_products_updateentity_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_service_initializeonline_action : blogdemoappcursor_actions_blogmobiledemodestination3_service_initializeonline_action,
	blogdemoappcursor_actions_blogmobiledemodestination3_service_initializeonlinefailuremessage_action : blogdemoappcursor_actions_blogmobiledemodestination3_service_initializeonlinefailuremessage_action,
	blogdemoappcursor_actions_closemodalpage_cancel_action : blogdemoappcursor_actions_closemodalpage_cancel_action,
	blogdemoappcursor_actions_closemodalpage_complete_action : blogdemoappcursor_actions_closemodalpage_complete_action,
	blogdemoappcursor_actions_closepage_action : blogdemoappcursor_actions_closepage_action,
	blogdemoappcursor_actions_createentityfailuremessage_action : blogdemoappcursor_actions_createentityfailuremessage_action,
	blogdemoappcursor_actions_createentitysuccessmessage_action : blogdemoappcursor_actions_createentitysuccessmessage_action,
	blogdemoappcursor_actions_deleteconfirmation_action : blogdemoappcursor_actions_deleteconfirmation_action,
	blogdemoappcursor_actions_deleteentityfailuremessage_action : blogdemoappcursor_actions_deleteentityfailuremessage_action,
	blogdemoappcursor_actions_deleteentitysuccessmessage_action : blogdemoappcursor_actions_deleteentitysuccessmessage_action,
	blogdemoappcursor_actions_genericbannermessage_action : blogdemoappcursor_actions_genericbannermessage_action,
	blogdemoappcursor_actions_genericmessagebox_action : blogdemoappcursor_actions_genericmessagebox_action,
	blogdemoappcursor_actions_genericnavigation_action : blogdemoappcursor_actions_genericnavigation_action,
	blogdemoappcursor_actions_generictoastmessage_action : blogdemoappcursor_actions_generictoastmessage_action,
	blogdemoappcursor_actions_logging_loguploadfailure_action : blogdemoappcursor_actions_logging_loguploadfailure_action,
	blogdemoappcursor_actions_logging_loguploadsuccessful_action : blogdemoappcursor_actions_logging_loguploadsuccessful_action,
	blogdemoappcursor_actions_logging_uploadlog_action : blogdemoappcursor_actions_logging_uploadlog_action,
	blogdemoappcursor_actions_logging_uploadlogprogress_action : blogdemoappcursor_actions_logging_uploadlogprogress_action,
	blogdemoappcursor_actions_updateentityfailuremessage_action : blogdemoappcursor_actions_updateentityfailuremessage_action,
	blogdemoappcursor_actions_updateentitysuccessmessage_action : blogdemoappcursor_actions_updateentitysuccessmessage_action,
	blogdemoappcursor_globals_application_appdefinition_version_global : blogdemoappcursor_globals_application_appdefinition_version_global,
	blogdemoappcursor_globals_application_applicationname_global : blogdemoappcursor_globals_application_applicationname_global,
	blogdemoappcursor_globals_application_supportemail_global : blogdemoappcursor_globals_application_supportemail_global,
	blogdemoappcursor_globals_application_supportphone_global : blogdemoappcursor_globals_application_supportphone_global,
	blogdemoappcursor_i18n_i18n_de_properties : blogdemoappcursor_i18n_i18n_de_properties,
	blogdemoappcursor_i18n_i18n_en_properties : blogdemoappcursor_i18n_i18n_en_properties,
	blogdemoappcursor_i18n_i18n_es_properties : blogdemoappcursor_i18n_i18n_es_properties,
	blogdemoappcursor_i18n_i18n_properties : blogdemoappcursor_i18n_i18n_properties,
	blogdemoappcursor_jsconfig_json : blogdemoappcursor_jsconfig_json,
	blogdemoappcursor_pages_application_about_page : blogdemoappcursor_pages_application_about_page,
	blogdemoappcursor_pages_application_support_page : blogdemoappcursor_pages_application_support_page,
	blogdemoappcursor_pages_application_useractivitylog_page : blogdemoappcursor_pages_application_useractivitylog_page,
	blogdemoappcursor_pages_blogmobiledemodestination3_products_products_create_page : blogdemoappcursor_pages_blogmobiledemodestination3_products_products_create_page,
	blogdemoappcursor_pages_blogmobiledemodestination3_products_products_detail_page : blogdemoappcursor_pages_blogmobiledemodestination3_products_products_detail_page,
	blogdemoappcursor_pages_blogmobiledemodestination3_products_products_edit_page : blogdemoappcursor_pages_blogmobiledemodestination3_products_products_edit_page,
	blogdemoappcursor_pages_blogmobiledemodestination3_products_products_list_page : blogdemoappcursor_pages_blogmobiledemodestination3_products_products_list_page,
	blogdemoappcursor_pages_main_page : blogdemoappcursor_pages_main_page,
	blogdemoappcursor_rules_application_appupdatefailure_js : blogdemoappcursor_rules_application_appupdatefailure_js,
	blogdemoappcursor_rules_application_appupdatesuccess_js : blogdemoappcursor_rules_application_appupdatesuccess_js,
	blogdemoappcursor_rules_application_clientismultiusermode_js : blogdemoappcursor_rules_application_clientismultiusermode_js,
	blogdemoappcursor_rules_application_getclientsupportversions_js : blogdemoappcursor_rules_application_getclientsupportversions_js,
	blogdemoappcursor_rules_application_getclientversion_js : blogdemoappcursor_rules_application_getclientversion_js,
	blogdemoappcursor_rules_application_onwillupdate_js : blogdemoappcursor_rules_application_onwillupdate_js,
	blogdemoappcursor_rules_application_resetappsettingsandlogout_js : blogdemoappcursor_rules_application_resetappsettingsandlogout_js,
	blogdemoappcursor_rules_blogmobiledemodestination3_products_products_deleteconfirmation_js : blogdemoappcursor_rules_blogmobiledemodestination3_products_products_deleteconfirmation_js,
	blogdemoappcursor_rules_logging_loglevels_js : blogdemoappcursor_rules_logging_loglevels_js,
	blogdemoappcursor_rules_logging_settracecategories_js : blogdemoappcursor_rules_logging_settracecategories_js,
	blogdemoappcursor_rules_logging_setuserloglevel_js : blogdemoappcursor_rules_logging_setuserloglevel_js,
	blogdemoappcursor_rules_logging_togglelogging_js : blogdemoappcursor_rules_logging_togglelogging_js,
	blogdemoappcursor_rules_logging_tracecategories_js : blogdemoappcursor_rules_logging_tracecategories_js,
	blogdemoappcursor_rules_logging_userlogsetting_js : blogdemoappcursor_rules_logging_userlogsetting_js,
	blogdemoappcursor_rules_service_initialize_js : blogdemoappcursor_rules_service_initialize_js,
	blogdemoappcursor_services_blogmobiledemodestination3_service : blogdemoappcursor_services_blogmobiledemodestination3_service,
	blogdemoappcursor_styles_styles_css : blogdemoappcursor_styles_styles_css,
	blogdemoappcursor_styles_styles_less : blogdemoappcursor_styles_styles_less,
	blogdemoappcursor_styles_styles_light_css : blogdemoappcursor_styles_styles_light_css,
	blogdemoappcursor_styles_styles_light_json : blogdemoappcursor_styles_styles_light_json,
	blogdemoappcursor_styles_styles_light_nss : blogdemoappcursor_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Application/AppUpdateFailure.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Application/AppUpdateFailure.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/blogdemoappcursor/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Application/AppUpdateSuccess.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Application/AppUpdateSuccess.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/blogdemoappcursor/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/blogdemoappcursor/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Application/ClientIsMultiUserMode.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Application/ClientIsMultiUserMode.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Application/GetClientSupportVersions.js":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Application/GetClientSupportVersions.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Application/GetClientVersion.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Application/GetClientVersion.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Application/OnWillUpdate.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Application/OnWillUpdate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/blogdemoappcursor/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Application/ResetAppSettingsAndLogout.js":
/*!********************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/blogdemoappcursor/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/BlogMobileDemoDestination3/Products/Products_DeleteConfirmation.js":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/BlogMobileDemoDestination3/Products/Products_DeleteConfirmation.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/blogdemoappcursor/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Logging/LogLevels.js":
/*!************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Logging/LogLevels.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Logging/SetTraceCategories.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Logging/SetTraceCategories.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Logging/SetUserLogLevel.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Logging/SetUserLogLevel.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Logging/ToggleLogging.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Logging/ToggleLogging.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Logging/TraceCategories.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Logging/TraceCategories.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Logging/UserLogSetting.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Logging/UserLogSetting.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Rules/Service/Initialize.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Rules/Service/Initialize.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _BlogMobileDemoDestination3 = context.executeAction('/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnline.action');

  //You can add more service initialize actions here

  return Promise.all([_BlogMobileDemoDestination3]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/blogdemoappcursor/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Styles/Styles.css":
/*!***************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Styles/Styles.css ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Styles/Styles.less":
/*!****************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Styles/Styles.less ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Styles/Styles.light.css":
/*!*********************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Styles/Styles.light.css ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Styles/Styles.light.nss":
/*!*********************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Styles/Styles.light.nss ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/noSourceMaps.js":
/*!***********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/noSourceMaps.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Pages/Application/About.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Pages/Application/About.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/blogdemoappcursor/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/blogdemoappcursor/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/blogdemoappcursor/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/blogdemoappcursor/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/blogdemoappcursor/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Pages/Application/Support.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Pages/Application/Support.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/blogdemoappcursor/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/blogdemoappcursor/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/blogdemoappcursor/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/blogdemoappcursor/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/blogdemoappcursor/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Pages/Application/UserActivityLog.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Pages/Application/UserActivityLog.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/blogdemoappcursor/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/blogdemoappcursor/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/blogdemoappcursor/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/blogdemoappcursor/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/blogdemoappcursor/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/blogdemoappcursor/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/blogdemoappcursor/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/blogdemoappcursor/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Create.page":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Create.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/blogdemoappcursor/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_CreateEntity.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_Products_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"name","_Name":"name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","KeyboardType":"Number","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"a_Supplier_Supplier","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Supplier}","ReturnValue":"{Supplier}","Target":{"EntitySet":"MySupplier","Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service"}},"_Name":"a_Supplier_Supplier","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_Create"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Detail.page":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Detail.page ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/blogdemoappcursor/Rules/BlogMobileDemoDestination3/Products/Products_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Products_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{name}","Subhead":"{price}","BodyText":"","Footnote":"","Description":"{a_Supplier_Supplier}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"name","Value":"{name}","_Type":"KeyValue.Type.Item"},{"KeyName":"price","Value":"{price}","_Type":"KeyValue.Type.Item"},{"KeyName":"a_Supplier_Supplier","Value":"{a_Supplier_Supplier}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_Detail"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Edit.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Edit.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/blogdemoappcursor/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_UpdateEntity.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_Products_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"name","_Name":"name","Value":"{name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","Value":"{price}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"a_Supplier_Supplier","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{Supplier}","ReturnValue":"{Supplier}","Target":{"EntitySet":"MySupplier","Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service"}},"Value":"{a_Supplier_Supplier}","_Name":"a_Supplier_Supplier","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_Edit"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_List.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_List.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Products)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{a_Supplier_Supplier}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Detail.action","StatusImage":"","Title":"{name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{price}","SubstatusText":"","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Products","Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_List"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Pages/Main.page":
/*!*************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Pages/Main.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","Sections":[{"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable1_BlogMobileDemoDestination3","Header":{"_Name":"SectionHeader_BlogMobileDemoDestination3","AccessoryType":"None","UseTopPadding":true,"Caption":"BlogMobileDemoDestination3","_Type":"SectionCommon.Type.Header"},"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Buttons":[{"OnPress":"/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_List.action","Alignment":"Center","Title":"Products","ButtonType":"Text","Semantic":"Tint","_Type":"ButtonTable.Type.Button"}],"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"}}]}],"_Name":"Main","_Type":"Page","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/blogdemoappcursor/Actions/Application/UserMenuPopover.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Main","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"blogdemoappcursor","Version":"/blogdemoappcursor/Globals/Application/AppDefinition_Version.global","MainPage":"/blogdemoappcursor/Pages/Main.page","OnLaunch":"/blogdemoappcursor/Rules/Service/Initialize.js","OnWillUpdate":"/blogdemoappcursor/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/blogdemoappcursor/Rules/Service/Initialize.js","Styles":"/blogdemoappcursor/Styles/Styles.css","Localization":"/blogdemoappcursor/i18n/i18n.properties","_SchemaVersion":"25.9","StyleSheets":{"Styles":{"css":"/blogdemoappcursor/Styles/Styles.light.css","ios":"/blogdemoappcursor/Styles/Styles.light.nss","android":"/blogdemoappcursor/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/blogdemoappcursor/Styles/Styles.light.nss","android":"/blogdemoappcursor/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/AppUpdate.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/AppUpdate.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/blogdemoappcursor/Rules/Application/AppUpdateFailure.js","OnSuccess":"/blogdemoappcursor/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateFailureMessage.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateFailureMessage.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateProgressBanner.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateProgressBanner.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/blogdemoappcursor/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateSuccessMessage.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/AppUpdateSuccessMessage.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/Logout.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/Logout.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/NavToAbout.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/NavToAbout.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/blogdemoappcursor/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/NavToActivityLog.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/NavToActivityLog.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/blogdemoappcursor/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/NavToSupport.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/NavToSupport.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/blogdemoappcursor/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/OnWillUpdate.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/OnWillUpdate.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/Reset.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/Reset.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/ResetMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/ResetMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/blogdemoappcursor/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Application/UserMenuPopover.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Application/UserMenuPopover.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/blogdemoappcursor/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/blogdemoappcursor/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/blogdemoappcursor/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/blogdemoappcursor/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/blogdemoappcursor/Actions/Application/Logout.action","Title":"Logout","Visible":"/blogdemoappcursor/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Create.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Create.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Detail.action":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Detail.action ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Detail.page"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Edit.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_Edit.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_List.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/NavToProducts_List.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/blogdemoappcursor/Pages/BlogMobileDemoDestination3_Products/Products_List.page"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_CreateEntity.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_CreateEntity.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/blogdemoappcursor/Actions/CreateEntityFailureMessage.action","OnSuccess":"/blogdemoappcursor/Actions/CreateEntitySuccessMessage.action","Properties":{"name":"#Page:Products_Create/#Control:name/#Value","price":"#Page:Products_Create/#Control:price/#Value","a_Supplier_Supplier":"#Page:Products_Create/#Control:a_Supplier_Supplier/#SelectedValue"},"Target":{"EntitySet":"Products","Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_DeleteEntity.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_DeleteEntity.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Products","Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/blogdemoappcursor/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/blogdemoappcursor/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_UpdateEntity.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Products/Products_UpdateEntity.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Products","Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service","ReadLink":"{@odata.readLink}"},"Properties":{"name":"#Page:Products_Edit/#Control:name/#Value","price":"#Page:Products_Edit/#Control:price/#Value","a_Supplier_Supplier":"#Page:Products_Edit/#Control:a_Supplier_Supplier/#SelectedValue"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/blogdemoappcursor/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/blogdemoappcursor/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnline.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnline.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/blogdemoappcursor/Services/BlogMobileDemoDestination3.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnFailure":"/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnlineFailureMessage.action":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/BlogMobileDemoDestination3/Service/InitializeOnlineFailureMessage.action ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/CloseModalPage_Cancel.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/CloseModalPage_Cancel.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/CloseModalPage_Complete.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/CloseModalPage_Complete.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/ClosePage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/ClosePage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/CreateEntityFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/CreateEntityFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/CreateEntitySuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/CreateEntitySuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/blogdemoappcursor/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/DeleteConfirmation.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/DeleteConfirmation.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/DeleteEntityFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/DeleteEntityFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/DeleteEntitySuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/DeleteEntitySuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/blogdemoappcursor/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/GenericBannerMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/GenericBannerMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/GenericMessageBox.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/GenericMessageBox.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/GenericNavigation.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/GenericNavigation.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/blogdemoappcursor/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/GenericToastMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/GenericToastMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Logging/LogUploadFailure.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Logging/LogUploadFailure.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Logging/LogUploadSuccessful.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Logging/LogUploadSuccessful.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Logging/UploadLog.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Logging/UploadLog.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/blogdemoappcursor/Actions/Logging/LogUploadFailure.action","OnSuccess":"/blogdemoappcursor/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/Logging/UploadLogProgress.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/Logging/UploadLogProgress.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/blogdemoappcursor/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/UpdateEntityFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/UpdateEntityFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Actions/UpdateEntitySuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Actions/UpdateEntitySuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/blogdemoappcursor/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Globals/Application/AppDefinition_Version.global":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Globals/Application/AppDefinition_Version.global ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Globals/Application/ApplicationName.global":
/*!****************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Globals/Application/ApplicationName.global ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Globals/Application/SupportEmail.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Globals/Application/SupportEmail.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Globals/Application/SupportPhone.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Globals/Application/SupportPhone.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Services/BlogMobileDemoDestination3.service":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Services/BlogMobileDemoDestination3.service ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"BlogMobileDemoDestination3","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{},"PathSuffix":"","SourceType":"Local","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/Styles/Styles.light.json":
/*!**********************************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/Styles/Styles.light.json ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/blogdemoappcursor/jsconfig.json":
/*!***********************************************************!*\
  !*** ./build.definitions/blogdemoappcursor/jsconfig.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});