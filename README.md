<h1> Shopmart First Assignment Guide </h1>
Link to website: https://eloquent-feynman-3510c7.netlify.app/  <br />

<img src="roadmap.drawio.png" alt="Components" width="100%" height="800"> <br />

<h2>How The App works  </h2>

<h3> 1.Header Component</h3>
<p> The first component to load is header, it uses sets the productCategory context api because it drags the product category from the api .<br />
<h4>What it contains?  </h4>
 <b>Data Retrieved</b> from end point {process.env.REACT_APP_BACKEND}/products/categories and puts it in the contextAPI <br />
<ul>
  <li>Image </li>
  <li>Search Bar</li>
  <li>Products Link</li>
  <li>Register Link</li>
   <li>Dynamically loaded category links</li>
</ul>

</p>

<h3> 2. Hero Component</h3>
<p>
 Uses React slick to create multi carousel items, no states used, Images used here were created using canva.com. 
</p>
<h3> 3. Productcategory Component</h3>
<p>
uses the categories context to map its child ProductCitem, which is just a component that contains cards. <br />

</p>

<h4> ProductCitem </h4>
It is a child of Product category component, it checks the category it recieves and changes the image based on category.

<h3> 4. Best Sellers Carousel</h3>
<p>
 <b>Data Retrieved</b> from end point {process.env.REACT_APP_BACKEND}/products?bestseller=yes and puts it in useState bestSellers <br />
 Uses React slick to create multi carousel items, creates a card carousel. Loads cards from the back end and creates a cards
 carousel with .map, each Card details are in bestSellerCard component

</p>
<h4> BestSellerCard </h4>
It is a child of Best Sellers carousel component, it is a card at its base and just renders an image, title and a link that when clicked takes you to the description page.




<h3> 5. Products component</h3>
<p>
  <b>Data Retrieved</b> from end point {process.env.REACT_APP_BACKEND}/products </br> sets in states products
  then Checks if category is present in the link if it is, it sends the category as prop to another component named category else it sends it to display main
  <h4>What it contains?  </h4>
  <ul>
  <li> A function that Set arrays ascending </li>
  <li>A function that Set arrays descending</li>
  <li>A function that filters products for best sellers</li>
  <li>A function that filters products for Clearance</li>
   <li>A function that clears all filters</li>
   <li>Sets products to original array</li>
</ul>
</p>

<h3> 5. Category component</h3>
 <b>Data Retrieved</b> from end point {process.env.REACT_APP_BACKEND}/products?category=${props.category} </br> sets in state products to this.

 It recieves the category as prop and fills the back end api route to fetch the proper products once done it sets it.

   <h4>What it contains?  </h4>
  <ul>
  <li> A function that Set arrays ascending </li>
  <li>A function that Set arrays descending</li>
  <li>A function that filters products for best sellers</li>
   <li>A function that clears all filters</li>
   <li>Sets products to original array</li>
</ul>
This function also calls displayMain Component when done
<h3> DisplayMain component</h3>
<p>
Used to display products created by category or displayMain
  
  <h4>What it contains?  </h4>
  <ul>
  <li> Sets current page </li>
  <li>Calculates what is the starting product and ending product for a particular page</li>
  <li>Has a function to change current page</li>
  <li>Sends props to pagination to create a pagination element</li>
   <li>Sends props to display Card to display card</li>
   <li>Arrages products in a grid</li>
</ul>
</p>
<h3> Display Card component</h3>
<p> 
It's a child component, just has cards that display title image and best seller rating. on click takes you to the description page.
</p>

<h3> 6. Pagination component</h3>

<p> 
  <h4>What it contains?  </h4>
      <ul>
  <li>Calculates total number of pages </li>
  <li>Creates different pagination items and uses changePage props from display main to change an item</li>
 <li>Calls its child Pagination Item, to create page items with page number. </li>
</ul>
<h3> PaginationItem component</h3>
<p> Just creates a pagination item, but this time with the page numbers recieved as props, also sets the active pages to current. 
</p>
</p>


<h3>7. Description component</h3>
 <b>Data Retrieved</b> from end point {process.env.REACT_APP_BACKEND}/product/${id} </br> sets in state product to this.
 <h4>What it contains?  </h4>
 <p> 
 Takes the json data recieved and displays it in a card. 
 </p>


<h3>8. Footer component</h3>
  <ul>
  <li> Has links to sign up and products</li>
  <li>has a link to about page</li>
  <li>Contains social media links</li>
</ul>
 <h3>9. Register component</h3>
 
 <p>
  adds a customer to the database. 
  fetch(`${process.env.REACT_APP_BACKEND}/customer/register`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Origin": "*",
                      },
                      body: JSON.stringify(userss),
                    })

posts the data retreieve from the form using this URL and performs validation.
 
 </p>

<h3> 10.PreviousBtn component</h3>
<p>
Contains A custom defined previous arrow button
</p>
<h3> 11.NextBtn component</h3>
<p>
Contains A custom defined next arrow button
</p>


