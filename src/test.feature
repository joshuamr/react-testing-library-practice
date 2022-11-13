Feature: Changing the button color

Scenario: I click the red button
    Given I have the button with a red color
    When I click the button
    Then the button should change to blue
    And the text should change