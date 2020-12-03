@google @search 

@severity=blocker

@issue=6

@tmsLink=45678

Feature: Feature - Google Search
 
  Scenario Outline: Scenario - Doing Google Search
    Given I open google page
    When I check for the google page title
    Then I search the "<keyword>" in google step
    And I skipping this step

    Examples: 
      | keyword  |
      | Google Search |
      
    