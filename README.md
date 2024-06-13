# AgentAnalyticsAssignment

Step-1: clone the repository using, git clone

Step-2 : install all the necessary dependencies of both folders using npm i command

Note: insdie the project you will be having 2 folders react application and mock API server , need to make sure your server is running before you start the react application
Step-3: open integrated terminal for server-api and do "npm start" , once the server becomes active in your localhost , you are good to go

Step -4: open integrated terminal for products-store and do "npm start", this will take a while and start your react website


Endpoints
The application provides the following endpoints:

View All Products
URL: http://localhost:3000/
Description: Displays a list of all products. Pagination is implemented to show only 4 cards per page.

Product Detail Page
URL: http://localhost:3000/Productdetailpage/:id
Description: Shows detailed information about a specific product.


Edit Product Details
URL: http://localhost:3000/editproductdetails/:id
Description: Allows you to edit the details of an existing product. Changes are updated in real-time on the mock server through a PUT request. The form uses Ant Design (antd) UI library for validation and improved user experience.


Add New Product
URL: http://localhost:3000/addnewproduct
Description: Allows you to add a new product to the mock API. Changes are immediately visible on the screen.


Additional Notes
Ensure the mock API server is running before starting the React application to avoid any connectivity issues.
For form validations and improved user experience, Ant Design (antd) UI library has been used.
With these steps, you should be able to set up and run the project successfully. Enjoy working

statemanagement : contextAPI
routing : React-router-Dom



