**Get Groups**
----
  Returns json data of grouped tasks

* **URL**

  /tasks/groups

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      groups: [
        {
          group: "Purchases",
          tasks :
            [
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
            ],
        },
        {
          group: "Build Airplane",
          tasks :
            [
              {
                id: 6,
                group: "Build Airplane",
                task: "Hammer nails into wood",
                dependencyIds: [2, 3, 4],
                completedAt: null,
              },
              {
                id: 8,
                group: "Build Airplane",
                task: "Have a snack",
                dependencyIds: [],
                completedAt: null,
              }
            ],
        },
      ]
  }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
      error : {
        body: { tasks: [] },
        message: "An error has occured, please try again later",
        code: 400,
      }
    }`

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
      error : {
        body: { groups: [] },
        message: "No groups found.",
        code: 404,
      }
    }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/tasks/groups",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```