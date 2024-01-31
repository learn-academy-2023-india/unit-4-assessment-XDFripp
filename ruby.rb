# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    attr_accessor :model, :wheels, :current_speed
  
    def initialize(model)
      @model = model
      @wheels = 2
      @current_speed = 0
    end
  
    def pedal_faster(amount)
      @current_speed += amount
    end
  
    def brake(amount)
      @current_speed = [@current_speed - amount, 0].max
    end
  
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
  end
  