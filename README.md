*****  Picture Search Device *****

- Responsive for different devices

Demo link: https://stevenliao123.github.io/picture-search

# The structure of the project:
    Technical:
        - HTML+CSS for building up the UI of the project 
        - antd for CSS framework
        - ReactJS + Javascript for building the logic-side of the project and propTypes is used to check the type
        - Redux & react-redux for state management

    File Structure:
        - app
            - api: api requests file
            - config: save the object to set up the default settings
            - FavouristList: the presentation layer of the favourist list
            - Gallery: the presentation layer of the gallery
            - redux: the management system for managing the state
            - SearchArea
                - SearchByLocation: search the pictures by input the location, also add the location
                - SearchByCoordinate: search the pictures by input the latitude and longtitude
            - utils: the file to storage data into local storage (different to session storage)
       
# The instruction to run the app
    - git pull the project from the Github
    - cd the project
    - npm install
    - npm run start          

# Resources for soling problems
    - Used 'stackoverflow' to trigger the engine of my brain when I have some technical problems (Do not copy any codes from the site)
    - Used 'Postman' to test the API 

# Manual tests
    - Test the search by coordinate works
    - Test the search by location works
    - Test the gallery works
    - Test the favourist list works
       