*** Settings ***
Force Tags        Today backlog
Resource          ../Common/Function/common.txt
Resource          Function/personal.txt
Resource          Function/today_backlog.txt

*** Test Cases ***
The backlog should display some actions
    Given I go to site
    When I go to Personal
    And I wait for actions in Today Backlog
    Then Page Should Contain    [${ENV}] ${ACTION1.title}
    And Page Should Contain    [${ENV}] ${ACTION2.title}
    [Teardown]    Teardown

Details of an action should be viewed in backlog
    Given I go to site
    When I go to Personal
    And I wait for actions in Today Backlog
    Then following elements of action are displayed    &{ACTION2}
    [Teardown]    Teardown

Action can be edited by a button
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click edit button    &{ACTION2}
    Then action form should contain    &{ACTION2}
    [Teardown]    Teardown

Action can be edited by a link
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click edit link    &{ACTION2}
    Then action form should contain    &{ACTION2}
    [Teardown]    Teardown

Action can be modified with an edit form
    [Tags]    EDIT
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click edit link    &{ACTION2}
    And I input values in action form    &{ACTION2MOD}
    And I click save button    &{ACTION2}
    Then following elements of action are displayed    &{ACTION2MOD}
    [Teardown]    Teardown

Modification of action can be undone by pressing close button
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click edit link    &{ACTION2}
    And I input values in action form    &{ACTION2MOD}
    And I click close button    &{ACTION2}
    Then following elements of action are displayed    &{ACTION2}
    [Teardown]    Teardown

Action can be added with an edit form
    [Tags]    EDIT
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click add button
    And I input values in action form    &{ACTION3ADD}
    And I click save button    &{ACTION3ADD}
    Then following elements of action are displayed    &{ACTION3ADD}
    [Teardown]    Teardown

Adding an action can be undone by pressing close button
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click add button
    And I input values in action form    &{ACTION3ADD}
    And I click close button    &{ACTION3ADD}
    Then Page Should Not Contain    ${ACTION3ADD.title}
    [Teardown]    Teardown

Action can be removed with a modal message
    [Tags]    EDIT
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click delete button    &{ACTION2}
    And I confirm delete modal    &{ACTION2}
    Then Page Should Not Contain    ${ACTION2.title}
    [Teardown]    Teardown

Deleting an action can be undone when I do not confirm
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click delete button    &{ACTION2}
    And I do not confirm delete modal    &{ACTION2}
    Then Page Should Contain    ${ACTION2.title}
    [Teardown]    Teardown

Deleting an action can be undone when I close confirm modal
    Given I go to site
    And I go to Personal
    And I wait for actions in Today Backlog
    When I click delete button    &{ACTION2}
    And I close delete modal    &{ACTION2}
    Then Page Should Contain    ${ACTION2.title}
    [Teardown]    Teardown
