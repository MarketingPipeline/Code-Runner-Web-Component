# Changelog

All notable changes to this project will be documented in this file.

## [1.0.5] - (June 30, 2023)

This release of the Code Runner Web Component addresses solves a small but major bug fix that was not caught in the last version -

- Solves shared state variable [issue](https://github.com/MarketingPipeline/Code-Runner-Web-Component/issues/6#issue-1698796306)


## [1.0.4] - (May 3, 2023)

This release of the Code Runner Web Component has the following changes which includes bug fixes from the previous version - 

- Fixed / changed ```querySelector``` used for the input value. (Using the text value from AceEditor API - as of now).
- Updated runtime versions to match the current Piston API runtimes. 
- Added support / fix for using Node.JS run-time. 
- Other small bug fixes.

## [1.0.3] - (Apr 10, 2023)

This release of the Code Runner Web Component has the following major improvements -

### Added

- ANSI escape code support via ```ansi-up```
- Ace Editor
- Border-radius to web component text area / input area.

## [1.0.2] - (Nov 12, 2022)

This release of the Code Runner Web Component has the following changes. 

### Removed

- Removes some poor / un-needed code.
- Removes the version attribute (via auto-detection for language name)

## [1.0.1] - (Sept 29, 2022)

This release of the Code Runner Web Component addresses / fixes the following issues -

### Added

- Added missing feature for copy code button!

- Fixed missing icons for buttons.



## [1.0.0] - (Sept 23, 2022)

Initial Release.


<!--
These Markdown anchors provide a link to the diff for each release. They should be
updated any time a new release is cut.
-->
[1.0.5]: /v1.0.5
[1.0.4]: /v1.0.4
[1.0.3]: /v1.0.3
[1.0.2]: /v1.0.2
[1.0.1]: /v1.0.1
[1.0.0]: /v1.0.0
