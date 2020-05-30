


document.addEventListener('DOMContentLoaded', bindNavBarClickHandlers)
//implement this function
//fetch some data from the serverj
//handle the response that is similar to categories
document.addEventListener('DOMContentLoaded', fetchAndDisplayFeaturedMotorcycle)

// let motorcycles = [
//   {
//     id: 1,
//     manufacturer: manufacturers[2],
//     category: categories[2],
//     model: 'FTR 1200 S',
//     year: '2019',
//     cc: 1203,
//     hp: 120
//   }

function fetchAndDisplayFeaturedMotorcycle(event){
  fetch("/motorcycles/featured")
    .then((response) => {
      if (response.ok) {
        return response.json();
        //console.log(response.json());
      }
    })
    .then((motorcycles) => {
      let featuredMotorcyclesDiv = document.createElement("div");
      featuredMotorcyclesDiv.setAttribute("id", "header h1");
      let featuredMotorcyclesHeader = document.createElement("h2");
      featuredMotorcyclesHeader.appendChild(document.createTextNode("Featured Bike"));
      let featuredMotorcyclesList = document.createElement("ul");
      featuredMotorcyclesList.setAttribute("id", "featured");
      let listItem = document.createElement("li");
      let yearManufacturerModelHeader = document.createElement('h3');
      yearManufacturerModelHeader.setAttribute("id", "header");
      let yearManufacturerModeLink = document.createElement('a');
      yearManufacturerModeLink.setAttribute(
        "href",
        "/assets/images/motorcycle_" + motorcycles.id + ".jpg"
      );
      yearManufacturerModeLink.appendChild(document.createTextNode(motorcycles.year + " " + motorcycles.manufacturer.name + " " + motorcycles.model));
      yearManufacturerModelHeader.appendChild(yearManufacturerModeLink);
      

      let imgElement = document.createElement("img");
      imgElement.setAttribute(
          "src",
          "/assets/images/motorcycle_" + motorcycles.id + ".jpg"
      );
      imgElement.setAttribute("id", "motorcycle")
      let featuredManufacturerHeader = document.createElement("h4")
      let featuredCategoryHeader = document.createElement("h4"); 
      let featuredCcHpHeader = document.createElement("h4");
      featuredCcHpHeader.appendChild(document.createTextNode(motorcycles.cc + "cc" + ", " + motorcycles.hp + "hp"));
      
      let featuredManufacturerLink = document.createElement("a");
      featuredManufacturerLink.setAttribute(
        "href",
        "/assets/images/motorcycle_" + motorcycles.id + ".jpg"
      );
      featuredManufacturerLink.appendChild(
        document.createTextNode(
          "Manufacturer: " + motorcycles.manufacturer.name
        )
      );
      featuredManufacturerHeader.appendChild(featuredManufacturerLink);

      //category
         let featuredCategoryLink = document.createElement("a");
         featuredCategoryLink.setAttribute(
           "href",
           "/assets/images/motorcycle_" + motorcycles.id + ".jpg"
         );
         featuredCategoryLink.appendChild(
           document.createTextNode(
             "Category: " + motorcycles.category.name
           )
         );
         featuredCategoryHeader.appendChild(featuredCategoryLink);

      
        // featuredMotorcyclesList.appendChild(imgElement);
      listItem.appendChild(featuredMotorcyclesHeader);
      listItem.appendChild(yearManufacturerModelHeader);
      listItem.appendChild(imgElement);
      listItem.appendChild(featuredManufacturerHeader);
      listItem.appendChild(featuredCategoryHeader);
      listItem.appendChild(featuredCcHpHeader);
        
      featuredMotorcyclesList.appendChild(listItem);
      featuredMotorcyclesDiv.appendChild(featuredMotorcyclesList);
        //let listItem = document.createElement('li')
      
      
        // listItemLink.appendChild(
        //   document.createTextNode(motorcycle.manufacturer)
        // );
        // listItemHeader.appendChild(listItemLink);
        // listItem.appendChild(listItemHeader);
        // categoriesList.appendChild(listItem);
    
      let main = document.querySelector("main");
      while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
      }
      main.appendChild(featuredMotorcyclesDiv);
      main.appendChild(featuredMotorcyclesList);
    });
    // (featuredMotorcycle){
    // let model = featuredMotorcycle.model;

   
}
  






function bindNavBarClickHandlers(event) {
  let categoriesLink = document.getElementById('lnk-categories')
  categoriesLink.addEventListener('click', displayCategories, false)
  let manufacturersLink = document.getElementById('lnk-manufacturers')
  manufacturersLink.addEventListener('click', displayManufacturers, false)
  
}

function displayCategories(event) {
  event.preventDefault()
  fetch('/categories').then((response) => {
    if (response.ok) {
      return response.json()
    }
  }).then((categories) => {
                              let categoriesHeader = document.createElement('h2')
                              categoriesHeader.appendChild(document.createTextNode('Categories'))
                              let categoriesList = document.createElement('ul')
                              //instead of explicitly getting the data, we need to get it from the server
                              categoriesList.setAttribute('id', 'categories')
                              categories.forEach(category => {
                                let listItem = document.createElement('li')
                                let listItemHeader = document.createElement('h3')
                                let listItemLink = document.createElement('a')
                                listItemLink.setAttribute('href', '/category_' + category.id + '.html')
                                listItemLink.appendChild(document.createTextNode(category.name))
                                listItemHeader.appendChild(listItemLink)
                                listItem.appendChild(listItemHeader)
                                categoriesList.appendChild(listItem)
                              })
                              let main = document.querySelector('main')
                              while (main.hasChildNodes()) {
                                main.removeChild(main.lastChild);
                              }
                              main.appendChild(categoriesHeader)
                              main.appendChild(categoriesList)
                          })

 }

function displayManufacturers(event) {
  event.preventDefault()
  fetch('/manufacturers').then((response) => {
    if (response.ok) {
      return response.json()
    }
  }).then((manufacturers) => {
                            let manufacturersHeader = document.createElement('h2')
                            manufacturersHeader.appendChild(document.createTextNode('Manufacturers'))
                            let manufacturersList = document.createElement('ul')
                            manufacturersList.setAttribute('id', 'manufacturers')
                            manufacturers.forEach(manufacturer => {
                            let listItem = document.createElement('li')
                            let listItemHeader = document.createElement('h3')
                            let listItemLink = document.createElement('a')
                            listItemLink.setAttribute('href', '/manufacturer_' + manufacturer.id + '.html')
                            listItemLink.appendChild(document.createTextNode(manufacturer.name))
                            listItemHeader.appendChild(listItemLink)
                            listItem.appendChild(listItemHeader)
                            manufacturersList.appendChild(listItem)
                            })
                          let main = document.querySelector('main')
                          while (main.hasChildNodes()) {
                            main.removeChild(main.lastChild);
                          }
                          main.appendChild(manufacturersHeader)
                          main.appendChild(manufacturersList)
                      })

  
}
