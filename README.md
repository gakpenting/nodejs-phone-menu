# Basic Phone Menu using Node.js and the Nexmo Voice API

This app uses the Nexmo Voice API to demonstrate an interactive order status phone menu.

* Callers can search for orders by order ID.
* If the caller's number is found, they can get the status of their latest order.

## Prerequisites

You will need:

* At least one Nexmo Virtual Number (Phone Number)
* [nodejs](https://nodejs.org/en/) installed
* The [Nexmo CLI][cli] installed
* A public web server to host this web app like [vercel](https://vercel.com/).

## Installation

```sh
git clone https://github.com/spiritbro1/nodejs-phone-menu.git
cd nodejs-phone-menu
vercel .
```

## Deploy instantly

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/spiritbro1/nodejs-phone-menu)

## Configuration

You should have vercel cli and nexmo cli install it using npm like this:

```
npm install -g vercel@latest nexmo-cli
```

## Setup (Using Nexmo CLI)

Create the nexmo application, using the [Nexmo CLI][cli] and take note of the application universally unique identifier (UUID):

```sh
nexmo app:create demo-app --keyfile private.key http://example.com http://example.com
```

Buy numbers for calls that you would like to track. The following example buys the first available number in a given country by country code.

```sh
nexmo number:buy --country_code [YOUR_COUNTRY_CODE]
```

Link the virtual numbers to the app id with the Nexmo CLI:

```sh
nexmo link:app [NUMBER] [app-id]
```

Update the app to set the webhook urls to be your vercel domain instead of the example.com 
placeholders used at creation.

```sh
nexmo app:update ['app-id'] demo-app [your url]/answer [your url]/event
```

### Using the App

Call the virtual number to check order status over the phone. You can enter any
order ID as the system chooses a random status.

[cli]: https://github.com/Nexmo/nexmo-cli/
