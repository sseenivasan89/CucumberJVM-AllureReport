@bing @search

@severity=normal

@issue=1234

@tmsLink=1234

Feature: Feature - Bing Search
 
  Scenario Outline: Scenario - Doing Bing Search
    Given I open bing page
    When I check for the bing page title
    Then I search the "<keyword>" in bing step

    Examples: 
      | keyword  |
      | Bing Search |
    