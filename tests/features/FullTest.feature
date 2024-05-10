Feature: Full Test

  @FullTest
  Scenario: MainActivity Screen
    Given I wait for "3" seconds
    # MainActfivity Screen
    When I tap the Button of Device 1
    Then I should see the text Hello World of Device 1

    When I tap the Button of Device 2
    Then I should see the text Hello World of Device 2