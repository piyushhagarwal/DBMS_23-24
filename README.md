# DBMS_23-24 (Know Your Rights)

The "Know Your Rights" project aims to empower individuals by providing comprehensive information about their rights across various categories. Whether you're looking for rights related to gender, age, occupation, or language preferences, this API is designed to deliver accurate and relevant data.

## [Frontend Repository](https://github.com/piyushhagarwal/DBMS_23-24Frontend)
## How to start the application

```bash
node app.js
```

## How to insert data into the database

Uncomment the given two lines in `app.js`

```bash
await insertCategory();
await insertQuestions();
```

#### Get Categories

**Endpoint:** `GET /api/v1/categories`

**Description:** Get categories based on specified criteria.

##### Search Queries

- `gender` (String, required): The gender for filtering categories.
- `age` (Number, required): The age for filtering categories.
- `occupation` (String, required): The occupation for filtering categories.
- `disable` (Boolean, required): Indicates if the category is disabled.
- `language` (String, required): "English" or "Hindi"

##### Example Usage

```bash
curl -X GET "localhost:8080/api/v1/categories?gender=Women&age=62&occupation=Student&disable=true&language=Hindi"
```

#### Get Categories

**Endpoint:** `GET /api/v1/rights/:category_id`

**Description:** Get rights based on specified category.

##### Parameters

- `id` (String, required): The ID of the category.

##### Example Usage

```bash
curl -X GET "localhost:8080/api/v1/rights/65264084a81bf53e94344d0c"
```
