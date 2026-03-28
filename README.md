# 🏗️ Dream Home Builders NJ - Full Developer Guide

This repository contains the source code for the Dream Home Builders NJ website, a high-performance static site hosted on **Netlify**.

## 🚀 Quick Links
* **Live Site:** [https://dreamhomebuildersnj.com](https://dreamhomebuildersnj.com)
* **Hosting Dashboard:** [Netlify Admin](https://app.netlify.app/)
* **Form Submissions:** [Formspree Dashboard](https://formspree.io/forms)

---

## 📂 File Architecture & Logic

| File | Responsibility |
| :--- | :--- |
| `index.html` | The core structure. Includes Hero, Services, Gallery, Testimonials, and Forms. |
| `js/projects.js` | Manages the "Get Inspired" gallery, tab switching, and lightbox. |
| `js/navigation.js` | Handles mobile menu, "Back to Top" button, and Formspree AJAX submissions. |
| `js/contact.js` | Controls the tab switching between "In Person" and "Virtual" contact modes. |
| `js/slider.js` | Powers the automatic 5-second fade/slide effect on the main Hero section. |
| `js/mini-slider.js` | Utility script for manual image navigation within project cards. |

---

## 📝 Form Management (Formspree)
The site uses three distinct Formspree endpoints. To change the recipient email, update the IDs in the `action` attribute of the `<form>` tags in `index.html`.

1.  **Contact Us (In-Person):** `https://formspree.io/f/xykpgpzk`
2.  **Contact Us (Virtual):** `https://formspree.io/f/mqeyarzv`
3.  **Request a Quote:** `https://formspree.io/f/mjgowdwe`

*Note: `navigation.js` handles the "Sending..." states and success/error messages to prevent page reloads.*

---

## 📸 Updating the "Get Inspired" Gallery
This section relies on the `projectInventory` object in `js/projects.js`.

### 1. File Preparation
* Add images to the specific category folder: `images/projects/[category]/`.
* **Available Categories:** `elevation`, `kitchen`, `bedroom`, `bathroom`, `living`, `wetbar`, `interior`.

### 2. Rename & Sort
Use the WebStorm Terminal (`Alt + F12`) to run the utility scripts:
1.  **Rename:** `./scripts/rename_projects.sh` (Batch renames with hyphens and increments).
2.  **List:** `./scripts/list_projects.sh` (Generates the formatted `'file-1.jpg','file-2.jpg'` list).

### 3. Update the Inventory
Paste the output from the lister script into the corresponding array in `js/projects.js`. The gallery and lightbox will update automatically.

---

## 🧱 Adding or Removing Sections

### To Add a New Section:
1.  **HTML Structure:** In `index.html`, create a new `<section>` tag with a unique `id` (e.g., `<section id="awards" class="page">`).
2.  **Navigation Link:** Add a matching link to the `<nav>` list in the header: `<li><a href="#awards">Awards</a></li>`.
3.  **Styling:** Create a new CSS file in `/css/` or add styles to `layout.css` using the section ID as a selector.

### To Remove a Section:
1.  **Delete HTML:** Remove the entire `<section>` block from `index.html`.
2.  **Remove Link:** Delete the corresponding `<li>` from the `<nav>` section in the header.
3.  **Clean Up:** (Optional) Remove the associated CSS file link from the `<head>` of `index.html`.

---

## 🛠️ Modifying Content Sections

### Updating Services
Edit the `.card` divs in `index.html`. Each card contains an image from `images/services/` and a descriptive paragraph.

### Managing Testimonials
Testimonials are hard-coded in the grid in `index.html`. Copy an existing `.testimonial-card` div to add new client feedback.

---

## 📤 Git & Deployment Workflow
1.  **Clear Cache:** Run `git rm --cached -r .DS_Store` to remove Mac system files from the repo.
2.  **Commit:** `Cmd + K` in WebStorm.
3.  **Push:** `Cmd + Shift + K`.
4.  **Verify:** Check Netlify; the site updates automatically upon a successful GitHub push.