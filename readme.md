- What is GraphQL
  GraphQL is a new API standard designed and developed by Facebook. It is an open-source server-side technology that is now maintained by a large community of companies and individuals worldwide. It is also an execution engine that works as a data query language and used to fetch declarative data.
  GraphQL was initially developed by Facebook as an internal solution for their mobile apps. It was designed to optimize RESTful API calls and provide a flexible, robust, and efficient alternative to REST. It is not a replacement for REST. It is an alternative to writing APIs using REST

- What are the reasons behind using GraphQL while we already had an REST API?
  we already had an API called REST for data communication, which follows a clear and well-structured resource-oriented approach. It also provides some great ideas such as stateless servers, structured access to resources, etc. But, REST is not so flexible to cope up with the rapidly changing requirements of the clients. In that case, when the data gets more complex, the routes get longer. Sometimes, it is challenging to fetch the data with a single request. That's why Facebook takes a step to develop a new API technology named GraphQL to cope up with the REST's limitations.

- Benefits Over REST

  - There is only one endpoint in GraphQL, but REST has multiple endpoints. That's why GraphQL is more cost-effective than REST. You don't have to use your resources for various endpoints.
  - In REST API, you have to use multiple requests to retrieve a complex data-set, but in GraphQL, you can execute a complex query easily in just a single request.
  - You can change the request data format in GraphQL, but it is not possible to do the same in REST.
  - The development speed in GraphQL is faster than REST.
  - GraphQL provides high consistency across all platforms, while In REST, it is hard to get consistency across all platforms.

- Technical Terms in GraphQL
    - Apollo
        - Apollo is a platform for the implementation of GraphQL. As we know that GraphQL is a query language, so in order to use this query language easily, we need a platform, Apollo provides that platform.
      Apollo provides two open-sourced libraries to create client and server. Here, the client is used to fetch data from a GraphQL server, and the server is used to create an API for GraphQL client.

    - Mutation 
        - Mutation is one of the most important operations in GraphQL. It is used for write operation when you want to add delete and edit data.
    - Subscription
        - The subscription is used for listening for any data changes. The server sends a notification message to the client after any data changes, if the client is subscribed to that event. 
    - Query 
        - A GraphQL query is used to read data. It is similar to the GET request we use in REST APIs. The GraphQL queries are used to retrieve data from the GraphQL server.
    - Fields 
        - The keys of an object that are used in the GraphQL query are known as Fields.
    - object types 
        - The resources that are accessed by a client is called Objects. Objects can contain a list of GraphQL fields.
    - Interface 
        - An interface is used to list down the common fields of a GraphQL object. Other objects can use this interface to inherit properties.
    - union 
        - sometimes we have to represent multiple objects, that's why the union is used. The user can define more than one type as return type using a union.
    - Enums 
        - The enum or enumeration type in GraphQL is a special kind of scalar used to define a type, including a list of allowed values.
    - Resolver 
        -  A resolver is used to handle queries and produce a response to the GraphQL query.
    - Arguments
        - The arguments are used in GraphQL Queries and Fields when we want to request specific data.
    - more can be found at docs in link below.
        - https://graphql.org/learn/
    
    ![alt text](https://github.com/nikhil-autotech/GraphQL-Boilerplate/blob/main/diff.png?raw=true)
