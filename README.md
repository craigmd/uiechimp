#UIE Chimp

UIE Chimp is an email marketing tool using the Mail Chimp API designed to allow for segmentation of lists based on Open, Click, and Unsubscribe behaviors.

##<a name="pitfalls"></a>Pitfalls

These issues are yet to be resolved:
   - Race conditions exist throughout the app.  UIE Chimp processes data asynchronously and it should be noted that while certain operations, such as filtering of records, can be executed while data is still loading, others, such as delete operations, should be avoided until all your data has been processed.
   - There is no caching. If you have been pulling large amounts of data for the last hour and the browser is refreshed for closed for some reason, that data will be lost.
   - The app is not fault tolerant.  If the Mail Chimp API is down then expect the app to throw an error, but there will be no indication of this to the user. If you notice unusual behavior then check the status of the API on Mail Chimp's site.
   - There is no primary indicator as to when the app has finished pulling and processing the data, although there are many ancillary indicators the user can monitor to judge if the pull has been completed, such as email count and reordering of records upon entry into the table. If these things haven't happened for quite some time (usually one minute) then it is likely safe to delete records or create a list.
   - The "clear" function for Campaigns currently does not work.

##Using The App

When the app has loaded a few boxes will be empty and awaiting user input.  On the left will be a list of folders which are maintained in Mail Chimp independent of the app.  Upon clicking one of these folders the campaigns for that folder will be pulled from Mail Chimp.  Sometimes this may take 15-30 seconds depending on how many campaigns are in the folder.  These campaigns will appear in the campaigns box.  Clicking on any individual campaign will pull the email activity and unsubscribers from that campaign.  Sometimes this is upwards of 50,000 records. This may take some time to pull and process.  

As the data begins to populate, table column numbers will begin to appear. Each column represents a selected campaign.  The app will sort all columns in chronological order from least to greatest.  Hovering over any column will produce a tooltip with the title of the campaign that column represents.  Each row in the table are the actions taken by the person(s) sent the campaign(s).  A legend is present at the top of the table indicating the color of the possible actions Mail Chimp currently tracks. These actions are not mutually exclusive (more on that later).

###Filtering

Filtering in the app is simple and supports three actions: Opens, Clicks, and Unsubscribes.  It also supports two modes: Greater than or equal to and less than or equal to the numbers present in the fields.  

As an example, say there are 10 campaigns selected with the initial state of the filter at {0, 0, unchecked} and 'below' unchecked. In this state, no address is filtered.  By clicking up on the 'Opens' arrow the app will filter everyone that failed to open at least 1 of the 10 campaigns AND clicked in at least 0 of the campaigns. The 'and' is important because the app is operating under the assumption that the user is concerned with both actions.  By clicking up on the 'Click' arrow the app now filters anyone who failed to open at least 1 campaign AND click in 1 campaign.

If we reset the filter back to the initial state, {0, 0, unchecked}, and switch the mode by clicking the 'below' box then the app is filtering out everyone who opened more than 0 and clicked more than 0 emails (those individuals that took any kind of action at all).  By clicking up on the 'Open' arrow, the app is now filtering fewer people, namely those who opened 1 or less and clicked in 0.  

By clicking the 'Unsub' box, regardless of the current state, the app will limit the scope of all other filters to just those who took the action of unsubscribing.  

###Making a List

Once the user is finished filtering the addresses he/she is not interested in, then a list of the remaining addresses can be made by clicking the 'Make This List' button at the top of the app.  This will spawn a modal asking the user to name the segment and provide a list id.  The list ID is prepopulated with the ID of the 'UIE Subscribers' list.  Clicking the 'Create Segment' button will make a static segment in Mail Chimp.

###Actions

Addresses can take more than one action on a email, but some actions override others in terms of what color is displayed in the action box for that column.  The follow shows the action hierarchy:

  1. Unsubscribe
  2. Bounce
  3. Click
  4. Open
  5. No Action

For example, if someone unsubscribed, clicked, and opened, then their action box would be the unsubscribe color, but a click and an open would be counted when filtering.

##Technologies

The app is designed as an SPA with React/Redux.  It uses a very simple nodejs server with Expressjs.  If you are looking to make improvements to the app then you should be familiar with those technologies.  Things may not be perfect, but neither is the person who wrote it ;). If you decide you want to dev on it, use a webpack-dev-server and call the backend using fetch api with endpoint localhost:4000.  Then the server will talk to Mail Chimp.  Any of the issues listed in the [Pitfalls](#pitfalls) section would be good projects to improve the app.
