var VObject = require('./index');

var calendar = VObject.calendar();
var event = VObject.event();
event.setSummary('Hello World!');
event.setDescription('(made with Sunrise)');

// Date
var dateTime = VObject.dateTime();
dateTime.parseISO8601('1986-10-18T13:00:00+02:00');
event.setDTStart(dateTime);

// Attendees
var attendee = VObject.attendee();
attendee.setCN('Pierre Valade');
attendee.setMail('user@domain.com');
attendee.setPartStat('ACCEPTED');
event.addAttendee(attendee);

// ICS
calendar.addComponent(event);
console.log(calendar.toICS());