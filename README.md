# [PH Assignment 07] Sassy Cuisine
## Main Requirements
**1. Figma Design:** Website design should be similar to the Figma. You can change the color but choose a color palette that will be pleasing to the eye.

**2. Navbar:** A navbar with a website name or logo on the left side & 4 menu items in the middle: Home, Recipes, About, and Search. A search bar with a search icon and search text & User icon at right.

**3. Banner Section:** It will contain a banner with background image, title, short description & 2 bu ons named- Explore Now, and Our Feedback. Don’t use lorem ipsum text.

**4. JSON:**  Create a JSON File with a minimum of 6 data. Each data will contain :
- recipe image
- recipe id
- recipe name
- short description
- ingredients in an array → e.g. [ “550 g chicken”, “120 ml soy sauce”, “200 g basil leaf”, “400 g mushroom”]
- preparing time → e.g. 30 min
- calories → e.g. 320 calories

**5. Our Recipes:** Our recipes Heading & short description at the beginning of this section. Don’t use lorem ipsum text.

**6. Recipe card section:** The left side of the page will contain a minimum of 6 recipe cards.
- Below the tables, you need to calculate the total preparation time & total calories of the added recipes.
    - recipe image
    - recipe name
    - short description
    - ingredients length and show ingredients in an unordered list
    - preparing time
    - calories
    - a button name **Want to Cook**

**7. Sidebar:** When you click on the Want to Cook Button it will add the clicked recipe on the sidebar’s **Want to Cook table.** <br>
    <ul>
        <li>you need to increase the count of the want to cook table </li>
        <li> in the Want to Cook table For each table data Show the recipe name, preparation time, calories and a **Preparing Button** </li>
        <li> you cannot select a single recipe more than once, when you try to
        click the **want to cook button** more than once it will show a toast </li>
    </ul>

## Challenge Requirements
- When you click the Preparing button of a recipe
    - it will remove the data from the Want to Cook table
    - decrease the count of the Want to Cook table
    - and add it to **Currently Cooking table**
    - in Currently Cooking table, each table data will show the recipe name, preparation time & calories
    - increase the count on currently cooking table

    ## Optional Requirements
    - Below the tables, you need to calculate the total preparation time & total calories of the added recipes.
    - Make responsive for mobile device