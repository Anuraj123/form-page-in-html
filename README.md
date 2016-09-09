# form-page-in-
The code consists of bookstoregoogleAPI.html which includes external css and js files. To be more formal I designed a very simple style for the bookstore.
I created a form in html which includes the input search text and a search button. The div “content” is to display the search results. The value of search input text is passed to the q=<query> for booksearch url to fetch the search results using googleapi. Then the results are handled in handleResponse method to extract each element such as title, authors, publisher etc... for the respective search results and display them in the content. This functionality is working as expected.
Testing:
On giving “Jason bourne” the search results for Jason bourne books are getting displayed in the content div.
To get more information of a specific book, onclick event is used in href (which is the title of the book). Onclick event calls the get method with the selfLink of the clicked book which then calls the bookInfo method to extract the information of the specific book and display them in the content div. Book title, Subtitle, Language, page count, user Rating, User Rating Count, Description, web Reader Link, and Salability information are displayed for a specific book. This functionality is also tested.
Testing:
After getting the book search results for “Jason Bourne”, ”The Bourne Identity “ book was clicked to get its more information. The information specified above is displayed on clicking the “The Bourne Identity” link.
Test to get a book result for a specific ISBN
On giving “9781408221082” as search input, the books associated with this ISBN is being displayed.
