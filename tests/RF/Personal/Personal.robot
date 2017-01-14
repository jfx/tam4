*** Settings ***
Resource          ../Common/Function/common.txt
Resource          Function/personal.txt

*** Test Cases ***
Titles
    Given I go to site
    When I go to Personal
    Then Page Should Contain    Sprint backlog
    And Page Should Contain    Todo today
    [Teardown]    Teardown
