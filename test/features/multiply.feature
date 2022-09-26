Feature: 7 times table

    Verify multiplying 7 by 1 to 10 returns right answer

    # Scenario: Multiply 7 times table
    #     Given I open "https://testpages.herokuapp.com/styled/calculator"
    #     When I multiply 7 times <number>
    #     Then the answer should be <result>

    #     Examples:
    #         | number | result |
    #         | 1      | 7      |

    Scenario Outline: Multiply 7 times table
        Given I open "https://testpages.herokuapp.com/styled/calculator"
        When I multiply 7 times <number>
        Then the answer should be <result>

        Examples:
            | number | result |
            | 0      | 0      |
            | 1      | 7      |
            | 2      | 14     |
            | 3      | 21     |
            | 4      | 28     |
            | 5      | 35     |
            | 6      | 42     |
            | 7      | 49     |
            | 8      | 56     |
            | 9      | 63     |
            | 10     | 70     |
