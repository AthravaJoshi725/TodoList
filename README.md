## ✅ Vanilla JS To‑Do List

First personal project using plain HTML, CSS, and JavaScript 🎉

This is a simple, clean To‑Do app where you can add tasks and mark them done. It focuses on core web fundamentals without frameworks.

### ✨ Features
- **Add tasks**: Type a task and click Enter or press the Enter key ⌨️
- **Mark as done**: Click the ❌ button to remove a task
- **Toast notifications**: Friendly messages for add/remove actions 🍞
- **Keyboard support**: `Enter` key submits the task fast
- **Scrollable task area**: Long lists stay tidy with vertical scrolling
- **Responsive centering**: Main task panel is centered without affecting the top nav
- **Subtle UI polish**: Shadows, hover effects, and rounded corners

### 🧠 What I Learned
- Structuring a page with semantic HTML containers (`nav`-like header and a main panel)
- Styling layouts with CSS Flexbox to center content vertically/horizontally
- Handling DOM events in JavaScript (click, keydown)
- Creating and removing DOM elements dynamically (`li`, `button`)
- Providing feedback with a lightweight toast system using CSS transitions

### 🗂️ Project Structure
```
Todo/
  ├─ index.html      # App markup (nav, input, list container)
  ├─ style.css       # Layout, theming, hover states, toast styles
  ├─ script.js       # Add/remove task logic + toast handling
```

### 🛠️ Tech Stack
- **HTML5**: Structure
- **CSS3 (Flexbox)**: Layout and styling
- **JavaScript (Vanilla)**: App logic and interactions

### 🚀 Getting Started
1. Download or clone this repository
2. Open `index.html` in your browser (double‑click or drag into a tab)
3. Start adding tasks!

No build tools or installs required.

### 🧩 How It Works (Quick Tour)
- `index.html`
  - Renders a top `TODO List` title and the main task panel
  - Contains an input box, a submit button, and an empty `<ul>` for tasks
- `style.css`
  - Centers the main panel while keeping the nav at the top
  - Styles the input area, task list, and hover states
  - Implements a minimal toast (`#toast`) with show/hide animation
- `script.js`
  - Reads the input, creates an `<li>` with text and a ❌ button
  - Removes a task when ❌ is clicked
  - Supports pressing `Enter` to add a task
  - Shows toast messages like “Task added!” and “Task completed”

### ⌨️ Shortcuts
- Press **Enter** inside the input to add a task

### 🖼️ UI Notes
- The nav bar stays at the top
- The main panel (`.mainbox`) is centered with `margin: auto` and Flexbox on `body`
- The task list scrolls if it grows taller than the panel

### 📌 Possible Improvements
- Persist tasks in `localStorage` so they survive page refreshes
- Edit tasks inline (rename)
- Mark tasks completed (strike‑through) instead of deleting immediately
- Add filter: All / Active / Completed
- Confirm before deletion

### 🙌 Author
Built as my first vanilla HTML/CSS/JS project. Feedback welcome!


