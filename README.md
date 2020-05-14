This is single page web application to help users create bible reading plans.
I wanted to go for the simplest possible implementation - there's really
no server side logic at all. One benefit of this is that you can run this on
your computer just by loading index.html.

This is basically a large webform that boots the user to a confirmation page,
which contains the bible reading plan.

In terms of JS frameworks, the only libraries used are jQuery and jQuery UI.

In order to switch views, we just hide and show "views". This acts as a very
rudimentary view system. There is of course, no refresh persistence or history
stack as a result of this choice.

Feature list
* P0 - Reading summary text
* P0 - Generating bible reading plan view
* P0 - "Print" button on reading plan view
* P0 - "Read psalms in parallel" extra option
* P0 - "Read psalms daily" extra option
* P1 - Refactor code to be a little more sane
* P1 - Adjust fonts to be better lookin'
* P1 - Links to biblehub or esv.org in reading plan
* P1 - Checkboxes to select/unselect all OT/NT
* P1 - "Read OT/NT in Parallel" extra option
* P1 - Read at "XY pace" instead of "suggest ending date" 
* P2 - More aesthetic datepicker
* P2 - "Read in [TaNaK/Chronological] order" extra option radio list
* P2 - View persistence and sharing for reading plan
* P3 - More aesthetic checkboxes
* P3 - Contact button for suggesting changes
* P3 - "Read in X order" changes checkboxes
* P3 - "Days of week" extra options
* P3 - Suggested reading plans