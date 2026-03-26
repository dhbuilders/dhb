# 🏗️ Dream Home Builders NJ - Developer Guide

This repository contains the source code for the Dream Home Builders NJ website, hosted on **Netlify** and registered via **CloudMySite**.

---

## 🚀 Quick Links
* **Live Site:** [https://dreamhomebuildersnj.com](https://dreamhomebuildersnj.com)
* **Hosting Dashboard:** [Netlify Admin](https://app.netlify.app/)
* **Domain Management:** [CloudMySite Login](https://cloudmysite.com)

---

## 🛠️ Project Structure
- `/images/projects/`: Contains sub-folders for each project (e.g., `/bathroom`, `/kitchen`).
- `js/projects.js`: The "database" that tells the website which images to display.
- `scripts/`: Contains automation shell scripts for file management.

---

## 📸 How to Update Project Images

To add a new project or update existing photos, follow these steps:

### 1. Organize Folders
Add your new images into a sub-folder under `images/projects/`.
*Example: `images/projects/basement/`*

### 2. Batch Rename Images
Use the provided shell script to ensure images are named consistently and sorted correctly.
1. Open the WebStorm Terminal (`Alt + F12`).
2. Run: `./scripts/rename_projects.sh`
3. Follow the prompts to provide a **prefix** (e.g., `basement`) and a **starting index** (e.g., `1`).
    * *This results in: `basement-1.jpg`, `basement-2.jpg`, etc.*

### 3. Generate the Image List
Run the lister script to get the code for your Javascript file:
1. Run: `./scripts/list_projects.sh`
2. Enter the prefix when prompted (e.g., `basement`).
3. **Copy** the comma-separated output (e.g., `'basement-1.jpg','basement-2.jpg'`).

### 4. Update `projects.js`
1. Open `js/projects.js` in WebStorm.
2. Paste the copied list into the corresponding project array.
3. Save the file (`Cmd + S`).

---

## 📤 Deploying Changes
This site uses **Continuous Deployment** via GitHub.

1. **Commit your changes:** - Open the Commit tab in WebStorm (`Cmd + 0`).
    - Select your changed files (images and `projects.js`).
    - Write a message (e.g., "Add new basement project").
    - Click **Commit**.
2. **Push to GitHub:**
    - Press `Cmd + Shift + K`.
    - Click **Push**.
    - *Note: If prompted for credentials, use your GitHub Username and your Personal Access Token (not your password).*

**Netlify will automatically detect the push and update the live site within 1-2 minutes.**

---

## ⚙️ Maintenance & Troubleshooting

### DNS & SSL
- **Nameservers:** The domain is pointed to Netlify using:
    - `dns1.p01.nsone.net`
    - `dns2.p01.nsone.net`
    - `dns3.p01.nsone.net`
    - `dns4.p01.nsone.net`
- **SSL:** Managed automatically by Netlify (Let's Encrypt).

### Git & .DS_Store
If you see `.DS_Store` files appearing in your Git changes:
1. Run `git rm --cached -r .DS_Store` in the terminal.
2. Commit the change. These files are ignored by the `.gitignore` file.

### Expired GitHub Token
If Git rejects your login:
1. Delete the "github.com" entry in **Mac Keychain Access**.
2. Generate a new "Fine-grained Token" on GitHub.
3. Paste the new token when WebStorm prompts for a password.