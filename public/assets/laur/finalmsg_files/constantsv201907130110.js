
/** @namespace */
/**
 * This module contains all constants used throughout the app.
 */
define('constants', [
	'facade.collection',
	'staticConstants'
], function(_$Collection, staticConstants) {
'use strict';

	/**
	 * Application constants.
	 *
	 * @public
	 * @name CONSTANTS
	 * @namespace CONSTANTS
	 */
	var _constants = {

		BASE_URL: '/lang/en/',

		/**
		 * Events relating to saving states of the member's interface. These use the
		 * /rest/member/state REST service listed above.
		 * @public
		 * @name CONSTANTS.SAVE_PREF
		 * @namespace Save preferences
		 */
		SAVE_PREF: {

			/**
			 * Called when a member hides/shows a widget.
			 * @public
			 * @name CONSTANTS.SAVE_PREF.WIDGET_TOGGLE_VISIBILITY
			 */
			WIDGET_TOGGLE_VISIBILITY: {
				KEY: 'toggle-widget-visibility',
				HIDE: 'hide',
				SHOW: 'show'
			},
			/**
			 * @public
			 * @name CONSTANTS.SAVE_PREF.SPENDING_ANALYSIS
			 */
			SPENDING_ANALYSIS: {
				/**
				 * When member chooses a different visualization format for the Spending Analysis Widget
				 * @public
				 * @name CONSTANTS.SAVE_PREF.SPENDING_ANALYSIS.CHART_TYPE
			 	 */
				CHART_TYPE: {
					KEY: 'toggle-spending-analysis-chart-type',
					PIE: 'pie',
					BAR: 'bar'
				},
				/**
				 * @public
				 * @name CONSTANTS.SAVE_PREF.SPENDING_ANALYSIS.CONFIG
				 */
				CONFIG: {
					KEY: 'spending-analysis-config-list'
				}
			},

			/**
			 * Called when a member chooses to show/hide their default budgets in Component-ManageBudgets.
			 * @public
			 * @name CONSTANTS.SAVE_PREF.MANAGE_BUDGETS_DEFAULT_BUDGETS_VISIBILITY
			 */
			MANAGE_BUDGETS_DEFAULT_BUDGETS_VISIBILITY: {
				KEY: 'toggle-manage-budgets-defaults-visibility',
				HIDE: 'hide',
				SHOW: 'show'
			},

			/**
			 * Keeps track of whether the onboarding modal should appear for a user or not.
			 * @public
			 * @name EVENTS.SAVE_PREF.ONBOARDING_VISIBILITY
			 */
			ONBOARDING_VISIBILITY: {
				KEY: 'onboarding-visibility',
				HIDE: '1',
				RESET: '0'
			},
			/**
			 * Keeps track of which membership is active.
			 * @public
			 * @name EVENTS.SAVE_PREF.ACTIVE_MEMBERSHIP
			 */
			ACTIVE_MEMBERSHIP : {
			    KEY: 'UserPreferred_AccountGroup'
			}
		},

		PFM_CATEGORIES: {
			TYPE_NAMES: {
				'1': '---',
				'2': 'INCOME CATEGORIES',
				'3': 'SPENDING CATEGORIES',
				'4': 'TRANSFER CATEGORIES',
				'5': 'DEFERRED COMPENSATION CATEGORIES'
			},
			ORDERING: [3,2,4,5,1],
			UNCATEGORIZED: {
				ID: 1,
				NAME: 'Uncategorized',
				TYPE_ID: 1,
				TYPE_NAME: '---'
			},
			INCOME: {
				TYPE_ID: 2,
				TYPE_NAME:  'INCOME CATEGORIES'
			},
			SPENDING: {
				TYPE_ID: 3,
				TYPE_NAME:  'SPENDING CATEGORIES'
			},
			TRANSFER: {
				TYPE_ID: 4,
				TYPE_NAME:  'TRANSFER CATEGORIES'
			},
			DEFERRED: {
				TYPE_ID: 5,
				TYPE_NAME:  'DEFERRED COMPENSATION CATEGORIES'
			}
		},

		/**
		 * Default settings for the HighCharts plugin.
		 * @pubic
		 * @name CONSTANTS.HIGHCHARTS
		 * @namespace HighCharts properties
		 */
		HIGHCHARTS:{
			CHART_BG_COLOR: '#024F7B',
			CHART_BG_OPACITY: '0',
			TITLE_COLOR:'#474747',
			TITLE_FONT:'bold 16px \"Lucida Grande\",\"Lucida Sans Unicode\",Helvetica,Arial,Verdana,sans-serif',
			SUBTITLE_COLOR:'#474747',
			SUBTITLE_FONT:'bold 12px \"Lucida Grande\",\"Lucida Sans Unicode\",Helvetica,Arial,Verdana,sans-serif',
			COLOURS: [
				'#3366CC',
				'#DC3912',
				'#FF9900',
				'#109618',
				'#990099',
				'#0099C6',
				'#DD4477',
				'#66AA00',
				'#B82E2E',
				'#316395',
				'#994499',
				'#FF9900'
			],
			LEGEND_FONT:'9pt \"Lucida Grande\",\"Lucida Sans Unicode\",Helvetica,Arial,Verdana,sans-serif',
			LEGEND_HOVER_COLOR:'#003366',
			LEGEND_HIDDEN_COLOR:'#A8A8A8',
			LABELS_COLOR:'#474747',
			LABELS_SIZE:'10px',
			GRAPH_LABEL_TEXT_COLOR:'#FFFFFF',
			FONT_FAMILY: '\"Lucida Grande\",\"Lucida Sans Unicode\",Helvetica,Arial,Verdana,sans-serif',
			THEME: {
				NORMAL_COLOR: '#DDDDDD',
				HOVER_COLOR: '#2B78E4',
				SELECTED_COLOR: '#9FC5F8',
				BACKGROUND_HOVER_COLOR: '#CAE1FF',
				BACKGROUND_SELECTED_COLOR: '#E7F1FE',
				AXIS_COLOR: '#CFCFCF'
			}
		},

		/** 
		 * Common text to make global but isn't bound to a component.
		 * @public
		 * @name CONSTANTS.TEXT
		 * @namespace Text
		 */
		TEXT: {

			/**
			 * Yodlee error messages.
			 * @public
			 * @constants
			 * @name CONSTANTS.TEXT.YODLEE_ERROR
			 */
			 YODLEE_ERROR: {

			 	/**
			 	 * Error codes
			 	 * @public
			 	 * @constants
			 	 * @name CONSTANTS.TEXT.YODLEE_ERROR.ERROR_CODES
			 	 */
			 	ERROR_CODES: {
			 		400: 'Problem Updating Account (400): Due to technical reasons, your account could not be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		401: 'Problem Updating Account (401): Your request has timed out due to technical issues. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		402: 'Credential Re-Verification Required (402): The username and/or password entered are incorrect. Your password can be recovered at the %1 site or <a class=\"YodleeUpdateCredential\" href=\"#UpdateCredential\">update your credentials</a>.',
			 		403: 'Problem Updating Account (403): Due to problems with the %1 site, your account could not be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		404: 'Problem Updating Account (404): Due to temporary technical issues, your account could not be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		405: 'Update Request Cancelled (405): Your request was cancelled. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		406: 'Problem Updating Account (406): The %1 site requires you log-in before your account can be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		407: 'Your %1 account has been locked due to unsuccessful log-in attempts. Updates to the account could not be performed. Please visit the site or contact the organization or <a class=\"YodleeRefresh\" href=\"#Refresh\">try again</a> to refresh your account details.',
			 		408: 'Account Not Found (408): No accounts were found at the %1 site. Please contact the organization or <a class=\"YodleeRefresh\" href=\"#Refresh\">try again</a> to refresh your account details.',
			 		409: 'Problem Updating Account (409): Your account could not be updated because the %1 site is experiencing technical difficulties. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		411: 'Site No Longer Available (411): The %1 site no longer provides online services to customers. Please delete this account.',
			 		412: 'Problem Updating Account (412): Your account could not be updated because the %1 site is experiencing technical difficulties. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		413: 'Problem Updating Account (413): Due to problems with the %1 site, your account could not be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		414: 'Requested Account Type Not Found (414): The account requested at the %1 site could not be found. Please review your request and <a class=\"YodleeRefresh\" href=\"#Refresh\">try again</a> to refresh your account details.',
			 		415: 'Problem Updating Account (415): Your account could not be updated because the %1 site is experiencing technical difficulties. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		416: 'Multiple User Sign-Ins (416): Your account cannot be updated because you are already signed into the account. Please log-off and <a class=\"YodleeRefresh\" href=\"#Refresh\">try again</a> to refresh your account details.',
			 		417: 'Account Not Supported (417): This type of account is not currently supported. However, you can manually add an asset or liability value.',
			 		418: 'Problem Updating Account (418): Your account could not be updated because the %1 site is experiencing technical difficulties. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		419: 'Problem Updating Account (419): Due to problems with the %1 site, your account could not be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		420: 'Credential Re-Verification Required (420): The %1 site has changed. Please <a class=\"YodleeUpdateCredential\" href=\"#UpdateCredential\">update your credentials</a>.',
			 		421: 'Invalid Language Setting (421): The language settings of your %1 account must be in English. Please adjust your settings at the %1 site and <a class=\"YodleeRefresh\" href=\"#Refresh\">try again</a> to refresh your account details.',
			 		422: 'Account Reported Closed (422):  One of the accounts associated with %1 has been closed. Please delete the relevant account.',
			 		423: 'Account Not Found (423): The account requested could not be found. Please verify that account information is available or contact customer service at %1 then <a class=\"YodleeRefresh\" href=\"#Refresh\">try again</a> to refresh your account details.',
			 		424: 'Site Down for Maintenance (424): The %1 site is being serviced. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		425: 'Problem Updating Account (425): Due to technical issues with the %1 site, your account could not be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		426: 'Problem Updating Account (426): Due to technical reasons, your account could not be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		427: 'Re-Verification Required (427): The %1 site requires you to log-in before your account can be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		428: 'Re-Verification Required (428): The %1 site has revised its Terms and Conditions. You must log-in to the site before your account can be updated. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		429: 'Re-Verification Required (429): The %1 site requires verification of your personal information. Please log-in to the site to update the required fields. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		430: 'Site No Longer Supported (430): This site is no longer supported. Please delete this account.',
			 		433: 'Linking Process Requires Attention (433): Linking with the %1 site is incomplete. Please follow the instructions sent to your email to complete the process. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		434: 'Linking Process Requires Attention (434): The linking of your account is incomplete. Please verify the information entered to complete the process. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		435: 'Linking Process Requires Attention (435): The linking of your account is incomplete. Please verify the information entered to complete the process. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		436: 'Account Already Linked (436): The account is already linked.',
			 		499: 'Action Required (499): You have entered credentials for your %1 account. Please <a class=\"YodleeUpdateCredential\" href=\"#UpdateCredential\">update your credentials</a> for your %1 to complete the process.',
			 		505: 'Site Not Supported (505): Security used by this site isn\'t supported by %1.',
			 		506: 'New Sign-in Information Required (506): Personal verification is required before you can log-in to this site. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		507: 'Problem Updating Account (507): %1 has just recently started to provide transaction updates. It may take a few days for changes to be reflected in your account. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		508: 'Request Timed Out (508): Due to technical reasons, your request timed out. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details.',
			 		509: 'Site Device Information Expired (509): The information provided is invalid. %1 was unable to update your account.',
			 		517: 'Problem Updating Account (517): %1 could not update your account due to technical reasons. <a class=\"YodleeRefresh\" href=\"#Refresh\">Try again</a> to refresh your account details..',
			 		518: 'Re-Verification Required (518): The security information entered is incorrect. Please review your account settings and <a class=\"YodleeUpdateCredential\" href=\"#UpdateCredential\">update your credentials</a>.',
			 		519: 'Manual Update Required (519): Security information is required to log-in to this site. Please <a class=\"YodleeUpdateCredential\" href=\"#UpdateCredential\">update your credentials</a>.',
			 		520: 'Re-Verification Required (520): The security information entered is incorrect. Please <a class=\"YodleeUpdateCredential\" href=\"#UpdateCredential\">update your credentials</a>.',
			 		521: 'Credentials Required (521): The %1 site has introduced a security authentication system that requires additional information. When updated, please review your account settings in %1, then <a class=\"YodleeRefresh\" href=\"#Refresh\">try again</a> to refresh your account details.',
			 		522: 'Request Timed Out (522): Your request has timed out. <a class=\"YodleeRefresh\" href=\"#Refresh\">try again</a> to refresh your account details.',
			 		523: 'Invalid Credentials (523): The security information entered is incorrect. Please <a class=\"YodleeUpdateCredential\" href=\"#UpdateCredential\">update your credentials</a>.',
			 		524: 'Credentials Expired (524): The security information entered has expired. Please <a class=\"YodleeUpdateCredential\" href=\"#UpdateCredential\">update your credentials</a>.',
					801: 'Please refresh the page to view this account.',
			 		802: 'Updating Account: We are in the process of updating your account with revised credentials.',
                    YodleePartnerAccountsNotAvailable: 'There is a problem connecting to your %1 accounts. Some transactions may be unavailable until the problem is resolved.'
			 	}

			},

			/**
			 * Text for form validation.
			 * @public
			 * @constants
			 * @name CONSTANTS.TEXT.FORM_VALIDATION
			 */
			FORM_VALIDATION: {
				REQUIRED: 'This field is required.',
				ALPHA: 'Only alphabetical characters allowed.',
				ALPHAWS: 'Only alphabetical and space characters allowed.',
				ALPHANUMERIC: 'Only alphanumeric characters allowed.',
				ALPHANUMERICWS: 'Only alphanumeric and space characters allowed.',
				EMAIL: 'Incorrect format.',
				PHONE: 'Incorrect format.',
				NUMERIC: 'Must be a numeric value.',
				INTEGER: 'Must be a numeric integer value.',
				MONETARY: 'Must be a monetary value.',
				REGEX: 'Incorrect format.',
				LENGTH: 'Incorrect number of characters.',
				RANGE: 'Value out of range.',
				UNIQUE: 'Value must be unique.'
			},

			/**
			 * Labels for months of the year
			 * @public
			 * @constants
			 * @name CONSTANTS.TEXT.MONTHS
			 */
			MONTHS: {
				FULL: 'January,February,March,April,May,June,July,August,September,October,November,December',
				SHORT: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
			}
		},

		/**
		 * Widget-specific, CU-overridable settings.
		 * TODO: move these to their respective ...-Control.properties files
		 * @public
		 * @name CONSTANTS.WIDGETS
		 * @namespace Widgets
		 */
		WIDGETS: {
			NOTIFICATIONS: {
				DISPLAY_DURATION: 2500
			},

			MODAL: {
				FADE_IN_TIME: 500,
				FADE_OUT_TIME: 500
			}
		},

		/**
		 * opt in out setting-specific, CU-overridable settings.
		 * constants
		 * @public
		 * @name CONSTANTS.PFM_OPT_IN_OUT
		 * @namespace pfm opt in out setting
		 */
		PFM_OPT_IN_OUT: {
			FREEZE_TIME: 24
		},

		/**
		 * @public
		 * @constants
		 * @name CONSTANTS.INSTITUTION
		 * @namespace Institution settings
		 */
		INSTITUTION: {
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.AGGREGATE_EXTERNAL_ACCOUNTS
			 */
			AGGREGATE_EXTERNAL_ACCOUNTS: false,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.MOBILE_APP
			 */
			MOBILE_APP: false,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.MOBILE_WEB
			 */
			MOBILE_WEB: false,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.MANAGE_PARTNERS
			 */
			MANAGE_PARTNERS: false,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.GROUPS
			 */
			GROUPS: false,
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.INSTITUTION.SWITCH_LOGIN
			 */
			SWITCH_LOGIN: true

		},
		/**
		 * @public
		 * @constants
		 * @name CONSTANTS.CALCULATORS
		 * @namespace
		 */
		CALCULATORS: {
			/**
			 * @public
			 * @constants
			 * @name CONSTANTS.CALCULATORS
			 * @namespace
			 */
			RETIREMENT: {
				goalSavingsHighchartColor: "#4572a7",
				projectedSavingsHighchartColor: "#AA4643"
			}
		},

		/**
		 * @public
		 * @constants
		 * @name CONSTANTS.BRAND
		 * @namespace
		 */
		BRAND: {
			BRANCH_ATM_LOCATOR: {
				ATM_ICON_COLOUR: "#8D8D8D",
				BRANCH_ICON_COLOUR: "#e8e8e8"
			}
		},

		/**
		 * @public
		 * @constants
		 * @name CONSTANTS.TWOSS
		 */
		TWOSS: {
			ENABLED: false,
			HARD_TOKEN: false
		}
	};
	return _$Collection.extend(true, _constants, staticConstants);
});

