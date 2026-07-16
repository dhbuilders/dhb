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
| `js/navigation.js` | Handles mobile menu, "Back to Top" button, and Formspree AJAX submissions[cite: 8]. |
| `js/contact.js` | Controls the tab switching between "In Person" and "Virtual" contact modes. |
| `js/slider.js` | Powers the automatic 5-second fade/slide effect on the main Hero section. |
| `js/mini-slider.js` | Utility script for manual image navigation within project cards. |

---

## 📝 Form Management (Formspree)
The site uses three distinct Formspree endpoints. To change the recipient email, update the IDs in the `action` attribute of the `<form>` tags in `index.html`.

1.  **Contact Us (In-Person):** `https://formspree.io/f/xykpgpzk`
2.  **Contact Us (Virtual):** `https://formspree.io/f/mqeyarzv`
3.  **Request a Quote:** `https://formspree.io/f/mjgowdwe`

*Note: `navigation.js` handles the "Sending..." states and success/error messages to prevent page reloads[cite: 8].*

---

## 📸 Managing "Get Inspired" Gallery Images (Manually)

The dynamic photo gallery uses the `projectInventory` object in `js/projects.js` to build arrays for each category, mapping them to local asset files.

### 1. File Preparation
* Add images to the specific category folder: `images/projects/[category]/`.
* **Current Categories:** `elevation`, `kitchen`, `bedroom`, `bathroom`, `living`, `wetbar`, `interior`.
* **Performance Rule:** Use compressed `.webp` or `.avif` formats where possible to maximize performance on mobile connections.

### 2. Manual Image Management

#### To Remove an Image:
1. Delete the physical image file from its category directory (e.g., delete `images/projects/bedroom/bedroom-3.jpg`)[cite: 9].
2. Open `js/projects.js` and delete the matching file name string (e.g., `'bedroom-3.jpg'`) from the corresponding key array in `projectInventory`[cite: 9].

#### To Add or Replace an Image:
1. Save your new image using lowercase letters, hyphens, and standard extensions (e.g., `kitchen-35.webp` or `bath-19.jpg`)[cite: 9].
2. Upload the file to the correct subfolder (e.g., `images/projects/kitchen/` or `images/projects/bathroom/`)[cite: 9].
3. Open `js/projects.js`[cite: 9].
4. Manually type the new file name (wrapped in single quotes) into the matching category array in `projectInventory`[cite: 9]. Ensure each entry is separated by a comma:
   ```javascript
   kitchen: [
       'kitchen-1.jpg',
       'kitchen-2.jpg',
       // ...
       'kitchen-35.webp' // <--- Add your new file name here manually[cite: 9]
   ]