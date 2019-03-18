**Get Tasks**
----
  Returns json data of every task 

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ tasks : [
      {
        id: 1,
        group: "Purchases",
        task: "Go to the bank",
        dependencyIds: [],
        completedAt: null,
      },
      {
        id: 2,
        group: "Purchases",
        task: "Buy hammer",
        dependencyIds: [1],
        completedAt: null,
      }
    ]
  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
      error : {
        body: [],
        message: "No tasks found.",
        code: 404,
      }
    }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/tasks",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```