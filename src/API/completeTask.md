**Complete Task**
----
  Completes a selected task and returns a json object

* **URL**

  /tasks/:id/complete

* **Method:**

  `UPDATE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  **Content** `{
    task: {
      id: number;
      group: string;
      task: string;
      dependencyIds: number[];
      completedAt: string;
    }
  }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ taskAdded: true }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
      error : {
        body: { taskAdded: false },
        message: "Task not found.",
        code: 404,
      }
    }`

  * **Code:** 400 BAD REQUEST <br />
      **Content:** `{
        error : {
          body: { taskAdded: false },
          message: "An error has occured, please try again later",
          code: 400,
        }
      }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/tasks/:id/complete",
      dataType: "json",
      type : "UPDATE",
      success : function(r) {
        console.log(r);
      }
    });
  ```