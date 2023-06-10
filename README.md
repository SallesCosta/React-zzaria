# Pizza Ordering Page

This is a web application for ordering pizzas. The page is available in multiple languages including English, Spanish, French, Italian, and Portuguese.

## Technologies Used

- Vite
- React
- TypeScript
- Firebase
- Chakra UI
- Jest
- React Testing Library

## Features

- **Pizza Ordering**: Users can browse through a menu of pizzas and place orders with customization options.
- **Multi-Language Support**: The page is available in English, Spanish, French, Italian, and Portuguese, allowing users to select their preferred language.
- **Authentication**: Users can create accounts and log in to track their orders and access personalized features.
- **Real-Time Updates**: Users can receive real-time updates on the status of their orders.
- **Responsive Design**: The application is designed to provide an optimal user experience on both desktop and mobile devices.
- **Testing**: The codebase is thoroughly tested using Jest and React Testing Library to ensure reliability and maintainability.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `yarn`
3. Set up Firebase:
   - Create a Firebase project and enable the necessary authentication and real-time database features.
   - Obtain the Firebase configuration object and update the relevant files with your Firebase credentials.
4. Start the development server: `yarn dev`
5. Open your browser and visit `http://localhost:3000` to view the application.

## Folder Structure

The project structure is organized as follows:

```
├── public
│   └── index.html
├── src
│   ├── contexts
│   │   ├── authContext.tsx
│   │   ├── langContext.tsx
│   │   └── orderContext.tsx
│   ├── helpers
│   │   ├── mask.ts
│   │   ├── providers.tx
│   │   ├── routes.tx
│   │   └── ...
│   ├── lang
│   │   ├── langSource.json
│   ├── pages
│   │   ├── checkoutPage.tsx
│   │   ├── choosePizzaFlavours.tsx
│   │   ├── loginPage.tsx
│   │   └── ...
│   │   ├── components
│   |   │   ├── footer.tsx
│   │   |   ├── formAdress.tsx
│   │   |   ├── orderList.tsx
│   |   |   └── ...
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
└── ...
```

## Testing

The project includes comprehensive tests to ensure the quality and stability of the application. To run the tests, use the following command:

```bash
yarn test
```

## Deployment

To deploy the application to a live server, follow these steps:

1. Build the project: `yarn build`
2. Upload the contents of the `dist` directory to your hosting provider.

## Contributions

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for choosing our Pizza Ordering Page! We hope you enjoy the application. If you have any questions, feel free to contact us.
