# Portfolio Access Credentials

## Login Information

**Default Password:** `adarsh2025`

## How to Change the Password

To change the password, edit the following file:

**File:** `components/Login.tsx`

**Line to modify:** Look for the `CORRECT_PASSWORD` constant (around line 18):

```typescript
const CORRECT_PASSWORD = "adarsh2025";
```

Change `"adarsh2025"` to your desired password.

## Security Notes

- The current implementation uses session storage for authentication
- Authentication persists only for the current browser session
- Closing the browser tab will require re-authentication
- For production use, consider implementing:
  - Backend authentication
  - JWT tokens
  - Database-backed user management
  - Password hashing
  - Rate limiting for failed attempts

## Features

- ✅ Password-protected access to entire portfolio
- ✅ Session persistence (stays logged in during browser session)
- ✅ Show/hide password toggle
- ✅ Loading states
- ✅ Error messages for incorrect password
- ✅ Elegant login UI matching portfolio design
- ✅ Automatic authentication check on page load

## Testing

1. Navigate to http://localhost:3001
2. You should see the login page
3. Enter password: `adarsh2025`
4. Click "Access Portfolio"
5. You should now see the full portfolio

## Logout

To logout:
1. Clear browser session storage, OR
2. Close the browser tab/window, OR
3. Open in incognito/private mode for testing
