export const aycl1 = {
	"emails": [
		{
			"campaign_id": "xxxxxxxxx",
			"list_id": "xxxxxxxxx",
			"email_id": "xxxxxxxxx",
			"email_address": "xxxxxxxxx@example.com",
			"activity": [
				{
					"action": "open",
					"timestamp": "2016-10-10T19:09:38+00:00",
					"ip": "xxxxxxxxxx"
				}
			],
			"_links": [
				{
					"rel": "parent",
					"href": "https://us5.api.mailchimp.com/3.0/reports//email-activity",
					"method": "GET",
					"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Reports/EmailActivity/Collection.json"
				},
				{
					"rel": "self",
					"href": "https://us5.api.mailchimp.com/3.0/reports//email-activity/xxxxxxxxx",
					"method": "GET",
					"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Reports/EmailActivity/Instance.json"
				},
				{
					"rel": "member",
					"href": "https://us5.api.mailchimp.com/3.0/lists/xxxxxxxxx/members/xxxxxxxxx",
					"method": "GET",
					"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json"
				}
			]
		},
	],
	"campaign_id": "aycl1",
	"total_items": 14592,
	"_links": [
		{
			"rel": "parent",
			"href": "https://us5.api.mailchimp.com/3.0/reports/aycl1",
			"method": "GET",
			"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Reports/Instance.json"
		},
		{
			"rel": "self",
			"href": "https://us5.api.mailchimp.com/3.0/reports/aycl1/email-activity",
			"method": "GET",
			"targetSchema": "https://us5.api.mailchimp.com/schema/3.0/Reports/EmailActivity/Collection.json"
		}
	]
}
