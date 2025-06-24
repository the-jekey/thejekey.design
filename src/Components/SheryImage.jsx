import React, { useEffect } from "react";

const SheryImage = () => {
       useEffect(() => {
              const interval = setInterval(() => {
                     if (window?.Shery && document.querySelector(".img")) {
                            // INIT image effect only once Shery is loaded
                            window.Shery.imageEffect(".img", {
                                   style: 2, // Style number
                                   debug: true, // Optional debug panel
                                   config: {}, // Add custom config if needed
                                   preset: "./presets/wigglewobble.json", // Must be publicly accessible
                            });
                            clearInterval(interval); // prevent reinitializing
                     }
              }, 100); // Retry every 100ms until Shery is available

              return () => clearInterval(interval);
       }, []);

       return (
              <div className="flex items-center">
                     <img
                            className="img w-64 h-auto object-cover"
                            src="https://images.unsplash.com/photo-1746479940715-9ca0390b588d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D"
                            alt="Shery Effect"

                     />
              </div>
       );
};

export default SheryImage;
