AgentAnalyticsAssignment

This project is a React.js application that interacts with a mock API server to display, edit, and add products.


Setup

1) Clone the repository: https://github.com/your-repo/AgentAnalyticsAssignment.git

2) Install dependencies for the React application: npm install

3) Install dependencies for the mock API server:  npm install


Running the Application

1) Start the mock API server: npm start
    The server will run on http://localhost:3006.

2) Start the React application: npm start
    The application will run on http://localhost:3001.
    Note: Make sure the mock API server is running before starting the React application.


Features
    1) View All Products
            URL: http://localhost:3001/

            Description: Displays a list of all products. Pagination is implemented to show 4 cards per page.

    2)Product Detail Page
            URL: http://localhost:3001/Productdetailpage/:id

            Description: Shows detailed information about a specific product.

    3) Edit Product Details
            URL: http://localhost:3001/editproductdetails/:id

            Description: Allows you to edit the details of an existing product. Changes are updated in real-time on the mock server through a PUT request. The form uses the Ant Design (antd) UI library for validation and an improved user experience.

    4) Add New Product

            URL: http://localhost:3001/addnewproduct

            Description: Allows you to add a new product to the mock API. Changes are immediately visible on the screen.

Technologies Used

React.js
React Router
Redux Toolkit (for state management)
Ant Design (UI library)

Additional Notes

1) Ensure the mock API server is running before starting the React application to avoid connectivity issues.

2) To experience loading states and shimmer effects, follow these steps:
        Right-click inside the browser
        Select "Inspect"
        Go to the "Network" section
        Select "Slow 3G" or "Fast 3G" from the throttling dropdown



Enjoy working with the project!