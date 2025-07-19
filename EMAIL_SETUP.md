# Formspree Setup for GitHub Pages

## Setup Instructions

### Step 1: Create Formspree Account
1. Go to https://formspree.io
2. Sign up for a free account
3. Create a new form

### Step 2: Get Your Form Endpoint
1. After creating a form, you'll get an endpoint URL like:
   `https://formspree.io/f/xpzgqgqg`
2. Copy this endpoint URL

### Step 3: Update the Form Action
In file `src/components/Base/Header.astro`, replace:
```html
action='https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT'
```
With your actual endpoint:
```html
action='https://formspree.io/f/xpzgqgqg'
```

### Step 4: Configure Email Recipients
In your Formspree dashboard:
1. Go to your form settings
2. Add these email addresses as recipients:
   - aaafwalex@aol.com
   - craig@chain-serve.com
   - michael@chain-serve.com
   - a.zayets@gmail.com

### Step 5: Test the Form
1. Run the project: `npm run dev`
2. Fill out the contact form
3. Submit and check if emails are received

## GitHub Pages Deployment

This setup works perfectly with GitHub Pages:
- Static site generation
- No server-side code needed
- Formspree handles all email sending
- Automatic deployment on commits

## Running the Project

After setup, run the project:
```bash
npm run dev
```

The form will send emails to all configured recipients via Formspree. 