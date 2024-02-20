declare namespace mappls {
    interface MapOptions {
      lat: number;
      lng: number;
    }
  
    class Map {
      constructor(id: string, options: MapOptions);
      destroy(): void;
      // Add other methods and properties if needed
    }
  }
  