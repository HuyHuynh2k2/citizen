# Project node

- I want to use ExpressJS for backend (mostly handle route) but I also want to have frontend running so I
  split it into client side and server side. I would need to update the package.json npm run dev into
  "dev": "concurrently \"npm run server\" \"npm run client\"", so it could both run frontend and backend at same time

- I had problem when fetching API, in the server side I had trivia.js where I stored almost every data. Then we import them to the server.js where we set the rule for the res when the api is called, for example:

* GET request example using expressJS

```javascript
app.get("/trivia", (req, res) => {
  res.json(triviaData);
});
```

```javascript
useEffect(() => {
  fetch("http://localhost:3000/flashcard")
  .then((res) => res.json())
  .then((data) => {
    withIds = data.map((question, index) => ({...question, id = index + 1}));
    set(withIds);
  }).catch("res error");
}, []);
```

- POST request example:

```javascript
// Backend
app.post("API goes here", (req, res) => {
  console.log(req.body); // {name: "abc", age: 22}
  res.json({ youSent: req.body });
});

// Frontend
fetch("API goes here", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Huy", age: 22 }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

- The project using expressJS in server site for the purpose to practice with fetch data from the backend, in fact we dont need it to handle the routes

- I did "npm i react-router-dom" to install the library switch the routes, so in main.jsx we need to restruture like this:

```javascript
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flashcards" element={<FlashCards />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
```

- After that we want it to update the behavior of the button:

```javascript
<div className="flex justify-end mr-10 mb-10">
  <Link to="/flashcards" className="bg-amber-400 p-2 rounded-md inline-block">
    Flash Card
  </Link>
</div>
```
