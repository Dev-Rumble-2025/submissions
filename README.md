# DevRumble 2025 - Submissions

Welcome teams! This repository is where you will submit your final code for DevRumble 2025. Please follow the instructions carefully to ensure your submission is correct.

Folder Structure:
Each team must create a folder named after their team inside this repo.
Example:
submissions/
Team\_AlgoRangers/
index.html
style.css
app.js

Make sure all your project files are inside your team folder.

**Important Rule: Push Only Once**

* Do not push your code before it is fully completed.
* Only one push per team is allowed, containing all final project files.
* Make sure your team folder is correctly named: Team\_YourTeamName/
* Partial submissions or multiple pushes will not be accepted.

How to Submit Your Code:


#  Final Submission Guide

Follow these steps exactly to submit your project.

---

## 1️⃣ Set Your Git Info (Only Once)
```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

## 2️⃣ Create Your Project README.md
### TEAM_NAME
**Members**: Name1, Name2, ......

**Live Demo (optional) **: [https://your-project-link.com](https://your-project-link.com)

**How to Run**:  
1. Install: `npm install` OR `pip install -r requirements.txt`  
2. Run: `npm start` OR `python app.py`

## 3️⃣ Submit Your Project

```
# Clone submissions repo
git clone https://github.com/YOUR-ORG/submissions.git
cd submissions

# Add your team folder
mkdir TEAM_NAME
cp -r ../YOUR_PROJECT/* TEAM_NAME/   # Windows: xcopy /E ../YOUR_PROJECT TEAM_NAME

# Push to GitHub
git add TEAM_NAME
git commit -m "Final submission: TEAM_NAME"
git push origin main


