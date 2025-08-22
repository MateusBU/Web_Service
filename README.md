# SOAP CEP Lookup Project

## Summary
1. [Introduction to SOAP](#introduction-to-soap)  
2. [Project Overview](#project-overview)  
3. [Requirements](#requirements)  
4. [Installation](#installation)  
5. [How It Works](#how-it-works)  
6. [index.js File Explanation](#indexjs-file-explanation)  
7. [Running the Project](#running-the-project)  
8. [Example Output](#example-output)  
9. [Error Handling](#error-handling)  
10. [References](#references)  

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

## 2. Project Overview

This project demonstrates how to call a SOAP web service — specifically the Brazilian postal service (*Correios*) — to look up address information by CEP (postal code). It uses:
- **Node.js**
- The `soap` npm package
- The Correios SOAP WSDL endpoint
- A `consultaCEP` request to query the CEP
- Console output for results or errors

---

## 3. Requirements

- Node.js (version 12+)
- npm (Node Package Manager)
- The `soap` package (`npm install soap`)
- Internet connectivity

---

## 4. Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install soap
