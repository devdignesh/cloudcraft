# CloudCraft

CloudCraft is a modern and user-friendly weather application that provides real-time weather updates for cities worldwide.

## Features

- **Framework**: [Next.js](https://nextjs.org/) 14 App Router
- **Weather Data** : [OpenWeatherMap](https://openweathermap.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) instead of props
- **Persistent Storage**: [Redux Persist](https://www.npmjs.com/package/redux-persist)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  - **Components**: [shadcn/ui](https://ui.shadcn.com/)
  - **Primitives**: [Radix UI](https://radix-ui.com/) 
- **API calls**: [Axios](https://axios-http.com/docs/intro)
- **Hotkeys**: [React Hotkeys Hook](https://www.npmjs.com/package/react-hotkeys-hook) for theme switching (Shortcut: T)
- **Deployment**: [Vercel](https://vercel.com/)  

## Running Locally

1. Clone the repository and install the dependencies

```bash
git clone https://github.com/devdignesh/nextjs14-weather-app.git
npm install
```

2. Create the `.env` and update the variables.

```bash
OPEN_WEATHER_API_KEY=Your_API_Key
```

3. Start the development server

```bash
npm run dev
```

## Contributing
Ongoing improvements :
- Error handling
- City recommendations
- Location maps with weather conditions
Contributions are welcome! Feel free to open issues, submit pull requests, or suggest new features.

