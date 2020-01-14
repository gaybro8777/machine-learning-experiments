import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import type { Node } from 'react';
import Snack from './Snack';
import throttle from 'lodash/throttle';

const defaultMaxWidth = 500;
const defaultMaxHeight = 500;
const defaultVideoFrameRate = 30;
const defaultFrameThrottling = 1000;
const defaultFacingMode = 'environment';

const defaultProps = {
  onVideoFrame: null,
  maxWidth: defaultMaxWidth,
  maxHeight: defaultMaxHeight,
  videoFrameRate: defaultVideoFrameRate,
  frameThrottling: defaultFrameThrottling,
  facingMode: defaultFacingMode,
};

type CameraStreamProps = {
  width: number,
  height: number,
  maxWidth?: number,
  maxHeight?: number,
  facingMode?: string,
  videoFrameRate?: number,
  frameThrottling?: number,
  onVideoFrame?: ?() => void,
};

const CameraStream = (props: CameraStreamProps): Node => {
  const {
    width,
    height,
    onVideoFrame,
    maxWidth = defaultMaxWidth,
    maxHeight = defaultMaxHeight,
    facingMode,
    videoFrameRate,
    frameThrottling,
  } = props;

  const videoRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (!videoRef.current) {
      return () => {};
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setErrorMessage('Camera access is not supported by your browser');
      return () => {};
    }

    let localStream = null;
    let localAnimationRequestID = null;

    const onFrame = () => {
      if (!onVideoFrame) {
        return;
      }
      localAnimationRequestID = requestAnimationFrame(() => {
        onVideoFrame();
        throttledOnFrame();
      });
    };

    const throttledOnFrame = throttle(
      onFrame,
      frameThrottling,
      {
        leading: false,
        trailing: true,
      },
    );

    const userMediaConstraints = {
      video: {
        width: { ideal: width },
        height: { ideal: height },
        facingMode: { ideal: facingMode },
        frameRate: { ideal: videoFrameRate },
      },
      audio: false,
    };

    navigator.mediaDevices
      .getUserMedia(userMediaConstraints)
      .then((stream: MediaStream) => {
        if (!videoRef.current) {
          return;
        }
        localStream = stream;
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          throttledOnFrame();
        };
      })
      .catch((e) => {
        setErrorMessage('Video cannot be started');
      });

    return () => {
      // Stop animation frames.
      throttledOnFrame.cancel();
      if (localAnimationRequestID) {
        cancelAnimationFrame(localAnimationRequestID);
      }
      // Stop camera access.
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [
    width,
    height,
    facingMode,
    onVideoFrame,
    videoFrameRate,
    frameThrottling,
  ]);

  return (
    <>
      <video
        playsInline
        autoPlay
        muted
        ref={videoRef}
        width={Math.min(width, maxWidth)}
        height={Math.min(height, maxHeight)}
        style={videoStyle}
      />
      <Snack severity="error" message={errorMessage} />
    </>
  );
};

CameraStream.defaultProps = defaultProps;

const videoStyle = {};

export default CameraStream;