PaperPlateMeals API Document
============================

User Module
-------------------

** 1. User Registration and Login **  
Passes user details along with facebook Id to REST service. If the facebook userId is already available, it returns user details along with the already assigned PaperPlateMeals userId. If the facebook userId is not already present, it will save the user details to PaperPlateMeals

*POST /user*  
Request: 01-CreateUserRequest.json  
Response: 01-CreateUserResponse.json  


** 2. Get user detail by {userId} **  
*GET /user/{userId}*  
Response: 02-GetUserDetailResponse.json  
