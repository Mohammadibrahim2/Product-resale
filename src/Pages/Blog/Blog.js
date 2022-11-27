// import React from "react";

// const Blog = () => {

//     return (
//         <div className="bg-white">
//             <h1 className="text-5xl text-orange-400 font-semibold mb-5">Some  question</h1>
//             <div className="bg-white text-black text-left px-5 text-2xl">
//                 <h2 className="text-4xl font-semibold ">1.What are the different ways to manage a state in a React application?</h2>
//                 <p className="text-2xl my-4">In React apps, there are at least four ways to handle the state. Let us briefly explore a few of them in this part.</p>
//                 <p><span className="font-bold text-3xl">URL</span></p>
//                 <p>We can use URL to store some data e.g.</p>
//                 <ul> <li>1.The id of the current item, being viewed</li>
//                     <li>2.Filter parameters</li>
//                     <li>3.Pagination offset and limit</li>
//                     <li>4.Sorting data</li></ul>
//                 <p>Keeping such data in the URL allows users to share deep links with others.
//                     It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync.
//                     The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings chang
//                     React Router is a great tool to handle routes and manage the params.We do not need to store the id in a state or pass it as props to the ProductDetails component instead, it can be fetched using useParams().</p>

//                 <p><span className="font-bold text-3xl">Web Storage</span></p>
//                 <p>The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</p><br />

//                 <p>Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.</p>
//                 <p>We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.

//                     Here is an example of saving user preferences locally in the browser or even persist the complete state for one or more of our components</p>

//                 <p><span className="font-bold text-3xl">Lifted State</span></p>
//                 <p>The Third option is to define the state in the parent component.
//                     Often, the same state is used across multiple components. In those cases,
//                     it is useful to lift the state to a common parent. The lifting state is a two‑step process.
//                     First, we declare the state in a common parent component, and then we pass the state
//                     down to child components via props. This pattern should be considered any time a few
//                     related components need to use the same state. The lifting state avoids duplicating
//                     states in multiple components. It helps to assure that our components all consistently
//                     reflect the same state</p>
//                 <p><span className="font-bold text-3xl">Derived State</span></p>
//                 <p>The Fourth option is to compute the new state based on the available state and we do not
//                     need to declare a state at all. If there are existing values that can be composed to
//                     give us the information we need, then we can calculate that information on each render
//                     instead of storing it. Some examples include calling .length on an array to determine
//                     the number of records instead of storing a separate numItems variable in the state or
//                     deriving an errorsExist boolean by checking if the errors array is empty.</p><br />



//             </div>
//             <div className="bg-white text-black text-left px-5 text-2xl ">
//                 <h2 className="text-4xl font-semibold my-3 ">2.How does prototypical inheritance work?</h2>
//                 <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.

//                     Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes,
//                     I do not want to go over those issues. See details here</p>
//                 <p>So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
//             </div>
//             <div className="bg-white text-black text-left px-5 text-2xl ">
//                 <h2 className="text-4xl font-semibold my-3 ">3. What is a unit test? Why should we write unit tests?</h2>
//                 <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p><br />
//                 <p>The key is: when you write test you take the perspective of the one that will consume your code. It forces you to have an holistic approach of the behavior to implement. This way ambiguities you get from requirements become obvious and are immediately taken account when code is written the first time.</p>
//             </div>

//             <div className="bg-white text-black text-left px-5 text-2xl my-5 ">
//                 <h2 className="text-4xl font-semibold my-3 ">4.React vs. Angular vs. Vue?</h2>
//                 <div className="flex lg:flex-row flex-col items-center">
//                     <img src="https://reactjs.org/logo-og.png"className="w-80"></img>
//                     <p  className="ml-3">React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.
//                         Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.</p>

//                 </div>
//                 <div className="flex lg:flex-row flex-col items-center ">
//                     <img src="https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36"className="w-80"></img>
//                     <p className="ml-3">Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.</p>
//                 </div>
//                 <div className="flex lg:flex-row flex-col items-center">
//                     <img src="https://kinsta.com/wp-content/uploads/2022/03/what-is-vue-3.png" className="w-80"></img>
//                     <p  className="ml-3">Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.</p>
//                 </div>
                
//             </div>




//         </div>
//     )
// }
// export default Blog