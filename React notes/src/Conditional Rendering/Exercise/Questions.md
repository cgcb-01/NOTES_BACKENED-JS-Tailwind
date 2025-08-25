## Conditional Rendering Exercise

### Step 1: Create a `Weather` Component with `if`,`else if`, and `else`

1. Create a new file called `Weather.jsx`
2. Inside this file, create a functional component called `Weather`
3. The component should:
   - Take a `temperature` prop.
   - Use `if`, `else if` and `else` statements to conditionally render:
     - If the temperature is below 15, _It's Cold Outside_
     - Between 15 and 25 display : _"It's Nice outside"_
     - Temperature above 25, display: _"It's ot outside"_

### Step 2: Create a `UserStatus` Component with the `&&` Operator

1. create a new File called `UserStatus.jsx`
2. Inside this file create a functional component called `UserStatus`
3. The component should:
   - Take two boolean props `loggedIn`,`isAdmin`
   - Use the `&&` operator to display a message for admin and Normal User
     - If `loggedIn` and `admin` display: **_Welcome Admin!_**
     - If it is `loggedin` but not Admin then display **_Welcome User!_**

### Step 3: Create a `Greeting` Component with a Ternary Operator

1. Create a New File called `Greeting.jsx`
2. Inside this file, create a functional component called `Greeting`
3. The component should:
   - Take a `timeOfDay` prop(eg: `"morning"`,`"afternoon"`)
   - Use ternary operator to conditionally display different greetings based on the time of the day:
     - If `timeOfDay` is `"morning"`,display: **_Good Morning!_**
     - If `timeOfDay` is `"afternoon"`,display: **_Good afternoon!_**
