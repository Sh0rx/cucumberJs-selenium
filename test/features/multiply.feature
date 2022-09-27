Feature: 7 times table

    Verify multiplying 7 by 1-10 returns right answer

    Scenario Outline: Multiply 7 times table
        Given I open "https://testpages.herokuapp.com/styled/calculator"
        When I multiply <number1> times <number2>
        Then the answer should be <result>

        Examples:
            | number1 | number2 | result |
            | 7       | 0       | 0      |
            | 7       | 1       | 7      |
            | 7       | 2       | 14     |
            | 7       | 3       | 21     |
            | 7       | 4       | 28     |
            | 7       | 5       | 35     |
            | 7       | 6       | 42     |
            | 7       | 7       | 49     |
            | 7       | 8       | 56     |
            | 7       | 9       | 63     |
            | 7       | 10      | 70     |