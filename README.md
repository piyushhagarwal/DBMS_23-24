# DBMS_23-24

#### Get Categories

**Endpoint:** `GET /api/v1/categories`

**Description:** Get categories based on specified criteria.

##### Search Queries

- `gender` (String, required): The gender for filtering categories.
- `age` (Number, required): The age for filtering categories.
- `occupation` (String, required): The occupation for filtering categories.
- `disable` (Boolean, required): Indicates if the category is disabled.

##### Example Usage

```bash
curl -X GET "localhost:8080/api/v1/categories?gender=Women&age=62&occupation=Student&disable=true"
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
