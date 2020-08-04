# Company Site using [Dynamic Zones](https://strapi.io/blog/release-beta-18-dynamic-zones) built with Strapi 

This application helps you get started building a company website with modular content thanks to Dynamic Zones. 

That means you can make changes and add components in your Strapi backend without having to change your frontend code. 
It is built with Nuxt and Strapi. Feel free to fork, edit and customise it for your own use.

![Screenshot](https://github.com/malgamves/strapi-dynamic-zones-company-site/blob/master/screenshot.png)

## Features
- Minimal design 
- Page prefetching
- GraphQL first approach

## Content Model
- `Title` : Text
- `Description` : Text
- `Published` : Date
- `pageZone` : Dynamic Zone
  - `Quote` : Component
    - `quote` : Text 
    - `quoter` : Text 
  - `Image` : Component
    - `caption` : Text 
    - `image` : Media 
  - `RichText` : Component
    - `richText` : richText 


## In the works
- Fixing Navbar on smaller screens

## Pages
- A home page :`/`
- An about us page :`/about`
- A team page :`/team`
- A testimonials page :`/testimonials`

## Getting Started

To get started clone the repo
```bash
git clone https://github.com/malgamves/strapi-dynamic-zones-company-site.git
cd strapi-dynamic-zones-company-site
```

The project has two folders `frontend` for your Nuxt frontend and `backend` for your Strapi backend.


### Frontend
The frontend is built with Nuxt. This sets up your frontend.
```bash
cd frontend

yarn install
```

Then run `yarn dev` to start your frontend server.

### Backend
The backend is built with Strapi. This sets up your backend.
```bash
cd backend

yarn install
```

Then run `yarn develop` to start your backend server.


## Deployment 

You can deploy your frontend by following the Nuxt [deployment guide](https://nuxtjs.org/guide/commands/#production-deployment).

For your backend, Strapi has numerous options in it's [deployment guide](https://strapi.io/documentation/3.0.0-beta.x/getting-started/deployment.html).


## Contributing

Feel free to send over a PR for any changes you think should be included.
