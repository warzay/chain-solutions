# Email Setup

## Option 1: Using Gmail (recommended)

### Step 1: Gmail Setup
1. Enable two-factor authentication in your Gmail account
2. Create an app password:
   - Go to Google account settings
   - Select "Security"
   - Enable "Two-factor authentication"
   - Create "App password" for mail

### Step 2: Update Configuration
In file `src/pages/api/contact.ts` replace:
```typescript
auth: {
  user: 'your-email@gmail.com', // Replace with your Gmail
  pass: 'your-app-password' // Replace with Gmail app password
}
```

And:
```typescript
from: 'your-email@gmail.com', // Replace with your Gmail
```

### Step 3: Environment Variables (alternative)
Create `.env` file in project root:
```
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

And update the code:
```typescript
auth: {
  user: import.meta.env.GMAIL_USER,
  pass: import.meta.env.GMAIL_PASS
}
```

## Option 2: Using Formspree (easier)

If you don't want to configure Gmail, you can use Formspree:

1. Register at https://formspree.io
2. Create a new form
3. Get the endpoint URL
4. Replace the code in `src/pages/api/contact.ts` with Formspree version

## Running the Project

After setup, run the project:
```bash
npm run dev
```

The form will send emails to: aaafwalex@aol.com, craig@chain-serve.com, michael@chain-serve.com, a.zayets@gmail.com 