import React from 'react';
import Lottie from 'react-lottie';
import styled from "styled-components"
import animationData from './lottie_config/LottieLoader.json';

export const LottieLoader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={'100'}
        />
      </div>
    );
  }