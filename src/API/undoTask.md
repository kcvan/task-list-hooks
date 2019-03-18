**Undo Completed Task**
----
  Undo a completed task and returns json object

* **URL**

  /tasks/:id/undo

* **Method:**

  `UPDATE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  **Content** `{ id: number }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ undoTask: true }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
      error : {
        body: { undoTask: false },
        message: "Task not found.",
        code: 404,
      }
    }`

  * **Code:** 400 BAD REQUEST <br />
      **Content:** `{
        error : {
          body: { undoTask: false },
          message: "An error has occured, please try again later",
          code: 400,
        }
      }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/tasks/:id/undo",
      dataType: "json",
      type : "UPDATE",
      success : function(r) {
        console.log(r);
      }
    });
  ```