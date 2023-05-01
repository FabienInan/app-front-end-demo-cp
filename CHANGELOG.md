# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.3.0] (29-12-2022)

- back end : 4.3.0
- front end core : 0.8.3

## [4.0.0] - (19-09-2022)
- back end : 3.8.0
- front end core : 0.8.0

## [3.9.1] - (05-10-2022)
- back end : 3.7.1
- front end core : 0.7.1

## [3.9.0] - (05-09-2022)
- back end : 3.7.0
- front end core : 0.7.0

## [3.8.0] (08-08-2022)

- back end : 3.6.0
- front end core : 0.6.0

## [3.7.1] 04-07-2022

- back end : 3.5.1
- front end core : 0.5.6

## [3.7.0] 20-06-2022

- back end : 3.5.1
- front end core : 0.5.5

## [3.6.2] 17-05-2022

- back end : 3.4.2
- front end core : 0.4.2
 
## [3.6.1] 13-05-2022

- back end : 3.4.2
- front end core : 0.4.1

### Fixed 

- edit mode for event form when the event is duplicate

## [3.6.0] 09-05-2022

- back end : 3.4.2
- front end core : 0.4.0

### Added 

-Standardization of the data grid
-Agenda help modal

### Fixed

-Bug up-down on activities data grid


## [3.5.0] 11-04-2022

- back end : 3.4.2
- front end core : 0.3.2

### Added

- Agenda
- Improvement of the presentation of the activities card on participant side.
- Task to export data on a file
- Ordering of the presentation of the activities: the project team get new buttons to change the display priority of one activity.

### Fixed 

- Display of a loader when data load for all grids.
- New participants have a 'Repéré' status by default.

## [3.3.0]

### Added

- (#311) a loader is displayed when datagrid charge datas
- (#136) events can be managed from agenda page (create, update, moved, delete)

### Fixed

- (#323) remove print export option
- display all notes when no filter selected

### Changed

**tech**

- (#304) Internationalisation

## [3.2.0]

### Added

- (#279) activities by category can be moved (up or down) in list

### Fixed

- (#183) Categories card no more hidden when slide left
- (#18) add i18n

## [3.1.0] - 2022-02-22

- (#231) column in events list are changed

### Added

- (#163) notes filters and search components for logbooks
- (#233) Correction on card style for participants

### Fixed

- (#271) Uniformise navbar comportement and styles
- (#286) add two new status for participant (spotted and on break)
- (#159) participant can see his own profile in logbooks

## [3.0.0] - 2022-01-27

### Added

- (#133) Loading while file upload : disable button and change wording
- (#160 + #240) add logbooks and manage notes for participants
- (#162) add and manage (update, delete, mark as view) comments in a note

## [2.4.0] - 2021-12-10

- (#224) add tests for user and documents store
- add lefthook for pre push test

### Added

- (#226) intervener can duplicate a event, with same attributes but must change date
- (#195) add activitiy's long description visible on hover in activitiesList
- (#208) participant can manifest interest for activity without events
- (#148) add columns to activities grid
- (#219) interveners can handle participants interests for activities

**tech**

- isolation tests of `store.documents.fetchDocuments`

### Fixed

- (#226) can change attendance status if accepted or refused, not only destroy
- (#226) change headCellsEventList
- (#217) incorrect gender displayed in the complete profile form
- (#222) participant button in activity's event card is updated

## [2.3.0] - 2021-11-26

### Changed

**tech**

- compatibility update with focale/app-back-end tag:2.3.0

### Fixed

- (#216) profile panel in participant's journey tab displaying 0 instead of
  the birthdate
- (#217) incorrect gender displayed in the complete profile form

## [2.2.1][2.2.1] - 2021-11-12

### Fixed

- event page not displaying only 10 registrations instead of all

## [2.2.0][2.2.0] - 2021-11-12

### Added

- (#172) event without attendances can be deleted
- (#193) (#194) add a attendance feature for add or remove participant in event
- (#125) add a toggle status button in the activity list
- (#125) add a go-to activity button in the activity list
- (#145) (#176) add a document status panel in the participant's journey tab
- (#170) add events creation
- (#175) add a profile panel in the participant's journey tab

### Changed

**tech**

- (#188) tabs navigation keep current tab in memory
- (#178) refactor and optimize the participant's journey tab

### Fixed

- (#191) the username autocomplete is disabled in profile form
- (#146) the profile form not focused on password field
- (#189) the current sorting of the user lists is now more visible
- (#205) participants' sex not correctly displayed
- (#206) incoherent events displayed for each category

### Known issues

- (#204) new participants have no journey status by default

## [2.1.0][2.1.0] - 2021-11-04

### Added

**security**

- (#115) disable inline React JavaScript
- (#115) configure the Content Security Policy
- (#116) make cookies secure

**features**

- (#156) new journey tab in participants' profile, with status management
- (#154) participants can browse activities categories in a new carousel view
- (#154) social network links on the home page
- (#77) interveners can create activities
- (#151) participant can list activities per category

**build**

- fix several build warnings
- add eslint, with no special configuration

### Changed

- add columns related to participants' journey in participant list

### Fixed

- activities categories not properly updated
- birthdate, entry date, and exit date incorrectly saved

## [2.0.0][2.0.0] - unreleased

### Added

- (#147) interveners can list all activities of a catagory

### Changed

- activities have been renamed categories
- (#152) split the store in several files
- (#147) the quick search field is now reusable

### Fixed

- several build warnings

## [1.3.0] - 2021-09-20

### Added

- (#142) add a quick-search field in the users list
- (#135) the possibility to switch the scope of an uploaded document
- display the birthdate column in the users list

### Changed

- (#102) entry and exit forms now have a save button fixed on the screen
- (#106) (#140) better UI for forms displaying radio choices with an additional text field

### Fixed

- the activities list no longer makes requests over and over the back end
- (#58) (#99) (#117) few error messages not displayed

[3.0.0]: https://gitlab.lica-europe.org/focale/app-front-nextless/-/compare/2.4.0...3.0.0?from_project_id=16
[2.4.0]: https://gitlab.lica-europe.org/focale/app-front-nextless/-/compare/2.3.0...2.4.0?from_project_id=16
[2.3.0]: https://gitlab.lica-europe.org/focale/app-front-nextless/-/compare/2.2.1...2.3.0?from_project_id=16
[2.2.1]: https://gitlab.lica-europe.org/focale/app-front-nextless/-/compare/2.2.0...2.2.1?from_project_id=16
[2.2.0]: https://gitlab.lica-europe.org/focale/app-front-nextless/-/compare/2.1.0...2.2.0?from_project_id=16
[2.1.0]: https://gitlab.lica-europe.org/focale/app-front-nextless/-/compare/2.0.0...2.1.0?from_project_id=16
[2.0.0]: https://gitlab.lica-europe.org/focale/app-front-nextless/-/compare/1.3.0...2.0.0?from_project_id=16

