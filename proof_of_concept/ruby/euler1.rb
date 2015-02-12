=begin
Problem 1 - Project Euler
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

Author: Ryan Jackson
Date Created: 18 December 2010
=end

# Initialize variables
i = 0.0
sum = 0
high = 10

while i < high do
	if (i / 3 > 0) || (i / 5 > 0)
		puts "value of i = #{i}"
		if (i.truncate - sum < 1)
			puts "i is evenly divisible"
		end
		sum += i
	end
	i += 1
end

puts "\nsum of values = #{sum}"