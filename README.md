# Timezone Clock

A beautiful digital clock application that displays the current time across multiple time zones around the world.

## Features

🌍 **Multiple Timezones**
- Displays 12 major cities across different continents
- Real-time updates every second
- Shows timezone abbreviations

⏰ **Local Time Display**
- Shows your local time in a prominent display
- Includes current date and day of the week
- Large, easy-to-read format

🎨 **Beautiful Design**
- Modern gradient background
- Responsive grid layout
- Smooth hover effects
- Mobile-friendly interface

## Supported Cities

- 🗽 New York (EST/EDT)
- 🇬🇧 London (GMT/BST)
- 🇫🇷 Paris (CET/CEST)
- 🗾 Tokyo (JST)
- 🇦🇪 Dubai (GST)
- 🇦🇺 Sydney (AEDT/AEST)
- 🇭🇰 Hong Kong (HKT)
- 🌴 Los Angeles (PST/PDT)
- 🌽 Chicago (CST/CDT)
- 🇹🇭 Bangkok (ICT)
- 🇨🇦 Toronto (EST/EDT)
- 🇸🇬 Singapore (SGT)

## How to Use

1. Open `index.html` in your web browser
2. The clocks will automatically display current time in each timezone
3. Your local time is displayed prominently at the bottom
4. Times update in real-time every second

## Technical Details

- Built with vanilla HTML, CSS, and JavaScript
- Uses the Intl.DateTimeFormat API for accurate timezone conversion
- No external dependencies
- Fully responsive design
- Works on all modern browsers

## How It Works

The application uses JavaScript's `Intl.DateTimeFormat` API to convert the current time to different timezones. This ensures accurate time conversion accounting for daylight saving time and other timezone adjustments.

```javascript
const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'America/New_York'
});
```

Enjoy keeping track of time around the world! ⏰