import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import styles from "../style";
import { congrats } from "../assets";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "./utilities";

const CountdownClock = ({ targetDate, onCountdownFinish }) => {
  const [countdown, setCountdown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown("Countdown Finished");
        onCountdownFinish(); // Call the onCountdownFinish callback when the countdown finishes
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate, onCountdownFinish]);

  return <div>{countdown}</div>;
};

const nvCam = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };
  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
  
      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
  
      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
  
      // Make Detections
      const hand = await net.estimateHands(video);
      console.log(hand);
  
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };
  
  runHandpose();
  

 
  const now = new Date().getTime();
  const targetDate = now + 30*1000;

  const [countdownFinished, setCountdownFinished] = useState(false);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    convertToBase64(imageSrc);
  };

  const convertToBase64 = (imageSrc) => {
    fetch(imageSrc)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          sendImageToAPI(base64data);
          console.log(base64data);
        };
      })
      .catch((error) => {
        console.error("Error converting image to base64:", error);
      });
  };

  const sendImageToAPI = (base64data) => {
    // Address of API Flask
    const apiUrl = "http://127.0.0.1:6868";

    // request POST
    axios
      .post(apiUrl, { facebase64: base64data })
      .then(function (response) {
        // Handle response from API Flask
        console.log("Response from API:", response.data);
      })
      .catch(function (error) {
        // Error
        console.error("Error when calling API:", error);
      });
  };

  const handleCountdownFinish = () => {
    setCountdownFinished(true);
  };

  useEffect(() => {
    if (countdownFinished) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const img = new Image();
      img.src = congrats;
      img.onload = () => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Define different font styles for each paragraph
        const fontStyles = [
          { fontFamily: "Poppins", fontSize: 60, color: "white" },
          { fontFamily: "Poppins", fontSize: 25, color: "white" },
          { fontFamily: "Poppins", fontSize: 25, color: "white" },
          { fontFamily: "Poppins", fontSize: 25, color: "white" },
          { fontFamily: "Poppins", fontSize: 25, color: "white" },
        ];

        const textLines = [
          "Congratulations",
          "You have safely escaped from a",
          "building which is detected with fire.",
          "We will give you this certificate as a",
          "reward for your effort.",
        ];

        const lineHeight = 35; // Adjust the line height as needed
        const startY = canvas.height / 2 - (textLines.length / 2) * lineHeight;

        textLines.forEach((line, index) => {
          const y =
            index == 0 ? startY + index * 80 + 140 : 680 + index * lineHeight;
          const { fontFamily, fontSize, color } = fontStyles[index];

          console.log(startY + index * lineHeight + 260);
          const fontWeight = index === 0 ? "bold" : "normal";
          context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
          context.fillStyle = color;
          context.textAlign = "center"; // Align the text to the center
          context.textBaseline = "middle"; // Align the text vertically to the middle

          context.fillText(line, canvas.width / 2, y);
        });
        // Define the first button properties
        const button1X = 100;
        const button1Y = 870.5 + 20;
        const button1Width = 440;
        const button1Height = 70;
        const button1Color = "white";
        const button1Text = "View Certificate";
        const button1TextX = button1X + button1Width / 2;
        const button1TextY = button1Y + button1Height / 2;
        const button1CornerRadius = 10; // Adjust the corner radius as desired

        // Draw the first button
        context.fillStyle = button1Color;
        context.beginPath();
        context.moveTo(button1X + button1CornerRadius, button1Y);
        context.arcTo(
          button1X + button1Width,
          button1Y,
          button1X + button1Width,
          button1Y + button1Height,
          button1CornerRadius
        );
        context.arcTo(
          button1X + button1Width,
          button1Y + button1Height,
          button1X,
          button1Y + button1Height,
          button1CornerRadius
        );
        context.arcTo(
          button1X,
          button1Y + button1Height,
          button1X,
          button1Y,
          button1CornerRadius
        );
        context.arcTo(
          button1X,
          button1Y,
          button1X + button1Width,
          button1Y,
          button1CornerRadius
        );
        context.closePath();
        context.fill();

        // Draw the first button text
        context.font = "semi-bold 22px Poppins";
        context.fillStyle = "#FA555E";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(button1Text, button1TextX, button1TextY);

        // Define the second button properties
        const button2X = 100;
        const button2Y = 870.5 + 110;
        const button2Width = 440;
        const button2Height = 70;
        const button2Color = "red";
        const button2Text = "Back to Homepage";
        const button2TextX = button2X + button2Width / 2;
        const button2TextY = button2Y + button2Height / 2;
        const button2CornerRadius = 20; // Adjust the corner radius as desired

        // Draw the second button
        context.fillStyle = button2Color;
        context.beginPath();
        context.moveTo(button2X + button2CornerRadius, button2Y);
        context.arcTo(
          button2X + button2Width,
          button2Y,
          button2X + button2Width,
          button2Y + button2Height,
          button2CornerRadius
        );
        context.arcTo(
          button2X + button2Width,
          button2Y + button2Height,
          button2X,
          button2Y + button2Height,
          button2CornerRadius
        );
        context.arcTo(
          button2X,
          button2Y + button2Height,
          button2X,
          button2Y,
          button2CornerRadius
        );
        context.arcTo(
          button2X,
          button2Y,
          button2X + button2Width,
          button2Y,
          button2CornerRadius
        );
        context.closePath();
        context.fill();

        // Draw the second button text
        context.font = "semi-bold 22px Poppins";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(button2Text, button2TextX, button2TextY);
      };

      // Add event listener for button clicks
      const handleButtonClick = (event) => {
        const rect = canvas.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        // Check if Button 1 is clicked
        if (
          offsetX >= button1X &&
          offsetX <= button1X + button1Width &&
          offsetY >= button1Y &&
          offsetY <= button1Y + button1Height
        ) {
          // Button 1 clicked, perform actions here
          console.log("Button 1 clicked!");
        }

        // Check if Button 2 is clicked
        if (
          offsetX >= button2X &&
          offsetX <= button2X + button2Width &&
          offsetY >= button2Y &&
          offsetY <= button2Y + button2Height
        ) {
          // Button 2 clicked, perform actions here
          console.log("Button 2 clicked!");
          window.location.href = "http://localhost:5174/";
        }
      };

      canvas.addEventListener("click", handleButtonClick);

      // Clean up event listener
      return () => {
        canvas.removeEventListener("click", handleButtonClick);
      };
    }
  }, [countdownFinished]);

  return (
    <section
      id="cam"
      className={`flex-col space-y-5 ${styles.paddingY} ${styles.flexCenter}`}
    >
      {countdownFinished ? (
        <canvas ref={canvasRef} width={648} height={1116} />
      ) : (
        <>
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          </div>
          <button onClick={captureImage}>
            <div
              className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] boxed`}
            >
              <p className="font-poppins font-medium text-[15px] leading-[23.4px]">
                <span className="text-white">Capture</span>
              </p>
            </div>
          </button>
          <CountdownClock
            targetDate={targetDate}
            onCountdownFinish={handleCountdownFinish}
          />
        </>
      )}
    </section>
  );
};

export default nvCam;