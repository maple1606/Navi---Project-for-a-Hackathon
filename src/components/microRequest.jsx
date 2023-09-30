import React, { useEffect, useRef, useState } from "react";

function SoundVisualizer() {
  const canvasRef = useRef(null);
  const audioContext = useRef(null);
  const analyser = useRef(null);
  const animationFrameRef = useRef(null);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d");

    const handleAudioData = () => {
      const bufferLength = analyser.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.current.getByteFrequencyData(dataArray);

      const sum = dataArray.reduce((acc, value) => acc + value, 0);
      const average = sum / bufferLength;
      setVolume(average);

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
      const barWidth = (canvasWidth / bufferLength) * 2;
      let posX = 0;

      dataArray.forEach((value) => {
        const barHeight = (value / 255) * canvasHeight;
        const red = (volume < 70) ? 100 : 0;
        const green = (volume >= 70) ? 100 : 0;
        const blue = 0;

        const color = `rgb(${red}, ${green}, ${blue})`;
        canvasContext.fillStyle = color;

        canvasContext.fillRect(
          posX,
          canvasHeight - barHeight,
          barWidth,
          barHeight
        );
        posX += barWidth + 1;
      });

      animationFrameRef.current = requestAnimationFrame(handleAudioData);
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        audioContext.current = new AudioContext();
        const source = audioContext.current.createMediaStreamSource(stream);
        analyser.current = audioContext.current.createAnalyser();
        source.connect(analyser.current);
        handleAudioData();
      })
      .catch((error) => {
        console.log("Error accessing microphone:", error);
      });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (audioContext.current) {
        audioContext.current.close();
      }
    };
  }, []);

  const compareVolume = (targetVolume) => {
    if (volume >= targetVolume) {
      return `Good job! Let's move on to the next step`;
    } else if (volume < targetVolume) {
      return `Try to shout louder`;
    }
  };

  return (
    <div className="space-y-3">
      <canvas ref={canvasRef} width={400} height={200} />
      <div>
        <p className="text-white text-center font-poppins font-medium text-[15px] leading-[23.4px]">
          {" "}
          {compareVolume(70)}
        </p>
      </div>
    </div>
  );
}

export default SoundVisualizer;
