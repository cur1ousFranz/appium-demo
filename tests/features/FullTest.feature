Feature: Full Test

    @FullTest
    Scenario: MainActivity Screen
        Given I wait for "3" seconds

        # MainActivity Screen
        When I tap the Button
        Then I should see the text Hello World