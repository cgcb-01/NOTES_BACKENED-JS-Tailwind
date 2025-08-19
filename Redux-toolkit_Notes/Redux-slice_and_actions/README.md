# Redux, Redux-toolkit and RTK query

**What is a Store?**

- A Store is a central Place where the state of our application is stored and it can be created using te **_configureStore_** function and it holds the entire state tree of our application

**What is a Slice?**

- A Slice is a piece of store state and the corresponding reducer logic to update that state. Slices are a way to organise our Redux Store by Breaking it down into a smaller, more manageable parts. Gives Intructions on how to **_change or update_** that specific part.

**What is called the InitialState?**

- As the name suggest it is going to be the **_initial value_** of our state

**What is Reducer?**

- Reducers are like the instructions on what to do with each Slice
- They Define ow the information in a particular slice can be **_Changed or Updated_**

**What is Actions?**

- Actions are like the **_requests_** or **_comments_** we give to cange a specific slice of the cake
- For Ex: We may have a action say _"Eat a bite"_ that instructs how to take a bite from the slice.

<hr>
<br>

## useSelector() and useDispatch() Hook

- **useSelector() Hook:** Allows us to read data from the redux store.

- **useDispatch() Hook:** The dispatch is used to send actions to the store, triggering updates to te application State.
  In Simpler terms, it lets us **_change the state_** in our Redux store from within our react components.
