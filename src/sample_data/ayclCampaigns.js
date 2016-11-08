export const ayclCampaigns = {
	"campaigns": [
		{
			"id": "xxxxxxxxx",
			"type": "regular",
			"create_time": "2016-10-07T17:57:38+00:00",
			"archive_url": "http://eepurl.com/xxxxxx",
			"long_archive_url": "http://us5.campaign-archive1.com/?u=xxxxxxxxxxx&id=xxxxxxxxx",
			"status": "sent",
			"emails_sent": 14592,
			"send_time": "2016-10-10T19:00:00+00:00",
			"content_type": "html",
			"recipients": {
				"list_id": "382de78e4c",
				"list_name": "UIE Subscribers",
				"segment_text": "<p class=\"!margin--lv0\">Subscribers match <strong>any</strong> of the following conditions:</p><ol id=\"conditions\" class=\"small-meta\"><li class=\"margin--lv1 !margin-left-right--lv0\"><strong>UIE Email Messaging</strong> one of <strong>Virtual Seminars and OnDemand Conference Recordings</strong></li><li class=\"margin--lv1 !margin-left-right--lv0\"><strong>UIE Email Messaging</strong> one of <strong>The All You Can Learn Library</strong></li></ol><span>For a total of <strong>14592</strong> emails sent.</span>",
				"recipient_count": 14592,
				"segment_opts": {
					"match": "any",
					"conditions": [
						{
							"condition_type": "Interests",
							"field": "interests-0121a84f9a",
							"op": "interestcontains",
							"value": [
								"f4da55c9ed"
							]
						},
						{
							"condition_type": "Interests",
							"field": "interests-0121a84f9a",
							"op": "interestcontains",
							"value": [
								"a9b80e256d"
							]
						}
					]
				}
			},
			"settings": {
				"subject_line": "Now Available - Story First: Crafting Products That Engage",
				"title": "AYCLR 10/10/16 - Now Available - Story First: Crafting Products That Engage",
				"from_name": "Jared Spool",
				"reply_to": "jared.m.spool@uie.com",
				"use_conversation": false,
				"to_name": "",
				"folder_id": "xxxxxxxxx",
				"authenticate": true,
				"auto_footer": false,
				"inline_css": true,
				"auto_tweet": false,
				"fb_comments": false,
				"timewarp": false,
				"template_id": 0,
				"drag_and_drop": false
			},
			"tracking": {
				"opens": true,
				"html_clicks": true,
				"text_clicks": false,
				"goal_tracking": false,
				"ecomm360": false,
				"google_analytics": "",
				"clicktale": ""
			},
			"report_summary": {
				"opens": 3515,
				"unique_opens": 2530,
				"open_rate": 0.1737040851356,
				"clicks": 92,
				"subscriber_clicks": 69,
				"click_rate": 0.0047373841400618,
				"ecommerce": {
					"total_orders": 0,
					"total_spent": 0,
					"total_revenue": 0
				}
			},
			"delivery_status": {
				"enabled": true,
				"can_cancel": false,
				"status": "delivered",
				"emails_sent": 14592,
				"emails_canceled": 0
			},
			"_links": [
				{
					"rel": "parent",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns",
					"method": "GET",
					"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Campaigns/Collection.json",
					"schema": "https://us5.api.mailchimp.com/schema/3.0/CollectionLinks/Campaigns.json"
				},
				{
					"rel": "self",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx",
					"method": "GET",
					"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Campaigns/Instance.json"
				},
				{
					"rel": "delete",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx",
					"method": "DELETE"
				},
				{
					"rel": "send",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx/actions/send",
					"method": "POST"
				},
				{
					"rel": "cancel_send",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx/actions/cancel-send",
					"method": "POST"
				},
				{
					"rel": "feedback",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx/feedback",
					"method": "GET",
					"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Campaigns/Feedback/Collection.json"
				},
				{
					"rel": "content",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx/content",
					"method": "GET",
					"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Campaigns/Content/Collection.json"
				},
				{
					"rel": "send_checklist",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx/send-checklist",
					"method": "GET",
					"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Campaigns/Checklist/Collection.json"
				},
				{
					"rel": "pause",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx/actions/pause",
					"method": "POST"
				},
				{
					"rel": "resume",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx/actions/resume",
					"method": "POST"
				},
				{
					"rel": "replicate",
					"href": "https://us5.api.mailchimp.com/3.0/campaigns/xxxxxxxxx/actions/replicate",
					"method": "POST"
				}
			]
		},
	],
	"total_items": 148,
	"_links": [
		{
			"rel": "parent",
			"href": "https://us5.api.mailchimp.com/3.0/",
			"method": "GET",
			"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Root.json"
		},
		{
			"rel": "self",
			"href": "https://us5.api.mailchimp.com/3.0/campaigns",
			"method": "GET",
			"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Campaigns/Collection.json",
			"schema": "https://us5.api.mailchimp.com/schema/3.0/CollectionLinks/Campaigns.json"
		},
		{
			"rel": "create",
			"href": "https://us5.api.mailchimp.com/3.0/campaigns",
			"method": "POST",
			"schema": "https://us5.api.mailchimp.com/schema/3.0/Campaigns/Instance.json"
		}
	]
}
