# SOAP Lookup Project

## Summary
1. [Introduction to SOAP](#introduction-to-soap)  
2. [Requirements](#requirements)  
3. [Installation](#installation)  
4. [How It Works](#how-it-works)
5. [Project CEP Overview](#project-cep-overview)  

---

## 1. Introduction to SOAP

**SOAP** (originally *Simple Object Access Protocol*) is a messaging protocol specification used for structured information exchange in web services using XML over application-level protocols like HTTP, and sometimes SMTP :contentReference[oaicite:0]{index=0}.

A SOAP message typically comprises:
- **Envelope**: the root element that defines the structure of the message :contentReference[oaicite:1]{index=1}.  
- **Header**: an optional part containing metadata like authentication or routing :contentReference[oaicite:2]{index=2}.  
- **Body**: the mandatory section containing the payload (e.g., procedure call or response ) :contentReference[oaicite:3]{index=3}.  
- **Fault**: an optional part within the Body for error handling :contentReference[oaicite:4]{index=4}.

**Key characteristics of SOAP**:
- **Extensibility**: supports extensions like WS‑Security and WS‑Addressing :contentReference[oaicite:5]{index=5}.   
- **Protocol-neutral**: can operate over HTTP, SMTP, TCP, UDP, among others :contentReference[oaicite:6]{index=6}.  
- **Language- and platform-independent**: based on XML, which is widely supported :contentReference[oaicite:7]{index=7}.  
- **Built-in error handling**: SOAP Fault mechanism allows standardized error reporting :contentReference[oaicite:8]{index=8}.

**Comparison with REST**: While SOAP is a well-defined protocol, REST is an architectural style built on HTTP and often uses JSON. REST tends to be simpler and lighter, whereas SOAP offers strong typing, formal contracts via WSDL, and better support for enterprise features like security and transactions :contentReference[oaicite:9]{index=9}.

---

## 2. Requirements

- Node.js (version 12+)
- npm (Node Package Manager)
- The `soap` package (`npm install soap`)
- The `express` package (`npm install express`)
- Internet connectivity

---

## 3. Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install soap
npm install express
```

---
## 4. Project CEP Overview

This project demonstrates how to call a SOAP web service — specifically the Brazilian postal service (*Correios*) — to look up address information by CEP (postal code). It uses:
- **Node.js**
- The `soap` npm package
- The Correios SOAP WSDL endpoint
- A `consultaCEP` request to query the CEP
- Console output for results or errors


---
## 5. Project Serve Overview

This project creates a simple SOAP-based web service for a basic calculator that can perform **addition** and **multiplication**. The service is built using **Express.js** and the `soap` npm package to expose SOAP methods through a WSDL (Web Service Description Language).

The two primary functions exposed by the SOAP service are:
- **somar**: Adds two numbers.
- **multiplicar**: Multiplies two numbers.

The service listens on port `8001` and serves the WSDL file for clients to consume.


### How it works
This service is built using the express framework. The SOAP functionality is provided by the soap npm package. The WSDL (wscalc1.wsdl) is loaded into the service, and the service exposes the following methods:

somar: Adds two numbers (a and b) and returns the sum.

multiplicar: Multiplies two numbers (a and b) and returns the result.

The service listens for SOAP requests at /wscalc1 and uses the wscalc1.wsdl to describe the available operations.


### WSDL Explanation

The wscalc1.wsdl file is a Web Service Description Language (WSDL) document that describes the operations exposed by the service. It defines the structure of SOAP messages, including:

Available operations (somar, multiplicar)

Input parameters (a, b)

Output elements (sum or product result)

The WSDL allows clients to know what operations are available and how to format the SOAP request/response.

---


# REST Lookup Project

## Summary

1. [Introduction to REST](#introduction-to-rest)  
2. [Requirements](#requirements)  
3. [Installation](#installation)  
4. [How It Works](#hot-it-works)  
5. [Project REST Overview](#project-rest-overview)  



## 1. Introduction to REST

REST (Representational State Transfer) is an architectural style for designing networked applications. It leverages standard HTTP methods (GET, POST, PUT, DELETE) and is often used to build web APIs that are lightweight, scalable, and stateless.

A RESTful API typically follows these principles:

**Stateless:** Each request contains all the information needed; the server does not retain session information.

**Client-server architecture:** The client and server are independent and communicate over a uniform interface.

**Cacheable:** Responses can be cached to improve performance.

**Uniform interface:** Consistent resource identification using URIs and standard HTTP verbs.

**Layered system:** The architecture can be composed of hierarchical layers (e.g., load balancers, proxies).

**REST vs. SOAP:**

- REST is simpler and more lightweight compared to SOAP.

- REST commonly uses JSON for data exchange, while SOAP relies on XML.

- REST does not require a strict contract (like WSDL in SOAP).

- SOAP is preferred in scenarios needing strict security, formal contracts, or complex operations.

## 2. Requirements

- Node.js (version 12+)

- npm (Node Package Manager)

- The express package (npm install express)

- The cors package (npm install cors)

- Internet connectivity

## 3. Installation
```
git clone <repository-url>
cd <project-folder>
npm install express
npm install cors
```

## 4. How It Works

This project sets up a basic REST API using Node.js and Express. It defines routes for basic CRUD operations on a resource called sequence.

### Endpoints

| Method | Route            | Description            |
|--------|------------------|------------------------|
| GET    | `/sequence`      | Get all sequences      |
| GET    | `/sequence/:id`  | Get sequence by ID     |
| POST   | `/sequence`      | Create a new sequence  |
| PUT    | `/sequence`      | Update a sequence      |
| DELETE | `/sequence/:id`  |


POST /sequence <br>
Response: 201 Created — "route POST!"

PUT /sequence <br>
Body: { "id": 123 } <br>
Response: 201 Created — "route PUT with ID! --> 123"

DELETE /sequence/123 <br>
Response: 200 OK — "route DELETE with ID! --> 123"

GET /sequence <br>
Response: 200 OK — "route GET! :)"

GET /sequence/123 <br>
Response: 200 OK — "route GET with ID! 123"

5. Project REST Overview

```
project-root/
│
├── src/
│   └── controllers/
│       └── sequenceController.js   # Handles route logic
│   └── routes/
│       ├── index.js                # Loads routes
│       └── sequenceRoute.js        # Defines endpoints
│
├── server.js                       # Main entry point
```

### Main Components

Express Server (server.js)
Initializes the server, configures middleware, and loads routes.

Routing (sequenceRoute.js)
Defines endpoints for the sequence resource and maps HTTP methods to controller functions.

Controller (sequenceController.js)
Contains logic for handling requests and sending appropriate responses.