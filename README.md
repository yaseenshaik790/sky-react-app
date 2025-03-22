# SY REACT APP

# Parcel

- Local Server
- Dev build
- HMR => Hot module replacement (Auto page refresh)

- File Watching Algo - written in C++
- Caching - Faster builds
- Image Optimization
- Minification files
- Bundling
- Compress File
- Consistent Hashing
- Code Splitting
- Diff Bundling => App run smoothly in diff browsers and mobile webs
- Error Handling
- Diagnostics
- HTTPs
- Tree Shaking - remove unsued code
- DIff dev and prod bundles

#Food Delivery App
/\*\*\*

- Header
- - Logo
- - Nav bar
- Body
- - Search
- - Restro Cards
- -> Image
- -> Rest name
- -> Rating
- -> Delivery time
- -> Cusins
- Footer
- -Links
- -address
  \*/

# Default Export/Import

export default Componenet;
import Component from "path";

# Named Export/Import;

export Component / export const URL ="https://ajha";
import {Component} from "path"; /import {URL} from "path";

# useState [ It is hook provided by React]

- Its just normal JS function with powerful state change of component
- Whenever React variable updated React re render the application Virtual DOM

-Whenever state variables update, recat triggers a reconciaalation cycle( re-render the react component)

# Virtual DOM

- It is representation of actual DOM. React will find the find the diff between Actual DOM and Virtual Dom then it will update UI

- Reconcialation ALgo [React Fibr] - Introduced in React 16. Now we are in 18 version
- Link docu [https://github.com/acdlite/react-fiber-architecture]

# useEffect

- If anything (API Calls) called after rendering Components. This piece of code should write inside useEffect
- Whenever We Open Web browser. Loads Page -> Loads Components [UI] -> Make UI Calls -> Re render [Virtual DOM]
- useEffect called once Component rendered. It is better UX design
- If no dependency Array => useEffect called on every render
- If dependency array is empty =[] => useEffect called on initial render(just once)
- If dependency array with value => useEffect called on userLogin updated.

# Optimization Of Perfoemance

- Chunking
- Dynamic bundling
- Code SPlitting
- lazy loading
- on demand loading

# Adding CSS

- Normal CSS [Regular CSS writing]
- Sass And Sess [Bit Advance]
- component Style CSS [Advance]
- Material UI / Boostrap UI/ Chakra UI / Ant Design[Frameworks and Libraries of prebuild CSS]
- Tailwind CSS

# Tailwind CSS
