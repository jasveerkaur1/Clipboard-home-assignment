# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. [DB] Add new column in the Agent Table. 
    1. Details:
        1. Columnn name will be customId (VARCHAR(24)).
        2. Assign default value as internaId.
    2. A/C
        1. Agent Table should have new column as customId (VARCHAR(24))
        2. If the value is not overwritten by UI, then it will contain the internaId as defalut value
    3. Time/Effort details:
        1. 2 days
2. Change in the generateReport, getShiftsByFacility functions
    1. Details:
        1. Make change in the generateReport function, to use customId for generating report
        2. Get customId in the metadata of the getShiftsByFacility
    2. A/C
        1. Report should contain customId.
        2. If we overwrite any customId, then changes should be reflect in the new report renerated
    3. Time/Effort details:
        1. 2 days
3. [UI] Add UI functionality, to add the capability for Facilities to save their own custom ids for each Agent
    1. Details:
        1. Build form to take customId for the corresponding Agent.
        2. The form should be visible to the user type Admin
        2. Use Post API to submit the data
    2. A/C
        1. New Form should be added.
        2. Only Admin should able to navigate to the form & submit
        3. Error/ Success API Response should be handled
    3. Time/Effort details:
        1. 3 days
4. [API] Add POST API
    1. Details:
        1. Add POST API to add customId for a AGENT
        2. Should only be used by Admin user type
        2. handle the Error or Success DB response
    2. A/C
        1. API should be created.
        2. Should only be used by Admin user type
        3. Error/ Success API Response should be handled
    3. Time/Effort details:
        1. 2 days
