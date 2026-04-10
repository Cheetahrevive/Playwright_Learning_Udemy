# REST API Learning — Postman & REST Client

This folder contains everything you need to learn REST APIs using two tools available directly inside VS Code.

---

## Tools

### Postman Extension (`postman.postman-for-vscode`)

Full Postman experience inside VS Code — collections, environments, tests, history, and variable management. Requires a free Postman account.

### REST Client Extension (`humao.rest-client`)

Runs plain `.http` files directly in VS Code — no account needed, great for quick requests and version-controlled API notes.

---

## Folder Structure

```text
postman/
├── collections/
│   └── REST_API_Learning.postman_collection.json   ← import into Postman
├── environments/
│   ├── local.postman_environment.json              ← import into Postman
│   └── staging.postman_environment.json            ← import into Postman
├── rest-client/
│   ├── 01-get-requests.http                        ← run in VS Code directly
│   ├── 02-post-requests.http
│   ├── 03-put-patch-requests.http
│   ├── 04-delete-requests.http
│   └── 05-auth-headers.http
└── README.md
```

---

## Quick Start

### Option A — Postman Extension

1. Install the **Postman** extension from the VS Code Extensions panel.
2. Sign in with your free Postman account.
3. Click **Import** and select:
   - `collections/REST_API_Learning.postman_collection.json`
   - `environments/local.postman_environment.json`
4. Select the **Local** environment from the environment dropdown.
5. Open any folder and click **Send** on a request.

### Option B — REST Client (no account needed)

1. Install the **REST Client** extension.
2. Open any `.http` file in `rest-client/`.
3. Click the **Send Request** link that appears above each `###` block.
4. The response appears in a split panel on the right.

---

## API Used — JSONPlaceholder

All examples use [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) — a free, public fake REST API. No sign-up or API key required.

| Endpoint | Records |
| -------- | ------- |
| `/posts` | 100 posts |
| `/users` | 10 users |
| `/todos` | 200 todos |
| `/albums` | 100 albums |
| `/photos` | 5000 photos |
| `/comments` | 500 comments |

---

## Learning Path

Work through the collection folders in order:

### 01 - GET Requests

| Request | What you learn |
| ------- | -------------- |
| Get All Posts | Basic GET, array response |
| Get Single Post | Path variables (`/posts/{{post_id}}`) |
| Filter Posts by User | Query parameters (`?userId=1`) |
| Get Comments for a Post | Nested routes (`/posts/1/comments`) |
| Get All Users | Response time assertions |

### 02 - POST Requests

| Request | What you learn |
| ------- | -------------- |
| Create a Post | POST body, `Content-Type` header, 201 status |
| Create a User | Complex nested JSON body |

### 03 - PUT & PATCH Requests

| Request | What you learn |
| ------- | -------------- |
| Full Update — PUT | PUT replaces the entire resource |
| Partial Update — PATCH | PATCH updates only specified fields |

### 04 - DELETE Requests

| Request | What you learn |
| ------- | -------------- |
| Delete a Post | DELETE method, empty `{}` response |

### 05 - Variables & Environments

| Request | What you learn |
| ------- | -------------- |
| Read Collection Variable | `pm.collectionVariables.get()` |
| Set Variable from Response | Extract and store response values |
| Use Stored Variable | Request chaining with `{{dynamic_post_id}}` |

### 06 - Tests & Assertions

| Request | What you learn |
| ------- | -------------- |
| Status Code Assertions | `pm.response.to.have.status()`, header checks |
| Response Body Assertions | Chai assertions on JSON fields |
| Response Time & Size | Performance thresholds |
| Pre-request Script Example | `prerequest` hook, `pm.collectionVariables.set()` |

### 07 - Authentication

| Request | What you learn |
| ------- | -------------- |
| Bearer Token — Header | `Authorization: Bearer <token>` (JWT) |
| API Key — Query Param | `?apikey=` pattern |
| API Key — Custom Header | `X-API-Key:` header |
| Basic Auth | Postman built-in basic auth |

---

## Writing Tests — Cheat Sheet

```javascript
// Status code
pm.test('Status is 200', () => pm.response.to.have.status(200));

// Body field
pm.test('Has id', () => pm.expect(pm.response.json().id).to.be.a('number'));

// Array check
pm.test('Is array', () => pm.expect(pm.response.json()).to.be.an('array'));

// Response time
pm.test('Fast response', () => pm.expect(pm.response.responseTime).to.be.below(2000));

// Set a variable
pm.collectionVariables.set('myKey', pm.response.json().id);

// Get a variable
const id = pm.collectionVariables.get('myKey');

// Log to console
console.log('value:', pm.response.json());
```

---

## HTTP Methods Reference

| Method | Purpose | Success Code |
| ------ | ------- | ------------ |
| GET | Read a resource | 200 OK |
| POST | Create a resource | 201 Created |
| PUT | Replace a resource entirely | 200 OK |
| PATCH | Update specific fields | 200 OK |
| DELETE | Remove a resource | 200 OK / 204 No Content |
