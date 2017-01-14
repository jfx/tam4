*** Settings ***
Resource          ../Common/Function/common.txt
Resource          Function/dashboard.txt

*** Test Cases ***
Greetings
    Given I go to site
    When I go to Dashboard
    Then Page Should Contain    Hello !
    [Teardown]    Teardown
