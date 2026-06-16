# Website Error Report

Overview

A review of the website codebase identified multiple functional bugs, UI/UX issues, broken links, compatibility concerns, performance issues, and a potential security vulnerability.

A total of 16 confirmed issues and 2 additional developer-noted concerns were identified across the following files:

 index.html
 script.js
 styles.css

---

Confirmed Issues

1. Submit Application Button Becomes Invisible on Hover

File: styles.css

The Submit Application button becomes invisible when hovered, making it appear as if the button has disappeared.

Impact

 Confusing user experience
 May discourage form submissions

---

2. False Console Error Message

File: script.js

The browser console displays a "Server failed to respond" error even when no actual error has occurred.

Evidence

> ❌ Server failed to respond!

Impact

 Misleading debugging information
 Makes troubleshooting more difficult

---

3. Random Form Submission Failure

File: script.js

The application form contains a built-in random failure mechanism that causes submissions to fail approximately 30% of the time.

Impact

 Lost applications
 Frustrated users
 Increased support requests

---

4. Textarea Does Not Auto-Resize Correctly

File: index.html

The textarea does not automatically expand as users enter more content.

Impact

 Reduced usability
 Poor experience for longer submissions

---

5. Incorrect Navbar Offset Calculation

File: script.js

The navigation system uses a fixed offset value instead of calculating the actual navbar height.

Impact

 Incorrect scroll positioning
 Navigation may become inaccurate if the navbar size changes

---

6. Footer and Social Links Are Missing Destinations

File: index.html

Several footer and social media links do not contain valid destinations and therefore lead nowhere.

Impact

 Broken navigation
 Reduced accessibility to important pages and social profiles

---

7. Input Fields Cause Horizontal Overflow

File: styles.css

Input fields are wider than their intended container, causing horizontal scrolling and layout issues.

Impact

 Poor responsive design
 Mobile usability issues

---

8. Missing Input Sanitization

File: script.js

User input is not properly sanitized before being processed or displayed.

Impact

 Potential security vulnerability
 Risk of malicious input being executed

---

9. Navigation Links Use Incorrect Font Weight on Initial Load

File: index.html

Navigation links initially render with incorrect font styling before loading correctly.

Impact

 Visual inconsistency
 Less polished appearance

---

10. Hero Overlay Gradient May Cause Safari Compatibility Issues

File: index.html

A developer warning indicates that the hero section gradient may trigger CSS parsing issues in older Safari browsers.

Impact

 Possible rendering problems on older Safari versions

---

11. Event Card Animation Breaks on WebKit Browsers

File: index.html

A developer note indicates that one of the card animations does not function correctly on WebKit-based browsers.

Impact

 Broken visual effects
 Inconsistent browser experience

---

12. Second Event Card Missing Description

File: index.html

The second event card lacks description text.

Impact

 Missing information for users
 Incomplete content presentation

---

13. Footer Social Icons Not Clickable on Small Screens

File: index.html

Footer social icons may become unclickable on smaller mobile devices.

Impact

 Reduced mobile usability
 Broken social navigation

---

14. Navbar Opacity Flickers During Initial Page Load

File: script.js

During testing, the navigation bar briefly flickers as the page loads. This behavior matches a developer comment indicating random opacity blinking during the initial render.

Impact

 Unpolished visual appearance
 Noticeable UI flicker during startup

---

15. Layout Forced Before Page Fully Loaded

File: script.js

The browser reports that layout calculations are being performed before all resources have fully loaded.

Evidence

> Layout was forced before the page was fully loaded. If stylesheets are not yet loaded this may cause a flash of unstyled content.

Impact

 Possible Flash of Unstyled Content (FOUC)
 Brief visual glitches during page load
 Reduced perceived performance

---

16. False Input Parameter Warning

File: script.js

The website displays an input parameter warning even when no actual validation issue has occurred.

Evidence

> Potential issue detected: check input parameters.

Investigation revealed that the warning is executed without a condition, causing it to appear regardless of whether the input is valid or invalid.

Impact

 Misleading debugging information
 Makes genuine validation issues harder to identify
 Creates unnecessary console noise

---

Additional Developer Notes

The following issues were found in developer comments but could not be consistently reproduced during testing:

| File        | Issue                                                    |
| ----------- | -------------------------------------------------------- |
| script.js | Elements may become undefined when loaded asynchronously |
| script.js | Navigation menu transition may lag on older devices      |

---

Conclusion

The investigation identified 16 confirmed issues affecting functionality, user experience, responsiveness, browser compatibility, performance, and security.
Addressing these issues would significantly improve the website's reliability, security, performance, and overall user experience.
