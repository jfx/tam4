*** Settings ***
Force Tags        Sprint backlog
Resource          ../Common/Function/common.txt
Resource          Function/personal.txt
Resource          Function/sprint_backlog.txt

*** Test Cases ***
The backlog should display some actions
    Given I go to site
    When I go to Personal
    And I wait for actions in Sprint Backlog
    Then Page Should Contain    [${ENV}] ${ACTION1.title}
    And Page Should Contain    [${ENV}] ${ACTION2.title}
    [Teardown]    Teardown

Details of an action should be viewed in backlog
    Given I go to site
    When I go to Personal
    And I wait for actions in Sprint Backlog
    Then following elements of action are displayed    &{ACTION2}
    [Teardown]    Teardown

Action can be edited by a button
    Given I go to site
    And I go to Personal
    And I wait for actions in Sprint Backlog
    When I click edit button    &{ACTION2}
    Then action form should contain    &{ACTION2}
    [Teardown]    Teardown

Action can be edited by a link
    Given I go to site
    And I go to Personal
    And I wait for actions in Sprint Backlog
    When I click edit link    &{ACTION2}
    Then action form should contain    &{ACTION2}
    [Teardown]    Teardown

Action can be modified with an edit form
    [Tags]    EDIT
    Given I go to site
    And I go to Personal
    And I wait for actions in Sprint Backlog
    When I click edit link    &{ACTION2}
    And I input values in action form    &{ACTION2MOD}
    And I click save button    &{ACTION2}
    Then following elements of action are displayed    &{ACTION2MOD}
    [Teardown]    Teardown

Modification of action can be undone by pressing close button
    Given I go to site
    And I go to Personal
    And I wait for actions in Sprint Backlog
    When I click edit link    &{ACTION2}
    And I input values in action form    &{ACTION2MOD}
    And I click close button    &{ACTION2}
    Then following elements of action are displayed    &{ACTION2}
    [Teardown]    Teardown
